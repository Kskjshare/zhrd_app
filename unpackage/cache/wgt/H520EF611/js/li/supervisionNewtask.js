
//顺序 1:听取和审议专项工作报告   2：执法检查  3：专题询问   4： 特定问题调查  5：撤职案的审议和决定  6：视察  7 调研
var specific_default_mode = 1 ;
$("#supervisionNewtask_enforcement").click(function(){	
 localStorage.setItem("source", "2");
 location.href = "#supervisionNewtask";
})

$("#supervisionNewtask_inquery").click(function(){	
 localStorage.setItem("source", "3");
 location.href = "#supervisionNewtask";
})

$("#supervisionNewtask_specialwork").click(function(){	
 localStorage.setItem("source", "4");
 location.href = "#supervisionNewtask";
})

$("#supervisionNewtask_dismissal").click(function(){
 localStorage.setItem("source", "5");
 location.href = "#supervisionNewtask";
})



$("#supervisionNewtask").load(function() {
	specific_default_mode = 1 ;
	
	var missions = "", realname = "";
		
	var source = localStorage.getItem("source");	
    console.log("___________ source=",source)
		
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
	
	//专题询问，隐藏相关不需要的选项
	if ( source == 2 ) {
		$("#supervisionNewtask h1").text("新增执法检查")
		$("#specificissue_committee").hide();
		$("#specificissue_delegate").hide();
		$("#specificissue_other").hide();
		$("#newtask_specificwork_launcher").hide();
	}
	else if ( source == 3 ) {
		$("#supervisionNewtask h1").text("新增专题询问")
		$("#newtaskplace_id").hide();
		$("#newtasktime_id").hide();
		$("#newtask_launcher").hide();
		
		$("#specificissue_committee").hide();
		$("#specificissue_delegate").hide();
		$("#specificissue_other").hide();
		$("#newtask_specificwork_launcher").hide();
	}
	else if ( source == 4 ) {
		$("#supervisionNewtask h1").text("新增特定问题调查")
		$("#newtaskplace_id").hide();
		$("#newtasktime_id").show();
		$("#newtask_previewcheck").hide();
		$("#newtask_previewleader").hide();
		$("#newtask_launcher").hide();
		
		$("#newtask_meetingshijian").hide();
		$("#newtask_directormeetingnum").hide();
		$("#newtask_committeemeetingshijian").show();
		$("#newtask_committeemeetingnum").show();
		
		$("#newtask_specificwork_launcher").show();
		
		$("#specificissue_committee").show();
		$("#specificissue_delegate").show();
		$("#specificissue_other").show();
		
		
		
		
	}
	else if ( source == 5 ) {
		$("#supervisionNewtask h1").text("新增撤职案的审议和决定")
		// $("#newtaskscheme_id").text("撤职案文件")
		
		
		$("#newtaskplace_id").hide();
		$("#newtasktime_id").hide();
		$("#newtask_previewcheck").hide();
		$("#newtask_previewleader").hide();
		$("#newtask_meetingshijian").hide();
		$("#newtask_directormeetingnum").hide();
		
		
		$("#specificwork_co-committeemember").hide();
		$("#specificissue_committee").hide();
		$("#specificissue_delegate").hide();
		$("#specificissue_other").hide();
		$("#newtask_specificwork_launcher").hide();
		
		
		$("#newtask_launcher").show();
		$("#newtask_committeemeetingshijian").show();
		$("#newtask_committeemeetingnum").show();
		
		
		
		
	}
	else if ( source == 6 ) {
		$("#supervisionNewtask h1").text("新增视察")
	}
	else if ( source == 7 ) {
		$("#supervisionNewtask h1").text("新增调研")
	}
	
	
	
	reviewclass = {};
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#supervisionNewtask [reviewclass]").attr("relationid", v.id)
			$("#supervisionNewtask [reviewclass]").text(v.name)
		})
		$("#supervisionNewtask [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	
	
	
	initiatorMode = {};
	RssApi.Table.List("dissmisal_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			initiatorMode[v.id] = v.name
			$("#supervisionNewtask [initiatorMode]").attr("relationid", v.id)
			$("#supervisionNewtask [initiatorMode]").text(v.name)
		})
		$("#supervisionNewtask [initiatorMode]").off("click").click(function() {
			zzc($(this), initiatorMode);
		})
	})
	
	
	$("#supervisionNewtask .lmr").off().click(function() {
		addmember ( "previewleader_supervisionNewtask" );
	})
	
	$("#supervisionNewtask .lmrco-committeemember").off().click(function() { //特定问题调查添加常委会联名成员			
		addmember("supervisionNewtask_co-committeemember");
		console.log("___________ lmrco-committeemember ")
	})
	$("#supervisionNewtask .lmr_committeemember").off().click(function() { //特添加常委会成员
		addmember("supervisionNewtask_committeemember");
	})
	$("#supervisionNewtask .lmr_delegate").off().click(function() { //人大代表
		addmember("supervisionNewtask_delegate");
	})
	$("#supervisionNewtask .lmr_other").off().click(function() { //其他人员
		addmember("supervisionNewtask_othermember");
	})
	
	

	 $("#supervisionNewtask input[type='radio'][name='ZH']").off().click(function() {
	 	var value = $(this).val();
		console.log("___________ value=",value)
		var source = localStorage.getItem("source");	
		
		if ( source == 4 ) { //特定问题调查
			$("#newtask_previewleader").hide();
			if ( value == 1 ) { //主任会议				
				$("#specificwork_co-committeemember").hide();
				
				
				$("#newtask_meetingshijian").hide();
				$("#newtask_directormeetingnum").hide();
				$("#newtask_committeemeetingshijian").show();
				$("#newtask_committeemeetingnum").show();
				
				
				
			}
			else {							
				$("#specificwork_co-committeemember").show();				
				$("#newtask_meetingshijian").show();
				$("#newtask_directormeetingnum").show();
				$("#newtask_committeemeetingshijian").hide();
				$("#newtask_committeemeetingnum").hide();
		
			}
		}
		else if ( source == 5 ) { //撤职案的审议和决定
			if ( value == 6 ) { //常委会成员联名
				$("#newtask_meetingshijian").show();
				$("#newtask_directormeetingnum").show();
				$("#newtask_committeemeetingshijian").hide();
				$("#newtask_committeemeetingnum").hide();
			}
			else {
				$("#newtask_meetingshijian").hide();
				$("#newtask_directormeetingnum").hide();
				$("#newtask_committeemeetingshijian").show();
				$("#newtask_committeemeetingnum").show();
			}
		
		}
		else {
			if (value == 1) {
				$("#newtask_previewleader").show();
				$("#newtask_meetingshijian").hide();
				$("#newtask_directormeetingnum").hide();
			} else {
				$("#newtask_previewleader").hide();
				$("#newtask_meetingshijian").show();
				$("#newtask_directormeetingnum").show();
			}
		}
		
		
	 })
	 
	 
	$("#supervisionNewtask input[type='radio'][name='mode']").off().click(function() {
		//特定问题调查
		var value = $(this).val();
		if ( specific_default_mode != value ) {
			
			resetState();
			specific_default_mode = value ;
		}
	
		$("#newtask_previewleader").hide();
		if ( value == 1 ) { //主任会议				
			$("#specificwork_co-committeemember").hide();
			
			
			$("#newtask_meetingshijian").hide();
			$("#newtask_directormeetingnum").hide();
			$("#newtask_committeemeetingshijian").show();
			$("#newtask_committeemeetingnum").show();
			
			
			
		}
		else {							
			$("#specificwork_co-committeemember").show();				
			$("#newtask_meetingshijian").show();
			$("#newtask_directormeetingnum").show();
			$("#newtask_committeemeetingshijian").hide();
			$("#newtask_committeemeetingnum").hide();
	
		}
		
	}) 

	$("#supervisionNewtask .submitbutton").off().click(function() {
		submit ("supervisionNewtask");
	})
})

