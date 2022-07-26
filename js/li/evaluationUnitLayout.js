


$("#evaluationUnitLayout").load(function () {
	var tablename = "suggest";
	var key = $("#key_id").val();
	var lwstate = $("#lwstate_id").val();
	var type = $("#type_id").val();
	var title = "办理质量测评";
	var evaluteType = 0 ; //测评类型默认单位
    console.log(" ____________ evaluationUnitLayout  key =",key)
	console.log(" ____________ evaluationUnitLayout  lwstate =",lwstate)
	console.log(" ____________ evaluationUnitLayout  type =",type)
	if ( type == "1" ) { //默认0是测评承办单位	
		if ( lwstate == "1" ) {
			title = "建议质量测评";
			$('#evaluate_title1_id').show();
			$('#evaluate_title2_id').hide();
			$('#evaluate_title3_id').hide();
		}
		else {
			title = "质量议案测评";
			$('#evaluate_title1_id').show();
			$('#evaluate_title2_id').hide();
			$('#evaluate_title3_id').hide();
		}
		evaluteType = 1 ;
	}
	else {
		$('#evaluate_title1_id').hide();
		$('#evaluate_title2_id').hide();
		$('#evaluate_title3_id').show();
	}
	
	var canVote = 0 ; //0代表不可以提交
	
	//如果是是视图.必须加.getJson();。如果是表格则么有 .getJson();
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "10").condition(new RssDict().keyvalue({
		"lwstate": lwstate,
		"sortid": key
	}).getDict()).setFlushUI(function(json, append) {		
	// RssApi.Table.List(tablename).setLoading(true).condition(new RssDict().keyvalue({"id": key }).getDict()).getJson(function(json) {			
		$.each(json, function(k, v) {
			console.log(" ____________ evaluationUnitLayout  v.realcompanyname =",v.realcompanyname)
			var state = "未审核"
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
			
			
			//如果是测评建议议案，那么不需要判断是否办复
			if ( evaluteType ==  1 ) {
				canVote = 1 ;
			}
			
			
			
			
			
			var shijian = new Date(parseInt(v.shijian) * 1000)
									.toString("yyyy-MM-dd");
			$("#evaluation_company").text( v.realcompanyname );
			$("#process_state").text( state );
			// $("#evaluation_shijian").text( shijian );
										
		})
	    $('#evaluationUnitLayout h1').text( title );
		
	
		//读取当前记录id
		// key = 596 ;
		var myid = RssUser.Data.myid ;
		// myid = 1448 ;
		console.log(" ____________ key key ",key)
		RssApi.Table.List("overall_satisfaction").setLoading(true).condition(
		new RssDict().keyvalue({"proposal": key ,"myid": myid }).getDict()).getJson(function( json1 ) {
			console.log(" ____________ aaaaa json ",json1)
			if ( json1.length != "0" ) {
				console.log(" ____________ 已测评 ",json1)
				$('#evaluate_state').text( "已测评" );
				$('.normalbutton_submit').hide();
				$('.normalbutton_grey').show();
			}		
			else {
				$('#evaluate_state').text( "未测评" );
				if ( canVote == 0 ) {
					$('.normalbutton_submit').hide();
					$('.normalbutton_grey').show();
				}
				else {
					$('.normalbutton_submit').show();
					$('.normalbutton_grey').hide();
				}
				
			}			
		})
		
		$("#evaluationUnitLayout .normalbutton_submit").off().click(function() {	
			var satisfied = $("#evaluationUnitLayout .marginb .form input:radio:checked")
				.val();
			var opinion = $("#evaluationUnitLayout textarea").val();
			var shijian = Date.parse(new Date()) / 1000;
			RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue({
				"opinion": opinion,
				"proposal": key,
				"myid": RssUser.Data.myid,
				"evaluationDone": "1",
				"particitant": "1",
				"evaluteType": evaluteType,
				"shijian":shijian,
				"evaluation": satisfied
				}).getJson(function(jsonnn) {
					if ( jsonnn.id ){
						alert("评价成功");
						$("#evaluationUnitLayout textarea").val("");
						//location.href = "#evaluationJY";
					} else {
						alert("评价失败");
					}
					history.go(-1);
					ruzhou_refresh_flag =  0 ;	
			})
		})
		
		// $("#evaluationUnitLayout .normalbutton_submit").off().click(function() {			
		// 	var satisfied = $("#evaluationUnitLayout .marginb .form input:radio:checked")
		// 		.val();
		// 	var opinion = $("#evaluationUnitLayout textarea").val();
		// 	var k1 = {
		// 		"opinion": opinion,
		// 		"proposal": key,
		// 		"myid": RssUser.Data.myid,
		// 		"evaluationDone": "1",
		// 		"particitant": "1",
		// 		"evaluteType": evaluteType,
		// 		"evaluation": satisfied
		// 	}
		// 	console.log("___________ k1=",k1)
		// 	RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue(k1)
		// 		.keyvalue({
		// 			"id": key
		// 		}).getJson(function(json) {
		// 			console.log(json)
		// 			if (json.id) {
		// 				alert("评价成功");
		// 				$("#evaluationUnitLayout textarea").val("");
		// 				//location.href = "#evaluationJY";
		// 			} else {
		// 				alert("评价失败");
		// 			}
		// 			history.go(-1);
		// 			ruzhou_refresh_flag =  0 ;
		// 		})
		
		// })
		
		
		
		
	}).getJson();
})




