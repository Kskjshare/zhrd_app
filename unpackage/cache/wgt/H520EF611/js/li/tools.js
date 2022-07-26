


//判断是否为空
function isEmpty( obj ){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

function solutionOfparticipate( v ){ //参与人
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
	
	//判断是否是承办单位
	if ( !isEmpty( v.organizationid ) ) {
		if ( v.organizationid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	return result ;
}



//判断是否时我的方案
function ismysolution( v ){
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


function isRoler( roleid ){ //

	var result = false ;
	var uid = RssUser.Data.myid ;
	
	if ( isEmpty( roleid ) ) {
		return result ;
	}
	
	if ( roleid.indexOf( uid ) == -1 ) {
		return result ;
	}
	result = true ;
	
	return result ;
}





function fillmysolutiondata( v , Obj ) {
	var mstate = parseInt( v.state );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getprogressState( v ) ;
	var initiator = "提出者: " + v.initiator ;
	console.log("_________ tools.js fillmysolutiondata")
	
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
		if ( Obj =="myresearch" ) {
			typeid = 9 ;
			if ( mstate == 2 ) {
				liStr += '<a href="#seemyresearch" class="see" onclick="seeInvestigationSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';	
			}
			else {
				liStr += '<a href="#seemyresearch" class="see" onclick="seeInvestigationSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';	
			liStr += '<a href="#seemyresearch" class="see" onclick="seeInvestigationSolutionDetail('+v.id+');"><span>查看详情</span></a></div></li>';
			
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
			if (  mstate == 1 ) {
				//liStr += '<a href="#seesupspecialwork" class="see" onclick="seeSpecialWorkSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>主任会议审议</span></a></div></li>';
				if ( !isRoler ( v.myid ) ) {
				liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';	
				}else {
				liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';
					
				}	
			}
			
			else if (  mstate == 2 ) {
				if ( isRoler ( v.myid ) ) {
					liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></a><a href="#specailWorkauditLayout" class="ans" onclick="specialWorkauditState1_click('+v.id+');"><span>提交审议</span></a></div></li>';	
				}else {

					liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';
					
				}		
			}
			else if (  mstate == 3 ) {
			liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';
				
			}
			else if (  mstate == 4 ) {
			liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';
				
			}
			else if (  mstate == 5 ) {
			liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';
				
			}
			else {
				liStr += '<a href="#specailWorkauditLayout" class="see" onclick="specialWorkViewDetail_click('+v.id+');"><span>查看详情</span></div></li>';
				
			}
			// liStr += '<a href="#seesupspecialwork" class="see" onclick="seeSpecialWorkSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';
			
		}
		liStr += '<input type="hidden" state_id='+mstate+' />'
		$(append_obj).append(liStr);
		$("#state_id").val(mstate);
}




function getprogressState ( v ) {
	var progress = "调研中";
	var prefProgress = "调研";
	var type = parseInt( v.typeid ) ;
	
	if ( type == 1) {
		prefProgress = "专项工作报告审议";
	}
	if ( type == 3) {
		prefProgress = "执法检查";
	}
	else if ( type == 8 ) {
		prefProgress = "视察";
	}
	else if ( type == 5 ) {
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
				progress = prefProgress + "审议中"; 
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

function isUserExsit ( users ) {
	var exsit = 0 ;
	if ( users.indexOf( RssUser.Data.myid) != -1  ) {
		exsit =  1 ;
	}
	return exsit ;
}



//上传方案附件
function upfileEnclosure(file) {
	
	// var enclosurename = "#researchZX .fja";
	// var enclosurepath = "#researchZX .fj_path";
	
	console.log("__________ file=" , file )
	console.log("__________ file1=" ,  $(file)[0].getAttribute("name") )
	var Obj = $(file)[0].getAttribute("name") ;
	// console.log("__________ class=" , $(file)[0].getAttribute("class") )
	
	var enclosurename = "#" + Obj +" .fja";
	var enclosurepath = "#" + Obj +" .fj_path";
	
	
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


//添加人员和单位
function addparticipant ( appendObj , memberType ) {
	var missions = "", realname = "";
	location.href = "#selectmember"
	if (arry.indexOf("selectmember") == "-1") {
		$("#selectmember ul li").eq(0).siblings().remove();
		arry.push("selectmember")
	} else {
		$("#selectmember ul li").remove();
	}
	
	if ( memberType.indexOf("committeeMember") != -1 ) {
		membertitle ="常委会成员";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "100").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
			select_participant ( jsona , appendObj , memberType ) ;	
		}).getJson();
	}
	if ( memberType.indexOf("previewleader") != -1 ) {
		membertitle ="预审人员";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "100").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
			select_participant ( jsona , appendObj ,memberType ) ;	
			
		}).getJson();
	}
	
	else if ( memberType.indexOf("congressDeputy") != -1 ) {
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "400").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_participant ( jsona , appendObj , memberType ) ;	
		
		}).getJson();
	}
	else if ( memberType.indexOf("supspecialworkXZ") != -1 ) { //专项报告新增
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "400").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_participant ( jsona , appendObj , memberType ) ;	
		
		}).getJson();
	}
	else if ( memberType.indexOf("uploadActivity") != -1 || memberType.indexOf("initiateHD") != -1  ) { //上传履职情况  //发起活动
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "400").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(json, append) {
					
			select_participant ( json , appendObj , memberType ) ;
		
		}).getJson();
	}
	
	
	else if ( memberType.indexOf("otherMember") != -1 ) {
		membertitle ="其他人员";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("parttime_committee_member").setLoading(true).keyvalue("pagesize", "50").condition(
			new RssDict().keyvalue({
				// "mission": missions,
				// "myid": "{notin~" + RssUser.Data.myid + "}"
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_participant ( jsona , appendObj , memberType ) ;		
		}).getJson();
	}
	else if ( memberType.indexOf("unitName") != -1 ) {
		membertitle ="单位列表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.View.List("user_delegation").setLoading(true).keyvalue("pagesize", "100").condition(
			new RssDict().keyvalue({
			 "state": 3
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_participant ( jsona , appendObj , memberType ) ;	
		}).getJson();
	}
}


