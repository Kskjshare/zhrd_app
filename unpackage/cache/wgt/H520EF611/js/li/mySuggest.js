

function fillSuggestListData( index ){
	console.log("_________fillSuggestListData")
	var viewName = "sort";
	var condition = {
		"draft": "2",
		"lwstate": "1",
		"myid": RssUser.Data.myid,
	}
	
	if ( index == 1 ) {
		condition = {
			"draft": "2",
			"lwstate": "1",
			"userid": RssUser.Data.myid,
		}	
		viewName = "second_suggest";
	}
	
	faqsajax = RssApi.View.List( viewName ).setLoading(true).condition(new RssDict().keyvalue(
		condition ).getDict()).setFlushUI(function(json, append) {
		var json2 = [];
		$.each(json, function(k, v) {
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})	
		if (json2.length < 10 ) {
			// $('.nodata').hide();
		} else {
			// $('.nodata').show();
		}
		
		if (json.length > 0 ) {
			// $('.nosolutions').hide();
		} else {
			// $('.nosolutions').show();
		}
		
		$("#mysuggest ul").mapview(json, {
		   "registertype": function (val) {
			   var registertype = dictdata.registertype[val]
			   return registertype;
		   },
		   "examination": function(val) {
		   
		   	if (val == "1") {
		   		return state = "未审查";
		   	} else if (val == "2") {
		   		return state = "已审查";
		   	} else if (val == "3") {
		   		return state = "置回";
		   	} else if (val == "4") {
		   		return state = "待审查";
		   	} else if (val == "5") {
		   		return state = "乡镇已审查";
		   	}
		   },
		}, append)
		$("#mysuggest .del").show();
		//查看
		$("#mysuggest .see").off().click(function() {
			console.log("_______________ #mysuggest .see ")
			var attachmentPath = "";
			$('#seesuggest article .no1').remove();
			var key = $(this).parent().attr("sortid");
			
			var reject = 0 ;
			lwstate =  1 ;
			var obj ="seesuggest";
			viewSuggestDetail( obj , reject , lwstate ,key );
		})
		//办复信息
		$("#mysuggest .ans").off("click").click(function() {
			
			var key = $(this).parent().attr("sortid");
			console.log("_______________ #mysuggest .ans key=",key)
			RssApi.View.List("sort").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				$("#anssuggest article .zw").remove();
				if (json[0].resumeinfo) {
					var shijian = "",
						organize = "",
						degree = "",
						way = ""
					$("#anssuggest article").mapview(json, {
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
						"degree": function(val) {
							if (val == "1") {
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
						$("#anssuggest article").append(
							'<div class="divtop"><h1>' + v
							.title + '</h1><h4>发布者：' + v
							.realname +
							'</h4><h4>发布时间：' + shijian +
							'</h4></div><div class="divp">' +
							v.matter +
							'</div><div class="bf"><b>办复单位</b><br><p>' +
							v.realcompanyname +
							'</p></div><div class="bf"><b>答复方式</b><br><p >' +
							way +
							'</p></div><div class="fj"><b>答复附件</b><br><p class="pdfjs6">' +
							v.dfenclosure +
							'</p></div><div class="bf"><b>答复期限</b><br><p >' +
							organize +
							'</p></div><div class="bf"><b>办理情况</b><br><p>' +
							degree +
							'</p></div><div class="bf"><b>办复人</b><br><p>' +
							v.BanFuName +
							'</p></div><div class="bf"><b>办复人电话</b><br><p>' +
							v.BanFutel +
							'</p></div><div class="bf"><b>办复意见说明</b><br><p >' +
							v.comments +
							'</p></div><div class="bf"><b>办复报告</b><br><div><p>' +
							v.resumeinfo +
							'</p></div></div>')
					})
					var dfenclosure = $("#anssuggest article .pdfjs6")
						.text();
					var str = dfenclosure.split(",");
					////console.log(str);
					var html = ""
					$.each(str, function(idx, value) {
						if (value != "") {
							html = "<p class='pdfjs7'>" +
								value + "</p>"
							$('#anssuggest article .fj').append(
								html);
						}
					})
					$('#anssuggest article .pdfjs6').hide();
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
					$("#anssuggest article .divtop").remove();
					$("#anssuggest article .divp").remove();
					$("#anssuggest article .bf").remove();
					$("#anssuggest article .fj").remove();
			
					$("#anssuggest article").append(
						// '<p class="zw">暂无办复信息！</p>')
						'<div style="text-align: center;"> <img class="nosolutions" src="img/limg/comm_nodata.png" alt="" /></div>')
						
				}
			})
			
		})
		$("#mysuggest .result").off("click").click(function() {
			
			var key = $(this).parent().attr("sortid");
			console.log("_______________ #mysuggest .result key=",key)
			$("#lwstate_id").val( 1 );
			$("#key_id").val( key );
		})	
		
		//删除
		$("#mysuggest .del").off("click").click(function() {
			var key = $(this).parent().attr("sortid");
			var t = $(this);
			RssApi.Delete("suggest").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).keyvalue().getDict()).getJson(function(json) {
				alert("删除成功");
				t.parents("li").remove();
				//$("#mysuggest").load();
			})
		})	
			
	})
}

