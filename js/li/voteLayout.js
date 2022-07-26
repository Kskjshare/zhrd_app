var specific_default_mode = 1 ;

$("#addvotelayout").load(function() {
	
	var missions = "", realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
	
	reviewclass = {};
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#addvotelayout [reviewclass]").attr("relationid", v.id)
			$("#addvotelayout [reviewclass]").text(v.name)
		})
		$("#addvotelayout [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	
	
	$("#addvotelayout input[type='radio'][name='mode']").off().click(function() {
		var value = $(this).val();
		if ( specific_default_mode != value ) {
			
			resetState();
			specific_default_mode = value ;
		}
	
		$("#vote_members").hide();
		if ( value == 1 ) { //主任会议				
			$("#vote_members").hide();
		}
		else {							
			$("#vote_members").show();				
		}
	}) 

	
	$("#addvotelayout .lmr").off().click(function() {
		addmember ( "addvotelayout" );
	})
	
	
	$("#addvotelayout .submitbutton").off().click(function() {
		submit ("addvotelayout");
	})
})

$("#addvotelayout .hisback").click(function() {
	resetState ( ) ;
});		

function resetState( ) {
	
	var pref = "#addvotelayout ";
	var obj_title = pref + " .smalltitle input";
	var obj_reviewclass = pref + " .marginb .select";
	var obj_time = pref + " .smalltitle .date-picker";
	
	$( obj_title ).val("");
	$( obj_time ).val("");
	
	//人大代表
	var obj_mission = pref + " [mission]";
	$( obj_mission ).val("");
	var obj_span = pref + " .smalltitle .span";
	$( obj_span ).text("");
	
	//会议
	var obj_shijian = pref + " .meetingtitle .date-picker"; //会议时间
	$( obj_shijian ).val("");
	var obj_session = pref + " .smalltitle .directorsession"; //会议届次
	$( obj_session ).val("");	
	var obj_matter= pref + " textarea";
	$( obj_matter ).val("");

}

