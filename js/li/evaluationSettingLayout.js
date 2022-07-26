

function settingSwitchOff( tablename , key , typeid  ) {
	var k1 = {
		"id": key,
		"evaluationState": 0,
		"myid": RssUser.Data.myid,
			
	}
		
	RssApi.Edit(tablename).setLoading(true).keyvalue( k1 ).getJson(function(json) {
		if (json.id) {
			alert( "关闭成功" );
		}
		else{
			alert( "关闭失败" );
		}
		evaluationsystemLayoutnav = "1";
		
	})		
}
function settingAddmember ( type ) {
	var missions = "",
		realname = "";
	location.href = "#selectmember"
	if (arry.indexOf("selectmember") == "-1") {
		$("#selectmember ul li").eq(0).siblings().remove();
		arry.push("selectmember")
	} else {
		$("#selectmember ul li").remove();
	}
	if ( type.indexOf("committeeMember") != -1 ) {
		membertitle ="常委会成员";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "100").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
			select_member ( jsona , "evaluationSettingLayout1" ) ;	
		}).getJson();
	}
	
	else if ( type.indexOf("congressDeputy") != -1 ) {
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "400").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "evaluationSettingLayout2" ) ;	
		
		}).getJson();
	}
	
	else if ( type.indexOf("otherMember") != -1 ) {
		membertitle ="其他人员";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("parttime_committee_member").setLoading(true).keyvalue("pagesize", "50").condition(
			new RssDict().keyvalue({
				// "mission": missions,
				// "myid": "{notin~" + RssUser.Data.myid + "}"
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "evaluationSettingLayout3" ) ;		
		}).getJson();
	}	
}


$("#evaluationSettingLayout").load(function () {
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
	$("#evaluationSettingLayout input[type='radio'][name='switch']").off().click(function() {
		// var value = $(this).val();
		// console.log(" ____________ value =",value);
	})
	
	$("#evaluationSettingLayout .committeetitle").off().click(function() {
		var switchValue = $("#evaluationSettingLayout input[type='radio'][name='switch']:checked").val();
		var zhValue = $("#evaluationSettingLayout input[type='radio'][name='ZH']:checked").val();
		if ( switchValue == 2 ){
			alert("先打开测评开关")
			return;
		}
		settingAddmember ( "committeeMember" );
	})
	$("#evaluationSettingLayout .delegatetitle").off().click(function() {
		var switchValue = $("#evaluationSettingLayout input[type='radio'][name='switch']:checked").val();
		var zhValue = $("#evaluationSettingLayout input[type='radio'][name='ZH']:checked").val();
		if ( switchValue == 2 ){
			alert("先打开测评开关")
			return;
		}
		settingAddmember ( "congressDeputy" );
	})
	$("#evaluationSettingLayout .othertitle").off().click(function() {
		var switchValue = $("#evaluationSettingLayout input[type='radio'][name='switch']:checked").val();
		var zhValue = $("#evaluationSettingLayout input[type='radio'][name='ZH']:checked").val();
		if ( switchValue == 2 ){
			alert("先打开测评开关")
			return;
		}
		settingAddmember ( "otherMember" );
		
	})

	$("#evaluationSettingLayout .normalbutton").off().click(function() {
		var tablename = "supervision_inspection";
		var key = $("#evaluationSettingLayout_id").val();
		var typeid = $("#evaluationSettingLayout_typeid").val();
		
        var pref = "#evaluationSettingLayout"
		var committeeObj = pref + " .committeetitle span"; //常委会成员
		var committeeObj_name = pref + " .committeetitle [mission]";
		
		var delegateObj = pref + " .delegatetitle span"; //人大代表
		var delegateObj_name = pref + " .delegatetitle [mission]";
		
		
		var otherObj = pref + " .othertitle span"; //其他人员
		var otherObj_name = pref + " .othertitle [mission]";
		var ids = $( committeeObj ).text();
		var names = $( committeeObj_name ).val();
		
		if ( !isEmpty( $("#evaluationSettingLayout_tablename").val()) ) {
			tablename = $("#evaluationSettingLayout_tablename").val();
		}
		// console.log(" ____________ committee ids =",$( committeeObj ).text());
		// console.log(" ____________ committee name =",$( committeeObj_name ).val());
		
		// console.log(" ____________ delegate ids =",$( delegateObj ).text());
		// console.log(" ____________ delegate name =",$( delegateObj_name ).val());
		
		// console.log(" ____________ other ids =",$( otherObj ).text());
		// console.log(" ____________ other name =",$( otherObj_name ).val());
		var voterids = "";
		var polls = 0 ;
		var ids = "";
		if ( !isEmpty( $( committeeObj ).text() ) ) {
			
			ids = $( committeeObj ).text() ;
			voterids += ids ;
			var mIds = ids.split(",") ;
			
			polls += mIds.length ;
		}
		if ( !isEmpty( $( delegateObj ).text() ) ) {
			ids = $( delegateObj ).text() ;
			if ( !isEmpty( voterids ) ) {
				voterids += ",";
			}
			voterids += ids; 
			
			var mIds = ids.split(",") ;
			polls += mIds.length ;
		}
		if ( !isEmpty( $( otherObj ).text() ) ) {
			ids = $( otherObj ).text() ;
			if ( !isEmpty( voterids ) ) {
				voterids += ",";
			}
			voterids += ids; 
			var mIds = ids.split(",") ;
			
			polls += mIds.length ;
		}
		var key = $("#evaluationSettingLayout_id").val();
		var evaluationState = $("#evaluationSettingLayout input[type='radio'][name='switch']:checked").val();
		// console.log(" ____________ key =", key );
		// console.log(" ____________ voterids =", voterids );
		// console.log(" ____________ polls",polls);
		// console.log(" ____________ evaluationState",evaluationState);
		var k1 = {
			"id": key,
			"voterids": voterids,
			"polls": polls,
			"evaluationState": evaluationState,
			"myid": RssUser.Data.myid,
			
		}
		
		if ( polls == 0 ) {
			k1 = {
				"id": key,
				"voterids": voterids,
				"evaluationState": evaluationState,
				"myid": RssUser.Data.myid,
				
			}
		}
		
		
		RssApi.Edit(tablename).setLoading(true).keyvalue( k1 ).getJson(function(json) {
			if (json.id) {
				alert( "设置成功" );
			}
			else{
				alert( "设置失败" );
			}
			supervisionnav = "1";
			evaluationsystemLayoutnav = "1";
			history.go(-1);
			
		})	
		

	})
})
