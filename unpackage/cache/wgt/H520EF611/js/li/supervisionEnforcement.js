var previewEnforcementnav = "0";
var Enforcementnavnav = "0";

var propress_state =  1 ; //记住办理状态
var enforcementTablename = "supervision_enforcement";


var local_solution_init = "";

$("[href='#enforcementPreview']").click(function() {
	previewEnforcementnav = "1";
})
//新增执法检查
$("#supinspectionXZ").load(function() {
	// var missions = "",
	// 	realname = "";
	// RssApi.Table.List("committee_member").condition(new RssDict().keyvalue({
	// 	"myid": RssUser.Data.myid
	// }).getDict()).getJson(function(jsonn) {
	// 	$.each(jsonn, function(k, v) {
	// 		missions = v.mission;
	// 	})
	// })
	
			reviewclass = {};	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(		json) {		$.each(json, function(k, v) {			reviewclass[v.id] = v.name			$("#supinspectionXZ [reviewclass]").attr("relationid", v.id)			$("#supinspectionXZ [reviewclass]").text(v.name)		})		$("#supinspectionXZ [reviewclass]").off("click").click(function() {			zzc($(this), reviewclass);		})	})
	$("#supinspectionXZ .lmr").off().click(function() {
		addmember ( "previewleader_supinspectionXZ" );
	})
	
	$("#supinspectionXZ input[type='radio'][name='ZH']").off().click(function() {
		var value = $(this).val();
		if (value == 1) {
			$("#enforce_previewleader").show();
			
			$("#enforce_meetingshijian").hide();
			$("#enforce_directormeetingnum").hide();
			
		} else {
			$("#enforce_previewleader").hide();
			
			$("#enforce_meetingshijian").show();
			$("#enforce_directormeetingnum").show();
		}
	})

	$("#supinspectionXZ .normalbutton").off().click(function() {
		submitEnforcement ("supinspectionXZ");
	})
})

$("#supinspectionXZ .hisback").click(function() {
	resetEditState();	
});		


function resetEditState ( ) {
	console.log("________ resetEditState")
	var pref = "#supinspectionXZ ";
	var obj_time = pref + " .smalltitle .date-picker";
	var obj_meetingtime = pref + " .meetingtitle .date-picker";
	var obj_session = pref + " .smalltitle .session"; //主任会议届次
	var obj_reviewclass = pref + " .marginb .select";
	
	var obj_place = pref + " .smalltitle .place";
	var obj_title = pref + " .smalltitle .title";
	var obj_matter= pref + " textarea";
	var obj_enclosure = pref + " .fja";
	var obj_previewleaderid = pref + " .lmr span";
	var obj_previewLeaderRealName = pref + " [mission]";
	// var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	var obj_enclosurename = pref + " .fja";
	
	// console.log("________ enclosurename =", $( obj_enclosurename ).val() )
	// console.log("________ enclosure =", $( obj_enclosure ).val() )
	// console.log("________ obj_place =", $( 	obj_place ).val() )
	// console.log("________ obj_matter =", $( obj_matter ).val() )
	// console.log("________ obj_previewleaderid =", $( obj_previewleaderid ).val() )
	// console.log("________ obj_previewLeaderRealName =", $( obj_previewLeaderRealName ).val() )
	// console.log("________ obj_meetingtime =", $( obj_meetingtime ).val() )
	
	$( obj_title ).val("");
	$( obj_time ).val("");
	$( obj_meetingtime ).val("");
	$( obj_session ).val("");
	
	$( obj_enclosurename ).text("");
	$( obj_reviewclass ).val("");
	$( obj_enclosure ).text("");
	$( obj_place ).val("");
	$( obj_matter ).val("");
	$( obj_previewleaderid ).text("");
	$( obj_previewLeaderRealName ).val("");
	$("#supinspectionXZ ").find("input[type='radio'][name='ZH']:checked").val("1");
	$(obj_meetingtime).val("");
	$( obj_enclosurename2 ).val("");
	
	
}

