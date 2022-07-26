var gTablename = "supervision_inspection" ;
var enclosurePath = "";

//专项工作报告
$("#specailWorkauditLayout").load(function() { 
	var key = $("#specailWorkauditLayout_handleID").val();
	
	RssApi.Table.List( "supervision_specialwork" ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
			console.log(" ____________ json.lenght ="+json.length);
			console.log(" ____________ json ="+json[0]);
			enclosurePath = json[0]["enclosure"];
		faqsajax = RssApi.Table.List("user").setLoading(true).condition({
			"myid": json[0].myid,
			}).setFlushUI(function(json1, append) {
				console.log(" ____________ json1111 ="+json1[0]);
				// json[0].ico = global_ip + 'upfile/' +json1[0].avatar;
				var avatar = json1[0].avatar ;
				
				local_solution_init = json[0].enclosure ;
				if ( "undefined".indexOf( avatar ) != -1 ) {
					avatar = "avatar.png" ;
				}
				json[0].ico = avatar ;
				
				$("#specailWorkauditLayout ul").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					"directorshijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					"state": function(val) {
						return getprogressState(json[0])
					},
					"avatar": function(val) {
					},
				})	
		}).getJson();
		
		
	// $("#specailWorkauditLayout .agreebutton").click(function() {
	// 		console.log(" ____________ 111 agreebutton =");
	// })
	
	// $("#specailWorkauditLayout .disagreebutton").click(function() {
	// 		console.log(" ____________ 222 disagreebutton =");
	// })
	
	// load_specailWorkauditLayout ();
	})
})
$("#auditLayout").load(function () {
	var key = $("#auditLayout_handleID").val();
	//var tablename = "supervision_inspection";
	var obj = "auditLayout";
	var enclosure = "";
	var reportenclosure = "";
	var assignenclosure = "";
	var path = "";
	
	RssApi.Table.List( gTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {		
			console.log(" ____________ v=",v.initiator)
			reportenclosure = v.reportenclosure;
			assignenclosure = v.assignenclosure ;
			enclosure = v.enclosure ;
			var state = parseInt( v.state ) ;
			// $("#auditLayout .fj").remove();
			// $("#auditLayout .fj_report").remove();
			// $("#auditLayout .fj_assign").remove();
			// $("#auditLayout .fj_handle").remove();
			// $("#auditLayout article ul").append(
			// '<li class="attachment fj">视察方案<em  res="handleLayout_enclousre" id="handleLayout_enclousre">暂无</em></li>'
			//  + '<li class="attachment fj_report">视察报告<em  res="handleLayout_reportenclosure" id="handleLayout_reportenclosure">暂无</em></li>' 
			//  + '<li class="attachment fj_assign">交办意见<em  res="handleLayout_assignenclosure" id="handleLayout_assignenclosure">暂无</em></li>'
			
			// + '<div class="attachment fj_handle">办理报告<label><input style="display: none;" type="file" class="fileZF" name="handleLayout" accept="." onchange="upfileHandleEnclosure(this);" multiple></label><div class="fja"></div><div class="fj_path" style="display: none;"></div></div>'
			// )
			
			var shijian = new Date(parseInt(v.shijian) * 1000)
							.toString("yyyy-MM-dd");
			
			$("#auditLayout h3").html(v.title);
			$("#auditLayout_initiator").text(v.initiator);
			$("#auditLayout_reviewclass").text(v.reviewclass);
			$("#auditLayout_previewleader").text(v.previewLeaderRealName);
			if ( state == 1 )
			$("#auditLayout_preivewstate").text("未审阅");
			else
			$("#auditLayout_preivewstate").text("已审阅");
			
			
			$("#auditLayout_committee").text(v.committeeName);
			$("#auditLayout_delegate").text(v.objName);
			$("#auditLayout_other").text(v.parttimememberName);
			$("#auditLayout_company").text( v.companyName );
			$("#auditLayout_shijian").text(shijian);
			$("#auditLayout_enclousre").text( v.enclosurename );
			$("#auditLayout_reportenclousre").text( v.reportenclosurename );
			$("#auditLayout_assignenclousre").text( v.assignenclosurename );
		})
		
	
		// let myip = "http://117.158.113.36:9002/";
		// $('#handleLayout article  .fj span').hide();
		// $(".fj p").off().click(function() {
		$(".fj").off().click(function() {
			// var path = $(this).text();
			path = enclosure ;
			
			if ( isEmpty( path ) ) {
				console.log("______________ paht is empty")
				return;
			}
			var dz = global_ip + "upfile/" + path;
			if ( dz.indexOf(".doc") != -1 ) {
				var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
				xurl += encodeURIComponent(dz);
				window.open(xurl);
			} else {
				var pdfh5 = new Pdfh5('.pdfjs8', {
					pdfurl: dz
				});
			}
			
			var appendObj = "#auditLayout" + " article  ul";
			
			if (dz.indexOf(".doc") != -1) {
				var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
				xurl += encodeURIComponent(dz);
				window.open(xurl);
			} else if (dz.indexOf(".pdf") != -1){
				console.log("______________ 1111 is empty")
				var pdfh5 = new Pdfh5( appendObj , {
					pdfurl: dz,
				});											
			}
			else {
				location.href = "#pictureSt";
				$("#attachmentImg").attr("src", dz);
			}		
			
			
			
			
		})
		
		$(".fj_report").off().click(function() {
			// var path = $(this).text();
			path = reportenclosure ;
			
			if ( isEmpty( path ) ) {
				console.log("______________ paht is empty")
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
				console.log("______________ paht is empty")
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
		
		
		
	})
});

$("#auditLayout .normalbutton").click(function() {
	var key = $("#auditLayout_handleID").val();
	console.log(" ____________ auditLayout normalbutton key=",key);
	var handleReportenclosure = $("#auditLayout .fj_path").text();
	
	var success = "审议完成" ;
	var fail = "审议失败" ;
	RssApi.Table.List( gTablename ).setLoading(true).condition(new RssDict()
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
				// location.href = "#supervision";
				supervisionnav = "1";
				history.go(-1);
				
			})	
		})
	})
})


