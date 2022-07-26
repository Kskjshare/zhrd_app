
function seeInspectionDetail( key ) {
	var obj = "seesupervision";
	viewSupervisionDetail( obj ,key );
	
	$("#supervision .hisback").click(function() {
		location.href = "#seesupervision";
	});					
}
function inspectionSumbit( key  ) {
	// supervision_id = $("#supervision_id").val();
	
	// $("#solutionId").val(key);
	
	submit_append( 8 , key );	
}


function updateSupervision( key  ){
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
				location.href = "#supervision";
			})	
		})
	})
		
}
function finishSupervision ( key ) {
	console.log(" ___________  finishSupervision key=", key ) ;
	// var obj = "seemyresearch";
	// viewSupervisionDetail ( obj , key ) ;
	
	
	var success = "视察结束成功" ;
	var fail = "视察结束失败" ;
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			var type = parseInt(v.typeid)
			if ( type == 9 ) {
				success = "调研结束成功" ;
				fail = "调研结束失败" ;	
			}
			state = 8 ;
			
			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue({
				"id": key,				
				"myid": v.myid,
				"state": state,
				"typeid": v.typeid,
				}).getJson(function(json) {
					if (json.id) {
						alert( success );
					}else {
						alert(fail);
				}
				location.href = "#supervision";
			})	
		})
	})
}
function solutionAudit ( key ) { 
	// var state = $("#state_id").val();
	updateSupervision( key  ) ;
}
function evaluation ( key ) {  //满意度测评
	// var state = $("#state_id").val();
	updateSupervision( key  ) ;
}

function commitAudit ( key ) { //视察报告和意见提交主任会议审议
	console.log(" ___________  commitAudit key=", key ) ;
	$("#commitaudit_id").val(key); //设置点击的当前记录id值
}


function seeInvestigationSolutionDetail( key ) {
	console.log(" ___________  查看我的方案详情 key=", key ) ;
	var obj = "seemyresearch";
	viewSupervisionDetail( obj ,key );
	$("#myresearch .hisback").click(function() {
		location.href = "#myresearch";
	});					
}
function submitInvestigationsolution( key ) {
	console.log(" ___________ 提交方案 key=", key ) ;
	$("#solutionId").val(key);
	submit_append( 9 );	
	// $("#myresearch .hisback").click(function() {
	// 	location.href = "#myresearch";
	// });					
}

function submit_addmember( memberType) {
	addparticipant( "submitsolution" , memberType );
}

