
var arry = [];
var delegationchildnav  = "0";
var liaisonstationnav  = "0";//联络站导航

var delegationId = 0 ;
var isEntry = 0 ;//代表团用于是否第一次进入界面。刷新数据
var liaisonstationEntry = 0 ; //联络站
var divisionStationid = 0 ; //联络站id


var homepagenav = "0";

location.href = "#noticebulletin";
setTimeout("$('#noticebulletin nav>a').eq(0).click()",1);




$("[href='#noticebulletin']").click(function() {
	console.log("___________ noticebulletin bbbb ")
	homepagenav = "1";
})



//导航条切换
$("nav>a").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
})


var faqsajax;
//新闻提醒清除
$("#notice li").click(function() {
	$(this).find("span").removeAttr("value");
})
//评级
$("#handleevaluate li em a").click(function() {
	var ind = $(this).index();
	$(this).parent().find("a").each(function() {
		if ($(this).index() <= ind) {
			$(this).addClass("sel")
		} else {
			$(this).removeClass("sel")
		}
	})
})
//遮罩层
$("#zzc").click(function() {
	$("#zzc").hide();
})
$("section").load(function() {
	$("#zzc").hide();
})
var zzc = function(t, e) {
	$("#zzc ul").empty();
	$("#zzc").show();
	console.log(e)
	$.each(e, function(k, v) {
		console.log(k + "---" + v)
		$("#zzc ul").append("<li relationid='" + k + "'>" + v + "</li>")
	})
	$("#zzc li").off("click").click(function(e) {
		e.stopPropagation();
		t.text($(this).text());
		
		//处理上传履职活动编辑界面输入法界面导致刷新时，恢复为出席人代会
		// console.log( "relationid=" + $(this).attr("relationid"))
		// console.log( "text=" + $(this).text())
		relationid = $(this).attr("relationid") ;
		reviewclassName =  $(this).text();
		//处理上传履职活动编辑界面输入法界面导致刷新时，恢复为出席人代会
		
		
		t.attr("relationid", $(this).attr("relationid"))
		//        $("#oldsuggest .search input").val($("#oldsuggest em").text())
		$("#zzc").hide();
		
		
					 
	})
}

//遮罩层
$("#zzc6").click(function() {
	$("#zzc6").hide();
})
$("section").load(function() {
	$("#zzc6").hide();
})
var zzc6 = function(tt, ee) {
	$("#zzc6 ul").empty();
	$("#zzc6").show();
	$.each(ee, function(k, v) {
		$("#zzc6 ul").append("<li relationid='" + k + "'>" + v + "</li>")
	})
	$("#zzc6 li").off("click").click(function(ee) {
		ee.stopPropagation();
		tt.text($(this).text());
		tt.attr("relationid", $(this).attr("relationid"))
		$("#oldsuggest .search input").attr("placeholder", $("#oldsuggest em").text())
		$("#zzc6").hide();
	})
}


//通知公告
$("#noticesel li").click(function() {
	var ind = $(this).index();
	location.href = "#noticebulletin";
	$("#noticebulletin nav>a").eq(ind).click();
})

$("#suggestsub").load(function() {})