$("#evaluationUnitLayout1").load(function () {
	var tablename = "supervision_inspection"; //
	var key = $("#key_id").val();
	var lwstate = $("#lwstate_id").val();
	var type = $("#type_id").val();
	
	if ( !isEmpty( $("#ViewevaluationLayout_tablename").val() ) ) {
		tablename = $("#ViewevaluationLayout_tablename").val();
	}
	var obj = "evaluationUnitLayout";
	
	var satisfaction = 0 ;
	var bascisatisfaction = 0 ;
	var dissatisfaction = 0 ;
	var abstained = 0;

	var  voters = 0; //邀请的投票用户
	var  collection_cnt = 0;
	     
	    
	var satisfaction_rate = 0 ;
	var bascisatisfaction_rate = 0 ;
	var dissatisfaction_rate = 0 ;
	var abstained_rate = 0 ;
	
	var  totaltickets = 0 ; //总投票数
	console.log(" ____________ ViewevaluationLayout key_id=",key )
	console.log(" ____________ ViewevaluationLayout typeid=",typeid )
	console.log(" ____________ ViewevaluationLayout tablename=",tablename )
	
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict().keyvalue({
			"id": key,
			"typeid": typeid
		}).getDict()).getJson(function(json) {	
			
		voters = parseInt( json[0].polls ) ;
		var evaluatedids = json[0].evaluatedids ;
		if ( !isEmpty( evaluatedids ) ) {
			var evaluated = evaluatedids.split(",") ;
			totaltickets = evaluated.length ;
		}
		
		if ( voters > totaltickets ) {
			collection_cnt = voters - totaltickets ;	
		}
		
			
		var organizationName = json[0].organizationName ;
		RssApi.Table.List("supervision_evaluation").setLoading(true).condition(new RssDict().keyvalue({
				"evaluationId": key,
				"typeid": json[0].typeid
			}).getDict()).getJson(function(json1) {	
				console.log(" ____________ viewevaluation json1=",json1 )
				if ( json1.length > 0 ) {
					$.each(json1, function(k, v) {	
						
						
						
						var evaluationResult = parseInt(v.evaluationResult ) ;
						if ( evaluationResult == 1 ) {
							satisfaction ++ ;
						}
						else if ( evaluationResult == 2 ) {
							bascisatisfaction ++ ;
						}
						else if ( evaluationResult == 3 ) {
							dissatisfaction ++ ;
						}
						else if ( evaluationResult == 4 ) {
							abstained ++ ;
						}
						
						
					})
				}
				
				$("#evaluationLayout_company").text( organizationName );
				
				
				$("#evaluation_satisfation").text( satisfaction );
				if ( totaltickets > 0 ){
				satisfaction_rate = satisfaction/totaltickets;
				satisfaction_rate = satisfaction_rate*100 ;
				}
				satisfaction_rate = satisfaction_rate +"%";
				$("#evaluation_satisfation_rate").text( satisfaction_rate );
				
				
				$("#evaluation_basic_satisfation").text( bascisatisfaction );
				if ( totaltickets > 0 ){
				bascisatisfaction_rate = bascisatisfaction/totaltickets;
				bascisatisfaction_rate = bascisatisfaction_rate*100 ;
				}
				bascisatisfaction_rate = bascisatisfaction_rate +"%";
				$("#evaluation_basic_satisfation_rate").text( bascisatisfaction_rate );
				
				
				
				$("#evaluation_dissatisfaction").text( dissatisfaction );
				if ( totaltickets > 0 ){
				dissatisfaction_rate = dissatisfaction/totaltickets;
				dissatisfaction_rate = dissatisfaction_rate*100 ;
				}
				dissatisfaction_rate = dissatisfaction_rate +"%";
				$("#evaluation_dissatisfaction_rate").text( dissatisfaction_rate );
				
				
				$("#abstention").text( abstained );
				if ( totaltickets > 0 ){
				abstained_rate = abstained/totaltickets;
				abstained_rate = abstained_rate*100 ;
				}
				abstained_rate = abstained_rate +"%";
				$("#abstention_rate").text( abstained_rate );
				
				$("#evaluationtickets").text(voters);
				$("#collectiontickets").text( collection_cnt );
				
				
			})
	})
})

$("#ViewevaluationLayout .normalbutton").click(function() {
	var key = $("#evaluationLayout_handleID").val();
	console.log(" ____________ ViewevaluationLayout normalbutton key=",key);
	var handleReportenclosure = $("#ViewevaluationLayout .fj_path").text();
	
	var success = "审议完成" ;
	var fail = "审议失败" ;
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			state ++ ;
			// var parameter = {
			// 	"id": key,
			// 	"myid": v.myid,
			// 	"state": state,
			// 	"typeid": v.typeid,
			// };
			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": state,
				"typeid": v.typeid,
				}
			).getJson(function(json) {
					if (json.id) {
						alert( success );
					}else {
						alert(fail);
				}
				// location.href = "#supervision";
				supervisionnav = "1";
				history.go(-1);
				
			})	
		})
	})
})


