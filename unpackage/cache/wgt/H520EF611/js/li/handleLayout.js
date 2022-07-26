
//上传方案附件
function upfileHandleEnclosure(file) {
	console.log("__________ file=" , file )
	console.log("__________ file1=" ,  $(file)[0].getAttribute("name") )
	var Obj = $(file)[0].getAttribute("name") ;
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
			$( enclosurename ).text(  $(file)[0].files[0].name )
			$( enclosurepath ).text( data.url )
			$("#handleLayout_handleenclosure").text( $(file)[0].files[0].name );
			alert("上传成功");
		},
		error: function(data) {
			alert("上传失败");
		}
	});
}


$("#handleLayout").load(function () {
	var key = $("#handleID").val();
	var tablename = "supervision_inspection";
	var obj = "handleLayout";
	var enclosure = "";
	var reportenclosure = "";
	var assignenclosure = "";
	var path = "";
	
	console.log(" ____________ handleLayout key=",key)
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {	
			console.log(" ____________ handleLayout json=",json)
		$.each(json, function(k, v) {		
			console.log(" ____________ v=",v.initiator)
			reportenclosure = v.reportenclosure;
			assignenclosure = v.assignenclosure ;
			enclosure = v.enclosure ;
			$("#handleLayout .fj").remove();
			$("#handleLayout .fj_report").remove();
			$("#handleLayout .fj_assign").remove();
			$("#handleLayout .fj_handle").remove();
			$("#handleLayout article ul").append(
			'<li class="attachment fj">视察方案<em  res="handleLayout_enclousre" id="handleLayout_enclousre">暂无</em></li>' + 
			'<li class="attachment fj_report">视察报告<em  res="handleLayout_reportenclosure" id="handleLayout_reportenclosure">暂无</em></li>' + 
			'<li class="attachment fj_assign">交办意见<em  res="handleLayout_assignenclosure" id="handleLayout_assignenclosure">暂无</em></li>'
			
			+ '<div class="attachment fj_handle">办理报告<label><input style="display: none;" type="file" class="fileZF" name="handleLayout" accept="." onchange="upfileHandleEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
			// + '<li class="attachment fj_handle"> <div>办理报告&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em res="handleLayout_reportenclosure" id="handleLayout_handleenclosure">' + 
			// '<label ><input  style="display: none;" type="file" class="handleLayout" name="handleLayout" accept="." onchange="upfileHandleEnclosure(this);"multiple></label>' +
			// '<div class="fja"></div><div class="fja_path"></div></div></em></li>'
			// '<div class="attachment fj"><span>视察方案：' + v.enclosurename + '<span></div>'
			)
			
			var shijian = new Date(parseInt(v.shijian) * 1000)
							.toString("yyyy-MM-dd");
			// $("#handleLayout_title").val(v.title);
			$("#handleLayout h3").html(v.title);
			$("#handleLayout_initiator").text(v.initiator);
			$("#handleLayout_reviewclass").text(v.reviewclass);
			$("#handleLayout_enclousre").text(v.enclosurename);
			$("#handleLayout_reportenclosure").text(v.Reportenclosurename);
			$("#handleLayout_assignenclosure").text(v.assignenclosurename);
			$("#handleLayout_shijian").text(shijian);
		})
		
	
		let myip = "http://117.158.113.36:9002/";
		// $('#handleLayout article  .fj span').hide();
		// $(".fj p").off().click(function() {
		$(".fj").off().click(function() {
			// var path = $(this).text();
			path = enclosure ;
			
			if ( isEmpty( path ) ) {
				console.log("______________ paht is empty")
				return;
			}
			var dz = myip + "upfile/" + path;
			console.log("______________ dyz=",dz)
			if ( dz.indexOf(".doc") != -1 ) {
				var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
				xurl += encodeURIComponent(dz);
				window.open(xurl);
			} else {
				var pdfh5 = new Pdfh5('.pdfjs8', {
					pdfurl: dz
				});
			}
		})
		
		$(".fj_report").off().click(function() {
			//var path = $(this).text();
			path = reportenclosure ;
			
			if ( isEmpty( path ) ) {
				return;
			}
			var dz = myip + "upfile/" + path;
			if ( dz.indexOf(".doc") != -1 ) {
				var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
				xurl += encodeURIComponent(dz);
				window.open(xurl);
			} else {
				var pdfh5 = new Pdfh5('.pdfjs8', {
					pdfurl: dz
				});
			}
		})
		
		$(".fj_assign").off().click(function() {
			// var path = $(this).text();
			path = assignenclosure ;
			if ( isEmpty( path ) ) {
				return;
			}
			var dz = myip + "upfile/" + path;
			console.log("______________ fj_assign=",dz)
			if ( dz.indexOf(".doc") != -1 ) {
				var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
				xurl += encodeURIComponent(dz);
				window.open(xurl);
			} else {
				var pdfh5 = new Pdfh5('.pdfjs8', {
					pdfurl: dz
				});
			}
		})
		
		//normal button
		
	})
});