function submitEnforcement ( obj ) {
	var alertTime = false ;
	var typeid = 3 ;//默认执法检查
	var lwstate = 3 ;
	var tablename = "supervision_enforcement";
	
	var timetips = "请填写执法检查时间";
	var titletips = "请填写执法检查报告标题";
	var enclosureEmpty = "请添加执法检查方案";
	var pref = "#supinspectionXZ ";
	
	var obj_time = pref + " .smalltitle .date-picker";
	// var obj_meetingtime = pref + " .meetingtitle .date-picker";
	
	var obj_meetingtime = pref + " .meetingtitle .date-picker";
	var obj_session = pref + " .smalltitle .session"; //主任会议届次
	var obj_reviewclass = pref + " .marginb .select";
	
	var obj_place = pref + " .smalltitle .place";
	var obj_title = pref + " .smalltitle .title";
	var obj_matter= pref + " textarea";
	var obj_enclosure = pref + " .fja";
	var obj_previewleaderid = pref + " .lmr span";
	var obj_previewLeaderRealName = pref + " [mission]";
	var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	var time = $( obj_time ).val();
	var meetingshijian = $( obj_meetingtime ).val();//主任会议时间
	var session = $( obj_session ).val();
	
	// var reviewclass = $( obj_reviewclass ).val();
	var reviewclass = $(pref + " [reviewclass]").attr("relationid");
	 reviewclass  = $( pref + " [reviewclass]").text();
	
	var place = $( obj_place ).val();
	var title = $( obj_title ).val();
	var matter = $( obj_matter ).val();
	var enclosure = $( obj_enclosure ).text() ;
	var previewleaderid = $( obj_previewleaderid ).text();
	var previewLeaderRealName = $( obj_previewLeaderRealName ).val();
	var enclosurename = $( obj_enclosurename ).val() ;
  
	var leaderpreview = $("#" + obj).find("input[type='radio'][name='ZH']:checked").val();
	
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var shijian = Date.parse(new Date()) / 1000;
	
	if ( isEmpty( time ) && alertTime ) {
	    alert( timetips );
		return;
	}
	if ( isEmpty( title ) ) {
	    alert( titletips );
		return;
	}
	if ( isEmpty( enclosure ) ) {
	    alert( enclosureEmpty );
		return;
	}
	if ( leaderpreview == "2") {
		if ( isEmpty( meetingshijian ) ) {
			alert( "请选择主任会议时间" );
			return;
		}	
		meetingshijian = Math.round(new Date(meetingshijian) / 1000);
	}
	else {
		meetingshijian = inspecttime ;
	}
	
	
	
	var inspecttime = Math.round(new Date(time) / 1000);
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
		new RssDict().keyvalue({
			"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		
		var realname=json[0].realname
		console.log(realname)
		
		RssApi.Edit( tablename ).setLoading(true).keyvalue({
		"title": title,
		"lwstate": lwstate,
		"meetingshijian": meetingshijian,
		"inspecttime": inspecttime,
		"reviewclass": reviewclass,
		"enclosure": enclosure,
		"enclosurename": filename,
		"myid": RssUser.Data.myid ,
		"shijian": shijian,
		"state": 1,
		"matter": matter,
		"typeid": typeid,
		"directormeetingnum": session ,
		"initiator": realname,
		"place": place,
		"taskDone": 0 ,
		"leaderpreview": leaderpreview,
		"previewleadername": previewleaderid,
		"previewLeaderRealName": previewLeaderRealName,
		"needsubmitmeeting": 0,
		"readState": 1
			
			
		}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");
					// $( obj_enclosurename ).val("");
					// $( obj_reviewclass ).val("");
					// $( obj_enclosure ).val("");
					// $( obj_place ).val("");
					// $( obj_matter ).val("");
					// $( obj_previewleaderid ).text("");
					// $( obj_previewLeaderRealName ).val("");
					// $("#" + obj).find("input[type='radio'][name='ZH']:checked").val("1");
					// $(obj_meetingtime).val("");
					// $( obj_enclosurename2 ).val("");//
					resetEditState();
					history.go(-1);					
				} else {
					alert("提交失败");
				}
			})
		}).getJson();
}




function fillEnforcementListdata( v , Obj ) {
	var mstate = parseInt( v.state );
	var taskDone = parseInt( v.taskDone );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getEnforcementsState( v ) ;
	var initiator = "提出者: " + v.initiator ;
	
	
	var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + state  + '</p>'+
		'<div class="lifoot" id=' + v.id +
		' id=' + v.id +
		'>'
	var uid = RssUser.Data.myid ;
	var terminate_btn = "";
	var preview_btn = "";
	if ( Obj == "enforcementPreview") {
		if ( taskDone == 0 && v.myid == uid ) {
			terminate_btn = '<a href="#terminateLayout" class="ans" onclick="terminate_entry('+v.id+');"><span>流程完结</span></a>'
		}
		if ( mstate == 1 ){
			preview_btn = '<a href="#prevapproveLayout" class="ans" onclick="enforcementPreview_entry('+v.id+');"><span>审阅</span></a>'
		}
		liStr += '<a href="#seeEnforcementDetail" class="see" onclick="viewDetail('+v.id+');"><span>查看详情</span></a>' + 
		terminate_btn + 
		preview_btn +
		'</div></li>';
	}
	else if ( Obj == "supevaluation") {
		if ( taskDone == 0 && v.myid == uid ) {
			terminate_btn = '<a href="#terminateLayout" class="ans" onclick="terminate_entry('+v.id+');"><span>已完结</span></a>'
		}		
		
		liStr += '<a href="#seeEnforcementDetail" class="see" onclick="viewDetail('+v.id+');"><span>查看详情</span></a>' + 
		terminate_btn + 
		preview_btn +
		'</div></li>';
	}
	
	$(append_obj).append(liStr);
}

