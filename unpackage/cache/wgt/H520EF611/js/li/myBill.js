
function fillbillListData( index ) {
	var viewName = "sort";
	
	var condition = {
		"draft": "2",
		"lwstate": "2",
		"myid": RssUser.Data.myid,
	}
	if ( index == 1 ) {
		condition = {
			"draft": "2",
			"lwstate": "2",
			"userid": RssUser.Data.myid,
		}
		viewName = "second_suggest";
	}
	
	faqsajax = RssApi.View.List(viewName).setLoading(true).condition(new RssDict().keyvalue(
		condition
	).getDict()).setFlushUI(function(json, append) {
		var json2 = [];
		$.each(json, function(k, v) {
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})	
		if (json2.length <10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json2.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
		}	
			
		$("#mysuggestYA ul").mapview(json2, {
			"registertype": function(val) {
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
				
		$("#mysuggestYA .see").off().click(function() {
			$('#seesuggest article .no1').remove();
			var aa = $('#seesuggest article  .fj').text();
			if (!(aa == "" || aa == undefined)) {
				$('#seesuggest article .pdfjs16').remove();
			}
			var key = $(this).parent().attr("sortid");
		
			var reject = 0 ;
			lwstate =  2 ;
			var obj = "seesuggest";
			viewSuggestDetail( obj,reject , lwstate ,key );
		})		
		
		
		$("#mysuggestYA .ans").off("click").click(function() {
			$("#anssuggest article a").remove();
			var key = $(this).parent().attr("sortid");
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
							html = "<p class='pdfjs18'>" +
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
							var pdfh5 = new Pdfh5('.pdfjs18', {
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
					// $("#anssuggest").find("header>h1").text( "办复信息" );
				}
			})
		})
		$("#mysuggestYA .result").off("click").click(function() {
			var key = $(this).parent().attr("sortid");
			$("#lwstate_id").val( 2 );
			$("#key_id").val( key );
		})	
		//删除
		$("#mysuggestYA .del").off("click").click(function() {
			var t = $(this);
			var key = $(this).parent().attr("sortid");
			RssApi.Delete("suggest").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).keyvalue().getDict()).getJson(function(json) {
				alert("删除成功");
				//                      $("#mysuggestYA").load();
				t.parents("li").remove();
			})
		})
				
	}).getJson();
}
$("#mysuggestYA").load(function() {
	$("#mysuggestYA nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("mysuggestYA") == "-1") {
			$("#mysuggestYA ul li").eq(0).siblings().remove();
			arry.push("mysuggestYA")
		} else {
			$("#mysuggestYA ul li").remove();
		}
		if ($(this).index() == "0") {
			fillbillListData ( 0 );
			$("#mysuggestYA .del").show();
		} else {
			fillbillListData ( 1 );
			$("#mysuggestYA .del").hide();
			
		}
	})
	if (mysuggestnavYA == "1") {
		$("#mysuggestYA nav>a").eq(0).click();
		mysuggestnavYA = "0";
	}
})
