//查看满意率统计具体内容
var sortid = 0 ;
function viewSuggestInformation_ruzhou( Obj, key ) {
	sortid = key ;
	var fjObj = "#seesuggest article .fj span";
	var appendObj = "#seestatisticsMY article";
	var  index = 0 ;
	
	if ( "statisticsMY".indexOf( Obj ) != -1 ) { //查看满意率统计	  
		appendObj = "#seestatisticsMY article";
		$('#seestatisticsMY article .no1').remove();
		fjObj = "#seestatisticsMY article .fj span";
	}
	else if ("evaluation".indexOf( Obj ) != -1  ) {//测评系统的满意率统计	    
		appendObj = "#seeevaluation article";
		$('#seeevaluation article .no1').remove();
		fjObj = "#seeevaluation article .fj span";
		index = 1 ;
	}
	else if ("evaluationJY".indexOf( Obj ) != -1  ) {//测评系统的建议测评
		appendObj = "#seeevaluationJY article";
		$('#seeevaluationJY article .no1').remove();
		fjObj = "#seeevaluationJY article .fj span";
		index = 2 ;
	}
	else if ("evaluationYA".indexOf( Obj ) != -1  ) {//测评系统的议案测评
		appendObj = "#seeevaluationYA article";
		$('#seeevaluationYA article .no1').remove();
		fjObj = "#seeevaluationYA article .fj span";
		index = 3 ;
	}
	
	// else if ("evaluationZT".indexOf( Obj ) != -1  ) {//测评系统的建议测评
	// 	appendObj = "#seeevaluationZT article";
	// 	$('#seeevaluationZT article .no1').remove();
	// 	fjObj = "#seeevaluationZT article .fj span";
	// 	index = 3 ;
	// }
	else if ("evaluationSC".indexOf( Obj ) != -1  ) {//测评系统的建议测评
		appendObj = "#evaluationSC article";
		$('#seeevaluationSC article .no1').remove();
		fjObj = "#seeevaluationSC article .fj span";
		index = 4 ;
	}
	else if ("evaluationDY".indexOf( Obj ) != -1  ) {//测评系统的建议测评
		appendObj = "#seeevaluationDY article";
		$('#seeevaluationDY article .no1').remove();
		fjObj = "#seeevaluationDY article .fj span";
		index = 5 ;
	}
	//$('#seestatisticsMY article .no1').remove();
	//var key = $(this).parent().attr("sortid");
	RssApi.View.List("sort").setLoading(true).condition(new RssDict()
		.keyvalue({
			"sortid": key
		}).getDict()).getJson(function(json) {
	
		console.log(json)
		var shijian = "",
		level = ""
		
		//置回理由
		var rejectReason = "";
		
		//获取附件名称
		var enclosurename = "";
		RssApi.Table.List("suggest").setLoading(false)
		.condition(new RssDict().keyvalue({
			"id": key
		}).keyvalue().getDict()).getJson(function(
			bill ) {
			enclosurename = bill[0].enclosurename ;
			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				
				enclosurename = "无";
			}
		
		//获取联名代表，回调回来以后再添加内容
		var lmr = "";
		var noAttachement = 0 ;
		RssApi.View.List("second_user").setLoading(true)
			.condition(new RssDict().keyvalue({
				"suggestid": key
			}).keyvalue().getDict()).getJson(function(lm) {		
				
				var lmr = "";
				var isSecondDelegate = 0 ;
				var count = 0 ;
				var fuyi = "";
				var attachmentPath = "";
				var attachment = "";
				$.each(lm, function(k, v) {
					if( count > 0 ) {
						lmr += ",";
					}
					lmr += v.realname ;
					count ++ ;
					isSecondDelegate = 1; //表示有附议人
				})
				if ( isSecondDelegate == 1 ) {
					fuyi = '<h4 leixing>附议代表: ' + lmr +  '</h4>'  ;
				}
													

				//$.each(lm, function(k, v) {
					//lmr += v.realname + ",";
				//})
				var checkState = "未审核"
				$( appendObj ).mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(
							val) * 1000).toString(
							"yyyy-MM-dd");
						// return shijian = new Date(parseInt(
						// 	val) * 1000).toString(
						// 	"yyyy-MM-dd hh:mm");	
					},
					"level": function(val) {
						return level = dictdata.circles[
							val];
					},
								
					"handle": function(val) {
						var handle = dictdata.handle[val]
						return handle;
					},
					"draft": function(val) {
						draft = val;
					},
					"examination": function(val) {
						examination = val;
					},
					"deal": function(val) {
						deal = val;
					},
					"iscs": function(val) {
						iscs = val;
					},
					"isxzsc": function(val) {
						isxzsc = val;
					},
					"handlestate": function(val) {
						handlestate = val;
					},
					"resume": function(val) {
						
						resume = val;
						var state = "未审核"
						if ( draft == "1"){
							return "草稿"
						}
						if (resume == "1" && examination == "2") {
							state =   "已办复";
						} 
						if ( iscs == "1" ) {
							state =  "待复审"
						}
						if (examination == "3") {
							checkState = "已置回";
							state = "已置回";
							return "已置回";
						}
						if ( examination == "2" ) {
							var state = "待交办"
							if ( handlestate == "2" || handlestate == "1" ){
								state = "待复审"
							}
						}
						
						if ( handlestate == "3" ) {
							var state = "待办复"
							if ( deal == "0" || handlestate == "1" ){
								state = "待交办"
							}
						}
						if ( handlestate == "4" ) {
							var state = "已驳回"
						}
						if ( isxzsc == "1" ) {
							var state = "待交办"
							if ( handlestate == "2") {
								state = "待复审"
							}
						}
						if (deal == "1" && resume == "1") {
							state =  "已答复";
						} 
						if (deal == "1" && resume == "0") {
							state =   "已交办";
						} 
						if (examination == "2" && deal == "0" && draft == "2") {
							state =   "已审查";
						} 
						if (isxzsc == "1" && draft == "2") {
							state =   "已办复";
						} 
						checkState = state;
						 return state ;
					}
				})
				
				var resumeinfo = "没有办理报告" ;
				$.each(json, function(k, v) {
					var isms = 0 ;
					var mianshang = '' ;
					var way = v.way ;
					if ( way != null ) {
						if ( way.indexOf( "4" ) != -1 ){
							//面商量
							isms = 1 ;
							mianshang = '<h4 leixing>面商时间: ' + v.discussinspecttime + '</h4>' ;
							mianshang += '<h4 leixing>面商地点: ' + v.discussbank + '</h4>' ;
						}
					}
					
					//var noAttachement = 0 ;
					// var attachment = v.enclosure;	
					attachment = v.enclosure;	
					resumeinfo = v.resumeinfo
					
					var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;					
					var xieban = '<h4 leixing>协办单位: ' + v.company + '</h4>' ;
					
					
					var attachmentOnclick = '<h4 fj> onclick="enterAttachment(\''+attachment+'\')">附件: ' + enclosurename + '</h4>' ;
					attachmentPath =  attachment;
					
					if ( "undefined".indexOf(v.resumeinfo) != -1 ) {
						resumeinfo = "没有办理报告";
					}
					
					if ( "undefined".indexOf(attachment) != -1 ) {
						attachment = "无";
						attachmentDiv = '</div><div class="fj no">附件：' + attachment;
						noAttachement = 1 ;
						
					}
					if ( "暂无".indexOf(v.company) != -1 ) {
						xieban ="";
					}
					if (v.reviewclass == "1") {
						v.reviewclass =  "经济类";
					} else if (v.reviewclass == "2") {
						v.reviewclass = "人文教育类";
					} else if (v.reviewclass == "3") {
						v.reviewclass =  "环境保护类";
					} else if (v.reviewclass == "4") {
						v.reviewclass =  "交通类";
					} else if (v.reviewclass == "5") {
						v.reviewclass = "人事福利类";
					}
					
						
					if ( noAttachement ==  1 ) {
						
						$( appendObj ).append(								
							'<div class="divtop2" ">' +
							'<h3>' + v.title +'</h3>' + 
							'<h4 > ' + " " +										
							'</h3><h4 author>提出者: ' + v.realname +
							'</h4><h4 shijian>时间: ' + shijian +
							'</h4><h4 shencha>办理状态: ' + checkState +
							'</h4><h4 leixing>分类: ' + v.reviewclass + '</h4>' + 
							'<h4 leixing>主办单位: ' + v.realcompanyname +  								
							xieban + 
							fuyi + 
							// mianshang + 
							// '<h4 leixing>办理报告: ' + resumeinfo +  			
							'</h4></div>' + 	
							// '<div class="contentdivp">' + v.matter + '</div>' 	 +
							
							 '<div class="attachment fj"><span>'  + '<span></div>' +
							 '<div class="attachment fj"><span>'  + '<span></div>' 	
							 
							 +'<a href="#anssuggest_ruzhou" class="normalbutton_submit">办复信息</a>'
							 +'<a href="#matter_ruzhou" class="normalbutton_submit">内容详情</a>'
							)
					}else {
					$( appendObj ).append(
						'<div class="divtop2" >' +
						'<h3>' + v.title +'</h3>' + 
						'<h4 > ' + " " +

						'</h3><h4 author>提出者: ' + v.realname +
						'</h4><h4 shijian>时间: ' + shijian +
						'</h4><h4 shencha>办理状态: ' + checkState +
						'</h4><h4 leixing>分类: ' + v.reviewclass + '</h4>' + 
						'<h4 leixing>主办单位: ' + v.realcompanyname +  								
						xieban + 
						fuyi +  
						// mianshang + 		
					    // '<h4 leixing>办理报告: ' + resumeinfo +  		

						
						'</h4></div>'  
						
					  // '<div class="attachment fj"><span>'  + '<span></div>' + 
					  // '<div class="attachment fj">附件：<span>' +  v.enclosure + '<span></div>' + 
						
						// '<div class="contentdivp">' + v.matter + '</div>' 
							+'<a href="#anssuggest_ruzhou" class="normalbutton_submit">办复信息</a>'
							
							+'<a href="#matter_ruzhou" class="normalbutton_submit">内容详情</a>'
						)
					}//else end
						
						
					
						
						
						
						
						
				})
				
				
				if ( noAttachement == 0 ) {
				//var dfenclosure = $("#seesuggest article .fj span").text();
				var dfenclosure = $( fjObj ).text();
				
				dfenclosure =  attachment ;	
				 
				var str = dfenclosure.split(",");
				var html = ""
				$.each(str, function(idx, value) {	
					if (value != "") {
						html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + enclosurename + "</p></div>"
						if ( index == 0 ) {
							$('#seestatisticsMY  article .fj').append( html );	
						}
						else if ( index == 1 ) {
							$('#seeevaluation article .fj').append( html );
						}
						else if ( index == 2 ) {
							$('#seeevaluationJY article .fj').append( html );
						}
						else if ( index == 3 ) {
							$('#seeevaluationYA article .fj').append( html );
						}
						else if ( index == 4 ) {
							$('#seeevaluationSC article .fj').append( html );
						}
						else if ( index == 5 ) {
							$('#seeevaluationDY article .fj').append( html );
						}
					}
				})
				
				
				
				
				
				}
				
				//$('#seesuggest article  .fj span').hide();
				//$('#seeevaluationJY article  .fj span').hide();

				// if ( attachmentPath != "" ) {
				// 	html = "<p  class='pdfjs8'>" + attachmentPath + "</p>"
				// 	$('#seesuggest article .fj').append( html );
				// 								alert(html);
				// }
								
				 // $('#seesuggest article  .fj span').hide();
				 $(".fj p").off().click(function() {
				//$(".fj").off().click(function() {
					var path = $(this).attr("name");
					 var dz = myip + "upfile/" + path;
					//var dz = myip + "upfile/" + attachmentPath;
					// alert(attachmentPath);
		//修改之前
						
					//var pdfh5 = new Pdfh5('.pdfjs8', {
						//pdfurl: dz
					//});
//修改之后
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if (dz.indexOf(".pdf") != -1) {
						if ( index == 0 ) {
							var pdfh5 = new Pdfh5('#seestatisticsMY  article', {
								pdfurl: dz
							});
						}
						else if ( index == 1 ) {
							var pdfh5 = new Pdfh5('#seeevaluation  article', {
								pdfurl: dz
							});
						}
						else if ( index == 2 ) {
							var pdfh5 = new Pdfh5('#seeevaluationJY  article', {
								pdfurl: dz
							});
						}
						else if ( index == 3 ) {
							var pdfh5 = new Pdfh5('#seeevaluationYA  article', {
								pdfurl: dz
							});
						}
						else if ( index == 4 ) {
							var pdfh5 = new Pdfh5('#seeevaluationSC  article', {
								pdfurl: dz
							});
						}
						else if ( index == 5 ) {
							var pdfh5 = new Pdfh5('#seeevaluationDY  article', {
								pdfurl: dz
							});
						}	
					}
					else {
						location.href = dz;
					}
					
				})
				
				
			})//获取联名代表结束
		})//获取附件名称结束
			
	})
}