function enforcementPreview_entry( key ) {
    $("#prevapproveLayout_id").val( key );
	$("#prevapproveLayout_typeid").val( 3 ); 
	$("#prevapproveLayout_tablename").val( "supervision_enforcement"); 
	updateReadState ( "supervision_enforcement" , key , "view" ) ;
}
function previewfilterData ( json , tab , append  ) {
	var json2 = [];
	var uid = RssUser.Data.myid ;
	$.each(json, function(k, v) {
		var data = v ;
		var state = parseInt(v.state ) ;
		var initiator = v.initiator ;
		data.initiator = initiator ;
		var previewleadername = data.previewleadername;
		if ( !isEmpty( v.previewleadername ) ) {
			if ( v.previewleadername .indexOf( uid ) != -1 ) {
				if ( tab == 1 ) { //已经审过
				    if ( state > 1 ) {
						json2.push( data );
						fillEnforcementListdata ( v , "enforcementPreview" );
					}
				}
				else {
					if ( state == 1 ) {
						json2.push( data );
						fillEnforcementListdata ( v , "enforcementPreview" );
					}
				}
			}
		}	
	})
	if (json2.length < 10 ) {
		$('.nodata').hide();
	} else {
		$('.nodata').show();
	}

	if (json2.length == 0 ) {
		$('.nosolutions').show();
	} else {
		$('.nosolutions').hide();
	}
	
}



$("#enforcementPreview").load(function() {
	$("#enforcementPreview nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("enforcementPreview") == "-1") {
			$("#enforcementPreview ul li").eq(0).siblings().remove();
			arry.push("enforcementPreview")
		} else {
			$("#enforcementPreview ul li").remove();
		}
		if ($(this).index() == "0") {
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict()
				.keyvalue({
					"state": "1",
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				previewfilterData ( json , 0 , append ) ;
				
				
				//查看
				$("#enforcementPreview .see").off().click(function() {
					var key = $(this).parent().attr("id");
					var obj = "seeEnforcementDetail";
					changeReadState ( key  , "supervision_enforcement") ;
					viewSupervisionDetail ( obj , key ) ;
				})
				
				//审阅
				$("#enforcementPreview .ans").off().click(function() {
					
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					changeReadState ( key  , "supervision_enforcement") ;
					// $("#anssupevaluationYS .normalbutton").off().click(function() {})
				})
				//查看
			}).getJson();
		}else{
			
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict()
				.keyvalue({
					"typeid": 3,
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				
				previewfilterData ( json , 1, append ) ;
				//查看
				$("#enforcementPreview .see").off().click(function() {
					var key = $(this).parent().attr("id");
					var obj = "seeEnforcementDetail";
					viewSupervisionDetail ( obj , key ) ;
					changeReadState ( key  , "supervision_enforcement") ;
				})
				
			}).getJson();
		}
	})
	if (previewEnforcementnav == "1") {
		$("#enforcementPreview nav>a").eq(0).click();
		previewEnforcementnav = "0";
	}
})



//我的执法检查
function enforcement_mapview( json ) {
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
	
	if ( json.length > 0 ) {
		RssApi.Table.List("user").setLoading(true).condition( new RssDict().keyvalue({
			"myid": json[0].myid,
			}).getDict()).setFlushUI(function(data, append) {
				
			for ( var i = 0 ; i < json.length; i ++ ) {
				$("#mstate").val( json[i].state );
				json[i].avatar = data[0].avatar;
			}					
			
			$.each(json, async function(k, v) {
				
				fillenforcementList ( v , "supervisionEnforcement" );				 
			})	
			
		}).getJson();	
	}
}

$("#supervisionEnforcement").load(function() {
	
	$("#supervisionEnforcement nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supervisionEnforcement") == "-1") {
		$("#supervisionEnforcement ul li").eq(0).siblings().remove();
		arry.push("supervisionEnforcement")
		} else {
		$("#supervisionEnforcement ul li").remove();
		}

		if ($(this).index() == "0") {
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict().keyvalue({
				"typeid": "3",
				"myid": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
					enforcement_mapview ( json )
				}).getJson();
		} // 0
		else {
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict().keyvalue({
				// "myid": RssUser.Data.myid,
				"typeid": "3"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						// var initiator = "提出者: " + v.initiator ;
						if ( isparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
				    enforcement_mapview ( json2 ) ;
						
			}).getJson();
		}
	})
	
	if (Enforcementnavnav == "1") {
		$("#supervisionEnforcement nav>a").eq(0).click();
		Enforcementnavnav = "0";
	}
	
		
	
})

$("[href='#supervisionEnforcement']").click(function() {
	Enforcementnavnav = "1";
})

