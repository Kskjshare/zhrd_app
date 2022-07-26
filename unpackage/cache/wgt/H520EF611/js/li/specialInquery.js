
$("#supevaluation").load(function() {
	$("#supevaluation nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supevaluation") == "-1") {
			$("#supevaluation ul li").eq(0).siblings().remove();
			arry.push("supevaluation")
		} else {
			$("#supevaluation ul li").remove();
		}
		if ($(this).index() == "0") {
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(
				new RssDict().keyvalue({
					"myid": RssUser.Data.myid,
					"typeid": "5",
					// "previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				//在列表增加办理状态和提出者
				var json2 = [];
				var uid = RssUser.Data.myid ;
				$.each(json, function(k, v) {
					var data = v ;
					var state = data.state ;
					var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
					data.initiator = initiator ;
					if ( uid == v.myid ) {
						json2.push( data );
						if ( v.taskDone == "1") {
							$("#supevaluation .terminate").hide();
							$("#supevaluation .ans").hide();
						}
						else{
						}
						
						
					}
				})
				if (json2.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json2.length == 0 ) {
					$('.nosolutions').show();
				} else {
					$('.nosolutions').hide();
				}
				
				$("#supevaluation ul").mapview(json2, {}, append)
				
				
				//查看
				$("#supevaluation .see").off().click(function() {
					var key = $(this).parent().attr("id");
					//var obj = "supevaluation";
					//viewSupervisionDetail ( "seesupevaluation" , key ) ;
					$("#viewdetaiLayout_id").val(key);
					$("#viewdetaiLayout_typeid").val(5);
					$("#viewdetaiLayout_tablename").val("supervision_special_inquery");
					changeReadState ( key  , "supervision_special_inquery") ;
				})
				
				$("#supevaluation .terminate").off().click(function() {
					var key = $(this).parent().attr("id");
					$("#terminateLayout_id").val(key);
					$("#terminateLayout_typeid").val(5);
					$("#terminateLayout_tablename").val("supervision_special_inquery");
					changeReadState ( key  , "supervision_special_inquery") ;
				})

				//审阅
				$("#supevaluation .ans").off().click(function() {
					
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					$("#terminateLayout_tablename").val("supervision_special_inquery");
					$("#terminateLayout_id").val(key);
					changeReadState ( key  , "supervision_special_inquery") ;
					$("#supevaluation .normalbutton").off().click(function() {})
				})
			}).getJson();
		} else {
			location.href = "#supevaluation";
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(
				new RssDict().keyvalue({
					//"state": "2",
					"typeid": "5",
					// "previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				//在列表增加办理状态和提出者
				var json2 = [];
				$.each(json, function(k, v) {
					var data = v ;
					var state = data.state ;
					var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
					data.initiator = initiator ;
					if ( isparticipant( v ) ) {
						json2.push( data );
					}
					
				})
				
				if (json2.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json2.length == 0 ) {
					$('.nosolutions').show();
				} else {
					$('.nosolutions').hide();
				}
				
				 $("#supevaluation ul").mapview(json2, {}, append)
				//屏蔽预审按钮
				$("#supevaluation .ans").hide();  
				$("#supevaluation .terminate").hide();  

				//查看
				$("#supevaluation .see").off().click(function() {
					var key = $(this).parent().attr("id");
					$("#viewdetaiLayout_id").val(key);
					$("#viewdetaiLayout_typeid").val(5);
					$("#viewdetaiLayout_tablename").val("supervision_special_inquery");
					
					// var obj = "seesupevaluation";
					// viewSupervisionDetail ( obj , key ) ;
				})
				$("#supevaluation .ans").off().click(function() {
					$("#anssupervisionYS .normalbutton").off().click(function() {
						alert("已审阅")
						location.href = "#supevaluation";
					})
				})
			}).getJson();
		}
	})
	if (supevaluationnav == "1") {
		$("#supevaluation nav>a").eq(0).click();
		supevaluationnav = "0";
	}
})


function prevAuditfilterData ( json , tab , append  ) {
	var json2 = [];
	var uid = RssUser.Data.myid ;
	$.each(json, function(k, v) {
		var data = v ;
		var state = parseInt(v.state ) ;
		// var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
		var initiator = v.initiator ;
		data.initiator = initiator ;
		var previewleadername = data.previewleadername;
		
		if ( !isEmpty( v.previewleadername ) ) {
			if ( v.previewleadername .indexOf( uid ) != -1 ) {
				if ( tab == 1 ) { //已经审过
				    if ( state > 1 ) {
						json2.push( data );
						fillspecialListdata ( v , "supevaluationYS" );
					}
				}
				else {
					if ( state == 1 ) {
						json2.push( data );
						fillspecialListdata ( v , "supevaluationYS" );
					}
				}
			}
		}	
	})
	if (json2.length < 10 ) {
		$('.nodata').hide();
	} else {
		$('.nodata').show();
	}

	if (json2.length == 0 ) {
		$('.nosolutions').show();
	} else {
		$('.nosolutions').hide();
	}
	
	//$("#supevaluationYS ul").mapview(json2, {}, append);	
}