$("#delegationchild").load(function() {	
	$("#delegationchild nav>a").off("click").click(function() {
		
		var ind = $(this).index() + 1;
		console.log("____________ delegationchild click ind="+ind)
		
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("delegationchild") == "-1") {
			$("#delegationchild ul li").eq(0).siblings().remove();
			arry.push("delegationchild")
		} else {
			$("#delegationchild ul li").remove();
		}
		
		$("#delegationchild .hisback").click(function() {
			isEntry = 0 ;
			delegationchildnav == "0";
		});	
		
		
		if ($(this).index() == "0") {
			delegationchildnav = "0";
			var key = $(this).parent().attr("stationid");
			key = delegationId ;
			faqsajax = RssApi.Table.List("stationcontent").setLoading(true).keyvalue("pagesize", "50").condition(new RssDict().keyvalue({
				"stationid": key,
			}).getDict()).setFlushUI(function(json, append) {
				if (json.length < 50 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				
				
				
				
				var json2 = [];
				for (var i = 0; i < json.length; i++) {
					var data = json[i];
					if (data == "" || data.ico == undefined) {
						data.ico = 'default_station.png';
					}
					data.icon = 'upfile/' + data.ico;
					json2.push(data);
				}
				
				
				$("#delegationchild ul").mapview(json2, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
					},
					
				}, append)
				
				
				$("#delegationchild ul li").click(function() {
				
					var key = $(this).find("[rssid]").attr("rssid");
					var myid = $(this).parent().attr("myid");
					var myid = $(this).find("[myid]").attr("myid");
					// var key = $(this).find("[stationid]").attr("stationid");
					
					console.log("______ 赋值动态key="+key)
					console.log("______ 赋值动态myid="+myid)
					noticebulletinClick(key, json2, append);
					return;
				
					//$("#fz1").hide();
					//var key = $(this).find("[rssid]").attr("rssid");
					//location.href = "#seenotice"
					//$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() +"详情");
				    
				})
				
			}).getJson();
		} 
		else if ( ($(this).index() == "1")) {
				delegationchildnav = "1";
				var key = $(this).parent().attr("stationid");
				 key = delegationId ;
				
				//var myid = $(this).parent().attr("rssid");
				// key = delegationId ;
				console.log("______ 点击联络站栏目stationid="+key)
				//console.log("______ 点击联络站myid="+myid)
				
				faqsajax = RssApi.Table.List("contactstation_sub").setLoading(true).keyvalue("pagesize", "50").condition({
					"stationid": key,				
				}).setFlushUI(function(json, append) {
					
					if (json.length < 50 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					
					if (json.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
					
					
					
					
					var json2 = [];
					for (var i = 0; i < json.length; i++) {
						var data = json[i];
						
						if (data == "" || data.ico == undefined) {
							data.ico = 'station.png';
						}
						data.icon = 'upfile/' + data.ico;
						//特殊处理
						data.shijian = "站长: " + data.master;
						if ("undefined".indexOf( data.address ) != -1 ) {
							data.address = "地址不详";
						}
						json2.push(data);
						
					}
										
					$("#delegationchild ul").mapview(json2, {
						// "shijian": function(val) {
							// return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
						// }
						
					}, append)
					
					$("#delegationchild ul li").click(function() {
						isEntry = 0 ;
						var key = $(this).find("[rssid]").attr("rssid");
						var stationid = $(this).find("[stationid]").attr("stationid");	
						var myid1 = $(this).find("[rssid]").attr("myid");
						var currentIndex = $(this).index();
						console.log("______ delegationchild 联络站记录id key="+key)
						console.log("______ delegationchild 点击具体联络站 myid="+stationid)
						console.log("______ delegationchild 点击具体联络站 stationid="+json2[currentIndex].stationid)
						
						var currentIndex = $(this).index();
						liaisonstationClick(key, json2[currentIndex], append);
						return;
					
					})			
								
				}).getJson();

		}
		else {
			delegationchildnav = "2";
			testdyz = 1 ;
			var key = $(this).parent().attr("stationid");
			var myid = $(this).parent().attr("rssid");
			key = delegationId ;
			console.log("______ key="+key)
			console.log("______ myid="+myid)
			console.log("______ mystationId="+mystationId)
			myid = mystationId;
			
			faqsajax = RssApi.View.List("userrole").setLoading(true).keyvalue("pagesize", "50").condition({
				"state": 2,
			    "mission": mystationId,	
			}).setFlushUI(function(json, append) {
				
				if (json.length < 50 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				
				
				
				
				var json2 = [];				
				for (var i = 0; i < json.length; i++) {
					var data = json[i];
					
					if (data == "" || data.ico == undefined) {
						data.ico = 'station.png';
					}
					data.icon = 'upfile/' + data.ico;
					// if ("undefined".indexOf( data[0].avatar ) != -1 ) {
					// 	return global_ip + "upfile/avatar.png";
					// }
					//特殊处理
					data.title = data.realname;
					var splits = data.circleslist.split(",");
					data.shijian = ""
					for ( var j = 0 ; j < splits.length ; j ++ )
					{
						if ( parseInt( splits[j]) >= 0 && parseInt( splits[j] ) <= 9   ) {
							
							data.shijian = globalLevel[ parseInt( splits[j] )  ];
						}
					}
					json2.push(data);
				}
				
				$("#delegationchild ul").mapview(json2, {
				}, append)
				
				$("#delegationchild ul li").click(function() {
				
					var key = $(this).find("[rssid]").attr("rssid");
					var currentIndex = $(this).index();
					//console.log('rssid is:', key);
					//console.log('currentIndex is:', currentIndex);
					$("#representative").find("header>h1").text(json2[currentIndex].realname );
					representativeClick(key, json2[currentIndex], append);
				    
				})
								
			}).getJson();
		}
	})
	
	if ( delegationchildnav == "1" ) {
		$("#delegationchild nav>a").eq(1).click();
		//delegationchildnav = "0";
	}
})


var mystationId = '';

function representativeClick(key, json2, append) {	
	console.log('-————- key is:', key);
	console.log('-————- mission is:', json2.mission);
	console.log('-————- nationid is:', json2.nationid);
	location.href = "#representative"
	RssApi.View.List("contactstation").setLoading(true).condition(new RssDict()
		.keyvalue({
			"myid": json2.mission
		}).getDict()).getJson( function(data) {		
		
		$("#representative article").mapview(json2, {
			"sex": function(val) {
				//return globalSex[ json2.sex ];
				if ( json2.nationid >=0 && json2.nationid <= 9 ) {
					return globalSex[ json2.sex ] +
					"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民族:&nbsp;&nbsp;" 
					+ globalNationid[ json2.nationid ];
				}
							
				return globalSex[ json2.sex ] + 
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民族:&nbsp;&nbsp;" 
				+  json2.nationid ;
				
			},
			"nationid": function(val) {
				var nationid = globalNationid[ json2.nationid ];
				return nationid + "&nbsp;&nbsp;&nbsp;";
			},
			
			
			
			
			"mission": function(val) {
				return data[0].realname + "&nbsp;&nbsp;&nbsp;";
			},
			
			// "avatar": function(val) {
			// 	if ("undefined".indexOf( data[0].avatar ) != -1 ) {
			// 		return global_ip + "upfile/avatar.png";
			// 	}
			// 	else {
			// 		return global_ip + data[0].avatar ;
			// 	}
			// 	//return global_ip + "upfile/me_head.png"
				
			// }
			
		})
		
	});
	
	
	console.log("______ json2.myid="+json2.myid)
	RssApi.Table.List("user").setLoading(true).condition(new RssDict().keyvalue({"myid": json2.myid}).getDict()).getJson(function (data) {
	    //data.avatar = "upfile/avatar.png";
	
		$("#delegatephoto").mapview(data, {
			"avatar": function(val) {
				// return "http://117.158.113.36:9002/upfile/avatar.png";
				 return global_ip + "upfile/me_head.png"
				// return "http://117.158.113.36:9002/upfile/avatar.png";
			}
		});
	});
	
	
}



function showdelegateInformation( data) {	
	location.href = "#representative"
	console.log("______ showdelegateInformation.mission="+data.mission)
	console.log("______ showdelegateInformation.daibiaoDWjob="+data.daibiaoDWjob)
	console.log("______ showdelegateInformation.realname="+data.realname)
	console.log("______ showdelegateInformation.avatar="+data.avatar)
	if ( data.mission == 0 ){
		data.mission = 1045;
	}
	RssApi.View.List("contactstation").setLoading(true).condition(new RssDict()
		.keyvalue({
			"myid": data.mission
		}).getDict()).getJson( function(json) {	
			
	
		console.log("______ showdelegateInformation length="+json.length)
		$("#representative article").mapview(data, {
			"sex": function(val) {
				//return globalSex[ json2.sex ];
				return globalSex[ data.sex ] + 
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;民族:&nbsp;&nbsp;" 
				+ globalNationid[ data.nationid ];
				
			},
			
			"nationid": function(val) {
				var nationid = globalNationid[ data.nationid ];
				return nationid + "&nbsp;&nbsp;&nbsp;";
			},
			
			
			"mission": function(val) {				
				return json[0].realname + "&nbsp;&nbsp;&nbsp;";
			},
			
			
			
			// "avatar": function(val) {
			// 	if ("undefined".indexOf( data.avatar ) != -1 ) {
			// 		return global_ip + "upfile/avatar.png";
			// 	}
			// 	else {
			// 		return global_ip + data.avatar ;
			// 	}
				
			// }
			
		})
		
	});
	
	
	
}


$("[href='#delegationchild']").click(function() {
	delegationchildnav = "1";
})




$("#stationDelegation").load(function() {		
	var ind = $(this).index() + 1;
	var messageJson = [];
	
	if (arry.indexOf("stationDelegation") == "-1") {
		$("#stationDelegation ul li").eq(0).siblings().remove();		
		arry.push("stationDelegation")
	} else {
		$("#stationDelegation ul li").remove();
		
	}	
	faqsajax = RssApi.Table.List("contactstation_new").setLoading(true).keyvalue("pagesize", "50").setFlushUI(function(json, append) {
		if (json.length < 50 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
		}
		
		

		
		var json2 = [];
		for (var i = 0; i < json.length; i++) {
			var data = json[i];
			
			if (data == "" || data.ico == undefined) {
				data.ico = 'default_station.png';
			}
			data.icon = 'upfile/' + data.ico;
			json2.push(data);
			messageJson.push(data);
		}
		
		$("#stationDelegation ul").mapview(json2, {
			// "shijian": function(val) {
			// 	return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			// }
		}, append)
		
		$("#stationDelegation ul li").click(function() {

			//处理第一次进入界面数据刷新问题
			setTimeout("$('#delegationchild nav>a').eq(0).click()",3);
			
			var key = $(this).find("[rssid]").attr("rssid");
			mystationId = $(this).find("[rssid]").attr("myid");
			
			console.log("___________ key =" + key)
			console.log("___________ 赋值 mystationId =" + mystationId)
			// console.log("___________ myid1 =" + myid1)
			console.log("______ 赋值missionid="+mystationId)
			var currentIndex = $(this).index();
			delegationId = key ; 
			
			$("#delegationchild").find("header>h1").text(json2[currentIndex].name );
			//console.log("___________ currentIndex =" + currentIndex)
			//noticebulletinClick(key, currentIndex, json2, messageJson, append);
			
			
			
			
			return;

		    
		})
	}).getJson();
})
$("#noticebulletin .hisback").click(function() {
	console.log("_________ 1111 ")
	// exit();
});


$("#noticebulletin nav>a").off("click").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
	var ind = $(this).index() + 1;
	
	console.log(" ________ ind="+ind)
	var messageJson = [];
	if (arry.indexOf("noticebulletin") == "-1") {
		$("#noticebulletin ul li").eq(0).siblings().remove();		
		arry.push("noticebulletin")
	} else {
		$("#noticebulletin ul li").remove();
		
	}
	
	faqsajax = RssApi.Table.List("stationcontent").setLoading(true).condition(new RssDict().keyvalue({
		"classify": ind,
		"state": "2"	
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
		
		

		
		var json2 = [];
		for (var i = 0; i < json.length; i++) {
			var data = json[i];
			
			
			// if ( state == 1) {
			// 	data.ico = 'img/limg/unreadico.png';
			// } else if ( state == 2 ) {
				// data.ico = 'img/limg/nbico.png';
			// }
			if (data == "" || data.ico == undefined) {
				data.ico = 'default_station.png';
			}
			data.icon = 'upfile/' + data.ico;
			json2.push(data);
			messageJson.push(data);
		}
		
		$("#noticebulletin ul").mapview(json2, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#noticebulletin ul li").click(function() {

			var key = $(this).find("[rssid]").attr("rssid");
			console.log("___________ noticebulletin click key=" + key)
			noticebulletinClick(key, json2, append);
			return;

			//$("#fz1").hide();
			//var key = $(this).find("[rssid]").attr("rssid");
			//location.href = "#seenotice"
			//$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() +"详情");
		    
		})
	}).getJson();
})
//通知消息点击以后icon变为已读
function noticebulletinClick(key, json2, append) {
	// $("#fz1").hide();

	location.href = "#seenotice"
	$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() + "详情");
	RssApi.Table.List("stationcontent").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson( function(json) {
		//console.log('currentIndex is:', currentIndex);				
		// if (currentIndex < messageJson.length) {
		// 	var data = messageJson[currentIndex];
		// 	data["readuserid"] = RssUser.Data.myid;
		// 	messageJson[currentIndex] = data;
		// }
		
		if (json.ico == "" || json.ico == undefined) {
			$(".slt").hide()
		} else {
			$(".slt").show()
		}
		
		if (json[0].origin == "" || json[0].origin == undefined) {
			json[0].origin ="匿名"
		}
		
		$("#seenotice article").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString(
					"yyyy-MM-dd");
			}
		})
		//console.log('matter is:', json[0].matter);
		$("#seenotice .divp2").html(json[0].matter);
		

				
	})
}