$("#mysuggest").load(function() {
		$("#mysuggest nav>a").off("click").click(function() {
			$(this).addClass("sel").siblings().removeClass("sel");
			if (arry.indexOf("mysuggest") == "-1") {
				$("#mysuggest ul li").eq(0).siblings().remove();
				arry.push("mysuggest")
			} else {
				$("#mysuggest ul li").remove();
			}
			if ( $(this).index() == "0"){
				faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
					"draft": "2",
					"lwstate": "1",
					"myid": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
					var json2 = [];
					$.each(json, function(k, v) {
						if ( "undefined".indexOf(v.avatar) != -1 ) {
							v.avatar = "avatar.png" ;
						}
						json2.push(v)
					})	
					
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
					
					$("#mysuggest ul").mapview(json2, {
					   "registertype": function (val) {
						   var registertype = dictdata.registertype[val]
						   return registertype;
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
					   	
					   	 return state ;
					   	// if (draft == "1") {
					   	// 	return "草稿"
					   	// } else if (deal == "1" && resume == "1") {
					   	// 	return "已答复";
					   	// } else if (deal == "1" && resume == "0") {
					   	// 	return "已交办";
					   	// } else if (examination == "2" && deal == "0" && draft == "2") {
					   	// 	return "已审查";
					   	// } else if (isxzsc == "1" && draft == "2") {
					   	// 	return "已答复";
					   	// } else if (iscs == "1" && draft == "2") {
					   	// 	return "初审查";
					   	// } else if (examination == "1" && draft == "2") {
					   	// 	return "未审查"; //已提交
					   	// } else if (examination == "3") {
					   	// 	return "已置回";
					   	// }
					   },
					}, append)
					$("#mysuggest .del").show();
					//查看
					$("#mysuggest .see").off().click(function() {
						var attachmentPath = "";
						$('#seesuggest article .no1').remove();
						var key = $(this).parent().attr("sortid");
						
						var reject = 0 ;
						lwstate =  1 ;
						var obj ="seesuggest";
						viewSuggestDetail( obj , reject , lwstate ,key );
					})
					
					//满意度
					$("#mysuggest .result").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						$("#lwstate_id").val( 1 );
						$("#key_id").val( key );
					})
					
					
				//办复信息
				$("#mysuggest .ans").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						RssApi.View.List("sort").setLoading(true).condition(new RssDict()
							.keyvalue({
								"id": key
							}).getDict()).getJson(function(json) {
							$("#anssuggest article .zw").remove();
							if ( !json[0].resumeinfo) {
								var shijian = "",
									organize = "",
									degree = "",
									way = ""
									
								$("#anssuggest article").mapview(json, {
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
									"degree": function(val) {
										if (val == "1") {
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
									$("#anssuggest article").append(
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
								var dfenclosure = $("#anssuggest article .pdfjs6")
									.text();
								var str = dfenclosure.split(",");
								////console.log(str);
								var html = ""
								$.each(str, function(idx, value) {
									if (value != "") {
										html = "<p class='pdfjs7'>" +
											value + "</p>"
										$('#anssuggest article .fj').append(
											html);
									}
								})
								$('#anssuggest article .pdfjs6').hide();
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
								$("#anssuggest article .divtop").remove();
								$("#anssuggest article .divp").remove();
								$("#anssuggest article .bf").remove();
								$("#anssuggest article .fj").remove();
	
								$("#anssuggest article").append(
									// '<p class="zw">暂无办复信息！</p>')
									'<div style="text-align: center;"> <img class="nosolutions" src="img/limg/comm_nodata.png" alt="" /></div>')
									
							}
						})
	
					})
					
					
					
					
					//办复信息
	// 				$("#mysuggest .ans").off("click").click(function() {
	// 					var key = $(this).parent().attr("sortid");
	// 					RssApi.View.List("sort").setLoading(true).condition(new RssDict()
	// 						.keyvalue({
	// 							"id": key
	// 						}).getDict()).getJson(function(json) {
	// 						$("#anssuggest article .zw").remove();
	// 						if ( !json[0].resumeinfo) {
	// 							var shijian = "",
	// 								organize = "",
	// 								degree = "",
	// 								way = ""
	// 							$("#anssuggest article").mapview(json, {
	// 								"shijian": function(val) {
	// 									return shijian = new Date(
	// 											parseInt(val) * 1000)
	// 										.toString("yyyy-MM-dd");
	// 								},
	// 								"organize": function(val) {
	// 									return organize = new Date(
	// 											parseInt(val) * 1000)
	// 										.toString("yyyy-MM-dd");
	// 								},
	// 								"degree": function(val) {
	// 									if (val == "1") {
	// 										return degree = "已解决";
	// 									}
	// 									if (val == "2") {
	// 										return degree = "正在解决";
	// 									}
	// 									if (val == "3") {
	// 										return degree = "列入计划解决";
	// 									}
	// 									if (val == "4") {
	// 										return degree = "因条件限制无法解决";
	// 									}
	// 								},
	// 								"way": function(val) {
	// 									if (val == "1") {
	// 										return way = "书面（以邮寄方式）";
	// 									}
	// 									if (val == "2") {
	// 										return way = "平台（上传附件）";
	// 									}
	// 									if (val == "3") {
	// 										return way = "其他";
	// 									}
	// 								}
	// 							})
	// 							$.each(json, function(k, v) {
									
	// 								var realcompanyname = v.realcompanyname;
	// 								var matter = v.matter ;
									
	// 								var BanFuName = v.BanFuName;
	// 								var BanFutel = v.BanFutel;
	// 								var comments = v.comments;
	// 								var resumeinfo = v.resumeinfo;
	// 								if (realcompanyname == undefined || realcompanyname == "") {
	// 									realcompanyname = "不详";
	// 								}
	// 								if (BanFuName == undefined || BanFuName == "") {
	// 									BanFuName = "不详";
	// 								}
	// 								if (BanFutel == undefined || BanFutel == "") {
	// 									BanFutel = "不详";
	// 								}
	// 								if (comments == undefined || comments == "") {
	// 									comments = "暂无";
	// 								}
	// 								if (resumeinfo == undefined || resumeinfo == "") {
	// 									resumeinfo = "暂无";
	// 								}
	// 								if (matter == undefined || matter == "") {
	// 									matter = "暂无内容";
	// 								}
	// 								$("#anssuggest article").append(
	// 									'<div class="divtop"><h1>' + v
	// 									.title + '</h1><h4>发布者：' + v
	// 									.realname +
	// 									'</h4><h4>发布时间：' + shijian +
	// 									'</h4></div>' + 
	// 									// '<div class="divp">' +matter + '</div>' + 
	// 									'<div class="bf"><b>办复单位</b><br><p>' +
	// 									realcompanyname +
	// 									'</p></div><div class="bf"><b>答复方式</b><br><p >' +
	// 									way +
	// 									'</p></div><div class="fj"><b>答复附件</b><br><p class="pdfjs6">' +
	// 									v.dfenclosure +
	// 									'</p></div><div class="bf"><b>答复期限</b><br><p >' +
	// 									organize +
	// 									'</p></div><div class="bf"><b>办理情况</b><br><p>' +
	// 									degree +
	// 									'</p></div><div class="bf"><b>办复人</b><br><p>' +
	// 									BanFuName +
	// 									'</p></div><div class="bf"><b>办复人电话</b><br><p>' +
	// 									BanFutel +
	// 									'</p></div><div class="bf"><b>办复意见说明</b><br><p >' +
	// 									comments +
	// 									'</p></div><div class="bf"><b>办复报告</b><br><div><p>' +
	// 									resumeinfo +
	// 									'</p></div></div>'
										
	// 									+ '<div class="contentdivp">' + matter + '</div>')
										
	// 							})
	// 							var dfenclosure = $("#anssuggest article .pdfjs6")
	// 								.text();
	// 							var str = dfenclosure.split(",");
	// 							////console.log(str);
	// 							var html = ""
	// 							$.each(str, function(idx, value) {
	// 								if (value != "") {
	// 									html = "<p class='pdfjs7'>" +
	// 										value + "</p>"
	// 									$('#anssuggest article .fj').append(
	// 										html);
	// 								}
	// 							})
	// 							$('#anssuggest article .pdfjs6').hide();
	// 							$(".fj p").off().click(function() {
	// 								//                                alert("文件路径：com.rsseasy.lvzhi.file");
	// 								var path = $(this).text();
	// 								var dz = myip + "upfile/" + path;
	// 								if ( dz.indexOf(".doc") != -1 ) {
	// 									var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
	// 									xurl += encodeURIComponent(dz);
	// 									window.open(xurl);
	// 								} 
	// 								else if ( dz.indexOf(".pdf") != -1 ){
	// 									var pdfh5 = new Pdfh5('.pdfjs7', {
	// 										pdfurl: dz
	// 									});
	// 								}
	// 								else {
	// 									location.href = "#pictureSt";
	// 									$("#attachmentImg").attr("src", dz);
	// 								}
	// 							})
	// 						} else {
	// 							$("#anssuggest article .divtop").remove();
	// 							$("#anssuggest article .divp").remove();
	// 							$("#anssuggest article .bf").remove();
	// 							$("#anssuggest article .fj").remove();
	
	// 							$("#anssuggest article").append(
	// 								// '<p class="zw">暂无办复信息！</p>')
	// 								'<div style="text-align: center;"> <img class="nosolutions" src="img/limg/comm_nodata.png" alt="" /></div>')
									
	// 						}
	// 					})
	
	// 				})
					//删除
					$("#mysuggest .del").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						var t = $(this);
						RssApi.Delete("suggest").setLoading(true).condition(new RssDict()
							.keyvalue({
								"id": key
							}).keyvalue().getDict()).getJson(function(json) {
							alert("删除成功");
							t.parents("li").remove();
							//$("#mysuggest").load();
						})
					})
					//办复信息
				}).getJson();
			} else {
				faqsajax = RssApi.View.List("second_suggest").setLoading(true).condition({
					"userid": RssUser.Data.myid,
					"lwstate": "1",
				}).setFlushUI(function(json, append) {
					
					
					var json2 = [];
					$.each(json, function(k, v) {
						if ( "undefined".indexOf(v.avatar) != -1 ) {
							v.avatar = "avatar.png" ;
						}
						json2.push(v)
					})	
					
					if (json2.length  < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
					
					$("#mysuggest ul").mapview(json2, {
						"registertype": function(val) {
							var registertype = dictdata.registertype[val]
							return registertype;
						}
					}, append)
					$("#mysuggest .del").hide();
					//查看
					$("#mysuggest .see").off().click(function() {
						$('#seesuggest article .no1').remove();
						var key = $(this).parent().attr("sortid");
						
						var reject = 0 ;
						lwstate =  1 ;
						var obj = "seesuggest";
						viewSuggestDetail( obj , reject , lwstate ,key );
						
						// RssApi.View.List("sort").setLoading(true).condition(new RssDict()
						// 	.keyvalue({
						// 		"sortid": key
						// 	}).getDict()).getJson(function(json) {
						// 	var shijian = "",
						// 		level = ""
						// 	$("#seesuggest article").mapview(json, {
						// 		"shijian": function(val) {
						// 			return shijian = new Date(parseInt(
						// 				val) * 1000).toString(
						// 				"yyyy-MM-dd hh:mm");
						// 		},
						// 		"level": function(val) {
						// 			return level = dictdata.circles[
						// 				val];
						// 		}
						// 	})
						// 	$.each(json, function(k, v) {
						// 		$("#seesuggest article").append(
						// 			'<div class="divtop"><h1 >' + v
						// 			.sessionname + '</h1><h2>[第' + v
						// 			.realid +
						// 			'号]</h2><h3>' + v.title +
						// 			'</h3><h4 >提出者:' + v.realname +
						// 			'</h4><h4 shijian>' + shijian +
						// 			'</h4></div><div class="divp">' + v
						// 			.matter +
						// 			'</div><div class="no"  >会议次数：' + v
						// 			.csname +
						// 			'</div><div class="no"  >层次：' +
						// 			level +
						// 			'</div><div class="no">审查分类：' + v
						// 			.scname +
						// 			'</div><div class="no fj">附件：<span>' +
						// 			v.enclosure + '<span></div>')
						// 	})
						// 	RssApi.View.List("second_user").setLoading(true)
						// 		.condition(new RssDict().keyvalue({
						// 			"suggestid": key
						// 		}).keyvalue().getDict()).getJson(function(lm) {
						// 			var lmr = ""
						// 			$.each(lm, function(k, v) {
						// 				lmr += v.realname + ",";
						// 			})
						// 			console.log(lmr);
						// 			$('#seesuggest article .fj').before(
						// 				'<div class="no1">联名代表：' + lmr +
						// 				'</div>');
						// 		})
						// 	var dfenclosure = $("#seesuggest article .fj span")
						// 		.text();
						// 	var str = dfenclosure.split(",");
						// 	////console.log(str);
						// 	var html = ""
						// 	$.each(str, function(idx, value) {
						// 		if (value != "") {
						// 			html = "<p class='pdfjs14'>" + value +
						// 				"</p>"
						// 			$('#seesuggest article .fj').append(
						// 				html);
						// 		}
						// 	})
						// 	$('#seesuggest article  .fj span').hide();
						// 	$(".fj p").off().click(function() {
						// 		//                                alert("文件路径：com.rsseasy.lvzhi.file");
						// 		var path = $(this).text();
						// 		var dz = myip + "upfile/" + path;
						// 		var pdfh5 = new Pdfh5('.pdfjs14', {
						// 			pdfurl: dz
						// 		});
						// 	})
						// 	//                        $("#seesuggest .divp").html(json[0].matter)
						// })
					})
					
					
					//办复信息
					$("#mysuggest .ans").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						location.href = "#anssuggest"
						console.log("_______________ 222 #mysuggest .result key=",key)
						                   // $("#anssuggest").find("header>h1").text($("#opinion").find(".sel").text() + "详情");
						RssApi.View.List("sort").setLoading(true).condition(new RssDict()
							.keyvalue({
								"id": key
							}).getDict()).getJson(function(json) {
							$("#anssuggest article .zw").remove();
							if (json[0].resumeinfo) {
								//                            $("#anssuggest article .zw").remove();
								var shijian = "",
									organize = "",
									degree = "",
									way = ""
								$("#anssuggest article").mapview(json, {
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
									"degree": function(val) {
										if (val == "1") {
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
									$("#anssuggest article").append(
										'<div class="divtop"><h1>' + v
										.title + '</h1><h4>发布者：' + v
										.realname +
										'</h4><h4>发布时间：' + shijian +
										'</h4></div><div class="divp">' +
										v.matter +
										'</div><div class="bf"><b>办复单位</b><br><p>' +
										v.realcompanyname +
										'</p></div><div class="bf"><b>答复方式</b><br><p >' +
										way +
										'</p></div><div class="fj"><b>答复附件</b><br><p class="pdfjs6">' +
										v.dfenclosure +
										'</p></div><div class="bf"><b>答复期限</b><br><p >' +
										organize +
										'</p></div><div class="bf"><b>办理情况</b><br><p>' +
										degree +
										'</p></div><div class="bf"><b>办复人</b><br><p>' +
										v.BanFuName +
										'</p></div><div class="bf"><b>办复人电话</b><br><p>' +
										v.BanFutel +
										'</p></div><div class="bf"><b>办复意见说明</b><br><p >' +
										v.comments +
										'</p></div><div class="bf"><b>办复报告</b><br><div><p>' +
										v.resumeinfo +
										'</p></div></div>')
								})
								var dfenclosure = $("#anssuggest article .pdfjs6")
									.text();
								var str = dfenclosure.split(",");
								////console.log(str);
								var html = ""
								$.each(str, function(idx, value) {
									if (value != "") {
										html = "<p class='pdfjs7'>" +
											value + "</p>"
										$('#anssuggest article .fj').append(
											html);
									}
								})
								$('#anssuggest article .pdfjs6').hide();
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
								$("#anssuggest article .divtop").remove();
								$("#anssuggest article .divp").remove();
								$("#anssuggest article .bf").remove();
								$("#anssuggest article .fj").remove();
	
								$("#anssuggest article").append(
									'<p class="zw">暂无办复信息！</p>')
							}
						})
					})
					//删除
					$("#mysuggest .del").off("click").click(function() {
						var t = $(this);
						var key = $(this).parent().attr("sortid");
						RssApi.Delete("suggest").setLoading(true).condition(new RssDict()
							.keyvalue({
								"id": key
							}).keyvalue().getDict()).getJson(function(json) {
							alert("删除成功");
							t.parents("li").remove();
							//                      $("#mysuggest").load();
						})
					})
					//办复信息
				}).getJson();
			}
		})
		if (mysuggestnav == "1") {
			$("#mysuggest nav>a").eq(0).click();
			mysuggestnav = "0";
		}
	
})
