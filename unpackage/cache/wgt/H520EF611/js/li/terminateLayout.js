
function terminate_entry ( key ) {
	$("#terminateLayout_id").val( key ) ;
	$("#terminateLayout_tablename").val( "supervision_special_inquery" ) ;
	console.log("_____ terminateLayout =",key)
	updateReadState ( "supervision_special_inquery" , key , "view" ) ;
}
$("#terminateLayout").load(function () {
	if (arry.indexOf("terminateLayout") == "-1") {
		$("#terminateLayout ul li").eq(0).siblings().remove();
		arry.push("terminateLayout")
	} else {
		$("#terminateLayout ul li").remove();
	}
	var key = $("#terminateLayout_id").val(  ) ;
	var tablename = $("#terminateLayout_tablename").val(  ) ;
	var typeid = $("#terminateLayout_typeid").val(  ) ;
	console.log("_____ terminateLayout =",key)
	//viewSupervisionDetail ( "terminateLayout" , key ) ;
	addconfirmInformation( tablename , key , typeid ) ;
	
});

function btn_terminate ( key ) {
	console.log("_____ btn_terminate key =",key)
	var tablename = $("#terminateLayout_tablename").val();
	
	var key = $("#terminateLayout_id").val();
	
	var myid = RssUser.Data.myid ;
	
	RssApi.Table.List( tablename ).setLoading(true).keyvalue( { "id": key }).getJson(function(json) {
		
		if (json.length > 0  ) {
			
			myid = json[0].myid ;
			var state = 11
			var needsubmitmeeting = 1 ;
			var parameter = {
			"id": key,
			"myid": myid,
			"taskDone": 1,
			"state": state
			}
			RssApi.Edit( tablename ).setLoading(true).keyvalue(parameter).getJson(function(json1) {
				if (json1.id) {
					alert("流程已完结");
					//supervisionUnreadMsg();
					updateReadState ( tablename , key , "preview" ) ;
					supevaluationYSnav = "1";
					history.go(-1);
				} else {
				}
			})
			
			
			
		}
	})
		
}



//查看视察调研的具体内容
function addconfirmInformation( tablename , key , typeid ) {
	var Obj = "terminateLayout";
	var tablename = "supervision_inspection";
	var fjObj_span = "#"+ Obj + " article .fj span";
	var removeObj = '#' + Obj + ' article .no1';
	var fjObj = '#' + Obj + ' article .fj';
	var fjreport_Obj = '#' + Obj + ' article .fj_report';
	var fjassign_Obj = '#' + Obj + ' article .fj_assign';
	var fjhandle_Obj = '#' + Obj + ' article .fj_handle';
	var appendObj = "#" + Obj + " article  ul";
	var schemeCaption = "视察方案: ";
	
	var catagory = "调研类别: ";
	var catagory_place = "调研地点: ";
	var catagory_time = "调研时间: ";
	
	//附件的布局
	var fj_report_layout =  '<div class="attachment fj_report"><span>'  + '<span></div>' ;
	var fj_assign_layout = '<div class="attachment fj_assign"><span>'  + '<span></div>' 
	var fj_handle_layout = '<div class="attachment fj_handle"><span>'  + '<span></div>' 
	
	$( removeObj ).remove();
	
	console.log( " ____________ tablename=",tablename )
	console.log( " ____________ key=",key )
	console.log( " ____________ typeid=",typeid )
	if ( typeid == 8  ) {//视察
		catagory = "视察类别: ";
		catagory_place = "视察地点: ";
		catagory_time = "视察时间: ";
	}
	else if ( typeid == 5 ) { //专题询问
	catagory = "专题询问类别: ";
	catagory_place = "专题询问地点: ";
	tablename = "supervision_special_inquery";
	schemeCaption = "专题询问方案: ";
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
			
			// noAttachement = 1 ;
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
					'</h4><h4 leixing>审阅人: ' + v.previewLeaderRealName +
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
				
				
				$( appendObj ).append('<a class="normalbutton" onclick="btn_terminate('+v.id+');">确认结束</a>');	
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
