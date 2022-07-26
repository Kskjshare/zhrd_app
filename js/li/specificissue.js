
var mySpecificIssuenav = "0";

var SpecificIssueDonenav = "0";
var keyid = 0 ;

$("[href='#myspecificissue']").click(function() {
	mySpecificIssuenav = "1";
})
$("[href='#endsupspecific']").click(function() {
	SpecificIssueDonenav = "1";
})



//判断是否时我的方案
function ismyspecificsolution( v ){
	var result = 0 ;
	var uid = RssUser.Data.myid ;
	if ( v.myid == uid ) {
		console.log( "_________ v.myid == uid ")
		result = 1 ;
	}
	if ( !isEmpty( v.objid ) ) {
		if ( v.objid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.committeeobjid ) ) {
		if ( v.committeeobjid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.parttimember ) ) {
		if ( v.parttimember .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	
	if ( !isEmpty( v.company ) ) {
		if ( v.company .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	
	return result ;
}



function getsState ( v ) {
	var progress = "待常委会会议审议";
	var prefProgress = "特定问题调查";
	
	if ( v.initiator == 1 ) { //主任会议
		if ( v.state == "1" ) {		
			progress = "待常委会会议审议";	
		}
		else if ( v.state == "4" ) {
			progress = "调查委员会已成立";	
		}
		else if ( v.state == "5" ) {
			progress = "不同意成立调查委员会";	
		}
		else if ( v.state == "6" ) { //已经提交材料
			progress = "待提交调查报告";	
		}
		else if ( v.state == "7" ) { 
			progress = "待常委会听取审议调查报告";	
		}
		else if ( v.state == "8" ) {
			progress = "已完结";	
		}
	}
	else {
		if ( v.state == "1" ) {
			progress = "待主任会议审议";	
		}
		else if ( v.state == "4" ) {
			progress = "调查委员会已成立";	
		}
		else if ( v.state == "5" ) {
			progress = "不同意成立调查委员会";	
		}
		else if ( v.state == "6" ) { //已经提交材料
			progress = "待提交调查报告";	
		}
		else if ( v.state == "7" ) { 
			progress = "待常委会听取审议调查报告";	
		}
		else if ( v.state == "8" ) {
			progress = "已完结";	// 常委会听取审议调查报告结束
		}
	}
	
	return progress ;
}

function fillmyspecificsolutiondata( v , Obj ) {
	var mstate = parseInt( v.state );
	var typeid = 6 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getsState( v ) ;
	// var initiator = "提出者: " + v.initiator ;
	var initiator =  v.initiator ;
	// var initiator = "提出者: " + v.initiator ;
	if ( v.initiator == 1 ) {
		initiator = "提出者: 主任会议"
	}
	else {
		initiator = "提出者: 常委会成员联名"
	}
	
	var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + state  + '</p>'+
		// '</h1><p>' + initiator + '</p>' + '<p>'  + state  + '</p>'+
		'<div class="lifoot" id=' + v.id +
		' id=' + v.id +
		'>'
		// '<a href="#myresearch" class="see" onclick="seeInfo('+v.id+');"><span>查看详情</span></a><a class="ans" onclick="submitsolution('+v.id+');"><span>提交方案</span></a></div></li>';
		console.log(" ___________________ mstate=",mstate)
		console.log(" ___________________ Obj=",Obj)
		
		// if ( Obj =="myspecificissue" ) 
		{
			var LoginID = RssUser.Data.myid ;
			// if ( ismySumbitsolution ( v ) == 0 ) { //如果不是发起者
			    
			// 	liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';	
				
			// }else 
			{
				if ( mstate == 1 ) {
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#specificAudit" class="ans" onclick="meetingAudit('+v.id+');"><span>常委会审议</span></a></div></li>';	
					}
					
				}
				else if ( mstate == 2 ){
					if ( isRoler ( v.myid ) ) {
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="inspectionSumbit('+v.id+');"><span>提交方案</span></a></div></li>';	
					}else {
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a></div></li>';
						
					}
				}
				else if ( mstate == 3 ){
					if ( !isRoler ( v.myid ) ) {
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#assignLayout" class="ans" onclick="audit_click('+v.id+');"><span>审议完成</span></a></div></li>';	
						
					}
				}
				else if ( mstate == 4 ){
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#providerLayout" class="see" onclick="provideMaterial('+v.id+');"><span>提供材料</span></a></div></li>';	
					}
				}
				else if ( mstate == 5 ){ //审核不同意
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></div></li>';							
				}
				else if ( mstate == 6 ){ //提交调查报告
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#reportDocumenttLayout" class="ans" onclick="submitReportdocument('+v.id+');"><span>提交调查报告</span></a></div></li>';	
					}
				}
				else if ( mstate == 7 ){
					if ( isRoler ( v.myid) ) {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#handleDocumenttLayout" class="ans" onclick="handleReportdocument('+v.id+');"><span>听取审议调查报告</span></a></div></li>';	
					}
					else {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a></div></li>';		
					}
				}
				else if ( mstate == 8 ){
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a></div></li>';
					// liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a class="ans" onclick="evaluation('+v.id+');"><span>满意度测评</span></a></div></li>';	
					// var evaluationState = parseInt( v.evaluationState );
					// console.log("____ evaluationState=",evaluationState)
					// console.log("____ v.myid=",v.myid)
					// console.log("____ llgin=",RssUser.Data.myid)
					// liStr += getEvaluationBtnLayout ( v ,typeid) ;					
				}
				else {
					liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a></div></li>';
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#seespecificissue" class="see" onclick="seespecificissueDetail('+v.id+');"><span>查看详情</span></a><a href="#assignLayout" class="ans" onclick="assign('+v.id+');"><span>交办</span></a></div></li>';	
					}
					
				}
			}
		
		}
		
	
		liStr += '<input type="hidden" specific_state_id='+mstate+' />'
		$(append_obj).append(liStr);
		$("#specific_state_id").val(mstate);
}