function submit_append ( typeid ,key ) {
	var mstate = $("#state_id").val();
	console.log('_________ mstate is:', mstate);
	var title = "视察";

	var html= '';
	
	html += '<input type="hidden" id="mstate" />'
	html += '<input type="hidden" id="solutionId" />'

	html +='<div class="smalltitle" >主任会议届次<input class="session" type="text"/></div>'
	// html +='<div class="smalltitle">主任会议时间<input class="date-picker"  value="" type="text" data-date-format="yyyy-mm-dd" readonly="readonly"/></div>'
	
	
	html +='<div class="committeetitle" id="selectcommittee_id" onclick="submit_addmember(\'committeeMember\');">常委会成员<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="delegatetitle" id="selectdelegate_id" onclick="submit_addmember(\'congressDeputy\');">人大代表<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="othertitle" id="selectother_id" onclick="submit_addmember(\'otherMember\');">其他人员<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="unittitle" id="selectunit_id" onclick="submit_addmember(\'unitName\');">参加单位<input class="mn" type="text" mission /><span class="span"></span></div>'
	
	
	if ( typeid == 8 ) {
	    html += '<div class="fj">视察方案<label><input type="file" class="fileZF" name="submitsolution" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	}
	else {
		html += '<div class="fj">调研方案<label><input type="file" class="fileZF" name="submitsolution" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	}
	
	
	// html +="<div class='smalltitle lmr' id='committeeMember' onclick="committeeMember();">常委会成员<input class='mn' type='text' mission /><span class='span'></span></div>"	
	// html +="<div class='smalltitle lmr' id='congressDeputy' onclick="committeeMember();">人大代表<input class='mn' type='text' mission /><span class='span'></span></div>"
	// html +="<div class='smalltitle lmr' id='otherMember' onclick="committeeMember();">其他人员<input class='mn' type='text' mission /><span class='span'></span></div>"
	// html +="<div class='smalltitle lmr' id='unitName' onclick="committeeMember();">参加单位<input class='mn' type='text' mission /><span class='span'></span></div>"		
	// html +='<a class="submit_send" onclick="submit_click;">提交</a>'
    html +='<div class="submit_send" onclick="submit_click('+typeid+');">提交</div>'
	
	
	var appendObj = "#submitsolution article"
	$("#mstate").remove();
	$("#solutionId").remove();
	$("#submitsolution .smalltitle").not(".meetingTime").remove();
	$("#submitsolution .fj").remove();
	$("#submitsolution .submit_send").remove();
	$("#submitsolution .article").not(".meetingTime").remove();
	
	$("#submitsolution .fj").remove();
	$("#submitsolution .committeetitle").remove();
	$("#submitsolution .delegatetitle").remove();
	$("#submitsolution .othertitle").remove();
	$("#submitsolution .unittitle").remove();
	// $("#submitsolution .committeetitle").remove();
	$( appendObj ).append( html ) ;
	$("#solutionId").val( key );
}


//查看视察调研的具体内容
function viewSupervisionDetail( Obj, key ) {
	var tablename = "supervision_inspection";
	var fjObj_span = "#"+ Obj + " article .fj span";
	var removeObj = '#' + Obj + ' article .no1';
	var fjObj = '#' + Obj + ' article .fj';
	var appendObj = "#" + Obj + " article";
	var  index = 0 ;
	var writestate = 0 ;
	
	var catagory = "调研类别: ";
	var catagory_place = "调研地点: ";
	var catagory_time = "调研时间: ";
	$( removeObj ).remove();
	if ( "seeresearchYS".indexOf( Obj ) != -1 ) {
		writestate = 1 ;
	}
	else if ( "seemyresearch".indexOf( Obj ) != -1 ) {//我的调研方案
		index =  1;
		
	}
	else if ( "seesupervision".indexOf( Obj ) != -1 ) {//我的视察方案
		index =  2;
		catagory = "视察类别: ";
		catagory_place = "视察地点: ";
		catagory_time = "视察时间: ";
	}
	
	
	else if ( "seesupervisionYS".indexOf( Obj ) != -1 ) { //视察预审
		index =  3;
		catagory = "视察类别: ";
		catagory_place = "视察地点: ";
		catagory_time = "视察时间: ";
	} 
	
	else if ( "seesupervreport".indexOf( Obj ) != -1 ) { //承办的视察方案
		index =  4;
		catagory = "视察类别: ";
		catagory_place = "视察地点: ";
		catagory_time = "视察时间: ";
	} 
	else if ( "seeendsupervisionYS".indexOf( Obj ) != -1 ) { //已审阅完成的视察
		index =  5;
		catagory = "视察类别: ";
		catagory_place = "视察地点: ";
		catagory_time = "视察时间: ";
	} 
	else if ( "seeendsupervision".indexOf( Obj ) != -1 ) { //已完成的视察
		index =  6;
		catagory = "视察类别: ";
		catagory_place = "视察地点: ";
		catagory_time = "视察时间: ";
	} 
	
	
	
	
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {	
		var lmr = "";
		var noAttachement = 0 ;	
			
		var audit_state = "";
		var progress_state = "";
		var committemembers = ""; //常委会成员
		var objs = ""; //人大代表
		var Otherobjs = ""; //其他人员
		var companyobjs = ""; //参加单位
		var organizationName_layout ="";//承办单位
		
		//布局高度
		var layoutHeight = '<div class="divtop">' ;
		
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
			
			writereadState ( v , tablename);
			
			
			
			attachment = v.enclosure;		
			attachmentPath =  attachment;
			var matter = v.matter;
			var department = v.department;
			var place = v.place ;
			var note = v.note ;
			enclosurename = v.enclosurename;
			
			if ( v.leaderpreview == 1 ) {
				if ( v.state == 1 )
				audit_state = '<h4 shencha2>审阅状态: 待审阅' +  '</h4>'  ;
				else 
				audit_state = '<h4 shencha2>审阅状态: 已审阅' +  '</h4>'  ;
				
				
				progress_state = '<h4 leixing>办理进度: ' +  getprogressState( v ) + '</h4>'  ;
				
				
			}
			else {
				//如果不需要审阅
				progress_state = '<h4 leixing>办理进度: ' + getprogressState( v ) +  '</h4>'  ;
			}
			
			if ( v.state >= 3 ) {
				//显示常委会成员
				if ( !isEmpty( v.committeeName ) ) {
					committemembers = '<h4 leixing>常委会成员: ' + v.committeeName + '</h4>' 
				}
				//显示人大代表
				if ( !isEmpty( v.objName ) ) {
					objs = '<h4 leixing>人大代表: ' + v.objName + '</h4>' 
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
					layoutHeight = '<div class="divtop4">' ;
				}
				
				
				
			}

			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			
			if ( "undefined".indexOf( v.matter ) != -1 ) {
				matter = "无内容";				
			}
			if ( "undefined".indexOf( v.place ) != -1 ) {
				place = "未知";				
			}
			
			if ( "undefined".indexOf( v.department ) != -1 ) {
				department = "未知";				
			}
			if ( "undefined".indexOf( v.note ) != -1 ) {
				note = "无内容";				
			}

			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				enclosurename = "无";				
			}
			
			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					// '<div class="divtop2">' +
					layoutHeight + 
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					
					'</h3><h4 author>提出者: ' + v.initiator +
					'</h4><h4 shencha2>发起时间: ' + shijian + '</h4>' +
					'</h4><h4 leixing>审阅人: ' + v.previewLeaderRealName +
					audit_state + 
					'</h4><h4 leixing>' + catagory + v.reviewclass +
					'</h4><h4 shencha2>' + catagory_place + place +										 
					// '</h4><h4 leixing>发起时间: ' + shijian + '</h4>' + 
					// '</h4><h4 shencha2>' + catagory_time + inspecttime + '</h4>' + 					
					// '</h4><h4 leixing>审阅状态: ' + v.state + '</h4>' +
					// audit_state + 
					progress_state + 
					committemembers + 
					objs + 
					Otherobjs +
					companyobjs + 
					organizationName_layout + 
					// '<h4>参与代表: ' + v.username  + '</h4>'
					'</div>' + 								  				
					'<div class="contentdivp">' + matter + '</div>' 								
								
					)
			}else {

				// if (Obj == 'seeresearchYS') {
					// appendHtml = '<div class="divtop2">' +
					appendHtml = layoutHeight +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +

					'</h3><h4 author>发起者: ' + v.initiator +
					'</h4><h4 shencha2>发起时间: ' + shijian + '</h4>' +
					'</h4><h4 leixing>审阅人: ' + v.previewLeaderRealName +
					audit_state + 
					'</h4><h4 leixing>' + catagory + v.reviewclass +
					'</h4><h4 shencha2>' + catagory_place + place +		
					// '</h4><h4 leixing>发起时间: ' + shijian + '</h4>' +
					// '</h4><h4 shencha2>' + catagory_time + inspecttime + '</h4>' + 	
					// '</h4><h4 leixing>审阅状态: ' + v.state + '</h4>' +
					// audit_state + 
					committemembers +
					objs + 
					Otherobjs + 
					companyobjs + 
					organizationName_layout + 
					// '<h4>参与代表: ' + v.username  + '</h4>'
					'</div>' + 					
					  '<div class="attachment fj"><span>'  + '<span></div>' + 				
						'<div class="contentdivp2">' + matter + '</div>';
				// }

				$( appendObj ).append( appendHtml )
					}//else end			
				})
				
				
				if ( noAttachement == 0 ) {
				var dfenclosure = $( fjObj_span ).text();
				
				if (typeof attachment !=  "undefined") {
					dfenclosure =  attachment ;	
				 
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + enclosurename + "</p></div>"
							$( fjObj ).append( html );
						}
					})
				}
				
				}
				
				 // $('#seesuggest article  .fj span').hide();
				 $(".fj p").off().click(function() {
				//$(".fj").off().click(function() {
					var path = $(this).attr("name");
					 var dz = myip + "upfile/" + path;
					//var dz = myip + "upfile/" + attachmentPath;
					// alert(attachmentPath);
						
					//var pdfh5 = new Pdfh5('.pdfjs8', {
						//pdfurl: dz
					
//修改
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} else if (dz.indexOf(".pdf") != -1){
						
						var pdfh5 = new Pdfh5( appendObj , {
							pdfurl: dz,
						});
						
						// if ( index == 0 ) {
						// 	var pdfh5 = new Pdfh5('#seeresearchYS  article', {
						// 		pdfurl: dz
						// 	});
						// } else if ( index == 1 ) {
						// 	var pdfh5 = new Pdfh5('#seemyresearch article', {
						// 		pdfurl: dz
						// 	});
						// } else if ( index == 2 ) {
						// 	var pdfh5 = new Pdfh5('#resultsHDck article', {
						// 		pdfurl: dz
						// 	});
						// } 
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}
					
					
				})
				
	
			
	})
}

