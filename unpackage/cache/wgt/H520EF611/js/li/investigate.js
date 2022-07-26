

function getInvestigateState ( v  ) {
	var progress = "调研中";
	var prefProgress = "调研";
    var type = parseInt( v.typeid ) ;
	
	if ( v.type == 8 ) {
		prefProgress = "视察";
	}
	else if ( v.type == 5 ) {
		prefProgress = "专题询问";
	}
	
	
	var progress = "待审阅";
	if ( v.state == "1" ) {
			if ( v.leaderpreview == "1" ) { //需要预审
				progress = "待审阅";
			}else {
				progress = "待主任会议审议";
			}
		}
		else if ( v.state == "2"  ) {
			progress = "待主任会议审议";
		}
		else if ( v.state == "3"  ) {
			if ( v.leaderpreview == "1" ) { 
				progress = prefProgress + "方案审议中"; 
			}else {
				progress = prefProgress + "中";
			 }  
		   
		}
		else if ( v.state == "4"  ) {
			if ( v.leaderpreview == "1" ) { //需要预审
				progress = prefProgress + "报告和交办意见待审议"; //待主任会议审议
				// progress = "调研报告和交办主任会审议意见中";
			}else {
				progress = prefProgress + "中";
				
			}    
		 
		}
		else if ( v.state == "5"  ) {
			if ( v.needsubmitmeeting == "2" ) { 
				progress = "不需要提交主任会议";
			}
			else {
				 progress = prefProgress + "报告和交办意见审议中"; //报告和交办意见主任会审议中
			}
		}
		else if ( v.state == "6"  ) {
			progress = "待交办";
		}
		else if ( v.state == "7"  ) {
			progress = "承办单位办理中";
		}
		
		else {
			progress = prefProgress + "已完成";
		}
		return "办理进度: " + progress ;
}

//我的调研方案
$("#myresearch").load(function() {
console.log("_________________ investigate.js myresearch enty")
	$("#myresearch nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("myresearch") == "-1") {
		$("#myresearch ul li").eq(0).siblings().remove();
		arry.push("myresearch")
		} else {
		$("#myresearch ul li").remove();
		}
		if ($(this).index() == "0") {			
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
				"myid": RssUser.Data.myid,
				"typeid": "9"
				}).getDict()).setFlushUI(function(json, append) {
				
				if (json.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}	
				
				
				
				
				
				
				if ( json.length > 0 ) {
					RssApi.Table.List("user").setLoading(true).condition( new RssDict().keyvalue({
						"myid": json[0].myid,
						}).getDict()).setFlushUI(function(data, append) {
							
						
							
						for ( var i = 0 ; i < json.length; i ++ ) {
							$("#mstate").val( json[i].state );
							json[i].avatar = data[0].avatar;
							
							// var state = getInvestigateState( json[i] );
							
							// json[i].state = state ;
							
							
						}					
											
						// $("#myinvesitgation ul").mapview(json, {
						// 	"shijian": function(val) {
						// 		return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
						// 	},
						// }, append)	
						
						$.each(json, async function(k, v) {
							
							fillInvestigateList ( v , "myresearch" );				 
						})	
						
						
						// $("#aaaahead").mapview(data);
					}).getJson();	
				}
				
				
						
			}).getJson();
		} // 0
		else {
			// console.log("____________ index = 1  ") ;
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
				// "myid": RssUser.Data.myid,
				"typeid": "9"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						if ( isparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
					if (json.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					
					if (json.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}	
				
					$.each(json, async function(k, v) {
						
						fillInvestigateList ( v , "myresearch" );				 
					})					
			}).getJson();
		}
	})
	
	if (investigatenav == "1") {
		$("#myresearch nav>a").eq(0).click();
		investigatenav = "0";
	}
	
	
	
})