function reLoadData( ) {
	$(this).addClass("sel").siblings().removeClass("sel");
	if (arry.indexOf("myspecificissue") == "-1") {
		$("#myspecificissue ul li").eq(0).siblings().remove();
		arry.push("myspecificissue")
	} else {
		$("#myspecificissue ul li").remove();
	}
	
	var k1 = {
		"myid": RssUser.Data.myid,
		"typeid": "6",
	}
	if (mySpecificIssuenav == "1" ) {
		k1 = {
			"typeid": "6"
		}
	}	
	faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid,
		"typeid": "6"
		}).getDict()).setFlushUI(function(json, append) {
			console.log(json)
			var json2 = [];
			$.each(json, function(k, v) {
				var initiator = "提出者: " + v.initiator ;
				if ( mySpecificIssuenav == "1"  ) {
					if ( isSpecificIssueparticipant ( v ) ) {
						json2.push( v );
					}
				    
				}
				else {
					json2.push( v );
				}
			})
		
			if (json2.length < 10 ) {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
		
		
			if (json2.length > 0 ) {
				$('.nosolutions').hide();
			} else {
				$('.nosolutions').show();
			}
		
			$.each(json2, async function(k, v) {
				
				fillmyspecificsolutiondata ( v , "myspecificissue" );				 
			})				
	}).getJson();
	
	
}
$("#myspecificissue").load(function() {
	console.log("_____________ load myspecificissue")
	$("#myspecificissue nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("myspecificissue") == "-1") {
		$("#myspecificissue ul li").eq(0).siblings().remove();
		arry.push("myspecificissue")
		} else {
		$("#myspecificissue ul li").remove();
		}
		
		
		if ($(this).index() == "0" ) {
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict().keyvalue({
				"myid": RssUser.Data.myid,
				"typeid": "6"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						var initiator = "提出者: " + v.initiator ;
						json2.push( v );
					})
	
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
	
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmyspecificsolutiondata ( v , "myspecificissue" );				 
					})				
			}).getJson();
		} // 0
		else {
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict().keyvalue({
				"typeid": "6"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						if ( isSpecificIssueparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
				
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmyspecificsolutiondata ( v , "myspecificissue" );				 
					})				
			}).getJson();
		}
	})
	
	if (mySpecificIssuenav == "1") {
		$("#myspecificissue nav>a").eq(0).click();
		mySpecificIssuenav = "0";
	}
	
})