$("#anssuggest_ruzhou").load(function() {
	var key = $(this).parent().attr("sortid");
	RssApi.View.List("sort").setLoading(true).condition(new RssDict()
	.keyvalue({
		"id": sortid
		}).getDict()).getJson(function(json) {
		$("#anssuggest_ruzhou article .zw").remove();
		if ( !json[0].resumeinfo) {
			var shijian = "",
				organize = "",
				degree = "",
				way = "";
			
			var resume = "";
			var isxzsc = "";
			var deal = "";
			var examination = "";
			var banfuFlag = 0 ;
			
			$("#anssuggest_ruzhou article").mapview(json, {
				"shijian": function(val) {
					return shijian = new Date(
							parseInt(val) * 1000)
						.toString("yyyy-MM-dd");
				},
				"organize": function(val) {
					return organize = new Date(
							parseInt(val) * 1000)
						.toString("yyyy-MM-dd");
				},
				
				"deal": function(val) {
					deal = val;
				},
				"deal": function(val) {
					deal = val;
				},
				"examination": function(val) {
					examination = val;
				},
				"handlestate": function(val) {
					handlestate = val;
				},
				"resume": function(val) {
					
					resume = val;
					var state = "未审核"
					if ( draft == "1"){
						return "草稿"
					}
					if (resume == "1" && examination == "2") {
						state =   "已办复";
						banfuFlag = 1 ;
					} 
	
					if (deal == "1" && resume == "1") {
						state =  "已答复";
						banfuFlag = 1 ;
					} 
					
					
					if (isxzsc == "1" && draft == "2") {
						state =   "已办复";
						banfuFlag = 1 ;
					} 
					 return state ;
				},
				"degree": function(val) {
					if (val == "1") {
						if ( banfuFlag == 0 ) {
							return degree = "未解决";
						}
						return degree = "已解决";
					}
					if (val == "2") {
						return degree = "正在解决";
					}
					if (val == "3") {
						return degree = "列入计划解决";
					}
					if (val == "4") {
						return degree = "因条件限制无法解决";
					}
				},
				"way": function(val) {
					if (val == "1") {
						return way = "书面（以邮寄方式）";
					}
					if (val == "2") {
						return way = "平台（上传附件）";
					}
					if (val == "3") {
						return way = "其他";
					}
				}
			})
			$.each(json, function(k, v) {
				
				var realcompanyname = v.realcompanyname;
				var matter = v.matter ;
				
				var BanFuName = v.BanFuName;
				var BanFutel = v.BanFutel;
				var comments = v.comments;
				var resumeinfo = v.resumeinfo;
				var dfenclosure = v.dfenclosure ;
				if (dfenclosure == undefined || dfenclosure == "") {
					dfenclosure = "暂无";
				}
				
				if (realcompanyname == undefined || realcompanyname == "") {
					realcompanyname = "不详";
				}
				if (BanFuName == undefined || BanFuName == "") {
					BanFuName = "不详";
				}
				if (BanFutel == undefined || BanFutel == "") {
					BanFutel = "不详";
				}
				if (comments == undefined || comments == "") {
					comments = "暂无";
				}
				if (resumeinfo == undefined || resumeinfo == "") {
					resumeinfo = "暂无";
				}
				if (matter == undefined || matter == "") {
					matter = "暂无内容";
				}
				$("#anssuggest_ruzhou article").append(
					// '<div class="divtop"><h1>' + v
					// .title + '</h1><h4>发布者：' + v
					// .realname +
					// '</h4><h4>发布时间：' + shijian +
					// '</h4></div>' + 
					'<div class="bf"><b>办复单位</b><br><p>' +
					realcompanyname +
					'</p></div><div class="bf"><b>答复方式</b><br><p >' +
					way +
					'</p></div><div class="fj"><b>答复附件</b><br><p class="pdfjs6">' +
					dfenclosure +
					'</p></div><div class="bf"><b>答复期限</b><br><p >' +
					organize +
					'</p></div><div class="bf"><b>办理情况</b><br><p>' +
					degree +
					'</p></div><div class="bf"><b>办复人</b><br><p>' +
					BanFuName +
					'</p></div><div class="bf"><b>办复人电话</b><br><p>' +
					BanFutel +
					'</p></div><div class="bf"><b>办复意见说明</b><br><p >' +
					comments +
					'</p></div><div class="bf"><b>办复报告</b><br><div><p>' +
					resumeinfo +
					'</p></div></div>'
					
					// + '<div class="contentdivp">' + matter + '</div>'
					)
					
			})
			var dfenclosure = $("#anssuggest_ruzhou article .pdfjs6")
				.text();
			var str = dfenclosure.split(",");
			////console.log(str);
			var html = ""
			$.each(str, function(idx, value) {
				if (value != "") {
					html = "<p class='pdfjs7'>" +
						value + "</p>"
					$('#anssuggest_ruzhou article .fj').append(
						html);
				}
			})
			$('#anssuggest_ruzhou article .pdfjs6').hide();
			$(".fj p").off().click(function() {
				//                                alert("文件路径：com.rsseasy.lvzhi.file");
				var path = $(this).text();
				var dz = myip + "upfile/" + path;
				if ( dz.indexOf(".doc") != -1 ) {
					var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
					xurl += encodeURIComponent(dz);
					window.open(xurl);
				} 
				else if ( dz.indexOf(".pdf") != -1 ){
					var pdfh5 = new Pdfh5('.pdfjs7', {
						pdfurl: dz
					});
				}
				else {
					location.href = "#pictureSt";
					$("#attachmentImg").attr("src", dz);
				}
			})
		} else {
			$("#anssuggest_ruzhou article .divtop").remove();
			$("#anssuggest_ruzhou article .divp").remove();
			$("#anssuggest_ruzhou article .bf").remove();
			$("#anssuggest_ruzhou article .fj").remove();

			$("#anssuggest_ruzhou article").append(
				// '<p class="zw">暂无办复信息！</p>')
				'<div style="text-align: center;"> <img class="nosolutions" src="img/limg/comm_nodata.png" alt="" /></div>')
				
		}
	})
})


$("#matter_ruzhou").load(function() {
	
		var key = $(this).parent().attr("sortid");
		RssApi.View.List("sort").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": sortid
			}).getDict()).getJson(function(json) {
			$("#matter_ruzhou article .zw").remove();
			if ( !json[0].resumeinfo) {
				var shijian = "",
					organize = "",
					degree = "",
					way = ""
					
				$("#matter_ruzhou article").mapview(json, {})
				$.each(json, function(k, v) {
					
					
					$("#matter_ruzhou article").append(
						
						
						'<div class="contentdivp">' + v.matter + '</div>'
						)
						
				})
				
			} 
		})
	
})
