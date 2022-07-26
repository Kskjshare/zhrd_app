function upfileEnclosureInspectionupfileEnclosure(file) {
	
	// var enclosurename = "#researchZX .fja";
	// var enclosurepath = "#researchZX .fj_path";
	
	// console.log("__________ file=" , file )
	// console.log("__________ file1=" ,  $(file)[0].getAttribute("name") )
	var Obj = $(file)[0].getAttribute("name") ;
	// console.log("__________ class=" , $(file)[0].getAttribute("class") )
	
	var enclosurename = "#" + Obj +" .fj1 .fja";
	var enclosurepath = "#" + Obj +" .fj1 .fj_path";
	var formData = new FormData();
	// formData.append("fileZF", $(file)[0].files[0]);
	formData.append( Obj , $(file)[0].files[0]);
	$.ajax({
		url: RssApp["WwwHost"] + "widget/upload.jsp",
		type: 'POST',
		data: formData,
		processData: false, // 告诉jQuery不要去处理发送的数据
		contentType: false, // 告诉jQuery不要去设置Content-Type请求头
		beforeSend: function() {
			console.log("正在进行，请稍候");
		},
		success: function(data) {
			data = JSON.parse(data);
			
			// $("#submitsolution .fja").text(data.url)
			
			$( enclosurename ).text( $(file)[0].files[0].name )
			$( enclosurepath ).text( data.url )
			alert("上传成功");
		},
		error: function(data) {
			alert("上传失败");
		}
	});
}

$("#commitaudit").load(function() {
	// var missions = "", realname = "";
	// reviewclass = {},
	
	var key = $("#commitaudit_id").val(); 
	console.log(" _________________ commitaudit load key=",key);
	// RssApi.Table.List("user").condition(new RssDict().keyvalue({
	// 	"myid": RssUser.Data.myid
	// }).getDict()).getJson(function(jsonn) {
	// 	$.each(jsonn, function(k, v) {
	// 		missions = v.mission; //代表团
	// 		realname = v.realname;
	// 	})
	// })
	
	var success = "提交成功";
	var fail = "提交失败";
	$("#commitaudit .hisback").click(function() {
		$("#commitaudit .session").val("");
		$("#commitaudit article .fj1 label input").text("") ;
		$("#commitaudit article .fj label input").text("") ;
		$("#commitaudit article .fj fja").text("") ;
		$("#commitaudit article .fj fj_path").text("") ;
		
		$("#commitaudit article .fj fja").val("") ;
		$("#commitaudit article .fj fj_path").val("") ;
		$("#commitaudit article .fj1 fja").val("") ;
		$("#commitaudit article .fj1 fj_path").val("") ;
		
		$("#commitaudit .date-picker").val("");
	})
	$("#commitaudit .submit_send").off().click(function() {
		console.log(" _________________ commitaudit  submitbutton");
		// var session = $("#commitaudit .smalltitle input").val();
		var session = $("#commitaudit .session").val();
		// var enclosure = $("#commitaudit .fj_path").text() ;
		
		var enclosure1 = $("#commitaudit .fj1 .fj_path").text() ;
		// var enclosurename1 = $("#commitaudit article .fj1 label input").val() ;
		// var enclosurename = $("#uploadActivity article .fj label input").val() + ",";
		// var filename1 = enclosurename1.substring(enclosurename1.lastIndexOf("\\") + 1);		
			
		var enclosure = $("#commitaudit .fj .fj_path").text() ;
		var enclosurename = $("#commitaudit article .fj label input").val() ;
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);		
			
		var meetingtime = $("#commitaudit .date-picker").val();
		var shijian = Date.parse(new Date()) / 1000;
		
	// console.log(" _________________ commitaudit  enclosure1=",enclosure1);
	// console.log(" _________________ commitaudit  enclosurename1=",enclosurename1);
	// console.log(" _________________ commitaudit  filename1=",filename1);
	
	// console.log(" _________________ commitaudit  enclosure=",enclosure);
	// console.log(" _________________ commitaudit  enclosurename=",enclosurename);
	// console.log(" _________________ commitaudit  filename=",filename);
	
		
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
		console.log(" _________________ commitaudit  meetingtime=",meetingtime);
		RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
			.keyvalue({
				"id": key
				// "typeid": typeid
			}).getDict()).getJson(function(json) {	
			$.each(json, function(k, v) {
				var state = parseInt(v.state);
				state ++ ;

				RssApi.Edit("supervision_inspection").setLoading(true).keyvalue({
					"id": key,
					"myid": v.myid,
					"typeid": v.typeid,
					"meetingshijian1": meetingtime,
					"directormeetingnum1": session,
					"Reportenclosure": enclosure1,
					"Reportenclosurename": filename1,
					"assignenclosure": enclosure,
					"assignenclosurename": filename,
					"state": state
					}).getJson(function(json) {
						if (json.id) {
							alert( success );
						}else {
							alert(fail);
					}
					//location.href = "#supervision";
					supervisionnav = "1";
					history.go(-1);
				})	
			})
		})
	})
})