$("#liaisonstation").load(function() {

    console.log(" _________ liaisonstationEntry =" + liaisonstationEntry)
	if ( liaisonstationEntry == 0 ) {
		location.href = "#liaisonstation";
		console.log(" _________ liaisonstationnav =" + liaisonstationnav)
		if ( liaisonstationnav == "0") {
			
			setTimeout("$('#liaisonstation nav>a').eq(0).click()",3);
		}
		else if ( liaisonstationnav == "1" ){
			
			setTimeout("$('#liaisonstation nav>a').eq(1).click()",3);
		}
		else if ( liaisonstationnav == "2" ){
			
			setTimeout("$('#liaisonstation nav>a').eq(2).click()",3);
		}
		else {
			
			setTimeout("$('#liaisonstation nav>a').eq(3).click()",3);
		}
		
		liaisonstationEntry = 1 ;
	}
	
	
	
	$("#liaisonstation nav>a").off("click").click(function() {
		
		var ind = $(this).index() + 1;
		liaisonstationnav = $(this).index() + "";
		console.log(" ________ liaisonstationnav="+liaisonstationnav)
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("liaisonstation") == "-1") {
			$("#liaisonstation ul li").eq(0).siblings().remove();
			arry.push("liaisonstation")
		} else {
			$("#liaisonstation ul li").remove();
		}
		
		$("#liaisonstation .hisback").click(function() {
			liaisonstationEntry = 0 ;
			liaisonstationnav = "0";
			
		});	
		
		if ( $(this).index() == "0" ) {
			faqsajax = RssApi.Table.List("contactstation_sub").setLoading(true).keyvalue({ "pagesize": 100 }).condition(new RssDict().keyvalue({
				
			}).getDict()).setFlushUI(function(json, append) {
				
				console.log(" _________ click 000  liaisonstationnav =" + liaisonstationnav)
				if (json.length < 100 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				
				
				
				
				var json2 = [];
				for (var i = 0; i < json.length; i++) {
					var data = json[i];
					if (data == "" || data.ico == undefined) {
						data.ico = 'station.png';
					}					
					//data.icon = 'upfile/' + data.ico;
					json2.push(data);					
					// messageJson.push(data);
				}
				
				$("#liaisonstation ul").mapview(json2, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
					}
					
				}, append)
				
				
				$("#liaisonstation ul li").click(function() {
					liaisonstationEntry = 0 ;
				
					var key = $(this).find("[rssid]").attr("rssid");
					var currentIndex = $(this).index();
					var data = json2[currentIndex];
					
					
					if ("undefined".indexOf( data.address ) != -1 ) {
						data.address = "地址不详";
					}
					if ("undefined".indexOf( data.matter ) != -1 ) {
						data.matter = "暂无简介";
					}
					
					
					liaisonstationClick(key, data, append);
					return;
				
					
				})
				
			}).getJson();
		}
		else {
			var demonstration = ind ;
			faqsajax = RssApi.Table.List("contactstation_sub").setLoading(true).keyvalue({ "pagesize": 100 }).condition({
				"demonstration": ind ,				
			}).setFlushUI(function(json, append) {
				if (json.length < 100 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				
				
				
				
				var json2 = [];
				for (var i = 0; i < json.length; i++) {
					var data = json[i];
					
					if (data == "" || data.ico == undefined) {
						data.ico = 'station.png';
					}
					
					data.icon = 'upfile/' + data.ico;
					json2.push(data);
					// messageJson.push(data);
				}
				
				$("#liaisonstation ul").mapview(json2, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
					}
				}, append)
				
				$("#liaisonstation ul li").click(function() {
					liaisonstationEntry = 0 ;
				
					var key = $(this).find("[rssid]").attr("rssid");
					var currentIndex = $(this).index();
					var data = json2[currentIndex];
					console.log("____________ liaisonstation key="+key)
					console.log("____________ liaisonstation data.stationid="+data.stationid)
					
					if ("undefined".indexOf( data.address ) != -1 ) {
						data.address = "地址不详";
					}
					if ("undefined".indexOf( data.matter ) != -1 ) {
						data.matter = "暂无简介";
					}
					
					
					liaisonstationClick(key, data, append);
					return;
				
					
				})
								
			}).getJson();
		}
	})
	// if (liaisonstationnav == "1") {
	// 	$("#liaisonstationnav nav>a").eq(0).click();
	// 	liaisonstationnav = "0";
	// }
})

