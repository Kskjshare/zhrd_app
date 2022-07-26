
//撤职案的审议和决定
$("#supdismissal").load(function() {
	if (arry.indexOf("supdismissal") == "-1") {
		$("#supdismissal ul li").eq(0).siblings().remove();
		arry.push("supdismissal")
	} else {
		$("#supdismissal ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_dismissal").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
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
		
		
		
		var initiate_mode = 1 ;
		$("#supdismissal ul").mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			},
			"initiator": function(val) {
				initiate_mode = val ;
				var initiator="人民政府";
				if ( val == 2) {
					initiator="监察委";
				}
				else if ( val == 3) {
					initiator="法院";
				}
				else if ( val == 4) {
					initiator="检察院";
				}
				else if ( val == 5) {
					initiator="主任会议常委会成员联名";
				}
				return initiator;
			},
			"state": function(val) {
				var state = "待常委会会议审议"
				if ( val == 1 ) {
					if ( initiate_mode == 6 ) {
						state =  "待主任会会议审议";
					}
				}
				else if ( val == 2 ) {
					if ( initiate_mode == 6 ) {
						state =  "待主任会会议审议";
					}
					else {
						state = "待常委会会议审议";
					}
				}
				return state ;
			},
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			}		}, append);
		//查看
		$("#supdismissal .see").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#dismissalViewLayout").val(key);
			// faqsajax = RssApi.Table.List("supervision_dismissal").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key,
			// 		"myid": RssUser.Data.id
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seesupdismissal article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		var attachment = v.enclosure;
			// 		if ( "undefined".indexOf(attachment) != -1 ) {
			// 			attachment = "无";
			// 		}
			// 		$("#seesupdismissal article").append(
			// 			'<div class="divtop"><h1>' + v.title +
			// 			'</h1>' + 
			// 			'<h4 >提出者:' + v.organizer +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="no">常委会议届次：' + v
			// 			.committeemeetingnum +
			// 			'</div><div class="no">文件名：' + v.enclosurename +
			// 			'</div><div class="fj no">附件：<span>' + attachment +
			// 			'<span></div>')
			// 	})
			// })
		})
		
	}).getJson();
	
	
	
	
})

//承办撤职案的审议和决定
$("#supdismissalCB").load(function() {
	if (arry.indexOf("supdismissalCB") == "-1") {
		$("#supdismissalCB ul li").eq(0).siblings().remove();
		arry.push("supdismissalCB")
	} else {
		$("#supdismissalCB ul li").remove();
	}
	var key ="";
	// faqsajax = RssApi.T.List("supervision_dismissal").setLoading(true).condition(new RssDict()
	// 	.keyvalue({
	// 		"state": 1,
	// 		"myid": RssUser.Data.myid
	// 	}).keyvalue(key).getDict()).setFlushUI(function(json, append) {
		
	faqsajax = RssApi.Table.List("supervision_dismissal").setLoading(true).condition(new RssDict()
		.keyvalue({
			"myid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		
		if (json.length <10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#supdismissalCB ul").mapview(json, {}, append);
		//查看
		$("#supdismissalCB .see").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#dismissalViewLayout").val(key);
			// faqsajax = RssApi.Table.List("supervision_userrole_specialwork").setLoading(true)
			// 	.condition(
			// 		new RssDict().keyvalue({
			// 			"id": key
				// 	}).getDict()).getJson(function(json) {
				// 	console.log(json)
				// 	var shijian = ""
				// 	$("#seesupdismissalCB article").mapview(json, {
				// 		"shijian": function(val) {
				// 			return shijian = new Date(parseInt(val) * 1000)
				// 				.toString("yyyy-MM-dd hh:mm");
				// 		},
						
				// 	})
				// 	$.each(json, function(k, v) {
				// 		var attachment = v.enclosure;
				// 		if ( "undefined".indexOf(attachment) != -1 ) {
				// 			attachment = "无";
				// 		}
				// 		$("#seesupdismissalCB article").append(
				// 			'<div class="divtop"><h1>' + v.title +
				// 			'</h1>' +
				// 			'<h4 >提出者:' + v.organizer +
				// 			'</h4><h4 shijian>' + shijian +
				// 			'</h4></div><div class="no">常委会议届次：' + v
				// 			.committeemeetingnum +
				// 			'</div><div class="no">文件名：' + v.enclosurename +
				// 			'</div><div class="fj no">附件：<span>' + attachment +
				// 			'<span></div>')
				// 	})
				// })
		})
	}).getJson();
})