function assign_click ( key ) {
	
	// var enclosure = $("#assignLayout .fj .fj_path").text() ;
	// var enclosurename = $("#assignLayout article .fj label input").val() ;
	// var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	// if ( isEmpty( enclosure ) ) {
	//     alert( "请添加报告文件" );
	// 	return;
	// }
	var organizationid = "#assignLayout"  + " .unittitle span";
	var organizationName = "#assignLayout"  + " .unittitle [mission]";
	
	organizationid = $(organizationid).val();
	organizationName = $(organizationName).val();
	
	if ( isEmpty( organizationid ) ) {
	    alert( "请添加单位" );
		return;
	}
	
	var success = "交办完成" ;
	var fail = "交办失败" ;
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			state ++ ;
			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": state,
				"typeid": v.typeid,
				"organizationName": organizationName,
				"organizationid": organizationid
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
}

function assign ( key ) {  //交办
    var typeid = 8 ;
	assign_layout( key , typeid) ;
}
function handleReport ( key ) {  //汇报主任会议
console.log(" ______________  handleReport key=",key)
    var typeid = 8 ;
	// handle_layout( key , typeid) ;
	$("#handleID").val( key ) ;
}


function refresh( ){
	$("#supervision ul li").remove();
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid,
		"typeid": "8"
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
				
				fillmysolutiondata ( v , "supervision" );				 
			})				
	}).getJson();
}
function Switchevaluation ( key ) { //打开测评

	
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var evaluationState = parseInt( v.evaluationState ) ;
			
			if ( evaluationState == 0 ) {
				$("#evaluationSettingLayout_id").val( key ) ;
				return;
			}
			if ( evaluationState == 0 ){
				evaluationState = 1 ;
			}
			else {
				evaluationState = 0 ;
			}
			
			
			var state = parseInt(v.state);
			console.log(" ______________  v =",v)
			console.log(" ______________  evaluationState =",evaluationState)
			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"evaluationState": evaluationState
				// "state": state,
				// "typeid": v.typeid,
				}
			).getJson(function(json) {
					if (json.id) {
						if ( evaluationState == 0 ) {
							alert( "已经关闭测评" );
						}
						
						else{
							alert( "已经开启测评" );
						}
					}else {
						if ( evaluationState == 0 ) {
							alert( "关闭测评失败" );
						}
						
						else{
							alert( "开启测评失败" );
						}
				}
				location.href = "#supervision";
				supervisionnav = "1";
				refresh();
				// history.go(-1);
				
			})	
		})
	})
}