function audit_click( key  ){
	console.log(" ____________ auditLayout key=",key);
	gTablename = "supervision_inspection";
	$("#auditLayout_handleID").val( key );
}
function specialWorkauditState1_click( key  ){
	//主任会议审议
	console.log(" ____________ specialWorkauditState1_click key=",key);
	gTablename = "supervision_specialwork";
	$("#specailWorkauditLayout").find("header>h1").text( "审议专项工作报告" );
	$("#specailWorkauditLayout_handleID").val( key );
	$("#auditaction").show();
}

function specialWorkViewDetail_click( key  ){
	//查看详情
	gTablename = "supervision_specialwork";
	$("#specailWorkauditLayout").find("header>h1").text( "查看专项工作报告" );
	$("#specailWorkauditLayout_handleID").val( key );
	$("#auditaction").hide();
}



function reportAudited ( key ) {  //视察报告和交办意见审议完成
	//updateSupervision( key  ) ;
	$("#auditLayout_handleID").val( key );
}


/*专项工作报告*/
$("#specailWorkauditLayout .disagreebutton").click(function() {
	console.log("______________ specailWorkauditLayout .disagreebutton")
	history.go(-1);	
})

$("#specailWorkauditLayout").on('click','.stationbuttonbg2 .auditpass',function(){
	var key = $("#specailWorkauditLayout_handleID").val();
	
	var success = "审议完成" ;
	var fail = "审议失败" ;
	RssApi.Table.List( gTablename ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			var state = parseInt(v.state);
			state ++ ;			
			RssApi.Edit(gTablename).setLoading(true).keyvalue(
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

$("#specailWorkauditLayout").on('click','#attachment',function(){
			path = enclosurePath ;
			if ( isEmpty( path ) ) {
				return;
			}
			
			var appendObj = "#specailWorkauditLayout" + " article  ul";
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