function fillenforcementList( v , Obj ) {
	
	var mstate = parseInt( v.state );
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getEnforcementsState( v ) ;
	var initiator = "提出者: " + v.initiator ;
	var avatar = v.avatar ;
	if ( "undefined".indexOf(avatar) != -1 ) {
		avatar = global_ip + "upfile/avatar.png" ;
	}
	else {
		avatar = global_ip + "upfile/" + avatar ;
	}	
	var liStr = '<li><img class="headimage" src="'+ avatar +'" bindkeys="avatar" ' + 
	
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
		
		if ( Obj =="supervisionEnforcement" ) {
			var LoginID = RssUser.Data.myid ;
			{
				if ( mstate == 1 ){
					
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></div></li>';	
					
				}
				else if ( mstate == 2 ){
					if ( isRoler ( v.myid ) ) {
					// liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="SumbitDirectorMeeting('+v.id+');"><span>提交方案</span></a></div></li>';
						
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#submitdirectormeetingView" class="ans" onclick="submitdirectormeeting('+v.id+');"><span>提交方案</span></a></div></li>';	
					}else {
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';
						
					}
				}
				else if ( mstate == 3 ){
					if ( !isRoler ( v.myid ) ) {
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#enforcementViewlayout" class="ans" onclick="Auditbutton_click('+v.id+');"><span>审议</span></a></div></li>';	
						
					}
				}
				else if ( mstate == 4 ){
					if ( isRoler ( v.company ) ) { //commitaudit
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#enforcementWorkReport" class="ans" onclick="summitWorkReport_click('+v.id+');"><span>提交报告</span></a></div></li>';
					
					}else {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></div></li>';
						
					}
				}
				else if ( mstate == 5 ){ //待出执法报告
					if ( !isRoler ( v.myid ) ) {
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#submitEnforcementReport" class="ans" onclick="summitReport_click('+v.id+');"><span>提交报告</span></a></div></li>';	
					}
				}
				else if ( mstate == 6 ){
					if ( !isRoler ( v.myid ) ) {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></div></li>';	
					}else {
						//liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#assignLayout" class="ans" onclick="assign('+v.id+');"><span>交办</span></a></div></li>';	
					    liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#enforcementViewlayout" class="ans" onclick="Auditbutton_click('+v.id+');"><span>审议</span></a></div></li>';
					
					}
				}
				else if ( mstate == 7 ){
					if ( isRoler ( v.myid) ) {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#enforcementSubmitCommittee" class="ans" onclick="summitcommittee_click('+v.id+');"><span>提交常委会</span></a></div></li>';
						
						//liStr += '<a href="#enforcementViewlayout" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#handleLayout" class="ans" onclick="handleReport('+v.id+');"><span>主任会议汇报</span></a></div></li>';	
					}
					else {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';		
					}
				}
				else if ( mstate == 8 ){
					if ( isRoler ( v.myid) ) {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#enforcementCommitteeAduit" class="ans" onclick="committeeAudit_click('+v.id+');"><span>常委会审议</span></a></div></li>';
						
					}
					else {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';		
					}
				}
				else if ( mstate == 9 ){ //被检查单位待出处理报告
					if ( isRoler ( v.company) ) {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="#enforcementhandleReport" class="ans" onclick="handleReport_click('+v.id+');"><span>提交报告</span></a></div></li>';
						
					}
					else {
						liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';		
					}
				}
				
			else if ( mstate == 10 ){ //常委会处理报告
				if ( isRoler ( v.myid) ) {
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a><a href="" class="ans" onclick="enforcementFinish_click('+v.id+');"><span>处理完成</span></a></div></li>';
					
				}
				else {
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';		
				}
			}	
			else if ( mstate == 11 ){ 
				
				liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';		
				
			}	
				else if ( mstate == 98 ){
					liStr += '<a href="#enforcementViewlayout" class="see" onclick="Viewbutton_click('+v.id+');"><span>查看详情</span></a></div></li>';
					
					// liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';
				}
				else {
					// liStr += '<a href="#seesupervision" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';
				}
			}
		
		}
		
		
		liStr += '<input type="hidden" state_id='+mstate+' />'
		$(append_obj).append(liStr);
		$("#state_id").val(mstate);
}


function enforcementstate1_click( key  ){

	console.log(" ____________ enforcementViewlayout_click key=",key);
	$("#enforcementViewlayout").find("header>h1").text( "查看详情" );
	$("#enforcementViewlayout_handleID").val( key );
}
function Viewbutton_click( key  ){

	console.log(" ____________ enforcementViewlayout_click key=",key);
	$("#enforcementViewlayout").find("header>h1").text( "查看详情" );
	$("#enforcementViewlayout_handleID").val( key );
    $("#actionButton").hide();
}

function Auditbutton_click( key  ){
	Enforcementnavnav = "1";
	console.log(" ____________ Auditbutton_click key=",key);
	$("#enforcementViewlayout").find("header>h1").text( "主任会议审议执法检查方案" );
	$("#enforcementViewlayout_handleID").val( key );
	$("#actionButton").show();
}

function summitWorkReport_click( key  ){
	console.log(" ____________ summitWorkReport_click key=",key);
	$("#enforcementWorkReport").find("header>h1").text( "提交执法检查工作报告" );
	$("#enforcementViewlayout_handleID").val( key );
	// $("#actionButton").show();
}
function summitReport_click( key  ){
	console.log(" ____________ summitReport_click key=",key);
	$("#enforcementViewlayout_handleID").val( key );
}
function summitcommittee_click( key  ){
	console.log(" ____________ summitcommittee_click key=",key);
	$("#enforcementViewlayout_handleID").val( key );
}
function committeeAudit_click( key  ){
	console.log(" ____________ committeeAudit_click key=",key);
	$("#enforcementViewlayout_handleID").val( key );
}
function handleReport_click( key  ){
	console.log(" ____________ handleReport_click key=",key);
	$("#enforcementViewlayout_handleID").val( key );
}