//联络站点击
function liaisonstationClick(key, json, append) {
	//这里以后需要精确到具体分站的代表
	//divisionStationid = json.stationid ;
	mystationId = json.myid;
	// $("#fz1").hide();
	$("#liaisonstationdetail").find("header>h1").text( json.title );
	

	location.href = "#liaisonstationdetail";
	$("#liaisonstationdetail article").mapview(json, {
		"shijian": function(val) {
			return new Date(parseInt(val) * 1000).toString(
				"yyyy-MM-dd");
		}
	})
	// $("#liaisonstationdetail").find("header>h1").text($("#noticebulletin").find(".sel").text() + "详情");
	// RssApi.Table.List("stationcontent").setLoading(true).condition(new RssDict()
	// 	.keyvalue({
	// 		"id": key
	// 	}).getDict()).getJson( function(json) {
		
	// 	if (json.ico == "" || json.ico == undefined) {
	// 		$(".slt").hide()
	// 	} else {
	// 		$(".slt").show()
	// 	}
		
	// 	$("#liaisonstationdetail article").mapview(json, {
	// 		"shijian": function(val) {
	// 			return new Date(parseInt(val) * 1000).toString(
	// 				"yyyy-MM-dd");
	// 		}
	// 	})
	// 	//console.log('matter is:', json[0].matter);
	// 	$("#liaisonstationdetail .divp2").html(json[0].matter);
		

				
	// })
}


