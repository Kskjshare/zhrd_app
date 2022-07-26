


function getEvaluationBtnLayout( v ,typeid ) {
	
	
		
	var layout="";
	var evaluationState = parseInt( v.evaluationState ) ;
	console.log("______________  v.id=", v.id)
	console.log("______________  typeid=", typeid)
	console.log("______________  myid=", RssUser.Data.myid )
	// RssApi.Table.List("supervision_evaluation").setLoading(true).condition(new RssDict().keyvalue(
	// 	{"evaluationId": v.id, "myid": RssUser.Data.myid ,"typeid":typeid}
	// 	).getDict()).getJson(function(json) {	
	// 		console.log("______________ json=",json)
		var showBtnEvaluation = false ;
		if ( !isEmpty( v.evaluatedids ) ) {
			var evaluatedids = v.evaluatedids +"";
			if ( evaluatedids.indexOf(RssUser.Data.myid ) != -1 ) {
				showBtnEvaluation = false ;
			}
			
		}
		if ( evaluationState == 0 ) {
			if ( v.myid == RssUser.Data.myid ) {
				layout += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a  href="#evaluationSettingLayout" class="ans" onclick="Switchevaluation('+ v.id +');"><span>打开测评</span></a>'
				+ '<a href="#ViewevaluationLayout" class="see" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';
			}
			else 
			{
				layout += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#ViewevaluationLayout" class="ans" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';
			}
			
		}
		else {
			if ( v.myid == RssUser.Data.myid ) {
				layout += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a class="ans" onclick="Switchevaluation('+v.id+');"><span>关闭测评</span></a>'
				+ '<a href="#ViewevaluationLayout" class="see" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';
			}
			else 
			{
				if ( showBtnEvaluation ){
					layout += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#evaluationLayout" class="ans" onclick="evaluation('+v.id+');"><span>我要测评</span></a><a href="#ViewevaluationLayout" class="see" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';
					
				}
				else {
					layout += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></a><a href="#ViewevaluationLayout" class="ans" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';
					
				}
			}
		}
	// })
	return layout ;
}

function evaluation( key ) {
	// console.log(" ____________ evaluation key=",key)
	$("#evaluation_id").val(key);
	$("#evaluation_typeid").val( 8 );
}

function viewevaluation ( key ) {  
	// console.log(" ____________ viewevaluation =",key)
	$("#ViewevaluationLayout_handleID").val( key );
	$("#ViewevaluationLayout_typeid").val( 8 );
	
}

$("#evaluationLayout").load(function () {
	var tablename = "supervision_inspection";
	var key = $("#evaluation_id").val();
	var typeid = $("#evaluation_typeid").val();
	if ( !isEmpty( $("#evaluation_tablename").val() ) ) {
		tablename = $("#evaluation_tablename").val() ;
	}
	
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict().keyvalue({"id": key }).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			$("#evaluationLayout h3").html(v.title);
			var shijian = new Date(parseInt(v.shijian) * 1000)
									.toString("yyyy-MM-dd");
			$("#evaluation_company").text( v.organizationName );
			$("#evaluation_initiator").text( v.initiator );
			$("#evaluation_shijian").text( shijian );
			
										
		})
		
		// $("#evaluationLayout .evaluate").off().click(function() {
			//var key = $(this).parent().attr("id");
			$("#evaluationLayout .normalbutton").off().click(function() {
				var satisfied = $("#evaluationLayout .marginb .form input:radio:checked").val();
				var opinion = $("#evaluationLayout textarea").val();
				
				var k1 = {
					"title": json[0].title,
					"evaluationId": key,
					"myid": RssUser.Data.myid,
					"opinion": opinion,
					"evaluationResult": satisfied,
					"name": RssUser.Data.realname,
					"typeid": typeid,
				}
				console.log(k1)
				RssApi.Edit("supervision_evaluation").setLoading(true).keyvalue(k1).getJson(function(json) {
					if (json.id) {
						alert( "评价成功" );
					}else {
						alert("评价失败");
					}
					supervisionnav = "0";
					evaluationsystemLayoutnav = "1";
					history.go(-1);
					
				})	
				
				//写投票用户
				var evaluatedids = json[0].evaluatedids ;
				if ( parseInt( json[0].evaluationState ) == 1 ) {
					if ( isEmpty(evaluatedids) ) {
						evaluatedids = RssUser.Data.myid ;
					}
					else {
						evaluatedids += "," + RssUser.Data.myid ;
					}
				}
				else {
					evaluatedids ="";
				}
				var finishReadids = json[0].finishReadids ;
				if ( isEmpty(finishReadids) ) {
					finishReadids = RssUser.Data.myid ;
				}
				else {
					finishReadids += "," + RssUser.Data.myid ;
				}
				k1 = {
					"id": key,
					"myid": json[0].myid,
					"evaluatedids": evaluatedids,
					"finishReadids": finishReadids,
					"typeid": typeid
				}
				
				RssApi.Edit(tablename).setLoading(true).keyvalue( k1 ).getJson(function(json) {
						if (json.id) {
							// supervisionnav = "1";
						} else {
						}
						
					})
			})
		// })	
		
		
		
		
		
	})
})




$("#ViewevaluationLayout").load(function () {
	var tablename = "supervision_inspection"; //
	var key = $("#ViewevaluationLayout_handleID").val();
	var typeid = $("#ViewevaluationLayout_typeid").val();
	
	
	if ( !isEmpty( $("#ViewevaluationLayout_tablename").val() ) ) {
		tablename = $("#ViewevaluationLayout_tablename").val();
	}
	var obj = "ViewevaluationLayout";
	
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
	console.log(" ____________ ViewevaluationLayout key=",key )
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