function submitdirectormeeting( key  ){
}


function updateEnforcementState ( state ){

	var key = $("#enforcementViewlayout_handleID").val();
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
			if ( state == 98 ) {
				mstate = state ;
			}else {
				mstate ++ ;	
			}
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				}
			).getJson(function(json) {
			
				Enforcementnavnav = "1";
				history.go(-1);	
			})	
		})
	})
	
}


//审议不通过
$("#enforcementViewlayout .disagreebutton").click(function() {
	
	if ( propress_state == 3 ) { //主任会议审议
		updateEnforcementState ( 98 );
	}
	
});
$("#enforcementViewlayout .agreebutton").click(function() {
	updateEnforcementState ( 4 );	
});

//审议通过
$("#specailWorkauditLayout").on('click','.stationbuttonbg2 .auditpass',function(){
	var key = $("#enforcementViewlayout_handleID").val();
	
	var success = "审议完成" ;
	var fail = "审议失败" ;
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			state ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
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
								
				
			})	
		})
	})
})


$("#enforcementViewlayout").load(function() {
	var key = $("#enforcementViewlayout_handleID").val();
	RssApi.Table.List( "supervision_enforcement" ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
			
		propress_state = json[0].state ;	
		faqsajax = RssApi.Table.List("user").setLoading(true).condition({
			"myid": json[0].myid,
			}).setFlushUI(function(json1, append) {
				// json[0].ico = global_ip + 'upfile/' +json1[0].avatar;
				var state = json[0].state ;
				var avatar = json1[0].avatar ;
				
				local_solution_init = json[0].enclosure ;
				if ( "undefined".indexOf( avatar ) != -1 ) {
					avatar = "avatar.png" ;
				}
				json[0].ico = avatar ;
				
				
				if ( state == 1 ) {
					$("#enforcement_meetingshijian").hide();
					$("#enforcement_groupmember").hide();
					$("#enforcement_groupmember_caption").hide();									
				}
				else if ( state >= 3 ) {
					$("#enforcement_meetingshijian").show();
					$("#enforcement_groupmember").show();
					$("#enforcement_groupmember_caption").show();
				}
				$("#enforcementViewlayout ul").mapview(json, {
					
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					
					"inspecttime": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					"meetingshijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					"directormeetingnum": function(val) {
						var directormeetingnum = val;
						if ( "undefined".indexOf(val) == 0  ){
							directormeetingnum = "未知";
						}
						return "未知";
					},
					"previewLeaderRealName": function(val) {
						var previewLeaderRealName = val;
						if ( "undefined".indexOf(val) == 0 ){
							previewLeaderRealName = "未知";
						}
						return previewLeaderRealName;
					},
					"state": function(val) {
						return getEnforcementsState(json[0])
					},
					
				})	
							
				
		}).getJson();
		
	});
	

})


var gState = "1"
function getEnforcementsState ( v ) {
	var progress = "执法检查";
	var prefProgress = "执法检查方案";
	var type = parseInt( v.typeid ) ;
	gState = v.state;
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
				progress = prefProgress + "审议中"; 
			}else {
				progress = prefProgress + "中";
			 }  
		   
		}
		else if ( v.state == "4"  ) {
			if ( v.leaderpreview == "1" ) { //需要预审
				progress = "待出执法工作报告"; 
			}else {
				progress = prefProgress + "中";
			}     
		 
		}
		else if ( v.state == "5"  ) {
			if ( v.needsubmitmeeting == "2" ) { 
				progress = "不需要提交主任会议";
			}
			else {
				 // progress = prefProgress + "报告和交办意见审议中"; 
				 progress = "待出执法检查报告"; 
			}
		}
		else if ( v.state == "6"  ) {
			
			progress = "执法报告待审议"; 
			
		}
		else if ( v.state == "7"  ) {
			progress = "待提交常委会";
		}
		else if ( v.state == "8"  ) {
			progress = "待常委会审议";
		}
		else if ( v.state == "9"  ) {
			progress = "待出处理报告";
		}
		else if ( v.state == "10"  ) {
			progress = "常委会处理报告中";
		}
		else if ( v.state == "11"  ) {
			progress = "执法检查已经完结";
		}
		else if ( v.state == 98) {
			progress = "主任会会议审议不通过";
		}
		else if ( v.state == 99) {
			progress = "常委会会会议审议不通过";
		}
		
		else {
			progress = prefProgress + "已完成";
		}
		return progress ;
}