function select_participant ( jsona , appendObj , obj ) {
    var ids = "#congressDeputy span";
	var names = "#congressDeputy [mission]";
	let html = "";
	var flag = false;
	
	var href = "#submitsolution" ;
	
	// if ( obj.indexOf( "committeeMember" ) != -1 ) {
		
	// 	ids = "#committeeMember span";
	// 	names = "#committeeMember [mission]";
	// }
	// else if ( obj.indexOf( "previewleader" ) != -1 ) {
	// 	// 默认新增调研
	// 	ids = "#researchZX span";
	// 	names = "#researchZX [mission]";
	// 	href = "#researchZX";
	// 	if ( obj.indexOf( "supervisionXZ" ) != -1 ) {
	// 		//新增视察
	// 		ids = "#supervisionXZ span";
	// 		names = "#supervisionXZ [mission]";
	// 		href = "#supervisionXZ";
	// 	}
	// 	else if (  obj.indexOf( "supinspectionXZ" ) != -1 ) {
	// 		//新增执法检查
	// 		ids = "#supinspectionXZ span";
	// 		names = "#supinspectionXZ [mission]";
	// 		href = "#supinspectionXZ";
	// 	}
		
	// }
	// else if ( obj.indexOf( "otherMember" ) != -1 ) {
	// 	ids = "#otherMember span";
	// 	names = "#otherMember [mission]";
	// }
	// else if ( obj.indexOf( "unitName" ) != -1 ) {
		
	// 	ids = "#unitName span";
	// 	names = "#unitName [mission]";
	// }
	// else if ( obj.indexOf( "supspecialworkXZ" ) != -1 ) {
		
	// 	ids = "#supspecialworkXZ span";
	// 	names = "#supspecialworkXZ [mission]";
	// 	href = "#supspecialworkXZ";
	// }
	// else if ( obj.indexOf( "uploadActivity" ) != -1 ) {
		
	// 	ids = "#uploadActivity .lmr span";
	// 	names = "#uploadActivity [mission]";
	// 	href = "#uploadActivity";
	// }
	// else if ( obj.indexOf( "initiateHD" ) != -1 ) {
		
	// 	ids = "#initiateHD .lmr span";
	// 	names = "#initiateHD [mission]";
	// 	href = "#initiateHD";
	// }
	// else 
	{
		ids = "#" + appendObj + " .lmr span";
		names = "#" + appendObj + " [mission]";
		if ( obj.indexOf( "committeeMember" ) != -1 ) {
			ids = "#" + appendObj + " .committeetitle span";
			names = "#" + appendObj + " .committeetitle [mission]";
		}
		else if ( obj.indexOf( "congressDeputy" ) != -1 ) {
			ids = "#" + appendObj + " .delegatetitle span";
			names = "#" + appendObj + " .delegatetitle [mission]";
		}
		else if ( obj.indexOf( "otherMember" ) != -1 ) {
			ids = "#" + appendObj + " .othertitle span";
			names = "#" + appendObj + " .othertitle [mission]";
		}
		else if ( obj.indexOf( "unitName" ) != -1 ) {
			ids = "#" + appendObj + " .unittitle span";
			names = "#" + appendObj + " .unittitle [mission]";
		}
		
		href = "#" + appendObj;
		
	}
	// console.log(" _____________  appendObj= ", appendObj) ;
	// console.log(" _____________  ids= ", ids) ;
	// console.log(" _____________  names= ", names) ;
	// console.log(" _____________  names= ", names ) ;
	
	
	
	$.each(jsona, function(k, v) {
		html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
			' name="myid"  myid="' + v.myid +
			'" realname="' + v.realname + '" />'  + "  " + v.realname
		 '</li>';	
	})
	
	html +="<a class='select_ok'>确定</a>"
	$("#selectmember article ul").html(html);
	
	//除了表头（第一行）以外所有的行添加click事件.
	$("#selectmember ul>li").slice(0).click(function() {
		// 切换样式
		$(this).toggleClass("tr_active");
		// 找到checkbox对象
		var chks = $("input[type='checkbox']", this);
		var tag = $(this).attr("tag");
		if (tag == "selected") {
			// 之前已选中，设置为未选中
			$(this).attr("tag", "");
			chks.prop("checked", false);
		} else {
			// 之前未选中，设置为选中
			$(this).attr("tag", "selected");
			chks.prop("checked", true);
		}
	});
	$("#selectmember article .select_ok").off().click(function() {
		var id_array = new Array();
		var name_array = new Array();
		$('input[name="myid"]:checked').each(function() {
			id_array.push($(this).attr("myid")); //向数组中添加元素  
			name_array.push($($(this)).attr("realname")); //向数组中添加元素  
		});
		var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
		var namestr = name_array.join(',');
		// location.href = href ;
		history.go(-1);	
		console.log(" _____________  select_ok= ids=", ids) ;
		console.log(" _____________  select_ok= idstr=", idstr) ;
		console.log(" _____________  select_ok= namestr=", namestr) ;
		// $( ids ).text(idstr)
		// $(names).html(namestr);
		
		//这2语句好像赋值无效
		$( ids ).text(idstr)
		$(names).text(namestr);
		
		$( ids ).val(idstr)
		$(names).val(namestr);
	});
	
	
	
	$("#selectmember .search button").off("click").click(function() {
		var key = $("#selectmember .search input").val();
		if (key) {
			key = {
				'title': "{likeall~" + key + "}"
			};
		} else {
			key = "";
		}
		if (arry.indexOf("selectmember") == "-1") {
			$("#selectmember ul li").eq(0).siblings().remove();
			arry.push("selectmember")
		} else {
			$("#selectmember ul li").remove();
		}
		new Ajax("user").keyvalue("key", $("#selectmember .search input").val()).keyvalue("isdelagate", "1")
			.getJson(function(
				data) {
				$("#selectmember article>p").text("共" + data[0].num + "条信息")
	
	
				faqsajax = RssApi.View.List("user").setLoading(true).condition(new RssDict()
					.keyvalue({
						"isdelagate": 1
					}).keyvalue(key).getDict()).setFlushUI(function(json, append) {
					if (json.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					$("#selectmember ul").mapview(json, {
						// "registertype": function(val) {
						// 	var registertype = dictdata.registertype[val]
						// 	return registertype;
						// }
					}, append)
					if (json.length == 0 ) {
						alert("未找到查询目标")
					}
				// 	//查看
					$("#selectmember article .select_ok").off().click(function() {
						var id_array = new Array();
						var name_array = new Array();
						$('input[name="myid"]:checked').each(function() {
							id_array.push($(this).attr("myid")); //向数组中添加元素  
							name_array.push($($(this)).attr("realname")); //向数组中添加元素  
						});
						var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
						var namestr = name_array.join(',');
						location.href = href ;
						
						$( ids ).text(idstr)
						$(names).html(namestr);
						
					})
					
				}).getJson()
			})
	})
}





/*更改用户已读状态，把用户id保存到对应的字段*/
function updateReadState ( table ,key , action ) {
	RssApi.Table.List( table ).setLoading(false).condition(new RssDict().keyvalue(
	{
		"id": key ,
		// "typeid": typeid ,
	}
	).getDict()).getJson(function(json) {
		$.each(json, function(k, v) {	
			updateUserReadState( v ,table , action );
		})
	})
}
function updateUserReadState( v ,tablename, action ) {
	
	var state = parseInt(v.state);
	var solutionReadids = v.solutionReadids;//我的方案已读ids
	var undertakeReadids = v.undertakeReadids; //承办单位已读ids
	var previewleaderReadids = v.previewleaderReadids; //预审已读ids
	var finishReadids = v.finishReadids; //已完成的已读ids
	var parameter = {
		"id": v.id,
	};
	
	
	if ( action == "view" || action == "audit" ) { //查看
		if ( isEmpty(solutionReadids) ) {
			solutionReadids = RssUser.Data.myid;
		}
		else {
			if ( solutionReadids.indexOf( RssUser.Data.myid ) != -1 ) { //已经存在，返回
				return ;
			}
			solutionReadids += "," + RssUser.Data.myid ;
		}
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids
		};	
	}
	else if ( action == "preview") { //审阅
		if ( isEmpty(previewleaderReadids) ) {
			previewleaderReadids = RssUser.Data.myid;
		}
		else {
			if ( previewleaderReadids.indexOf( RssUser.Data.myid ) != -1 ) { //已经存在，返回
				return ;
			}
			previewleaderReadids += "," + RssUser.Data.myid ;
		}
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"previewleaderReadids": previewleaderReadids
		};		
	}
	
	console.log("___________ v.id=",v.id)
	console.log("___________ v.myid=",v.myid)
	console.log("___________ solutionReadids=",solutionReadids)
	 // updateSupervision1(v);
	RssApi.Edit( tablename ).setLoading(true).keyvalue(
	   parameter
	).getJson(function(json) {
		console.log("___________ 更改状态成功json",json)
		supervisionUnreadMsg ();
	})	
	return;
	
	
	
	if ( state == 7 ) { //如果已经交办，判断交办单位是否已经读过记录
		if ( isEmpty(undertakeReadids) ) {
			undertakeReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( undertakeReadids.indexOf( RssUser.Data.myid ) == -1 ) {
				undertakeReadids += "," + RssUser.Data.myid ;
			}
		}
		
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"undertakeReadids": undertakeReadids,
			"solutionReadids": solutionReadids
		};
	}
	else if ( state >= 8 ) {
		if ( isEmpty(finishReadids) ) {
			finishReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( finishReadids.indexOf( RssUser.Data.myid ) == -1 ) {
				finishReadids += "," + RssUser.Data.myid ;
			}
		}
				
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids,
			"finishReadids": finishReadids
		};	
	}
	else if ( state == 1 ) {
		if ( isEmpty(previewleaderReadids) ) {
			previewleaderReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( previewleaderReadids.indexOf( RssUser.Data.myid ) != -1 ) {
				return ;
			}
			previewleaderReadids += "," + RssUser.Data.myid ;
		}
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids,
			"previewleaderReadids": previewleaderReadids,
		};	
	}
	else {
		
		if ( isEmpty( solutionReadids ) ) {
			solutionReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( solutionReadids.indexOf( RssUser.Data.myid ) != -1 ) {
				return ;
			}
			solutionReadids += "," + RssUser.Data.myid ;
		}
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids,
		};
		
	}
	
	console.log("___________ v.id=",v.id)
	console.log("___________ v.myid=",v.myid)
	console.log("___________ solutionReadids=",solutionReadids)
	 // updateSupervision1(v);
	RssApi.Edit( mTablename ).setLoading(true).keyvalue(
	   parameter
	).getJson(function(json) {
		console.log("___________ 更改状态成功json",json)
		supervisionUnreadMsg ();
		// location.href = "#supervision";
	})	
	
}