/*代表详情界面驻站代表*/
var actionType = 0 ; //通知公告：0   履职活动： 1  工作动态：2  主站代表：3
$("#representativeActivity").load(function() {
	var json2 = [];
	var append = true;
	$('.nodata').hide();
	$('.nosolutions').show();
	$("#representativeActivity ul").mapview(json2, {
	}, append)
	
})


$("#residentRepresentative").load(function() {
	console.log("______ residentRepresentative load mystationId="+mystationId)
	
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "50").condition({
	// faqsajax = RssApi.View.List("userrole").setLoading(true).keyvalue("pagesize", "50").condition({
				// "state": 2,
			    "mission": mystationId,	
			}).setFlushUI(function(json, append) {
				if (json.length < 50 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				
				
				var clanEnum = ["中国共产党", "民主党", "无党派", "共青团", "群众"];	
				var json2 = [];	
				var json3 = [];				
				for (var i = 0; i < json.length; i++) {
					var data = json[i];
					json3[i] = json[i];
					
					if ("undefined".indexOf( data.daibiaoDWjob ) != -1 || " 暂无".indexOf( data.daibiaoDWjob ) != -1|| " 无".indexOf( data.daibiaoDWjob ) != -1) {
						data.daibiaoDWjob = "职务: 暂无";
						json3[i].daibiaoDWjob = "暂无";
					}
					data.clan = clanEnum [ data.clan];
					data.nationid = globalNationid [ data.nationid ];
					
					
					if (data == "" || data.ico == undefined) {
						data.ico = 'station.png';
						json3[i].ico = 'station.png';
					}
					data.icon = 'upfile/' + data.ico;
					//特殊处理
					
					data.title = data.realname;
					var splits = data.circleslist.split(",");
					data.shijian = "";
					var flag = 0 ;
					splits = splits.sort();
					for ( var j = 0 ; j < splits.length ; j ++ )
					{
						if ( parseInt( splits[j]) >= 0 && parseInt( splits[j] ) <= 9   ) {
							flag = 1 ;
							data.circleslist = globalLevel[ parseInt( splits[j] )  ];
						}
					}
					if ( flag == 0 ) {
						data.circleslist = "汝州市人大代表";
					}
					
					
					json2.push(data);
				}
				
				$("#residentRepresentative ul").mapview(json2, {
					// "shijian": function(val) {
					// 	return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
					// }
				}, append)
				
				$("#residentRepresentative ul li").click(function() {
				
					var key = $(this).find("[rssid]").attr("rssid");
					var currentIndex = $(this).index();
									
					$("#representative").find("header>h1").text(json2[currentIndex].realname );
					console.log(" _________ daibiaoDWjob="+json3[currentIndex].daibiaoDWjob)
					if ("暂无".indexOf( json3[currentIndex].daibiaoDWjob ) != -1 ) {
						json3[currentIndex].daibiaoDWjob = " 暂无";
						
					}
					representativeClick(key, json3[currentIndex], append);
				    $("#residentRepresentative ul li").remove();
				})
								
			}).getJson();	
			
			$("#residentRepresentative .hisback").click(function() {
				$("#residentRepresentative ul li").remove();
			});	
	
})