//提交主任会议审议
function SumbitDirectorMeeting( key  ) {
	
	// submit_append( 8 , key );
	var typeid = 3 ;
	var mstate = $("#state_id").val();
	console.log('_________ mstate is:', mstate);
	var title = "视察";

	var html= '';
	
	html += '<input type="hidden" id="mstate" />'
	html += '<input type="hidden" id="solutionId" />'

	
    html +='<div class="smalltitle">主任会议时间<input class="date-picker"  value="" type="text" data-date-format="yyyy-mm-dd" readonly="readonly"/></div>'
	html +='<div class="smalltitle" >主任会议届次<input class="session" type="text"/></div>'
	
	html +='<div class="committeetitle" id="selectcommittee_id" onclick="submit_addmember(\'committeeMember\');">常委会成员<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="delegatetitle" id="selectdelegate_id" onclick="submit_addmember(\'congressDeputy\');">人大代表<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="othertitle" id="selectother_id" onclick="submit_addmember(\'otherMember\');">其他人员<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="unittitle" id="selectunit_id" onclick="submit_addmember(\'unitName\');">被检查参加单位<input class="mn" type="text" mission /><span class="span"></span></div>'
	
	html += '<div class="fj">执法检查方案<label><input type="file" class="fileZF" name="submitsolution" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	
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

$("#submitdirectormeetingView").load(function() {
	$("#submitdirectormeetingView .lmr_committeemember").off().click(function() { //特添加常委会成员
		addmember("submitmeetingView_committeemember");
	})
	$("#submitdirectormeetingView .lmr_delegate").off().click(function() { //人大代表
		addmember("submitmeetingView_delegate");
	})
	$("#submitdirectormeetingView .lmr_other").off().click(function() { //其他人员
		addmember("submitmeetingView_othermember");
	})	
	
	$("#submitdirectormeetingView .lmr").off().click(function() { //单位
		addmember("unitName");
	})	
	
	$("#submitdirectormeetingView .submitbutton").off().click(function() {
		actionSubmit ();
	})
})

function actionSubmit (  ) {
	var alertTime = true ;
	var typeid = 3 ;//默认调研
	var lwstate = 9 ;
	var tablename = "supervision_enforcement";
	
	var timetips = "请填写主任会议时间";
	var sessiontips = "请填写主任会议届次";
	var enclosureEmpty = "请添加执法检查方案";
	var pref = "#submitdirectormeetingView ";
	
	var obj_time = pref + " .smalltitle .date-picker";
	
	var obj_meetingtime = pref + " .meetingtitle .date-picker";
	var obj_session = pref + " .smalltitle .session"; //主任会议届次
	
	var obj_enclosure = pref + " .fja";
	var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	var time = $( obj_time ).val();
	var meetingshijian = $( obj_meetingtime ).val();//主任会议时间
	var session = $( obj_session ).val();
	
	var enclosure = $( obj_enclosure ).text() ;
	var enclosurename = $( obj_enclosurename ).val() ;
	
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var shijian = Date.parse(new Date()) / 1000;
	
	console.log("___________ enclosurename=" +  enclosurename )
	console.log("___________ enclosure=" +  enclosure )
	if ( isEmpty( meetingshijian ) && alertTime ) {
	    alert( timetips );
		return;
	}
	if ( isEmpty( session ) ) {
	    alert( sessiontips );
		return;
	}
	
	return;
	
	var inspecttime = Math.round(new Date(time) / 1000);
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
		new RssDict().keyvalue({
			"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		RssApi.Edit( tablename ).setLoading(true).keyvalue({
		"title": title,
		"lwstate": lwstate,
		"meetingshijian": meetingshijian,
		"inspecttime": inspecttime,
		"reviewclass": reviewclass,
		"enclosure": enclosure,
		"enclosurename": filename,
		"myid": RssUser.Data.myid ,
		"shijian": shijian,
		"state": 1,
		"matter": matter,
		"typeid": typeid,
		"directormeetingnum": session ,
		"initiator": realname,
		"place": place,
		"taskDone": 0 ,
		"leaderpreview": leaderpreview,
		"previewleadername": previewleaderid,
		"previewLeaderRealName": previewLeaderRealName,
		"needsubmitmeeting": 0,
		"readState": 1
			
			
		}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");			
					resetState ( );
					specific_default_mode = 1 ;
					history.go(-1);					
				} else {
					alert("提交失败");
				}
			})
		}).getJson();
}
	
	


//待出执法工作检查
$("#enforcementWorkReport .normalbutton").click(function() {
	var pref = "#enforcementWorkReport ";
	
	var obj_matter= pref + " textarea";
	// var obj_enclosure = pref + " .fja";
	var obj_enclosurename = pref + " article .fj label input";
	// var obj_enclosurename2 = pref + " article input";//
	var obj_enclosurename = pref + " .fja";
	var obj_enclosure = pref + " .fj_path";
	
	
	var matter = $( obj_matter ).val();
	var enclosure = $( obj_enclosure ).text() ;
	// var enclosurename = $( obj_enclosurename ).val() ;
	var enclosurename = $( obj_enclosurename ).text() ;
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	console.log("____________________ filename="+filename)
	
	if ( isEmpty( enclosure ) ) {
		alert( "请添加执法工作报告" );
		return;
	}
	var key = $("#enforcementViewlayout_handleID").val();
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
				mstate ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				"workreportenclosure": enclosure,
				"workreportenclosurename": filename,
				}
			).getJson(function(json) {
			
				Enforcementnavnav = "1";
				history.go(-1);	
			})	
		})
	})
	
	// updateEnforcementState ( 4 );	
});