//提交主任会议
function submit_click ( typeid ){
	var key = $("#solutionId").val();
	console.log('_____________ key is:', key);
	console.log('_____________ typeid is:', typeid);
	// var mstate = $("#mstate").val();
	// console.log('_________ mstate is:', mstate);
	
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			"typeid": typeid
		}).getDict()).getJson(function(json) {	
		var committee_ids = "#submitsolution"  + " .committeetitle span";
		var committee_names = "#submitsolution"  + " .committeetitle [mission]";
				
		var delegate_ids = "#submitsolution"  + " .delegatetitle span";
		var delegate_names = "#submitsolution"  + " .delegatetitle [mission]";
		var other_ids = "#submitsolution"  + " .othertitle span";
		var other_names = "#submitsolution"  + " .othertitle [mission]";
		
		
		var unittitle_ids = "#submitsolution"  + " .unittitle span";
		var unittitle_names = "#submitsolution"  + " .unittitle [mission]";
		
		var meetingshijian = "";
		var directormeetingnum = "";
				
		var state = 3 ;
		var committeeobjid = "";
		var objid = "";
		var parttimemember = "";
		
	    var enclosure = "#submitsolution"  + " .fj_path";
		var enclosurename = "#submitsolution"  + " .fja";
		enclosure = $(enclosure).text();
		enclosurename = $(enclosurename).text();
		
		// console.log(" ———————————— enclosure text=", $(enclosure).text() );
		// console.log(" ———————————— enclosurename text=", $(enclosurename).text() );
			
		// console.log(" ———————————— committeeobjid =", committeeobjid );
		// console.log(" ———————————— objid =", objid );
		
		// console.log(" ———————————— committee_ids =", $(committee_ids).text() );
		
		// console.log(" ———————————— delegate_ids =", $(delegate_ids).text() );
		
		// console.log(" ———————————— other_ids =", $(other_ids).text() );
		
		// console.log(" ———————————— unittitle_ids =", $(unittitle_ids).text() );
		// return;
		committeeName = $(committee_names).val();
		committeeobjid = $(committee_ids).text();
		
		objName = $(delegate_names).val();
		objid = $(delegate_ids).text();
		
		parttimememberName = $(other_names).val();
		parttimemember = $(other_ids).text();
		
		companyName = $(unittitle_names).val();
		company = $(unittitle_ids).text();
		$.each(json, function(k, v) {
			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue({
				"id": key,				
				"enclosure": enclosure,
				"enclosurename": enclosurename,
				"myid": v.myid,
				"shijian": v.shijian,
				"state": state,
				// "matter": v.matter,
				"typeid": v.typeid,
				// "userroleid": v.userroleid,
				// "organizationid": v.organizationid,
				// "rematter": v.rematter,
				// "reenclosure": v.reenclosure,
				// "reenclosurename": v.reenclosurename,
				// "Reportclosure": v.Reportclosure,
				// "Reportclosurename": v.Reportclosurename,
				// "directormeetingnum": v.directormeetingnum,
				"committeeobjid": committeeobjid,
				"committeeName": committeeName,
				"objid": objid,
				"objName": objName,
				"parttimemember": parttimemember,
				"parttimememberName": parttimememberName,
				
				"company": company,
				"companyName": companyName,
				"meetingshijian": meetingshijian,
				"directormeetingnum": directormeetingnum,
				
				
				
				"initiator": v.initiator,
				// "place": v.place,
				// "company": v.company,
				// "taskDone": v.taskDone,
				// "parttimemember": parttimemember,
				// "expertmemberid": v.expertmemberid,
				// "leaderpreview": v.leaderpreview,
				// "previewleadername": v.previewleadername,
				// "previewLeaderRealName": v.previewLeaderRealName,
				
				
				
				
				// "needsubmitmeeting": v.needsubmitmeeting,
				// "previewopinion": v.previewopinion,
				// "meetingshijian1": v.meetingshijian1,
				// "meetingshijian2": v.meetingshijian2,
				// "directormeetingnum1": v.directormeetingnum1,
				// "directormeetingnum2": v.directormeetingnum2,
				
				
				"readState": v.readState
				}).getJson(function(json) {
					if (json.id) {
						alert("提交成功");
					}else {
						alert("提交失败");
					}
					//location.href = "#supervision";
					history.go(-1);
					unreadmsg( );
					unreadmsg1( );
				})	
			})
		})
	
}

//查看
$("#submitsolution .finish").off().click(function() {
	console.log(" ___________  finish",  ) ;
})