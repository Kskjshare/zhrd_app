var gTablename = "supervision_inspection" ;
var enclosurePath = "";

var glocalKey = "";
var glocaltype = "";
var glocal_enclosurepath = "";
function publicviewAction( key , lswstate ) {
	console.log(" ____________ publicviewAction key=" + key);
	console.log(" ____________ publicviewAction lswstate=" + lswstate);
	glocalKey = key ;
	glocaltype = lswstate;
}


$("#publicViewLayout").on('click','#attachment',function(){
			console.log('6666');
			var path = glocal_enclosurepath ;
			
			if ( isEmpty( path ) ) {
				console.log("______________ paht is empty")
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
			
			var appendObj = "#publicViewLayout" + " article  ul";
			
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
			
			
	
		});


$("#publicViewLayout").load(function() { 
	var key = $("#specailWorkauditLayout_handleID").val();
	key = glocalKey ;
	
	RssApi.View.List("sort").setLoading(true).condition(
		new RssDict().keyvalue({
				"sortid": key
	}).getDict()).getJson(function(json) {
		
		glocal_enclosurepath = json[0].enclosure ;
		if ( "undefined".indexOf(json[0].avatar) != -1 ) {
			json[0].avatar = "avatar.png" ;
		}
		if ( isEmpty( json[0].buyBack )) {
			json[0].buyBack ="暂无";
		}
		
		console.log("___________ aaaexamination= ",json[0].examination)
		if ( json[0].examination == 3 ) { //置回
		console.log("___________ aaa ")
			$("#public_reason_centent").show();
			$("#public_reason_caption").show();
		}
		else {
			console.log("___________ bbb ")
			$("#public_reason_centent").hide();
			$("#public_reason_centent").hide();	
		}
		if ( "undefined".indexOf(json[0].enclosure ) != -1 ) {//如果附件名为空处理一下
			$("#public_enclosure").hide();
			if ( "undefined".indexOf(json[0].enclosurename ) != -1 ) {
				$("#public_enclosure").hide();
			}
		}
		else {
			$("#public_enclosure").show();
			if ( "undefined".indexOf(json[0].enclosurename ) != -1 ) {
				json[0].enclosurename = json[0].enclosure;
			}
		}
		
		$("#publicViewLayout article").mapview(json, {
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
		   },
			"shijian": function(val) {
				return shijian = new Date(
					parseInt(val) * 1000
				).toString(
					"yyyy-MM-dd hh:mm");
			},
			"level": function(val) {
				return level = dictdata
					.circles[val];
			},
			"lwstate": function(val) {
				if (val == "1") {
					return lwstate = "建议";
				} else if (val == "2") {
					return lwstate = "议案";
				} else if (val == "3") {
					return lwstate = "批评";
				} else if (val == "4") {
					return lwstate = "意见";
				} else if (val == "5") {
					return lwstate = "质询";
				}
			},
			"reviewclass": function(val) {
				if (val == "1") {
					return "经济类";
				} else if (val == "2") {
					return "人文教育类";
				} else if (val == "3") {
					return "环境保护类";
				} else if (val == "4") {
					return "交通类";
				} else if (val == "5") {
					return "人事福利类";
				}
				else
				return val;
			},
						
		})
		
	
	})
})

/*专项工作报告*/
$("#publicViewLayout .disagreebutton").click(function() {
	console.log("______________ specailWorkauditLayout .disagreebutton")
	history.go(-1);	
})

$("#publicViewLayout").on('click','.stationbuttonbg2 .auditpass',function(){
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