function isSpecificIssueparticipant( v ){
	var result = 0 ;
	var uid = RssUser.Data.myid ;
	if ( !isEmpty( v.objid ) ) {
		if ( v.objid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.committeeobjid ) ) {
		if ( v.committeeobjid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.parttimember ) ) {
		if ( v.parttimember .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.company ) ) {
		if ( v.company .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.previewleadername ) ) {
		if ( v.previewleadername .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	return result ;
}


function seespecificissueDetail( key ) {
	var obj = "seespecificissue";
	viewSpecificIssueDetail( obj ,key );
	
	$("#seespecificissue .hisback").click(function() {
		location.href = "#seespecificissue";
	});					
}
//查看特定问题调查的具体内容
function viewSpecificIssueDetail( Obj, key ) {
	var tablename = "supervision_specific_issue";
	var fjObj_span = "#"+ Obj + " article .fj span";
	var removeObj = '#' + Obj + ' article .no1';
	var fjObj = '#' + Obj + ' article .fj';
	var fjreport_Obj = '#' + Obj + ' article .fj_report';
	var fjassign_Obj = '#' + Obj + ' article .fj_assign';
	var fjhandle_Obj = '#' + Obj + ' article .fj_handle';
	var appendObj = "#" + Obj + " article";
	var  index = 0 ;
	var writestate = 0 ;
	var schemeCaption = "特定问题调查方案: ";
	
	var catagory = "调研类别: ";
	var catagory_place = "调研地点: ";
	var catagory_time = "调研时间: ";
	
	//附件的布局
	var fj_report_layout =  '<div class="attachment fj_report"><span>'  + '<span></div>' ;
	var fj_assign_layout = '<div class="attachment fj_assign"><span>'  + '<span></div>' 
	var fj_handle_layout = '<div class="attachment fj_handle"><span>'  + '<span></div>' 
	
	$( removeObj ).remove();
	if ( "seespecificissue".indexOf( Obj ) != -1 ) {//我的调研方案
		index =  1;
		
	}
	
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {	
		var lmr = "";
		var noAttachement = 0 ;	
		var Reportenclosurename ="";
		var assignenclosurename = "";
		var Reportenclosure = "";
		var assignenclosure = "";		
		var enclosurename = "";	
		
		var handleReportenclosure = "";
		var handleReportenclosurename = "";
			
		var audit_state = "";
		var progress_state = "";
		var committemembers = ""; //常委会成员
		var objs = ""; //人大代表
		var Otherobjs = ""; //其他人员
		var companyobjs = ""; //参加单位
		var organizationName_layout ="";//承办单位
		
		var reviewclass = "" ;//类别
		//布局高度
		var layoutHeight = '<div class="divtop5">' ;
		
		$( appendObj ).mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(
						val) * 1000)
					.toString("yyyy-MM-dd");
					// .toString("yyyy-MM-dd hh:mm");
			},
			"inspecttime": function(val) {
				return inspecttime = new Date(
						parseInt(val) * 1000)
					.toString("yyyy-MM-dd");
					// .toString("yyyy-MM-dd hh:mm");
			}
			
		})
		
		$.each(json, function(k, v) {	
			
			var initiator = "主任会议";
			if ( v.initiator == 2 ) {
				initiator = "常委会会议";
			}
			attachment = v.enclosure;		
			attachmentPath =  attachment;
			var matter = v.matter;
			var department = v.department;
			var place = v.place ;
			var note = v.note ;
			reviewclass = v.reviewclass ;
			enclosurename = v.enclosurename;
			Reportenclosurename = v.Reportenclosurename;
			assignenclosurename = v.assignenclosurename;
			Reportenclosure = v.Reportenclosure;
			assignenclosure = v.assignenclosure;
			
			handleReportenclosure = v.handleReportenclosure ;
			handleReportenclosurename = v.handleReportenclosurename ;
			
			//常委会联名成员
			var cocommitteeMembers = "";
			//主任会议	
		    var directorMeeting = "";
			var directorshijian = "";
			var directormeetingnum = v.directormeetingnum ;
			if ( isEmpty( v.directormeetingnum ) ) {
				directormeetingnum = "未知";
			}
			if ( !isEmpty( v.directorshijian ) && v.initiator == 2 ) {
				directorshijian = new Date(parseInt(v.directorshijian) * 1000).toString("yyyy-MM-dd");
				directorMeeting = '</h4><h4 leixing>主任会会议时间: ' + directorshijian + '</h4>';
				directorMeeting += '</h4><h4 leixing>主任会会议届次: ' + directormeetingnum + '</h4>';
				
				cocommitteeMembers += '</h4><h4 leixing>常委会联名成员: ' + v.cocommittee + '</h4>';
			}
			
			
			//常委会会议
			var committeeMeeting = "";
			var committeeshijian = "";
			var committeemeetingnum = v.committeemeetingnum ;
			if ( isEmpty( v.committeemeetingnum ) ) {
				committeemeetingnum = "未知";
			}
			if ( !isEmpty( v.committeeshijian ) && v.initiator == 1  ) {
				committeeshijian = new Date(parseInt(v.committeeshijian) * 1000).toString("yyyy-MM-dd");
				committeeMeeting = '</h4><h4 leixing>常委会会议时间: ' + directorshijian + '</h4>';
				committeeMeeting  += '</h4><h4 leixing>常委会会议届次: ' + committeemeetingnum + '</h4>';
			}
			
			//常委会成员
			var committeememberName = v.committeememberName;
			if ( isEmpty( committeememberName ) ) {
				committeememberName = "";
			}
			//人大代表
			var delegatememberName = v.delegatememberName;
			if ( isEmpty( delegatememberName ) ) {
				delegatememberName = "";
			}
			//其他人员
			var parttimememberName = v.parttimememberName;
			if ( isEmpty( parttimememberName ) ) {
				parttimememberName = "";
			}
			
			if ( v.leaderpreview == 1 ) {
				if ( v.state == 1 )
				audit_state = '<h4 shencha2>审阅状态: 待审阅' +  '</h4>'  ;
				else 
				audit_state = '<h4 shencha2>审阅状态: 已审阅' +  '</h4>'  ;
				
				
				progress_state = '<h4 leixing>办理进度: ' +  getsState( v ) + '</h4>'  ;
				
				
			}
			else {
				progress_state = '<h4 leixing>办理进度: ' + getsState( v ) +  '</h4>'  ;
			}
			
			if ( v.state >= 1 ) {
				//显示常委会成员
				if ( !isEmpty( v.committeememberName ) ) {
					committemembers = '<h4 leixing>常委会成员: ' + committeememberName + '</h4>' 
				}
				//显示人大代表
				if ( !isEmpty( v.delegatememberName ) ) {
					objs = '<h4 leixing>人大代表: ' + delegatememberName + '</h4>' 
				}
				//显示兼职人员
				if ( !isEmpty( v.parttimememberName ) ) {
					Otherobjs = '<h4 leixing>其他人员: ' + v.parttimememberName + '</h4>' 
				}
				//显示参加单位
				if ( !isEmpty( v.companyName ) ) {
					companyobjs = '<h4 leixing>参加单位: ' + v.companyName + '</h4>' 
				}
				
				//显示承办单位
				if ( !isEmpty( v.organizationName ) ) {
					organizationName_layout = '<h4 leixing>承办单位: ' + v.organizationName + '</h4>' 
					layoutHeight = '<div class="divtop5">' ;
				}
				
				
				
			}

			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			

			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				enclosurename = "无";				
			}
			if ( isEmpty( reviewclass ) ) {
				reviewclass = "暂无";				
			}
			
			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					// '<div class="divtop2">' +
					layoutHeight + 
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					'</h3><h4 author>发起方式: ' + initiator +
					'</h4><h4 shencha2>发起时间: ' + shijian + '</h4>' +
					directorMeeting + 
					committeeMeeting + 
					cocommitteeMembers + 
					// '</h4><h4 leixing>审阅人: ' + v.previewLeaderRealName +
					audit_state + 
					// '</h4><h4 leixing>' + catagory + reviewclass +
					// '</h4><h4 shencha2>' + catagory_place + place +										 
					progress_state + 
					committemembers + 
					objs + 
					Otherobjs +
					companyobjs + 
					organizationName_layout + 
					// '<h4>参与代表: ' + v.username  + '</h4>'
					'</div>' 		
					// + '<div class="contentdivp">' + matter + '</div>' +							
					//  + '<div class="unittitle"  onclick="assign_addunit(\'unitName\');">参加单位<input class="mn" type="text" mission /><span class="span"></span></div>'
					// +'<a class="submit_send">提交</a>'			
					)
			}else {
				
					// appendHtml = '<div class="divtop2">' +
					appendHtml = layoutHeight +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +

					'</h3><h4 author>发起方式: ' + initiator +
					'</h4><h4 shencha2>发起时间: ' + shijian + '</h4>' +
					directorMeeting +
					committeeMeeting + 
					cocommitteeMembers + 
					// '</h4><h4 leixing>审阅人: ' + v.previewLeaderRealName +
					audit_state + 
					// '</h4><h4 leixing>' + catagory + reviewclass +
					// '</h4><h4 shencha2>' + catagory_place + place +		
					progress_state + 
					committemembers +
					objs + 
					Otherobjs + 
					companyobjs + 
					organizationName_layout + 
					'</div>' + 	
					// '<div class="unittitle"  onclick="assign_addunit(\'unitName\');">参加单位<input class="mn" type="text" mission /><span class="span"></span></div>'
					// +				
					'<div class="attachment fj"><span>'  + '<span></div>' 
					 + fj_report_layout 
					 + fj_assign_layout 
					 + fj_handle_layout 
					$( appendObj ).append( appendHtml )
				}//else end			
				
				
				if ( index == 9 ) {
					// $( appendObj ).append('<a class="normalbutton">确认结束</a>');	
					$( appendObj ).append('<a class="normalbutton" onclick="btn_terminate('+v.id+');">确认结束</a>');	
					// $( appendObj ).append('<input type="hidden" id="terminateLayout_id" />');
					// $("#terminateLayout_id").val( v.id ) ;
					
				}
			})
				
			if ( noAttachement == 0 ) {
				var dfenclosure = $( fjObj_span ).text();
				if (typeof attachment !=  "undefined") {
					dfenclosure =  attachment ;	
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + schemeCaption + enclosurename + "</p></div>"
							$( fjObj ).append( html );
						}
					})
				}
				
				if (typeof Reportenclosure !=  "undefined") {
					dfenclosure =  Reportenclosure ;	
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + "视察报告: " + Reportenclosurename + "</p></div>"
							$( fjreport_Obj ).append( html );
						}
					})
				}
					
					
				if (typeof assignenclosure !=  "undefined") {
					dfenclosure =  assignenclosure ;	
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + "交办意见: " + assignenclosurename + "</p></div>"
							$( fjassign_Obj ).append( html );
						}
					})
				}
				
				if (typeof handleReportenclosure !=  "undefined") {
					dfenclosure =  handleReportenclosure ;	
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + "办理报告: " +handleReportenclosurename + "</p></div>"
							$( fjhandle_Obj ).append( html );
						}
					})
				}
					
					
				
			}
			
				 // $('#seesuggest article  .fj span').hide();
				 $(".fj p").off().click(function() {
				//$(".fj").off().click(function() {
					var path = $(this).attr("name");
					 var dz = myip + "upfile/" + path;
					console.log("______ path=",path)
//修改
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} else if (dz.indexOf(".pdf") != -1){
						
						var pdfh5 = new Pdfh5( appendObj , {
							pdfurl: dz,
						});											
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}										
				})
				
	
	
				$(".fj_report p").off().click(function() {
						var path = $(this).attr("name");
						 var dz = myip + "upfile/" + path;
						console.log("______ path1=",dz)
						if (dz.indexOf(".doc") != -1) {
							var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
							xurl += encodeURIComponent(dz);
							window.open(xurl);
						} else if (dz.indexOf(".pdf") != -1){
							
							var pdfh5 = new Pdfh5( appendObj , {
								pdfurl: dz,
							});											
						}
						else {
							location.href = "#pictureSt";
							$("#attachmentImg").attr("src", dz);
						}										
					})
					
			$(".fj_assign p").off().click(function() {
					var path = $(this).attr("name");
					
					 var dz = myip + "upfile/" + path;
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} else if (dz.indexOf(".pdf") != -1){
						
						var pdfh5 = new Pdfh5( appendObj , {
							pdfurl: dz,
						});											
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}										
				})		
			
			$(".fj_handle p").off().click(function() {
					var path = $(this).attr("name");
					
					 var dz = myip + "upfile/" + path;
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} else if (dz.indexOf(".pdf") != -1){
						
						var pdfh5 = new Pdfh5( appendObj , {
							pdfurl: dz,
						});											
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}										
				})		
	})
}