//待出执法报告
$("#submitEnforcementReport .normalbutton").click(function() {
	console.log("____________________ submitEnforcementReport 提交")
	var pref = "#submitEnforcementReport ";
	
	var obj_enclosurename = pref + " .fja";
	var obj_enclosure = pref + " .fj_path";
	
	
	var enclosure = $( obj_enclosure ).text() ;
	var enclosurename = $( obj_enclosurename ).text() ;
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	console.log("____________________ filename="+filename)
	var key = $("#enforcementViewlayout_handleID").val();
	
		
	var session = $("#submitEnforcementReport .session").val();
	var meetingtime = $("#submitEnforcementReport .date-picker").val();
	var shijian = Date.parse(new Date()) / 1000;
		
	if ( isEmpty( meetingtime ) ) {
		alert( "请添加主任会议时间" );
		return;
	}
	if ( isEmpty( session ) ) {
		alert( "请添加主任会议届次" );
		return;
	}
	if ( isEmpty( enclosure ) ) {
		alert( "请添加报告文件" );
		return;
	}
		
	meetingtime = Math.round(new Date(meetingtime) / 1000);
	
	
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
				mstate ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				"Reportenclosure": enclosure,
				"Reportenclosurename": filename,
				"directormeetingnum2": session,
				"meetingshijia2": meetingtime,
				}
			).getJson(function(json) {
			
				Enforcementnavnav = "1";
				history.go(-1);	
				
				$("#submitEnforcementReport .session").val("");
				$("#submitEnforcementReport article .fj fja").text("") ;
				$("#submitEnforcementReport article .fj fj_path").text("") ;
				
				$("#submitEnforcementReport .date-picker").val("");
				
			})	
		})
	})
	
	// updateEnforcementState ( 4 );	
});



//待提交常委会审议
$("#enforcementSubmitCommittee .normalbutton").click(function() {
	var pref = "#enforcementSubmitCommittee ";
	var obj_enclosurename = pref + " .fja";
	var obj_enclosure = pref + " .fj_path";
	
	
	var enclosure = $( obj_enclosure ).text() ;
	var enclosurename = $( obj_enclosurename ).text() ;
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var key = $("#enforcementViewlayout_handleID").val();

	var session = $("#enforcementSubmitCommittee .session").val();
	var meetingtime = $("#enforcementSubmitCommittee .date-picker").val();
	var shijian = Date.parse(new Date()) / 1000;
		
	if ( isEmpty( meetingtime ) ) {
		alert( "请添加常委会会议时间" );
		return;
	}
	if ( isEmpty( session ) ) {
		alert( "请添加常委会会议届次" );
		return;
	}
	console.log("____________________ enforcementSubmitCommittee ")	
	meetingtime = Math.round(new Date(meetingtime) / 1000);
	
	
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
				mstate ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				// "committeesession": session,
				// "committeeshijian": meetingtime,
				"directormeetingnum2": session,
				"meetingshijia2": meetingtime,
				}
			).getJson(function(json) {
			
				Enforcementnavnav = "1";
				history.go(-1);	
				
				$("#enforcementSubmitCommittee .session").val("");
				$("#enforcementSubmitCommittee article .fj fja").text("") ;
				$("#enforcementSubmitCommittee article .fj fj_path").text("") ;
				
				$("#enforcementSubmitCommittee .date-picker").val("");
				
			})	
		})
	})
	
	// updateEnforcementState ( 4 );	
});



	var pref = "#enforcementWorkReport ";
	
//常委会审议
$("#enforcementCommitteeAduit .normalbutton").click(function() {
	console.log("____________________ enforcementCommitteeAduit 提交")
	var pref = "#enforcementCommitteeAduit ";
	
	var obj_enclosurename = pref + " .fja";
	var obj_enclosure = pref + " .fj_path";
	
	
	var enclosure = $( obj_enclosure ).text() ;
	var enclosurename = $( obj_enclosurename ).text() ;
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	console.log("____________________ filename="+filename)
	var key = $("#enforcementViewlayout_handleID").val();
	
		
	var session = $("#enforcementCommitteeAduit .session").val();
	var meetingtime = $("#enforcementCommitteeAduit .date-picker").val();
	var shijian = Date.parse(new Date()) / 1000;
		
	
	if ( isEmpty( enclosure ) ) {
		alert( "请添审议文件" );
		return;
	}
		
	meetingtime = Math.round(new Date(meetingtime) / 1000);
	var obj_matter= pref + " textarea";
	// var obj_enclosurename = pref + " article .fj label input";
	var matter = $( obj_matter ).val();	
	
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
				mstate ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				"assignenclosure": enclosure,
				"assignenclosurename": filename,
				"matter": matter,
				}
			).getJson(function(json) {
			
				Enforcementnavnav = "1";
				history.go(-1);	
				
				$("#enforcementCommitteeAduit .session").val("");
				$("#enforcementCommitteeAduit article .fj fja").text("") ;
				$("#enforcementCommitteeAduit article .fj fj_path").text("") ;
				
				$("#enforcementCommitteeAduit .date-picker").val("");
				obj_matter.text("");
				
			})	
		})
	})
	
	// updateEnforcementState ( 4 );	
});