$("#supervisionNewtask .hisback").click(function() {
	resetState ( ) ;
	specific_default_mode = 1 ;
});		

function resetState( ) {
	
	var pref = "#supervisionNewtask ";
	var obj_title = pref + " .smalltitle input";
	var obj_reviewclass = pref + " .marginb .select";
	var obj_time = pref + " .smalltitle .date-picker";
	var obj_enclosure = pref + " .fj_path";
	var obj_enclosurename = pref + " .fja";
	
	
	$( obj_title ).val("");
	$( obj_time ).val("");
	$( obj_enclosurename ).text("") ;
	$( obj_enclosure ).text("") ;
	
	//常委会联名成员
	//ids = "#supervisionNewtask .smalltitle1 .specificissue_span";
	var obj_cocommittee = "#supervisionNewtask [specificissue_mission]";
	$( obj_cocommittee ).val("");
	
	//常委会成员
	var obj_committeemember = pref + " [committeemember_mission]";
	$( obj_committeemember ).val("");
	var obj_committeememberid = pref + " .smalltitle .committeemember_span";
	$( obj_committeememberid ).text("");
	//人大代表
	var obj_delegate = pref + " [delegate_mission]";
	$( obj_delegate ).val("");
	var obj_delegateid = pref + " .smalltitle .delegate_span";
	$( obj_delegateid ).text("");
	//其他人员
	var obj_other = pref + " [other_mission]";
	$( obj_other ).val("");
	var obj_otherid = pref + " .smalltitle other_span";
	$( obj_otherid ).text("");
	
	//主任会议
	var obj_directortime = pref + " .meetingtitle .date-picker"; //主任会议时间
	$( obj_directortime ).val("");
	var obj_directorsession = pref + " .smalltitle .directorsession"; //主任会议届次
	$( obj_directorsession ).val("");
	//常委会议
	var obj_committeetime = pref + " .committeemeetingtitle .date-picker"; //常委会会议时间
	$( obj_committeetime ).val("");
	var obj_committeesession = pref + " .smalltitle .committeesession"; //常委会议届次
	$( obj_committeesession ).val("");
	
	var obj_matter= pref + " textarea";
	$( obj_matter ).val("");
	return;
	
	
	
	
	
	
	
	var pref = "#supervisionNewtask ";
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
	var obj_enclosurename = pref + " article .fj label input";
	// var obj_enclosurename2 = pref + " article input";//
	var obj_cocommitteemember = pref + " .mn";
	
	$( obj_enclosurename ).val("");
	$( obj_reviewclass ).val("");
	$( obj_enclosure ).val("");
	$( obj_place ).val("");
	$( obj_matter ).val("");
	$( obj_previewleaderid ).text("");
	$( obj_previewLeaderRealName ).val("");
	// $("#supervisionNewtask").find("input[type='radio'][name='ZH']:checked").val("1");
	// $("#supervisionNewtask").find("input[type='radio'][name='mode']:checked").val("1");
	
	$(obj_meetingtime).val("");
	// $( obj_enclosurename2 ).val("");//
	$(obj_cocommitteemember).val("");
	
}