function meetingAudit( id ) {
	  var state = 4 ;
	// var mstate = $("#specific_state_id").val();
	// console.log('_________ mstate is:', mstate);
	
	$("#specificAudit .normalbutton").off().click(function() {
		var checkvalue = $("#specificAudit .marginb .form input:radio:checked")
			.val();
		var tips = "同意";
		if ( checkvalue == 2 ) {
			tips = "不同意";
			state = 5 ;
		}
		var opinion = $("#normalbutton textarea").val();
		var k1 = {
			"id": id,
			"matter": opinion,
			"state": state,
			"myid": RssUser.Data.myid
		}
		// console.log(k1)
		RssApi.Edit("supervision_specific_issue").setLoading(true).keyvalue(k1)
			.keyvalue({
				"id": id
			}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert( tips );
					
					history.go(-1);
					$("#specificAudit textarea").val("");
					reLoadData();
				} else {
					alert( tips );
				}
			})
	})
	

}

/*提供材料*/
function provideMaterial ( key ) { 
    var typeid = 6 ;
	keyid = key ;
}
/*提供调查报告*/
function submitReportdocument ( key ) { 
    var typeid = 6 ;
	keyid = key ;
}

function handleReportdocument ( key ) { 
    var typeid = 6 ;
	keyid = key ;
}