//处理完结
function enforcementFinish_click( key  ){
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
				mstate ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				}
			).getJson(function(json) {
			
				// Enforcementnavnav = "1";
				// history.go(-1);	
				
				
			})	
		})
	})
}
//处理报告
$("#enforcementhandleReport .normalbutton").click(function() {
	console.log("____________________ enforcementhandleReport 提交")
	var pref = "#enforcementhandleReport ";
	var key = $("#enforcementViewlayout_handleID").val();
	var obj_enclosurename = pref + " .fja";
	var obj_enclosure = pref + " .fj_path";
	
	
	var enclosure = $( obj_enclosure ).text() ;
	var enclosurename = $( obj_enclosurename ).text() ;
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var key = $("#enforcementViewlayout_handleID").val();
	console.log("____________________ filename="+filename)
	console.log("____________________ enclosure="+enclosure)
	console.log("____________________ key="+key)	
	var shijian = Date.parse(new Date()) / 1000;
		
	
	if ( isEmpty( enclosure ) ) {
		alert( "请添处理报告文件" );
		return;
	}
		
	var obj_matter= pref + " textarea";
	var matter = $( obj_matter ).val();	
	RssApi.Table.List( enforcementTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,			
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var mstate = parseInt(v.state);
				mstate ++ ;	
					
			RssApi.Edit(enforcementTablename).setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": mstate,
				"typeid": v.typeid,
				"handleReportenclosure": enclosure,
				"handleReportenclosurename": filename,
				// "matter": matter,
				}
			).getJson(function(json) {
			
				Enforcementnavnav = "1";
				history.go(-1);	
				
				$("#enforcementCommitteeAduit .session").val("");
				$("#enforcementCommitteeAduit article .fj fja").text("") ;
				$("#enforcementCommitteeAduit article .fj fj_path").text("") ;
				
				$("#enforcementCommitteeAduit .date-picker").val("");
				obj_matter.text("");
				
			})	
		})
	})
	
	// updateEnforcementState ( 4 );	
});
$("#submitEnforcementReport .hisback").click(function() {
	$("#submitEnforcementReport .session").val("");
	$("#submitEnforcementReport article .fj1 fja").text("") ;
	$("#submitEnforcementReport article .fj1 fj_path").text("") ;
	
	$("#submitEnforcementReport .date-picker").val("");
	$("#submitEnforcementReport .article .fj1 lable input").val("");
	$("#submitEnforcementReport article .fj1 label input").text("") ;
	$("#submitEnforcementReport article .fj1 label input").val("") ;
});	

$("#enforcementSubmitCommittee .hisback").click(function() {
	$("#enforcementSubmitCommittee .session").val("");
	$("#enforcementSubmitCommittee article .fj1 fja").text("") ;
	$("#enforcementSubmitCommittee article .fj1 fj_path").text("") ;
	$("#enforcementSubmitCommittee .date-picker").val("");
});	


$("#submitEnforcementReport .hisback").click(function() {
	$("#enforcementCommitteeAduit .session").val("");
	$("#enforcementCommitteeAduit article .fj1 fja").text("") ;
	$("#enforcementCommitteeAduit article .fj1 fj_path").text("") ;
	
	$("#enforcementCommitteeAduit .date-picker").val("");
	$("#enforcementCommitteeAduit .article .fj1 lable input").val("");
	$("#enforcementCommitteeAduit article .fj1 label input").text("") ;
	$("#enforcementCommitteeAduit article .fj1 label input").val("") ;
});	

//处理报告
$("#enforcementhandleReport .hisback").click(function() {
	$("#enforcementhandleReport article .fj1 fja").text("") ;
	$("#enforcementhandleReport article .fj1 fj_path").text("") ;
	
	$("#enforcementhandleReport .article .fj1 lable input").val("");
	$("#enforcementhandleReport article .fj1 label input").text("") ;
	$("#enforcementhandleReport article .fj1 label input").val("") ;
});	



$("#enforcementWorkReport").load(function() {
})

$("#enforcementViewlayout").on('click','#attachment',function(){
		path = local_solution_init ;
		if ( isEmpty( path ) ) {
			return;
		}
		
		var appendObj = "#enforcementViewlayout" + " article  ul";
		var dz = global_ip + "upfile/" + path;
		if ( dz.indexOf(".doc") != -1 ) {
			var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
			xurl += encodeURIComponent(dz);
			window.open(xurl);
		} else {
			var pdfh5 = new Pdfh5( appendObj , {
				pdfurl: dz,
			});
			// var pdfh5 = new Pdfh5('.pdfjs11', {
			// 	pdfurl: dz
			// });
		}
	
});