function submit ( obj ) {
	var alertTime = true ;
	var typeid = 9 ;//默认调研
	var lwstate = 9 ;
	var tablename = "vote_activity";
	
	var timetips = "请填写会议时间";
	var meetingnumtips = "请填写会议届次";
	var titletips = "请填写投票标题";
	var enclosureEmpty = "请添加调研方案";
	var pref = "#addvotelayout ";	
	
	var mode = $("#" + obj).find("input[type='radio'][name='mode']:checked").val(); 
	
	var obj_time = pref + " .smalltitle .date-picker";
	
	var obj_meetingtime = pref + " .meetingtitle .date-picker";
	var obj_session = pref + " .smalltitle .session"; //会议届次
	var obj_reviewclass = pref + " .marginb .select";
	
	var obj_title = pref + " .smalltitle .title";
	var obj_opinion= pref + " textarea";
	
	var obj_voterid = pref + " .lmr span";
	var obj_votername = pref + " [mission]";
	var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	var time = $( obj_time ).val();
	var meetingshijian = $( obj_meetingtime ).val();//会议时间
	var session = $( obj_session ).val();
	
	var reviewclass = $(pref + " [reviewclass]").attr("relationid");
	 reviewclass  = $( pref + " [reviewclass]").text();
	
	
	var title = $( obj_title ).val();
	var opinion = $( obj_opinion ).val();
	
	var votersid = $( obj_voterid ).text();

	var votername = $( obj_votername ).val();
	// var enclosurename = $( obj_enclosurename ).val() ;
  	
	// var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var shijian = Date.parse(new Date()) / 1000;
	
	
	
	if ( isEmpty( title ) ) {
	    alert( titletips );
		return;
	}
	if ( isEmpty( time ) ) {
	    alert( timetips );
		return;
	}
	if ( isEmpty( session ) ) {
	    alert( meetingnumtips );
		return;
	}
	

	
	var time = Math.round(new Date(time) / 1000);
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
		new RssDict().keyvalue({
			"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {		
		var realname=json[0].realname
		console.log(realname)				
		RssApi.Edit( tablename ).setLoading(true).keyvalue({
		"title": title,		
		"meetingshijian": meetingshijian,
		"session": session ,	
		"myid": RssUser.Data.myid ,
		"shijian": shijian,	
		"opinion": opinion,
		
		"voterids": votersid,
		"votetype": mode,
		
		// "votername": votername,			
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


$("#voteListlayout").load(function() {
	if (arry.indexOf("voteListlayout") == "-1") {
		$("#voteListlayout ul li").eq(0).siblings().remove();
		arry.push("voteListlayout")
	} else {
		$("#voteListlayout ul li").remove();
	}
	
	faqsajax = RssApi.Table.List("vote_activity").setLoading(true).condition(new RssDict().keyvalue({
		
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
			var myid = RssUser.Data.myid ;
			$.each(json, async function(k, v) {
				
				if ( v.votetype == "1") { //全部人投票
					fillvotelist ( v , "voteListlayout" );	
				}
				else { //指定人员投票
					if ( v.voterids.indexOf( myid ) != -1 ){
						//投票人
						fillvotelist ( v , "voteListlayout" );	
					}
				}
							 
			})	
			
			
			
			// RssApi.Table.List("user").setLoading(true).condition( new RssDict().keyvalue({
			// 	"myid": json[0].myid,
			// 	}).getDict()).setFlushUI(function(data, append) {
					
				
					
			// 	for ( var i = 0 ; i < json.length; i ++ ) {
			// 		$("#mstate").val( json[i].state );
			// 		json[i].avatar = data[0].avatar;
					
			// 	}					
									
			// 	$.each(json, async function(k, v) {
					
			// 		if ( v.votetype == "1") {
						
			// 		}
			// 		else {
						
			// 		}
			// 		fillInvestigateList ( v , "myresearch" );				 
			// 	})	
			// }).getJson();	
		}
	}).getJson();
})



function isVoter( voter ){ //
	
	var result = false ;
	var uid = RssUser.Data.myid ;
	
	if ( voter.votetype == "1") {
		result = true;
		return result;
	}
	if ( isEmpty( voter.voterids ) ) {		
		return result ;
	}
	
	if ( uid.indexOf( voter.voterids ) == -1 ) {
		return result ;
	}
	result = true ;
	
	return result ;
}

function getVoteState( voter ){ 
	var state = "未投票";
	var uid = RssUser.Data.myid ;
	if ( uid.indexOf( voter.voterids ) != -1 ) {
		state = "已投票";;
	}
	return state;
}

function isVoted( voter ){ 
	var result = false;
	faqsajax = RssApi.Table.List("vote_evaluation").setLoading(true).condition(new RssDict().keyvalue({
		"evaluationId": voter.id,
		"myid": RssUser.Data.myid 
		}).getDict()).setFlushUI(function(json, append) {
		if ( json.length > 0 ) {
			result = true;
			
		}
		return result;
			
	}).getJson();
	
	
	
	// var result = false;
	// var uid = RssUser.Data.myid ;
	// if ( uid.indexOf( voter.votedids ) != -1 ) {
	// 	result = true ;
	// }
	// return result;
}
function fillvotelist( v , Obj ) {
	
	var mstate = parseInt( v.state );
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "投票状态: 未投票" ;
	var avatar = v.avatar ;
	if ( "undefined".indexOf(avatar) != -1 ) {
		avatar = global_ip + "upfile/avatar.png" ;
	}
	else {
		avatar = global_ip + "upfile/" + avatar ;
	}
	var liStr = '<li><img class="headimage" src="' + avatar +'" bindkeys="avatar" ' + 
	
	// var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1 style="margin-left: 20px;">' + v.title +
	
		'</h1><p style="margin-left: 20px;">' + state + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'    + '</p>'+
		'<div class="lifoot" id=' + v.id +
		'>'	
		
	var isvoted = false ;	
	faqsajax = RssApi.Table.List("vote_evaluation").setLoading(true).condition(new RssDict().keyvalue({
		"evaluationId": v.id,
		"myid": RssUser.Data.myid 
		}).getDict()).setFlushUI(function(json, append) {
		if ( json.length > 0 ) {
			isvoted = true;
			state = "投票状态: 已投票" 
			liStr = '<li><img class="headimage" src="' + avatar +'" bindkeys="avatar" ' +
				'</span></div><h1 style="margin-left: 20px;">' + v.title +
				'</h1><p style="margin-left: 20px;">' + state + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'    + '</p>'+
				'<div class="lifoot" id=' + v.id +
				'>'	
		}
			
	
			
			
			
		if ( isVoter ( v ) ) {
			if ( isvoted ) {
				liStr += '<a href="#votestatics" class="see" onclick="voteStaticsClick('+v.id+');"><span>投票统计</span></a></div></li>';
				
			}else {
				liStr += '<a href="#votestatics" class="see" onclick="voteStaticsClick('+v.id+');"><span>投票统计</span></a><a href="#votelayout" class="ans" onclick="voteClick('+v.id+');"><span>我要投票</span></a></div></li>';
				
			}
		}else {
			if ( isvoted ) {
				liStr += '<a href="#votestatics" class="see" onclick="voteStaticsClick('+v.id+');"><span>投票统计</span></a></div></li>';
			}
			else {
				liStr += '<a href="#votestatics" class="see" onclick="voteStaticsClick('+v.id+');"><span>投票统计</span></a><a href="#votelayout" class="ans" onclick="voteClick('+v.id+');"><span>我要投票</span></a></div></li>';
			}
		}
		
		liStr += '<input type="hidden" state_id='+mstate+' />'
		$(append_obj).append(liStr);
		$("#state_id").val(mstate);
	}).getJson();
				
		// liStr += '<input type="hidden" state_id='+mstate+' />'
		// $(append_obj).append(liStr);
		// $("#state_id").val(mstate);
}

var evalutionid ="1"
function voteClick( key  ) {
	evalutionid = key ;
}
function voteStaticsClick( key  ) {
	evalutionid = key ;
	$("#vote_key").val(key);
	getVoteData( key )
}


$("#votelayout .normalbutton").off().click(function() {
	var voteOption = $("#votelayout .marginb .form input:radio:checked")
		.val();
	var opinion = $("#votelayout textarea").val();
	
	var k1 = {
		// "name": RssUser.Data.realname,
		"evaluationResult": voteOption,
		"opinion": opinion,		
		"myid": RssUser.Data.myid,
		"evaluationId": evalutionid
	}
	console.log("_____ evalutionid="+evalutionid)
	faqsajax = RssApi.Table.List("vote_activity").setLoading(true).condition(new RssDict().keyvalue({
		"id": evalutionid
		}).getDict()).setFlushUI(function(json, append) {
		if ( json.length > 0 ) {
			var votedids = json[0].votedids ;
			console.log("_____ votedids="+votedids)
			if ( !isEmpty(votedids) ) {
				votedids += ',';
			}
			votedids += RssUser.Data.myid ;
			console.log("_____ bbbb evalutionid="+evalutionid)
			var k = {
				"id": evalutionid,
				"votedids": votedids	
			}
			RssApi.Edit("vote_activity").setLoading(true).keyvalue(k)
				.keyvalue({
					"id": evalutionid,
					// "votedids": votedids
				}).getJson(function(json) {
					
				})
			
		}
			
	}).getJson();
	
	console.log(k1)
	
	
	
	RssApi.Edit("vote_evaluation").setLoading(true).keyvalue(k1)
		.keyvalue({
			// "id": key
		}).getJson(function(json) {
			console.log(json)
			if (json.id) {
				alert("投票成功");
				$("#votelayout textarea").val("");
				// location.href = "#votelayout";
				history.go(-1);
			} else {
				alert("投票成功");
			}
		})
})