/*提交材料*/
$("#providerLayout .submit_send").off().click(function() {
	var typeid = "6";
	var obj_providername = "#providerLayout" + " .smalltitle .providername"; 
	var obj_enclosure = "#providerLayout" + " .fj_path";
	var obj_enclosurename = "#providerLayout" + " article .fj label input";
	var providerenclosure = $(obj_enclosure).text();
	var providerenclosurename = $(obj_enclosurename).val();
	var providername = $(obj_providername).val();
	var provider = $("#providerLayout").find("input[type='radio'][name='MS']:checked").val();
	var providerenclosurename = providerenclosurename.substring(providerenclosurename.lastIndexOf("\\") + 1);
	
	// var k1 = {
		
	// }
	
	if ( isEmpty( providername ) ) {
	    alert( "请添加提供者名称" );
		return;
	}
	if ( isEmpty( providerenclosurename ) ) {
	    alert( "请添加材料文件" );
		return;
	}
	
	RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": keyid,
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			//var state = 6 ; //提交材料成功以后状态为6
			if ( state == 4 ) {
				state = 6 ;
			}
			else if ( state == 6 ) {
				state = 7
			}
			//state ++ ;
			
			
			RssApi.Edit("supervision_specific_issue").setLoading(true).keyvalue(
			   {
				"id": keyid,				
				"myid": v.myid,
				"typeid": typeid,
				"state": state,
				"providerenclosure": providerenclosure,
				"providerenclosurename": providerenclosurename,
				"providername": providername,
				"provider": provider,
				}
			).getJson(function(json) {
					if (json.id) {
						alert( "提交成功" );
						reLoadData();
					}else {
						alert("提交失败");
				}
				history.go(-1);
			})	
		})
})
})