var delegateSearch = 0 ;
$("#delegateSearch1").load(function() {
	if ( delegateSearch == 1 ) {
		return ;
	}
	delegateSearch = 1 ;
	

	// faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10").condition(
	// 	new RssDict().keyvalue({
	// 		"isdelegate": 1 ,
	// 	}).getDict()).setFlushUI(function(json, append) {

	RssApi.View.List("userrole").setLoading(true).condition(new RssDict()
		.keyvalue({
			"state": 2
		}).getDict()).getJson( function(json) {				
				
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
				
				
				
				var clanEnum = ["中国共产党", "民主党", "无党派", "共青团", "群众"];
				var json2 = [];
				
				for (var i = 0; i < json.length; i++) {
					var data = json[i];
					if ("undefined".indexOf( data.daibiaoDWjob ) != -1 || " 暂无".indexOf( data.daibiaoDWjob ) != -1|| " 无".indexOf( data.daibiaoDWjob ) != -1) {
						data.daibiaoDWjob = "职务: 暂无"
					}
					data.clan = clanEnum [ data.clan];
					data.nationid = globalNationid [ data.nationid ];
					
					var splits = data.circleslist.split(",");
					
					splits = splits.sort();
					var flag = 0 ;
					for ( var j = 0 ; j < splits.length ; j ++ )
					{
						if ( parseInt( splits[j]) >= 0 && parseInt( splits[j] ) <= 9   ) {
							flag = 1 ;
							data.circleslist = globalLevel[ parseInt( splits[j] )  ];
						}
					}
					if ( flag == 0 ) {
						data.circleslist = "汝州市人大代表";
					}
					
					
					
					
					
					json2.push(data);
					
				}
				
				$("#delegateSearch ul").mapview(json2, {
					
					
				}, append)
				
				$("#delegateSearch ul li").click(function() {
				
					var mission = $(this).find("[mission]").attr("mission");
					var currentIndex = $(this).index();
					var myid = $(this).find("[myid]").attr("myid");
					// console.log('rssid is:', key);
					console.log('currentIndex is:', currentIndex);
					console.log('myid is:', myid);
					
					RssApi.Table.List("user").condition(new RssDict().keyvalue({
						"myid": myid
					}).getDict()).getJson(function(json3) {		
						if ("undefined".indexOf( json3[0].avatar ) != -1 ) {
							json3[0].avatar = global_ip + "upfile/avatar.png";
						}
						
						$("#representative").find("header>h1").text(json3[0].realname );
						// representativeClick(myid, json3[0], append);
						showdelegateInformation( json3[0]);
						// $("#delegateSearch ul li").remove();	
					}).getJson();	
					
				    
				})
								
			}).getJson();	
			
			$("#delegateSearch .hisback").click(function() {
				$("#delegateSearch ul li").remove();
				delegateSearch = 0 ;
			});	
			
			$("#delegateSearch .search button").off("click").click(function() {
				console.log("_____________ search button")
				var key = $("#delegateSearch .search input").val();
				console.log("_____________ search button key="+key)
				var likeall = {};
				if (key == undefined || key == "") {
			
				} else {
					likeall = {
						'realname': "{likeall~" + key + "}"
					};
				}
				if (arry.indexOf("delegateSearch") == "-1") {
					$("#delegateSearch ul li").eq(0).siblings().remove();
					arry.push("delegateSearch")
				} else {
					$("#delegateSearch ul li").remove();
				}
				$("#delegateSearch ul li").remove();
				
				RssApi.Details("sugsessnum1").condition(new RssDict().keyvalue({
					"draft": "2",
					"sessionid": 30
				}).getDict()).getJson(function(data) {
			console.log("_____________ data="+data[0])
				faqsajax = RssApi.Table.List("user").setLoading(true).condition(new RssDict()
					.keyvalue({
						"isdelegate": 1 ,
					}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
						console.log("_____________ json="+json[0])
						$("#delegateSearch ul").mapview(json, {}, append)
				})
				}).getJson();
				
				
				
				
				
			})		
	
})

//历届会议议案建议查询