//预审专题询问
$("#supevaluationYS").load(function() {
	console.log(" ___________________ supevaluationYS load" )
	$("#supevaluationYS nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supevaluationYS") == "-1") {
			$("#supevaluationYS ul li").eq(0).siblings().remove();
			arry.push("supevaluationYS")
		} else {
			$("#supevaluationYS ul li").remove();
		}
		if ($(this).index() == "0") {
			console.log(" ___________________ supevaluationYS 000" )
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
				.keyvalue({
					"state": "1",
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				prevAuditfilterData ( json , 0 , append ) ;
				
				
				//查看
				$("#supevaluationYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					var obj = "seesupevaluationYS";
					// var obj = "seesupervisionYS";
					console.log(" ___________________ see key=",key)
					viewSupervisionDetail ( obj , key ) ;
					// changeReadState ( key  , "supervision_special_inquery") ;
				})
				
				//审阅
				$("#supevaluationYS .ans").off().click(function() {
					
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					console.log(" ___________________ ans key=",key)
					changeReadState ( key  , "supervision_special_inquery") ;
					// $("#anssupevaluationYS .normalbutton").off().click(function() {})
				})
				//查看
			}).getJson();
		}else{
			
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
				.keyvalue({
					"typeid": 5,
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				
				prevAuditfilterData ( json , 1, append ) ;
				//查看
				$("#supevaluationYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					var obj = "seesupevaluationYS";
					viewSupervisionDetail ( obj , key ) ;
					changeReadState ( key  , "supervision_special_inquery") ;
				})
				
			}).getJson();
		}
	})
	if (supevaluationYSnav == "1") {
		$("#supevaluationYS nav>a").eq(0).click();
		supevaluationYSnav = "0";
	}
})



function viewDetail ( key ) {
	console.log(" ___________________ viewDetail key=",key)
	updateReadState ( "supervision_special_inquery" , key , "view" ) ;
}
function fillspecialListdata( v , Obj ) {
	var mstate = parseInt( v.state );
	var taskDone = parseInt( v.taskDone );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getprogressState( v ) ;
	var initiator = "提出者: " + v.initiator ;
	
	
	var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + state  + '</p>'+
		'<div class="lifoot" id=' + v.id +
		' id=' + v.id +
		'>'
	var uid = RssUser.Data.myid ;
	var terminate_btn = "";
	var preview_btn = "";
console.log(" ___________________ viewDetail taskDone=",taskDone)
console.log(" ___________________ viewDetail mstate=",mstate)
	if ( Obj == "supevaluationYS") {
		if ( taskDone == 0 && v.myid == uid ) {
			terminate_btn = '<a href="#terminateLayout" class="ans" onclick="terminate_entry('+v.id+');"><span>流程完结</span></a>'
		}
		if ( mstate == 1 ){
			preview_btn = '<a href="#prevapproveLayout" class="ans" onclick="inquiry_entry('+v.id+');"><span>审阅</span></a>'
		}
		// if ( mstate > 1 ){
			
		// 	liStr += '<a href="#seesupevaluationYS" class="see" onclick="viewDetail('+v.id+');"><span>查看详情</span></a><a href="#terminateLayout" class="ans" onclick="terminate_entry('+v.id+');"><span>已完结</span></a></div></li>';
			
		// }
		// else {
		// 	liStr += '<a href="#seesupevaluationYS" class="see" onclick="viewDetail('+v.id+');"><span>查看详情</span></a><a href="#prevapproveLayout" class="ans" onclick="inquiry_entry('+v.id+');"><span>审阅</span></a></div></li>';
		// }
		
		liStr += '<a href="#seesupevaluationYS" class="see" onclick="viewDetail('+v.id+');"><span>查看详情</span></a>' + 
		terminate_btn + 
		preview_btn +
		'</div></li>';
	}
	else if ( Obj == "supevaluation") {
		if ( taskDone == 0 && v.myid == uid ) {
			terminate_btn = '<a href="#terminateLayout" class="ans" onclick="terminate_entry('+v.id+');"><span>已完结</span></a>'
		}		
		
		liStr += '<a href="#seesupevaluation" class="see" onclick="viewDetail('+v.id+');"><span>查看详情</span></a>' + 
		terminate_btn + 
		preview_btn +
		'</div></li>';
	}
	
	$(append_obj).append(liStr);
}


//已完成的专题询问
$("#endsupevaluation").load(function() {
	if (arry.indexOf("endsupevaluation") == "-1") {
		$("#endsupevaluation ul li").eq(0).siblings().remove();
		arry.push("endsupevaluation")
	} else {
		$("#endsupevaluation ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
		.keyvalue({
			"taskDone": "1"
		}).getDict()).setFlushUI(function(json, append) {
			
		var json2 = [];
		$.each(json, function(k, v) {
			var data = v ;
			var state = data.state ;
			var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
			data.initiator = initiator ;
			if ( ismysolution_2( v ) ) {
				json2.push( data );
			}
			
		})	
			
		if (json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json2.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#endsupevaluation ul").mapview(json2, {}, append);

		$("#endsupevaluation .see").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#viewdetaiLayout_id").val(key);
			$("#viewdetaiLayout_typeid").val(5);
			$("#viewdetaiLayout_tablename").val("supervision_special_inquery");
		})
		
		$("#endsupevaluation .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#ViewevaluationLayout_handleID").val(key);
			$("#ViewevaluationLayout_typeid").val(5);
			$("#ViewevaluationLayout_tablename").val("supervision_special_inquery");
			
		})

	}).getJson();
})