$("#handleLayout .normalbutton").click(function() {
	var key = $("#handleID").val();
	var handleReportenclosure = $("#handleLayout .fj_path").text();
	var handleReportenclosurename = $("#handleLayout .fja").text();
	if ( isEmpty( handleReportenclosure ) ) {
	    alert( "请添加办理报告" );
		return;
	}
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {	
			// console.log("______________ normalbutton json=",json)
		var undertakeReadids = json[0].organizationid ;
		RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(
		   {
			"id": key,				
			"myid": json[0].myid,
			"state": 8,
			"taskDone": 1,
			"undertakeReadids": undertakeReadids,
			// "typeid": v.typeid,
			"handleReportenclosure": handleReportenclosure,
			"handleReportenclosurename": handleReportenclosurename
			}
		).getJson(function(json) {
				if (json.id) {
					alert( "提交成功" );
					supervisionUnreadMsg();
				}else {
					alert("提交失败");
			}
			//location.href = "#supervreport";
			history.go(-1);
		})	
	})
})

/*我的承办视察报告*/
function fillundertakeInspection( v , Obj ) {
	var mstate = parseInt( v.state );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	// var state = "办理进度: " + getprogressState( v ) ;
	// var initiator = "提出者: " + v.initiator ;
	
	var liStr = '<li><div class="liico"><span bindkeys="id">' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + v.initiator  + '</p>'+
		// '</h1><p>' + initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + state  + '</p>'+
		'<div class="lifoot" id=' + v.id +
		' id=' + v.id +
		'>'
		if ( mstate == 7  ) {
			liStr += '<a href="#seesupervreport" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a><a href="#handleLayout" class="ans" bindattr="myid" ><span>主任会议汇报</span></a></div></li>';	
		}
		else {
			liStr += '<a href="#seesupervreport" class="see" onclick="seeInspectionDetail('+v.id+');"><span>查看详情</span></a></div></li>';		
		}
		// liStr += '<input type="hidden" state_id='+mstate+' />'
		$(append_obj).append(liStr);
		// $("#state_id").val(mstate);
}

//查看视察调研的具体内容
function viewSupervisionDetail( Obj, key ) {
	var tablename = "supervision_inspection";
	var fjObj_span = "#"+ Obj + " article .fj span";
	var removeObj = '#' + Obj + ' article .no1';
	var fjObj = '#' + Obj + ' article .fj';
	var fjreport_Obj = '#' + Obj + ' article .fj_report';
	var fjassign_Obj = '#' + Obj + ' article .fj_assign';
	var fjhandle_Obj = '#' + Obj + ' article .fj_handle';
	var appendObj = "#" + Obj + " article";
	var  index = 0 ;
	var writestate = 0 ;
	var schemeCaption = "视察方案: ";
	
	var catagory = "调研类别: ";
	var catagory_place = "调研地点: ";
	var catagory_time = "调研时间: ";
	
	//附件的布局
	var fj_report_layout =  '<div class="attachment fj_report"><span>'  + '<span></div>' ;
	var fj_assign_layout = '<div class="attachment fj_assign"><span>'  + '<span></div>' 
	var fj_handle_layout = '<div class="attachment fj_handle"><span>'  + '<span></div>' 
	
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
	else if ( "seesupevaluationYS".indexOf( Obj ) != -1 ) { //专题询问
	index =  7;
	catagory = "专题询问类别: ";
	catagory_place = "专题询问地点: ";
	tablename = "supervision_special_inquery";
	schemeCaption = "专题询问方案: ";
	}
	else if ( "seesupevaluation".indexOf( Obj ) != -1 ) { //专题询问
	index =  8;
	catagory = "专题询问类别: ";
	catagory_place = "专题询问地点: ";
	tablename = "supervision_special_inquery";
	schemeCaption = "专题询问方案: ";
	}
	else if ( "terminateLayout".indexOf( Obj ) != -1 ) { //专题询问
	index =  9;
	catagory = "专题询问类别: ";
	catagory_place = "专题询问地点: ";
	tablename = "supervision_special_inquery";
	schemeCaption = "专题询问方案: ";
	}
	else if ( "seeEnforcementDetail".indexOf( Obj ) != -1 ) {
	index =  10;
	catagory = "执法检查类别: ";
	catagory_place = "执法检查地点: ";
	tablename = "supervision_enforcement";
	schemeCaption = "执法检查方案: ";	
	}
	
	console.log(" ___________________ index=",index)
	
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
		var layoutHeight = '<div class="divtop2">' ;
		
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
			var previewLeaderRealName = v.previewLeaderRealName;
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
					layoutHeight = '<div class="divtop5">' ;
				}
				
				
				
			}

			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			
			if ( "undefined".indexOf( v.place ) != -1 ) {
				place = "未知";				
			}
			
			if ( "undefined".indexOf( v.department ) != -1 ) {
				department = "未知";				
			}

			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				enclosurename = "无";				
			}
			if ( isEmpty( reviewclass ) ) {
				reviewclass = "暂无";				
			}
			
			if ( isEmpty( previewLeaderRealName) ) {
				previewLeaderRealName = "未知";
			}
			// noAttachement = 1 ;
			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					// '<div class="divtop2">' +
					layoutHeight + 
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					'</h3><h4 author>提出者: ' + v.initiator +
					'</h4><h4 shencha2>发起时间: ' + shijian + '</h4>' +
					'</h4><h4 leixing>审阅人: ' + previewLeaderRealName +
					audit_state + 
					'</h4><h4 leixing>' + catagory + reviewclass +
					'</h4><h4 shencha2>' + catagory_place + place +										 
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

					'</h3><h4 author>发起者: ' + v.initiator +
					'</h4><h4 shencha2>发起时间: ' + shijian + '</h4>' +
					'</h4><h4 leixing>审阅人: ' + previewLeaderRealName +
					audit_state + 
					'</h4><h4 leixing>' + catagory + reviewclass +
					'</h4><h4 shencha2>' + catagory_place + place +		
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