function filldatabykey( likeall ) {
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10").condition(
	new RssDict().keyvalue({
		// "isdelegate": 1 ,
	}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
	
		
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
		
		
		
	var clanEnum = ["中国共产党", "民主党", "无党派", "共青团", "群众"];
	var json2 = [];
	
	for (var i = 0; i < json.length; i++) {
		var data = json[i];
		if ("undefined".indexOf( data.daibiaoDWjob ) != -1 || " 暂无".indexOf( data.daibiaoDWjob ) != -1|| " 无".indexOf( data.daibiaoDWjob ) != -1) {
			data.daibiaoDWjob = "职务: 暂无"
		}
		data.clan = clanEnum [ data.clan];
		data.nationid = globalNationid [ data.nationid ];
		
		var splits = data.circleslist.split(",");
		
		splits = splits.sort();
		var flag = 0 ;
		for ( var j = 0 ; j < splits.length ; j ++ )
		{
			if ( parseInt( splits[j]) >= 0 && parseInt( splits[j] ) <= 9   ) {
				flag = 1 ;
				data.circleslist = globalLevel[ parseInt( splits[j] )  ];
			}
		}
	if ( flag == 0 ) {
			data.circleslist = "汝州市人大代表";
		}
		json2.push(data);
		
	}
	
	$("#delegateSearch ul").mapview(json2, {
		
		
	}, append)
		
	$("#delegateSearch ul li").click(function() {
		var mission = $(this).find("[mission]").attr("mission");
		var currentIndex = $(this).index();
		var myid = $(this).find("[myid]").attr("myid");
		// console.log('rssid is:', key);
		console.log('currentIndex is:', currentIndex);
		console.log('myid is:', myid);
		
		RssApi.Table.List("user").condition(new RssDict().keyvalue({
			"myid": myid
		}).getDict()).getJson(function(json3) {		
			if ("undefined".indexOf( json3[0].avatar ) != -1 ) {
				json3[0].avatar = global_ip + "upfile/avatar.png";
			}
			// console.log('realname is:', json3[0].realname);
			$("#representative").find("header>h1").text(json3[0].realname );
			// representativeClick(myid, json3[0], append);
			showdelegateInformation( json3[0]);
			// $("#delegateSearch ul li").remove();	
		}).getJson();	
	})
						
	}).getJson();
}

var searchState = 0 ;
$("#delegateSearch").load(function() {
	
		
	if ( searchState == 0 ) {
		$("#search_delete_btn").hide();
	}
	else {
		$("#search_delete_btn").show();
	}
	
	$("#delegateSearch ul li").eq(0).siblings().remove();
	
	if ( delegateSearch == 1 ) {
		$("#delegateSearch ul li").remove();
		// return ;
	}
	delegateSearch = 1 ;
	filldatabykey("");
	
	// faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10").condition(
	// 	new RssDict().keyvalue({
	// 		"isdelegate": 1 ,
	// 	}).getDict()).setFlushUI(function(json, append) {
			
				
	// 			if (json.length < 10 ) {
	// 				$('.nodata').hide();
	// 			} else {
	// 				$('.nodata').show();
	// 			}
				
	// 			if (json.length > 0 ) {
	// 				$('.nosolutions').hide();
	// 			} else {
	// 				$('.nosolutions').show();
	// 			}
				
				
				
	// 			var clanEnum = ["中国共产党", "民主党", "无党派", "共青团", "群众"];
	// 			var json2 = [];
				
	// 			for (var i = 0; i < json.length; i++) {
	// 				var data = json[i];
	// 				if ("undefined".indexOf( data.daibiaoDWjob ) != -1 || " 暂无".indexOf( data.daibiaoDWjob ) != -1|| " 无".indexOf( data.daibiaoDWjob ) != -1) {
	// 					data.daibiaoDWjob = "职务: 暂无"
	// 				}
	// 				data.clan = clanEnum [ data.clan];
	// 				data.nationid = globalNationid [ data.nationid ];
					
	// 				var splits = data.circleslist.split(",");
					
	// 				splits = splits.sort();
	// 				var flag = 0 ;
	// 				for ( var j = 0 ; j < splits.length ; j ++ )
	// 				{
	// 					if ( parseInt( splits[j]) >= 0 && parseInt( splits[j] ) <= 9   ) {
	// 						flag = 1 ;
	// 						data.circleslist = globalLevel[ parseInt( splits[j] )  ];
	// 					}
	// 				}
	// 				if ( flag == 0 ) {
	// 					data.circleslist = "汝州市人大代表";
	// 				}
					
					
					
					
					
	// 				json2.push(data);
					
	// 			}
				
	// 			$("#delegateSearch ul").mapview(json2, {
					
					
	// 			}, append)
				
	// 			$("#delegateSearch ul li").click(function() {
				
	// 				var mission = $(this).find("[mission]").attr("mission");
	// 				var currentIndex = $(this).index();
	// 				var myid = $(this).find("[myid]").attr("myid");
	// 				// console.log('rssid is:', key);
	// 				console.log('currentIndex is:', currentIndex);
	// 				console.log('myid is:', myid);
					
	// 				RssApi.Table.List("user").condition(new RssDict().keyvalue({
	// 					"myid": myid
	// 				}).getDict()).getJson(function(json3) {		
	// 					if ("undefined".indexOf( json3[0].avatar ) != -1 ) {
	// 						json3[0].avatar = global_ip + "upfile/avatar.png";
	// 					}
						
	// 					$("#representative").find("header>h1").text(json3[0].realname );
	// 					// representativeClick(myid, json3[0], append);
	// 					showdelegateInformation( json3[0]);
	// 					// $("#delegateSearch ul li").remove();	
	// 				}).getJson();	
					
				    
	// 			})
								
	// 		}).getJson();	
			
			$("#delegateSearch .hisback").click(function() {
				
				$("#delegateSearch ul li").remove();
				$("#delegateSearch .search input").val("");
				delegateSearch = 0 ;
			});	
	
	
	function inputlistener () {
		console.log("_____________ input")
	}
	
	$("#delegateSearch .search button").off("click").click(function() {
		if ( searchState == 0 ) {
			searchState = 1 ;
			$("#search_delete_btn").show();
			$("#search_btn").hide();
		}else {
			searchState = 0 ;
			$("#search_delete_btn").hide();
			$("#search_btn").show();
			$("#delegateSearch .search input").val("");
		}
		
		
		var key = $("#delegateSearch .search input").val();
		var likeall = {};
		if (key == undefined || key == "") {

		} else {
			likeall = {
				'realname': "{likeall~" + key + "}"
			};
		}
		if (arry.indexOf("delegateSearch") == "-1") {
			$("#delegateSearch ul li").eq(0).siblings().remove();
			arry.push("delegateSearch")
		} else {
			$("#delegateSearch ul li").remove();
		}
		RssApi.Details("sugsessnum1").condition(new RssDict().keyvalue({
			"draft": "2",
			"sessionid": 30
		}).getDict()).getJson(function(data) {
			
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"draft": "2",
			// 		"sessionid": 30
			// 	}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
					
			// faqsajax = RssApi.Table.List("user").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"isdelegate": 1 ,
			// 	}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {		
			// 		$("#delegateSearch ul li").remove();
			// 		console.log("_____________ json.length="+json.length)
			// 		$("#delegateSearch ul").mapview(json, {}, append)
					
			// 	if (json.length == "0") {
			// 		// alert("未找到查询目标")
			// 	}
			// }).getJson();
			
			$("#delegateSearch ul li").remove();
			filldatabykey(likeall);
			
			
		})
		
		
		
	})


	//    })
})