function fillInvestigateList( v , Obj ) {
	
	var mstate = parseInt( v.state );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getprogressState( v ) ;
	var initiator = "提出者: " + v.initiator ;
	var avatar = v.avatar ;
	if ( "undefined".indexOf(avatar) != -1 ) {
		avatar = global_ip + "upfile/avatar.png" ;
	}
	else {
		avatar = global_ip + "upfile/" + avatar ;
	}
	var liStr = '<li><img class="headimage" src="' + avatar +'" bindkeys="avatar" ' + 
	
	// var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + state  + '</p>'+
		'<div class="lifoot" id=' + v.id +
		'>'
	
	// var liStr = '<li><div class="liico"><span >' + v.id +
	// 	'</span></div><h1>' + v.title +
	// 	'</h1><p>' + initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + state  + '</p>'+
	// 	// '</h1><p>' + initiator + '</p>' + '<p>'  + state  + '</p>'+
	// 	'<div class="lifoot" id=' + v.id +
	// 	// ' id=' + v.id +
	// 	'>'
		console.log(" ___________________ mstate=",mstate)
		console.log(" ___________________ Obj=",Obj)
		if ( Obj =="myresearch" ) {
			typeid = 9 ;
			if ( mstate == 2 ) {
				liStr += '<a href="#seemyresearch" class="see" onclick="seeInvestigationSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';	
			}
			else {
			 liStr += '<a href="#seemyresearch" class="see" onclick="seeInvestigationSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';	
			 // liStr += '<a href="#seemyresearch" class="see" onclick="seeInvestigationSolutionDetail('+v.id+');"><span>查看详情</span></a></div></li>';
			
			}
		
		}
		if ( Obj =="supervision" ) {
			var LoginID = RssUser.Data.myid ;
			// if ( ismySumbitsolution ( v ) == 0 ) { //如果不是发起者
			    
			// 	liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';	
				
			// }else 
			{
				if ( mstate == 2 ){
					if ( isRoler ( v.myid ) ) {
					liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="inspectionSumbit('+v.id+');"><span>提交方案</span></a></div></li>';	
					}else {
					liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';
						
					}
				}
				else if ( mstate == 3 ){
					if ( !isRoler ( v.myid ) ) {
					liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
					liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#auditLayout" class="ans" onclick="audit_click('+v.id+');"><span>审议完成</span></a></div></li>';	
						
					}
				}
				else if ( mstate == 4 ){
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#finishsupervision" class="ans" onclick="finishSupervision('+v.id+');"><span>视察结束</span></a><a href="#commitaudit" class="see" onclick="commitAudit('+v.id+');"><span>提交审议</span></a></div></li>';	
					}
				}
				else if ( mstate == 5 ){ //视察报告和交办意见提交审议
					if ( !isRoler ( v.myid ) ) {
					liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#auditLayout" class="ans" onclick="reportAudited('+v.id+');"><span>审议完成</span></a></div></li>';	
					}
				}
				else if ( mstate == 6 ){
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#assignLayout" class="ans" onclick="assign('+v.id+');"><span>交办</span></a></div></li>';	
					}
				}
				else if ( mstate == 7 ){
					if ( isRoler ( v.organizationid) ) {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#handleLayout" class="ans" onclick="handleReport('+v.id+');"><span>主任会议汇报</span></a></div></li>';	
					}
					else {
						liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';		
					}
				}
				else if ( mstate == 8 ){
					// liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a class="ans" onclick="evaluation('+v.id+');"><span>满意度测评</span></a></div></li>';	
					var evaluationState = parseInt( v.evaluationState );
					console.log("____ evaluationState=",evaluationState)
					console.log("____ v.myid=",v.myid)
					console.log("____ llgin=",RssUser.Data.myid)
					liStr += getEvaluationBtnLayout ( v ,typeid) ;					
				}
				else {
					liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';
				}
			}
		
		}
		
		else if ( Obj == "supspecialwork" ) {
			liStr += '<a href="#seesupspecialwork" class="see" onclick="seeSpecialWorkSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';
			
		}
		liStr += '<input type="hidden" state_id='+mstate+' />'
		$(append_obj).append(liStr);
		$("#state_id").val(mstate);
}






$("#myinvesitgation").load(function() {
	$("#myinvesitgation nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("myinvesitgation") == "-1") {
		$("#myinvesitgation ul li").eq(0).siblings().remove();
		arry.push("myinvesitgation")
		} else {
		$("#myinvesitgation ul li").remove();
		}
		if ($(this).index() == "0") {			
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
				"myid": RssUser.Data.myid,
				"typeid": "9"
				}).getDict()).setFlushUI(function(json, append) {
				
				if (json.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}	
				
				if ( json.length > 0 ) {
					RssApi.Table.List("user").setLoading(true).condition( new RssDict().keyvalue({
						"myid": json[0].myid,
						}).getDict()).setFlushUI(function(data, append) {
							
						
							
						for ( var i = 0 ; i < json.length; i ++ ) {
							json[i].avatar = data[0].avatar;
							
							var state = getInvestigateState( json[i] );
							
							json[i].state = state ;
						}					
											
						// $("#myinvesitgation ul").mapview(json, {
						// 	"shijian": function(val) {
						// 		return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
						// 	},
						// }, append)	
						
						$.each(json, async function(k, v) {
							
							fillmysolutiondata ( v , "myinvesitgation" );				 
						})	
						
						
					}).getJson();	
				}
				$("#myinvesitgation .see").off().click(function() {
				})
				
				
						
			}).getJson();
		} // 0
		else {
			// console.log("____________ index = 1  ") ;
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
				// "myid": RssUser.Data.myid,
				"typeid": "9"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						if ( isparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
					if (json.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					
					if (json.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}	
				
					$("#myinvesitgation ul").mapview(json, {
						"shijian": function(val) {
							return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
						},
						
						
					}, append)				
			}).getJson();
		}
	})
	
	if (invesitgationNav == "1") {
		$("#myresearch nav>a").eq(0).click();
		invesitgationNav = "0";
	}
	
	
})


$("a[name='submitsolution']").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#solutionId").val(key);
			submit_append ( 9 );
})


$("[href='#myinvesitgation']").click(function() {
	invesitgationNav = "1";
})
