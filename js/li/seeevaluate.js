


$("#seeevaluate").load(function () {
	var tablename = "suggest";
	var key = $("#key_id").val();
	var lwstate = $("#lwstate_id").val();
	// var type = $("#type_id").val();
	var title = "代表评价";
	
    console.log(" ____________ seeevaluate  key =",key)
	console.log(" ____________ seeevaluate  lwstate =",lwstate)
	if ( lwstate == "1" ) {
		title = "建议满意度评价";
	}
	else {
		title = "议案满意度评价";
	}
	
	var canVote = 0 ; //0代表不可以提交
	
	//如果是是视图.必须加.getJson();。如果是表格则么有 .getJson();
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "10").condition(new RssDict().keyvalue({
		"lwstate": lwstate,
		"sortid": key
	}).getDict()).setFlushUI(function(json, append) {		
	// RssApi.Table.List(tablename).setLoading(true).condition(new RssDict().keyvalue({"id": key }).getDict()).getJson(function(json) {			
		var state = "未审核"
		var organizationName = "暂无"
		$.each(json, function(k, v) {
			
			organizationName = v.organizationName ;
			if ( v.draft == "1"){
				return "草稿"
			}
			if ( v.resume == "1" && v.examination == "2") {
				state =   "已办复";
				canVote = 1 ;
			} 
			if ( v.iscs == "1" ) {
				state =  "待复审"
			}
			if ( v.examination == "3" ) {
				return "已置回";
			}
			if ( v.examination == "2" ) {
				var state = "待交办"
				if ( handlestate == "2" || handlestate == "1" ){
					state = "待复审"
				}
			}
			
			if ( v.handlestate == "3" ) {
				var state = "待办复"
				if ( deal == "0" || handlestate == "1" ){
					state = "待交办"
				}
			}
			if ( v.handlestate == "4" ) {
				var state = "已驳回"
			}
			if ( v.isxzsc == "1" ) {
				var state = "待交办"
				if ( handlestate == "2") {
					state = "待复审"
				}
			}
			if ( v.deal == "1" && v.resume == "1") {
				state =  "已答复";
			} 
			if ( v.deal == "1" && v.resume == "0") {
				state =   "已交办";
			} 
			if ( v.examination == "2" && v.deal == "0" && v.draft == "2") {
				state =   "已审查";
			} 
			if ( v.isxzsc == "1" && v.draft == "2") {
				state =   "已办复";
				canVote = 1 ;
			} 
			
			var myid = RssUser.Data.myid ;
			if ( myid.indexOf( v.myid ) == -1 ) { //不是提出的代表
				canVote = 0 ;
			}
			
			
			
			
			var shijian = new Date(parseInt(v.shijian) * 1000)
									.toString("yyyy-MM-dd");
			$("#evaluation_company").text( v.organizationName );
			$("#process_state").text( state );
			// $("#evaluation_shijian").text( shijian );
										
		})
		
		$("#evaluation_company").text( organizationName );
		$("#process_state").text( state );
	    $('#seeevaluate h1').text( title );
		console.log(" ____________ canVote ",canVote)
		if ( canVote == 0 ) {
			
			$('#evaluation_result').show();
			$('#evaluation_edit').hide();
			$('#editArea_id').hide();
			$('#submit_button_id').hide();
		}
		else {
			$('#evaluation_result').hide();
			$('#evaluation_edit').show();
			$('#editArea_id').show();
			$('#submit_button_id').show();
			
		}
	
		//读取当前记录id
		// key = 596 ;
		var myid = RssUser.Data.myid ;
		// myid = 1448 ;
		console.log(" ____________ key key ",key)
		var result = ["未评价", "满意", "基本满意", "不满意"];
		RssApi.Table.List("opinion").setLoading(true).condition(
		new RssDict().keyvalue({"proposal": key ,"myid": myid }).getDict()).getJson(function( json1 ) {
			console.log(" ____________ key json1 ",json1)
			if ( json1.length > 0 ) {
				$('#ms_result_id').text( result[json1[0].effect] );
				$('#attitude_result_id').text( result[json1[0].effect2] );
				$('#reply_result_id').text( result[json1[0].effect3] );
				$('#result_result_id').text( result[json1[0].effect4] );
				$('#overall_result_id').text( result[json1[0].effect5] );
			}
			console.log(" ____________ aaaaa json ",json1)
			if ( json1.length != "0" ) {
				console.log(" ____________ 已测评 ",json1)
				$('#evaluate_state').text( "已测评" );
				canVote = 0 ;
			}		
			else {
				$('#evaluate_state').text( "未测评" );
				canVote = 1 ;
			}		
				
				
			if ( canVote == 0 ) {
				
				$('#evaluation_result').show();
				$('#evaluation_edit').hide();
				$('#editArea_id').hide();
				$('#submit_button_id').hide();
			}
			else {
				$('#evaluation_result').hide();
				$('#evaluation_edit').show();
				$('#editArea_id').show();
				$('#submit_button_id').show();
				
			}	
		})
		
		$("#seeevaluate .normalbutton").off().click(function() {	
			var ms = $("#seeevaluate .marginb .form input:radio:checked")
				.val();
			var td = $("#seeevaluate .marginb .form input:radio:checked")
				.val();
			var df = $("#seeevaluate .marginb .form input:radio:checked")
				.val();
			var jg = $("#seeevaluate .marginb .form input:radio:checked")
				.val();
			var zh = $("#seeevaluate .marginb .form input:radio:checked")
				.val();
				
			var opinion = $("#seeevaluate textarea").val();
			var shijian = Date.parse(new Date()) / 1000;
			RssApi.Edit("opinion").setLoading(true).keyvalue({
				"opinion": opinion,
				"proposal": key,
				"myid": RssUser.Data.myid,
				"shijian":shijian,
				"effect": ms,
				"effect2": ms,
				"effect3": ms,
				"effect4": ms,
				"effect5": ms
				}).getJson(function(jsonnn) {
					if ( jsonnn.id ){
						alert("评价成功");
						$("#seeevaluate textarea").val("");
						//location.href = "#evaluationJY";
					} else {
						alert("评价失败");
					}
					history.go(-1);
					ruzhou_refresh_flag =  0 ;	
			})
		})
		
		
	}).getJson();
})