/*代表详情界面通知公告*/
$("#representativeWorkDynamic").load(function() {
	
	console.log("_____________ divisionStationid="+divisionStationid)
	faqsajax = RssApi.Table.List("stationcontent").setLoading(true).condition(new RssDict().keyvalue({
		"stationid": divisionStationid,
		"state": "2"	
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
		
		
	
		
		var json2 = [];
		for (var i = 0; i < json.length; i++) {
			var data = json[i];
	
			if (data == "" || data.ico == undefined) {
				data.ico = 'default_station.png';
			}
			data.icon = 'upfile/' + data.ico;
			json2.push(data);
			
		}
		
		$("#representativeWorkDynamic ul").mapview(json2, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#representativeWorkDynamic ul li").click(function() {
	
			var key = $(this).find("[rssid]").attr("rssid");
			noticebulletinClick(key, json2, append);
			$("#representativeWorkDynamic ul li").remove();
			return;
			})
		$("#representativeWorkDynamic .hisback").click(function() {
			$("#representativeWorkDynamic ul li").remove();
		});		
			
	}).getJson();
	
})

$("#representativeNoticebulletin").load(function() {
	
	faqsajax = RssApi.Table.List("stationcontent").setLoading(true).condition(new RssDict().keyvalue({
		"classify": 3,
		"state": "2"	
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
		
		
	
		
		var json2 = [];
		for (var i = 0; i < json.length; i++) {
			var data = json[i];
	
			if (data == "" || data.ico == undefined) {
				data.ico = 'default_station.png';
			}
			data.icon = 'upfile/' + data.ico;
			json2.push(data);
			
		}
		
		$("#representativeNoticebulletin ul").mapview(json2, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#representativeNoticebulletin ul li").click(function() {
	
			var key = $(this).find("[rssid]").attr("rssid");
			noticebulletinClick(key, json2, append);
			$("#representativeNoticebulletin ul li").remove();
			return;
			})
		$("#representativeNoticebulletin .hisback").click(function() {
			$("#representativeNoticebulletin ul li").remove();
		});		
			
	}).getJson();
	
})




function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

function unreadmsg() {}



//点击加载更多
$('.nodata').on("click", function() {
	var t = $(this);
	faqsajax.nextpage().lastpage(function() {
		t.hide();
	}).getJson();
});


function plusReady() {
	// 监听“返回”按钮事件
	plus.key.addEventListener("backbutton", function() {
		console.log("__________________ plusReady 111")	
		var str = window.location.href;
		var path = str.substring(str.lastIndexOf("#") + 1);
		if (path != "notice" && path != "suggest" && path != "supervRD" && path != "statistics" && path !=
			"my") {
			window.history.back(-1);
		} else {
			var r = confirm("您确定要退出？")
			if (r == true) {
				var main = plus.android.runtimeMainActivity();
				main.moveTaskToBack(false);
			}
		}
	});
	
	
	document.addEventListener('plusscrollbottom', onScrollToBottom, false);
	function onScrollToBottom(){
		console.log("________  plusscrollbottom ")
		alert("plusscrollbottom")
		
	}
	
	document.addEventListener("plusscrollbottom", function(){
		//页面滚动到底部
		alert("plusscrollbottom1111")
	}, false);
	
}
if (window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}