function submit ( obj ) {
	var alertTime = true ;
	var typeid = 9 ;//默认调研
	var lwstate = 9 ;
	var tablename = "supervision_inspection";
	
	var timetips = "请填写调研时间";
	var titletips = "请填写调研标题";
	var enclosureEmpty = "请添加调研方案";
	var pref = "#supervisionNewtask ";
	
	
	//顺序 1:听取和审议专项工作报告   2：执法检查  3：专题询问   4： 特定问题调查  5：撤职案的审议和决定  6：视察  7 调研
	var source = localStorage.getItem("source");
	
	
	
	var leaderpreview = $("#" + obj).find("input[type='radio'][name='ZH']:checked").val();
	var mode = $("#" + obj).find("input[type='radio'][name='mode']:checked").val(); //特定问题调查发起方式
	if ( source == 2 ) {
		
		titletips = "请填写专项报告标题";
		enclosureEmpty = "请添加专项报告方案";	
		alertTime = false; 
	}
	else if ( source == 4 ) {
		timetips = "请填写特定问题调查时间";
		titletips = "请填写特定问题调查标题";
		enclosureEmpty = "请添加特定问题调查方案";	
	    tablename = "supervision_specific_issue";
		console.log("_______ leaderpreview=" + leaderpreview);
	}
	else if ( source == 5 ) {
		timetips = "请填写撤职案的审议和决定时间";
		titletips = "请填写撤职案的审议和决定标题";
		enclosureEmpty = "请添加撤职案的审议和决定方案";
	}
	else if ( source == 6 ) {
		timetips = "请填写视察时间";
		titletips = "请填写视察标题";
		enclosureEmpty = "请添加视察方案";	
	}
	else if ( source == 7 ) {
		
	}
	
	if ( obj.indexOf( "supspecialworkXZ" ) != -1 ) {
		typeid = 1 ;
		lwstate = 1 ;
		pref = "#supspecialworkXZ";
		//timetips = "请填写视察时间";
		titletips = "请填写专项报告标题";
		enclosureEmpty = "请添加专项报告方案";	
		alertTime = false; 
		tablename = "supervision_specialwork";
	}
	else if ( obj.indexOf( "supinspectionXZ" ) != -1 ) {
		typeid = 1 ;
		lwstate = 1 ;
		pref = "#supinspectionXZ";
		timetips = "请填写执法检查时间";
		titletips = "请填写执法检查标题";
		enclosureEmpty = "请添加执法检查方案";	
		alertTime = false; 
		tablename = "supervision_enforcement";
	}
	
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
	var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	var time = $( obj_time ).val();
	var meetingshijian = $( obj_meetingtime ).val();//主任会议时间
	var session = $( obj_session ).val();
	
	var reviewclass = $(pref + " [reviewclass]").attr("relationid");
	 reviewclass  = $( pref + " [reviewclass]").text();
	
	var place = $( obj_place ).val();
	var title = $( obj_title ).val();
	var matter = $( obj_matter ).val();
	var enclosure = $( obj_enclosure ).text() ;
	var previewleaderid = $( obj_previewleaderid ).text();
	var previewLeaderRealName = $( obj_previewLeaderRealName ).val();
	var enclosurename = $( obj_enclosurename ).val() ;
  
	// var leaderpreview = $("#" + obj).find("input[type='radio'][name='ZH']:checked").val();
	
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var shijian = Date.parse(new Date()) / 1000;
	
	// resetState () ;	
	// history.go(-1);					
	// return;
	
	
	if ( isEmpty( title ) ) {
	    alert( titletips );
		return;
	}
	if ( isEmpty( time ) && alertTime ) {
	    alert( timetips );
		return;
	}
	
	if ( source == 4 ) { //特定问题调查
		var obj_cocommitteemember = pref + " .mn";
		var members = $( obj_cocommitteemember ).val();
		console.log("_______ members=" + members);
		if ( isEmpty( members ) && mode == 2 ) {
			alert( "请添加常委会联名成员" );
		}
		
		if ( mode == 2 ) {
			//常委会议
			//var obj_committeetime = pref + " .committeemeetingtitle .date-picker"; //常委会会议时间
			var mTime = $( "#supervisionNewtask .committeemeetingtitle .date-picker" ).val();
			//var obj_committeesession = pref + " .smalltitle .committeesession"; //常委会议届次
			
			var mcocommittee = $( "#supervisionNewtask [specificissue_mission]" ).val();
			if ( isEmpty( mcocommittee) ) {
				alert( "请添加常委会联名成员" );
			}
			
			if ( isEmpty( mTime) ) {
				alert( "请添加常委会会议时间" );
			}
			
		}
		
	}
	// if ( isEmpty( enclosure ) ) {
	//     alert( enclosureEmpty );
	// 	return;
	// }
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
	
	//return;
	
	var inspecttime = Math.round(new Date(time) / 1000);
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
		new RssDict().keyvalue({
			"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		if ( typeid == 1 ) { //听取和审议专项工作报告
			insert_specialwork_table ( json );
			return ;
		}
		var realname=json[0].realname
		console.log(realname)
		
		
		if ( source == 4 ) {
			//特定问题调查
			insert_specificissue_table();
			return;
		}
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
	
	

function insert_specificissue_table ( ) {
	
	console.log("_______ insert_specificissue_table" );
	var pref = "#supervisionNewtask";
	
	
	var obj_title = pref + " .smalltitle .title";
	var obj_reviewclass = pref + " .marginb .select";
	var obj_time = pref + " .smalltitle .date-picker";
	var obj_enclosure = pref + " .fj_path";
	var obj_enclosurename = pref + " .fja";
	
	
	var title = $( obj_title ).val();
	var shijian = $( obj_time ).val();
	var enclosurename = $( obj_enclosurename ).text() ;
	var enclosure = $( obj_enclosure ).text() ;
	
	
	//常委会成员
	var obj_committeemember = pref + " [committeemember_mission]";
	var committeememberName = $( obj_committeemember ).val();
	var obj_committeememberid = pref + " .smalltitle .committeemember_span";
	var committeeobjid = $( obj_committeememberid ).text();
	//人大代表
	var obj_delegate = pref + " [delegate_mission]";
	var delegatememberName = $( obj_delegate ).val();
	var obj_delegateid = pref + " .smalltitle .delegate_span";
	var objid = $( obj_delegateid ).text();
	//其他人员
	var obj_other = pref + " [other_mission]";
	var parttimememberName = $( obj_other ).val();
	var obj_otherid = pref + " .smalltitle other_span";
	var parttimemember = $( obj_otherid ).text();
	
	//主任会议
	var obj_directortime = pref + " .meetingtitle .date-picker"; //主任会议时间
	var directortime = $( obj_directortime ).val();
	var obj_directorsession = pref + " .smalltitle .directorsession"; //主任会议届次
	var directorsession = $( obj_directorsession ).val();
	//常委会议
	var obj_committeetime = pref + " .committeemeetingtitle .date-picker"; //常委会会议时间
	var committeetime = $( obj_committeetime ).val();
	var obj_committeesession = pref + " .smalltitle .committeesession"; //常委会议届次
	var committeesession = $( obj_committeesession ).val();
	
	console.log("_______ title=" + title );
	console.log("_______ shijian=" + shijian );
	console.log("_______ enclosurename=" + enclosurename );
	console.log("_______ enclosure=" + enclosure );
	console.log("_______ committeememberName=" + committeememberName );
	console.log("_______ committeeobjid=" + committeeobjid );
	console.log("_______ delegatememberName=" + delegatememberName );
	console.log("_______ delegateid=" + objid );
	console.log("_______ othername=" + parttimememberName );
	console.log("_______ otherid=" + parttimemember );
	
	console.log("_______ directortime=" + directortime );
	console.log("_______ directorsession=" + directorsession );
	
	var obj_cocommitteemember = pref + " .mn";
	var members = $( obj_cocommitteemember ).val();
	console.log("_______ members=" + members);
	
	var obj_cocommittee = "#supervisionNewtask [specificissue_mission]";
	var cocommittee = $( obj_cocommittee ).val();
	var obj_cocommitteeids = "#supervisionNewtask .smalltitle1 .specificissue_span";
	var cocommitteeids = $( obj_cocommitteeids ).val();
	console.log("_______ cocommitteeids=" + cocommitteeids );
	
	// var obj_meetingtime = pref + " .meetingtitle .date-picker";
	// var obj_session = pref + " .smalltitle .session"; //主任会议届次
	// var obj_reviewclass = pref + " .marginb .select";
	
	// var obj_place = pref + " .smalltitle .place";
	
	// var obj_matter= pref + " textarea";
	
	// var obj_previewleaderid = pref + " .lmr span";
	// var obj_previewLeaderRealName = pref + " [mission]";
	// // var obj_enclosurename = pref + " article .fj label input";
	// var obj_enclosurename2 = pref + " article input";//
	// var obj_cocommitteemember = pref + " .mn";
	
	
	// var previewleaderid = $( obj_previewleaderid ).text();
	// var previewLeaderRealName = $( obj_previewLeaderRealName ).val();
	
	
	
	
	
	
	// console.log("_______ obj_previewleaderid=" + $( obj_previewleaderid ).val());
	// console.log("_______ obj_previewLeaderRealName=" + $( obj_previewLeaderRealName ).val());
	// console.log("_______ enclosurename=" + enclosurename);
	
	$("#supervisionNewtask").find("input[type='radio'][name='ZH']:checked").val("1");
	var initiator = $("#supervisionNewtask").find("input[type='radio'][name='mode']:checked").val();
	var obj_matter= pref + " textarea";
	var matter = $( obj_matter ).val();
	
	var lwstate = 6 ;
	var typeid = 6 ;
	
	
	shijian = Math.round(new Date(shijian) / 1000) ;
	directortime = Date.parse(new Date()) / 1000 ;
	committeetime = Date.parse(new Date()) / 1000 ;
	if ( !isEmpty( directortime ) ) {	
		directortime = Math.round(new Date(directortime) / 1000) ;
	}
	
	if ( isEmpty( directortime ) ) {	
		committeetime = Math.round(new Date(committeetime) / 1000) ;
	}

	RssApi.Edit( "supervision_specific_issue" ).setLoading(true).keyvalue({
		"title": title,
		"lwstate": lwstate,
		// "meetingshijian": meetingshijian,
		// "inspecttime": inspecttime,
		// "reviewclass": reviewclass,
		"enclosure": enclosure,
		"enclosurename": enclosurename,
		"myid": RssUser.Data.myid ,
		"shijian": shijian,
		"state": 1,
		"matter": matter,
		"typeid": typeid,
		"directorshijian": directortime ,
		"directormeetingnum": directorsession ,
		"committeeshijian": committeetime ,
		"committeemeetingnum": committeesession ,
		
		
		"cocommittee": cocommittee ,
		"cocommitteeids": cocommitteeids ,
		
		"committeememberName": committeememberName ,
		"committeeobjid": committeeobjid ,
		"delegatememberName": delegatememberName ,
		"objid": objid ,
		"parttimememberName": parttimememberName ,
		"parttimemember": parttimemember ,
		
		"cocommittee": cocommittee ,
		
		"initiator": initiator,
		// "place": place,
		"taskDone": 0 ,
		// "leaderpreview": leaderpreview,
		// "previewleadername": previewleaderid,
		// "previewLeaderRealName": previewLeaderRealName,
		// "needsubmitmeeting": 0,
		"readState": 1
			
			
		}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");			
					resetState ( );
					history.go(-1);					
				} else {
					alert("提交失败");
				}
			})
} 