/*提交调查报告*/
$("#reportDocumenttLayout .submit_send").off().click(function() {
	var typeid = "6";
	var obj_enclosure = "#reportDocumenttLayout" + " .fj_path";
	var obj_enclosurename = "#reportDocumenttLayout" + " article .fj label input";
	var reportenclosure = $(obj_enclosure).text();
	var reportenclosurename = $(obj_enclosurename).val();
	var reportenclosurename = reportenclosurename.substring(reportenclosurename.lastIndexOf("\\") + 1);
	
	// var k1 = {
		
	// }
	
	if ( isEmpty( reportenclosurename ) ) {
	    alert( "请添加特定问题调查报告" );
		return;
	}
	
	RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": keyid,
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			state = 7
			RssApi.Edit("supervision_specific_issue").setLoading(true).keyvalue(
			   {
				"id": keyid,				
				"myid": v.myid,
				"typeid": typeid,
				"state": state,
				"reportenclosure": reportenclosure,
				"reportenclosurename": reportenclosurename,
				}
			).getJson(function(json) {
					if (json.id) {
						alert( "提交成功" );
						reLoadData();
					}else {
						alert("提交失败");
				}
				history.go(-1);
			})	
		})
})
})

/*常委会审议调查报告*/
$("#handleDocumenttLayout .submit_send").off().click(function() {
	var typeid = "6";
	var obj_enclosure = "#handleDocumenttLayout" + " .fj_path";
	var obj_enclosurename = "#handleDocumenttLayout" + " article .fj label input";
	var opinionenclosure = $(obj_enclosure).text();
	var opinionenclosurename = $(obj_enclosurename).val();
	var opinionenclosurename = opinionenclosurename.substring(opinionenclosurename.lastIndexOf("\\") + 1);
	var committeeopinion = $("#handleDocumenttLayout").find("input[type='radio'][name='MS']:checked").val();
	
	if ( isEmpty( opinionenclosurename ) ) {
		if ( committeeopinion ==  1 )
	    alert( "请添加常委会决议文件" );
		else
		alert( "请添加常委会决定文件" );
		return;
	}
	
	RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": keyid,
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			state = 8 ;
			RssApi.Edit("supervision_specific_issue").setLoading(true).keyvalue(
			   {
				"id": keyid,				
				"myid": v.myid,
				"typeid": typeid,
				"state": state,
				"committeeopinion": committeeopinion,
				"opinionenclosure": opinionenclosure,
				"opinionenclosurename": opinionenclosurename,
				"opinionenclosurename": opinionenclosurename,
				"taskDone": 1,
				
				}
			).getJson(function(json) {
					if (json.id) {
						alert( "提交成功" );
						reLoadData();
					}else {
						alert("提交失败");
				}
				history.go(-1);
			})	
		})
	})
})