function assign_addunit( memberType) {
	addparticipant( "assignLayout" , memberType );
}
function assign_layout ( key ,typeid ) {
	var title = "视察";
	var html= '';
	var appendObj = "#assignLayout article"
	
	// html += '<input type="hidden" id="mstate" />'
	// html += '<input type="hidden" id="solutionId" />'

	// html +='<div class="smalltitle" >主任会议届次<input class="session" type="text"/></div>'
	// html +='<div class="committeetitle" id="selectcommittee_id" onclick="submit_addmember(\'committeeMember\');">常委会成员<input class="mn" type="text" mission /><span class="span"></span></div>'
	// html +='<div class="delegatetitle" id="selectdelegate_id" onclick="submit_addmember(\'congressDeputy\');">人大代表<input class="mn" type="text" mission /><span class="span"></span></div>'
	// html +='<div class="othertitle" id="selectother_id" onclick="submit_addmember(\'otherMember\');">其他人员<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="unittitle"  onclick="assign_addunit(\'unitName\');">参加单位<input class="mn" type="text" mission /><span class="span"></span></div>'
	
	
	// if ( typeid == 8 ) {
	//     html += '<div class="fj">视察方案<label><input type="file" class="assignLayout" name="assignLayout" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	// }
	// else {
	// 	html += '<div class="fj">调研方案<label><input type="file" class="assignLayout" name="assignLayout" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	// }
    html +='<div class="submit_send" onclick="assign_click('+key+');">提交</div>'
	
	
	// $("#mstate").remove();
	// $("#solutionId").remove();
	$("#assignLayout .unittitle").remove();
	$("#assignLayout .fj").remove();
	$("#assignLayout .submit_send").remove();
	// $("#assignLayout .article").not(".meetingTime").remove();
	
	// $("#assignLayout .fj").remove();
	// $("#assignLayout .committeetitle").remove();
	// $("#assignLayout .delegatetitle").remove();
	// $("#assignLayout .othertitle").remove();
	// $("#assignLayout .unittitle").remove();
	$( appendObj ).append( html ) ;
	// $("#solutionId").val( key );
}

function handle_layout ( key ,typeid ) {
	var title = "视察";
	var html= '';
	var appendObj = "#handleLayout article"
	
	// html += '<input type="hidden" id="mstate" />'
	// html += '<input type="hidden" id="solutionId" />'

	// html +='<div class="smalltitle" >主任会议届次<input class="session" type="text"/></div>'
	// html +='<div class="committeetitle" id="selectcommittee_id" onclick="submit_addmember(\'committeeMember\');">常委会成员<input class="mn" type="text" mission /><span class="span"></span></div>'
	// html +='<div class="delegatetitle" id="selectdelegate_id" onclick="submit_addmember(\'congressDeputy\');">人大代表<input class="mn" type="text" mission /><span class="span"></span></div>'
	// html +='<div class="othertitle" id="selectother_id" onclick="submit_addmember(\'otherMember\');">其他人员<input class="mn" type="text" mission /><span class="span"></span></div>'
	html +='<div class="unittitle"  onclick="assign_addunit(\'unitName\');">参加单位<input class="mn" type="text" mission /><span class="span"></span></div>'
	
	
	// if ( typeid == 8 ) {
	//     html += '<div class="fj">视察方案<label><input type="file" class="handleLayout" name="handleLayout" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	// }
	// else {
	// 	html += '<div class="fj">调研方案<label><input type="file" class="handleLayout" name="handleLayout" accept="." onchange="upfileEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
	// }
    html +='<div class="submit_send" onclick="assign_click('+key+');">提交</div>'
	
	
	// $("#mstate").remove();
	// $("#solutionId").remove();
	$("#handleLayout .fj").remove();
	$("#handleLayout .submit_send").remove();
	$("#handleLayout .article").not(".meetingTime").remove();
	
	// $("#assignLayout .fj").remove();
	// $("#assignLayout .committeetitle").remove();
	// $("#assignLayout .delegatetitle").remove();
	// $("#assignLayout .othertitle").remove();
	// $("#assignLayout .unittitle").remove();
	$( appendObj ).append( html ) ;
	// $("#solutionId").val( key );
}


function upfileEnclosureOpinion(file) {
	var Obj = $(file)[0].getAttribute("name") ;
	var enclosurename = "#" + Obj +" .fj .fja";
	var enclosurepath = "#" + Obj +" .fj .fj_path";
	var formData = new FormData();
	formData.append( Obj , $(file)[0].files[0]);
	$.ajax({
		url: RssApp["WwwHost"] + "widget/upload.jsp",
		type: 'POST',
		data: formData,
		processData: false, // 告诉jQuery不要去处理发送的数据
		contentType: false, // 告诉jQuery不要去设置Content-Type请求头
		beforeSend: function() {
			console.log("正在进行，请稍候");
		},
		success: function(data) {
			data = JSON.parse(data);
			
			// $("#submitsolution .fja").text(data.url)
			
			$( enclosurename ).text( $(file)[0].files[0].name )
			$( enclosurepath ).text( data.url )
			alert("上传成功");
		},
		error: function(data) {
			alert("上传失败");
		}
	});
}