//已完成的撤职案的审议和决定
$("#endsupdismissal").load(function() {
	if (arry.indexOf("endsupdismissal") == "-1") {
		$("#endsupdismissal ul li").eq(0).siblings().remove();
		arry.push("endsupdismissal")
	} else {
		$("#endsupdismissal ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_dismissal").setLoading(true).condition(new RssDict().keyvalue({
		"taskDone": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
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
		$("#endsupdismissal ul").mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			},
			"initiator": function(val) {
				initiate_mode = val ;
				var initiator="人民政府";
				if ( val == 2) {
					initiator="监察委";
				}
				else if ( val == 3) {
					initiator="法院";
				}
				else if ( val == 4) {
					initiator="检察院";
				}
				else if ( val == 5) {
					initiator="主任会议常委会成员联名";
				}
				return initiator;
			},
			"state": function(val) {
				var state = "已完结"
				return state ;
			}
			
		}, append);
		//查看
		$("#endsupdismissal .see").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#dismissalViewLayout").val(key);
			
		})
	}).getJson();
})


var local_dismissal_enclosure = "";
$("#dismissalViewLayout").load(function() { 
	var key = $("#dismissal_key").val();
	key = glocalKey ;
	
	RssApi.Table.List("supervision_dismissal").setLoading(true).condition(
		new RssDict().keyvalue({
				"id": 134
	}).getDict()).getJson(function(json) {
		
		// glocal_enclosurepath = json[0].enclosure ;
		if ( "undefined".indexOf(json[0].avatar) != -1 ) {
			json[0].avatar = "avatar.png" ;
		}
		local_dismissal_enclosure = json[0].enclosure ;
		
		
		$("#dismissalViewLayout article").mapview(json, {
		   
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			},
			"directorshijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			},
			"committeeshijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			},
			"initiator": function(val) {
				initiate_mode = val ;
				var initiator="人民政府";
				if ( val == 2) {
					initiator="监察委";
				}
				else if ( val == 3) {
					initiator="法院";
				}
				else if ( val == 4) {
					initiator="检察院";
				}
				else if ( val == 5) {
					initiator="主任会议常委会成员联名";
				}
				return initiator;
			},
			"state": function(val) {
				var state = "待常委会会议审议"
				if ( val == 1 ) {
					if ( initiate_mode == 6 ) {
						state =  "待主任会会议审议";
					}
				}
				else if ( val == 2 ) {
					if ( initiate_mode == 6 ) {
						state =  "待主任会会议审议";
					}
					else {
						state = "待常委会会议审议";
					}
				}
				return state ;
			},
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			}		
			});
						
		
	
	})
})



$("#dismissalViewLayout").on('click','#attachment',function(){
			var path = local_dismissal_enclosure ;
			if ( isEmpty( path ) ) {
				return;
			}
			var dz = global_ip + "upfile/" + path ;
			// if ( dz.indexOf(".doc") != -1 ) {
			// 	var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
			// 	xurl += encodeURIComponent(dz);
			// 	window.open(xurl);
			// } else {
			// 	var pdfh5 = new Pdfh5('.pdfjs11', {
			// 		pdfurl: dz
			// 	});
			// }
			
			var appendObj = "#dismissalViewLayout" + " article  ul";
			
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
			
			
	
		});