$("#handleDocumenttLayout input[type='radio'][name='MS']").off().click(function() {
		var value = $(this).val();
		if ( value == 1 ) { 		
			$("#handleDocumenttLayout .fj span").text("决议文件")
		}
		else {							
			$("#handleDocumenttLayout .fj span").text("决定文件")
		}
		
	}) 



//已完成的特定问题调查
$("#endsupspecific").load(function() {
	$("#endsupspecific nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("endsupspecific") == "-1") {
		$("#endsupspecific ul li").eq(0).siblings().remove();
		arry.push("endsupspecific")
		} else {
		$("#endsupspecific ul li").remove();
		}
		if ($(this).index() == "0" || isEmpty($(this).index()) ) {
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict().keyvalue({
				"taskDone": 1,
				"myid": RssUser.Data.myid,
				"typeid": "6"
				}).getDict()).setFlushUI(function(json, append) {
					
					var json2 = [];
					$.each(json, function(k, v) {
						var initiator = "提出者: " + v.initiator ;
						json2.push( v );
					})
	
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
	
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmyspecificsolutiondata ( v , "endsupspecific" );				 
					})				
			}).getJson();
		} // 0
		else {
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict().keyvalue({
				"taskDone": 1,
				"typeid": "6"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						if ( isSpecificIssueparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
				
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmyspecificsolutiondata ( v , "endsupspecific" );				 
					})				
			}).getJson();
		}
	})
	
	if (SpecificIssueDonenav == "1") {
		$("#endsupspecific nav>a").eq(0).click();
		SpecificIssueDonenav = "0";
	}
	
})
