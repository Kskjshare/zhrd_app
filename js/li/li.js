//此页面加载的ip
//219.159.165.98:81
 let myip = "http://117.158.113.36:9002/";
//let myip = "http://localhost:8084/";

var dict_classify = [ "未知","出席人代会","参加其他会议","参加学习培训","提出议案，建议、批评和意见",
	"开展专题调研","参加视察","参加调研","参加执法检查","接待选民","化解矛盾纠纷","扶弱济困","办好事、实事","参加公益慈善事业","向选民述职","其他"];


var  badge_number = 0 ;
var arry = [],
	mysuggestnav = "0",
	mysuggestnavYA = "0",
	myHDy = "0",
	
	supervisionYSnav = "0",
	supervisionnav = "0",
	specialworknav = "0" //专项工作报告
	investigatenav = "0",
	// mySpecificIssuenav = "0",
	
	supevaluationnav = "0", //我的专题询问
	supevaluationYSnav = "0", //我的预审专题询问
	evaluationsystemLayoutnav = "0", // 人大监督测评系统
	
	researchYSnav = "0",
	supinspectionYSnav = "0",
	supevaluationYSnav = "0",
	myHDnav = "0",
	submitsolution = "0",
	attendanceManager ="0",
	selectmember = "0";
	
//var quill = new Quill('#editor', {
//    theme: 'snow'
//});
//below added by jackie//取出会议时间，判断当前时间是否在会议时间内
var nowedition = "1.9.9.3";
var flowtype = "2"; //议审委流程
var flowtype_ysw = "";

function loadmeeting() {
	var l_now = Date.parse(new Date()) / 1000;
	var l_startdate = "";
	var l_enddate = "";
	//var missions = "", realname = "";
	if (flowtype == "2") { //议审委流程
		RssApi.Table.List("meeting").condition(new RssDict().keyvalue({
			"1": "1"
		}).getDict()).getJson(function(jsonn) {
			$.each(jsonn, function(k, v) {
				// missions = v.mission;
				l_startdate = v.startdate;
				l_enddate = v.enddate;
				// alert("111:l_now:"+l_now);
				// alert("111:l_startdate:"+l_startdate);
				// alert("111:l_enddate:"+l_enddate);
				if (l_now < l_enddate && l_now > l_startdate) {
					flowtype_ysw = "21"; //3:议审委初审且在会议期间
				} else {
					flowtype_ysw = "22"; //3:议审委初审且不在会议期间
				}
			})
		})
	}
}
loadmeeting();
//up added by jackie
// function upfile1(file) {
// 	var formData = new FormData();
// 	formData.append("file", $(file)[0].files[0]);
// 	$.ajax({
// 		url: RssApp["WwwHost"] + "widget/upload.jsp",
// 		type: 'POST',
// 		data: formData,
// 		processData: false, // 告诉jQuery不要去处理发送的数据
// 		contentType: false, // 告诉jQuery不要去设置Content-Type请求头
// 		beforeSend: function() {
// 			console.log("正在进行，请稍候");
// 		},
// 		success: function(data) {
// 			data = JSON.parse(data);
// 			//            console.log(data.url);
// 			$("#suggestsub .fja").text(data.url);
// 			alert("上传成功");
// 		},
// 		error: function(data) {
// 			console.log("上传失败");
// 			alert("上传失败");
// 		}
// 	});
// }

function upfile2(file) {
	var formData = new FormData();
	formData.append("file2", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#suggestsubYA .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfile3(file) {
	var formData = new FormData();
	formData.append("file3", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#initiateHD .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfile4(file) {
	var formData = new FormData();
	formData.append("file4", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#shenchaXZ .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfile5(file) {
	var formData = new FormData();
	formData.append("file5", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#anssupspecialwork .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfiles1(file) {
	var formData = new FormData();
	formData.append("files", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#ansjudicsup .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfiles2(file) {
	var formData = new FormData();
	formData.append("files2", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#ansjudicsupSF .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfiles3(file) {
	var formData = new FormData();
	formData.append("files3", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#ansjudicsupBA .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfiles4(file) {
	var formData = new FormData();
	formData.append("files4", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#ansjudsupadm .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfileZF(file) {
	var formData = new FormData();
	formData.append("fileZF", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#anssupinspectionDC .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}

function upfileXW(file) {
	var formData = new FormData();
	formData.append("fileXW", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#anssupevaluationCB .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}
function upfilezx(file) {
	var formData = new FormData();
	formData.append("filezx", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#anssupspecialworkCB .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}
function upfileZX(file) {
	var formData = new FormData();
	formData.append("fileZX", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#supspecialworkXZ .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}
function upfileZF(file) {
	var formData = new FormData();
	formData.append("fileZF", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#supinspectionXZ .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}
function upfileZT(file) {
	var formData = new FormData();
	formData.append("fileZT", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#supevaluationXZ .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}
function upfiletd(file) {
	var formData = new FormData();
	formData.append("filetd", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#supspecificXZ .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}
function upfilecz(file) {
	var formData = new FormData();
	formData.append("filecz", $(file)[0].files[0]);
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
			//            console.log(data.url);
			$("#supdismissalXZ .fja").text(data.url)
			alert("上传成功");
		},
		error: function(data) {
			console.log("上传失败");
			alert("上传失败");
		}
	});
}


function specialworkEnclosureOnchange(file) { //专项工作报告附件回调
	var typeid = 1 ;
	enclosureOnchange ( file , typeid ) ;
}
function inspectEnclosureOnchange(file) { //视察附件回调
	var typeid = 8 ;
	enclosureOnchange ( file , typeid ) ;
}
function InvestigationEnclosureOnchange(file) { //调研附件回调
	var typeid = 9 ;
	enclosureOnchange ( file , typeid ) ;
}


function launchActivityEnclosureOnchange(file) { //发起活动
	var typeid = 21 ;
	enclosureOnchange ( file , typeid ) ;
	
}
function suggestEnclosureOnchange(file) { //提交建议
	var typeid = 22 ;
	enclosureOnchange ( file , typeid ) ;
	
}

function enforcementEnclosureOnchange(file) { //执法检查
	var typeid = 23 ;
	enclosureOnchange ( file , typeid ) ;
	
}


var uploadePictures = 0 ;
var fileData ="";
var uploadIndex = 0 ;
var tmp_enclosurename ="";
var tmp_enclosurepath ="";
var picture_enclosurename = "#uploadActivity .fja";	
var picture_enclosurepath = "#uploadActivity .fj_path";
function upLoadActivityEnclosureOnchange(file) { //上传履职情况
	// var typeid = 20 ;
	// enclosureOnchange ( file , typeid ) ;
	//上传图片个数
	uploadIndex = 0 ;
	uploadePictures = 0 ;
	fileData = file ;
	uploadePictures = $(file)[0].files.length ;	
	var typeid = 20 ;
	tmp_enclosurepath = "";
	tmp_enclosurename = "";
	if ("undefined".indexOf( $(fileData)[0].files[0] ) != -1 ) {
		return;
	}
	// enclosureOnchange ( file , typeid ) ;
	uploadPicture();
}
function uploadPicture(  ) { //解决上传多张图片问题
	if ( uploadIndex >= uploadePictures ) {
		alert("上传成功");
		console.log(" ______________ tmp_enclosurepath=",tmp_enclosurepath)
		console.log(" ______________ tmp_enclosurename=",tmp_enclosurename)
		$( picture_enclosurename ).text( tmp_enclosurename )
		$( picture_enclosurepath ).text( tmp_enclosurepath )
		uploadIndex = 0 ;
		return;
	}
	var counter =  $(fileData)[0].files.length;
	var formData = new FormData();
	var filetype="uploadActivity";
	formData.append( filetype , $(fileData)[0].files[uploadIndex ]);
	// for ( var i = 0 ; i < $(file)[0].files.length ; i ++ ) {
	// 	 formData.append( filetype , $(file)[0].files[i]);
	// 	 console.log(" ______________ files =",$(file)[0].files[i])
	// }
	
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
				console.log(" ______________ data=",data)
				//$("#supervisionXZ .fja").text(data.url)
				// console.log("正在进行，请稍候",data.url);
				var filename="";
				var filepath = "";
				console.log(" ______________ uploadIndex=",uploadIndex)
				if ( uploadIndex == 0  ) {
					
				tmp_enclosurepath += data.url ;
				tmp_enclosurename += $(fileData)[0].files[uploadIndex].name;	
				}
				else {
				tmp_enclosurepath += ',';
				tmp_enclosurepath += data.url ;
				tmp_enclosurename += ',';
				tmp_enclosurename += $(fileData)[0].files[uploadIndex].name;	
				}
				
				console.log(" ______________ tmp_enclosurepath=",tmp_enclosurepath)
				console.log(" ______________ tmp_enclosurename=",tmp_enclosurename)
				// $( enclosurename ).text( $(file)[0].files[0].name )
				// $( enclosurepath ).text( data.url )
				
				global_enclosurepath = data.url ;
				uploadIndex ++ ;
				uploadPicture () ;
			},
			error: function(data) {
				
				alert("上传失败");
			}
		});	
}

var global_enclosurepath = ""; //为了解决上传履职活动附件问题
function enclosureOnchange( file , typeid  ) {

	global_enclosurepath = "";
	
	//默认为调研
	var enclosurename = "#researchZX .fja";
	var enclosurepath = "#researchZX .fj_path";
	var filetype = "filedy";
	if ( typeid == 8 ) { //视察
		enclosurepath = "#supervisionXZ .fja";
		filetype = "filesc";
	}
	else if ( typeid == 1 ) {
		enclosurepath = "#supspecialworkXZ .fja";
		filetype = "fileZX";
	}
	else if ( typeid == 20 ) { //上传履职情况
		enclosurename = "#uploadActivity .fja";
		
		enclosurepath = "#uploadActivity .fj_path";
		filetype = "uploadActivity";
	} 
	else if ( typeid == 21 ) { //发起活动
		enclosurename = "#initiateHD .fja";
		
		enclosurepath = "#initiateHD .fj_path";
		filetype = "fileActivity1";
	} 
	else if ( typeid == 22 ) { //提交建议
		enclosurename = "#suggestsub .fja";
		
		enclosurepath = "#suggestsub .fj_path";
		filetype = "filesuggest";
	} 
	else if ( typeid == 23 ) { //执法检查
		enclosurename = "#supinspectionXZ .fja";
		
		enclosurepath = "#supinspectionXZ .fj_path";
		filetype = "fileZF";
	} 
	
	var counter =  $(file)[0].files.length;
	var formData = new FormData();
	//formData.append("filesc", $(file)[0].files[0]);
	console.log(" ______________ filecounter =",$(file)[0].files.length)
	
	// console.log(" ______________ files =",$(file)[0].files)
	// console.log(" ______________ file[0].files[0]",$(file)[0].files[0])
	// console.log(" ______________ file[0].files[1]",$(file)[0].files[1])
	for ( var i = 0 ; i < $(file)[0].files.length ; i ++ ) {
		 formData.append( filetype , $(file)[0].files[i]);
		 console.log(" ______________ files =",$(file)[0].files[i])
	}
	// formData.append( filetype , $(file)[0].files[0]);
	// console.log(" ______________ file[0].files[1]",$(file)[0].files[1])
	// console.log(" ______________ formData.get('filetype')",formData.get('filetype'))
	return;
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
			console.log(" ______________ data=",data)
			//$("#supervisionXZ .fja").text(data.url)
			// console.log("正在进行，请稍候",data.url);
			var filename="";
			var filepath = "";
			for ( var i = 0 ; i < counter ; i ++ ) {
				
			}
			$( enclosurename ).text( $(file)[0].files[0].name )
			$( enclosurepath ).text( data.url )
			
			global_enclosurepath = data.url ;
			alert("上传成功");
			// alert( global_enclosurepath );
		},
		error: function(data) {
			
			// console.log("上传失败");
			alert("上传失败");
		}
	});	
}
// function upfiledy(file) {
// 	var formData = new FormData();
// 	formData.append("filedy", $(file)[0].files[0]);
// 	$.ajax({
// 		url: RssApp["WwwHost"] + "widget/upload.jsp",
// 		type: 'POST',
// 		data: formData,
// 		processData: false, // 告诉jQuery不要去处理发送的数据
// 		contentType: false, // 告诉jQuery不要去设置Content-Type请求头
// 		beforeSend: function() {
// 			console.log("正在进行，请稍候");
// 		},
// 		success: function(data) {
// 			data = JSON.parse(data);
// 			$("#researchZX .fja").text(data.url)
// 			// $("#researchZX .enclosure").text( $(file)[0].files[0].name )
			
// 			alert("上传成功");
// 		},
// 		error: function(data) {
// 			console.log("上传失败");
// 			alert("上传失败");
// 		}
// 	});
// }
//导航条切换
$("nav>a").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
})
//登录页点击变蓝
$("#loginform li").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel")
})
//记住密码
$("#forget").change(function() {
	if ($(this).is(":checked")) {
		//      localStorage.password = $("input[name='pwd']").val();  
	} else {
		localStorage.password = "";
	}
})
$("#loginpage").load(function() {
	if (localStorage.password == "" || localStorage.password == undefined) {} else {
		$("input[name='account']").val(RssUser.Data.account);
		$("input[name='pwd']").val(localStorage.password);
		$("#forget").prop('checked');
	}
})
if (localStorage.password == "" || localStorage.password == undefined) {} else {
	$("input[name='account']").val(RssUser.Data.account);
	$("input[name='pwd']").val(localStorage.password);
	$("#forget").attr("checked", "checked");
}

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
		
		// 特定问题调查（由于布局限制把单选模式改为下拉框选择模式
		var source = localStorage.getItem("source");
		if ( source == 5 ) {
			if ( $(this).attr("relationid") == 6 ) { //常委会成员联名
				$("#newtask_meetingshijian").show();
				$("#newtask_directormeetingnum").show();
				$("#newtask_committeemeetingshijian").hide();
				$("#newtask_committeemeetingnum").hide();
			}
			else {
				$("#newtask_meetingshijian").hide();
				$("#newtask_directormeetingnum").hide();
				$("#newtask_committeemeetingshijian").show();
				$("#newtask_committeemeetingnum").show();
			} 
		} 
		// 特定问题调查（由于布局限制把单选模式改为下拉框选择模式
		
					 
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

//置回建议列表
$("#zhihuiJY").load(function() {
	var missions = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(ms) {
		$.each(ms, function(k, v) {
			missions = v.mission;
		})
	})

	$("#zhihuiJY .search button").off("click").click(function() {
		var key = $("#zhihuiJY .search input").val();
		if (key) {
			key = {
				'title': "{likeall~" + key + "}"
			};
		} else {
			key = "";
		}
		if (arry.indexOf("zhihuiJY") == "-1") {
			$("#zhihuiJY ul li").eq(0).siblings().remove();
			arry.push("zhihuiJY")
		} else {
			$("#zhihuiJY ul li").remove();
		}
		new Ajax("sortnum").keyvalue("key", $("#zhihuiJY .search input").val()).keyvalue("lwstate", "1")
			.getJson(function(
				data) {
				$("#zhihuiJY article>p").text("共" + data[0].num + "条信息")


				faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
					.keyvalue({
						"draft": "2",
						"lwstate": "1",
						"examination": "3",
						"myid": RssUser.Data.myid
					}).keyvalue(key).getDict()).setFlushUI(function(json, append) {
						
					if (json.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					if (json.length > 0  ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
					$("#zhihuiJY ul").mapview(json, {
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
						},
					}, append)
					// if (json.length == "0") {
					// 	alert("未找到查询目标")
					// }
					//查看
					$("#zhihuiJY .see").off().click(function() {
						var key = $(this).parent().attr("sortid");
						console
						var reject = 1 ;
						lwstate =  1 ;
						var obj ="seesuggest";
						location.href = "#publicViewLayout"
						publicviewAction( key , lwstate ) ;
						
						// viewSuggestDetail( obj , reject , lwstate ,key );
						
					// 	location.href = "#seesuggest"
					// 	$('#seesuggest article .no1').remove();
					// 	RssApi.View.List("sort").setLoading(true).condition(
					// 		new RssDict().keyvalue({
					// 			"sortid": key
					// 		}).getDict()).getJson(function(json) {
					// 		var shijian = "",
					// 			level = ""
					// 		$("#seesuggest article").mapview(json, {
					// 			"shijian": function(val) {
					// 				return shijian = new Date(
					// 					parseInt(val) * 1000
					// 				).toString(
					// 					"yyyy-MM-dd hh:mm");
					// 			},
					// 			"level": function(val) {
					// 				return level = dictdata
					// 					.circles[val];
					// 			}
					// 		})
					// 		$.each(json, function(k, v) {
					// 			$("#seesuggest article").append(
					// 				'<div class="divtop"><h1 >' +
					// 				v.sessionname +
					// 				'</h1><h2>[第' + v.realid +
					// 				'号]</h2><h3>' + v.title +
					// 				'</h3><h4 >提出者:' + v
					// 				.realname +
					// 				'</h4><h4 shijian>' +
					// 				shijian +
					// 				'</h4></div><div class="divp">' +
					// 				v.matter +
					// 				'</div><div class="no"  >会议次数：' +
					// 				v.csname +
					// 				'</div><div class="no"  >层次：' +
					// 				level +
					// 				'</div><div class="no">：' +
					// 				v.scname +
					// 				'</div><div class="no fj">附件：<span>' +
					// 				v.enclosure +
					// 				'<span></div><div class="no"  >置回原由：' +
					// 				v.buyBack +
					// 				'</div>')
					// 		})

					// 		RssApi.View.List("second_user").setLoading(true)
					// 			.condition(new RssDict().keyvalue({
					// 				"suggestid": key
					// 			}).keyvalue().getDict()).getJson(function(
					// 				lm) {
					// 				var lmr = ""
					// 				$.each(lm, function(k, v) {
					// 					lmr += v.realname + ",";
					// 				})
					// 				console.log(lmr);
					// 				$('#seesuggest article .fj').before(
					// 					'<div class="no1">联名代表：' +
					// 					lmr + '</div>');
					// 			})
					// 		var dfenclosure = $(
					// 			"#seesuggest article .fj span").text();
					// 		var str = dfenclosure.split(",");
					// 		////console.log(str);
					// 		var html = ""
					// 		$.each(str, function(idx, value) {
					// 			if (value != "") {
					// 				html = "<p class='pdfjs11'>" +
					// 					value + "</p>"
					// 				$('#seesuggest article .fj')
					// 					.append(html);
					// 			}
					// 		})
					// 		$('#seesuggest article  .fj span').hide();
					// 		$(".fj p").off().click(function() {
					// 			//                                alert("文件路径：com.rsseasy.lvzhi.file");
					// 			var path = $(this).text();
					// 			var dz = myip + "upfile/" + path;
					// 			var pdfh5 = new Pdfh5('.pdfjs11', {
					// 				pdfurl: dz
					// 			});
					// 		})
					// 		//                        console.log(json);
					// 		//                        $("#seesuggest .divp").html(json[0].matter)
					// 		//                        $("#seesuggest .divp").html(json[0].csname)
					// 		//                        $("#seesuggest .divp").html(json[0].scname)
					// 	})
					})
					
					//附议
					$("#zhihuiJY .ans").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						RssApi.Table.List("suggest").condition(new RssDict()
							.keyvalue({
								"examination": 1,
								"id": key,
								"myid": RssUser.Data.myid
							}).getDict()).getJson(function(fy) {
							if (fy.length == "0") {
								RssApi.Edit("suggest").setLoading(true)
									.keyvalue({
										"examination": 1,
										"isdbtshenhe": 2,
										"id": key,
										"myid": RssUser.Data.myid
									}).getJson(function(tj) {
										//                                RssApi.Edit("suggestscr").setLoading(true).keyvalue({
										//                                    "suggestid": key,
										//                                    "userid": missions,
										//                                    "myid": 0
										//                                }).getJson(function (sc) {
										//
										//                                })
										alert("重新提出成功")
										location.href = "#suggest";
									})
							} else {
								alert("已经重新提出过了");
							}
						})
					})
				}).getJson()
			})
	})
	if ($("#zhihuiJY .search input").val() == "" || $("#zhihuiJY .search input").val() == undefined) {
		$("#zhihuiJY .search button").click();
	}
	//    }).getJson();
})

//置回议案列表
$("#zhihuiYA").load(function() {
	var missions = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(ms) {
		$.each(ms, function(k, v) {
			missions = v.mission;
		})
	})
	$("#zhihuiYA .search button").off("click").click(function() {
		var key = $("#zhihuiYA .search input").val();
		if (key) {
			key = {
				'title': "{likeall~" + key + "}"
			};
		} else {
			key = "";
		}
		if (arry.indexOf("zhihuiYA") == "-1") {
			$("#zhihuiYA ul li").eq(0).siblings().remove();
			arry.push("zhihuiYA")
		} else {
			$("#zhihuiYA ul li").remove();
		}

		new Ajax("sortnum").keyvalue("key", $("#zhihuiYA .search input").val()).keyvalue("lwstate", "2")
			.getJson(function(
				data) {
				//            $("#zhihuiYA article>p").text("共" + data[0].num + "条信息")


				faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
					.keyvalue({
						"draft": "2",
						"lwstate": "2",
						"examination": "3",
						"myid": RssUser.Data.myid
					}).keyvalue(key).getDict()).setFlushUI(function(json, append) {
					if (json.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					if (json.length > 0  ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
					$("#zhihuiYA ul").mapview(json, {
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
						},
					}, append)
					// if (json.length == "0") {
					// 	alert("未找到查询目标")
					// }
					//查看
					$("#zhihuiYA .see").off().click(function() {
						$('#seesuggest article .no1').remove();
						var key = $(this).parent().attr("sortid");
						
						var reject = 1 ;
						lwstate =  2 ;
						var obj ="seesuggest";
						viewSuggestDetail( obj , reject , lwstate ,key );
						
						// RssApi.View.List("sort").setLoading(true).condition(
						// 	new RssDict().keyvalue({
						// 		"sortid": key
						// 	}).getDict()).getJson(function(json) {
						// 	var shijian = "",
						// 		level = ""
						// 	$("#seesuggest article").mapview(json, {
						// 		"shijian": function(val) {
						// 			return shijian = new Date(
						// 				parseInt(val) * 1000
						// 			).toString(
						// 				"yyyy-MM-dd hh:mm");
						// 		},
						// 		"level": function(val) {
						// 			return level = dictdata
						// 				.circles[val];
						// 		}
						// 	})
						// 	$.each(json, function(k, v) {
						// 		$("#seesuggest article").append(
						// 			'<div class="divtop"><h1 >' +
						// 			v.sessionname +
						// 			'</h1><h2>[第' + v.realid +
						// 			'号]</h2><h3>' + v.title +
						// 			'</h3><h4 >提出者:' + v
						// 			.realname +
						// 			'</h4><h4 shijian>' +
						// 			shijian +
						// 			'</h4></div><div class="divp">' +
						// 			v.matter +
						// 			'</div><div class="no"  >会议次数：' +
						// 			v.csname +
						// 			'</div><div class="no"  >层次：' +
						// 			level +
						// 			'</div><div class="no">：' +
						// 			v.scname +
						// 			'</div><div class="no fj">附件：<span>' +
						// 			v.enclosure +
						// 			'<span></div><div class="no"  >置回原由：' +
						// 			v.buyBack +
						// 			'</div>')
						// 	})
						// 	RssApi.View.List("second_user").setLoading(true)
						// 		.condition(new RssDict().keyvalue({
						// 			"suggestid": key
						// 		}).keyvalue().getDict()).getJson(function(
						// 			lm) {
						// 			var lmr = ""
						// 			$.each(lm, function(k, v) {
						// 				lmr += v.realname + ",";
						// 			})
						// 			console.log(lmr);
						// 			$('#seesuggest article .fj').before(
						// 				'<div class="no1">联名代表：' +
						// 				lmr + '</div>');
						// 		})
						// 	var dfenclosure = $(
						// 		"#seesuggest article .fj span").text();
						// 	var str = dfenclosure.split(",");
						// 	////console.log(str);
						// 	var html = ""
						// 	$.each(str, function(idx, value) {
						// 		if (value != "") {
						// 			html = "<p class='pdfjs10'>" +
						// 				value + "</p>"
						// 			$('#seesuggest article .fj')
						// 				.append(html);
						// 		}
						// 	})
						// 	$('#seesuggest article  .fj span').hide();
						// 	$(".fj p").off().click(function() {
						// 		//alert("文件路径：com.rsseasy.lvzhi.file");
						// 		var path = $(this).text();
						// 		var dz = myip + "upfile/" + path;
						// 		var pdfh5 = new Pdfh5('.pdfjs10', {
						// 			pdfurl: dz
						// 		});
						// 	})
						// 	//                        $("#seesuggest .divp").html(json[0].matter)
						// })
					})
					//附议
					$("#zhihuiYA .ans").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						RssApi.Table.List("suggest").condition(new RssDict()
							.keyvalue({
								"examination": 1,
								"id": key,
								"myid": RssUser.Data.myid
							}).getDict()).getJson(function(json) {
							if (json.length == "0") {
								RssApi.Edit("suggest").setLoading(true)
									.keyvalue({
										"examination": 1,
										"isdbtshenhe": 2,
										"id": key,
										"myid": RssUser.Data.myid
									}).getJson(function(jsonm) {
										//                                RssApi.Edit("suggestscr").setLoading(true).keyvalue({
										//                                    "suggestid": key,
										//                                    "userid": missions,
										//                                    "myid": 0
										//                                }).getJson(function (sc) {
										//
										//                                })
										alert("重新提出成功")
										location.href = "#suggest";
									})
							} else {
								alert("已经重新提出过了");
							}
						})
					})
				}).getJson()
			})
	})
	if ($("#zhihuiYA .search input").val() == "" || $("#zhihuiYA .search input").val() == undefined) {
		$("#zhihuiYA .search button").click();
	}
	//    }).getJson();
})


//附议建议列表
$("#suggestsec").load(function() {
	//    $("#suggestsec ul li").eq(0).siblings().remove();
	//    faqsajax = RssApi.View.List("sort").condition(new RssDict().keyvalue({"draft": "2", "lwstate": "1", "seconded": "1"}).getDict()).setFlushUI(function (json, append) {
	//        if (json.length != "10") {
	//            $('.nodata').hide();
	//        }else {
	//           $('.nodata').show();
	//        }
	//        $("#suggestsec ul").mapview(json, {
	//            "registertype": function (val) {
	//                var registertype = dictdata.registertype[val]
	//                return registertype;
	//            }
	//        }, append)
	$("#suggestsec .search button").off("click").click(function() {
		var key = $("#suggestsec .search input").val();
		if (key) {
			key = {
				'title': "{likeall~" + key + "}"
			};
		} else {
			key = "";
		}
		if (arry.indexOf("suggestsec") == "-1") {
			$("#suggestsec ul li").eq(0).siblings().remove();
			arry.push("suggestsec")
		} else {
			$("#suggestsec ul li").remove();
		}
		new Ajax("sortnum").keyvalue("key", $("#suggestsec .search input").val()).keyvalue("lwstate",
			"1").getJson(
			function(data) {
				$("#suggestsec article>p").text("共" + data[0].num + "条信息")


				faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
					.keyvalue({
						"draft": "2",
						"lwstate": "1",
						"seconded": "1"
					}).keyvalue(key).getDict()).setFlushUI(function(json, append) {
					if (json.length != "10") {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					$("#suggestsec ul").mapview(json, {
						"registertype": function(val) {
							var registertype = dictdata.registertype[val]
							return registertype;
						}
					}, append)
					if (json.length == "0") {
						alert("未找到查询目标")
					}
					//查看
					$("#suggestsec .see").click(function() {
						var key = $(this).parent().attr("sortid");
						
						var reject = 0 ;
						lwstate =  1 ;
						var obj ="seesuggest";
						viewSuggestDetail( obj , reject , lwstate ,key );
						
						// RssApi.View.List("sort").setLoading(true).condition(
						// 	new RssDict().keyvalue({
						// 		"sortid": key
						// 	}).getDict()).getJson(function(json) {
						// 	var shijian = "",
						// 		level = ""
						// 	$("#seesuggest article").mapview(json, {
						// 		"shijian": function(val) {
						// 			return shijian = new Date(
						// 				parseInt(val) * 1000
						// 			).toString(
						// 				"yyyy-MM-dd hh:mm");
						// 		},
						// 		"level": function(val) {
						// 			return level = dictdata
						// 				.circles[val];
						// 		}
						// 	})
						// 	$.each(json, function(k, v) {
						// 		$("#seesuggest article").append(
						// 			'<div class="divtop"><h1 >' +
						// 			v.sessionname +
						// 			'</h1><h2>[第' + v.realid +
						// 			'号]</h2><h3>' + v.title +
						// 			'</h3><h4 >提出者:' + v
						// 			.realname +
						// 			'</h4><h4 shijian>' +
						// 			shijian +
						// 			'</h4></div><div class="divp">' +
						// 			v.matter +
						// 			'</div><div class="no"  >会议次数：' +
						// 			v.csname +
						// 			'</div><div class="no"  >层次：' +
						// 			level +
						// 			'</div><div class="no">：' +
						// 			v.scname +
						// 			'</div><div class="no">附件：,' +
						// 			v.enclosure + '</div>')
						// 	})
						// })
					})
					//附议
					$("#suggestsec .ans").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						RssApi.Table.List("secondeduser").condition(new RssDict()
							.keyvalue({
								"suggestid": key,
								"userid": RssUser.Data.myid
							}).getDict()).getJson(function(json) {
							if (json.length == "0") {
								RssApi.Edit("secondeduser").setLoading(true)
									.keyvalue({
										"suggestid": key,
										"userid": RssUser.Data.myid,
										"myid": RssUser.Data.myid
									}).getJson(function(json) {
										alert("联名提出成功")
										location.href = "#suggest";
									})
							} else {
								alert("已经联名提出过了");
							}
						})
					})
				}).getJson()
			})
	})
	if ($("#suggestsec .search input").val() == "" || $("#suggestsec .search input").val() == undefined) {
		$("#suggestsec .search button").click();
	}
	//    }).getJson();
})

//附议议案列表
$("#suggestsecYA").load(function() {
	$("#suggestsecYA .search button").off("click").click(function() {
		var key = $("#suggestsecYA .search input").val();
		if (key) {
			key = {
				'title': "{likeall~" + key + "}"
			};
		} else {
			key = "";
		}
		if (arry.indexOf("suggestsecYA") == "-1") {
			$("#suggestsecYA ul li").eq(0).siblings().remove();
			arry.push("suggestsecYA")
		} else {
			$("#suggestsecYA ul li").remove();
		}

		new Ajax("sortnum").keyvalue("key", $("#suggestsecYA .search input").val()).keyvalue("lwstate",
			"2").getJson(
			function(data) {
				$("#suggestsecYA article>p").text("共" + data[0].num + "条信息")


				faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
					.keyvalue({
						"draft": "2",
						"lwstate": "2",
						"seconded": "1"
					}).keyvalue(key).getDict()).setFlushUI(function(json, append) {
					if (json.length != "10") {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
					$("#suggestsecYA ul").mapview(json, {
						"registertype": function(val) {
							var registertype = dictdata.registertype[val]
							return registertype;
						}
					}, append)
					if (json.length == "0") {
						alert("未找到查询目标")
					}
					//查看
					$("#suggestsecYA .see").off().click(function() {
						$('#seesuggest article .no1').remove();
						var key = $(this).parent().attr("sortid");
						
						var reject = 0 ;
						lwstate =  2 ;
						var obj ="seesuggest";
						viewSuggestDetail( obj , reject , lwstate ,key );
						
						
						// RssApi.View.List("sort").setLoading(true).condition(
						// 	new RssDict().keyvalue({
						// 		"sortid": key
						// 	}).getDict()).getJson(function(json) {
						// 	var shijian = "",
						// 		level = ""
						// 	$("#seesuggest article").mapview(json, {
						// 		"shijian": function(val) {
						// 			return shijian = new Date(
						// 				parseInt(val) * 1000
						// 			).toString(
						// 				"yyyy-MM-dd hh:mm");
						// 		},
						// 		"level": function(val) {
						// 			return level = dictdata
						// 				.circles[val];
						// 		}
						// 	})
						// 	$.each(json, function(k, v) {
						// 		$("#seesuggest article").append(
						// 			'<div class="divtop"><h1 >' +
						// 			v.sessionname +
						// 			'</h1><h2>[第' + v.realid +
						// 			'号]</h2><h3>' + v.title +
						// 			'</h3><h4 >提出者:' + v
						// 			.realname +
						// 			'</h4><h4 shijian>' +
						// 			shijian +
						// 			'</h4></div><div class="divp">' +
						// 			v.matter +
						// 			'</div><div class="no"  >会议次数：' +
						// 			v.csname +
						// 			'</div><div class="no"  >层次：' +
						// 			level +
						// 			'</div><div class="no">：' +
						// 			v.scname +
						// 			'</div><div class="no fj">附件：<span>' +
						// 			v.enclosure + '<span></div>'
						// 		)
						// 	})
						// 	RssApi.View.List("second_user").setLoading(true)
						// 		.condition(new RssDict().keyvalue({
						// 			"suggestid": key
						// 		}).keyvalue().getDict()).getJson(function(
						// 			lm) {
						// 			var lmr = ""
						// 			$.each(lm, function(k, v) {
						// 				lmr += v.realname + ",";
						// 			})
						// 			console.log(lmr);
						// 			$('#seesuggest article .fj').before(
						// 				'<div class="no1">联名代表：' +
						// 				lmr + '</div>');
						// 		})
						// 	var dfenclosure = $(
						// 		"#seesuggest article .fj span").text();
						// 	var str = dfenclosure.split(",");
						// 	////console.log(str);
						// 	var html = ""
						// 	$.each(str, function(idx, value) {
						// 		if (value != "") {
						// 			html = "<p class='pdfjs9'>" +
						// 				value + "</p>"
						// 			$('#seesuggest article .fj')
						// 				.append(html);
						// 		}
						// 	})
						// 	$('#seesuggest article  .fj span').hide();
						// 	$(".fj p").off().click(function() {
						// 		//                                alert("文件路径：com.rsseasy.lvzhi.file");
						// 		var path = $(this).text();
						// 		var dz = myip + "upfile/" + path;
						// 		var pdfh5 = new Pdfh5('.pdfjs9', {
						// 			pdfurl: dz
						// 		});
						// 	})
						// 	//                        $("#seesuggest .divp").html(json[0].matter)
						// })
					})
					//附议
					$("#suggestsecYA .ans").off("click").click(function() {
						var key = $(this).parent().attr("sortid");
						RssApi.Table.List("secondeduser").condition(new RssDict()
							.keyvalue({
								"suggestid": key,
								"userid": RssUser.Data.myid
							}).getDict()).getJson(function(json) {
							if (json.length == "0") {
								RssApi.Edit("secondeduser").setLoading(true)
									.keyvalue({
										"suggestid": key,
										"userid": RssUser.Data.myid,
										"myid": RssUser.Data.myid
									}).getJson(function(json) {
										alert("联名提出成功")
										location.href = "#suggest";
									})
							} else {
								alert("已经联名提出过了");
							}
						})
					})
				}).getJson()
			})
	})
	if ($("#suggestsecYA .search input").val() == "" || $("#suggestsecYA .search input").val() == undefined) {
		$("#suggestsecYA .search button").click();
	}
	//    }).getJson();
})

//我的建议
$("#mysuggest_backup").load(function() {
	$("#mysuggest nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("mysuggest") == "-1") {
			$("#mysuggest ul li").eq(0).siblings().remove();
			arry.push("mysuggest")
		} else {
			$("#mysuggest ul li").remove();
		}
		if ($(this).index() == "0") {
			faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
				"draft": "2",
				"lwstate": "1",
				"myid": RssUser.Data.myid
			}).getDict()).setFlushUI(function(json, append) {
				
				var json2 = [];
				$.each(json, function(k, v) {
					var state_result = getSuggestState( v );
					v.state = "建议进度:" + state_result ;
					v.realname ="提出者:" + v.realname ;
					
					json2.push( v );
				})
				
				if (json2.length < 10 ) {
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
					//                    "registertype": function (val) {
					//                        var registertype = dictdata.registertype[val]
					//                        return registertype;
					//                    }
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
					
					
					// RssApi.View.List("sort").setLoading(true).condition(new RssDict()
					// 	.keyvalue({
					// 		"sortid": key
					// 	}).getDict()).getJson(function(json) {
					// 	console.log(json)
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
					// 		attachmentPath = v.enclosure ;
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
					// 			'</div><div class="no">：' + v
					// 			.scname +
					// 			'</div><div class="attachment fj"><span>附件：' +
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
					// 			html = "<p class='pdfjs8 no2'>" + value +
					// 				"</p>"
					// 			$('#seesuggest article .fj').append(
					// 				html);
					// 		}
					// 	})
						
					// 	$('#seesuggest article  .fj span').hide();
					// 	$(".fj p").off().click(function() {
					// 		//alert("文件路径：com.rsseasy.lvzhi.file");
					// 		var path = $(this).text();
					// 		var dz = myip + "upfile/" + path;
					// 		if ( dz.indexOf(".doc") != -1 ) {
					// 			var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
					// 			xurl += encodeURIComponent(dz);
					// 			window.open(xurl);
					// 		} else {
					// 			var pdfh5 = new Pdfh5('.pdfjs8', {
					// 				pdfurl: dz
					// 			});
					// 		}
							
					// 		// alert( attachmentPath );
					// 		// alert( path );
					// 	})

					// 	//                        $("#seesuggest .divp").html(json[0].matter)
					// })
				})
				//办复信息
				$("#mysuggest .ans").off("click").click(function() {

					var key = $(this).parent().attr("sortid");
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
					var state_result = getSuggestState( v );
					v.state = "建议进度:" + state_result ;
					v.realname ="提出者:" + v.realname ;
					
					json2.push( v );
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
					// 			'</div><div class="no">：' + v
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
								// '<p class="zw">暂无办复信息！</p>')
								'<div style="text-align: center;"> <img class="nosolutions" src="img/limg/comm_nodata.png" alt="" /></div>')
								
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

//我的议案
$("#mysuggestYA_back").load(function() {
	$("#mysuggestYA nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("mysuggestYA") == "-1") {
			$("#mysuggestYA ul li").eq(0).siblings().remove();
			arry.push("mysuggestYA")
		} else {
			$("#mysuggestYA ul li").remove();
		}
		if ($(this).index() == "0") {
			faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
				"draft": "2",
				"lwstate": "2",
				"myid": RssUser.Data.myid
			}).getDict()).setFlushUI(function(json, append) {
				if (json.length != "10") {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				$("#mysuggestYA ul").mapview(json, {
					"registertype": function(val) {
						var registertype = dictdata.registertype[val]
						return registertype;
					}
				}, append)
				$("#mysuggestYA .del").show();
				//查看
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
					
				// 	RssApi.View.List("sort").setLoading(true).condition(new RssDict()
				// 		.keyvalue({
				// 			"sortid": key
				// 		}).getDict()).getJson(function(json) {
				// 		var shijian = "",
				// 			level = ""
				// 		$("#seesuggest article").mapview(json, {
				// 			"shijian": function(val) {
				// 				return shijian = new Date(parseInt(
				// 					val) * 1000).toString(
				// 					"yyyy-MM-dd hh:mm");
				// 			},
				// 			"level": function(val) {
				// 				return level = dictdata.circles[
				// 					val];
				// 			}
				// 		})
				// 		$.each(json, function(k, v) {
				// 			$("#seesuggest article").append(
				// 				'<div class="divtop"><h1 >' + v
				// 				.sessionname + '</h1><h2>[第' + v
				// 				.realid +
				// 				'号]</h2><h3>' + v.title +
				// 				'</h3><h4 >提出者:' + v.realname +
				// 				'</h4><h4 shijian>' + shijian +
				// 				'</h4></div><div class="divp">' + v
				// 				.matter +
				// 				'</div><div class="no"  >会议次数：' + v
				// 				.csname +
				// 				'</div><div class="no"  >层次：' +
				// 				level +
				// 				'</div><div class="no">：' + v
				// 				.scname +
				// 				'</div><div class="fj no">附件：<span>' +
				// 				v.enclosure + '<span></div>')
				// 		})
				// 		RssApi.View.List("second_user").setLoading(true)
				// 			.condition(new RssDict().keyvalue({
				// 				"suggestid": key
				// 			}).keyvalue().getDict()).getJson(function(lm) {
				// 				var lmr = ""
				// 				$.each(lm, function(k, v) {
				// 					lmr += v.realname + ",";
				// 				})
				// 				console.log(lmr);
				// 				$('#seesuggest article .fj').before(
				// 					'<div class="no1">联名代表：' + lmr +
				// 					'</div>');
				// 			})
				// 		//                        $("#seesuggest .divp").html(json[0].matter)
				// 		var dfenclosure = $("#seesuggest article .fj span")
				// 			.text();
				// 		var str = dfenclosure.split(",");
				// 		////console.log(str);
				// 		var html = ""
				// 		$.each(str, function(idx, value) {
				// 			if (value != "") {
				// 				html = "<p class='pdfjs16'>" + value +
				// 					"</p>"
				// 				$('#seesuggest article .fj').append(
				// 					html);
				// 			}
				// 		})
				// 		$('#seesuggest article  .fj span').hide();
				// 		$(".fj p").off().click(function() {
				// 			//                                alert("文件路径：com.rsseasy.lvzhi.file");
				// 			var path = $(this).text();
				// 			var dz = myip + "upfile/" + path;
				// 			var pdfh5 = new Pdfh5('.pdfjs16', {
				// 				pdfurl: dz
				// 			});
				// 		})
				// 	})
				})
				//办复信息
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
								
						}
					})
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
				//办复信息
			}).getJson();
		} else {
			faqsajax = RssApi.View.List("second_suggest").setLoading(true).condition({
				"userid": RssUser.Data.myid,
				"lwstate": "2",
			}).setFlushUI(function(json, append) {
				if (json.length != "10") {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length > 0 ) {
					$('.nosolutions').hide();
				} else {
					$('.nosolutions').show();
				}
				
				$("#mysuggestYA ul").mapview(json, {
					"registertype": function(val) {
						var registertype = dictdata.registertype[val]
						return registertype;
					}
				}, append)
				$("#mysuggestYA .del").hide();
				//查看
				$("#mysuggestYA .see").off().click(function() {
					$('#seesuggest article .no1').remove();
					var aa = $('#seesuggest article  .fj').text();
					if (!(aa == "" || aa == undefined)) {
						$('#seesuggest article .pdfjs17').remove();
					}
					var key = $(this).parent().attr("sortid");
					
					
					var reject = 0 ;
					lwstate =  2 ;
					var obj = "seesuggest" ;
					viewSuggestDetail(obj, reject , lwstate ,key );
					
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
					// 			'</div><div class="no">：' + v
					// 			.scname +
					// 			'</div><div class="fj no">附件：<span>' +
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
					// 	//                        $("#seesuggest .divp").html(json[0].matter)
					// 	var dfenclosure = $("#seesuggest article .fj span")
					// 		.text();
					// 	var str = dfenclosure.split(",");
					// 	////console.log(str);
					// 	var html = ""
					// 	$.each(str, function(idx, value) {
					// 		if (value != "") {
					// 			html = "<p class='pdfjs17'>" + value +
					// 				"</a>"
					// 			$('#seesuggest article .fj').append(
					// 				html);
					// 		}
					// 	})
					// 	$('#seesuggest article  .fj span').hide();
					// 	$(".fj p").off().click(function() {
					// 		//                                alert("文件路径：com.rsseasy.lvzhi.file");
					// 		var path = $(this).text();
					// 		var dz = myip + "upfile/" + path;
					// 		var pdfh5 = new Pdfh5('.pdfjs17', {
					// 			pdfurl: dz
					// 		});
					// 	})
					// })
				})
				//办复信息
				$("#mysuggestYA .ans").off("click").click(function() {

					var aa = $("#anssuggest article .fj p").text();
					if (!(aa == "" || aa == undefined)) {
						$("#anssuggest article .fj p:last").remove();
					}
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
									html = "<p class='pdfjs19'>" +
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
									var pdfh5 = new Pdfh5('.pdfjs19', {
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
				//删除
				$("#mysuggestYA .del").off("click").click(function() {
					var key = $(this).parent().attr("sortid");
					var t = $(this);
					RssApi.Delete("suggest").setLoading(true).condition(new RssDict()
						.keyvalue({
							"id": key
						}).keyvalue().getDict()).getJson(function(json) {
						alert("删除成功");
						t.parents("li").remove();
						//                      $("#mysuggestYA").load();
					})
				})
				//办复信息
			}).getJson();
		}
	})
	if (mysuggestnavYA == "1") {
		$("#mysuggestYA nav>a").eq(0).click();
		mysuggestnavYA = "0";
	}
})

//我的活动
$("#myHD").load(function() {
	$("#myHD nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("myHD") == "-1") {
			$("#myHD ul li").eq(0).siblings().remove();
			arry.push("myHD")
		} else {
			$("#myHD ul li").remove();
		}
		if ($(this).index() == "0") {
			//把view改为table，因为关联了activity_userlist导致有问题
			faqsajax = RssApi.Table.List("activities").setLoading(true).condition(new RssDict()
				.keyvalue({
					"myid": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				//在列表增加办理状态和提出者
				var json2 = [];
				$.each(json, function(k, v) {
					var initiator = "发起人: " + v.realname ;
					v.realname = initiator ;
					var result = isongoing ( v ) ;
					var state_value = "进行中" ;
					if ( result == 0 ) {
						state_value = "未开始";
					}
					else if ( result == 2 ){
						state_value = "已结束";
					}
					var state = "状态: " + state_value ;
					v.state = state ;
					json2.push( v );
				})
				if (json2.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				if (json2.length == 0 ) {
					$('.noActivities').show();
				} else {
					$('.noActivities').hide();
				}
				$("#myHD ul").mapview(json2, {}, append)
				$("#myHD .del").show();
				//查看
				$("#myHD .see").off().click(function() {
					$('#seesuggest article .no1').remove();
					var aa = $('#seesuggest article  .fj').text();
					if (!(aa == "" || aa == undefined)) {
						$('#seesuggest article .pdfjs16').remove();
					}
					var key = $(this).parent().attr("id");
					console.log(key)
					
					var obj = "activitysHD";
					var activityType = 0 ;
					viewActivityInformation( activityType , obj ,key );
					
			// 		faqsajax = RssApi.View.List("activities").setLoading(true)
			// 			.condition(new RssDict()
			// 				.keyvalue({
			// 					"id": key,
			// 					"userid": RssUser.Data.userid
			// 					//"myid": RssUser.Data.myid
			// 				}).getDict()).getJson(function(json) {
			// 				var shijian = "",
			// 					endshijian = "",
			// 					beginshijian = "",
			// 					finishshijian = ""
			// 				$("#activitysHD article").mapview(json, {
			// 					"shijian": function(val) {
			// 						return shijian = new Date(parseInt(
			// 								val) * 1000)
			// 							.toString("yyyy-MM-dd hh:mm");
			// 					},
			// 					"beginshijian": function(val) {
			// 						return beginshijian = new Date(
			// 								parseInt(val) * 1000)
			// 							.toString("yyyy-MM-dd");
			// 					},
			// 					"finishshijian": function(val) {
			// 						return finishshijian = new Date(
			// 							parseInt(val) *
			// 							1000).toString("yyyy-MM-dd");
			// 					}
			// 				})
			// 				$.each(json, function(k, v) {
			// 					var attachment = v.enclosure;
			// 					if ( "undefined".indexOf(attachment) != -1 ) {
			// 						attachment = "无";
			// 					}
			// 					$("#activitysHD article").append(
			// 						'<div class="divtop"><h1 >' + v
			// 						.title +
			// 						'</h1><h2>[第' + v.id +
			// 						'号]</h2><h3>' + v.title +
			// 						'</h3><h4 >提出者:' + v.realname +
			// 						'</h4><h4 shijian>' + shijian +
			// 						'</h4></div><div class="divp">' + v
			// 						.note +
			// 						'</div><div class="no"  >活动类型：' + v
			// 						.name +
			// 						'</div><div class="no"  >限额报名人数：' +
			// 						v.maxperson +
			// 						'</div><div class="no"  >已报人数：' + v
			// 						.currentperson +
			// 						// '</div><div class="no"  >组织部门：' + v.department +
			// 						'</div><div class="no">开始时间：' +
			// 						shijian +
			// 						'</div><div class="no"  >结束时间：' +
			// 						finishshijian +
			// 						'</div><div class="no">活动地点：' + v
			// 						.place +
			// 						// '</div><div class="no">活动状态：' + v.activityState +
			// 						'</div><div class="no">参与代表：' + v
			// 						.username +
			// 						'</div><div class="fj no1">附件：<span>' +
			// 						attachment + '<span></div>')
			// 				})
			// 				// RssApi.View.List("second_user").setLoading(true).condition(new RssDict().keyvalue({
			// 				// 	"suggestid": key
			// 				// }).keyvalue().getDict()).getJson(function(lm) {
			// 				// 	var lmr = ""
			// 				// 	$.each(lm, function(k, v) {
			// 				// 		lmr += v.realname + ",";
			// 				// 	})
			// 				// 	console.log(lmr);
			// 				// 	$('#activityHD article .fj').before('<div class="no1">联名代表：' + lmr + '</div>');
			// 				// })
			// 			})

			// 		RssApi.View.List("activities_realname").setLoading(true).condition(
			// 			new RssDict()
			// 			.keyvalue({
			// 				"userid": key
			// 			}).keyvalue().getDict()).getJson(function(lm) {
			// 			var lmr = ""
			// 			$.each(lm, function(k, v) {
			// 				lmr += v.realname + ",";
			// 			})
			// 			console.log(lmr);
			// 			// $('#activityHD article .fj').before('<div class="no1">参与代表：' + lmr + '</div>');
			// 		})

			// 		var dfenclosure = $("#activitysHD article .fj span").text();
			// 		var str = dfenclosure.split(",");
			// 		////console.log(str);
			// 		var html = ""
			// 		$.each(str, function(idx, value) {
			// 			if (value != "") {
			// 				html = "<p class='pdfjs16'>" + value + "</p>"
			// 				$('#activitysHD article .fj').append(html);
			// 			}
			// 		})
			// 		$('#activitysHD article  .fj span').hide();
			// 		$(".fj p").off().click(function() {
			// 			//                                alert("文件路径：com.rsseasy.lvzhi.file");
			// 			var path = $(this).text();
			// 			var dz = myip + "upfile/" + path;
			// 			var pdfh5 = new Pdfh5('.pdfjs16', {
			// 				pdfurl: dz
			// 			});
			// 		})
				})
			}).getJson();
		} else {
			var myid = $(this).attr("myid");
			faqsajax = RssApi.View.List("activities").setLoading(true).condition(new RssDict()
				.keyvalue({
					"state": 1
				}).getDict()).setFlushUI(function(json, append) {
				var json2 = [];
				$.each(json, function(k, v) {
					var initiator = "发起人: " + v.realname ;
					v.realname = initiator ;
					
					var result = isongoing ( v ) ;
					var state_value = "进行中" ;
					if ( result == 0 ) {
						state_value = "未开始";
					}
					else if ( result == 2 ){
						state_value = "已结束";
					}
					var state = "状态: " + state_value ;
					v.state = state ;
					if ( v.private == 1 ) {
						if ( RssUser.Data.myid == v.myid ) {
							//自己发起的履职活动不计算里面
							//json2.push(v);
						}
					}else {
						if ( RssUser.Data.myid.indexOf( v.userid ) != -1  && RssUser.Data.myid.indexOf( v.myid ) == -1 ) {
							json2.push(v);
						}
					}
				})
				if (json2.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json2.length == 0 ) {
					$('.noActivities').show();
				} else {
					$('.noActivities').hide();
				}
				
				$("#myHD ul").mapview(json2, {}, append)
				$("#myHD .del").show();
				//查看
				$("#myHD .see").off().click(function() {
					$('#activitysHD article .no1').remove();
					var aa = $('#activitysHD article  .fj').text();
					if (!(aa == "" || aa == undefined)) {
						$('#activitysHD article .pdfjs16').remove();
					}
					var key = $(this).parent().attr("id");
					console.log(key)
					var obj = "activitysHD";
					var activityType = 1 ;
				    viewActivityInformation( activityType , obj ,key );
					
					
					
					// faqsajax = RssApi.View.List("activities").setLoading(true)
					// 	.condition(new RssDict()
					// 		.keyvalue({
					// 			"id": key,
					// 			"userid": RssUser.Data.userid
								//"myid": RssUser.Data.myid
						// 	}).getDict()).getJson(function(json) {
						// 	var shijian = "",
						// 		endshijian = "",
						// 		beginshijian = "",
						// 		finishshijian = ""
						// 	$("#activitysHD article").mapview(json, {
						// 		"shijian": function(val) {
						// 			return shijian = new Date(parseInt(
						// 					val) * 1000)
						// 				.toString("yyyy-MM-dd hh:mm");
						// 		},
						// 		"beginshijian": function(val) {
						// 			return beginshijian = new Date(
						// 					parseInt(val) * 1000)
						// 				.toString("yyyy-MM-dd");
						// 		},
						// 		"finishshijian": function(val) {
						// 			return finishshijian = new Date(
						// 				parseInt(val) *
						// 				1000).toString("yyyy-MM-dd");
						// 		}
						// 	})
						// 	$.each(json, function(k, v) {
						// 		var attachment = v.enclosure;
						// 		if ( "undefined".indexOf(attachment) != -1 ) {
						// 			attachment = "无";
						// 		}
						// 		$("#activitysHD article").append(
						// 			'<div class="divtop"><h1 >' + v
						// 			.title +
						// 			'</h1><h2>[第' + v.id +
						// 			'号]</h2><h3>' + v.title +
						// 			'</h3><h4 >提出者:' + v.realname +
						// 			'</h4><h4 shijian>' + shijian +
						// 			'</h4></div><div class="divp">' + v
						// 			.note +
						// 			'</div><div class="no"  >活动类型：' + v
						// 			.name +
						// 			'</div><div class="no"  >限额报名人数：' +
						// 			v.maxperson +
						// 			'</div><div class="no"  >已报人数：' + v
						// 			.currentperson +
						// 			// '</div><div class="no"  >组织部门：' + v.department +
						// 			'</div><div class="no">开始时间：' +
						// 			shijian +
						// 			'</div><div class="no"  >结束时间：' +
						// 			finishshijian +
						// 			'</div><div class="no">活动地点：' + v
						// 			.place +
						// 			// '</div><div class="no">活动状态：' + v.activityState +
						// 			'</div><div class="no">参与代表：' + v
						// 			.username +
						// 			'</div><div class="fj no1">附件：<span>' +
						// 			 attachment + '<span></div>')
						// 	})
						// 	// RssApi.View.List("second_user").setLoading(true).condition(new RssDict().keyvalue({
						// 	// 	"suggestid": key
						// 	// }).keyvalue().getDict()).getJson(function(lm) {
						// 	// 	var lmr = ""
						// 	// 	$.each(lm, function(k, v) {
						// 	// 		lmr += v.realname + ",";
						// 	// 	})
						// 	// 	console.log(lmr);
						// 	// 	$('#activityHD article .fj').before('<div class="no1">联名代表：' + lmr + '</div>');
						// 	// })
						// })

					// RssApi.View.List("activities_realname").setLoading(true).condition(
					// 	new RssDict()
					// 	.keyvalue({
					// 		"userid": key
					// 	}).keyvalue().getDict()).getJson(function(lm) {
					// 	var lmr = ""
					// 	$.each(lm, function(k, v) {
					// 		lmr += v.realname + ",";
					// 	})
					// 	console.log("____lmr=",lmr);
					// 	// $('#activityHD article .fj').before('<div class="no1">参与代表：' + lmr + '</div>');
					// })

					// var dfenclosure = $("#activitysHD article .fj span").text();
					// var str = dfenclosure.split(",");
					// ////console.log(str);
					// var html = ""
					// $.each(str, function(idx, value) {
					// 	if (value != "") {
					// 		html = "<p class='pdfjs16'>" + value + "</p>"
					// 		$('#activitysHD article .fj').append(html);
					// 	}
					// })
					// $('#activitysHD article  .fj span').hide();
					// $(".fj p").off().click(function() {
					// 	//                                alert("文件路径：com.rsseasy.lvzhi.file");
					// 	var path = $(this).text();
					// 	var dz = myip + "upfile/" + path;
					// 	var pdfh5 = new Pdfh5('.pdfjs16', {
					// 		pdfurl: dz
					// 	});
					// })
				})
			}).getJson();
		}
	})
	//$("#myHD nav>a").eq(0).click();
	if (myHDnav == "1") {
		$("#myHD nav>a").eq(0).click();
		myHDnav = "0";
	}
})

function insert_specialwork_table ( json ) {
	var realname=json[0].realname
	var shijian = Date.parse(new Date()) / 1000;
	var pref = "#supspecialworkXZ";
	var obj_time = pref + " .smalltitle .date-picker";
	var obj_meetingtime = pref + " .meetingtitle .date-picker";
	var obj_session = pref + " .smalltitle .session"; //主任会议届次
	var obj_reviewclass = pref + " .marginb .select";
	var obj_place = pref + " .smalltitle .place";
	var obj_title = pref + " .smalltitle .title";
	var obj_matter= pref + " textarea";
	var obj_enclosure = pref + " .fja";
	var obj_previewleaderid = pref + " .lmr span";
	var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	
	
	var time = $( obj_time ).val();
	var meetingshijian = $( obj_meetingtime ).val();//主任会议时间
	var session = $( obj_session ).val();
	
	var reviewclass = $( obj_reviewclass ).val();
	var place = $( obj_place ).val();
	var title = $( obj_title ).val();
	var matter = $( obj_matter ).val();
	var enclosure = $( obj_enclosure ).text() ;
	var previewleaderid = $( obj_previewleaderid ).text();
	var enclosurename = $( obj_enclosurename ).val() ;
	
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	
	// console.log("_______ title=", title ) ;
	// console.log("_______ reviewclass=", reviewclass ) ;
	// console.log("_______ directormeetingnum=", session ) ;
	// console.log("_______ notice=", matter ) ;
	// console.log("_______ enclosure=", enclosure ) ;
	// console.log("_______ filename=", filename ) ;
	
	// console.log("_______ shijian=", shijian ) ;
	// console.log("_______ enclosurename=", enclosurename ) ;
	// console.log("_______ titlemeetingshijian=", meetingshijian ) ;
	// console.log("_______ previewleaderid=", previewleaderid ) ;
	// console.log("_______ realname=", realname ) ;
	
	meetingshijian = Math.round(new Date(meetingshijian) / 1000);
	
	RssApi.Edit("supervision_specialwork").setLoading(true).keyvalue({
		"title": title,
		"reviewclass": reviewclass,
		"directormeetingnum": session,
		"notice": matter,
		"enclosure": enclosure,
		"myid": RssUser.Data.myid,
		"shijian": shijian,
		"enclosurename": filename,
		"directorshijian": meetingshijian,
		"objid": previewleaderid,
		"initiator": realname,
		"state": 1,
		"lwstate": 1,
		"typeid": 1
	}).getJson(function(json) {
		console.log("+_________________ json=",json)
		if (json.id) {
			alert("提交成功");
			// $("#supspecialworkXZ .marginb input").val("");
			// $("#supspecialworkXZ .marginb select").val("");
			// $("#supspecialworkXZ .marginb .directormeetingnum").val("");
			// $("#supspecialworkXZ textarea").val("");
			// $("#supspecialworkXZ .fja").text("");
			// $("#supspecialworkXZ .lmr span").text("");
			// $("#supspecialworkXZ [mission]").val("");
			// location.href = "#supervRD";
			
			
			
			$( obj_enclosurename ).val("");
			$( obj_reviewclass ).val("");
			$( obj_enclosure ).val("");
			$( obj_session ).val("");
			$( obj_matter ).val("");
			$( obj_enclosure ).text("");
			$( obj_previewleaderid ).text("");
			$( obj_enclosurename2 ).val("");//
			location.href = "#supervRD";
			
		} else {
			alert("提交失败");
		}
	})	
}
function submitnewsolution ( obj ) {
	var alertTime = true ;
	var typeid = 9 ;//默认调研
	var lwstate = 9 ;
	var tablename = "supervision_inspection";
	
	var timetips = "请填写调研时间";
	var titletips = "请填写调研标题";
	var enclosureEmpty = "请添加调研方案";
	var pref = "#researchZX ";
	
	
	
	if ( obj.indexOf( "supervisionXZ" ) != -1 ) { //视察
		typeid = 8 ;
		lwstate = 8 ;
		pref = "#supervisionXZ ";
		timetips = "请填写视察时间";
		titletips = "请填写视察标题";
		enclosureEmpty = "请添加视察方案";
	}
	else if ( obj.indexOf( "supspecialworkXZ" ) != -1 ) {
		typeid = 1 ;
		lwstate = 1 ;
		pref = "#supspecialworkXZ";
		//timetips = "请填写视察时间";
		titletips = "请填写专项报告标题";
		enclosureEmpty = "请添加专项报告方案";	
		alertTime = false; 
		tablename = "supervision_specialwork";
	}
	else if ( obj.indexOf( "supinspectionXZ" ) != -1 ) {
		typeid = 1 ;
		lwstate = 1 ;
		pref = "#supinspectionXZ";
		timetips = "请填写执法检查时间";
		titletips = "请填写执法检查标题";
		enclosureEmpty = "请添加执法检查方案";	
		alertTime = false; 
		tablename = "supervision_enforcement";
	}
	
	var obj_time = pref + " .smalltitle .date-picker";
	// var obj_meetingtime = pref + " .meetingtitle .date-picker";
	
	
	var obj_meetingtime = pref + " .meetingtitle .date-picker";
	var obj_session = pref + " .smalltitle .session"; //主任会议届次
	var obj_reviewclass = pref + " .marginb .select";
	
	var obj_place = pref + " .smalltitle .place";
	var obj_title = pref + " .smalltitle .title";
	var obj_matter= pref + " textarea";
	var obj_enclosure = pref + " .fja";
	var obj_previewleaderid = pref + " .lmr span";
	var obj_previewLeaderRealName = pref + " [mission]";
	var obj_enclosurename = pref + " article .fj label input";
	var obj_enclosurename2 = pref + " article input";//
	
	var time = $( obj_time ).val();
	var meetingshijian = $( obj_meetingtime ).val();//主任会议时间
	var session = $( obj_session ).val();
	
	// var reviewclass = $( obj_reviewclass ).val();
	var reviewclass = $(pref + " [reviewclass]").attr("relationid");
	 reviewclass  = $( pref + " [reviewclass]").text();
	
	var place = $( obj_place ).val();
	var title = $( obj_title ).val();
	var matter = $( obj_matter ).val();
	var enclosure = $( obj_enclosure ).text() ;
	var previewleaderid = $( obj_previewleaderid ).text();
	var previewLeaderRealName = $( obj_previewLeaderRealName ).val();
	var enclosurename = $( obj_enclosurename ).val() ;
  
	var leaderpreview = $("#" + obj).find("input[type='radio'][name='ZH']:checked").val();
	
	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	var shijian = Date.parse(new Date()) / 1000;
	
	$( obj_enclosurename ).val("");
	$( obj_reviewclass ).val("");
	$( obj_enclosure ).val("");
	$( obj_place ).val("");
	$( obj_matter ).val("");
	$( obj_previewLeaderRealName ).val("");
	//$("#" + obj).find("input[type='radio'][name='ZH']:checked").val("1");
	//$("#supervisionXZ .marginb input").val("1");
	$(obj_meetingtime).val("");
	//$( obj_enclosurename2 ).val("");//
	////////////history.go(-1);					
	////////////return;
	if ( isEmpty( time ) && alertTime ) {
	    alert( timetips );
		return;
	}
	if ( isEmpty( title ) ) {
	    alert( titletips );
		return;
	}
	if ( isEmpty( enclosure ) ) {
	    alert( enclosureEmpty );
		return;
	}
	if ( leaderpreview == "2") {
		if ( isEmpty( meetingshijian ) ) {
			alert( "请选择主任会议时间" );
			return;
		}	
		meetingshijian = Math.round(new Date(meetingshijian) / 1000);
	}
	else {
		meetingshijian = inspecttime ;
	}
	
	
	
	var inspecttime = Math.round(new Date(time) / 1000);
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
		new RssDict().keyvalue({
			"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		if ( typeid == 1 ) { //听取和审议专项工作报告
			insert_specialwork_table ( json );
			return ;
		}
		var realname=json[0].realname
		console.log(realname)
		
		RssApi.Edit( tablename ).setLoading(true).keyvalue({
		"title": title,
		"lwstate": lwstate,
		"meetingshijian": meetingshijian,
		"inspecttime": inspecttime,
		"reviewclass": reviewclass,
		"enclosure": enclosure,
		"enclosurename": filename,
		"myid": RssUser.Data.myid ,
		"shijian": shijian,
		"state": 1,
		"matter": matter,
		"typeid": typeid,
		"directormeetingnum": session ,
		"initiator": realname,
		"place": place,
		"taskDone": 0 ,
		"leaderpreview": leaderpreview,
		"previewleadername": previewleaderid,
		"previewLeaderRealName": previewLeaderRealName,
		"needsubmitmeeting": 0,
		"readState": 1
			
			
		}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");
					// $("#researchZX .marginb input").val("");
					// $("#researchZX .marginb select").val("");
					// $("#researchZX .marginb .department").val("");
					// $("#researchZX .marginb .place").val("");
					// $("#researchZX textarea").val("");
					// $("#researchZX .fja").text("");
					// $("#researchZX .lmr span").text("");
					// $("#researchZX [mission]").val("");
					// location.href = "#supervRD";
					
					$( obj_enclosurename ).val("");
					$( obj_reviewclass ).val("");
					$( obj_enclosure ).val("");
					$( obj_place ).val("");
					$( obj_matter ).val("");
					$( obj_previewleaderid ).text("");
					$( obj_previewLeaderRealName ).val("");
					$("#" + obj).find("input[type='radio'][name='ZH']:checked").val("1");
					$(obj_meetingtime).val("");
					$( obj_enclosurename2 ).val("");//
					// $("#researchZX [mission]").val("");
					//location.href = "#supervRD";
					//location.href = pref ;
					history.go(-1);					
				} else {
					alert("提交失败");
				}
			})
		}).getJson();
}
	
//新增调研方案
$("#researchZX").load(function() {
	
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
	reviewclass = {};
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
			json) {
			$.each(json, function(k, v) {
				reviewclass[v.id] = v.name
				$("#researchZX [reviewclass]").attr("relationid", v.id)
				$("#researchZX [reviewclass]").text(v.name)
			})
			$("#researchZX [reviewclass]").off("click").click(function() {
				zzc($(this), reviewclass);
			})
		})
	
	
	$("#researchZX .lmr").off().click(function() {
		addmember ( "previewleader_researchZX" );
		//return;
		
		// var span = $("#researchZX .span").text().split(",");
		// location.href = "#selectmember"
		// if (arry.indexOf("selectmember") == "-1") {
		// 	$("#selectmember ul li").eq(0).siblings().remove();
		// 	arry.push("selectmember")
		// } else {
		// 	$("#selectmember ul li").remove();
		// }
		// $("#selectmember article .dbta").text(realname);
		// faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "10000").condition(
		// 	new RssDict().keyvalue({
		// 		// "mission": missions,
		// 		"myid": "{notin~" + RssUser.Data.myid + "}"
		// 	}).getDict()).setFlushUI(function(jsona, append) {
		// 	let html = "";
		// 	var flag = false;
		// 	$.each(jsona, function(k, v) {
		// 		for (var i = 0; i < span.length; i++) {
		// 			if (v.myid == span[i]) {
		// 				flag = true;
		// 				break;
		// 			}
		// 		}
		// 		html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
		// 			' name="myid"  myid="' + v.myid +
		// 			'" realname="' + v.realname + '" /><em>' + v.realname +
		// 			'</em><span class="dh">' + v.telphone +
		// 			'</span></li>';
		// 		flag = false;
		// 	})
		// 	$("#selectmember article ul").html(html);
		// 	//除了表头（第一行）以外所有的行添加click事件.
		// 	$("#selectmember ul>li").slice(0).click(function() {
		// 		// 切换样式
		// 		$(this).toggleClass("tr_active");
		// 		// 找到checkbox对象
		// 		var chks = $("input[type='checkbox']", this);
		// 		var tag = $(this).attr("tag");
		// 		if (tag == "selected") {
		// 			// 之前已选中，设置为未选中
		// 			$(this).attr("tag", "");
		// 			chks.prop("checked", false);
		// 		} else {
		// 			// 之前未选中，设置为选中
		// 			$(this).attr("tag", "selected");
		// 			chks.prop("checked", true);
		// 		}
		// 	});
		// 	$("#selectmember article .submitName").off().click(function() {
		// 		var id_array = new Array();
		// 		var name_array = new Array();
		// 		$('input[name="myid"]:checked').each(function() {
		// 			id_array.push($(this).attr("myid")); //向数组中添加元素  
		// 			name_array.push($($(this)).attr("realname")); //向数组中添加元素  
		// 		});
		// 		var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
		// 		var namestr = name_array.join(',');
		// 		location.href = "#researchZX"
		// 		$("#researchZX span").text(idstr)
		// 		$("#researchZX [mission]").val(namestr);
		// 	});
		// }).getJson();
	})

	$("#researchZX input[type='radio'][name='ZH']").off().click(function() {
		var value = $(this).val();
		if (value == 1) {
			$("#previewleader").show();
			// $("#directorUl").hide();
			
			$("#meetingshijian").hide();
			$("#directormeetingnum").hide();
			
		} else {
			$("#previewleader").hide();
			// $("#directorUl").show();
			
			$("#meetingshijian").show();
			$("#directormeetingnum").show();
		}
	})
   
	$("#researchZX .submitbutton").off().click(function() {
		submitnewsolution ("researchZX");

	// 	//将前端输入的数据放到k1对象中
	// 	var title = $("#researchZX .marginb input").val();
	// 	var reviewclass = $("#researchZX .marginb .select").val();
	// 	var place = $("#researchZX .marginb .place").val();
	// 	var matter = $("#researchZX textarea").val();
	// 	var enclosure = $("#researchZX .fja").text() + ",";
	// 	//参与人id
	// 	var userid = $("#researchZX .lmr span").text();
	// 	var enclosurename = $("#researchZX article .fj label input").val() + ",";
	// 	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	// 	var shijian = Date.parse(new Date()) / 1000;

	// 	//活动开始时间
	// 	if ($("#researchZX .formdy .marginb .month").val() < 10) {
	// 		var dy_month = 0 + $("#researchZX .formdy .marginb .month").val()
	// 	} else {
	// 		var dy_month = $("#researchZX .formdy .marginb .month").val()
	// 	}
	// 	if ($("#researchZX .formdy .marginb .day").val() < 10) {
	// 		var dy_day = 0 + $("#researchZX .formdy .marginb .day").val()
	// 	} else {
	// 		var dy_day = $("#researchZX .formdy .marginb .day").val()
	// 	}
	// 	var HDbeginshijian = $("#researchZX .formdy .marginb .year").val() + "-" + dy_month + "-" +
	// 		dy_day;
	// 	var inspecttime = Math.round(new Date(HDbeginshijian) / 1000);

	// 	// var k1 = {
	// 	// 	"title": title,
	// 	// 	"reviewclass": reviewclass,
	// 	// 	"place": place,
	// 	// 	"matter": matter,
	// 	// 	"enclosure": enclosure,
	// 	// 	"myid": RssUser.Data.myid,
	// 	// 	"shijian": shijian,
	// 	// 	"enclosurename": filename,
	// 	// 	"inspecttime": inspecttime,
	// 	// 	"previewleadername": userid,
	// 	// 	"state": 1,
	// 	// 	"typeid": 9,
	// 	// 	"lwstate": 9
	// 	// }
	// 	// console.log(k1)
	// 	if (title != "" && matter != "") {
	// 		//标题和问题不能为空
	// 		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
	// 			new RssDict().keyvalue({
	// 				"myid": RssUser.Data.myid
	// 		}).getDict()).setFlushUI(function(json, append) {
	// 			var realname=json[0].realname
	// 			console.log(realname)
	// 			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue({
	// 				"title": title,
	// 				"reviewclass": reviewclass,
	// 				"place": place,
	// 				"notice": matter,
	// 				"enclosure": enclosure,
	// 				"myid": RssUser.Data.myid,
	// 				"shijian": shijian,
	// 				"enclosurename": filename,
	// 				"inspecttime": inspecttime,
	// 				"previewleadername": userid,
	// 				"state": 1,
	// 				"typeid": 9,
	// 				"lwstate": 9,
	// 				"initiator": realname,
	// 			}).getJson(function(json) {
	// 				console.log(json)
	// 				if (json.id) {
	// 					alert("提交成功");
	// 					$("#researchZX .marginb input").val("");
	// 					$("#researchZX .marginb select").val("");
	// 					$("#researchZX .marginb .department").val("");
	// 					$("#researchZX .marginb .place").val("");
	// 					$("#researchZX textarea").val("");
	// 					$("#researchZX .fja").text("");
	// 					$("#researchZX .lmr span").text("");
	// 					$("#researchZX [mission]").val("");
	// 					location.href = "#supervRD";
	// 				} else {
	// 					alert("提交失败");
	// 				}
	// 			})
	// 		}).getJson();
	// 	} else {
	// 		alert("活动的标题和内容不能为空！");
	// 	}
	})
})
//判断是否时我的方案
function ismysolution( v ){
	var result = 0 ;
	var uid = RssUser.Data.myid ;
	if ( v.myid == uid ) {
		console.log( "_________ v.myid == uid ")
		result = 1 ;
	}
	if ( !isEmpty( v.objid ) ) {
		if ( v.objid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.committeeobjid ) ) {
		if ( v.committeeobjid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.parttimember ) ) {
		if ( v.parttimember .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	
	if ( !isEmpty( v.company ) ) {
		if ( v.company .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	
	return result ;
}


function filljusticsdata( v , type ) {
	var append_obj = "#" + type + " ul";
	var href_obj = "#see"+ type ;
	var state = "状态: "  ;
	if ( v.state == 0 ) {
		state += "征集中"
	}
	else {
		state += "征集结束"
	}
	var shijian  = new Date(parseInt(v.shijian) * 1000).toString("yyyy-MM-dd hh:mm");
	var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + "提出者: " + v.realname + '</p>' + '<p>'  + state  + '</p>'+
		// '<p>'  + "时间: " + shijian  + '</p>'+
		'<div class="lifoot" id=' + v.id +
		' id=' + v.id +
		'>'
		if ( type =="judicsup" ) {
		    liStr += '<a href="#seejudicsup" class="see" onclick="seejusticsDetail('+v.id+');"><span>查看详情</span></a><a href="#ansjudicsup" class="ans" ><span>提供线索</span></a></div></li>';	
		
		}
		else if ( type == "supspecialwork" ) {
			liStr += '<a href="#seesupspecialwork" class="see" onclick="seeSpecialWorkSolutionDetail('+v.id+');"><span>查看详情</span></a><a href="#submitsolution" class="ans" onclick="submitInvestigationsolution('+v.id+');"><span>提交方案</span></a></div></li>';
			
		}
		// $("#myresearch ul").append(liStr);
		// $("#supspecialwork ul").append(liStr);
		
		$(append_obj).append(liStr);
		//unreadmsg();
		//unreadmsg1();
}



function seejusticsDetail ( key ){
	var obj="seejudicsup";
	viewjusticsDetail( obj , key , 1 );
	$("#seejudicsup .hisback").click(function() {
		location.href = "#judicsup";
	});			
}
function provideclue ( key ){
	var obj = "ansjudicsup";
	showprovidecluelayout( obj ,key );
	$("#ansjudicsup .hisback").click(function() {
		location.href = "#judicsup";
	});	
	

		
}
function seeSpecialWorkSolutionDetail( key ) {
	console.log(" ___________  查看我的方案详情 key=", key ) ;
	var obj = "seesupspecialwork";
	viewSpecialworkDetail( obj ,key );
	$("#supspecialwork .hisback").click(function() {
		// location.href = "#supspecialwork";
		history.go(-1);
	});					
}


$("a[name='submitsolution']").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#solutionId").val(key);
			submit_append( 8 );					
		})
//我的调研方案
$("#myresearch_11111").load(function() {
	if (arry.indexOf("myresearch") == "-1") {
		$("#myresearch ul li").eq(0).siblings().remove();
		arry.push("myresearch")
	} else {
		$("#myresearch ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		// "myid": RssUser.Data.myid,
		"typeid": "9"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		
		console.log("_________ li.js myresearch load")
		
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			var initiator = "提出者: " + v.initiator ;
			var mstate = v.state ;
			//var state = "办理进度: " + getprogressState( v ) ;
			//v.state = state ;
			v.initiator = initiator ;
			
			if ( ismysolution ( v ) ) {
			    json2.push( v );
			}
			
			$("#mstate").val( mstate );
			
			
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
		$.each(json2, async function(k, v) {
			fillmysolutiondata ( v , "myresearch" );				 
		})
		return;
		
		
		$("#myresearch ul").mapview(json2, {}, append)
		//查看
		$("#myresearch .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seemyresearch";
			
			viewSupervisionDetail ( obj , key ) ;
			// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seemyresearch article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		var attachment = v.enclosurename;
			// 		if ( "undefined".indexOf(attachment) != -1 ) {
			// 			attachment = "无";
			// 		}
			// 		$("#seemyresearch article").append(
			// 			'<div class="divtop"><h1>' + v.title +
			// 			// '</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			// '</h3><h4>方案制定人:' + v.initiator +
						
			// 			'</h1>' +
			// 			'<h4>方案制定人:' + v.initiator +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div> <div class="divp">' + v.note +
			// 			'</div><div class="no">视察调研类别：' + v.reviewclass +
			// 			'</div><div class="no">视察调研地点：' + v.place +
			// 			'</div><div class="no">主任会议届次：' + v
			// 			.directormeetingnum +
			// 			'</div><div class="fj no">附件：<span>' + attachment +
			// 			'<span></div>')
			// 	})
			// })
		})
		
		
		$("a[name='submitsolution']").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#solutionId").val(key);
			submit_append ( 9 );
		})
	}).getJson();
})


/*区分搜索状态*/
var selectmember_search_state = 0 ;
var local_temp_obj = "committeeMember";
function select_member ( jsona , obj ) {
	local_temp_obj =  obj;
	/*开始进入隐藏删除按钮*/
	// $("#selectmember ul li").eq(0).siblings().remove();
	if ( selectmember_search_state == 0 ) {
		$("#selectmember_delete_btn").hide();
	}
	else {
		$("#selectmember_delete_btn").show();
	}
	
    var ids = "#congressDeputy span";
	var names = "#congressDeputy [mission]";
	let html = "";
	var flag = false;
	
	var href = "#submitsolution" ;
	console.log(" ____________ obj =",obj)
	if ( obj.indexOf( "committeeMember" ) != -1 ) {
		
		ids = "#committeeMember span";
		names = "#committeeMember [mission]";
	}
	else if ( obj.indexOf( "addvotelayout" ) != -1 ) {
		
		ids = "#vote_members span";
		names = "#vote_members [mission]";
	}
	else if ( obj.indexOf( "supervisionNewtask" ) != -1 ) {
		//新增界面
		if ( obj.indexOf("co-committeemember") != -1 ) { //特定问题调查 常委会联名人员
			ids = "#supervisionNewtask .smalltitle1 .specificissue_span";
			names = "#supervisionNewtask [specificissue_mission]";
			href = "#supervisionNewtask";			
		}
		else if ( obj.indexOf("delegate") != -1 ) { //人大代表
			ids = "#supervisionNewtask  .smalltitle .delegate_span";
			names = "#supervisionNewtask [delegate_mission]";
			href = "#supervisionNewtask";			
		}
		else if ( obj.indexOf("othermember") != -1 ) { //其他人员
			ids = "#supervisionNewtask  .smalltitle .other_span";
			names = "#supervisionNewtask [other_mission]";
			href = "#supervisionNewtask";			
		}
		else {
			ids = "#supervisionNewtask .smalltitle .committeemember_span";
			
			names = "#supervisionNewtask [committeemember_mission]";
			href = "#supervisionNewtask";		
		}
		// ids = "#supervisionNewtask specific_span";
		// names = "#supervisionNewtask [specific_mission]";
		// href = "#supervisionNewtask";
	}
	
	else if ( obj.indexOf( "submitmeetingView" ) != -1 ) {
		//执法检查，提交主任会议
		if ( obj.indexOf("delegate") != -1 ) { //人大代表
			ids = "#submitdirectormeetingView  .smalltitle .delegate_span";
			names = "#submitdirectormeetingView [delegate_mission]";
			href = "#submitdirectormeetingView";			
		}
		else if ( obj.indexOf("othermember") != -1 ) { //其他人员
			ids = "#submitdirectormeetingView  .smalltitle .other_span";
			names = "#submitdirectormeetingView [other_mission]";
			href = "#submitdirectormeetingView";			
		}
		else {
			ids = "#submitdirectormeetingView .smalltitle .committeemember_span";
			
			names = "#submitdirectormeetingView [committeemember_mission]";
			href = "#submitdirectormeetingView";		
		}
	}
	else if ( obj.indexOf( "previewleader" ) != -1 ) {
		// 默认新增调研
		ids = "#researchZX span";
		names = "#researchZX [mission]";
		href = "#researchZX";
		if ( obj.indexOf( "supervisionXZ" ) != -1 ) {
			//新增视察
			ids = "#supervisionXZ span";
			names = "#supervisionXZ [mission]";
			href = "#supervisionXZ";
		}
		else if (  obj.indexOf( "supinspectionXZ" ) != -1 ) {
			//新增执法检查
			ids = "#supinspectionXZ span";
			names = "#supinspectionXZ [mission]";
			href = "#supinspectionXZ";
		}
		else if (  obj.indexOf( "supervisionNewtask" ) != -1 ) {
			//新增界面
			ids = "#supervisionNewtask span";
			names = "#supervisionNewtask [mission]";
			href = "#supervisionNewtask";
		}
		
	}
	else if ( obj.indexOf( "evaluationSettingLayout" ) != -1 ) {
		if ( obj.indexOf( "evaluationSettingLayout1" ) != -1) { //常委会成员
			ids = "#evaluationSettingLayout .committeetitle span";
			names = "#evaluationSettingLayout .committeetitle [mission]";
		}
		else if ( obj.indexOf( "evaluationSettingLayout2" ) != -1) { //人大代表
			ids = "#evaluationSettingLayout .delegatetitle span";
			names = "#evaluationSettingLayout .delegatetitle [mission]";
		}
		else if ( obj.indexOf( "evaluationSettingLayout3" ) != -1) { //其他人员
			ids = "#evaluationSettingLayout .othertitle span";
			names = "#evaluationSettingLayout .othertitle [mission]";
		}
	}
	else if ( obj.indexOf( "otherMember" ) != -1 ) {
		ids = "#otherMember span";
		names = "#otherMember [mission]";
	}
	else if ( obj.indexOf( "unitName" ) != -1 ) {
		
		ids = "#unitName span";
		names = "#unitName [mission]";
	}
	else if ( obj.indexOf( "supspecialworkXZ" ) != -1 ) {
		
		ids = "#supspecialworkXZ span";
		names = "#supspecialworkXZ [mission]";
		href = "#supspecialworkXZ";
	}
	else if ( obj.indexOf( "uploadActivity" ) != -1 ) {
		
		ids = "#uploadActivity .lmr span";
		names = "#uploadActivity [mission]";
		href = "#uploadActivity";
	}
	else if ( obj.indexOf( "initiateHD" ) != -1 ) {
		
		ids = "#initiateHD .lmr span";
		names = "#initiateHD [mission]";
		href = "#initiateHD";
	}
	
	
	
	if (jsona.length < pagesize ) {
		$('.nodata').hide();
	} else {
		$('.nodata').show();
	}
	if (jsona.length > 0 ) {
		$.each(jsona, function(k, v) {
			html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
				' name="myid"  myid="' + v.myid +
				'" realname="' + v.realname + '" />'  + "  " + v.realname
			 '</li>';	
		})
		// html +="<a class='select_ok'>确定</a>"
		$("#selectmember article ul").html(html);
		
		$('.nosolutions').hide();
		$("#select_ok").show();
	} else {
		$('.nosolutions').show();
		$("#select_ok").hide();
	}
	
	
	
	
	//除了表头（第一行）以外所有的行添加click事件.
	$("#selectmember ul>li").slice(0).click(function() {
		// 切换样式
		$(this).toggleClass("tr_active");
		// 找到checkbox对象
		var chks = $("input[type='checkbox']", this);
		var tag = $(this).attr("tag");
		if (tag == "selected") {
			// 之前已选中，设置为未选中
			$(this).attr("tag", "");
			chks.prop("checked", false);
		} else {
			// 之前未选中，设置为选中
			$(this).attr("tag", "selected");
			chks.prop("checked", true);
		}
	});
	$("#selectmember article .select_ok").off().click(function() {
		var id_array = new Array();
		var name_array = new Array();
		
		
		
		$('input[name="myid"]:checked').each(function() {
			id_array.push($(this).attr("myid")); //向数组中添加元素  
			name_array.push($($(this)).attr("realname")); //向数组中添加元素  
		});
		var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
		var namestr = name_array.join(',');
		// location.href = href ;
		
		
		$( ids ).text(idstr)
		$(names).val(namestr);
		// $( names ).text(namestr)
		console.log(" ____________ ids =",ids)
		console.log(" ____________ names =",names)
		
		
		console.log(" ____________ idstr =",idstr)
		console.log(" ____________ namestr =",namestr)
		
		console.log(" ____________ idstr1 =",$( ids ).text())
		console.log(" ____________ namestr1 =",$(names).val())
		
		history.go(-1);
		$("#selectmember .search input").val("");
		// $(names).html(namestr);
	});
	
	$("#selectmember .hisback").click(function() {
		$("#selectmember .search input").val("");
		
	});
	
	// if ($("#selectmember .search input").val() == "" || $("#zhihuiJY .search input").val() == undefined) {
	// 	$("#selectmember .search button").click();
	// }
	
	$("#selectmember .search button").off("click").click(function() {
		
		console.log(" ___________ selectmember search click")
		$("#select_ok").hide();
		
		if ( selectmember_search_state == 0 ) {
			$("#selectmember_delete_btn").show();
			$("#selectmember_search_btn").hide();
			selectmember_search_state = 1 ;
		}
		else {
			selectmember_search_state = 0 ;
			$("#selectmember_delete_btn").hide();
			$("#selectmember_search_btn").show();
			$("#selectmember .search input").val("");
		}
		
		var key = $("#selectmember .search input").val();
		var likeall = {};
		if (key == undefined || key == "") {
	
		} else {
			likeall = {
				'realname': "{likeall~" + key + "}"
			};
		}
		
		$("#selectmember ul li").remove();
		
		RssApi.Details("sugsessnum1").condition(new RssDict().keyvalue({
			"draft": "2",
			"sessionid": 30
		}).getDict()).getJson(function(data) {
			$("#selectmember ul li").remove();
			refreshListData(likeall);
			
			
		})
		
		
		
	})
	
	
	
	
	
	
}




function refreshListData( likeall ) {
	// var flag = false;
	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10").condition(
	new RssDict().keyvalue({
		// "isdelegate": 1 ,
	}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
	
	select_member( json , local_temp_obj  )
	}).getJson();
}



var pagesize = 300;
//方案编辑界面选择参与人员
function addmember ( type ) {
	var missions = "",
		realname = "";
	location.href = "#selectmember"
	if (arry.indexOf("selectmember") == "-1") {
		$("#selectmember ul li").eq(0).siblings().remove();
		arry.push("selectmember")
	} else {
		$("#selectmember ul li").remove();
	}
	// $("#selectmember article .dbta").text(realname);
	//$("#representativePersonnel").html( membertitle );
	
	if ( type.indexOf("committeeMember") != -1 ) {
		membertitle ="常委会成员";
		pagesize = 100;
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", pagesize +"").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
			select_member ( jsona , "committeeMember" ) ;	
		}).getJson();
	}
	if ( type.indexOf("previewleader") != -1 ) {
		membertitle ="预审人员";
		pagesize = 100;
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", pagesize +"").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
			select_member ( jsona , type ) ;	
			
		}).getJson();
	}
	else if ( type.indexOf("addvotelayout") != -1 ) {
		membertitle ="投票人员";
		pagesize = 200;
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", pagesize +"").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
			select_member ( jsona , type ) ;	
			
		}).getJson();
	}
	else if ( type.indexOf("supervisionNewtask") != -1 || type.indexOf("submitmeetingView") != -1 ) { //新增界面
		membertitle ="预审人员";
		pagesize = 100;
		var tablename = "user";
		// var condition = "isdelegate";
		// var condition_value = 1 ;
		var condition = {
			"isdelegate": 1
		}
		if ( type.indexOf("committeemember") != -1 ) {
			membertitle ="常委会成员";	
			tablename = "committee_member";
			// condition = "powergroupid";		
			// condition_value = 5 ;
			condition = {
				"powergroupid": 5
			}
		}
		else if ( type.indexOf("delegate") != -1 ) {
			membertitle ="人大代表";		
			pagesize = 300;
		}
		
		else  {
			membertitle ="其他人员";		
			pagesize = 50;
			tablename = "parttime_committee_member";
			// condition = "powergroupid";
			// condition_value = 5 ;
			condition = {
				"powergroupid": 5
			}
		}
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List( tablename ).setLoading(true).keyvalue("pagesize", pagesize +"" ).condition(
			new RssDict().keyvalue(
			condition
			).getDict()).setFlushUI(function(jsona, append) {
			select_member ( jsona , type ) ;	
			
		}).getJson();
		
		
		// faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "100").condition(
		// 	new RssDict().keyvalue({
		// 		"powergroupid": 5
		// 	}).getDict()).setFlushUI(function(jsona, append) {
		// 	select_member ( jsona , type ) ;	
			
		// }).getJson();
		
	}
	else if ( type.indexOf("congressDeputy") != -1 ) {
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", pagesize +"").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "congressDeputy" ) ;	
		
		}).getJson();
	}
	else if ( type.indexOf("supspecialworkXZ") != -1 ) { //专项报告新增
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", pagesize+"").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "supspecialworkXZ" ) ;	
		
		}).getJson();
	}
	else if ( type.indexOf("uploadActivity") != -1 || type.indexOf("initiateHD") != -1  ) { //上传履职情况  //发起活动
		membertitle ="人大代表";
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", pagesize + "").condition(
			new RssDict().keyvalue({
				"isdelegate": 1 ,
			}).getDict()).setFlushUI(function(json, append) {
					
			select_member ( json , type ) ;
		
		}).getJson();
	}
	
	
	else if ( type.indexOf("otherMember") != -1 ) {
		membertitle ="其他人员";
		pagesize = 50 ;
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.Table.List("parttime_committee_member").setLoading(true).keyvalue("pagesize", pagesize + "").condition(
			new RssDict().keyvalue({
				// "mission": missions,
				// "myid": "{notin~" + RssUser.Data.myid + "}"
				"powergroupid": 5
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "otherMember" ) ;		
		}).getJson();
	}
	else if ( type.indexOf("unitName") != -1 ) {
		membertitle ="单位列表";
		pagesize = 100 ;
		$("#representativePersonnel").html( membertitle );
		faqsajax = RssApi.View.List("user_delegation").setLoading(true).keyvalue("pagesize", pagesize+"").condition(
			new RssDict().keyvalue({
			 "state": 3
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "unitName" ) ;	
		}).getJson();
	}
}


$("#committeeMember").off().click(function() {
	var missions = "",
		realname = "";
	// RssApi.Table.List("user").condition(new RssDict().keyvalue({
	// 	"myid": RssUser.Data.myid
	// }).getDict()).getJson(function(jsonn) {
	// 	$.each(jsonn, function(k, v) {
	// 		missions = v.mission;
	// 	})
	// })
	var span = $(this).find(".span").text().split(",");
		//$("#suggestsub .lmr span").empty();
		location.href = "#selectmember"
		if (arry.indexOf("selectmember") == "-1") {
			$("#selectmember ul li").eq(0).siblings().remove();
			arry.push("selectmember")
		} else {
			$("#selectmember ul li").remove();
		}
		$("#selectmember article .dbta").text(realname);
		$("#representativePersonnel").html("常委会成员");
		pagesize = 100 ;
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", pagesize +"").condition(
			new RssDict().keyvalue({
				"powergroupid": 5
				// "myid": "{notin~" + RssUser.Data.myid + "}"
			}).getDict()).setFlushUI(function(jsona, append) {
				
			select_member ( jsona , "committeeMember" ) ;	
			// let html = "";
			// var flag = false;
			// $.each(jsona, function(k, v) {
			// 	for (var i = 0; i < span.length; i++) {
			// 		if (v.myid == span[i]) {
			// 			flag = true;
			// 			break;
			// 		}
			// 	}
			// 	html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
			// 		' name="myid"  myid="' + v.myid +
			// 		'" realname="' + v.realname + '" /><em>' + v.realname +
			// 		'</em><span class="dh">' + v.telphone +
			// 		'</span></li>';
			// 	flag = false;
			// })
			// $("#dbt article ul").html(html);
			// //除了表头（第一行）以外所有的行添加click事件.
			// $("#dbt ul>li").slice(0).click(function() {
			// 	// 切换样式
			// 	$(this).toggleClass("tr_active");
			// 	// 找到checkbox对象
			// 	var chks = $("input[type='checkbox']", this);
			// 	var tag = $(this).attr("tag");
			// 	if (tag == "selected") {
			// 		// 之前已选中，设置为未选中
			// 		$(this).attr("tag", "");
			// 		chks.prop("checked", false);
			// 	} else {
			// 		// 之前未选中，设置为选中
			// 		$(this).attr("tag", "selected");
			// 		chks.prop("checked", true);
			// 	}
			// });
			// $("#dbt article .submitName").off().click(function() {
			// 	var id_array = new Array();
			// 	var name_array = new Array();
			// 	$('input[name="myid"]:checked').each(function() {
			// 		id_array.push($(this).attr("myid")); //向数组中添加元素  
			// 		name_array.push($($(this)).attr("realname")); //向数组中添加元素  
			// 	});
			// 	var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
			// 	var namestr = name_array.join(',');
			// 	location.href = "#submitsolution"
			// 	$("#committeeMember span").text(idstr)
			// 	$("#committeeMember [mission]").val(namestr);
			// });
			
		}).getJson();
})

// $("#congressDeputy").off().click(function() {
// 	var missions = "",
// 		realname = "";
// 	var span = $(this).find(".span").text().split(",");
// 		location.href = "#selectmember"
// 		if (arry.indexOf("selectmember") == "-1") {
// 			$("#selectmember ul li").eq(0).siblings().remove();
// 			arry.push("selectmember")
// 		} else {
// 			$("#selectmember ul li").remove();
// 		}
// 	    $("#selectmember article .dbta").text(realname);
// 	    $("#representativePersonnel").html("人大代表");
// 		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10").condition(
// 			new RssDict().keyvalue({
// 				"isdelegate": 1 ,
// 				// "mission": missions,
// 				// "myid": "{notin~" + RssUser.Data.myid + "}"
// 			}).getDict()).setFlushUI(function(jsona, append) {
				
// 			select_member ( jsona , "congressDeputy" ) ;	

// 		}).getJson();
	
// })

// $("#otherMember").off().click(function() {
// 	var missions = "",
// 		realname = "";	
// 	var span = $(this).find(".span").text().split(",");
// 		//$("#suggestsub .lmr span").empty();
// 		location.href = "#selectmember"
// 		if (arry.indexOf("selectmember") == "-1") {
// 			$("#selectmember ul li").eq(0).siblings().remove();
// 			arry.push("dbt")
// 		} else {
// 			$("#selectmember ul li").remove();
// 		}
// 		$("#selectmember article .dbta").text(realname);
// 		$("#representativePersonnel").html("其他人员");
// 		faqsajax = RssApi.Table.List("parttime_committee_member").setLoading(true).keyvalue("pagesize", "50").condition(
// 			new RssDict().keyvalue({
// 				// "mission": missions,
// 				// "myid": "{notin~" + RssUser.Data.myid + "}"
// 				"powergroupid": 5
// 			}).getDict()).setFlushUI(function(jsona, append) {
				
// 			select_member ( jsona , "otherMember" ) ;		
// 		}).getJson();
// })

// $("#unitName").off().click(function() {
// 	var missions = "",
// 		realname = "";
// 	var span = $(this).find(".span").text().split(",");
// 		//$("#suggestsub .lmr span").empty();
// 		location.href = "#selectmember"
// 		if (arry.indexOf("selectmember") == "-1") {
// 			$("#select_member ul li").eq(0).siblings().remove();
// 			arry.push("selectmember")
// 		} else {
// 			$("#selectmember ul li").remove();
// 		}
// 		$("#selectmember article .dbta").text(realname);
// 		$("#representativePersonnel").html("单位列表");
// 		faqsajax = RssApi.View.List("user_delegation").setLoading(true).keyvalue("pagesize", "100").condition(
// 			new RssDict().keyvalue({
// 				// "mission": missions,
// 				// "myid": "{notin~" + RssUser.Data.myid + "}"
// 			 "state": 3
// 			}).getDict()).setFlushUI(function(jsona, append) {
				
// 			select_member ( jsona , "unitName" ) ;	
// 		}).getJson();
// })


//承办调研报告
$("#researchCB").load(function() {
	if (arry.indexOf("researchCB") == "-1") {
		$("#researchCB ul li").eq(0).siblings().remove();
		arry.push("researchCB")
	} else {
		$("#researchCB ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"state": "1",
		"previewleadername": RssUser.Data.myid,
		"typeid": "9"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		$("#researchCB ul").mapview(json, {}, append)
		//查看
		$("#researchCB .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeresearchCB article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"inspecttime": function(val) {
						return inspecttime = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seeresearchCB article").append(
						'<div class="divtop"><h1 >' + v.title +
						// '</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
						// '</h3><h4 >方案制定人:' + v.initiator +
						
						'</h1>'+
						'<h4 >方案制定人:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="divp">' + v.notice +
						'</div><div class="no">视察主题：' + v.reviewclass +
						'</div><div class="no">方案制定单位：' + v.initiator +
						'</div><div class="no">调研地点：' + v.place +
						'</div><div class="no">调研时间：' + inspecttime +
						'</div><div class="fj no">调研方案：<span>' + v
						.enclosure + '<span></div>'
					)
				})
			})
		})

		//审阅
		$("#researchCB .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			var myid = $("#supervreport .ans").attr("myid");
			$("#ansresearchCB .normalbutton").off().click(function() {
				var isagree = $("#ansresearchCB .marginb form input:radio:checked")
					.val();
				var notice = $("#ansresearchCB textarea").val();
				if (isagree == "1") {
					var state = "4"
				} else if (isagree == "2") {
					var state = "5"
				}
				//同意状态是4  不同意状态是5
				var k1 = {
					"state": state,
					"matter": notice
				};
				RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key,
						"myid": myid
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("审阅成功");
							$("#ansresearchCB ansresearchCB").val("");
							location.href = "#supervRD";
						} else {
							alert("审阅失败");
						}
					})
			})
		})
	}).getJson();
})

//预审的调研
$("#researchYS").load(function() {
	$("#researchYS nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("researchYS") == "-1") {
			$("#researchYS ul li").eq(0).siblings().remove();
			arry.push("researchYS")
		} else {
			$("#researchYS ul li").remove();
		}
		if ($(this).index() == "0") {
			var state = $("#researchYS .span").attr("state");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"state": "1",
					"typeid": "9",
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				// if (json.length != "10") {
				if ( json.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if ( json.length  == 0 ) {
					$('.nosolutions').show();
				} else {
					$('.nosolutions').hide();
				}
				
				$("#researchYS ul").mapview(json, {}, append)
				$("#researchYS .ans").show();

				//查看
				$("#researchYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					
					var obj = "seeresearchYS";
					viewSupervisionDetail ( obj , key ) ;
					// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(
					// 	true).condition(
					// 	new RssDict().keyvalue({
					// 		"id": key
					// 	}).getDict()).getJson(function(json) {
					// 	console.log(json)
					// 	var shijian = ""
					// 	$("#seeresearchYS article").mapview(json, {
					// 		"shijian": function(val) {
					// 			return shijian = new Date(parseInt(
					// 					val) * 1000)
					// 				.toString("yyyy-MM-dd hh:mm");
					// 		},
					// 		"inspecttime": function(val) {
					// 			return inspecttime = new Date(
					// 					parseInt(val) * 1000)
					// 				.toString("yyyy-MM-dd hh:mm");
					// 		}
					// 	})
					// 	$.each(json, function(k, v) {
					// 		$("#seeresearchYS article").append(
					// 			'<div class="divtop"><h1 >' + v
					// 			.title +
					// 			'</h1><h2>[第' + v.id +
					// 			'号]</h2><h3>' + v.title +
					// 			'</h3><h4 >方案制定人:' + v.initiator +
					// 			'</h4><h4 shijian>' + shijian +
					// 			'</h4></div><div class="divp">' + v
					// 			.notice +
					// 			'</div><div class="no">视察主题：' + v
					// 			.reviewclass +
					// 			'</div><div class="no">方案制定单位：' + v
					// 			.initiator +
					// 			'</div><div class="no">调研地点：' + v
					// 			.place +
					// 			'</div><div class="no">调研时间：' +
					// 			inspecttime +
					// 			'</div><div class="fj no">调研方案：<span>' +
					// 			v
					// 			.enclosure + '<span></div>'
					// 		)
					// 	})
					// })
				})

				//审阅
				$("#researchYS .ans").off().click(function() {
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					// var state = $(this).children().attr("state");
					$("#ansresearchYS .normalbutton").off().click(function() {
						// if(state == "1"){
						var isagree = $(
								"#ansresearchYS .marginb form input:radio:checked"
							)
							.val();
						var notice = $("#ansresearchYS textarea").val();
						if (isagree == "1") {
							var state = "2"
						} else if (isagree == "2") {
							var state = "5"
						}
						//同意状态是4  不同意状态是5
						var k1 = {
							"state": state,
							"readState": 2,
							"previewopinion": notice
						};
						RssApi.Edit("supervision_inspection").setLoading(true)
							.keyvalue(k1)
							.keyvalue({
								"id": key,
								"myid": myid
							}).getJson(function(json) {
								console.log(json)
								if (json.id) {
									alert("审阅成功");
									$("#ansresearchYS ansresearchYS").val(
										"");
									location.href = "#supervRD";
									//unreadsupervisionmsg ( );
									supervisionUnreadMsg()
								} else {
									alert("已经审阅过了");
								}
							})
					})
				})
			}).getJson();
		} else {
			var state = $("#researchYS .span").attr("state");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"state": "2",
					"typeid": "9",
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				if (json.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if ( json.length  == 0 ) {
					$('.nosolutions').show();
				} else {
					$('.nosolutions').hide();
				}
				$("#researchYS ul").mapview(json, {}, append)
				$("#researchYS .ans").hide();

				//查看
				$("#researchYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					
					var obj = "seeresearchYS";
					viewSupervisionDetail ( obj , key ) ;
					// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(
					// 	true).condition(
					// 	new RssDict().keyvalue({
					// 		"id": key
					// 	}).getDict()).getJson(function(json) {
					// 	console.log(json)
					// 	var shijian = ""
					// 	$("#seeresearchYS article").mapview(json, {
					// 		"shijian": function(val) {
					// 			return shijian = new Date(parseInt(
					// 					val) * 1000)
					// 				.toString("yyyy-MM-dd hh:mm");
					// 		},
					// 		"inspecttime": function(val) {
					// 			return inspecttime = new Date(
					// 					parseInt(val) * 1000)
					// 				.toString("yyyy-MM-dd hh:mm");
					// 		}
					// 	})
					// 	$.each(json, function(k, v) {
					// 		$("#seeresearchYS article").append(
					// 			'<div class="divtop"><h1 >' + v
					// 			.title +
					// 			// '</h1><h2>[第' + v.id +
					// 			// '号]</h2><h3>' + v.title +
								
					// 			'</h1>' +
					// 			'<h4 >方案制定人:' + v.initiator +
					// 			'</h4><h4 shijian>' + shijian +
					// 			'</h4></div><div class="divp">' + v
					// 			.notice +
					// 			'</div><div class="no">视察主题：' + v
					// 			.reviewclass +
					// 			'</div><div class="no">方案制定单位：' + v
					// 			.initiator +
					// 			'</div><div class="no">调研地点：' + v
					// 			.place +
					// 			'</div><div class="no">调研时间：' +
					// 			inspecttime +
					// 			'</div><div class="fj no">调研方案：<span>' +
					// 			v
					// 			.enclosure + '<span></div>'
					// 		)
					// 	})
					// })
				})

				//审阅
				$("#researchYS .ans").off().click(function() {
					$("#ansresearchYS .normalbutton").off().click(function() {
						alert("已经审阅过了");
						location.href = "#researchYS";
					})
				})
			}).getJson();
		}
	})
	if (researchYSnav == "1") {
		$("#researchYS nav>a").eq(0).click();
		researchYSnav = "0";
	}
})

//已完成预审的调研
$("#endresearchYS").load(function() {
	if (arry.indexOf("endresearchYS") == "-1") {
		$("#endresearchYS ul li").eq(0).siblings().remove();
		arry.push("endresearchYS")
	} else {
		$("#endresearchYS ul li").remove();
	}
	var state = $("#endresearchYS .span").attr("state");
	console.log(this)
	console.log(state)
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "9",
		"previewleadername": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#endresearchYS ul").mapview(json, {}, append)

		//查看
		$("#endresearchYS .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeendresearchYS article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"inspecttime": function(val) {
						return inspecttime = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seeendresearchYS article").append(
						'<div class="divtop"><h1 >' + v.title +
						'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
						'</h3><h4 >方案制定人:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="divp">' + v.notice +
						'</div><div class="no">调研主题：' + v.reviewclass +
						'</div><div class="no">方案制定单位：' + v.initiator +
						'</div><div class="no">调研地点：' + v.place +
						'</div><div class="no">调研时间：' + inspecttime +
						'</div><div class="fj no">调研方案：<span>' + v
						.enclosure + '<span></div>'
					)
				})
			})
		})
	}).getJson();
})

//已完成的调研
$("#endresearch").load(function() {
	if (arry.indexOf("endresearch") == "-1") {
		$("#endresearch ul li").eq(0).siblings().remove();
		arry.push("endresearch")
	} else {
		$("#endresearch ul li").remove();
	}
	

	
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"state": "8",
		"typeid": "9"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		$("#endresearch ul").mapview(json, {}, append)
		//查看
		$("#endresearch .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeendresearch article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"inspecttime": function(val) {
						return inspecttime = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seeendresearch article").append(
						'<div class="divtop"><h1 >' + v.title +
						'</h1>' +
						// '</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
						'<h4 >方案制定人:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="divp">' + v.notice +
						'</div><div class="no">视察主题：' + v.reviewclass +
						'</div><div class="no">方案制定单位：' + v.initiator +
						'</div><div class="no">调研地点：' + v.place +
						'</div><div class="no">调研时间：' + inspecttime +
						'</div><div class="fj no">调研方案：<span>' + v
						.enclosure + '<span></div>'
					)
				})
			})
		})

		//查看满意度测评
		$("#endresearch .ans").off().click(function() {
			var key = $(this).parent().attr("sortid");
			//var numpeople = $(this).attr("numpeople");
			var numpeople = 1;
			faqsajax = RssApi.Table.List("supervision_evaluation").setLoading(true).condition(
				new RssDict().keyvalue({
					"evaluationId": key,
					"typeid": "9"
				}).getDict()).getJson(function(json) {
				var effect = 0,
					evaluation_0 = 0,
					evaluation_1 = 0,
					evaluation_2 = 0,
					evaluation_3 = 0;
				$("#ansendresearch article").mapview(json, {
					"evaluationResult": function(val) {
						if (val = 1) {
							return evaluation_0++;
						} else if (val = 2) {
							return evaluation_1++;
						} else if (val = 3) {
							return evaluation_2++;
						} else if (val = 4) {
							return evaluation_3++;
						}
					}
				})
				$("#ansendresearch article").prepend(
					'<div class="divtop"><h1>调研满意度测评结果</h1></div><div class="no">满意票：' +
					evaluation_0 +
					'</div><div class="no">满意率：' + (evaluation_0 /
						numpeople) * 100 +
					'%</div><div class="no">基本满意票：' + evaluation_1 +
					'</div><div class="no">基本满意率：' + (evaluation_1 /
						numpeople) * 100 +
					'%</div><div class="no">不满意票：' + evaluation_2 +
					'</div><div class="no">不满意率：' + (evaluation_2 /
						numpeople) * 100 +
					'%</div><div class="no">弃权票：' + evaluation_3 +
					'</div><div class="no">弃权率：' + (evaluation_3 /
						numpeople) * 100 + '%</div>')
			})
		})
	}).getJson();
})
//新增视察方案
$("#supervisionXZ").load(function() {
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
	reviewclass = {};
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#supervisionXZ [reviewclass]").attr("relationid", v.id)
			$("#supervisionXZ [reviewclass]").text(v.name)
		})
		$("#supervisionXZ [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	$("#supervisionXZ .lmr").off().click(function() {
		addmember ( "previewleader_supervisionXZ" );
		// var span = $("#supervisionXZ .span").text().split(",");
		// //$("#suggestsub .lmr span").empty();
		// location.href = "#dbt"
		// if (arry.indexOf("dbt") == "-1") {
		// 	$("#dbt ul li").eq(0).siblings().remove();
		// 	arry.push("dbt")
		// } else {
		// 	$("#dbt ul li").remove();
		// }
		// $("#dbt article .dbta").text(realname);
		// faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "10000").condition(
		// 	new RssDict().keyvalue({
		// 		// "mission": missions,
		// 		"myid": "{notin~" + RssUser.Data.myid + "}"
		// 	}).getDict()).setFlushUI(function(jsona, append) {
		// 	let html = "";
		// 	var flag = false;
		// 	$.each(jsona, function(k, v) {
		// 		for (var i = 0; i < span.length; i++) {
		// 			if (v.myid == span[i]) {
		// 				flag = true;
		// 				break;
		// 			}
		// 		}
		// 		html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
		// 			' name="myid"  myid="' + v.myid +
		// 			'" realname="' + v.realname + '" /><em>' + v.realname +
		// 			'</em><span class="dh">' + v.telphone +
		// 			'</span></li>';
		// 		flag = false;
		// 	})
		// 	$("#dbt article ul").html(html);
		// 	//除了表头（第一行）以外所有的行添加click事件.
		// 	$("#dbt ul>li").slice(0).click(function() {
		// 		// 切换样式
		// 		$(this).toggleClass("tr_active");
		// 		// 找到checkbox对象
		// 		var chks = $("input[type='checkbox']", this);
		// 		var tag = $(this).attr("tag");
		// 		if (tag == "selected") {
		// 			// 之前已选中，设置为未选中
		// 			$(this).attr("tag", "");
		// 			chks.prop("checked", false);
		// 		} else {
		// 			// 之前未选中，设置为选中
		// 			$(this).attr("tag", "selected");
		// 			chks.prop("checked", true);
		// 		}
		// 	});
		// 	$("#dbt article .submitName").off().click(function() {
		// 		var id_array = new Array();
		// 		var name_array = new Array();
		// 		$('input[name="myid"]:checked').each(function() {
		// 			id_array.push($(this).attr("myid")); //向数组中添加元素  
		// 			name_array.push($($(this)).attr("realname")); //向数组中添加元素  
		// 		});
		// 		var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
		// 		var namestr = name_array.join(',');
		// 		location.href = "#supervisionXZ"
		// 		$("#supervisionXZ span").text(idstr)
		// 		$("#supervisionXZ [mission]").val(namestr);
		// 	});
		// }).getJson();
	})

	 $("#supervisionXZ input[type='radio'][name='ZH']").off().click(function() {
	 	var value = $(this).val();
		console.log("___________ value=",value)
		if (value == 1) {
			$("#inspect_previewleader").show();
			// $("#directorUl").hide();
			$("#inspect_meetingshijian").hide();
			$("#inspect_directormeetingnum").hide();
	 	} else {
			$("#inspect_previewleader").hide();
			// $("#directorUl").show();
			$("#inspect_meetingshijian").show();
			$("#inspect_directormeetingnum").show();
	 	}
	 })

	$("#supervisionXZ .submitbutton").off().click(function() {
		submitnewsolution ("supervisionXZ");
		//将前端输入的数据放到k1对象中
		// var title = $("#supervisionXZ .marginb input").val();
		// var reviewclass = $("#supervisionXZ .marginb .select").val();
		// var place = $("#supervisionXZ .marginb .place").val();
		// var matter = $("#supervisionXZ textarea").val();
		// var enclosure = $("#supervisionXZ .fja").text() + ",";
		// //参与人id
		// var userid = $("#supervisionXZ .lmr span").text();
		// var enclosurename = $("#supervisionXZ article .fj label input").val() + ",";
		// var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
		// var shijian = Date.parse(new Date()) / 1000;

		// //活动开始时间
		// if ($("#supervisionXZ .formsc .marginb .month").val() < 10) {
		// 	var sc_month = 0 + $("#supervisionXZ .formsc .marginb .month").val()
		// } else {
		// 	var sc_month = $("#supervisionXZ .formsc .marginb .month").val()
		// }
		// if ($("#supervisionXZ .formsc .marginb .day").val() < 10) {
		// 	var sc_day = 0 + $("#supervisionXZ .formsc .marginb .day").val()
		// } else {
		// 	var sc_day = $("#supervisionXZ .formsc .marginb .day").val()
		// }
		// var HDbeginshijian = $("#supervisionXZ .formsc .marginb .year").val() + "-" + sc_month + "-" +
		// 	sc_day;
		// var inspecttime = Math.round(new Date(HDbeginshijian) / 1000);

		// var k1 = {
		// 	"title": title,
		// 	"reviewclass": reviewclass,
		// 	"place": place,
		// 	"notice": matter,
		// 	"enclosure": enclosure,
		// 	"myid": RssUser.Data.myid,
		// 	"shijian": shijian,
		// 	"enclosurename": filename,
		// 	"inspecttime": inspecttime,
		// 	"previewleadername": userid,
		// 	"state": 1,
		// 	"typeid": 8,
		// 	"lwstate": 8
		// }

		// console.log(k1)
		// if (title != "" && matter != "") {
		// 	//标题和问题不能为空
		// 	faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
		// 		new RssDict().keyvalue({
		// 			"myid": RssUser.Data.myid
		// 	}).getDict()).setFlushUI(function(json, append) {
		// 		var realname=json[0].realname
		// 		console.log(realname)
		// 		RssApi.Edit("supervision_inspection").setLoading(true).keyvalue({
		// 			"title": title,
		// 			"reviewclass": reviewclass,
		// 			"place": place,
		// 			"notice": matter,
		// 			"enclosure": enclosure,
		// 			"myid": RssUser.Data.myid,
		// 			"shijian": shijian,
		// 			"enclosurename": filename,
		// 			"inspecttime": inspecttime,
		// 			"previewleadername": userid,
		// 			"state": 1,
		// 			"typeid": 8,
		// 			"lwstate": 8,
		// 			"initiator": realname,
		// 		}).getJson(function(json) {
		// 			console.log(json)
		// 			if (json.id) {
		// 				alert("提交成功");
		// 				$("#supervisionXZ .marginb input").val("");
		// 				$("#supervisionXZ .marginb select").val("");
		// 				$("#supervisionXZ .marginb .place").val("");
		// 				$("#supervisionXZ textarea").val("");
		// 				$("#supervisionXZ .fja").text("");
		// 				$("#supervisionXZ .lmr span").text("");
		// 				$("#supervisionXZ [mission]").val("");
		// 				location.href = "#supervRD";
		// 				location.href = "#supervRD";
		// 			} else {
		// 				alert("提交失败");
		// 			}
		// 		})
		// 	}).getJson();
		// } else {
		// 	alert("活动的标题和内容不能为空！");
		// }
	})
})

function loadListLayout( Obj , typeid ){
	console.log("_______________ loadListLayout Obj="+Obj)
	var li_obj = "#" + Obj + "  ul li";
	if (arry.indexOf( Obj ) == "-1") {
		$( li_obj ).eq(0).siblings().remove();
		arry.push( Obj )
	} else {
		$( li_obj ).remove();
	}
	console.log("_______________ loadListLayout typeid="+typeid)
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "8"
	}).getDict()).setFlushUI(function(json, append) {
		console.log("_______________ json="+json)
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			var initiator = "提出者: " + v.initiator ;
			var mstate = v.state ;
			//var state = "办理进度: " + getprogressState( v ) ;
			//v.state = state ;
			v.initiator = initiator ;
			
			if ( ismysolution ( v ) ) {
			    json2.push( v );
			}
			
			$("#mstate").val( mstate );
			
			
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
		
		$.each(json2, async function(k, v) {
			fillmysolutiondata ( v , Obj );				 
		})
	})
}

function ismysolution_2( v ){
	
	var result = 0 ;
	var uid = RssUser.Data.myid ;
	
	if ( v.myid == uid ) {
		console.log( "_________ v.myid == uid ")
		result = 1 ;
	}
	if ( !isEmpty( v.objid ) ) {
		if ( v.objid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.committeeobjid ) ) {
		if ( v.committeeobjid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.parttimember ) ) {
		if ( v.parttimember .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	
	if ( !isEmpty( v.company ) ) {
		if ( v.company .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	
	if ( !isEmpty( v.previewleadername ) ) {
		if ( v.previewleadername .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	return result ;
}

function isparticipant( v ){
	var result = 0 ;
	var uid = RssUser.Data.myid ;
	if ( !isEmpty( v.objid ) ) {
		if ( v.objid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.committeeobjid ) ) {
		if ( v.committeeobjid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.parttimember ) ) {
		if ( v.parttimember .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.company ) ) {
		if ( v.company .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.previewleadername ) ) {
		if ( v.previewleadername .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	return result ;
}


function isOnlymysolution( v ){
	
	var result = 0 ;
	var uid = RssUser.Data.myid ;
	
	if ( v.myid == uid ) {
		console.log( "_________ v.myid == uid ")
		result = 1 ;
	}
	if ( !isEmpty( v.objid ) ) {
		if ( v.objid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.committeeobjid ) ) {
		if ( v.committeeobjid .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	if ( !isEmpty( v.parttimember ) ) {
		if ( v.parttimember .indexOf( uid ) != -1 ) {
			result =  1 ;
		}
	}
	return result ;
}


$("#supervision").load(function() {
	$("#supervision nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supervision") == "-1") {
		$("#supervision ul li").eq(0).siblings().remove();
		arry.push("supervision")
		} else {
		$("#supervision ul li").remove();
		}
		if ($(this).index() == "0") {
			// console.log("____________ index = 0  ") ;
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
				"myid": RssUser.Data.myid,
				"typeid": "8"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						var initiator = "提出者: " + v.initiator ;
						json2.push( v );
					})
	
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
	
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmysolutiondata ( v , "supervision" );				 
					})				
			}).getJson();
		} // 0
		else {
			// console.log("____________ index = 1  ") ;
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
				// "myid": RssUser.Data.myid,
				"typeid": "8"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						// var initiator = "提出者: " + v.initiator ;
						if ( isparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
				
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmysolutiondata ( v , "supervision" );				 
					})				
			}).getJson();
		}
	})
	
	if (supervisionnav == "1") {
		$("#supervision nav>a").eq(0).click();
		supervisionnav = "0";
	}
	
})

//我的视察方案
$("#supervision1").load(function() {
	// loadListLayout ( "supervision" , "8" );
	// return;
		
	
	if (arry.indexOf("supervision") == "-1") {
		$("#supervision ul li").eq(0).siblings().remove();
		arry.push("supervision")
	} else {
		$("#supervision ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		// "myid": RssUser.Data.myid,
		"typeid": "8"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			var initiator = "提出者: " + v.initiator ;
			// var mstate = v.state ;
			// var state = "办理进度: " + getprogressState( v ) ;
			//v.state = state ;
			// v.initiator = initiator ;
			// var data = v ;
			// data.state = state ;
			// data.initiator = initiator ;
			if ( isOnlymysolution ( v ) ) {
			    json2.push( v );
			}
		})
		
		if (json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		
		if (json2.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
		}
		
		$.each(json2, async function(k, v) {
			
			fillmysolutiondata ( v , "supervision" );				 
		})
		return ;
		
		$("#supervision ul").mapview(json2, {}, append)
		
		//查看
		$("#supervision .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seesupervision";
			viewSupervisionDetail ( obj , key ) ;
			// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seesupervision article").mapview(json, {
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
			// 		$("#seesupervision article").append(
			// 			'<div class="divtop"><h1 >' + v.title +
			// 			'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			'</h3><h4>方案制定人:' + v.initiator +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="divp">' + v.note +
			// 			'</div><div class="no">视察调研类别：' + v.reviewclass +
			// 			'</div><div class="no">视察调研地点：' + v.place +
			// 			'</div><div class="no">主任会议届次：' + v
			// 			.directormeetingnum +
			// 			'</div><div class="fj no">附件：<span>' + attachment +
			// 			'<span></div>')
			// 	})
			// })
		})
		
		//提交主任会议审查
		
		$("a[name='submitsolution']").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#solutionId").val(key);
			submit_append( 8 );					
		})
		
		$("a[name='finishsolution']").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seesupervision";
			viewSupervisionDetail ( obj , key, 1) ;
		});

	}).getJson();
})


function changeReadState( key ,tablename) {
	//"supervision_inspection"
	RssApi.Table.List(tablename).setLoading(false).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {
		$.each(json, function(k, v) {	
			writereadState( v ,tablename );
		})
	})
}
//预审的视察
$("#supervisionYS").load(function() {
	$("#supervisionYS nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supervisionYS") == "-1") {
			$("#supervisionYS ul li").eq(0).siblings().remove();
			arry.push("supervisionYS")
		} else {
			$("#supervisionYS ul li").remove();
		}
		if ($(this).index() == "0") {
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"state": "1",
					"typeid": "8",
					// "previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				
				
				//在列表增加办理状态和提出者
				var json2 = [];
				$.each(json, function(k, v) {
					var data = v ;
					// var initiator = "提出者: " + data.initiator ;
					// var mstate = "办理进度: " + getprogressState( data ) ;
					
					// data.state = mstate ;
					var state =  data.state ;
					var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
					
					data.initiator = initiator ;
					// json2.push( data );
					var previewleadername = data.previewleadername ;
					if ( !isEmpty( previewleadername ) ) {
						if ( parseInt(state ) == 1 && previewleadername.indexOf( RssUser.Data.myid ) != -1 ){
							json2.push( data );
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
				
				$("#supervisionYS ul").mapview(json2, {}, append)
				//查看
				$("#supervisionYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					var obj = "seesupervisionYS";
					viewSupervisionDetail ( obj , key ) ;
					// changeReadState ( key ) ;
					changeReadState( key , "supervision_inspection") ;	
				})

				//审阅
				$("#supervisionYS .ans").off().click(function() {
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					// changeReadState ( key ) ;
					changeReadState( key , "supervision_inspection") ;	
					// var state = $(this).children().attr("state");
					$("#anssupervisionYS .normalbutton").off().click(function() {
						// if(state=="1"){
						var isagree = $(
								"#anssupervisionYS .marginb form input:radio:checked"
							)
							.val();
						var notice = $("#anssupervisionYS textarea").val();
						if (isagree == "1") {
							var state = "2"
						} else if (isagree == "2") {
							var state = "5"
						}
						var k1 = {
							"state": state,
							"readState": 2,
							"previewopinion": notice
						};
						RssApi.Edit("supervision_inspection").setLoading(true)
							.keyvalue(k1)
							.keyvalue({
								"id": key,
								"myid": myid
							}).getJson(function(json) {
								console.log(json)
								if (json.id) {
									alert("审阅成功");
									$("#anssupervisionYS textarea").val("");
									location.href = "#supervRD";
									//unreadsupervisionmsg ( );
									supervisionUnreadMsg();
								} else {
									alert("审阅失败");
								}
							})
					})
				})
			}).getJson();
		} else {
			location.href = "#supervisionYS";
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					//"state": "2",
					"typeid": "8",
					// "previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				
				//在列表增加办理状态和提出者
				var json2 = [];
				$.each(json, function(k, v) {
					var data = v ;
					var state = data.state ;
					// var initiator = "提出者: " + data.initiator ;
					
					// var mstate = "办理进度: " + getprogressState( data ) ;
					// data.state = mstate ;
					var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
					
					data.initiator = initiator ;
					var previewleadername = data.previewleadername;
					console.log(data)
					if ( !isEmpty( previewleadername ) ) {
						if ( parseInt(state ) > 1 && previewleadername.indexOf( RssUser.Data.myid ) != -1 ){
							json2.push( data );
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
				
				$("#supervisionYS ul").mapview(json2, {}, append)
				//屏蔽预审按钮
				$("#supervisionYS .ans").hide();  
				//查看
				$("#supervisionYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					var obj = "seesupervisionYS";
					viewSupervisionDetail ( obj , key ) ;
					// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(
					// 	true).condition(
					// 	new RssDict().keyvalue({
					// 		"id": key,
					// 		"previewleadername": RssUser.Data.myid
					// 	}).getDict()).getJson(function(json) {
					// 	console.log(json)
					// 	var shijian = ""
					// 	$("#seesupervisionYS article").mapview(json, {
					// 		"shijian": function(val) {
					// 			return shijian = new Date(parseInt(
					// 					val) * 1000)
					// 				.toString("yyyy-MM-dd hh:mm");
					// 		},
					// 		"inspecttime": function(val) {
					// 			return inspecttime = new Date(
					// 					parseInt(val) * 1000)
					// 				.toString("yyyy-MM-dd hh:mm");
					// 		}
					// 	})
					// 	$.each(json, function(k, v) {
					// 		$("#seesupervisionYS article").append(
					// 			'<div class="divtop"><h1 >' + v
					// 			.title +
					// 			'</h1><h2>[第' + v.id +
					// 			'号]</h2><h3>' + v.title +
					// 			'</h3><h4 >方案制定人:' + v.initiator +
					// 			'</h4><h4 shijian>' + shijian +
					// 			'</h4></div><div class="divp">' + v
					// 			.notice +
					// 			'</div><div class="no">视察主题：' + v
					// 			.reviewclass +
					// 			'</div><div class="no">方案制定单位：' + v
					// 			.initiator +
					// 			'</div><div class="no">视察地点：' + v
					// 			.place +
					// 			'</div><div class="no">视察时间：' +
					// 			inspecttime +
					// 			'</div><div class="fj no">视察方案：<span>' +
					// 			v
					// 			.enclosure + '<span></div>')
					// 	})
					// })
				})
				$("#supervisionYS .ans").off().click(function() {
					$("#anssupervisionYS .normalbutton").off().click(function() {
						alert("已审阅")
						location.href = "#supervisionYS";
					})
				})
			}).getJson();
		}
	})
	if (supervisionYSnav == "1") {
		$("#supervisionYS nav>a").eq(0).click();
		supervisionYSnav = "0";
	}
})

//已完成预审的视察
$("#endsupervisionYS").load(function() {
	if (arry.indexOf("endsupervisionYS") == "-1") {
		$("#endsupervisionYS ul li").eq(0).siblings().remove();
		arry.push("endsupervisionYS")
	} else {
		$("#endsupervisionYS ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		
		//"state":"1",
		"typeid": "8",
		"previewleadername": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
	
		$("#endsupervisionYS ul").mapview(json, {}, append)
		
		
		//查看
		$("#endsupervisionYS .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seeendsupervisionYS";
			viewSupervisionDetail ( obj , key ) ;
			// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key,
			// 		"previewleadername": RssUser.Data.myid
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeendsupervisionYS article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"inspecttime": function(val) {
			// 			return inspecttime = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seeendsupervisionYS article").append(
			// 			'<div class="divtop"><h1 >' + v.title +
			// 			// '</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			// '</h3><h4 >方案制定人:' + v.initiator +
						
			// 			'</h1>'  +
			// 			'<h4 >方案制定人:' + v.initiator +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="divp">' + v.notice +
			// 			'</div><div class="no">视察主题：' + v.reviewclass +
			// 			'</div><div class="no">方案制定单位：' + v.initiator +
			// 			'</div><div class="no">视察地点：' + v.place +
			// 			'</div><div class="no">视察时间：' + inspecttime +
			// 			'</div><div class="fj no">视察方案：<span>' + v
			// 			.enclosure + '<span></div>')
			// 	})
			// })
		})
	}).getJson();
})

//承办视察报告
$("#supervreport").load(function() {
	if (arry.indexOf("supervreport") == "-1") {
		$("#supervreport ul li").eq(0).siblings().remove();
		arry.push("supervreport")
	} else {
		$("#supervreport ul li").remove();
	}
	
	
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		// "state": "1",
		"typeid": "8"
		// "previewleadername": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		
		
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			var state = parseInt( v.state );
			var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState(v);
			//var state = "办理进度: " + getprogressState( v ) ;
			var data = v ;
			var organizationid = v.organizationid ;
			data.initiator = initiator ;
			if ( !isEmpty( organizationid ) ) {
				if ( organizationid.indexOf( RssUser.Data.myid ) != -1 ) {
					
					json2.push( data );
				}
			}
		})
		if (json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if ( json2.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		$.each(json2, async function(k, v) {
			
			fillundertakeInspection ( v , "supervreport" );				 
		})
		
		//$("#supervreport ul").mapview(json2, {}, append)
		//查看
		$("#supervreport .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seesupervreport";
			
			viewSupervisionDetail( obj , key ) ;
			// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key,
			// 		"previewleadername": RssUser.Data.myid
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seesupervreport article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"inspecttime": function(val) {
			// 			return inspecttime = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seesupervreport article").append(
			// 			'<div class="divtop"><h1 >' + v.title +
			// 			'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			'</h3><h4 >方案制定人:' + v.initiator +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="divp">' + v.notice +
			// 			'</div><div class="no">视察主题：' + v.reviewclass +
			// 			'</div><div class="no">方案制定单位：' + v.initiator +
			// 			'</div><div class="no">调研地点：' + v.place +
			// 			'</div><div class="no">调研时间：' + inspecttime +
			// 			'</div><div class="fj no">调研方案：<span>' + v
			// 			.enclosure + '<span></div>')
			// 	})
			// })
		})

		//审阅
		$("#supervreport .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			var myid = $("#supervreport .ans").attr("myid");
			$("#handleID").val(key);
			console.log(myid)
			$("#anssupervreport .normalbutton").off().click(function() {
				var isagree = $("#anssupervreport .marginb form input:radio:checked")
					.val();
				var notice = $("#anssupervreport textarea").val();
				if (isagree == "1") {
					var state = "2"
				} else if (isagree == "2") {
					var state = "5"
				}
				//同意状态是4  不同意状态是5
				var k1 = {
					"state": state,
					"matter": notice
				};
				RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key,
						"myid": myid
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("审阅成功");
							$("#anssupervreport textarea").val("");
							location.href = "#supervRD";
						} else {
							alert("审阅失败");
						}
					})
			})
		})
	}).getJson();
})

//已完成的视察报告
// $("#endsupervision").load(function() {
// 	if (arry.indexOf("endsupervision") == "-1") {
// 		$("#endsupervision ul li").eq(0).siblings().remove();
// 		arry.push("endsupervision")
// 	} else {
// 		$("#endsupervision ul li").remove();
// 	}
// 	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
// 		//"state": "8",
// 		"typeid": "8"
// 	}).getDict()).setFlushUI(function(json, append) {
// 		console.log(json)
		
// 		//$("#endsupervision ul").mapview(json, {}, append)
		
// 		//在列表增加办理状态和提出者
// 		var json2 = [];
// 		$.each(json, function(k, v) {
			
// 			var state = parseInt( v.state );
// 			var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: 已完成 ";//  + getprogressState(v);
// 			var data = v ;
// 			data.initiator = initiator ;
// 			if ( state >=8 && ismysolution_2( v ) ) {
// 				json2.push( data );
// 			}
			
// 		})
// 		$("#endsupervision ul").mapview(json2, {}, append)
		
// 		if ( json2.length < 10 ) {
// 			$('.nodata').hide();
// 		} else {
// 			$('.nodata').show();
// 		}
		
// 		if ( json2.length > 0 ) {
// 			$('.nosolutions').hide();
// 		} else {
// 			$('.nosolutions').show();
// 		}
		
// 		//查看
// 		$("#endsupervision .see").off().click(function() {
// 			var key = $(this).parent().attr("id");
// 			var obj = "seeendsupervision";
// 			viewSupervisionDetail( obj , key ) ;
// 			changeReadState( key ) ;
			
// 			// faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
// 			// 	new RssDict().keyvalue({
// 			// 		"id": key
// 			// 	}).getDict()).getJson(function(json) {
// 			// 	console.log(json)
// 			// 	var shijian = ""
// 			// 	$("#seeendsupervision article").mapview(json, {
// 			// 		"shijian": function(val) {
// 			// 			return shijian = new Date(parseInt(val) * 1000)
// 			// 				.toString("yyyy-MM-dd hh:mm");
// 			// 		}
// 			// 	})
// 			// 	$.each(json, function(k, v) {
// 			// 		$("#seeendsupervision article").append(
// 			// 			'<div class="divtop"><h1 >' + v.title +
// 			// 			'</h1>'  +
// 			// 			'<h4 >方案制定人:' + v.initiator +
// 			// 			'</h4><h4 shijian>' + shijian +
// 			// 			'</div><div class="divp">' + v.notice +
// 			// 			'</div> <div class="no">方案制定单位：' + v.initiator +
// 			// 			'</div><div class="no">视察类别：' + v.reviewclass +
// 			// 			'</div><div class="no">视察地点：' + v.place +
// 			// 			'</div><div class="fj no">视察报告：<span>' + v
// 			// 			.assignenclosure +
// 			// 			'<span></div>')
// 			// 	})
// 			// })
// 		})
// 		//查看满意度测评
// 		$("#endsupervision .ans").off().click(function() {
// 			var key = $(this).parent().attr("id");
// 			changeReadState( key ) ;
// 			//var numpeople = $(this).attr("numpeople");
// 			var numpeople = 1;
// 			faqsajax = RssApi.Table.List("supervision_evaluation").setLoading(true).condition(
// 				new RssDict().keyvalue({
// 					"evaluationId": key,
// 					"typeid": "8"
// 				}).getDict()).getJson(function(json) {
// 				console.log(json)
// 				var effect = 0,
// 					evaluation_0 = 0,
// 					evaluation_1 = 0,
// 					evaluation_2 = 0,
// 					evaluation_3 = 0;
// 				for (var i = 1; i <= json.length; i++) {
// 					$("#ansendsupervision article").mapview(json, {
// 						"evaluationResult": function(val) {
// 							if (val = 1) {
// 								return evaluation_0++;
// 							} else if (val = 2) {
// 								return evaluation_1++;
// 							} else if (val = 3) {
// 								return evaluation_2++;
// 							} else if (val = 4) {
// 								return evaluation_3++;
// 							}
// 						}
// 					})
// 				}
// 				$("#ansendsupervision article").mapview(json, {
// 					"evaluationResult": function(val) {
// 						if (val = 1) {
// 							return evaluation_0;
// 						} else if (val = 2) {
// 							return evaluation_1;
// 						} else if (val = 3) {
// 							return evaluation_2;
// 						} else if (val = 4) {
// 							return evaluation_3;
// 						}
// 					}
// 				})
// 				$("#ansendsupervision article").prepend(
// 					'<div class="divtop"><h1>调研满意度测评结果</h1></div><div class="no">满意票：' +
// 					evaluation_0 +
// 					'</div><div class="no">满意率：' + (evaluation_0 /
// 						numpeople) * 100 +
// 					'%</div><div class="no">基本满意票：' + evaluation_1 +
// 					'</div><div class="no">基本满意率：' + (evaluation_1 /
// 						numpeople) * 100 +
// 					'%</div><div class="no">不满意票：' + evaluation_2 +
// 					'</div><div class="no">不满意率：' + (evaluation_2 /
// 						numpeople) * 100 +
// 					'%</div><div class="no">弃权票：' + evaluation_3 +
// 					'</div><div class="no">弃权率：' + (evaluation_3 /
// 						numpeople) * 100 + '%</div>')
// 			})
// 		})
// 	}).getJson();
// })
//新增执法检查
$("#supinspectionXZ_back").load(function() {
	var missions = "",
		realname = "";
	RssApi.Table.List("committee_member").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
			reviewclass = {};	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(		json) {		$.each(json, function(k, v) {			reviewclass[v.id] = v.name			$("#supinspectionXZ [reviewclass]").attr("relationid", v.id)			$("#supinspectionXZ [reviewclass]").text(v.name)		})		$("#supinspectionXZ [reviewclass]").off("click").click(function() {			zzc($(this), reviewclass);		})	})
	$("#supinspectionXZ_back .lmr").off().click(function() {
		addmember ( "previewleader_supinspectionXZ" );
		return;
		var span = $("#supinspectionXZ .span").text().split(",");
		//$("#suggestsub .lmr span").empty();
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "10000").condition(
			new RssDict().keyvalue({
				"myid": "{notin~" + RssUser.Data.myid + "}"
			}).getDict()).setFlushUI(function(jsona, append) {
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < span.length; i++) {
					if (v.myid == span[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="myid"  myid="' + v.myid +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.telphone +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}
			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="myid"]:checked').each(function() {
					id_array.push($(this).attr("myid")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestr = name_array.join(',');
				location.href = "#supinspectionXZ"
				$("#supinspectionXZ span").text(idstr)
				$("#supinspectionXZ [mission]").html(namestr);
			});
		}).getJson();
	})
	
	$("#supinspectionXZ_back input[type='radio'][name='ZH']").off().click(function() {
		var value = $(this).val();
		if (value == 1) {
			$("#enforce_previewleader").show();
			
			$("#enforce_meetingshijian").hide();
			$("#enforce_directormeetingnum").hide();
			
		} else {
			$("#enforce_previewleader").hide();
			
			$("#enforce_meetingshijian").show();
			$("#enforce_directormeetingnum").show();
		}
	})

	$("#supinspectionXZ_back .normalbutton").off().click(function() {
		submitnewsolution ("supinspectionXZ");
		return ;

		//将前端输入的数据放到k1对象中
		var title = $("#supinspectionXZ .marginb input").val();
		var reviewclass = $("#supinspectionXZ .marginb .select").val();
		var place = $("#supinspectionXZ .marginb .place").val();
		var notice = $("#supinspectionXZ textarea").val();
		var enclosure = $("#supinspectionXZ .fja").text() + ",";
		//参与人id
		var userid = $("#supinspectionXZ .lmr span").text();
		var enclosurename = $("#supinspectionXZ article .fj label input").val() + ",";
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
		var shijian = Date.parse(new Date()) / 1000;

		//活动开始时间
		if ($("#supinspectionXZ .formZF .marginb .month").val() < 10) {
			var str_month = 0 + $("#supinspectionXZ .formZF .marginb .month").val()
		} else {
			var str_month = $("#supinspectionXZ .formZF .marginb .month").val()
		}
		if ($("#supinspectionXZ .formZF .marginb .day").val() < 10) {
			var str_day = 0 + $("#supinspectionXZ .formZF .marginb .day").val()
		} else {
			var str_day = $("#supinspectionXZ .formZF .marginb .day").val()
		}
		var HDbeginshijian = $("#supinspectionXZ .formZF .marginb .year").val() + "-" + str_month + "-" +
			str_day;
		var inspecttime = Math.round(new Date(HDbeginshijian) / 1000);

		var k1 = {
			"title": title,
			"reviewclass": reviewclass,
			"place": place,
			"notice": notice,
			"enclosure": enclosure,
			"myid": RssUser.Data.myid,
			"shijian": shijian,
			"enclosurename": filename,
			"inspecttime": inspecttime,
			"previewleadername": userid,
			"lwstate": 3,
			"typeid": 3
		}

		console.log(k1)
		if (title != "" && notice != "") {
			//标题和问题不能为空
			faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
				new RssDict().keyvalue({
					"myid": RssUser.Data.myid
			}).getDict()).setFlushUI(function(json, append) {
				var realname=json[0].realname
				console.log(realname)
				RssApi.Edit("supervision_enforcement").setLoading(true).keyvalue({
					"title": title,
					"reviewclass": reviewclass,
					"place": place,
					"notice": notice,
					"enclosure": enclosure,
					"myid": RssUser.Data.myid,
					"shijian": shijian,
					"enclosurename": filename,
					"inspecttime": inspecttime,
					"previewleadername": userid,
					"lwstate": 3,
					"typeid": 3,
					"initiator": realname,
					"state": 1
				}).getJson(function(json) {
					console.log(json)
					if (json.id) {
						alert("提交成功");
						$("#supinspectionXZ .marginb input").val("");
						$("#supinspectionXZ .marginb select").val("");
						$("#supinspectionXZ .marginb .place").val("");
						$("#supinspectionXZ textarea").val("");
						$("#supinspectionXZ .fja").text("");
						$("#supinspectionXZ .lmr span").text("");
						$("#supinspectionXZ [mission]").val("");
						location.href = "#supervRD";
					} else {
						alert("提交失败");
					}
				})
			}).getJson();
		} else {
			alert("活动的标题和内容不能为空！");
		}
	})
})
//我的执法检查
$("#supinspection").load(function() {
	if (arry.indexOf("supinspection") == "-1") {
		$("#supinspection ul li").eq(0).siblings().remove();
		arry.push("supinspection")
	} else {
		$("#supinspection ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "3",
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#supinspection ul").mapview(json, {}, append);
		//查看
		$("#supinspection .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seesupinspection article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"inspecttime": function(val) {
						return inspecttime = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"state": function(val) {
						if (val == "1") {
							return state = "待主任会议审议";
						} else if (val == "2") {
							return state = "主任会议审议中";
						} else if (val == "3") {
							return state = "方案实施中";
						} else if (val == "4") {
							return state = "准备专项报告中";
						} else if (val == "5") {
							return state = "征求意见中";
						} else if (val == "6") {
							return state = "征求意见已通过";
						} else if (val == "7") {
							return state = "征求意见中";
						} else if (val == "8") {
							return state = "常委会审议中";
						} else if (val == "9") {
							return state = "常委会审议意见处理中";
						} else if (val == "10") {
							return state = "征求意见中";
						} else if (val == "11") {
							return state = "征求意见已通过";
						} else if (val == "12") {
							return state = "已反馈意见";
						} else if (val == "13") {
							return state = "已向常委会提出书面报告";
						}
					}
				})
				$.each(json, function(k, v) {
					$("#seesupinspection article").append(
						'<div class="divtop"><h1>执法检查信息' +
						'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
						'</h3><h4 >提出者:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">当前进程：' + state +
						'</div><div class="no">报备单位：' + v.initiator +
						'</div><div class="no">执法检查类别：' + v.reviewclass +
						'</div><div class="no">执法检查地点：' + v.place +
						'</div><div class="no">制定方案时间：' + shijian +
						'</div><div class="no">执法检查时间：' + inspecttime +
						'</div>')
				})
			})
		})
		//提交
		$("#supinspection .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = "",
					state = "",
					normalbutton = "",
					pdf = "";
				$("#anssupinspection article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"state": function(val) {
						if (val == "1") {
							return state = "待主任会议审议", normalbutton = "确认";
						} else if (val == "2") {
							return state = "主任会议审议中", normalbutton = "审议通过";
						} else if (val == "3") {
							return state = "方案实施中", normalbutton = "确认交送", pdf = "视察调研报告";
						} else if (val == "4") {
							return state = "准备专项报告中", pdf = "专项报告";
						} else if (val == "5") {
							return state = "征求意见中", normalbutton = "同意通过", pdf = "反馈意见";
						} else if (val == "6") {
							return state = "征求意见已通过", normalbutton = "提交常委会审议";
						} else if (val == "7") {
							return state = "征求意见中";
						} else if (val == "8") {
							return state = "常委会审议中", normalbutton = "提交审议意见", pdf = "常委会审议意见";
						} else if (val == "9") {
							return state = "常委会审议意见处理中", pdf = "最终专项报告";
						} else if (val == "10") {
							return state = "征求意见中", normalbutton = "同意通过", pdf = "反馈意见";
						} else if (val == "11") {
							return state = "征求意见已通过", normalbutton = "出书面报告", pdf = "书面报告";
						} else if (val == "12") {
							return state = "已反馈意见";
						} else if (val == "13") {
							return state = "已向常委会提出书面报告",normalbutton = "提交";
						}
					}
				})
				$.each(json, function(k, v) {
					$("#anssupinspection article").append(
						'<div class="divtop"><h1>听取和审议专项工作报告' +
						'</h1>' + 
						'<h4 >提出者:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">类别：' + v.reviewclass +
						'</div><div class="no">制定方案时间：' + shijian +
						'</div><div class="no1">当前进度：' + state +
						'</div><div class="no1">实施方案：' + v.enclosure +
						'</div><div class="fj">' + pdf + '<label>' +
						'<input type="file" class="file5"  name="file5" accept="." onchange="upfile5(this);" multiple>' +
						'</label><div class="fja"></div></div>' +
						'<div class="smalltitle lmr">送交单位<input class="mn" type="text" mission /><span class="span"></span></div>'+
						'<a class="normalbutton"><span>' + normalbutton + '</span></a>')
				})
				var missions = "",
					company = "";
				RssApi.Table.List("user").condition(new RssDict().keyvalue({
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(jsonn) {
					$.each(jsonn, function(k, v) {
						missions = v.mission;
					})
				})
				$("#anssupinspection .lmr").off().click(function() {
					var span = $("#anssupinspection .span").text().split(",");
					//$("#suggestsub .lmr span").empty();
					location.href = "#dbt"
					if (arry.indexOf("dbt") == "-1") {
						$("#dbt ul li").eq(0).siblings().remove();
						arry.push("dbt")
					} else {
						$("#dbt ul li").remove();
					}
					$("#dbt article .dbta").text(company);
					faqsajax = RssApi.View.List("user_delegation").setLoading(true).keyvalue("pagesize", "10000").condition(
						new RssDict().keyvalue({
							// "mission": missions,
							// "myid": "{notin~" + RssUser.Data.myid + "}"
						}).getDict()).setFlushUI(function(jsona, append) {
						let html = "";
						var flag = false;
						$.each(jsona, function(k, v) {
							for (var i = 0; i < span.length; i++) {
								if (v.myid == span[i]) {
									flag = true;
									break;
								}
							}
							html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
								' name="myid"  myid="' + v.myid +
								'" company="' + v.company + '" /><em>' + v.company +
								'</em><span class="dh">' + v.telphone +
								'</span></li>';
							flag = false;
						})
						$("#dbt article ul").html(html);
						//除了表头（第一行）以外所有的行添加click事件.
						$("#dbt ul>li").slice(0).click(function() {
							// 切换样式
							$(this).toggleClass("tr_active");
							// 找到checkbox对象
							var chks = $("input[type='checkbox']", this);
							var tag = $(this).attr("tag");
							if (tag == "selected") {
								// 之前已选中，设置为未选中
								$(this).attr("tag", "");
								chks.prop("checked", false);
							} else {
								// 之前未选中，设置为选中
								$(this).attr("tag", "selected");
								chks.prop("checked", true);
							}
						});
						$("#dbt article .submitName").off().click(function() {
							var id_array = new Array();
							var name_array = new Array();
							$('input[name="myid"]:checked').each(function() {
								id_array.push($(this).attr("myid")); //向数组中添加元素  
								name_array.push($($(this)).attr("company")); //向数组中添加元素  
							});
							var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
							var namestr = name_array.join(',');
							location.href = "#anssupinspection"
							$("#anssupinspection .span").text(idstr)
							$("#anssupinspection [mission]").val(namestr);
						});
					}).getJson();
				})
				$("#anssupinspection .normalbutton").off().click(function() {
					if (json[0].state == "1") {
						var state = "2";
						// var statename = $("supspecialwork .ans span").text();
						// $("supspecialwork .ans span").text("主任会议审议通过");
					} else if (json[0].state == "2") {
						var state = "3";
					} else if (json[0].state == "3") {
						var enclosure1 = $("#anssupinspection .fja").text() +",";
						var enclosurename1 = enclosure1.substring(enclosure1.lastIndexOf("\\") + 1);
						var state = "4";
					} else if (json[0].state == "4") {
						var enclosure2 = $("#anssupinspection .fja").text() +",";
						var enclosurename2 = enclosure2.substring(enclosure1.lastIndexOf("\\") + 1);
						var state = "5";
					} else if (json[0].state == "5") {
						var enclosure3 = $("#anssupinspection .fja").text() +",";
						var enclosurename3 = enclosure3.substring(enclosure3.lastIndexOf("\\") + 1);
						var state = "6";
					} else if (json[0].state == "6") {
						var state = "8";
					} else if (json[0].state == "8") {
						var enclosure4 = $("#anssupinspection .fja").text() +",";
						var enclosurename4 = enclosure4.substring(enclosure4.lastIndexOf("\\") + 1);
						var state = "9";
					} else if (json[0].state == "9") {
						var enclosure5 = $("#anssupinspection .fja").text() +",";
						var enclosurename5 = enclosure5.substring(enclosure5.lastIndexOf("\\") + 1);
						var state = "10";
					} else if (json[0].state == "10") {
						var enclosure6 = $("#anssupinspection .fja").text() +",";
						var enclosurename6 = enclosure6.substring(enclosure6.lastIndexOf("\\") + 1);
						var state = "11";
					} else if (json[0].state == "11") {
						var enclosure7 = $("#anssupinspection .fja").text() +",";
						var enclosurename7 = enclosure7.substring(enclosure7.lastIndexOf("\\") + 1);
						var state = "13";
					}
					var objid = $("#anssupinspection .lmr span").text();
					var shijian = Date.parse(new Date()) / 1000;
					var k1 = {
						"objid": objid,
						"enclosure1": enclosure1,
						"enclosurename1": enclosurename1,
						"enclosure2": enclosure2,
						"enclosurename2": enclosurename2,
						"enclosure3": enclosure3,
						"enclosurename3": enclosurename3,
						"enclosure4": enclosure4,
						"enclosurename4": enclosurename4,
						"enclosure5": enclosure5,
						"enclosurename5": enclosurename5,
						"enclosure6": enclosure6,
						"enclosurename6": enclosurename6,
						"enclosure7": enclosure7,
						"enclosurename7": enclosurename7,
						"state": state
					};
					console.log(k1)
					if (enclosure1 != "," && enclosure2 != "," && enclosure3 !=
						"," && enclosure4 != "," && enclosure5 !=
						"," && enclosure6 != ",") {
						RssApi.Edit("supervision_enforcement").setLoading(true)
							.keyvalue(k1).keyvalue({
								"id": key,
								"myid": RssUser.Data.myid
							}).getJson(function(json) {
								console.log(json)
								if (json.id) {
									alert("提交成功");
									$("#anssupinspection .fja").text("");
									location.href = "#supinspection";
								} else {
									alert("提交失败");
								}
							})
					} else {
						alert("请上传附件");
					}
				})
			})
		})
	}).getJson();
})

//预审执法检查方案
$("#supinspectionYS").load(function() {
	$("#supinspectionYS nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supinspectionYS") == "-1") {
			$("#supinspectionYS ul li").eq(0).siblings().remove();
			arry.push("supinspectionYS")
		} else {
			$("#supinspectionYS ul li").remove();
		}
		if ($(this).index() == "0") {
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(
				new RssDict()
				.keyvalue({
					"state": "1",
					"typeid": "3",
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				if (json.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length == 0 ) {
					$('.nosolutions').show();
				} else {
					$('.nosolutions').hide();
				}
				$("#supinspectionYS ul").mapview(json, {}, append);
				//查看
				$("#supinspectionYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(
							true)
						.condition(new RssDict().keyvalue({
							"id": key,
							"previewleadername": RssUser.Data.myid
						}).getDict()).getJson(function(json) {
							console.log(json)
							var shijian = ""
							$("#seesupinspectionYS article").mapview(json, {
								"shijian": function(val) {
									return shijian = new Date(parseInt(
											val) * 1000)
										.toString("yyyy-MM-dd hh:mm");
								},
								"inspecttime": function(val) {
									return inspecttime = new Date(
											parseInt(val) * 1000)
										.toString("yyyy-MM-dd hh:mm");
								},
								"state": function(val) {
									if (val == "1") {
										return state = "待主任会议审议";
									} else if (val == "2") {
										return state = "主任会议审议中";
									} else if (val == "3") {
										return state = "方案实施中";
									} else if (val == "4") {
										return state = "准备专项报告中";
									} else if (val == "5") {
										return state = "征求意见中";
									} else if (val == "6") {
										return state = "征求意见已通过";
									} else if (val == "7") {
										return state = "征求意见中";
									} else if (val == "8") {
										return state = "常委会审议中";
									} else if (val == "9") {
										return state = "常委会审议意见处理中";
									} else if (val == "10") {
										return state = "征求意见中";
									} else if (val == "11") {
										return state = "征求意见已通过";
									} else if (val == "12") {
										return state = "已反馈意见";
									} else if (val == "13") {
										return state = "已向常委会提出书面报告";
									}
								}
							})
							$.each(json, function(k, v) {
								$("#seesupinspectionYS article").append(
									'<div class="divtop"><h1>执法检查信息' +
									'</h1><h2>[第' + v.id +
									'号]</h2><h3>' + v.title +
									'</h3><h4 >提出者:' + v.initiator +
									'</h4><h4 shijian>' + shijian +
									'</h4></div><div class="no">当前进程：' +
									state +
									'</div><div class="no">报备单位：' + v
									.initiator +
									'</div><div class="no">执法检查类别：' + v
									.reviewclass +
									'</div><div class="no">执法检查地点：' + v
									.place +
									'</div><div class="no">制定方案时间：' +
									shijian +
									'</div><div class="no">执法检查时间：' +
									inspecttime +
									'</div>')
							})
						})
				})
				//审阅
				$("#supinspectionYS .ans").off().click(function() {
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					$("#anssupinspectionYS .normalbutton").off().click(function() {
						var isagree = $(
								"#anssupinspectionYS .marginb form input:radio:checked"
								)
							.val();
						var matter = $("#anssupinspectionYS textarea").val();
						if (isagree == "1") {
							var state = "2"
						} else if (isagree == "2") {
							var state = "5"
						}
						//同意状态是2  不同意状态是5
						var k1 = {
							"state": state,
							"matter": matter
						}
						RssApi.Edit("supervision_enforcement").setLoading(true)
							.keyvalue(k1)
							.keyvalue({
								"id": key,
								"myid": myid
							}).getJson(function(json) {
								if (json.id) {
									alert("审阅成功");
									$("#anssupinspectionYS textarea").val(
										"");
									location.href = "#supervRD";
								} else {
									alert("审阅失败");
								}
							})
					})
				})
			}).getJson();
		} else {
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(
				new RssDict()
				.keyvalue({
					"typeid": "3",
					"previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
				console.log(json)
				if (json.length != "10") {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				
				if (json.length == 0 ) {
					$('.nosolutions').show();
				} else {
					$('.nosolutions').hide();
				}
				$("#supinspectionYS ul").mapview(json, {}, append);
				//查看
				$("#supinspectionYS .see").off().click(function() {
					var key = $(this).parent().attr("id");
					faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(
							true)
						.condition(new RssDict().keyvalue({
							"id": key,
							"previewleadername": RssUser.Data.myid
						}).getDict()).getJson(function(json) {
							console.log(json)
							var shijian = ""
							$("#seesupinspectionYS article").mapview(json, {
								"shijian": function(val) {
									return shijian = new Date(parseInt(
											val) * 1000)
										.toString("yyyy-MM-dd hh:mm");
								},
								"inspecttime": function(val) {
									return inspecttime = new Date(
											parseInt(val) * 1000)
										.toString("yyyy-MM-dd hh:mm");
								},
								"state": function(val) {
									if (val == "1") {
										return state = "待主任会议审议";
									} else if (val == "2") {
										return state = "主任会议审议中";
									} else if (val == "3") {
										return state = "方案实施中";
									} else if (val == "4") {
										return state = "准备专项报告中";
									} else if (val == "5") {
										return state = "征求意见中";
									} else if (val == "6") {
										return state = "征求意见已通过";
									} else if (val == "7") {
										return state = "征求意见中";
									} else if (val == "8") {
										return state = "常委会审议中";
									} else if (val == "9") {
										return state = "常委会审议意见处理中";
									} else if (val == "10") {
										return state = "征求意见中";
									} else if (val == "11") {
										return state = "征求意见已通过";
									} else if (val == "12") {
										return state = "已反馈意见";
									} else if (val == "13") {
										return state = "已向常委会提出书面报告";
									}
								}
							})
							$.each(json, function(k, v) {
								$("#seesupinspectionYS article").append(
									'<div class="divtop"><h1>执法检查信息' +
									'</h1><h2>[第' + v.id +
									'号]</h2><h3>' + v.title +
									'</h3><h4 >提出者:' + v.initiator +
									'</h4><h4 shijian>' + shijian +
									'</h4></div><div class="no">当前进程：' +
									state +
									'</div><div class="no">报备单位：' + v
									.initiator +
									'</div><div class="no">执法检查类别：' + v
									.reviewclass +
									'</div><div class="no">执法检查地点：' + v
									.place +
									'</div><div class="no">制定方案时间：' +
									shijian +
									'</div><div class="no">执法检查时间：' +
									inspecttime +
									'</div>')
							})
						})
				})
				//审阅
				$("#supinspectionYS .ans").off().click(function() {
					$("#anssupinspectionYS .normalbutton").off().click(function() {
						alert("您已审阅过了")
						location.href = "#supinspectionYS";
					})
				})
			}).getJson();
		}
	})
	if (supinspectionYSnav == "1") {
		$("#supinspectionYS nav>a").eq(0).click();
		supinspectionYSnav = "0";
	}
})

//待出执法检查
$("#supinspectionDC").load(function() {
	if (arry.indexOf("supinspectionDC") == "-1") {
		$("#supinspectionDC ul li").eq(0).siblings().remove();
		arry.push("supinspectionDC")
	} else {
		$("#supinspectionDC ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict()
		.keyvalue({
			"company": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#supinspectionDC ul").mapview(json, {}, append);
		//查看
		$("#supinspectionDC .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true)
				.condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seesupinspectionDC article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"inspecttime": function(val) {
							return inspecttime = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seesupinspectionDC article").append(
							'<div class="divtop"><h1>执法检查信息' +
							'</h1>' + v.title +
							'<h4 >提出者:' + v.initiator +
							'</h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">当前进程：' + state +
							'</div><div class="no">报备单位：' + v.initiator +
							'</div><div class="no">执法检查类别：' + v.reviewclass +
							'</div><div class="no">执法检查地点：' + v.place +
							'</div><div class="no">制定方案时间：' + shijian +
							'</div><div class="no">执法检查时间：' + inspecttime +
							'</div>')
					})
				})
		})

		$("#supinspectionDC .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			var myid = $(this).attr("myid");
			$("#anssupinspectionDC .normalbutton").off().click(function() {
				var state = 4;
				var enclosurename = $("#anssupinspectionDC article .fj label input")
					.val();
				var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") +
					1);
				var k1 = {
					"state": state,
					"workreportenclosure": enclosurename,
					"workreportenclosurename": filename
				}
				if (enclosurename != "") {
					RssApi.Edit("supervision_enforcement").setLoading(true).keyvalue(k1)
						.keyvalue({
							"id": key,
							"myid": myid,
							"company": RssUser.Data.myid
						}).getJson(function(json) {
							if (json.id) {
								alert("提交成功");
								$("#anssupinspectionDC article .fj label input")
									.val("");
								location.href = "#supinspectionDC";
							} else {
								alert("提交失失败");
							}
						})
				} else {
					alert("请添加执法工作报告");
				}
			})
		})
	}).getJson();
})

//承办执法检查
$("#supuserrole").load(function() {
	if (arry.indexOf("supuserrole") == "-1") {
		$("#supuserrole ul li").eq(0).siblings().remove();
		arry.push("supuserrole")
	} else {
		$("#supuserrole ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict()
		.keyvalue({
			"typeid": "1",
			"previewleadername": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#supuserrole ul").mapview(json, {}, append);
		//查看
		$("#supuserrole .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true)
				.condition(new RssDict().keyvalue({
					"id": key,
					"previewleadername": RssUser.Data.myid
				}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seesupuserrole article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"inspecttime": function(val) {
							return inspecttime = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seesupuserrole article").append(
							'<div class="divtop"><h1>执法检查信息' +
							'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
							'</h3><h4 >提出者:' + v.initiator +
							'</h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">当前进程：' + state +
							'</div><div class="no">报备单位：' + v.initiator +
							'</div><div class="no">执法检查类别：' + v.reviewclass +
							'</div><div class="no">执法检查地点：' + v.place +
							'</div><div class="no">制定方案时间：' + shijian +
							'</div><div class="no">执法检查时间：' + inspecttime +
							'</div>')
					})
				})
		})
	}).getJson();
})

//已完成的执法检查
$("#endsupinspection").load(function() {
	if (arry.indexOf("endsupinspection") == "-1") {
		$("#endsupinspection ul li").eq(0).siblings().remove();
		arry.push("endsupinspection")
	} else {
		$("#endsupinspection ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(new RssDict().keyvalue({
		"taskDone": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#endsupinspection ul").mapview(json, {}, append);
		//查看
		$("#endsupinspection .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_enforcement").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeendsupinspection article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"inspecttime": function(val) {
						return inspecttime = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"state": function(val) {
						if (val == "1") {
							return state = "待主任会议审议";
						} else if (val == "2") {
							return state = "主任会议审议中";
						} else if (val == "3") {
							return state = "方案实施中";
						} else if (val == "4") {
							return state = "准备专项报告中";
						} else if (val == "5") {
							return state = "征求意见中";
						} else if (val == "6") {
							return state = "征求意见已通过";
						} else if (val == "7") {
							return state = "征求意见中";
						} else if (val == "8") {
							return state = "常委会审议中";
						} else if (val == "9") {
							return state = "常委会审议意见处理中";
						} else if (val == "10") {
							return state = "征求意见中";
						} else if (val == "11") {
							return state = "征求意见已通过";
						} else if (val == "12") {
							return state = "已反馈意见";
						} else if (val == "13") {
							return state = "已向常委会提出书面报告";
						}
					}
				})
				$.each(json, function(k, v) {
					$("#seeendsupinspection article").append(
						'<div class="divtop"><h1>执法检查信息' +
						'</h1>'  + '<h3>' + v.title +
						'</h3><h4 >提出者:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">当前进程：' + state +
						'</div><div class="no">报备单位：' + v.initiator +
						'</div><div class="no">执法检查类别：' + v.reviewclass +
						'</div><div class="no">执法检查地点：' + v.place +
						'</div><div class="no">制定方案时间：' + shijian +
						'</div><div class="no">执法检查时间：' + inspecttime +
						'</div><div class="no">主任会议届次：' + v
						.directormeetingnum +
						'</div><div class="no">执法检查方案：' + v.enclosure +
						'</div><div class="no">执法工作报告：' + v
						.workreportenclosure +
						'</div><div class="no">执法检查报告：' + v
						.Reportenclosure +
						'</div><div class="no">交办意见：' + v.assignenclosure +
						'</div><div class="no">办理报告：' + v
						.handleReportenclosure +
						'</div>')
				})
			})
		})
	}).getJson();
})
//新增专项工作报告
$("#supspecialworkXZ").load(function() {
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	
	reviewclass = {};
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#supspecialworkXZ [reviewclass]").attr("relationid", v.id)
			$("#supspecialworkXZ [reviewclass]").text(v.name)
		})
		$("#supspecialworkXZ [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	
	$("#supspecialworkXZ .lmr").off().click(function() {
		addmember ( "supspecialworkXZ" );
		// var span = $("#supspecialworkXZ .span").text().split(",");
		// location.href = "#dbt"
		// if (arry.indexOf("dbt") == "-1") {
		// 	$("#dbt ul li").eq(0).siblings().remove();
		// 	arry.push("dbt")
		// } else {
		// 	$("#dbt ul li").remove();
		// }
		// $("#dbt article .dbta").text(realname);
		// faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10000").condition(
		// 	new RssDict().keyvalue({
		// 		"mission": missions,
		// 		"myid": "{notin~" + RssUser.Data.myid + "}"
		// 	}).getDict()).setFlushUI(function(jsona, append) {
		// 	let html = "";
		// 	var flag = false;
		// 	$.each(jsona, function(k, v) {
		// 		for (var i = 0; i < span.length; i++) {
		// 			if (v.myid == span[i]) {
		// 				flag = true;
		// 				break;
		// 			}
		// 		}
		// 		html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
		// 			' name="myid"  myid="' + v.myid +
		// 			'" realname="' + v.realname + '" /><em>' + v.realname +
		// 			'</em><span class="dh">' + v.telphone +
		// 			'</span></li>';
		// 		flag = false;
		// 	})
		// 	$("#dbt article ul").html(html);
		// 	$("#dbt ul>li").slice(0).click(function() {
		// 		$(this).toggleClass("tr_active");
		// 		var chks = $("input[type='checkbox']", this);
		// 		var tag = $(this).attr("tag");
		// 		if (tag == "selected") {
		// 			$(this).attr("tag", "");
		// 			chks.prop("checked", false);
		// 		} else {
		// 			$(this).attr("tag", "selected");
		// 			chks.prop("checked", true);
		// 		}
		// 	});
		// 	$("#dbt article .submitName").off().click(function() {
		// 		var id_array = new Array();
		// 		var name_array = new Array();
		// 		$('input[name="myid"]:checked').each(function() {
		// 			id_array.push($(this).attr("myid")); //向数组中添加元素  
		// 			name_array.push($($(this)).attr("realname")); //向数组中添加元素  
		// 		});
		// 		var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
		// 		var namestr = name_array.join(',');
		// 		location.href = "#supspecialworkXZ"
		// 		$("#supspecialworkXZ span").text(idstr)
		// 		$("#supspecialworkXZ [mission]").val(namestr);
		// 	});
		// }).getJson();
	})
	
	$("#supspecialworkXZ .submitbutton").off().click(function() {
		
		submitnewsolution ("supspecialworkXZ");
	// 	//将前端输入的数据放到k1对象中
	// 	var title = $("#supspecialworkXZ .marginb input").val();
	// 	var reviewclass = $("#supspecialworkXZ .marginb .select").val();
	// 	var directormeetingnum = $("#supspecialworkXZ .marginb .directormeetingnum").val();
	// 	var notice = $("#supspecialworkXZ textarea").val();
	// 	var enclosure = $("#supspecialworkXZ .fja").text() + ",";
	// 	//参与人id
	// 	var userid = $("#supspecialworkXZ .lmr span").text();
	// 	var enclosurename = $("#supspecialworkXZ article .fj label input").val() + ",";
	// 	var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
	// 	var shijian = Date.parse(new Date()) / 1000;

	// 	//活动开始时间
	// 	if ($("#supspecialworkXZ .form .marginb .month").val() < 10) {
	// 		var zx_month = 0 + $("#supspecialworkXZ .form .marginb .month").val()
	// 	} else {
	// 		var zx_month = $("#supspecialworkXZ .form .marginb .month").val()
	// 	}
	// 	if ($("#supspecialworkXZ .form .marginb .day").val() < 10) {
	// 		var zx_day = 0 + $("#supspecialworkXZ .form .marginb .day").val()
	// 	} else {
	// 		var zx_day = $("#supspecialworkXZ .form .marginb .day").val()
	// 	}
	// 	var HDbeginshijian = $("#supspecialworkXZ .form .marginb .year").val() + "-" + zx_month + "-" +
	// 		zx_day;
	// 	var directorshijian = Math.round(new Date(HDbeginshijian) / 1000);

	// 	var k1 = {
	// 		"title": title,
	// 		"reviewclass": reviewclass,
	// 		"directormeetingnum": directormeetingnum,
	// 		"notice": notice,
	// 		"enclosure": enclosure,
	// 		"myid": RssUser.Data.myid,
	// 		"shijian": shijian,
	// 		"enclosurename": filename,
	// 		"directorshijian": directorshijian,
	// 		"objid": userid
	// 	}
	// 	console.log(k1)
		
	// 	if (title != "" && notice != "") {
	// 		//标题和问题不能为空
	// 		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue().condition(
	// 			new RssDict().keyvalue({
	// 				"myid": RssUser.Data.myid
	// 		}).getDict()).setFlushUI(function(json, append) {
	// 			var realname=json[0].realname
	// 			console.log(realname)
	// 			RssApi.Edit("supervision_specialwork").setLoading(true).keyvalue({
	// 				"title": title,
	// 				"reviewclass": reviewclass,
	// 				"directormeetingnum": directormeetingnum,
	// 				"notice": notice,
	// 				"enclosure": enclosure,
	// 				"myid": RssUser.Data.myid,
	// 				"shijian": shijian,
	// 				"enclosurename": filename,
	// 				"directorshijian": directorshijian,
	// 				"objid": userid,
	// 				"initiator": realname,
	// 				"state": 1,
	// 				"lwstate": 1,
	// 				"typeid": 1
	// 			}).getJson(function(json) {
	// 				console.log(json)
	// 				if (json.id) {
	// 					alert("提交成功");
	// 					$("#supspecialworkXZ .marginb input").val("");
	// 					$("#supspecialworkXZ .marginb select").val("");
	// 					$("#supspecialworkXZ .marginb .directormeetingnum").val("");
	// 					$("#supspecialworkXZ textarea").val("");
	// 					$("#supspecialworkXZ .fja").text("");
	// 					$("#supspecialworkXZ .lmr span").text("");
	// 					$("#supspecialworkXZ [mission]").val("");
	// 					location.href = "#supervRD";
	// 				} else {
	// 					alert("提交失败");
	// 				}
	// 			})
	// 		}).getJson();
	// 	} else {
	// 		alert("活动的标题和内容不能为空！");
	// 	}
	})
})
//我的专项工作报告
$("#supspecialwork").load(function() {
	
	$("#supspecialwork nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("supspecialwork") == "-1") {
		$("#supspecialwork ul li").eq(0).siblings().remove();
		arry.push("supspecialwork")
		} else {
		$("#supspecialwork ul li").remove();
		}
		if ($(this).index() == "0") {
			// console.log("____________ index = 0  ") ;
			faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(new RssDict().keyvalue({
				"myid": RssUser.Data.myid,
				"typeid": "1"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						var initiator = "提出者: " + v.initiator ;
						json2.push( v );
					})
	
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
	
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmysolutiondata ( v , "supspecialwork" );				 
					})				
			}).getJson();
		} // 0
		else {
			// console.log("____________ index = 1  ") ;
			faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(new RssDict().keyvalue({
				// "myid": RssUser.Data.myid,
				"typeid": "8"
				}).getDict()).setFlushUI(function(json, append) {
					console.log(json)
					var json2 = [];
					$.each(json, function(k, v) {
						// var initiator = "提出者: " + v.initiator ;
						if ( isparticipant ( v ) ) {
							
						    json2.push( v );
						}
					})
				
					if (json2.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}
				
				
					if (json2.length > 0 ) {
						$('.nosolutions').hide();
					} else {
						$('.nosolutions').show();
					}
				
					$.each(json2, async function(k, v) {
						
						fillmysolutiondata ( v , "specialwork" );				 
					})				
			}).getJson();
		}
	})
	
	if (specialworknav == "1") {
		$("#supspecialwork nav>a").eq(0).click();
		specialworknav = "0";
	}
	
})
$("#supspecialwork_old").load(function() {
	if (arry.indexOf("supspecialwork") == "-1") {
		$("#supspecialwork ul li").eq(0).siblings().remove();
		arry.push("supspecialwork")
	} else {
		$("#supspecialwork ul li").remove();
	}
	var json2 = [];
	faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(new RssDict().keyvalue({
		// "myid": RssUser.Data.myid,
		"typeid": 1
	}).getDict()).setFlushUI(function( json, append) {
		
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			var initiator = "提出者: " + v.initiator ;
			var state = "办理进度: " + getSpecialWorkprogress( v ) ;
			v.state = state ;
			v.initiator = initiator ;
			var myrecord = 0 ;
			console.log("_______ 专项工作报告 v.myid="+v.myid)
			console.log("_______ 专项工作报告 RssUser.Data.myid="+RssUser.Data.myid)
			if ( v.myid == RssUser.Data.myid ) {
				myrecord = 1 ;
			}
			else {
				if ( !isEmpty( v.objid ) ) { //判断是否是参与者
					if ( v.objid.indexOf ( RssUser.Data.myid )  != -1 ) { //我是参与者
						myrecord = 1 ;
					}
				}
			}
			
			if ( myrecord == 1 ) {
				console.log("_______ push v.myid=")
				json2.push( v );
			}
		})
		
		if (json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		// 显示无记录提示
		if (json2.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
		}
		
		// $("#supspecialwork ul").mapview(json2, {}, append);
		//7和12没有  3 4 5 8 9 10 11需要上传附件  4和9需要审核
		$("#supspecialwork ul").mapview(json2, {
			"cmd_value": function(val) {
				if (val == "1") {
					return cmd_value = "主任会议审议";
				} else if (val == "2") {
					return cmd_value = "主任会议审议通过";
				} else if (val == "3") {
					return cmd_value = "交送";
					//选择提交单位 上传附件 1.视察调研报告
				} else if (val == "4") {
					$(this).find(".ans").hide();
					return state = "";
					//单位审核  征求意见 上传附件 2.专项报告
				} else if (val == "5") {
					return cmd_value = "反馈意见";
					// $('#supspecialwork article .ans').show();
					//上传附件 3.反馈意见
				} else if (val == "6") {
					return cmd_value = "常委会审议";
					//上传常委会时间和常委会届次
				} else if (val == "8") {
					return cmd_value = "常委会审议完成";
					//上传附件 4.常委会审议意见
				} else if (val == "9") {
					return cmd_value = "";
					//单位审核 完成常委会审议意见 上传附件 5.最终专项报告
				} else if (val == "10") {
					return cmd_value = "反馈意见";
					//上传附件 6.反馈意见
				} else if (val == "11") {
					return cmd_value = "向常委会出报告";
					//上传附件 7.书面报告
				} else if (val == "13") {
					return cmd_value = "满意度测评";
				}
			}
		}, append);
		
		//查看
		$("#supspecialwork .see").off().click(function() {
			var key = $(this).parent().attr("id");
			viewSpecialworkDetail ( "seesupspecialwork" , key ) ;
			// faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key,
			// 		"myid": RssUser.Data.id
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = "",
			// 		state = "";
			// 	$("#seesupspecialwork article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"state": function(val) {
			// 			if (val == "1") {
			// 				return state = "待主任会议审议";
			// 			} else if (val == "2") {
			// 				return state = "主任会议审议中";
			// 			} else if (val == "3") {
			// 				return state = "方案实施中";
			// 			} else if (val == "4") {
			// 				return state = "准备专项报告中";
			// 			} else if (val == "5") {
			// 				return state = "征求意见中";
			// 			} else if (val == "6") {
			// 				return state = "征求意见已通过";
			// 			} else if (val == "7") {
			// 				return state = "征求意见中";
			// 			} else if (val == "8") {
			// 				return state = "常委会审议中";
			// 			} else if (val == "9") {
			// 				return state = "常委会审议意见处理中";
			// 			} else if (val == "10") {
			// 				return state = "征求意见中";
			// 			} else if (val == "11") {
			// 				return state = "征求意见已通过";
			// 			} else if (val == "12") {
			// 				return state = "已反馈意见";
			// 			} else if (val == "13") {
			// 				return state = "已向常委会提出书面报告";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seesupspecialwork article").append(
			// 			'<div class="divtop"><h1>听取和审议专项工作报告' +
			// 			'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.initiator +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="no">类别：' + v.reviewclass +
			// 			'</div><div class="no">制定方案时间：' + shijian +
			// 			'</div><div class="no1">当前进度：' + state +
			// 			'</div><div class="no1">实施方案：' + v.enclosure +
			// 			'</div><div class="no1">视察调研报告：' + v.enclosure1 +
			// 			'</div><div class="no1">专项报告：' + v.enclosure2 +
			// 			'</div><div class="no1">常委会审议意见：' + v.enclosure3 +
			// 			'</div><div class="no1">最终专项报告：' + v
			// 			.enclosure4 +
			// 			'</div><div class="no1">反馈意见：' + v
			// 			.enclosure5 +
			// 			'</div><div class="no1">书面报告：' + v
			// 			.enclosure6 +
			// 			'</div>')
			// 	})
			// })

		})
		//显示内容、提交
		$("#supspecialwork .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = "",
					state = "",
					normalbutton = "",
					pdf = "";
				$("#anssupspecialwork article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"state": function(val) {
						if (val == "1") {
							return state = "待主任会议审议", normalbutton = "确认";
						} else if (val == "2") {
							return state = "主任会议审议中", normalbutton = "审议通过";
						} else if (val == "3") {
							return state = "方案实施中", normalbutton = "确认交送", pdf = "视察调研报告";
						} else if (val == "4") {
							return state = "准备专项报告中", pdf = "专项报告";
						} else if (val == "5") {
							return state = "征求意见中", normalbutton = "同意通过", pdf = "反馈意见";
						} else if (val == "6") {
							return state = "征求意见已通过", normalbutton = "提交常委会审议";
						} else if (val == "7") {
							return state = "征求意见中";
						} else if (val == "8") {
							return state = "常委会审议中", normalbutton = "提交审议意见", pdf = "常委会审议意见";
						} else if (val == "9") {
							return state = "常委会审议意见处理中", pdf = "最终专项报告";
						} else if (val == "10") {
							return state = "征求意见中", normalbutton = "同意通过", pdf = "反馈意见";
						} else if (val == "11") {
							return state = "征求意见已通过", normalbutton = "出书面报告", pdf = "书面报告";
						} else if (val == "12") {
							return state = "已反馈意见";
						} else if (val == "13") {
							return state = "已向常委会提出书面报告",normalbutton = "提交";
						}
					}
				})
				$.each(json, function(k, v) {
					$("#anssupspecialwork article").append(
						'<div class="divtop"><h1>听取和审议专项工作报告' +
						'</h1>' + '<h3>' + v.title +
						'</h3><h4 >提出者:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">类别：' + v.reviewclass +
						'</div><div class="no">制定方案时间：' + shijian +
						'</div><div class="no1">当前进度：' + state +
						'</div><div class="no1">实施方案：' + v.enclosure +
						'</div><div class="fj">' + pdf + '<label>' +
						'<input type="file" class="file5"  name="file5" accept="." onchange="upfile5(this);" multiple>' +
						'</label><div class="fja"></div></div>' +
						'<div class="smalltitle lmr">送交单位<input class="mn" type="text" mission /><span class="span"></span></div>'+
						'<a class="normalbutton"><span>' + normalbutton + '</span></a>')
				})
				var missions = "",
					company = "";
				RssApi.Table.List("user").condition(new RssDict().keyvalue({
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(jsonn) {
					$.each(jsonn, function(k, v) {
						missions = v.mission;
					})
				})
				$("#anssupspecialwork .lmr").off().click(function() {
					var span = $("#anssupspecialwork .span").text().split(",");
					//$("#suggestsub .lmr span").empty();
					location.href = "#dbt"
					if (arry.indexOf("dbt") == "-1") {
						$("#dbt ul li").eq(0).siblings().remove();
						arry.push("dbt")
					} else {
						$("#dbt ul li").remove();
					}
					$("#dbt article .dbta").text(company);
					faqsajax = RssApi.View.List("user_delegation").setLoading(true).keyvalue("pagesize", "10000").condition(
						new RssDict().keyvalue({
							// "mission": missions,
							// "myid": "{notin~" + RssUser.Data.myid + "}"
						}).getDict()).setFlushUI(function(jsona, append) {
						let html = "";
						var flag = false;
						$.each(jsona, function(k, v) {
							for (var i = 0; i < span.length; i++) {
								if (v.myid == span[i]) {
									flag = true;
									break;
								}
							}
							html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
								' name="myid"  myid="' + v.myid +
								'" company="' + v.company + '" /><em>' + v.company +
								'</em><span class="dh">' + v.telphone +
								'</span></li>';
							flag = false;
						})
						$("#dbt article ul").html(html);
						//除了表头（第一行）以外所有的行添加click事件.
						$("#dbt ul>li").slice(0).click(function() {
							// 切换样式
							$(this).toggleClass("tr_active");
							// 找到checkbox对象
							var chks = $("input[type='checkbox']", this);
							var tag = $(this).attr("tag");
							if (tag == "selected") {
								// 之前已选中，设置为未选中
								$(this).attr("tag", "");
								chks.prop("checked", false);
							} else {
								// 之前未选中，设置为选中
								$(this).attr("tag", "selected");
								chks.prop("checked", true);
							}
						});
						$("#dbt article .submitName").off().click(function() {
							var id_array = new Array();
							var name_array = new Array();
							$('input[name="myid"]:checked').each(function() {
								id_array.push($(this).attr("myid")); //向数组中添加元素  
								name_array.push($($(this)).attr("company")); //向数组中添加元素  
							});
							var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
							var namestr = name_array.join(',');
							location.href = "#anssupspecialwork"
							$("#anssupspecialwork .span").text(idstr)
							$("#anssupspecialwork [mission]").val(namestr);
						});
					}).getJson();
				})
				$("#anssupspecialwork .normalbutton").off().click(function() {
					if (json[0].state == "1") {
						var state = "2";
						// var statename = $("supspecialwork .ans span").text();
						// $("supspecialwork .ans span").text("主任会议审议通过");
					} else if (json[0].state == "2") {
						var state = "3";
					} else if (json[0].state == "3") {
						var enclosure1 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename1 = enclosure1.substring(enclosure1.lastIndexOf("\\") + 1);
						var state = "4";
					} else if (json[0].state == "4") {
						var enclosure2 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename2 = enclosure2.substring(enclosure1.lastIndexOf("\\") + 1);
						var state = "5";
					} else if (json[0].state == "5") {
						var enclosure3 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename3 = enclosure3.substring(enclosure3.lastIndexOf("\\") + 1);
						var state = "6";
					} else if (json[0].state == "6") {
						var state = "8";
					} else if (json[0].state == "8") {
						var enclosure4 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename4 = enclosure4.substring(enclosure4.lastIndexOf("\\") + 1);
						var state = "9";
					} else if (json[0].state == "9") {
						var enclosure5 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename5 = enclosure5.substring(enclosure5.lastIndexOf("\\") + 1);
						var state = "10";
					} else if (json[0].state == "10") {
						var enclosure6 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename6 = enclosure6.substring(enclosure6.lastIndexOf("\\") + 1);
						var state = "11";
					} else if (json[0].state == "11") {
						var enclosure7 = $("#anssupspecialwork .fja").text() +",";
						var enclosurename7 = enclosure7.substring(enclosure7.lastIndexOf("\\") + 1);
						var state = "13";
					}
					var objid = $("#anssupspecialwork .lmr span").text();
					var shijian = Date.parse(new Date()) / 1000;
					var k1 = {
						"objid": objid,
						"enclosure1": enclosure1,
						"enclosurename1": enclosurename1,
						"enclosure2": enclosure2,
						"enclosurename2": enclosurename2,
						"enclosure3": enclosure3,
						"enclosurename3": enclosurename3,
						"enclosure4": enclosure4,
						"enclosurename4": enclosurename4,
						"enclosure5": enclosure5,
						"enclosurename5": enclosurename5,
						"enclosure6": enclosure6,
						"enclosurename6": enclosurename6,
						"enclosure7": enclosure7,
						"enclosurename7": enclosurename7,
						"state": state
					};
					console.log(k1)
					if (enclosure1 != "," && enclosure2 != "," && enclosure3 !=
						"," && enclosure4 != "," && enclosure5 !=
						"," && enclosure6 != ",") {
						RssApi.Edit("supervision_specialwork").setLoading(true)
							.keyvalue(k1).keyvalue({
								"id": key,
								"myid": RssUser.Data.myid
							}).getJson(function(json) {
								console.log(json)
								if (json.id) {
									alert("提交成功");
									$("#anssupspecialwork .fja").text("");
									location.href = "#supspecialwork";
								} else {
									alert("提交失败");
								}
							})
					} else {
						alert("请上传附件");
					}
				})
			})
		})

	}).getJson();
})

//承办专项工作报告
$("#supspecialworkCB").load(function() {
	if (arry.indexOf("supspecialworkCB") == "-1") {
		$("#supspecialworkCB ul li").eq(0).siblings().remove();
		arry.push("supspecialworkCB")
	} else {
		$("#supspecialworkCB ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_userrole_specialwork").setLoading(true).condition(new RssDict()
		.keyvalue({
			// "state": 4,
			// "state": 9,
			"userroleid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if ( json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		
		$("#supspecialworkCB ul").mapview(json, {}, append);
		//查看
		$("#supspecialworkCB .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_userrole_specialwork").setLoading(true)
				.condition(
					new RssDict().keyvalue({
						"id": key
					}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = "",
						state = "";
					$("#seesupspecialworkCB article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seesupspecialworkCB article").append(
							'<div class="divtop"><h1>听取和审议专项工作报告' +
							'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
							'</h3><h4 >提出者:' + v.initiator +
							'</h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">类别：' + v.reviewclass +
							'</div><div class="no">制定方案时间：' + shijian +
							'</div><div class="no1">当前进度：' + state +
							'</div><div class="no1">实施方案：' + v.enclosure +
							'</div><div class="no1">视察调研报告：' + v.enclosure1 +
							'</div>')
					})
				})
		})
		//征求意见
		$("#supspecialworkCB .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			var myid = $(this).attr("myid");
			$("#anssupspecialworkCB .normalbutton").off().click(function() {
				if (json[0].state == "4") {
					var state = 5;
				} else if (json[0].state == "9") {
					var state = 10;
				}
				var enclosure2 = $("#anssupspecialworkCB article .fj label input")
					.val();
				var enclosurename2 = enclosure2.substring(enclosure2.lastIndexOf("\\") +
					1);
				var enclosure5 = $("#anssupspecialworkCB article .fj label input")
					.val();
				var enclosurename5 = enclosure5.substring(enclosure5.lastIndexOf("\\") +
					1);
				var k1 = {
					"state": state,
					"enclosure2": enclosure2,
					"enclosurename2": enclosurename2,
					"enclosure5": enclosure5,
					"enclosurename5": enclosurename5,
				}
				console.log(k1)
				if (enclosure2 != "") {
					RssApi.Edit("supervision_userrole_specialwork").setLoading(true).keyvalue(k1)
						.keyvalue({
							"id": key,
							"myid": myid,
							"userroleid": RssUser.Data.myid
						}).getJson(function(json) {
							if (json.id) {
								alert("提交成功");
								$("#anssupspecialworkCB article .fj label input").val("");
								location.href = "#supspecialworkCB";
							} else {
								alert("提交失败");
							}
						})
				} else {
					alert("请提交专项报告文件");
				}
			})
		})
	}).getJson();
})

//已完成的专项工作报告
$("#endsupspecialwork").load(function() {
	if (arry.indexOf("endsupspecialwork") == "-1") {
		$("#endsupspecialwork ul li").eq(0).siblings().remove();
		arry.push("endsupspecialwork")
	} else {
		$("#endsupspecialwork ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(new RssDict().keyvalue({
		"taskDone": "1"
	}).getDict()).setFlushUI(function(json, append) {
		// console.log("_____已完成的专项工作报告",json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		
		
		
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			var initiator = "提出者: " + v.initiator ;
			v.initiator = initiator ;
			v.state = "办理进度: 已完成" ;
			json2.push( v );
		})
		if (json2.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		
		$("#endsupspecialwork ul").mapview(json2, {}, append);
		//查看
		$("#endsupspecialwork .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seeendsupspecialwork";
			viewSpecialworkDetail ( obj, key );
			// faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(
			// 	new RssDict().keyvalue({
			// 		"id": key,
			// 		"myid": RssUser.Data.id
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeendsupspecialwork article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seeendsupspecialwork article").append(
			// 			'<div class="divtop"><h1>听取和审议专项工作报告' +
			// 			'</h1>' + '<h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.initiator +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="no">类别：' + v.reviewclass +
			// 			'</div><div class="no">制定方案时间：' + shijian +
			// 			'</div><div class="no">当前进度：已向常委会提出书面报告</div>')
			// 	})
			// })
		})
	}).getJson();
})
// 财政监督
// 我的通知
$("#financial").load(function() {
	if (arry.indexOf("financial") == "-1") {
		$("#financial ul li").eq(0).siblings().remove();
		arry.push("financial")
	} else {
		$("#financial ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_finance").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#financial ul").mapview(json, {}, append);
		//查看
		$("#financial .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict().keyvalue({
				"id": key,
				"myid": RssUser.Data.myid
			}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seefinancial article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000).toString("yyyy-MM-dd hh:mm");
					},
					"state": function(val) {
						if (val == "1") {
							return state = "通知已发";
						} else if (val == "2") {
							return state = "调研结束";
						} else if (val == "3") {
							return state = "常委会审议中";
						} else if (val == "4") {
							return state = "常委会审议报告结束";
						} else if (val == "5") {
							return state = "专题询问方案被主任会议驳回";
						} else if (val == "6") {
							return state = "总询问问题提纲准备中";
						} else if (val == "7") {
							return state = "待主任会议审议总询问问题提纲";
						} else if (val == "8") {
							return state = "召开专题询问会中";
						} else if (val == "9") {
							return state = "满意度测评中";
						} else if (val == "10") {
							return state = "办理中";
						} else if (val == "11") {
							return state = "已完结";
						} else if (val == "12") {
							return state = "已反馈意见";
						} else if (val == "13") {
							return state = "已向常委会提出书面报告";
						}
					}
				})
				$.each(json, function(k, v) {
					$("#seefinancial article").append(
						'<div class="divtop"><h1>' + v.title +
						'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
						'</h3><h4 ></h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">发起时间：' + shijian +
						'</div><div class="no">当前进度：' + state + '</div>')
				})
			})
		})
	}).getJson();
})
//新增专题询问
$("#supevaluationXZ").load(function() {
	var missions = "",
		realname = "";
	RssApi.Table.List("committee_member").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	$("#supevaluationXZ .lmr").off().click(function() {
		var span = $("#supevaluationXZ .span").text().split(",");
		//$("#suggestsub .lmr span").empty();
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "10000").condition(
			new RssDict().keyvalue({
				"myid": "{notin~" + RssUser.Data.myid + "}"
			}).getDict()).setFlushUI(function(jsona, append) {
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < span.length; i++) {
					if (v.myid == span[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="myid"  myid="' + v.myid +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.telphone +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}
			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="myid"]:checked').each(function() {
					id_array.push($(this).attr("myid")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestr = name_array.join(',');
				location.href = "#supevaluationXZ"
				$("#supevaluationXZ .lmr label").text(idstr)
				$("#supevaluationXZ [mission]").val(namestr);
			});
		}).getJson();
	})

	$("#supevaluationXZ .normalbutton").off().click(function() {

		//将前端输入的数据放到k1对象中
		var title = $("#supevaluationXZ .marginb input").val();
		var enclosure = $("#supevaluationXZ .fja").text() + ",";
		//参与人id
		var userid = $("#supevaluationXZ .lmr label").text();
		var enclosurename = $("#supevaluationXZ article .fj label input").val() + ",";
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
		var shijian = Date.parse(new Date()) / 1000;

		var k1 = {
			"title": title,
			"enclosure": enclosure,
			"myid": RssUser.Data.myid,
			"shijian": shijian,
			"enclosurename": filename,
			"previewleadername": userid,
			"initiator": RssUser.Data.myid,
			"state": 1,
			"typeid": 5,
			"lwstate": 5
		}

		console.log(k1)
		if (title != "" && userid != "") {
			//标题和问题不能为空
			RssApi.Edit("supervision_special_inquery").setLoading(true).keyvalue(k1).keyvalue({
				"myid": RssUser.Data.myid
			}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");
					$("#supevaluationXZ .marginb input").val("");
					$("#supevaluationXZ textarea").val("");
					$("#supevaluationXZ .fja").text("");
					$("#supevaluationXZ .lmr label").text("");
					$("#supevaluationXZ [mission]").val("");
					location.href = "#supervRD";
				} else {
					alert("提交失败");
				}
			})
		} else {
			alert("活动的标题和内容不能为空！");
		}
	})
})
//专题询问
// $("#supevaluation").load(function() {
// 	if (arry.indexOf("supevaluation") == "-1") {
// 		$("#supevaluation ul li").eq(0).siblings().remove();
// 		arry.push("supevaluation")
// 	} else {
// 		$("#supevaluation ul li").remove();
// 	}
// 	faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
// 		.keyvalue({
// 			"myid": RssUser.Data.myid
// 		}).getDict()).setFlushUI(function(json, append) {
// 		console.log(json)
// 		if (json.length < 10 ) {
// 			$('.nodata').hide();
// 		} else {
// 			$('.nodata').show();
// 		}
		
// 		if (json.length == 0 ) {
// 			$('.nosolutions').show();
// 		} else {
// 			$('.nosolutions').hide();
// 		}
// 		$("#supevaluation ul").mapview(json, {}, append);
// 		//查看
// 		$("#supevaluation .see").off().click(function() {
// 			var key = $(this).parent().attr("id");
// 			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true)
// 				.condition(
// 					new RssDict().keyvalue({
// 						"id": key,
// 						"myid": RssUser.Data.myid
// 					}).getDict()).getJson(function(json) {
// 					console.log(json)
// 					var shijian = ""
// 					$("#seesupevaluation article").mapview(json, {
// 						"shijian": function(val) {
// 							return shijian = new Date(parseInt(val) * 1000)
// 								.toString("yyyy-MM-dd hh:mm");
// 						},
// 						"state": function(val) {
// 							if (val == "1") {
// 								return state = "待主任会议审议";
// 							} else if (val == "2") {
// 								return state = "主任会议审议中";
// 							} else if (val == "3") {
// 								return state = "方案实施中";
// 							} else if (val == "4") {
// 								return state = "准备专项报告中";
// 							} else if (val == "5") {
// 								return state = "征求意见中";
// 							} else if (val == "6") {
// 								return state = "征求意见已通过";
// 							} else if (val == "7") {
// 								return state = "征求意见中";
// 							} else if (val == "8") {
// 								return state = "常委会审议中";
// 							} else if (val == "9") {
// 								return state = "常委会审议意见处理中";
// 							} else if (val == "10") {
// 								return state = "征求意见中";
// 							} else if (val == "11") {
// 								return state = "征求意见已通过";
// 							} else if (val == "12") {
// 								return state = "已反馈意见";
// 							} else if (val == "13") {
// 								return state = "已向常委会提出书面报告";
// 							}
// 						}
// 					})
// 					$.each(json, function(k, v) {
// 						$("#seesupevaluation article").append(
// 							'<div class="divtop"><h1>' + v.title +
// 							'</h1>' + '<h3>' + v.title +
// 							'</h3><h4 ></h4><h4 shijian>' + shijian +
// 							'</h4></div><div class="no">发起时间：' + shijian +
// 							'</div><div class="no">当前进度：' + state + '</div>')
// 					})
// 				})
// 		})
// 		//提交主任会议
// 		$("#supevaluation .ans").off().click(function() {
// 			var key = $(this).parent().attr("id");
// 			$("#anssupevaluation .normalbutton").off().click(function() {
// 				var isagree = $("#anssupevaluation .marginb form input:radio:checked")
// 					.val();
// 				var notice = $("#anssupevaluation textarea").val();
// 				if (isagree == "1") {
// 					var state = "8"
// 				} else if (isagree == "2") {
// 					var state = "5"
// 				}
// 				//同意状态是4  不同意状态是5
// 				var k1 = {
// 					"state": state,
// 					"matter": notice
// 				};
// 				RssApi.Edit("supervision_special_inquery").setLoading(true).keyvalue(k1)
// 					.keyvalue({
// 						"id": key,
// 						"myid": RssUser.Data.myid
// 					}).getJson(function(json) {
// 						console.log(json)
// 						if (json.id) {
// 							alert("提交主任会议成功");
// 							$("#anssupevaluation textarea").val("");
// 							location.href = "#supervRD";
// 						} else {
// 							alert("提交主任会议失败");
// 						}
// 					})
// 			})
// 		})
// 	}).getJson();
// })

// //预审专题询问
// $("#supevaluationYS").load(function() {
// 	$("#supevaluationYS nav>a").off("click").click(function() {
// 		$(this).addClass("sel").siblings().removeClass("sel");
// 		if (arry.indexOf("supevaluationYS") == "-1") {
// 			$("#supevaluationYS ul li").eq(0).siblings().remove();
// 			arry.push("supevaluationYS")
// 		} else {
// 			$("#supevaluationYS ul li").remove();
// 		}
// 		if ($(this).index() == "0") {
// 			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
// 				.keyvalue({
// 					"state": "1",
// 					"previewleadername": RssUser.Data.myid
// 				}).getDict()).setFlushUI(function(json, append) {
// 				if (json.length < 10 ) {
// 					$('.nodata').hide();
// 				} else {
// 					$('.nodata').show();
// 				}
				
// 				if (json.length == 0 ) {
// 					$('.nosolutions').show();
// 				} else {
// 					$('.nosolutions').hide();
// 				}
// 				$("#supevaluationYS ul").mapview(json, {}, append);
// 				//查看
// 				$("#supevaluationYS .see").off().click(function() {
// 					var key = $(this).parent().attr("id");
// 					faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true)
// 						.condition(
// 							new RssDict().keyvalue({
// 								"id": key,
// 								"previewleadername": RssUser.Data.myid
// 							}).getDict()).getJson(function(json) {
// 							console.log(json)
// 							var shijian = ""
// 							$("#seesupevaluationYS article").mapview(json, {
// 								"shijian": function(val) {
// 									return shijian = new Date(parseInt(val) * 1000)
// 										.toString("yyyy-MM-dd hh:mm");
// 								},
// 								"state": function(val) {
// 									if (val == "1") {
// 										return state = "待主任会议审议";
// 									} else if (val == "2") {
// 										return state = "主任会议审议中";
// 									} else if (val == "3") {
// 										return state = "方案实施中";
// 									} else if (val == "4") {
// 										return state = "准备专项报告中";
// 									} else if (val == "5") {
// 										return state = "征求意见中";
// 									} else if (val == "6") {
// 										return state = "征求意见已通过";
// 									} else if (val == "7") {
// 										return state = "征求意见中";
// 									} else if (val == "8") {
// 										return state = "常委会审议中";
// 									} else if (val == "9") {
// 										return state = "常委会审议意见处理中";
// 									} else if (val == "10") {
// 										return state = "征求意见中";
// 									} else if (val == "11") {
// 										return state = "征求意见已通过";
// 									} else if (val == "12") {
// 										return state = "已反馈意见";
// 									} else if (val == "13") {
// 										return state = "已向常委会提出书面报告";
// 									}
// 								}
// 							})
// 							$.each(json, function(k, v) {
// 								$("#seesupevaluationYS article").append(
// 									'<div class="divtop"><h1>' + v.title +
// 									'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
// 									'</h3><h4 ></h4><h4 shijian>' + shijian +
// 									'</h4></div><div class="no">发起时间：' + shijian +
// 									'</div><div class="no">当前进度：' + state + '</div>')
// 							})
// 						})
// 				})
// 				//审阅
// 				$("#supevaluationYS .ans").off().click(function() {
// 					var key = $(this).parent().attr("id");
// 					var myid = $(this).attr("myid");
// 					$("#anssupevaluationYS .normalbutton").off().click(function() {
// 						var isagree = $("#anssupevaluationYS .marginb form input:radio:checked")
// 							.val();
// 						var notice = $("#anssupevaluationYS textarea").val();
// 						if (isagree == "1") {
// 							var state = "2"
// 						} else if (isagree == "2") {
// 							var state = "5"
// 						}
// 						//同意状态是2  不同意状态是5
// 						var k1 = {
// 							"state": state,
// 							"matter": notice
// 						}
// 						RssApi.Edit("supervision_special_inquery").setLoading(true).keyvalue(k1)
// 							.keyvalue({
// 								"id": key,
// 								"myid": myid
// 							}).getJson(function(json) {
// 								if (json.id) {
// 									alert("审阅成功");
// 									$("#anssupevaluationYS textarea").val("");
// 									location.href = "#supervRD";
// 								} else {
// 									alert("审阅失败");
// 								}
// 							})
// 					})
// 				})
// 			}).getJson();
// 		}else{
// 			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
// 				.keyvalue({
// 					"previewleadername": RssUser.Data.myid
// 				}).getDict()).setFlushUI(function(json, append) {
// 				if (json.length < 10 ) {
// 					$('.nodata').hide();
// 				} else {
// 					$('.nodata').show();
// 				}
				
// 				if (json.length == 0 ) {
// 					$('.nosolutions').show();
// 				} else {
// 					$('.nosolutions').hide();
// 				}
				
// 				$("#supevaluationYS ul").mapview(json, {}, append);
// 				//查看
// 				$("#supevaluationYS .see").off().click(function() {
// 					var key = $(this).parent().attr("id");
// 					faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true)
// 						.condition(
// 							new RssDict().keyvalue({
// 								"id": key,
// 								"previewleadername": RssUser.Data.myid
// 							}).getDict()).getJson(function(json) {
// 							console.log(json)
// 							var shijian = ""
// 							$("#seesupevaluationYS article").mapview(json, {
// 								"shijian": function(val) {
// 									return shijian = new Date(parseInt(val) * 1000)
// 										.toString("yyyy-MM-dd hh:mm");
// 								},
// 								"state": function(val) {
// 									if (val == "1") {
// 										return state = "待主任会议审议";
// 									} else if (val == "2") {
// 										return state = "主任会议审议中";
// 									} else if (val == "3") {
// 										return state = "方案实施中";
// 									} else if (val == "4") {
// 										return state = "准备专项报告中";
// 									} else if (val == "5") {
// 										return state = "征求意见中";
// 									} else if (val == "6") {
// 										return state = "征求意见已通过";
// 									} else if (val == "7") {
// 										return state = "征求意见中";
// 									} else if (val == "8") {
// 										return state = "常委会审议中";
// 									} else if (val == "9") {
// 										return state = "常委会审议意见处理中";
// 									} else if (val == "10") {
// 										return state = "征求意见中";
// 									} else if (val == "11") {
// 										return state = "征求意见已通过";
// 									} else if (val == "12") {
// 										return state = "已反馈意见";
// 									} else if (val == "13") {
// 										return state = "已向常委会提出书面报告";
// 									}
// 								}
// 							})
// 							$.each(json, function(k, v) {
// 								$("#seesupevaluationYS article").append(
// 									'<div class="divtop"><h1>' + v.title +
// 									'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
// 									'</h3><h4 ></h4><h4 shijian>' + shijian +
// 									'</h4></div><div class="no">发起时间：' + shijian +
// 									'</div><div class="no">当前进度：' + state + '</div>')
// 							})
// 						})
// 				})
// 				//审阅
// 				$("#supevaluationYS .ans").off().click(function() {
// 					$("#anssupevaluationYS .normalbutton").off().click(function() {
// 						alert("您已审阅过了")
// 						location.href = "#supevaluationYS";
// 					})
// 				})
// 			}).getJson();
// 		}
// 	})
// 	if (supevaluationYSnav == "1") {
// 		$("#supevaluationYS nav>a").eq(0).click();
// 		supevaluationYSnav = "0";
// 	}
// })

//承办专题询问
$("#supevaluationCB").load(function() {
	if (arry.indexOf("supevaluationCB") == "-1") {
		$("#supevaluationCB ul li").eq(0).siblings().remove();
		arry.push("supevaluationCB")
	} else {
		$("#supevaluationCB ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
		.keyvalue({
			"state": "16",
			"company": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#supevaluationCB ul").mapview(json, {}, append);
		//查看
		$("#supevaluationCB .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true)
				.condition(
					new RssDict().keyvalue({
						"id": key
					}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seesupevaluationCB article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seesupevaluationCB article").append(
							'<div class="divtop"><h1>' + v.title +
							'</h1>' +
							'<h4 ></h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">发起时间：' + shijian +
							'</div><div class="no">当前进度：主办单位办理中</div><div class="no">常委会届次：' 
							+ v.directormeetingnum + 
							'</div><div class="no">专题询问方案：' + v.enclosure + 
							'</div>')
							
					})
				})
		})
		//提交办理情况报告
		$("#supevaluationCB .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			var myid = $(this).attr("myid");
			$("#anssupevaluationCB .normalbutton").off().click(function() {
				var state = 4;
				var reportenclosure = $("#anssupevaluationCB article .fj label input")
					.val();
				var reportenclosurename = reportenclosure.substring(reportenclosure.lastIndexOf("\\") +
					1);

				var k1 = {
					"state": state,
					"reportenclosure": reportenclosure,
					"reportenclosurename": reportenclosurename
				}
				if (reportenclosure != "") {
					RssApi.Edit("supervision_special_inquery").setLoading(true).keyvalue(k1)
						.keyvalue({
							"id": key,
							"myid": myid,
							"company": RssUser.Data.myid
						}).getJson(function(json) {
							if (json.id) {
								alert("提交成功");
								$("#anssupevaluationCB article .fj label input").val("");
								location.href = "#supevaluationCB";
							} else {
								alert("提交失败");
							}
						})
				} else {
					alert("请提交办理情况报告");
				}
			})
		})
	}).getJson();
})

// //已完成的专题询问
// $("#endsupevaluation").load(function() {
// 	if (arry.indexOf("endsupevaluation") == "-1") {
// 		$("#endsupevaluation ul li").eq(0).siblings().remove();
// 		arry.push("endsupevaluation")
// 	} else {
// 		$("#endsupevaluation ul li").remove();
// 	}
// 	faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
// 		.keyvalue({
// 			"taskDone": "1"
// 		}).getDict()).setFlushUI(function(json, append) {
// 		if (json.length < 10 ) {
// 			$('.nodata').hide();
// 		} else {
// 			$('.nodata').show();
// 		}
		
// 		if (json.length == 0 ) {
// 			$('.nosolutions').show();
// 		} else {
// 			$('.nosolutions').hide();
// 		}
// 		$("#endsupevaluation ul").mapview(json, {}, append);
// 		//查看
// 		$("#endsupevaluation .see").off().click(function() {
// 			var key = $(this).parent().attr("id");
// 			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true)
// 				.condition(
// 					new RssDict().keyvalue({
// 						"id": key
// 					}).getDict()).getJson(function(json) {
// 					console.log(json)
// 					var shijian = ""
// 					$("#seeendsupevaluation article").mapview(json, {
// 						"shijian": function(val) {
// 							return shijian = new Date(parseInt(val) * 1000)
// 								.toString("yyyy-MM-dd hh:mm");
// 						},
// 						"state": function(val) {
// 							if (val == "1") {
// 								return state = "待主任会议审议";
// 							} else if (val == "2") {
// 								return state = "主任会议审议中";
// 							} else if (val == "3") {
// 								return state = "方案实施中";
// 							} else if (val == "4") {
// 								return state = "准备专项报告中";
// 							} else if (val == "5") {
// 								return state = "征求意见中";
// 							} else if (val == "6") {
// 								return state = "征求意见已通过";
// 							} else if (val == "7") {
// 								return state = "征求意见中";
// 							} else if (val == "8") {
// 								return state = "常委会审议中";
// 							} else if (val == "9") {
// 								return state = "常委会审议意见处理中";
// 							} else if (val == "10") {
// 								return state = "征求意见中";
// 							} else if (val == "11") {
// 								return state = "征求意见已通过";
// 							} else if (val == "12") {
// 								return state = "已反馈意见";
// 							} else if (val == "13") {
// 								return state = "已向常委会提出书面报告";
// 							}
// 						}
// 					})
// 					$.each(json, function(k, v) {
// 						$("#seeendsupevaluation article").append(
// 							'<div class="divtop"><h1>' + v.title +
// 							'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
// 							'</h3><h4 ></h4><h4 shijian>' + shijian +
// 							'</h4></div><div class="no">发起时间：' + shijian +
// 							'</div><div class="no">	常委会届次：' + v.directormeetingnum +
// 							'</div><div class="no">专题询问方案：' + v.enclosure +
// 							'</div><div class="no">办理报告：' + v.reportenclosure +
// 							'</div><div class="no">当前进度：专题询问已完成</div>')
// 					})
// 				})
// 		})
// 		//查看满意度

// 	}).getJson();
// })

//新增特定问题调查
$("#supspecificXZ").load(function() {
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	$("#supspecificXZ .lmq").off().click(function() {
		var spanq = $("#supspecificXZ .spanq").text().split(",");
		//$("#suggestsub .lmr span").empty();
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("committee_member").setLoading(true).keyvalue("pagesize", "10000").condition(
			new RssDict().keyvalue({
				// "mission": missions,
				"myid": "{notin~" + RssUser.Data.myid + "}"
			}).getDict()).setFlushUI(function(jsona, append) {
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < spanq.length; i++) {
					if (v.myid == spanq[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="myid"  myid="' + v.myid +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.telphone +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}
			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="myid"]:checked').each(function() {
					id_array.push($(this).attr("myid")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestrs = name_array.join(',');
				location.href = "#supspecificXZ"
				$("#supspecificXZ .spanq").text(idstr)
				$("#supspecificXZ [lmqmission]").html(namestrs);
			});
		}).getJson();
	})
	$("#supspecificXZ .lmr").off().click(function() {
		var span = $("#supspecificXZ .span").text().split(",");
		//$("#suggestsub .lmr span").empty();
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "10000").condition(
			new RssDict().keyvalue({
				"mission": missions,
				"myid": "{notin~" + RssUser.Data.myid + "}"
			}).getDict()).setFlushUI(function(jsona, append) {
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < span.length; i++) {
					if (v.myid == span[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="myid"  myid="' + v.myid +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.telphone +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}
			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="myid"]:checked').each(function() {
					id_array.push($(this).attr("myid")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestr = name_array.join(',');
				location.href = "#supspecificXZ"
				$("#supspecificXZ .span").text(idstr)
				$("#supspecificXZ [mission]").html(namestr);
			});
		}).getJson();
	})
	$("#supspecificXZ .lms").off().click(function() {
		var spans = $("#supspecificXZ .spans").text().split(",");
		//$("#suggestsub .lmr span").empty();
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("expert_member").setLoading(true).keyvalue("pagesize", "10000").condition(
			new RssDict().keyvalue({
				// "mission": missions,
				// "myid": "{notin~" + RssUser.Data.myid + "}"
			}).getDict()).setFlushUI(function(jsona, append) {
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < spans.length; i++) {
					if (v.id == spans[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="id"  id="' + v.id +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.phonenumber +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}
			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="id"]:checked').each(function() {
					id_array.push($(this).attr("id")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestr = name_array.join(',');
				location.href = "#supspecificXZ"
				$("#supspecificXZ .spans").text(idstr)
				$("#supspecificXZ [lmsmission]").html(namestr);
			});
		}).getJson();
	})

	$("#supspecificXZ .normalbutton").off().click(function() {

		//将前端输入的数据放到k1对象中
		var title = $("#supspecificXZ .marginb input").val();
		var committeemeetingnum = $("#supspecificXZ .marginb .committeemeetingnum").val();
		var matter = $("#supspecificXZ textarea").val();
		var enclosure = $("#supspecificXZ .fja").text() + ",";
		//参与人id
		var objid = $("#supspecificXZ .lmq span").text();
		var committeeobjid = $("#supspecificXZ .lmr span").text();
		var expertmember = $("#supspecificXZ .lms span").text();
		var enclosurename = $("#supspecificXZ article .fj label input").val() + ",";
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
		var shijian = Date.parse(new Date()) / 1000;

		//活动开始时间
		if ($("#supspecificXZ .formtd .marginb .month").val() < 10) {
			var str_month = 0 + $("#supspecificXZ .formtd .marginb .month").val()
		} else {
			var str_month = $("#supspecificXZ .formtd .marginb .month").val()
		}
		if ($("#supspecificXZ .formtd .marginb .day").val() < 10) {
			var str_day = 0 + $("#supspecificXZ .formtd .marginb .day").val()
		} else {
			var str_day = $("#supspecificXZ .formtd .marginb .day").val()
		}
		var HDbeginshijian = $("#supspecificXZ .formtd .marginb .year").val() + "-" + str_month + "-" +
			str_day;
		var committeeshijian = Math.round(new Date(HDbeginshijian) / 1000);

		var k1 = {
			"title": title,
			"notice": matter,
			"enclosure": enclosure,
			"myid": RssUser.Data.myid,
			"shijian": shijian,
			"enclosurename": filename,
			"committeeshijian": committeeshijian,
			"objid": objid,
			"committeeobjid": committeeobjid,
			"expertmember": expertmember,
			"committeemeetingnum": committeemeetingnum,
			"state": 1,
			"typeid": 6,
			"lwstate": 6
		}

		console.log(k1)
		if (title != "" && matter != "") {
			//标题和问题不能为空
			RssApi.Edit("supervision_specific_issue").setLoading(true).keyvalue(k1).keyvalue({
				"myid": RssUser.Data.myid
			}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");
					$("#supspecificXZ .marginb input").val("");
					$("#supspecificXZ .marginb .committeemeetingnum").val("");
					$("#supspecificXZ textarea").val("");
					$("#supspecificXZ .fja").text("");
					$("#supspecificXZ .lmq span").text("");
					$("#supspecificXZ .lmr span").text("");
					$("#supspecificXZ .lms span").text("");
					$("#supspecificXZ [lmqmission]").html("");
					$("#supspecificXZ [mission]").html("");
					$("#supspecificXZ [lmsmission]").html("");
					location.href = "#supervRD";
				} else {
					alert("提交失败");
				}
			})
		} else {
			alert("活动的标题和内容不能为空！");
		}
	})
})
//特定问题调查
$("#supspecific").load(function() {
	if (arry.indexOf("supspecific") == "-1") {
		$("#supspecific ul li").eq(0).siblings().remove();
		arry.push("supspecific")
	} else {
		$("#supspecific ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict()
		.keyvalue({
			"myid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		$("#supspecific ul").mapview(json, {}, append);
		//查看
		$("#supspecific .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true)
				.condition(
					new RssDict().keyvalue({
						"id": key,
						"myid": RssUser.Data.myid
					}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seesupspecific article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seesupspecific article").append(
							'<div class="divtop"><h1>' + v.title +
							'</h1>' + 
							'<h4 ></h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">发起时间：' + shijian +
							'</div><div class="no">当前进度：' + state + '</div>')
					})
				})
		})

		//提交主任会议
		$("#supspecific .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#anssupspecific .normalbutton").off().click(function() {
				var isagree = $("#anssupspecific .marginb form input:radio:checked")
					.val();
				var notice = $("#anssupspecific textarea").val();
				if (isagree == "1") {
					var state = "8"
				} else if (isagree == "2") {
					var state = "5"
				}
				//同意状态是4  不同意状态是5
				var k1 = {
					"state": state,
					"matter": notice
				};
				RssApi.Edit("supervision_specific_issue").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key,
						"myid": RssUser.Data.myid
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("提交主任会议成功");
							$("#anssupspecific textarea").val("");
							location.href = "#supervRD";
						} else {
							alert("提交主任会议失败");
						}
					})
			})
		})
	}).getJson();
})

//承办特定问题调查
$("#supspecificCB").load(function() {
	if (arry.indexOf("supspecificCB") == "-1") {
		$("#supspecificCB ul li").eq(0).siblings().remove();
		arry.push("supspecificCB")
	} else {
		$("#supspecificCB ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict()
		.keyvalue({
			"userroleid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#supspecificCB ul").mapview(json, {}, append);
		//查看
		$("#supspecificCB .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true)
				.condition(
					new RssDict().keyvalue({
						"id": key,
						"myid": RssUser.Data.myid
					}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seesupspecificCB article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seesupspecificCB article").append(
							'<div class="divtop"><h1>' + v.title +
							'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
							'</h3><h4 ></h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">发起时间：' + shijian +
							'</div><div class="no">当前进度：' + state + '</div>')
					})
				})
		})
	}).getJson();
})

//已完成的特定问题调查
$("#endsupspecific").load(function() {
	if (arry.indexOf("endsupspecific") == "-1") {
		$("#endsupspecific ul li").eq(0).siblings().remove();
		arry.push("endsupspecific")
	} else {
		$("#endsupspecific ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true).condition(new RssDict()
		.keyvalue({
			"taskDone": "1"
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		$("#endsupspecific ul").mapview(json, {}, append);
		//查看
		$("#endsupspecific .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_specific_issue").setLoading(true)
				.condition(
					new RssDict().keyvalue({
						"id": key
					}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seeendsupspecific article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seeendsupspecific article").append(
							'<div class="divtop"><h1>' + v.title +
							'</h1>'  + 
							'<h4 ></h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">发起时间：' + shijian +
							'</div><div class="no">当前进度：' + state + 
							'</div><div class="no">常委会议届次：' + v.committeemeetingnum + 
							'</div><div class="no">成立委员会文件：' + v.enclosure + 
							'</div><div class="no">材料文件：' + v.providerenclosure + 
							'</div><div class="no">调查报告：' + v.reportenclosure + 
							'</div><div class="no">决议文件：' + v.opinionenclosure + 
							'</div>')
					})
				})
		})
	}).getJson();
})

//查看规范性文件
$("#shenchadengji").load(function() {
	if (arry.indexOf("shenchadengji") == "-1") {
		$("#shenchadengji ul li").eq(0).siblings().remove();
		arry.push("shenchadengji")
	} else {
		$("#shenchadengji ul li").remove();
	}
	faqsajax = RssApi.Table.List("shenchadengji").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.id
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#shenchadengji ul").mapview(json, {}, append);
		//查看
		$("#shenchadengji .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("shenchadengji").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeshenchadengji article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					var attachment = v.enclosure;
					if ( "undefined".indexOf(attachment) != -1 ) {
						attachment = "无";
					}
					$("#seeshenchadengji article").append(
						'<div class="divtop"><h1>规范性文件备案' +
						'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.filename +
						'</h3><h4 >提出者:' + v.organizer +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="divp">' + v.remarks +
						'</div><div class="no">文件名：' + v.filename +
						'</div><div class="no">报备单位：' + v.organizer +
						'</div><div class="no">文号：' + v.Titanic +
						'</div><div class="no">送报人：' + v.name +
						'</div><div class="no">印发时间：' + v.yfdate +
						'</div><div class="no">备案时间：' + v.beiandate +
						'</div><div class="fj no">附件：<span>' + attachment +
						'<span>' +
						'</div><div class="no">修改原因：' + v.xiugaiyuanyin +
						'</div>')
				})
			})
		})
	}).getJson();
})

//待办记录
$("#shenchaDB").load(function() {
	if (arry.indexOf("shenchaDB") == "-1") {
		$("#shenchaDB ul li").eq(0).siblings().remove();
		arry.push("shenchaDB")
	} else {
		$("#shenchaDB ul li").remove();
	}
	faqsajax = RssApi.Table.List("shenchadengji").setLoading(true).condition(new RssDict().keyvalue({
		"zhuangtai": "",
		"myid": RssUser.Data.id
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#shenchaDB ul").mapview(json, {}, append);
		//查看
		$("#shenchaDB .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("shenchadengji").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeshenchaDB article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seeshenchaDB article").append(
						'<div class="divtop"><h1>规范性文件备案' +
						'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.filename +
						'</h3><h4 >提出者:' + v.organizer +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">文件名：' + v.filename +
						'</div><div class="no">报备单位：' + v.organizer +
						'</div><div class="no">文号：' + v.Titanic +
						'</div><div class="no">送报人：' + v.name +
						'</div><div class="no">印发时间：' + v.yfdate +
						'</div><div class="no">备案时间：' + v.beiandate +
						'</div>')
				})
			})
		})
	}).getJson();
})

//驳回记录
$("#shenchaBH").load(function() {
	if (arry.indexOf("shenchaBH") == "-1") {
		$("#shenchaBH ul li").eq(0).siblings().remove();
		arry.push("shenchaBH")
	} else {
		$("#shenchaBH ul li").remove();
	}
	faqsajax = RssApi.Table.List("shenchadengji").setLoading(true).condition(new RssDict().keyvalue({
		"zhuangtai": "4",
		"myid": RssUser.Data.id
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
		$("#shenchaBH ul").mapview(json, {}, append);
		//查看
		$("#shenchaBH .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("shenchadengji").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key,
					"myid": RssUser.Data.id
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeshenchaBH article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seeshenchaBH article").append(
						'<div class="divtop"><h1>规范性文件备案' +
						'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.filename +
						'</h3><h4 >提出者:' + v.organizer +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">文件名：' + v.filename +
						'</div><div class="no">报备单位：' + v.organizer +
						'</div><div class="no">文号：' + v.Titanic +
						'</div><div class="no">送报人：' + v.name +
						'</div><div class="no">印发时间：' + v.yfdate +
						'</div><div class="no">备案时间：' + v.beiandate +
						'</div>')
				})
			})
		})
	}).getJson();
})
//新增撤职案的审议和决定
$("#supdismissalXZ").load(function() {
	$("#supdismissalXZ .normalbutton").off().click(function() {
		var title = $("#supdismissalXZ .marginb input").val();
		var committeemeetingnum = $("#supdismissalXZ .marginb .committeemeetingnum").val();
		var matter = $("#supdismissalXZ textarea").val();
		var enclosure = $("#supdismissalXZ .fja").text() + ",";
		var enclosurename = $("#supdismissalXZ article .fj label input").val() + ",";
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
		var shijian = Date.parse(new Date()) / 1000;

		//活动开始时间
		if ($("#supdismissalXZ .formcz .marginb .month").val() < 10) {
			var cz_month = 0 + $("#supdismissalXZ .formcz .marginb .month").val()
		} else {
			var cz_month = $("#supdismissalXZ .formcz .marginb .month").val()
		}
		if ($("#supdismissalXZ .formcz .marginb .day").val() < 10) {
			var cz_day = 0 + $("#supdismissalXZ .formcz .marginb .day").val()
		} else {
			var cz_day = $("#supdismissalXZ .formcz .marginb .day").val()
		}
		var HDbeginshijian = $("#supdismissalXZ .formcz .marginb .year").val() + "-" + cz_month + "-" +
			cz_day;
		var committeeshijian = Math.round(new Date(HDbeginshijian) / 1000);

		var k1 = {
			"title": title,
			"committeemeetingnum": committeemeetingnum,
			"matter": matter,
			"enclosure": enclosure,
			"myid": RssUser.Data.myid,
			"shijian": shijian,
			"enclosurename": filename,
			"committeeshijian": committeeshijian,
			"state": 1,
			"typeid": 7,
			"lwstate": 7
		}

		console.log(k1)
		if (title != "" && matter != "") {
			//标题和问题不能为空
			RssApi.Edit("supervision_dismissal").setLoading(true).keyvalue(k1).keyvalue({
				"myid": RssUser.Data.myid
			}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");
					$("#supdismissalXZ .marginb input").val("");
					$("#supdismissalXZ .marginb select").val("");
					$("#supdismissalXZ .marginb .committeemeetingnum").val("");
					$("#supdismissalXZ textarea").val("");
					$("#supdismissalXZ .fja").text("");
					location.href = "#supervRD";
				} else {
					alert("提交失败");
				}
			})
		} else {
			alert("活动的标题和内容不能为空！");
		}
	})
})



//司法监督议题线索
$("#judicsup").load(function() {
		
	if (arry.indexOf("judicsup") == "-1") {
		$("#judicsup ul li").eq(0).siblings().remove();
		arry.push("judicsup")
	} else {
		$("#judicsup ul li").remove();
	}
	
	
	
	faqsajax = RssApi.View.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
	// faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.noDataimg').show();
		} else {
			$('.noDataimg').hide();
		}
		
		var json2 = [];
		$.each(json, function(k, v) {	
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})
		
		$.each(json2, async function(k, v) {
			filljusticsdata ( v , "judicsup" );				 
		})
		
		// $("#judicsup ul").mapview(json, {}, append);
		//查看
		// $("#judicsup .see").off().click(function() {
		// 	var key = $(this).parent().attr("id");
		// 	faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict()
		// 		.keyvalue({
		// 			"id": key
		// 		}).getDict()).getJson(function(json) {
		// 		console.log(json)
		// 		var shijian = ""
		// 		$("#seejudicsup article").mapview(json, {
		// 			"shijian": function(val) {
		// 				return shijian = new Date(parseInt(val) * 1000)
		// 					.toString("yyyy-MM-dd hh:mm");
		// 			}
		// 		})
		// 		$.each(json, function(k, v) {
		// 			$("#seejudicsup article").append(
		// 				'<div class="divtop"><h1>' + v.title +
		// 				'</h1>' +
		// 				'<h4 >提出者:' + v.perchar +
		// 				'</h4><h4 shijian>' + shijian +
		// 				'</h4></div><div class="divp">' + v.matter +
		// 				'</div><div class="no">时间：' + shijian +
		// 				'</div><div class="no">类型：司法监督议线索</div><div class="fj no">征集文件：<span>' +
		// 				v.enclosure + '<span></div>')
		// 		})
		// 	})
		// })
		//提供线索
		$("#judicsup .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#ansjudicsup .normalbutton").off().click(function() {
				var enclosure = $("#ansjudicsup article .fj label input").val();
				var matter = $("#ansjudicsup textarea").val();
				var zhengjienclosurename = enclosure.substring(enclosure.lastIndexOf(
					"\\") + 1);
				console.log(k1)
				var k1 = {
					"zhengjiyijian": matter,
					"zhengjienclosure": enclosure,
					"zhengjienclosurename": zhengjienclosurename,
					"relationid": key
				}
				if (matter != "") {
					//问题不能为空
					RssApi.Edit("clue_reply").setLoading(true).keyvalue(k1).keyvalue({
						"myid": RssUser.Data.myid
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("提交成功");
							$("#ansjudicsup textarea").val("");
							$("#ansjudicsup article .fj label input").val("");
							$("#ansjudicsup .fja").text("");
							location.href = "#judicsup";
						} else {
							alert("提交失败");
						}
					})
				} else {
					alert("提交的线索不能为空！");
				}
			})
		})
	}).getJson();
})

//述法线索
$("#judicsupSF").load(function() {
	if (arry.indexOf("judicsupSF") == "-1") {
		$("#judicsupSF ul li").eq(0).siblings().remove();
		arry.push("judicsupSF")
	} else {
		$("#judicsupSF ul li").remove();
	}
	// faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
	faqsajax = RssApi.View.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "2"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0 ) {
			$('.noDataimg').show();
		} else {
			$('.noDataimg').hide();
		}
		$("#judicsupSF ul").mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			}
		}, append);
		//查看
		$("#judicsupSF .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seejudicsupSF";
			viewjusticsDetail( obj ,key ,2 );
			return;
			faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seejudicsupSF article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seejudicsupSF article").append(
						'<div class="divtop"><h1>' + v.title +
						'</h1>' +
						'<h4 >提出者:' + v.perchar +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="divp">' + v.matter +
						'</div><div class="no">时间：' + shijian +
						'</div><div class="no">类型：述法线索</div><div class="fj no">征集文件：<span>' +
						v.enclosure + '<span></div>')
				})
			})
		})
		//提供线索
		$("#judicsupSF .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#ansjudicsupSF .normalbutton").off().click(function() {
				var enclosure = $("#ansjudicsupSF article .fj label input").val();
				var matter = $("#ansjudicsupSF textarea ").val();
				console.log(matter, matter)
				var k1 = {
					"zhengjiyijian": matter,
					"zhengjienclosure": enclosure,
					"relationid": key
				}
				if (matter != "") {
					//问题不能为空
					RssApi.Edit("clue_reply").setLoading(true).keyvalue(k1).keyvalue({
						"myid": RssUser.Data.myid
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("提交成功");
							$("#ansjudicsupSF textarea").val("");
							$("#ansjudicsupSF article .fj label input").val("");
							$("#ansjudicsupSF .fja").text("");
							location.href = "#judicsup";
						} else {
							alert("提交失败");
						}
					})
				} else {
					alert("提交的线索不能为空！");
				}
			})
		})
	}).getJson();
})

//办案质量检查
$("#judicsupBA").load(function() {
	if (arry.indexOf("judicsupBA") == "-1") {
		$("#judicsupBA ul li").eq(0).siblings().remove();
		arry.push("judicsupBA")
	} else {
		$("#judicsupBA ul li").remove();
	}
	// faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
	faqsajax = RssApi.View.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "3"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.noDataimg').show();
		} else {
			$('.noDataimg').hide();
		}
		$("#judicsupBA ul").mapview(json, {
			"shijian": function(val) {				return shijian = new Date(parseInt(val) * 1000)					.toString("yyyy-MM-dd hh:mm");			}
		}, append);
		//查看
		$("#judicsupBA .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seejudicsupBA";
			viewjusticsDetail( obj ,key ,3 );
			return;
			faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seejudicsupBA article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seejudicsupBA article").append(
						'<div class="divtop"><h1>' + v.title +
						'</h1>' + 
						'<h4 >提出者:' + v.perchar +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="divp">' + v.matter +
						'</div><div class="no">时间：' + shijian +
						'</div><div class="no">类型：办案质量检查线索</div><div class="fj no">征集文件：<span>' +
						v.enclosure + '<span></div>')
				})
			})
		})
		//提供线索
		$("#judicsupBA .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			$("#ansjudicsupBA .normalbutton").off().click(function() {
				var enclosure = $("#ansjudicsupBA article .fj label input").val();
				var matter = $("#ansjudicsupBA textarea ").val();
				console.log(matter, matter)
				var k1 = {
					"zhengjiyijian": matter,
					"zhengjienclosure": enclosure,
					"relationid": key
				}
				if (matter != "") {
					//问题不能为空
					RssApi.Edit("clue_reply").setLoading(true).keyvalue(k1).keyvalue({
						"myid": RssUser.Data.myid
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("提交成功");
							$("#ansjudicsupBA textarea").val("");
							$("#ansjudicsupBA article .fj label input").val("");
							$("#ansjudicsupBA .fja").text("");
							location.href = "#judicsup";
						} else {
							alert("提交失败");
						}
					})
				} else {
					alert("提交的线索不能为空！");
				}
			})
		})
	}).getJson();
})

//其他线索
$("#judsupadm").load(function() {
	if (arry.indexOf("judsupadm") == "-1") {
		$("#judsupadm ul li").eq(0).siblings().remove();
		arry.push("judsupadm")
	} else {
		$("#judsupadm ul li").remove();
	}
	
	// faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
	
	faqsajax = RssApi.View.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "4"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.noDataimg').show();
		} else {
			$('.noDataimg').hide();
		}
		$("#judsupadm ul").mapview(json, {
			"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
		}, append)
		//查看
		$("#judsupadm .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seejudsupadm";
			console.log("__________ key="+key)
			viewjusticsDetail( obj ,key , 4 );
			return;
			// faqsajax = RssApi.Table.List("judsupadm").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seejudsupadm article").mapview(json, {
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
			// 		$("#seejudsupadm article").append(
			// 			'<div class="divtop"><h1 >' + v.specom +
			// 			'</h1>' +
			// 			'<h4 >检查人员:' + v.instmem +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</div><div class="no">专委会：' + v.specom +
			// 			'</div><div class="no">主办单位：' + v.undertaker +
			// 			'</div><div class="fj no">附件：<span>' + attachment +
			// 			'<span></div>')
			// 	})
			// })
		})
		//提供线索
		// $("#judsupadm .ans").off().click(function() {
		// 	var key = $(this).parent().attr("id");
		// 	$("#ansjudsupadm .normalbutton").off().click(function() {
		// 		var enclosure = $("#ansjudsupadm article .fj label input").val();
		// 		var matter = $("#ansjudsupadm textarea ").val();
		// 		console.log(matter, matter)
		// 		var k1 = {
		// 			"zhengjiyijian": matter,
		// 			"zhengjienclosure": enclosure,
		// 			"relationid": key
		// 		}
		// 		if (matter != "") {
		// 			//问题不能为空
		// 			RssApi.Edit("clue_reply").setLoading(true).keyvalue(k1).keyvalue({
		// 				"myid": RssUser.Data.myid
		// 			}).getJson(function(json) {
		// 				console.log(json)
		// 				if (json.id) {
		// 					alert("提交成功");
		// 					$("#ansjudsupadm textarea").val("");
		// 					$("#ansjudsupadm article .fj label input").val("");
		// 					$("#ansjudsupadm .fja").text("");
		// 					location.href = "#judicsup";
		// 				} else {
		// 					alert("提交失败");
		// 				}
		// 			})
		// 		} else {
		// 			alert("提交的线索不能为空！");
		// 		}
		// 	})
		// })
	}).getJson();
})
//承办单位未答复(没有办理回复报告)的意见建议
$("#WDF").load(function() {
	if (arry.indexOf("WDF") == "-1") {
		$("#WDF ul li").eq(0).siblings().remove();
		arry.push("WDF")
	} else {
		$("#WDF ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"resume": "0",
		"consultation": "0",
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
		if (json.length == 0 ) {
			$('.nodata_tip').show();
		} else {
			$('.nodata_tip').hide();
		}
		
		$("#WDF ul").mapview(json2, {
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
		}, append)
		//查看
		$("#WDF .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			var reject = 0 ;
			lwstate =  999 ;
			var obj = "seeWDF" ;
			viewSuggestDetail(obj, reject , lwstate ,key );
			
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key,
			// 		"resume": "0",
			// 		"consultation": "0"
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeWDF article").mapview(json, {
			// 	})
			// 	$.each(json, function(k, v) {
			// 		var attachment = v.enclosure;
					
			// 		var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
			// 		if ( "undefined".indexOf(attachment) != -1) {
			// 			attachment = "无";
			// 			attachmentDiv = '</div><div class="fj no">附件：' + attachment;
			// 		}
			// 		$("#seeWDF article").append(
			// 			'<div class="divtop">'  +
			// 			'<h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4>'  +
			// 			// '</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">主办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协办单位：' + v.company +
			// 			// '</div><div class="fj no">附件：<span>' + attachment +
			// 			// '<span></div>' +
			// 			attachmentDiv + '</div>' +
			// 			'<div>' + v.matter + '</div>'
			// 			)
			// 	})
			// })
		})
		//评价结果
		$("#WDF .ans").off().click(function() {
			var key = $(this).parent().attr("sortid");
			//console.log	g('888');
			getevaluationmessage( key ) ;
		})

	}).getJson();
})

function getevaluationmessage( id ) {
	var    numpeople =  0 ;
	
	
	var isEvaluationDone =  0;    
	var interview_0 = 0 ; 
	var interview_1 = 0;
	var interview_2 = 0;
	
	var attitude_0 = 0 ; 
	var attitude_1 = 0 ;
	var attitude_2 = 0 ;
	
	var reply_0 = 0 ; 
	var reply_1 = 0 ;
	var reply_2 = 0 ;
	
	
	var result_0 = 0 ; 
	var result_1 = 0 ;
	var result_2 = 0 ;
	
	var total_0 = 0 ; 
	var total_1 = 0 ;
	var total_2 = 0 ;
   
	var interview = 0;
	var attitude = 0;
	var reply = 0;
	var result = 0;
	var total = 0;
	
	var totalCount = 0;
	
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"id": id,
	}).getDict()).setFlushUI(function(json, append) {
		numpeople = json["numpeople"];
		
		
		faqsajax = RssApi.Table.List("opinion").setLoading(false).condition(new RssDict().keyvalue({
			"id": id,
		}).getDict()).setFlushUI(function(json, append) {
			
			console.log(" ___________ opinion json=",json)
			$.each(json, function(k, v) {
				var evaluationDone = v.evaluationDone;
				// if ( !opinion_list.get("evaluationDone").isEmpty()){
				//     isEvaluationDone = Integer.parseInt ( opinion_list.get("evaluationDone") ) ;
				// }
				       
				        
				        
				totalCount ++;
				interview = v.effect ; 
				
			   
				
				if ( interview == 1  && isEvaluationDone == 1 ){
					interview_0 ++;
					
				} 
				else if( interview == 2 && isEvaluationDone == 1 ){
					interview_1 ++;
					
				}
				 else if( interview == 3 && isEvaluationDone == 1 ){
					interview_2 ++;
					
				}
				attitude = v.effect2 ; 
				if ( attitude == 1 && isEvaluationDone == 1 ){
					attitude_0 ++;
				} 
				else if( attitude == 2 && isEvaluationDone == 1 ){
					attitude_1 ++;
				}
				 else if( attitude == 3 && isEvaluationDone == 1 ){
					attitude_2 ++;
				}
 
				 reply = v.effect3 ; 
				 if ( reply == 1 && isEvaluationDone == 1 ){
					reply_0 ++;
				} 
				else if( reply == 2 && isEvaluationDone == 1 ){
					reply_1 ++;
				}
				 else if( reply == 3 && isEvaluationDone == 1 ){
					reply_2 ++;
				}
				
				result = v.effect4 ; 
				 if ( result == 1 && isEvaluationDone == 1 ){
					result_0 ++;
				} 
				else if( result == 2 && isEvaluationDone == 1 ){
					result_1 ++;
				}
				 else if( result == 3 && isEvaluationDone == 1 ){
					result_2 ++;
				}

				total = v.total ; 
				if ( total == 1 && isEvaluationDone == 1 ){
					total_0 ++;
				} 
				else if( total == 2 && isEvaluationDone == 1 ){
					total_1 ++;
				}
				 else if( total == 3 && isEvaluationDone == 1 ){
					total_2 ++;
				}
														
			})
		}).getJson();
		
		
		var isSecondEvaluationDone = 0 ;
		faqsajax = RssApi.Table.List("second_opinion").setLoading(false).condition(new RssDict().keyvalue({
			"proposal": id,
			}).getDict()).setFlushUI(function(json, append) {
				
			$.each(json, function(k, v) {
				
				 isSecondEvaluationDone = v.evaluationDone;
				// if ( !second_opinion_list.get("evaluationDone").isEmpty()){
				// 	isSecondEvaluationDone = Integer.parseInt ( second_opinion_list.get("evaluationDone") ) ;
				// }
				totalCount ++;
				interview = v.effect  ; 
				attitude = v.effect2 ; 
				reply = v.effect3 ; 
				result = v.effect4 ; 
				total = v.effect5 ;  
				if ( isSecondEvaluationDone == 1 ){
					//已经评价完成
					if ( interview == 1 ) {
						interview_0 ++;
					}
					else if( interview == 2  ){
						interview_1 ++;
					}
					else if( interview == 3  ){
						interview_2 ++;
					}
					
					if ( attitude == 1 ) {
						attitude_0 ++;
					}
					else if( attitude == 2  ){
						attitude_1 ++;
					}
					else if( attitude == 3  ){
						attitude_2 ++;
					}
					if ( reply == 1 ){
						reply_0 ++;
					} 
					else if( reply == 2  ){
						reply_1 ++;
					}
					else if( reply == 3  ){
						reply_2 ++;
					}
					if ( result == 1 ){
						result_0 ++;
					} 
					else if( result == 2  ){
						result_1 ++;
					}
					else if( result == 3  ){
						result_2 ++;
					}
					if ( total == 1 ){
					total_0 ++;
					} 
					else if( total == 2  ){
					total_1 ++;
					}
					else if( total == 3  ){
					total_2 ++;
				   }
			}
				
		}).getJson();	
    
		
	}).getJson();
	
	
	
})
}
// getevaluationmessage( var id ) ;

//承办单位已答复(已有办理回复报告)的意见建议
$("#YDF").load(function() {
	if (arry.indexOf("YDF") == "-1") {
		$("#YDF ul li").eq(0).siblings().remove();
		arry.push("YDF")
	} else {
		$("#YDF ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"resume": "1",
		"consultation": "0",
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		
		
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length > 0 ) {
			$('.nodata_tip').hide();
		} else {
			$('.nodata_tip').show();
		}
		
		var json2 = [];
		$.each(json, function(k, v) {	
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})
		$("#YDF ul").mapview(json2, {
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
		}, append)

		//查看
		$("#YDF .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			lwstate =  999 ;
			var obj = "seeYDF" ;
			var reject = 0 ;
			viewSuggestDetail(obj, reject , lwstate ,key );
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key,
			// 		"resume": "1",
			// 		"consultation": "0"
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeYDF article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"lwstate": function(val) {
			// 			if (val == "1") {
			// 				return lwstate = "建议";
			// 			} else if (val == "2") {
			// 				return lwstate = "议案";
			// 			} else if (val == "3") {
			// 				return lwstate = "批评";
			// 			} else if (val == "4") {
			// 				return lwstate = "意见";
			// 			} else if (val == "5") {
			// 				return lwstate = "质询";
			// 			}
			// 		},
			// 		"examination": function(val) {
			// 			if (val == "1") {
			// 				return examination = "未审查";
			// 			} else if (val == "2") {
			// 				return examination = "已审查";
			// 			} else if (val == "3") {
			// 				return examination = "置回";
			// 			} else if (val == "4") {
			// 				return examination = "待审查";
			// 			} else if (val == "5") {
			// 				return examination = "乡镇已审查";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		var attachment = v.enclosure;
					
			// 		var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
			// 		if ( "undefined".indexOf(attachment) != -1) {
			// 			attachment = "无";
			// 			attachmentDiv = '</div><div class="fj no">附件：' + attachment;
			// 		}
			// 		$("#seeYDF article").append(
			// 			'<div class="divtop">'  +
			// 			'<h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4>' +
			// 			// '</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">主办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协办单位：' + v.company +
			// 			// '</div><div class="fj no">附件：<span>' + attachment + '<span></div>' + 
			// 			attachmentDiv +  '</div>' + 
			// 			'<div>' + v.matter + '</div>'
			// 			)
			// 	})
			// })
		})

		//评价
		$("#YDF .sees").off().click(function() {
			var key = $(this).parent().attr("sortid");
			$("#seeevaluate .normalbutton").off().click(function() {
				var satisfied = $("#seeevaluate .marginb .form input:radio:checked")
					.val();
				var satisfied2 = $("#seeevaluate .marginb .form2 input:radio:checked")
					.val();
				var satisfied3 = $("#seeevaluate .marginb .form3 input:radio:checked")
					.val();
				var satisfied4 = $("#seeevaluate .marginb .form4 input:radio:checked")
					.val();
				var satisfied5 = $("#seeevaluate .marginb .form5 input:radio:checked")
					.val();
				var resume = "1";
				var consultation = "1";
				var opinion = $("#seeevaluate textarea").val();

				console.log(key)
				console.log(satisfied, satisfied2, satisfied3, satisfied4, satisfied5,
					resume, consultation, opinion, key);
				var k1 = {
					"effect": satisfied,
					"effect2": satisfied2,
					"effect3": satisfied3,
					"effect4": satisfied4,
					"effect5": satisfied5,
					"opinion": opinion,
					"evaluationDone": 1
				};
				var k2 = {
					"resume": resume,
					"consultation": consultation
				};
				RssApi.Edit("opinion").setLoading(true).keyvalue(k1).keyvalue({
					"proposal": key,
					"myid": RssUser.Data.myid
				}).getJson(function(json) {
					console.log(json)
					RssApi.Edit("suggest").setLoading(true).keyvalue(k2)
						.keyvalue({
							"id": key,
							"myid": RssUser.Data.myid
						}).getJson(function(json) {
							console.log(json)
							if (json.id) {
								alert("评价成功");
								$("#seeevaluate textarea").val("");
								location.href = "#YDF";
							} else {
								alert("评价失败");
							}
						})
				})
			})
		})
		//评价结果
	}).getJson();
})

//领衔代表已填写对议案建议办理答复的意见
$("#YTX").load(function() {
	if (arry.indexOf("YTX") == "-1") {
		$("#YTX ul li").eq(0).siblings().remove();
		arry.push("YTX")
	} else {
		$("#YTX ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"resume": "1",
		"consultation": "1",
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)		
		
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length > 0 ) {
			$('.nodata_tip').hide();
		} else {
			$('.nodata_tip').show();
		}
		
		
		var json2 = [];
		$.each(json, function(k, v) {	
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})
		$("#YTX ul").mapview(json2, {
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
		}, append)
		//查看
		$("#YTX .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			lwstate =  999 ;
			var obj = "seeYTX" ;
			viewSuggestDetail(obj, reject , lwstate ,key );
			
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key,
			// 		"resume": "1",
			// 		"consultation": "1"
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeYTX article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"lwstate": function(val) {
			// 			if (val == "1") {
			// 				return lwstate = "建议";
			// 			} else if (val == "2") {
			// 				return lwstate = "议案";
			// 			} else if (val == "3") {
			// 				return lwstate = "批评";
			// 			} else if (val == "4") {
			// 				return lwstate = "意见";
			// 			} else if (val == "5") {
			// 				return lwstate = "质询";
			// 			}
			// 		},
			// 		"examination": function(val) {
			// 			if (val == "1") {
			// 				return examination = "未审查";
			// 			} else if (val == "2") {
			// 				return examination = "已审查";
			// 			} else if (val == "3") {
			// 				return examination = "置回";
			// 			} else if (val == "4") {
			// 				return examination = "待审查";
			// 			} else if (val == "5") {
			// 				return examination = "乡镇已审查";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		var attachment = v.enclosure;
					
			// 		var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
			// 		if ( "undefined".indexOf(attachment) != -1) {
			// 			attachment = "无";
			// 			attachmentDiv = '</div><div class="fj no">附件：' + attachment;
			// 		}
			// 		$("#seeYTX article").append(
			// 			'<div class="divtop">'  +
			// 			'<h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4>'  +
			// 			// '</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">主办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协办单位：' + v.company +
			// 			// '</div><div class="fj no">附件：' + attachment +'<span></div>' +
			// 			attachmentDiv +  '</div>' +
						
			// 			'<div>' + v.matter + '</div>'
			// 			)
			// 	})
			// })
		})
		//评价结果
		$("#YTX .ans").off().click(function() {
			var key = $(this).parent().attr("sortid");
			var numpeople = $(this).attr("numpeople");
			faqsajax = RssApi.Table.List("opinion").setLoading(true).condition(new RssDict()
				.keyvalue({
					"proposal": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var effect = 0,
					interview_0 = 0,
					interview_1 = 0,
					interview_2 = 0,
					attitude_0 = 0,
					attitude_1 = 0,
					attitude_2 = 0,
					reply_0 = 0,
					reply_1 = 0,
					reply_2 = 0,
					result_0 = 0,
					result_1 = 0,
					result_2 = 0,
					total_0 = 0,
					total_1 = 0,
					total_2 = 0;
				$("#ansYTX article").mapview(json, {
					"effect": function(val) {
						if (val = 1) {
							return interview_0++
						} else if (val = 2) {
							return interview_1++
						} else if (val = 3) {
							return interview_2++
						}
					},
					"effect2": function(val) {
						if (val = 1) {
							return attitude_0++
						} else if (val = 2) {
							return attitude_1++
						} else if (val = 3) {
							return attitude_2++
						}
					},
					"effect3": function(val) {
						if (val = 1) {
							return reply_0++
						} else if (val = 2) {
							return reply_1++
						} else if (val = 3) {
							return reply_2++
						}
					},
					"effect4": function(val) {
						if (val = 1) {
							return result_0++
						} else if (val = 2) {
							return result_1++
						} else if (val = 3) {
							return result_2++
						}
					},
					"effect5": function(val) {
						if (val = 1) {
							return total_0++
						} else if (val = 2) {
							return total_1++
						} else if (val = 3) {
							return total_2++
						}
					},
				})
				$.each(json, function(k, v) {
					$("#ansYTX article").append(
						'<div class="divtop"><h1>面商</h1></div><div class="no">满意：' +
						(interview_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (interview_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (interview_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>态度</h1></div><div class="no">满意：' +
						(attitude_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (attitude_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (attitude_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>答复</h1></div><div class="no">满意：' +
						(reply_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (reply_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (reply_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>结果</h1></div><div class="no">满意：' +
						(result_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (result_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (result_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>综合</h1></div><div class="no">满意：' +
						(total_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (total_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (total_2 /
							numpeople) * 100 + '%</div>')
				})
			})
		})
	}).getJson();
})

//附议代表填写对议案建议办理答复的意见
$("#DFYJ").load(function() {
	if (arry.indexOf("DFYJ") == "-1") {
		$("#DFYJ ul li").eq(0).siblings().remove();
		arry.push("DFYJ")
	} else {
		$("#DFYJ ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"resume": "0",
		"consultation": "1",
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length > 0 ) {
			$('.nodata_tip').hide();
		} else {
			$('.nodata_tip').show();
		}
		var json2 = [];
		$.each(json, function(k, v) {	
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})
		$("#DFYJ ul").mapview(json2, {
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
		}, append)
		//查看
		$("#DFYJ .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			lwstate =  999 ;
			var obj = "seeDFYJ" ;
			viewSuggestDetail(obj, reject , lwstate ,key );
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key,
			// 		"resume": "1",
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeDFYJ article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"lwstate": function(val) {
			// 			if (val == "1") {
			// 				return lwstate = "建议";
			// 			} else if (val == "2") {
			// 				return lwstate = "议案";
			// 			} else if (val == "3") {
			// 				return lwstate = "批评";
			// 			} else if (val == "4") {
			// 				return lwstate = "意见";
			// 			} else if (val == "5") {
			// 				return lwstate = "质询";
			// 			}
			// 		},
			// 		"examination": function(val) {
			// 			if (val == "1") {
			// 				return examination = "未审查";
			// 			} else if (val == "2") {
			// 				return examination = "已审查";
			// 			} else if (val == "3") {
			// 				return examination = "置回";
			// 			} else if (val == "4") {
			// 				return examination = "待审查";
			// 			} else if (val == "5") {
			// 				return examination = "乡镇已审查";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		var attachment = v.enclosure;
					
			// 		var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
			// 		if ( "undefined".indexOf(attachment) != -1) {
			// 			attachment = "无";
			// 			attachmentDiv = '</div><div class="fj no">附件：' + attachment;
			// 		}
					
			// 		$("#seeDFYJ article").append(
			// 			'<div class="divtop">' +
			// 			'<h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4>'  +
			// 			// '</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">主办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协办单位：' + v.company +
			// 			// '</div><div class="fj no">附件：<span>' + attachment +
			// 			attachmentDiv + '</div>' + 
			// 		    '<div>' + v.matter + '</div>'
			// 			)
			// 	})
			// })
		})

		//评价结果 ting zhang
		$("#DFYJ .ans").off().click(function() {
			var key = $(this).parent().attr("sortid");
			var numpeople = $(this).attr("numpeople");
			faqsajax = RssApi.Table.List("opinion").setLoading(true).condition(new RssDict()
				.keyvalue({
					"proposal": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var effect = 0,
					interview_0 = 0,
					interview_1 = 0,
					interview_2 = 0,
					attitude_0 = 0,
					attitude_1 = 0,
					attitude_2 = 0,
					reply_0 = 0,
					reply_1 = 0,
					reply_2 = 0,
					result_0 = 0,
					result_1 = 0,
					result_2 = 0,
					total_0 = 0,
					total_1 = 0,
					total_2 = 0;
				$("#ansYTX article").mapview(json, {
					"effect": function(val) {
						if (val = 1) {
							return interview_0++
						} else if (val = 2) {
							return interview_1++
						} else if (val = 3) {
							return interview_2++
						}
					},
					"effect2": function(val) {
						if (val = 1) {
							return attitude_0++
						} else if (val = 2) {
							return attitude_1++
						} else if (val = 3) {
							return attitude_2++
						}
					},
					"effect3": function(val) {
						if (val = 1) {
							return reply_0++
						} else if (val = 2) {
							return reply_1++
						} else if (val = 3) {
							return reply_2++
						}
					},
					"effect4": function(val) {
						if (val = 1) {
							return result_0++
						} else if (val = 2) {
							return result_1++
						} else if (val = 3) {
							return result_2++
						}
					},
					"effect5": function(val) {
						if (val = 1) {
							return total_0++
						} else if (val = 2) {
							return total_1++
						} else if (val = 3) {
							return total_2++
						}
					},
				})
				$.each(json, function(k, v) {
					$("#ansDFYJ article").append(
						'<div class="divtop"><h1>面商</h1></div><div class="no">满意：' +
						(interview_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (interview_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (interview_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>态度</h1></div><div class="no">满意：' +
						(attitude_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (attitude_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (attitude_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>答复</h1></div><div class="no">满意：' +
						(reply_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (reply_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (reply_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>结果</h1></div><div class="no">满意：' +
						(result_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (result_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (result_2 /
							numpeople) * 100 +

						'%</div><div class="divtop"><h1>综合</h1></div><div class="no">满意：' +
						(total_0 / numpeople) * 100 +
						'%</div><div class="no">基本满意：' + (total_1 /
							numpeople) * 100 +
						'%</div><div class="no">不满意：' + (total_2 /
							numpeople) * 100 + '%</div>')
				})
			})
		})
	}).getJson();
})

//满意率统计
var ruzhou_refresh_flag = 1 ; //为了处理进入二级页面返回以后(进入阅读页面后)，不要重新load. 汝州需求。 默认值1表示刷新。
	
//用于标志是否需要刷新
let auto_refresh_data_flag = true ;

$("#seestatisticsMY .hisback").click(function() {
	ruzhou_refresh_flag = 0 ;
});	
$("#viewEvaluationDetail .hisback").click(function() {
	ruzhou_refresh_flag = 0 ;
});	

$("#statisticsMY .hisback").click(function() {
	auto_refresh_data_flag = true ;
	
	// global_temp_data.;
	// console.log("_____________ global_temp_data=",global_temp_data)
	// for ( var i = 0 ; i < global_temp_data.length ; i++) {
	// 	global_temp_data[i] = null;
	// }
	
	// console.log("_____________ 1111 global_temp_data=",global_temp_data)
	
});	


//全局变量，用于保存每次刷新的数据，因为现在每次翻页以后，退出重新进入就有问题，这种方法不是 很好。临时解决
var global_temp_data = [] ;
$("#statisticsMY").load(function() {
	
	if ( ruzhou_refresh_flag == 0 ) {
		ruzhou_refresh_flag = 1 ;
		return ;
	}
	if (arry.indexOf("statisticsMY") == "-1") {
		$("#statisticsMY ul li").eq(0).siblings().remove();
		arry.push("statisticsMY")
	} else {
		$("#statisticsMY ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
		"degree": "1"
	}).getDict()).setFlushUI(function(json, append) {

		var json2 = [];
		// var cnt = 1 ;
		$.each(json, function(k, v) {
			
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			
			// // cnt ++ ;
			// // v.index = cnt ;
			// var push = 1 ;
			// for ( var i = 0 ; i < global_temp_data.length ; i++) {
			// 	if ( global_temp_data[i] == v.id ) {
			// 		push = 0 ;
			// 		break;
			// 	}
			// }
			
			// if ( push == 1 ) {
			// 	json2.push(v)
			// }
			
			json2.push(v)
		})
		// $.each(json, function(k, v) {
		// 	global_temp_data.push(v.id)
		// })	
		
		
		
		if (json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json2.length >= 0 ) {
			$('.nodata_tip').hide();
			
		} else {
			$('.nodata_tip').show();
		}
		
		if ( json2.length == 0 ) {
			auto_refresh_data_flag = false ;
		}
		
		
		mapviewFillData( "#statisticsMY ul" , json2 ,append );
		
		//查看
		$("#statisticsMY .see").off().click(function() {
			var key = $(this).parent().attr("sortid");			
			var appendObj = "statisticsMY";
			ruzhou_refresh_flag = 0 ;
			viewSuggestInformation( appendObj , key );
			
			viewEvaluationDetail
		// 	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
		// 		.keyvalue({
		// 			"id": key
		// 		}).getDict()).getJson(function(json) {
		// 		console.log(json)
		// 		var shijian = ""
		// 		$("#seestatisticsMY article").mapview(json, {
		// 			"shijian": function(val) {
		// 				return shijian = new Date(parseInt(val) * 1000)
		// 					.toString("yyyy-MM-dd hh:mm");
		// 			},
		// 			"lwstate": function(val) {
		// 				if (val == "1") {
		// 					return lwstate = "建议";
		// 				} else if (val == "2") {
		// 					return lwstate = "议案";
		// 				} else if (val == "3") {
		// 					return lwstate = "批评";
		// 				} else if (val == "4") {
		// 					return lwstate = "意见";
		// 				} else if (val == "5") {
		// 					return lwstate = "质询";
		// 				}
		// 			},
		// 			"examination": function(val) {
		// 				if (val == "1") {
		// 					return examination = "未审查";
		// 				} else if (val == "2") {
		// 					return examination = "已审查";
		// 				} else if (val == "3") {
		// 					return examination = "置回";
		// 				} else if (val == "4") {
		// 					return examination = "待审查";
		// 				} else if (val == "5") {
		// 					return examination = "乡镇已审查";
		// 				}
		// 			}
		// 		})
		// 		$.each(json, function(k, v) {
		// 			var attachment = v.enclosure;
		// 			var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
		// 			if ( "undefined".indexOf(attachment) != -1) {
		// 				attachment = "无";
		// 				attachmentDiv = '</div><div class="fj no">附件：' + attachment;
		// 			}
					
					
		// 			$("#seestatisticsMY article").append(
		// 				'<div class="divtop">' +
		// 				'<h3>' + v.title +
		// 				'</h3><h4 >提出者:' + v.realname +
		// 				'</h4><h4 shijian>' + shijian + '</h4>' + 
		// 				// '</h4></div><div class="divp">' + v.matter +
		// 				// '</div><div class="no">编号：' + v.realid +
		// 				'</div><div class="no">类型：' + lwstate +
		// 				'</div><div class="no">分类：' + v.reviewclass +
		// 				'</div><div class="no">审查状态：' + examination +
		// 				'</div><div class="no">主办单位：' + v.realcompanyname +
		// 				'</div><div class="no">协办单位：' + v.company +
		// 				// '</div><div class="fj no">附件：<span>' + attachment +
		// 				attachmentDiv + '</div>' + 
		// 				'<div>' + v.matter + '</div>'
		// 				)
		// 		})
		// 	})
		})
		
		//查看测评详情
		$("#statisticsMY .ans").off().click(function() {
		  var key = $(this).parent().attr("sortid");			
		  viewEvaluationDetailEntry( key );
		  ruzhou_refresh_flag = 0 ;
		  location.href="#viewEvaluationDetail"
		 //overall_satisfaction
		  
		})
		
		// let flag2 = false
		//   $('#statisticsMY_article').scroll(() => {
		//    let scrollTop = $('#statisticsMY_article').scrollTop();
		//    let scrollHeight = $(document).height();
		//    let windowHeight = $('#statisticsMY_article>.fenye').height();
		//    if((windowHeight- 100 < (scrollTop + scrollHeight)) && !flag2 && ( ispagesLoading == 0 ) ) {
		// 	   var t = $(this);
		// 	   flag2 = true ;
		// 	   ispagesLoading = 1 ;
		// 	   faqsajax.nextpage().lastpage(function( jsondata ) {
		// 	   	t.hide();
		// 		flag2 = false ;
		// 		// $('.nodata_tip').hide();
		// 	   }).getJson();
		    
		//    }
		//   })
		
		
		
		
		
	}).getJson();
})

//待测评建议议案
$("#DCPlook").load(function() {
	if (arry.indexOf("DCPlook") == "-1") {
		$("#DCPlook ul li").eq(0).siblings().remove();
		arry.push("DCPlook")
	} else {
		$("#DCPlook ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"lwstate": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#DCPlook ul").mapview(json, {}, append);
		//查看
		$("#DCPlook .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeDCPlook article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
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
					"examination": function(val) {
						if (val == "1") {
							return examination = "未审查";
						} else if (val == "2") {
							return examination = "已审查";
						} else if (val == "3") {
							return examination = "置回";
						} else if (val == "4") {
							return examination = "待审查";
						} else if (val == "5") {
							return examination = "乡镇已审查";
						}
					}
				})
				$.each(json, function(k, v) {
					var attachment = v.enclosure;
					
					var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：<span>' + attachment;
					if ( "undefined".indexOf(attachment) != -1) {
						attachment = "无";
						attachmentDiv = '</div><div class="fj no">附件：' + attachment;
					}
					
					$("#seeDCPlook article").append(
						'<div class="divtop">' +
						'<h3>' + v.title +
						'</h3><h4 >提出者:' + v.realname +
						'</h4><h4 shijian>' + shijian +
						'</h4>'  +
						// '</div><div class="no">编号：' + v.realid +
						'</div><div class="no">类型：' + lwstate +
						'</div><div class="no">分类：' + v.reviewclass +
						'</div><div class="no">审查状态：' + examination +
						'</div><div class="no">主办单位：' + v.realcompanyname +
						'</div><div class="no">协办单位：' + v.company +
						// '</div><div class="fj no">附件：<span>' + attachment +
						attachmentDiv + '</div>' + 
						'<div>' + v.matter + '</div>'
						)
				})
			})
		})
		//测评

	}).getJson();
})


function compare(p){ //这是比较函数
    return function(m,n){
        var a = m[p];
        var b = n[p];
        return b - a; //升序
    }
}
//履职排序
function rank_sort_fifty( json ,rank ,append ){
	var cnt = 0 ;
	var rankIndex = 1 ;
	var totalScore = 0 ;
	var rankcnt = 1 ;
	var json2 = [];
	var json3 = []; //为了处理切换时候一直按照总分排名。增加一个临时变量
	var rank50 = 0 ; //是否是50名以内，如果是怎显示排名
	var isAdmin = 0 ;// 是否是选工委
	if ( RssUser.Data.myid.indexOf("1429") != -1 ) {
		isAdmin = 1 ;
	}
	$.each(json, function(k, v) {
		if ( isAdmin == 1 ) {
			json2.push(v)	
		}
		else {
			if ( cnt < 50 ) {
				json2.push( v )
				json3.push( v );
				cnt ++ ;
				rankcnt ++ ;
				if ( v.myid.indexOf( RssUser.Data.myid ) != -1 ) {
					rankIndex =  rankcnt ;
					totalScore = v.totalScore;
					rank50 = 1 ;
				}
			}
			else {
				//为了绩算个人实际得分。否则会显示0
				if ( v.myid.indexOf( RssUser.Data.myid ) != -1 ) {
					 totalScore = v.totalScore;
				}
			}
		}//isAdmin
		
		
	})
	if ( isAdmin == 1 ) {
		$("#rankIndex_id").hide();
		if (json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
	}else {
		// $("#rankIndex_id").css("background", "#f0f0f0 url(img/limg/into_right.png) no-repeat 97% 50%");
		// $("#rankIndex_id").css("background-size", ".16rem");
		// $("#rankIndex_id").show();
		
		var cntRank = 1 ;
		rankIndex = "50+" ;
		// json3.sort((a, b) => b.totalScore - a.totalScore)
		$.each(json2, function(k, v) { //排序后再查找，确认排名
			if ( v.myid.indexOf( RssUser.Data.myid ) != -1 ) {
				totalScore = v.totalScore ;
				rankIndex = cntRank ;
			}
			cntRank ++ ;
		})
		var rankTips = "我的总分:" + totalScore + "&nbsp;&nbsp;&nbsp;&nbsp;排名:" + rankIndex;
		// rankTips = "我的总分:" + totalScore + "&nbsp;&nbsp;&nbsp;&nbsp;排名:" + rankIndex;
		$("#rankIndex_id").html( rankTips );
		$('.nodata').hide();
	}
	 var json3 = [];
	 var prevValue = 0 ;
	 var prevIndex = 0 ;
	 var rankIndex = 1 ;
	 for (var i = 0; i < json2.length; i++) {
	 	var jsonData = json2[i];
	 	//jsonData["index"] = (i + 1) + "";
		
		
		if ( i > 0 ) {
			prevIndex = i - 1 ;
		}else {
			prevIndex = 0 ;
		}
		// jsonData["index"] = rankIndex ;
		var scoretitle="次数: ";
		if ( rank == 1 ){
			scoretitle="分数: ";
		    jsonData["cnt"] = jsonData.totalScore + "";	
			prevValue = json2[prevIndex].totalScore;
			
			if ( prevValue == json2[i].totalScore ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 2 ){
		    jsonData["cnt"] = jsonData.num + "";	
			prevValue = json2[prevIndex].num;
			if ( prevValue == json2[i].num ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 3 ){
		    jsonData["cnt"] = jsonData.meeting + "";	
			prevValue = json2[prevIndex].meeting;
			if ( prevValue == json2[i].meeting ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 4 ){
		    jsonData["cnt"] = jsonData.othermeeting + "";	
			prevValue = json2[prevIndex].othermeeting;
			if ( prevValue == json2[i].othermeeting ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 5 ){
		    jsonData["cnt"] = jsonData.study + "";	
			prevValue = json2[prevIndex].study;
			if ( prevValue == json2[i].study ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 6 ){
		    jsonData["cnt"] = jsonData.suggest + "";	
			prevValue = json2[prevIndex].suggest;
			if ( prevValue == json2[i].suggest ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 7 ){
		    jsonData["cnt"] = jsonData.specialsurvey + "";	
			prevValue = json2[prevIndex].specialsurvey;
			if ( prevValue == json2[i].specialsurvey ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 8 ){
		    jsonData["cnt"] = jsonData.totalMixActivities + "";	
			prevValue = json2[prevIndex].totalMixActivities;
			if ( prevValue == json2[i].totalMixActivities ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 9 ){
		    jsonData["cnt"] = jsonData.recievevoters + "";	
			prevValue = json2[prevIndex].recievevoters;
			if ( prevValue == json2[i].recievevoters ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 10 ){
		    jsonData["cnt"] = jsonData.reslovedispute + "";	
			prevValue = json2[prevIndex].reslovedispute;
			if ( prevValue == json2[i].reslovedispute ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 11 ){
		    jsonData["cnt"] = jsonData.helpweak + "";	
			prevValue = json2[prevIndex].helpweak;
			if ( prevValue == json2[i].helpweak ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 12 ){
		    jsonData["cnt"] = jsonData.goodthing + "";	
			prevValue = json2[prevIndex].goodthing;
			if ( prevValue == json2[i].goodthing ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 13 ){
		    jsonData["cnt"] = jsonData.charity + "";	
			prevValue = json2[prevIndex].charity;
			if ( prevValue == json2[i].charity ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		else if ( rank == 14 ){
		    jsonData["cnt"] = jsonData.reportvoter + "";
			prevValue = json2[prevIndex].reportvoter;
			if ( prevValue == json2[i].reportvoter ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}else if ( rank == 15 ){
		    jsonData["cnt"] = jsonData.other + "";	
			prevValue = json2[prevIndex].other;
			if ( prevValue == json2[i].other ) {
				jsonData["index"] = rankIndex ;
			}
			else {
				rankIndex ++ ;
				jsonData["index"] = rankIndex ;
			}
		}
		
		jsonData["cnt"] = scoretitle + jsonData["cnt"];
	 	json3.push(jsonData);
	 };
	 
	 $("#rankLZ ul").mapview(json3, {}, append);
	 
	 
}


$("#myrankinfo .hisback").click(function() {
	// entryRankdetail = 1 ;
})
var entryRankdetail = 0 ;
var optionIndex = 1 ;
$("#rankLZ").load(function() {
	console.log('———————— #rankLZ .load:');
	if ( entryRankdetail == 1 ){
		entryRankdetail = 0 ;
		return ;
	}
	
	reviewclass = {};
	if (arry.indexOf("rankLZ") == "-1") {
		$("#rankLZ ul li").eq(0).siblings().remove();
		arry.push("rankLZ")
	} else {
		$("#rankLZ ul li").remove();
	}

	// faqsajax = RssApi.Table.List("rank_sort").setLoading(true).keyvalue("pagesize", "10000").condition(
	faqsajax = RssApi.View.List("rank").setLoading(true).keyvalue("pagesize", "1000").condition(
		new RssDict().keyvalue({
			"state": 1
		}).getDict()).setFlushUI(function(json, append) {
	// faqsajax = RssApi.Table.List("rank_sort").setLoading(true).condition(new RssDict().keyvalue({
	// 	"state", 1
	// }).getDict()).setFlushUI(function(json, append) {
		
		
		//added by ting zhang
		//json.sort(compare("totalScore"));
		
		// json.sort((a, b) => b.totalScore - a.totalScore)
		// rank_sort_fifty ( json ,1,append);
		console.log(" ________________ optionIndex="+ optionIndex)
		if ( optionIndex == 1 ) {
			json.sort((a, b) => b.totalScore - a.totalScore)
			rank_sort_fifty ( json ,1,append);
		}
		else if ( optionIndex == 2 ) {
			json.sort((a, b) => b.num - a.num)
			rank_sort_fifty ( json ,2,append);
		}
		else if ( optionIndex == 3 ) {
			json.sort((a, b) => b.meeting - a.meeting)
			rank_sort_fifty ( json ,3,append);
		}
		else if ( optionIndex == 4 ) {
			json.sort((a, b) => b.othermeeting - a.othermeeting)
			rank_sort_fifty ( json ,4,append);
		}
		else if ( optionIndex == 5 ) {
			json.sort((a, b) => b.study - a.study)
			rank_sort_fifty ( json , 5,append);
		}
		else if ( optionIndex == 6 ) {
			json.sort((a, b) => b.suggest - a.suggest)
			rank_sort_fifty ( json ,6,append);
		}
		else if ( optionIndex == 7 ) {
			json.sort((a, b) => b.specialsurvey - a.specialsurvey)
			rank_sort_fifty ( json , 7 ,append);
		}
		else if ( optionIndex == 8 ) {
			json.sort((a, b) => b.totalMixActivities - a.totalMixActivities)
			rank_sort_fifty ( json , 8 ,append);
		}
		else if ( optionIndex == 9 ) {
			json.sort((a, b) => b.recievevoters - a.recievevoters)
			rank_sort_fifty ( json , 9 ,append);
		}
		else if ( optionIndex == 10 ) {
			json.sort((a, b) => b.reslovedispute - a.reslovedispute)
			rank_sort_fifty ( json , 10 ,append);
		}
		else if ( optionIndex == 11 ) {
			json.sort((a, b) => b.helpweak - a.helpweak)
			rank_sort_fifty ( json , 11 ,append);
		}
		else if ( optionIndex == 12 ) {
			json.sort((a, b) => b.goodthing - a.goodthing)
			rank_sort_fifty ( json , 12 ,append);
		}
		else if ( optionIndex == 13 ) {
			json.sort((a, b) => b.charity - a.charity)
			rank_sort_fifty ( json , 13 ,append);
		}
		else if ( optionIndex == 14 ) {
			json.sort((a, b) => b.reportvoter - a.reportvoter)
			rank_sort_fifty ( json , 14 ,append);
		}
		else if ( optionIndex == 15 ) {
			json.sort((a, b) => b.other - a.other)
			rank_sort_fifty ( json , 15 ,append);
		}
		//  $("#rankLZ ul").mapview(json2, {}, append);
		 
		
		$("#rankLZ .select").off("click").change(function() { 
			var rank = $("#rankLZ .select").val();
			optionIndex = rank ;
			// console.log(" ________ select optionIndex="+optionIndex)
			if (arry.indexOf("rankLZ") == "-1") {
				$("#rankLZ ul li").eq(0).siblings().remove();
				arry.push("rankLZ")
			} else {
				$("#rankLZ ul li").remove();
			}
			$("#rankLZ ul li").remove();
			
			if (rank == 1) {
				// json.sort(compare("totalScore"));
				json.sort((a, b) => b.totalScore - a.totalScore)
				// location.href="#rankLZ1";
				rank_sort_fifty(json,rank,append);
				
			} else if (rank == 2) {
				// json.sort(compare("num"));
				json.sort((a, b) => b.num - a.num)
				rank_sort_fifty(json,rank,append);
			} else if (rank == 3) {
				// json.sort(compare("meeting"));
				json.sort((a, b) => b.meeting - a.meeting)
				rank_sort_fifty(json,rank,append);
			} else if (rank == 4) {
				// json.sort(compare("othermeeting"));
				json.sort((a, b) => b.othermeeting - a.othermeeting)
				rank_sort_fifty(json,rank,append);
				
			} else if (rank == 5) {
				json.sort((a, b) => b.study - a.study)
				rank_sort_fifty(json,rank,append);
			} else if (rank == 6) {
				json.sort((a, b) => b.suggest - a.suggest)	
				rank_sort_fifty(json,rank,append);
			} else if (rank == 7) {
				json.sort((a, b) => b.specialsurvey - a.specialsurvey)
				rank_sort_fifty(json,rank,append);
			} else if (rank == 8) {
				json.sort((a, b) => b.totalMixActivities - a.totalMixActivities)
				rank_sort_fifty(json,rank,append);
			} else if (rank == 9) {
				json.sort((a, b) => b.recievevoters - a.recievevoters)
				rank_sort_fifty(json,rank,append);
			}
			else if (rank == 10) {
				json.sort((a, b) => b.reslovedispute - a.reslovedispute)
				rank_sort_fifty(json,rank,append);
				
			}
			else if (rank == 11) {
				json.sort((a, b) => b.helpweak - a.helpweak)
				rank_sort_fifty(json,rank,append);
			}
			else if (rank == 12) {
				json.sort((a, b) => b.goodthing - a.goodthing)
				rank_sort_fifty(json,rank,append);
			}
			else if (rank == 13) {
				json.sort((a, b) => b.charity - a.charity)
				rank_sort_fifty(json,rank,append);
			}
			else if (rank == 14) {
				json.sort((a, b) => b.reportvoter - a.reportvoter)
				rank_sort_fifty(json,rank,append);
			}
			else if (rank == 15) {
				json.sort((a, b) => b.other - a.other)
				rank_sort_fifty(json,rank,append);
				// refreshData( rank )
			}
			
			
			
			
			
			// $("#rankLZ ul").mapview(json, {}, append);
		})
		
		$("#rankLZ .hisback").click(function() {
			entryRankdetail = 0 ;
			console.log('———————— #rankLZ .hisback:');
		})
		//查看
		// $("#rankLZ .see").off().click(function() {
		// 	var key = $(this).parent().attr("id");
		// 	location.href ="#myrankinfo"
		// 	console.log('———————— #rankLZ .see key is:', key);
			
		// 	entryRankdetail = 1
		// 	$("#duptyId").val(key);
		// })
		
	    $('.fenye').on('click', '.see', function (){
	      var key = $(this).parent().attr("id");
	      entryRankdetail = 1
	      $("#duptyId").val(key);
		  // console.log('———————— #rankLZ11111 .see key is:', key);
		  
	    })
	
	
		
	}).getJson();
})


function refreshData( refreshIndex ){
	faqsajax = RssApi.View.List("rank").setLoading(true).keyvalue("pagesize", "1000").condition(
		new RssDict().keyvalue({
			"state": 1
		}).getDict()).setFlushUI(function(json, append) {
			if ( 1 == refreshIndex ) {
				json.sort((a, b) => b.totalScore - a.totalScore)	
			}
			else if ( 2 == refreshIndex ) {
				json.sort((a, b) => b.num - a.num)	
			}
			else if ( 3 == refreshIndex ) {
				json.sort((a, b) => b.meeting - a.meeting)	
			}
			else if ( 15 == refreshIndex ) {
				json.sort((a, b) => b.othermeeting - a.othermeeting)	
			}
			
			rank_sort_fifty(json,refreshIndex, append);
	})
}

function isEnrollDone( v ) {

	//判断是否已经报名了
	RssApi.Table.Details("activities_userlist").setLoading(false).condition(new RssDict()
		.keyvalue({
			"activitiesid": v.id,
			"userid": RssUser.Data.myid
		}).getDict()).getJson(function(json) {
			var currentTime = (new Date()).getTime() / 1000;
			// console.log(" _______ 判断是否报名 json=",json )		
			var department = v.department;
			if ("undefined".indexOf( department ) == "-1") {
				department = "未知";
			}
			
			var baoming = '<a class="ans" id="btn_enroll" onclick="attendSign('+v.id+');"><span>我要报名</span></a>' ;
			if ( isXuangongweiAccount () == 1 ) {
				baoming = "";
			}
			var liStr = '<li><div class="haveReadStyle1"></div><div class="liico"><span >' + v.id +
				'</span></div><h1>' + v.title +
				'</h1><p >组织部门：' + v.department + '</p>' + '<p >状态：未报名'  + '</p>'+
				'<div class="lifoot" activitiesid=' + v.activitiesid +
				' id=' + v.id +
				'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看信息</span></a>' +
				baoming +
				'</div></li>';
					
					if (v.state == '2' && isXuangongweiAccount () == 0 ) {
						liStr = '<li><div class="haveReadStyle2"></div><div class="liico"><span >' + v.id +
						'</span></div><h1>' + v.title +
						'</h1><p >组织部门：' + v.department + '</p>' + '<p >状态：未报名'  + '</p>'+
						'<div class="lifoot" activitiesid=' + v.activitiesid +
						' id=' + v.id +
						// '><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看信息</span></a><a class="ans" id="btn_enroll" onclick="attendSign('+v.id+');"><span>我要报名</span></a></div></li>';
					'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看信息</span></a>' +
					baoming +
					'</div></li>';
					}
					if (json.jointype == "2") {
						//alert("已经报名过了");
						// console.log(" _______ 已经报名过了")
						liStr = '<li><div class="haveReadStyle1"></div><div class="liico"><span >' + v.id +
							'</span></div><h1>' + v.title +
							'</h1><p >组织部门：' + v.department + '</p>'+'<p >报名状态：已报名'  + '</p>'+
							
							'<div class="lifoot" activitiesid=' + v.activitiesid +
							' id=' + v.id +
							'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看信息</span></a></div></li>';
						if (v.state == '2') {
							liStr = '<li><div class="haveReadStyle2"></div><div class="liico"><span >' + v.id +
							'</span></div><h1>' + v.title +
							'</h1><p >组织部门：' + v.department + '</p>'+'<p >报名状态：已报名'  + '</p>'+
							
							'<div class="lifoot" activitiesid=' + v.activitiesid +
							' id=' + v.id +
							'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看信息</span></a></div></li>';
						}	
					}
					
					else if ( v.endshijian < currentTime ) {
						// console.log(" _______ 已过报名期限")
						liStr = '<li><div class="haveReadStyle1"></div><div class="liico"><span >' + v.id +
							'</span></div><h1>' + v.title +
							'</h1><p >组织部门：' + department + '</p>'+'<p >状态：报名已截止'  + '</p>'+
							
							'<div class="lifoot" activitiesid=' + v.activitiesid +
							' id=' + v.id +
							'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看内容</span></a></div></li>';

						if (v.state == '2') {
							liStr = '<li><div class="haveReadStyle2"></div><div class="liico"><span >' + v.id +
							'</span></div><h1>' + v.title +
							'</h1><p >组织部门：' + department + '</p>'+'<p >状态：报名已截止'  + '</p>'+
							
							'<div class="lifoot" activitiesid=' + v.activitiesid +
							' id=' + v.id +
							'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看内容</span></a></div></li>';
						}
					}
					else if ( currentTime > v.finishtime  ) {
						liStr = '<li><div class="haveReadStyle1"></div><div class="liico"><span >' + v.id +
							'</span></div><h1>' + v.title +
							'</h1><p >组织部门：' + department + '</p>'+'<p >状态：活动已结束'  + '</p>'+
							
							'<div class="lifoot" activitiesid=' + v.activitiesid +
							' id=' + v.id +
							'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看内容</span></a></div></li>';

						if (v.state == '2') {
							liStr = '<li><div class="haveReadStyle2"></div><div class="liico"><span >' + v.id +
							'</span></div><h1>' + v.title +
							'</h1><p >组织部门：' + department + '</p>'+'<p >状态：活动已结束'  + '</p>'+
							
							'<div class="lifoot" activitiesid=' + v.activitiesid +
							' id=' + v.id +
							'><a href="#activityenroll" class="see" onclick="seeInfo('+v.id+');"><span>查看内容</span></a></div></li>';
						}
					}
					

					$("#applyHD ul").append(liStr);
					unreadmsg();
					unreadmsg1();
				})				
			  						 	
}

//活动报名
$("#applyHD").load(function() {
	if (arry.indexOf("applyHD") == "-1") {
		$("#applyHD ul li").eq(0).siblings().remove();
		arry.push("applyHD")
	} else {
		$("#applyHD ul li").remove();
	}
	var currentTime = (new Date()).getTime() / 1000;
	
	

	//faqsajax = RssApi.View.List("activities_userlist").setLoading(true).condition(new RssDict().keyvalue({
    faqsajax = RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue({
		//"userid": RssUser.Data.myid,
		"enroll": 1
	}).getDict()).setFlushUI(function(json, append) {
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.noActivities').show();
		}
		else {
			$('.noActivities').hide();
		}
		
		$.each(json, async function(k, v) {
			isEnrollDone ( v);				 
		})
		
		
		
		

		//查看
		$("#applyHD .see").off("click").click(function() {
			var realname="";
			var key = $(this).parent().attr("id"); // activitiesid
			var obj = "activityHD";
			// var activityType = 1 ;
			// //viewActivityInformation( activityType , obj ,key );
			// viewEnrollInformation( activityType , obj ,key );
			// RssApi.View.List("activities").setLoading(true).condition(new RssDict().keyvalue({
		  //   RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue({
				// "id": key
				///"userid": RssUser.Data.myid
			// }).getDict()).getJson(function(json) {				
			// 	$("#activityHD").mapview(json, {
			// 		"shijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd hh:mm");
			// 		},
			// 		"endshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"beginshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"finishshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"classify": function(val) {
			// 			return dictdata["activitiestypeclassify"][val];
			// 		},
			// 		"myid": async function(val) {												
			// 			realname = await showRealName(val);
			// 			// console.log('realname1 is:', realname)
			// 			$("#myid1").html("提出者：" + realname)
						
			// 		},
					
			// 	})
			// 	$("#activityHD .divp").html(json[0].note)
			// 	$("#activityHD .hisbackaa").click(function() {
			// 		location.href = "#applyHD";
			// 	});
				
				
			// })
			
			
			
		})
		//报名
		$("#applyHD .ans").off("click").click(function() {
			// var id = $(this).parent().attr("id");
			var key = $(this).parent().attr("id");
			// console.log("_____objid=",RssUser.Data.myid)
			RssApi.Table.Details("activities_userlist").setLoading(false).condition(new RssDict()
				.keyvalue({
					"activitiesid": key,
					"userid": RssUser.Data.myid
				}).getDict()).getJson(function(json) {
				if (json.jointype == "2") {
					alert("已报名");
				} else {
					//console.log("___ key ",key)
					
					var id = $(this).parent().attr("id"); 
									
					RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue({
						"id": key
						///"userid": RssUser.Data.myid
					}).getDict()).getJson(function(json) {				
						console.log("____",json)
						//把activity的记录拷贝到activities_userlist
						var activitiesid = json[0].id;
						console.log("____activitiesid=",activitiesid)
						RssApi.Edit("activities_userlist").setLoading(true).keyvalue({
							"activitiesid": activitiesid,
							"jointype": 2,
							"attendancetype": 1,
							"shijian": json[0].shijian,
							"myid": json[0].myid ,
							"userid": RssUser.Data.myid							
						
						}).getJson(function(jsonnn) {
							//console.log(" _______ ",jsonnn)
							alert("报名成功");
							
						})
						
					})	
									
					//报名成功以后，把userid写入到notify_messages_list		
					// console.log(" _________ key ")
					// RssApi.Table.List("notify_messages").setLoading(true).condition(new RssDict().keyvalue({
					// 	"id": key
					// 	///"userid": RssUser.Data.myid
					// }).getDict()).getJson(function(json) {				
					// 	// console.log("____",json)
					// 	var activitiesid = json[0].id;
					// 	console.log("____activitiesid=",activitiesid)
					// 	RssApi.Edit("activities_userlist").setLoading(true).keyvalue({
					// 		"activitiesid": activitiesid,
					// 		"jointype": 2,
					// 		"attendancetype": 1,
					// 		"shijian": json[0].shijian,
					// 		"myid": json[0].myid ,
					// 		"userid": RssUser.Data.myid							
						
					// 	}).getJson(function(jsonnn) {
					// 		console.log(" _______ ",jsonnn)
					// 		//alert("报名成功");
					// 	})
						
					// })	
				    //结束
									
					
				}

			})
		})
		
		
		$("#applyHD .hisbackaa").click(function() {
			location.href = "#suggest";
		});
		//办复信息
	}).getJson();
})
//活动进行中
$("#marchHD").load(function() {
	if (arry.indexOf("marchHD") == "-1") {
		$("#marchHD ul li").eq(0).siblings().remove();
		arry.push("marchHD")
	} else {
		$("#marchHD ul li").remove();
	}
	
	console.log("_____________ marchHD load")

	var time = (new Date()).getTime() / 1000;
	faqsajax = RssApi.View.List("activities").setLoading(true).condition(new RssDict().keyvalue({
	// faqsajax = RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue({
		// "userid": RssUser.Data.myid,
		"state": 1
	}).getDict()).setFlushUI(function(json, append) {
		
		// $("#marchHD ul").mapview(json, {}, append)
		var json_data = [];
		
		//获取已经报名人数
		$.each(json, function(k, v) {
			var myid = RssUser.Data.myid ;
			var userid = v.userid + "";
			// if ( RssUser.Data.myid.indexOf( v.myid ) == -1 || RssUser.Data.myid.indexOf( v.userid ) == -1 ) {
			if ( userid.indexOf( myid ) != -1 ||  isXuangongweiAccount() == 1 ) {	
				if ( isongoing( v ) == 1 ) {
					$('#activityHD article .no1').remove();
					json_data.push(v);
					var department = v.department ;
					if ("undefined".indexOf( department ) != -1 ) {
						department = "未知";
					}
					
					var enrollState = "已报名"
					var state_attendance = "未考勤";
					if ( v.attendancetype == 2 ) {
						state_attendance = "已考勤";
					}
					enrollState = "已报名" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "考勤状态: " + state_attendance;
					
					
					if ( v.jointype == 1 ){
						state_attendance = "未考勤";
						enrollState = "未报名" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "考勤状态: " + state_attendance;
						
					}
					
					
					var mdata = '<li><div class="liico"><span>' + v.id +
						'</span></div><h1>' + v.title +
						// '</h1><p>报名状态：' + enrollState + '</p><p>考勤状态：' + state_attendance +
						'</h1><p>报名状态：' + enrollState +
						'</p><div class="lifoot" id=' + v.id +
						'><a href="#activityHD" class="see" onclick="seeActivityInfo('+v.id+');"><span>查看详情</span></a>' +
						'<a class="ans" id="btn_attendance" onclick="attendActivity('+v.id+');"><span>进行考勤</span></a>' + 
						'</div></li>';
					if ( RssUser.Data.myid.indexOf( v.myid ) != -1 ||   v.attendancetype  == 2 || v.jointype == 1 ) { //如果是发起者，那么没有参与考勤按钮
					    mdata = '<li><div class="liico"><span>' + v.id +
						'</span></div><h1>' + v.title +
						// '</h1><p>报名状态：' + enrollState + '</p><p>考勤状态：' + state_attendance +
						'</h1><p>报名状态：' + enrollState +
						'</p><div class="lifoot" id=' + v.id +
						'><a href="#activityHD" class="see" onclick="seeActivityInfo('+v.id+');"><span>查看详情</span></a></div></li>';	
					}
					$("#marchHD ul").append( mdata );
				}
			}
		})
		if (json_data.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json_data.length == 0  ) {
			$('.noActivities').show();
		} else {
			$('.noActivities').hide();
		}
		// $("#marchHD ul").mapview(json_data, {}, append)

		$("#marchHD .del").show();
		//查看
		$("#marchHD .see").off("click").click(function() {
			var key = $(this).parent().attr("id");
			console.log(key)
			var obj = "activityHD";
			var activityType = 1 ;			
			viewActivityInformation( activityType , obj ,key );
			
			// RssApi.View.List("activities").setLoading(true).condition(new RssDict().keyvalue({
			// 	"id": key,
			// 	"userid": RssUser.Data.myid
			// }).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	$("#activityHD").mapview(json, {
			// 		"shijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd hh:mm");
			// 		},
			// 		"endshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"beginshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"finishshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"classify": function(val) {
			// 			return dictdata["activitiestypeclassify"][val];
			// 		},
			// 	})
			// 	// $("#activityHD .divp").html(json[0].note)
				$("#activityHD .hisbackaa").click(function() {
					location.href = "#marchHD";
				});
			// })
		})
		$("#marchHD .hisbackaa").click(function() {
			location.href = "#suggest";
		});
		//考勤参与
		// $("#marchHD .ans").off("click").click(function() {
		// 	var key1 = $(this).parent().attr("id");
		// 	var key = $(this).parent().attr("activitiesid");
		// 	RssApi.Table.Details("activities_userlist").setLoading(true).condition(new RssDict()
		// 		.keyvalue({
		// 			"activitiesid": key,
		// 			"id": key1,
		// 			"userid": RssUser.Data.myid,
		// 		}).getDict()).getJson(function(json) {
		// 		console.log(json)
		// 		if (json.attendancetype == "1") {
		// 			RssApi.Edit("activities_userlist").keyvalue({
		// 				"id": key1,
		// 				"myid": json.myid,
		// 				"attendancetype": "2",
		// 				"userid": RssUser.Data.myid
		// 			}).getJson(function(json) {
		// 				alert("考勤成功");
		// 			})
		// 		} else {
		// 			alert("已经考勤过了");
		// 		}
		// 	})
		// })
		//办复信息
	}).getJson();
})

////活动成果总结
//$("#resultsHD").load(function () {
//    if (arry.indexOf("resultsHD") == "-1") {
//        $("#resultsHD ul li").eq(0).siblings().remove();
//        arry.push("resultsHD")
//    } else {
//        $("#resultsHD ul li").remove();
//    }
//    faqsajax = RssApi.View.List("activities").setLoading(true).condition(new RssDict().keyvalue({
//        "myid": RssUser.Data.myid
//    }).getDict()).setFlushUI(function (json, append) {
//        if (json.length != "10") {
//            $('.nodata').hide();
//        } else {
//            $('.nodata').show();
//        }
//        $("#resultsHD ul").mapview(json, {
//            "shijian": function (val) {
//                        return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd hh:mm");
//                    }
//        },append)
////        $("#resultsHD .del").show();
//        //查看
////        $("#resultsHD .see").off("click").click(function () {
////            var key = $(this).parent().attr("id");
////            RssApi.View.List("activities").setLoading(true).condition(new RssDict().keyvalue({
////                "id": key
////            }).getDict()).getJson(function (json) {
////                $("#activityHD article").mapview(json, {
////                    "shijian": function (val) {
////                        return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd hh:mm");
////                    }
////                })
////                $("#activityHD .divp").html(json[0].note)
////            })
////        })
//        //办复信息
//    }).getJson();
//})

//活动成果总结
$("#resultsHD1").load(function() {
	if (arry.indexOf("resultsHD") == "-1") {
		$("#resultsHD ul li").eq(0).siblings().remove();
		arry.push("resultsHD")
	} else {
		$("#resultsHD ul li").remove();
	}
	
	
	var k1 = {
		"userid": RssUser.Data.myid,	
	}
	
	faqsajax = RssApi.View.List("activities").setLoading(true).condition(new RssDict().keyvalue(
	k1
	// {
	// 	"userid": RssUser.Data.myid,
	// 	// "myid": RssUser.Data.myid,

	// }
	).getDict()).setFlushUI(function(json, append) {
		console.log("___________ json=",json);
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0  ) {
			$('.nosolutions').show();
		} else {
			$('.nosolutions').hide();
		}
		
		var json2 = [];
		$.each(json, function(k, v) {
			var data = v ;
			var department = "组织部门: " + v.department;
			if ( v.enroll == 3 ) {
				department = "组织者: " + v.realname;
			}
			data.department = department;
			json2.push(data);
		})
		
		
		////console.log(json);
		$("#resultsHD ul").mapview(json2, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		// $("#resultsHD ul li").click(function() {
		// 	var key = $(this).find("[rssid]").attr("rssid");
		// 	var obj = "resultsHDck";
		// 	var activityType = 1 ;			
		// 	viewActivityInformation( activityType , obj ,key );
			
			// location.href = "#resultsHDck"
			// $("#resultsHDck").find("header>h1").text();
			// RssApi.Details("activities").setLoading(true).condition(new RssDict().keyvalue({
			// 	"id": key
			// }).getDict()).getJson(function(json) {
			// 	$("#resultsHDck article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"endshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"beginshijian": function(val) {
			// 			return new Date(parseInt(val) * 1000).toString(
			// 				"yyyy-MM-dd");
			// 		},
			// 		"classify": function(val) {
			// 			return dictdata["activitiestypeclassify"][val];
			// 		},
			// 	})
			// })
		// })

		//查看内容
		$("#resultsHD .see").off("click").click(function() {
			var key = $(this).parent().attr("id")
			var obj = "activitysHD";
			var activityType = 1 ;			
			viewActivityInformation( activityType , obj ,key );
		});

		//考勤情况
		$("#resultsHD .ans").off("click").click(function() {
			var key = $(this).parent().attr("id")
			$("#activityId").val(key);
		});

	}).getJson();

	
})


//活动管理
function fillMangerData( obj ) {
	var append_obj = "#"+ obj+" ul";
	var remove_obj = '#' + obj +' article .no1';
	$.each(json, function(k, v) {
		var myid = RssUser.Data.myid ;
		var userid = v.userid + "";
		// if ( RssUser.Data.myid.indexOf( v.myid ) == -1 || RssUser.Data.myid.indexOf( v.userid ) == -1 ) {
		// if ( userid.indexOf( myid ) != -1 ||  isXuangongweiAccount() == 1 ) {	
			// if ( isongoing( v ) == 1 ) {
				$(remove_obj).remove();
				json_data.push(v);
				var department = v.department ;
				if ("undefined".indexOf( department ) != -1 ) {
					department = "未知";
				}
				
				var enrollState = "已报名"
				var state_attendance = "未考勤";
				if ( v.attendancetype == 2 ) {
					state_attendance = "已考勤";
				}
				enrollState = "已报名" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "考勤状态: " + state_attendance;
				
				
				if ( v.jointype == 1 ){
					state_attendance = "未考勤";
					enrollState = "未报名" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "考勤状态: " + state_attendance;
					
				}
				
				
				var mdata = '<li><div class="liico"><span>' + v.id +
					'</span></div><h1>' + v.title +
					// '</h1><p>报名状态：' + enrollState + '</p><p>考勤状态：' + state_attendance +
					'</h1><p>报名状态：' + enrollState +
					'</p><div class="lifoot" id=' + v.id +
					'><a href="#activitysHD" class="see" onclick="activiyManagerViewContent('+v.id+');"><span>查看详情</span></a>' +
				//	'<a class="ans" id="btn_attendance" onclick="activiyManagerViewEnroll('+v.id+');"><span>查看考勤</span></a>' + 
					'</div></li>';
				if ( RssUser.Data.myid.indexOf( v.myid ) != -1 ||   v.attendancetype  == 2 || v.jointype == 1 ) { //如果是发起者，那么没有参与考勤按钮
					mdata = '<li><div class="liico"><span>' + v.id +
					'</span></div><h1>' + v.title +
					// '</h1><p>报名状态：' + enrollState + '</p><p>考勤状态：' + state_attendance +
					'</h1><p>报名状态：' + enrollState +
					'</p><div class="lifoot" id=' + v.id +
					'><a href="#activitysHD" class="see" onclick="activiyManagerViewContent('+v.id+');"><span>查看详情</span></a></div></li>';	
				}
				$(append_obj).append( mdata );
			// }
		// }
	})
}
function activiyManagerViewContent( key ){
	var obj = "activitysHD";
	var activityType = 1 ;			
	viewActivityInformation( activityType , obj ,key );	
}
function activiyManagerViewEnroll( key ){
	var obj = "attendanceManager";
	var activityType = 1 ;			
	// viewActivityInformation( activityType , obj ,key );	
	
	if (arry.indexOf( obj ) == "-1") {
		$("#attendanceManager ul li").eq(0).siblings().remove();
		arry.push("attendanceManager")
	} else {
		$("#attendanceManager ul li").remove();
	}
	var k1 = {
		"userid": RssUser.Data.myid,	
		"activitiesid": key
	}
	faqsajax = RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue(
		k1
	).getDict()).setFlushUI(function(json, append) {
		
		var json_data = [];
		fillMangerData("attendanceManager");
	})
	location.href = "#seeAttendance";
	
}
$("#resultsHD").load(function() {
	if (arry.indexOf("resultsHD") == "-1") {
		$("#resultsHD ul li").eq(0).siblings().remove();
		arry.push("resultsHD")
	} else {
		$("#resultsHD ul li").remove();
	}

    var state_layou = '</h1><p>报名状态：' ;
	var k1 = {
		"userid": RssUser.Data.myid,	
	}
	if ( isXuangongweiAccount() == 1 ) {
		k1 = {
			"state": 1,	
		}
		state_layou = '</h1><p>活动状态：' ;
	}

	
	faqsajax = RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue(
		k1
	).getDict()).setFlushUI(function(json, append) {
		
		var json_data = [];
		//获取已经报名人数
		$.each(json, function(k, v) {
			var myid = RssUser.Data.myid ;
			var userid = v.userid + "";
			// if ( RssUser.Data.myid.indexOf( v.myid ) == -1 || RssUser.Data.myid.indexOf( v.userid ) == -1 ) {
			// if ( userid.indexOf( myid ) != -1 ||  isXuangongweiAccount() == 1 ) {	
				// if ( isongoing( v ) == 1 ) {
					$('#resultsHD article .no1').remove();
					json_data.push(v);
					var department = v.department ;
					if ("undefined".indexOf( department ) != -1 ) {
						department = "未知";
					}
					
					var enrollState = "已报名"
					var state_attendance = "未考勤";
					if ( v.attendancetype == 2 ) {
						state_attendance = "已考勤";
					}
					enrollState = "已报名" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "考勤状态: " + state_attendance;
					
					
					if ( v.jointype == 1 ){
						state_attendance = "未考勤";
						enrollState = "未报名" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "考勤状态: " + state_attendance;
						
					}
					
					if ( isXuangongweiAccount() == 1 ) {
						var result = isongoing ( v );
						if ( result === 0 ) {
							enrollState = "未开始";
						}
						else if ( result == 1 ){
							enrollState = "进行中";
						}
						else {
							enrollState = "已结束";
						}
					}
					
					var mdata = '<li><div class="liico"><span>' + v.id +
						'</span></div><h1>' + v.title +
						// '</h1><p>报名状态：' + enrollState + '</p><p>考勤状态：' + state_attendance +
						// '</h1><p>报名状态：' + enrollState +
						state_layou + enrollState + 
						'</p><div class="lifoot" id=' + v.id +
						'><a href="#activitysHD" class="see" onclick="activiyManagerViewContent('+v.id+');"><span>查看详情</span></a>' +
					//	'<a class="ans" id="btn_attendance" onclick="activiyManagerViewEnroll('+v.id+');"><span>查看考勤</span></a>' + 
						'</div></li>';
					// if ( RssUser.Data.myid.indexOf( v.myid ) != -1 ||   v.attendancetype  == 2 || v.jointype == 1 ) { //如果是发起者，那么没有参与考勤按钮
					//     mdata = '<li><div class="liico"><span>' + v.id +
					// 	'</span></div><h1>' + v.title +
					// 	// '</h1><p>报名状态：' + enrollState + '</p><p>考勤状态：' + state_attendance +
					// 	// '</h1><p>报名状态：' + enrollState +
					// 	state_layou + enrollState + 
					// 	'</p><div class="lifoot" id=' + v.id +
					// 	'><a href="#activitysHD" class="see" onclick="activiyManagerViewContent('+v.id+');"><span>查看详情</span></a></div></li>';	
					// }
					$("#resultsHD ul").append( mdata );
				// }
			// }
		})
		if (json_data.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json_data.length == 0  ) {
			$('.noActivities').show();
		} else {
			$('.noActivities').hide();
		}

		$("#resultsHD .del").show();
		//查看
		$("#resultsHD .see").off("click").click(function() {
			var key = $(this).parent().attr("id");
			console.log(key)
			var obj = "activityHD";
			var activityType = 1 ;			
			viewActivityInformation( activityType , obj ,key );
				$("#activityHD .hisbackaa").click(function() {
					location.href = "#marchHD";
				});
		})
		$("#resultsHD .hisbackaa").click(function() {
			location.href = "#suggest";
		});
	}).getJson();
})


//活动管理查看考勤
$("#seeAttendance").load(function() {
	if (arry.indexOf("seeAttendance") == "-1") {
		$("#seeAttendance ul li").eq(0).siblings().remove();
		arry.push("seeAttendance")
	} else {
		$("#seeAttendance ul li").remove();
	}
	faqsajax = RssApi.Table.List("judicsup").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0 ) {
			$('.noDataimg').show();
		} else {
			$('.noDataimg').hide();
		}
		
		var json2 = [];
		$.each(json, function(k, v) {
			var initiator = "提出者: " + v.initiator ;
			// v.perchar = perchar ;
			// if ( ismysolution ( v ) ) {
			json2.push( v );
			// }
		})
		
		$.each(json2, async function(k, v) {
			filljusticsdata ( v , "seeAttendance" );				 
		})
		
	}).getJson();
})


//活动考勤总结
$("#attendanceManager").load(function() {
	if (arry.indexOf("attendanceManager") == "-1") {
		$("#attendanceManager ul li").eq(0).siblings().remove();
		arry.push("attendanceManager")
	} else {
		$("#attendanceManager ul li").remove();
	}

	var activityid = $("#activityId").val();
	console.log('activityId is:', activityid);


	faqsajax = RssApi.Table.List("activities_userlist").setLoading(true).condition(new RssDict().keyvalue({
		"activitiesid": activityid,
		// "userid": RssUser.Data.myid,
		
	}).getDict()).setFlushUI(function(json, append) {
		console.log("___________ json=",json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		var json2 = [];
		var cnt = 0 ;
		var enrollname = (json[0].enrollname).split(",");
		$.each(json, function(k, v) {
			var data = v ;
			data.enrollname = enrollname[cnt];
			cnt ++;
			if ( v.attendancetype == 2 ) {
				data.attendancetype = "已考勤";
			}
			else {
				data.attendancetype = "未考勤";
			}
			json2.push(data);
		})
		////console.log(json);
		$("#attendanceManager ul").mapview(json2, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		
		if ( isXuangongweiAccount() == 1 ){
			$("#attendanceManager_see").show();
		}
		else {
			$("#attendanceManager_see").hide();
		}


		//查看内容
		$("#attendanceManager .see").off("click").click(function() {
			var key = $(this).parent().attr("id")
			var obj = "activitysHD";
			var activityType = 1 ;			
			viewActivityInformation( activityType , obj ,key );
		});

	}).getJson();

	
})



//办理评价
$("#suggesthandle").load(function() {
	if (arry.indexOf("suggesthandle") == "-1") {
		$("#suggesthandle ul li").eq(0).siblings().remove();
		arry.push("suggesthandle")
	} else {
		$("#suggesthandle ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"draft": "2",
		"lwstate": "1",
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		var draft, examination, deal, resume;
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
		$("#suggesthandle ul").mapview(json, {
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
			"resume": function(val) {
				resume = val;
				if (draft == "1") {
					return "草稿"
				} else if (deal == "1" && resume == "1") {
					return "已答复";
				} else if (deal == "1" && resume == "0") {
					return "已交办";
				} else if (examination == "2" && deal == "0" && draft == "2") {
					return "已审查";
				} else if (isxzsc == "1" && draft == "2") {
					return "已答复";
				} else if (iscs == "1" && draft == "2") {
					return "初审查";
				} else if (examination == "1" && draft == "2") {
					return "已提交";
				} else if (examination == "3") {
					return "已置回";
				}
			}
		}, append)
		//查看
		$("#suggesthandle ul>li").off("click").click(function() {
			var key = $(this).find("h1").attr("sortid");
			RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
				"sortid": key
			}).getDict()).getJson(function(json) {
				var draft, examination, deal, resume
				
				var reject = 0 ;
				lwstate =  1 ;
				var obj = "handlesuggestinfo" ;
				viewSuggestDetail(obj, reject , lwstate ,key );
				
				// $("#handlesuggestinfo article").mapview(json, {
				// 	"shijian": function(val) {
				// 		return new Date(parseInt(val) * 1000).toString(
				// 			"yyyy-MM-dd hh:mm");
				// 	},
				// 	"draft": function(val) {
				// 		draft = val;
				// 	},
				// 	"examination": function(val) {
				// 		examination = val;
				// 	},
				// 	"deal": function(val) {
				// 		deal = val;
				// 	},
				// 	"iscs": function(val) {
				// 		iscs = val;
				// 	},
				// 	"isxzsc": function(val) {
				// 		isxzsc = val;
				// 	},
				// 	"resume": function(val) {
				// 		resume = val;
				// 		if (draft == "1") {
				// 			return "草稿"
				// 		} else if (deal == "1" && resume == "1") {
				// 			return "已答复";
				// 		} else if (deal == "1" && resume == "0") {
				// 			return "已交办";
				// 		} else if (examination == "2" && deal == "0" &&
				// 			draft == "2") {
				// 			return "已审查";
				// 		} else if (isxzsc == "1" && draft == "2") {
				// 			return "已答复";
				// 		} else if (iscs == "1" && draft == "2") {
				// 			return "初审查";
				// 		} else if (examination == "1" && draft == "2") {
				// 			return "已提交";
				// 		} else if (examination == "3") {
				// 			return "已置回";
				// 		}
				// 	},

				// })
				$("#wuliuck").off("click").click(function() {
					location.href = "#processState";
					var sid = $(this).attr("rssid")
					RssApi.Details("suggest").condition(new RssDict().keyvalue({
						"id": sid
					}).getDict()).getJson(function(lcjson) {
						$("#processState article>ul").remove();
						var lcstate = "1";
						num[0] = lcstate;
						if (lcjson.examination == "5" && lcjson
							.isxzsc == "1" && lcjson.draft == "2") {
							lcstate = "6"
							////console.log(lcjson.examination)
						} else if (lcjson.examination == "3") {
							lcstate = "7"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "1") {
							lcstate = "5"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "0") {
							lcstate = "4"
						} else if (lcjson.examination == "2" && lcjson
							.deal == "0" && lcjson.draft == "2") {
							lcstate = "3"
						} else if (lcjson.iscs == "1" && lcjson.draft ==
							"2") {
							lcstate = "2"
						}
						////console.log(lcstate);
						if (lcstate == "6") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.xzReviewTime) * 1000)
								.toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.xzReviewTime) * 1000).toString(
									"hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>乡镇政府办审查人：' +
								lcjson.xzname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson
										.InitialReviewTime) *
									1000).toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.InitialReviewTime) * 1000)
								.toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
								lcjson.scname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else if (lcstate == "7") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.zhTime) * 1000).toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>置回</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.zhTime) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>置回人：' +
								lcjson.zhName +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else {
							for (var i = 1; i <= lcstate; i++) {
								switch (i) {
									case 1:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>提交人：' +
												lcjson.realname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 2:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.InitialReviewTime
													) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.InitialReviewTime
												) * 1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
												lcjson.scname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
										//                                    case 3:
										//                                        $("#processState article").prepend('<ul><li>' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("yyyy-MM-dd") + '</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>审查</b><img src="img/limg/sz.png"/><a class="time">' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("hh:mm") + '</a></div><img src="img/limg/name.png" /><a>审查人：' + lcjson.xzname + '</a></li><li class="processFoter"></li></ul>')
										//                                        break;
									case 3:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>复审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办审查人：' +
												lcjson.fsrname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 4:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>政府办</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString("hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办交办人：' +
												lcjson.zfbname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 5:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>答复单位：' +
												lcjson.realcompanyname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 6:
										break;
									case 7:
										break;
								}
							}
						}
					})
				});

				//评论条数
				RssApi.Table.List("suggest_praise").condition(new RssDict().keyvalue({
					"relationid": json[0].id,
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(date) {
					if (date.length > 0) {
						$("#tbdz").addClass('dj');
					} else {
						$("#tbdz").removeClass('dj')
					}

					RssApi.Details("s_praise_num").condition(new RssDict()
						.keyvalue({
							"relationid": json[0].id,
							"type": "1"
						}).getDict()).getJson(function(num) {
						var znum = "0";
						if (num) {
							znum = num.relnum
						}
						$("#handlesuggestinfo .ckfont").eq(0).text(
							znum);
						RssApi.Details("suggest_comment_num").condition(
							new RssDict().keyvalue({
								"suggestid": json[0].id
							}).getDict()).getJson(function(sunum) {
							var snum = "0";
							if (sunum) {
								snum = sunum.sugnum
							}
							$("#handlesuggestinfo .ckfont").eq(
								1).text(snum);
							RssApi.View.List("suggest_comment")
								.keyvalue("pagesize", "100")
								.condition(new RssDict()
									.keyvalue({
										"suggestid": json[0]
											.id
									}).getDict()).getJson(
									function(comment) {
										$("#handlesuggestinfo article>ul")
											.empty();
										if (comment.length ==
											"0") {
											$("#handlesuggestinfo article>ul")
												.before(
													'<div id="wpj">无评价</div>'
												)
										}
										$.each(comment,
											function(k, v) {
												if (v
													.myid ==
													RssUser
													.Data
													.myid) {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'<img src="img/limg/exit.png" /></li>'
														)
												} else {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												}

											})
										sc();

									})
						})
					})
				})

				//点赞
				$("#tbdz").off("click").click(function() {
					var t = $(this);
					var zn = $("#handlesuggestinfo .ckfont").eq(0);
					var text_box = $("#add-num");
					if (t.hasClass('dj')) {
						RssApi.Delete("suggest_praise").condition(new RssDict()
							.keyvalue({
								'id': t.attr("dzid")
							}).keymyid().getDict()).getJson(function(json) {
							t.removeClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl - 1);
						});
						text_box.show().html(
							"<em class='add-animation'>-1</em>");
						$(".add-animation").removeClass("hover");
					} else {
						RssApi.Edit("suggest_praise").keymyid().keyvalue(
							'relationid', t.attr("rssid")).getJson(function(
							json) {
							t.addClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl + 1);
						});
						text_box.show().html(
							"<em class='add-animation'>+1</em>");
						$(".add-animation").addClass("hover");
					}
				})

				//发送评论
				$("#evaluate").off("click").click(function() {
					var tid = $("#tbdz").attr("rssid")
					var pjtext = "<p>" + $("#pjtext").text() + "</p>"
					//                  var text_box = $("#add-num");
					if ($("#pjtext").text() != "") {
						RssApi.Edit("suggest_comment").keymyid().keyvalue({
							'suggestid': tid,
							'matter': pjtext
						}).getJson(function(json) {
							if (json.id > 0) {
								$("#handlesuggestinfo article>ul")
									.append('<li PJid="' + json.id +
										'"><span>' + RssUser.Data
										.realname +
										'：</span>' + pjtext +
										'<img src="img/limg/exit.png" /></li>'
									)
								$("#pjtext").text("")
								$("#handlesuggestinfo article")
									.scrollTop($(
										"#handlesuggestinfo article"
									).height());
								var zn = $("#handlesuggestinfo .ckfont")
									.eq(1);
								var sl = parseInt(zn.text())
								zn.text(sl + 1);
								$("#wpj").remove();
								sc();
								//                          text_box.show().html("<em class='add-animationa'>+1</em>");
								//                      	$(".add-animationa").addClass("hover");
							}
						});
					} else {
						alert("评论不能为空！");
					}
				})
				$("#handlesuggestinfo .divp").html(json[0].matter)
				location.href = "#handlesuggestinfo";
			})
		});

		//删除
		function sc() {

			$("#handlesuggestinfo ul>li>img").off("click").click(function() {
				var PJid = $(this).parent().attr("PJid");
				//              	alert(PJid);
				if (confirm("确认删除?")) {
					//              			RssApi.Delete("suggest_praise").condition(new RssDict().keyvalue({'id': t.attr("dzid")}).keymyid().getDict()).getJson(function (json) {
					RssApi.Delete("suggest_comment").condition(new RssDict().keyvalue({
						"id": PJid
					}).getDict()).getJson(function(json) {
						//              				alert("删除成功！");
						$("#handlesuggestinfo ul>li[PJid='" + PJid + "']").remove();
						var zn = $("#handlesuggestinfo .ckfont").eq(1);
						var sl = parseInt(zn.text())
						zn.text(sl - 1);
						$("#wpj").remove();
					});

				}
				//alert("删除");
			});
		}

		//查看
		$("#suggesthandle .ans").off("click").click(function() {
			var key = $(this).parent().attr("sortid");
			RssApi.Details("suggest_opinion").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				var star = ["business", "initiative", "communication", "counter",
					"consensus"
				]
				var checkbox = ["reply", "handle", "issue", "deal"]
				$("#handleevaluate article").mapview(json, {
					"seconded": function(val) {
						var seconded = dictdata.seconded[val]
						return seconded;
					},
					"permission": function(val) {
						var permission = dictdata.permission[val]
						return permission;
					},
					"suhandle": function(val) {
						var handle = dictdata.handle[val]
						return handle;
					}
				})
				$("[effect]").attr("relationid", json.effect);
				$("[effect]").text(dictdata.effect[json.effect])
				$.each(star, function(k, v) {
					var t = json[v];
					if (json[v]) {
						pingji(json[v], v)
					} else {
						$("[name ='" + v + "']").find("a").removeClass("sel");
					}
				})
				$("input[type='checkbox']").prop("checked", false);
				$.each(checkbox, function(k, v) {
					if (json[v] == "1") {
						$("input[name ='" + v + "']").prop("checked", true);
					}
				})
				$("[effect]").off("click").click(function() {
					zzc($(this), dictdata["effect"]);
				})
				$("#handleevaluate .normalbutton").off("click").click(function() {
					var k1 = {},
						k2 = {},
						k3 = "";
					$.each(star, function(k, v) {
						k1[v] = $("em[name='" + v + "']").find(".sel")
							.length;
					})
					$.each(checkbox, function(k, v) {
						if ($("input[name='" + v + "']").is(
								":checked")) {
							k2[v] = "1";
						} else {
							k2[v] = "2";
						}
					})
					k3 = $("[effect]").attr("relationid");
					RssApi.Delete("opinion").condition(new RssDict().keyvalue({
						"proposal": key
					}).keyvalue().getDict()).getJson(function(json) {
						RssApi.Edit("opinion").setLoading(true)
							.keyvalue(k1).keyvalue(k2).keyvalue({
								"myid": RssUser.Data.myid,
								"proposal": key,
								"effect": k3
							}).getJson(function(json) {
								alert("评价提交成功");
							})
					})
				})
			})
		})
	}).getJson();
})

//联名办理评价建议
$("#lmsuggesthandle").load(function() {
	if (arry.indexOf("lmsuggesthandle") == "-1") {
		$("#lmsuggesthandle ul li").eq(0).siblings().remove();
		arry.push("lmsuggesthandle")
	} else {
		$("#lmsuggesthandle ul li").remove();
	}
	faqsajax = RssApi.View.List("sortuser").setLoading(true).condition(new RssDict().keyvalue({
		"draft": "2",
		"lwstate": "1",
		"userid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		var draft, examination, deal, resume;
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
		
		$("#lmsuggesthandle ul").mapview(json, {
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
			"resume": function(val) {
				resume = val;
				if (draft == "1") {
					return "草稿"
				} else if (deal == "1" && resume == "1") {
					return "已答复";
				} else if (deal == "1" && resume == "0") {
					return "已交办";
				} else if (examination == "2" && deal == "0" && draft == "2") {
					return "已审查";
				} else if (isxzsc == "1" && draft == "2") {
					return "已答复";
				} else if (iscs == "1" && draft == "2") {
					return "初审查";
				} else if (examination == "1" && draft == "2") {
					return "已提交";
				} else if (examination == "3") {
					return "已置回";
				}
			}
		}, append)
		//查看
		$("#lmsuggesthandle ul>li").off("click").click(function() {
			var key = $(this).find("h1").attr("sortid");
			RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
				"sortid": key
			}).getDict()).getJson(function(json) {
				var draft, examination, deal, resume
				$("#handlesuggestinfo article").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd hh:mm");
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
					"resume": function(val) {
						resume = val;
						if (draft == "1") {
							return "草稿"
						} else if (deal == "1" && resume == "1") {
							return "已答复";
						} else if (deal == "1" && resume == "0") {
							return "已交办";
						} else if (examination == "2" && deal == "0" &&
							draft == "2") {
							return "已审查";
						} else if (isxzsc == "1" && draft == "2") {
							return "已答复";
						} else if (iscs == "1" && draft == "2") {
							return "初审查";
						} else if (examination == "1" && draft == "2") {
							return "已提交";
						} else if (examination == "3") {
							return "已置回";
						}
					},

				})
				$("#wuliuck").off("click").click(function() {
					location.href = "#processState";
					var sid = $(this).attr("rssid")
					RssApi.Details("suggest").condition(new RssDict().keyvalue({
						"id": sid
					}).getDict()).getJson(function(lcjson) {
						$("#processState article>ul").remove();
						var lcstate = "1";
						num[0] = lcstate;
						if (lcjson.examination == "5" && lcjson
							.isxzsc == "1" && lcjson.draft == "2") {
							lcstate = "6"
							////console.log(lcjson.examination)
						} else if (lcjson.examination == "3") {
							lcstate = "7"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "1") {
							lcstate = "5"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "0") {
							lcstate = "4"
						} else if (lcjson.examination == "2" && lcjson
							.deal == "0" && lcjson.draft == "2") {
							lcstate = "3"
						} else if (lcjson.iscs == "1" && lcjson.draft ==
							"2") {
							lcstate = "2"
						}
						////console.log(lcstate);
						if (lcstate == "6") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.xzReviewTime) * 1000)
								.toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.xzReviewTime) * 1000).toString(
									"hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>乡镇政府办审查人：' +
								lcjson.xzname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson
										.InitialReviewTime) *
									1000).toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.InitialReviewTime) * 1000)
								.toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
								lcjson.scname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else if (lcstate == "7") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.zhTime) * 1000).toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>置回</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.zhTime) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>置回人：' +
								lcjson.zhName +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else {
							for (var i = 1; i <= lcstate; i++) {
								switch (i) {
									case 1:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>提交人：' +
												lcjson.realname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 2:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.InitialReviewTime
													) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.InitialReviewTime
												) * 1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
												lcjson.scname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
										//                                    case 3:
										//                                        $("#processState article").prepend('<ul><li>' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("yyyy-MM-dd") + '</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>审查</b><img src="img/limg/sz.png"/><a class="time">' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("hh:mm") + '</a></div><img src="img/limg/name.png" /><a>审查人：' + lcjson.xzname + '</a></li><li class="processFoter"></li></ul>')
										//                                        break;
									case 3:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>复审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办审查人：' +
												lcjson.fsrname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 4:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>政府办</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString("hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办交办人：' +
												lcjson.zfbname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 5:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>答复单位：' +
												lcjson.realcompanyname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 6:
										break;
									case 7:
										break;
								}
							}
						}
					})
				});

				//评论条数
				RssApi.Table.List("suggest_praise").condition(new RssDict().keyvalue({
					"relationid": json[0].id,
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(date) {
					if (date.length > 0) {
						$("#tbdz").addClass('dj');
					} else {
						$("#tbdz").removeClass('dj')
					}

					RssApi.Details("s_praise_num").condition(new RssDict()
						.keyvalue({
							"relationid": json[0].id,
							"type": "1"
						}).getDict()).getJson(function(num) {
						var znum = "0";
						if (num) {
							znum = num.relnum
						}
						$("#handlesuggestinfo .ckfont").eq(0).text(
							znum);
						RssApi.Details("suggest_comment_num").condition(
							new RssDict().keyvalue({
								"suggestid": json[0].id
							}).getDict()).getJson(function(sunum) {
							var snum = "0";
							if (sunum) {
								snum = sunum.sugnum
							}
							$("#handlesuggestinfo .ckfont").eq(
								1).text(snum);
							RssApi.View.List("suggest_comment")
								.keyvalue("pagesize", "100")
								.condition(new RssDict()
									.keyvalue({
										"suggestid": json[0]
											.id
									}).getDict()).getJson(
									function(comment) {
										$("#handlesuggestinfo article>ul")
											.empty();
										if (comment.length ==
											"0") {
											$("#handlesuggestinfo article>ul")
												.before(
													'<div id="wpj">无评价</div>'
												)
										}
										$.each(comment,
											function(k, v) {
												if (v
													.myid ==
													RssUser
													.Data
													.myid) {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'<img src="img/limg/exit.png" /></li>'
														)
												} else {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												}

											})
										sc();

									})
						})
					})
				})

				//点赞
				$("#tbdz").off("click").click(function() {
					var t = $(this);
					var zn = $("#handlesuggestinfo .ckfont").eq(0);
					var text_box = $("#add-num");
					if (t.hasClass('dj')) {
						RssApi.Delete("suggest_praise").condition(new RssDict()
							.keyvalue({
								'id': t.attr("dzid")
							}).keymyid().getDict()).getJson(function(json) {
							t.removeClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl - 1);
						});
						text_box.show().html(
							"<em class='add-animation'>-1</em>");
						$(".add-animation").removeClass("hover");
					} else {
						RssApi.Edit("suggest_praise").keymyid().keyvalue(
							'relationid', t.attr("rssid")).getJson(function(
							json) {
							t.addClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl + 1);
						});
						text_box.show().html(
							"<em class='add-animation'>+1</em>");
						$(".add-animation").addClass("hover");
					}
				})

				//发送评论
				$("#evaluate").off("click").click(function() {
					var tid = $("#tbdz").attr("rssid")
					var pjtext = "<p>" + $("#pjtext").text() + "</p>"
					//                  var text_box = $("#add-num");
					if ($("#pjtext").text() != "") {
						RssApi.Edit("suggest_comment").keymyid().keyvalue({
							'suggestid': tid,
							'matter': pjtext
						}).getJson(function(json) {
							if (json.id > 0) {
								$("#handlesuggestinfo article>ul")
									.append('<li PJid="' + json.id +
										'"><span>' + RssUser.Data
										.realname +
										'：</span>' + pjtext +
										'<img src="img/limg/exit.png" /></li>'
									)
								$("#pjtext").text("")
								$("#handlesuggestinfo article")
									.scrollTop($(
										"#handlesuggestinfo article"
									).height());
								var zn = $("#handlesuggestinfo .ckfont")
									.eq(1);
								var sl = parseInt(zn.text())
								zn.text(sl + 1);
								$("#wpj").remove();
								sc();
								//                          text_box.show().html("<em class='add-animationa'>+1</em>");
								//                      	$(".add-animationa").addClass("hover");
							}
						});
					} else {
						alert("评论不能为空！");
					}
				})
				$("#handlesuggestinfo .divp").html(json[0].matter)
				location.href = "#handlesuggestinfo";
			})
		});

		//删除
		function sc() {

			$("#handlesuggestinfo ul>li>img").off("click").click(function() {
				var PJid = $(this).parent().attr("PJid");
				//              	alert(PJid);
				if (confirm("确认删除?")) {
					//              			RssApi.Delete("suggest_praise").condition(new RssDict().keyvalue({'id': t.attr("dzid")}).keymyid().getDict()).getJson(function (json) {
					RssApi.Delete("suggest_comment").condition(new RssDict().keyvalue({
						"id": PJid
					}).getDict()).getJson(function(json) {
						//              				alert("删除成功！");
						$("#handlesuggestinfo ul>li[PJid='" + PJid + "']").remove();
						var zn = $("#handlesuggestinfo .ckfont").eq(1);
						var sl = parseInt(zn.text())
						zn.text(sl - 1);
						$("#wpj").remove();
					});

				}
				//alert("删除");
			});
		}

		//查看
		$("#lmsuggesthandle .ans").off("click").click(function() {
			var key = $(this).parent().attr("sortid");
			RssApi.Details("suggest_opinion").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				var star = ["business", "initiative", "communication", "counter",
					"consensus"
				]
				var checkbox = ["reply", "handle", "issue", "deal"]
				$("#handleevaluate article").mapview(json, {
					"seconded": function(val) {
						var seconded = dictdata.seconded[val]
						return seconded;
					},
					"permission": function(val) {
						var permission = dictdata.permission[val]
						return permission;
					},
					"suhandle": function(val) {
						var handle = dictdata.handle[val]
						return handle;
					}
				})
				$("[effect]").attr("relationid", json.effect);
				$("[effect]").text(dictdata.effect[json.effect])
				$.each(star, function(k, v) {
					var t = json[v];
					if (json[v]) {
						pingji(json[v], v)
					} else {
						$("[name ='" + v + "']").find("a").removeClass("sel");
					}
				})
				$("input[type='checkbox']").prop("checked", false);
				$.each(checkbox, function(k, v) {
					if (json[v] == "1") {
						$("input[name ='" + v + "']").prop("checked", true);
					}
				})
				$("[effect]").off("click").click(function() {
					zzc($(this), dictdata["effect"]);
				})
				$("#handleevaluate .normalbutton").off("click").click(function() {
					var k1 = {},
						k2 = {},
						k3 = "";
					$.each(star, function(k, v) {
						k1[v] = $("em[name='" + v + "']").find(".sel")
							.length;
					})
					$.each(checkbox, function(k, v) {
						if ($("input[name='" + v + "']").is(
								":checked")) {
							k2[v] = "1";
						} else {
							k2[v] = "2";
						}
					})
					k3 = $("[effect]").attr("relationid");
					RssApi.Delete("opinion").condition(new RssDict().keyvalue({
						"proposal": key
					}).keyvalue().getDict()).getJson(function(json) {
						RssApi.Edit("opinion").setLoading(true)
							.keyvalue(k1).keyvalue(k2).keyvalue({
								"myid": RssUser.Data.myid,
								"proposal": key,
								"effect": k3
							}).getJson(function(json) {
								alert("评价提交成功");
							})
					})
				})
			})
		})
	}).getJson();
})


//办理评价议案
$("#suggesthandleYA").load(function() {
	if (arry.indexOf("suggesthandleYA") == "-1") {
		$("#suggesthandleYA ul li").eq(0).siblings().remove();
		arry.push("suggesthandleYA")
	} else {
		$("#suggesthandleYA ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
		"lwstate": "2",
		"draft": "2",
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		var draft, examination, deal, resume;
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
		$("#suggesthandleYA ul").mapview(json, {
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
		//查看
		$("#suggesthandleYA ul>li").off("click").click(function() {
			var key = $(this).find("h1").attr("sortid");
			RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
				"sortid": key
			}).getDict()).getJson(function(json) {
				location.href = "#publicViewLayout";
				var lwstate = 2 ;
				publicviewAction( key , lwstate ) ;
				
				var draft, examination, deal, resume;
				// $("#handlesuggestinfo article").mapview(json, {
				// 	"shijian": function(val) {
				// 		return new Date(parseInt(val) * 1000).toString(
				// 			"yyyy-MM-dd hh:mm");
				// 	},
				// 	"draft": function(val) {
				// 		draft = val;
				// 	},
				// 	"examination": function(val) {
				// 		examination = val;
				// 	},
				// 	"deal": function(val) {
				// 		deal = val;
				// 	},
				// 	"iscs": function(val) {
				// 		iscs = val;
				// 	},
				// 	"isxzsc": function(val) {
				// 		isxzsc = val;
				// 	},
				// 	"resume": function(val) {
				// 		resume = val;
				// 		if (draft == "1") {
				// 			return "草稿"
				// 		} else if (deal == "1" && resume == "1") {
				// 			return "已答复";
				// 		} else if (deal == "1" && resume == "0") {
				// 			return "已交办";
				// 		} else if (examination == "2" && deal == "0" &&
				// 			draft == "2") {
				// 			return "已审查";
				// 		} else if (isxzsc == "1" && draft == "2") {
				// 			return "已答复";
				// 		} else if (iscs == "1" && draft == "2") {
				// 			return "初审查";
				// 		} else if (examination == "1" && draft == "2") {
				// 			return "已提交";
				// 		} else if (examination == "3") {
				// 			return "已置回";
				// 		}
				// 	},

				// })
				$("#wuliuck").off("click").click(function() {
					location.href = "#processState";
					var sid = $(this).attr("rssid")
					RssApi.Details("suggest").condition(new RssDict().keyvalue({
						"id": sid
					}).getDict()).getJson(function(lcjson) {
						$("#processState article>ul").remove();
						var lcstate = "1";
						num[0] = lcstate;
						if (lcjson.examination == "5" && lcjson
							.isxzsc == "1" && lcjson.draft == "2") {
							lcstate = "6"
							////console.log(lcjson.examination)
						} else if (lcjson.examination == "3") {
							lcstate = "7"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "1") {
							lcstate = "5"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "0") {
							lcstate = "4"
						} else if (lcjson.examination == "2" && lcjson
							.deal == "0" && lcjson.draft == "2") {
							lcstate = "3"
						} else if (lcjson.iscs == "1" && lcjson.draft ==
							"2") {
							lcstate = "2"
						}
						////console.log(lcstate);
						if (lcstate == "6") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.xzReviewTime) * 1000)
								.toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.xzReviewTime) * 1000).toString(
									"hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>乡镇政府办审查人：' +
								lcjson.xzname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson
										.InitialReviewTime) *
									1000).toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.InitialReviewTime) * 1000)
								.toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
								lcjson.scname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else if (lcstate == "7") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.zhTime) * 1000).toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>置回</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.zhTime) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>置回人：' +
								lcjson.zhName +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else {
							for (var i = 1; i <= lcstate; i++) {
								switch (i) {
									case 1:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>提交人：' +
												lcjson.realname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 2:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.InitialReviewTime
													) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.InitialReviewTime
												) * 1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
												lcjson.scname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
										//                                    case 3:
										//                                        $("#processState article").prepend('<ul><li>' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("yyyy-MM-dd") + '</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>审查</b><img src="img/limg/sz.png"/><a class="time">' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("hh:mm") + '</a></div><img src="img/limg/name.png" /><a>审查人：' + lcjson.xzname + '</a></li><li class="processFoter"></li></ul>')
										//                                        break;
									case 3:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>复审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办审查人：' +
												lcjson.fsrname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 4:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>政府办</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString("hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办交办人：' +
												lcjson.zfbname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 5:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>答复单位：' +
												lcjson.realcompanyname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 6:
										break;
									case 7:
										break;
								}
							}
						}
					})
				});

				//评论条数
				RssApi.Table.List("suggest_praise").condition(new RssDict().keyvalue({
					"relationid": json[0].id,
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(date) {
					if (date.length > 0) {
						$("#tbdz").addClass('dj');
					} else {
						$("#tbdz").removeClass('dj')
					}

					RssApi.Details("s_praise_num").condition(new RssDict()
						.keyvalue({
							"relationid": json[0].id,
							"type": "2"
						}).getDict()).getJson(function(num) {
						var znum = "0";
						if (num) {
							znum = num.relnum
						}
						$("#handlesuggestinfo .ckfont").eq(0).text(
							znum);
						RssApi.Details("suggest_comment_num").condition(
							new RssDict().keyvalue({
								"suggestid": json[0].id
							}).getDict()).getJson(function(sunum) {
							var snum = "0";
							if (sunum) {
								snum = sunum.sugnum
							}
							$("#handlesuggestinfo .ckfont").eq(
								1).text(snum);
							RssApi.View.List("suggest_comment")
								.keyvalue("pagesize", "100")
								.condition(new RssDict()
									.keyvalue({
										"suggestid": json[0]
											.id
									}).getDict()).getJson(
									function(comment) {
										$("#handlesuggestinfo article>ul")
											.empty();
										if (comment.length ==
											"0") {
											$("#handlesuggestinfo article>ul")
												.before(
													'<div id="wpj">无评价</div>'
												)
										}
										$.each(comment,
											function(k, v) {
												if (v
													.myid ==
													RssUser
													.Data
													.myid) {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'<img src="img/limg/exit.png" /></li>'
														)
												} else {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												}

											})
										sc();

									})
						})
					})
				})

				//点赞
				$("#tbdz").off("click").click(function() {
					var t = $(this);
					var zn = $("#handlesuggestinfo .ckfont").eq(0);
					var text_box = $("#add-num");
					if (t.hasClass('dj')) {
						RssApi.Delete("suggest_praise").condition(new RssDict()
							.keyvalue({
								'id': t.attr("dzid")
							}).keymyid().getDict()).getJson(function(json) {
							t.removeClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl - 1);
						});
						text_box.show().html(
							"<em class='add-animation'>-1</em>");
						$(".add-animation").removeClass("hover");
					} else {
						RssApi.Edit("suggest_praise").keymyid().keyvalue(
							'relationid', t.attr("rssid")).getJson(function(
							json) {
							t.addClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl + 1);
						});
						text_box.show().html(
							"<em class='add-animation'>+1</em>");
						$(".add-animation").addClass("hover");
					}
				})

				//发送评论
				$("#evaluate").off("click").click(function() {
					var tid = $("#tbdz").attr("rssid")
					var pjtext = "<p>" + $("#pjtext").text() + "</p>"
					//                  var text_box = $("#add-num");
					if ($("#pjtext").text() != "") {
						RssApi.Edit("suggest_comment").keymyid().keyvalue({
							'suggestid': tid,
							'matter': pjtext
						}).getJson(function(json) {
							if (json.id > 0) {
								$("#handlesuggestinfo article>ul")
									.append('<li PJid="' + json.id +
										'"><span>' + RssUser.Data
										.realname +
										'：</span>' + pjtext +
										'<img src="img/limg/exit.png" /></li>'
									)
								$("#pjtext").text("")
								$("#handlesuggestinfo article")
									.scrollTop($(
										"#handlesuggestinfo article"
									).height());
								var zn = $("#handlesuggestinfo .ckfont")
									.eq(1);
								var sl = parseInt(zn.text())
								zn.text(sl + 1);
								$("#wpj").remove();
								sc();
								//                          text_box.show().html("<em class='add-animationa'>+1</em>");
								//                      	$(".add-animationa").addClass("hover");
							}
						});
					} else {
						alert("评论不能为空！");
					}
				})
				$("#handlesuggestinfo .divp").html(json[0].matter)
				// location.href = "#handlesuggestinfo";
			})
		});

		//删除
		function sc() {

			$("#handlesuggestinfo ul>li>img").off("click").click(function() {
				var PJid = $(this).parent().attr("PJid");
				//              	alert(PJid);
				if (confirm("确认删除?")) {
					//              			RssApi.Delete("suggest_praise").condition(new RssDict().keyvalue({'id': t.attr("dzid")}).keymyid().getDict()).getJson(function (json) {
					RssApi.Delete("suggest_comment").condition(new RssDict().keyvalue({
						"id": PJid
					}).getDict()).getJson(function(json) {
						//              				alert("删除成功！");
						$("#handlesuggestinfo ul>li[PJid='" + PJid + "']").remove();
						var zn = $("#handlesuggestinfo .ckfont").eq(1);
						var sl = parseInt(zn.text())
						zn.text(sl - 1);
						$("#wpj").remove();
					});

				}
				//alert("删除");
			});
		}

		//查看
		$("#suggesthandleYA .ans").off("click").click(function() {
			var key = $(this).parent().attr("sortid");
			RssApi.Details("suggest_opinion").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				var star = ["business", "initiative", "communication", "counter",
					"consensus"
				]
				var checkbox = ["reply", "handle", "issue", "deal"]
				$("#handleevaluate article").mapview(json, {
					"seconded": function(val) {
						var seconded = dictdata.seconded[val]
						return seconded;
					},
					"permission": function(val) {
						var permission = dictdata.permission[val]
						return permission;
					},
					"suhandle": function(val) {
						var handle = dictdata.handle[val]
						return handle;
					}
				})
				$("[effect]").attr("relationid", json.effect);
				$("[effect]").text(dictdata.effect[json.effect])
				$.each(star, function(k, v) {
					var t = json[v];
					if (json[v]) {
						pingji(json[v], v)
					} else {
						$("[name ='" + v + "']").find("a").removeClass("sel");
					}
				})
				$("input[type='checkbox']").prop("checked", false);
				$.each(checkbox, function(k, v) {
					if (json[v] == "1") {
						$("input[name ='" + v + "']").prop("checked", true);
					}
				})
				$("[effect]").off("click").click(function() {
					zzc($(this), dictdata["effect"]);
				})
				$("#handleevaluate .normalbutton").off("click").click(function() {
					var k1 = {},
						k2 = {},
						k3 = "";
					$.each(star, function(k, v) {
						k1[v] = $("em[name='" + v + "']").find(".sel")
							.length;
					})
					$.each(checkbox, function(k, v) {
						if ($("input[name='" + v + "']").is(
								":checked")) {
							k2[v] = "1";
						} else {
							k2[v] = "2";
						}
					})
					k3 = $("[effect]").attr("relationid");
					RssApi.Delete("opinion").condition(new RssDict().keyvalue({
						"proposal": key
					}).keyvalue().getDict()).getJson(function(json) {
						RssApi.Edit("opinion").setLoading(true)
							.keyvalue(k1).keyvalue(k2).keyvalue({
								"myid": RssUser.Data.myid,
								"proposal": key,
								"effect": k3
							}).getJson(function(json) {
								alert("评价提交成功");
							})
					})
				})
			})
		})
	}).getJson();
})

//联名办理评价议案
$("#lmsuggesthandleYA").load(function() {
	if (arry.indexOf("lmsuggesthandleYA") == "-1") {
		$("#lmsuggesthandleYA ul li").eq(0).siblings().remove();
		arry.push("lmsuggesthandleYA")
	} else {
		$("#lmsuggesthandleYA ul li").remove();
	}
	faqsajax = RssApi.View.List("sortuser").setLoading(true).condition(new RssDict().keyvalue({
		"lwstate": "2",
		"draft": "2",
		"userid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		var draft, examination, deal, resume;
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
		$("#lmsuggesthandleYA ul").mapview(json, {
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
			"resume": function(val) {
				resume = val;
				if (draft == "1") {
					return "草稿"
				} else if (deal == "1" && resume == "1") {
					return "已答复";
				} else if (deal == "1" && resume == "0") {
					return "已交办";
				} else if (examination == "2" && deal == "0" && draft == "2") {
					return "已审查";
				} else if (isxzsc == "1" && draft == "2") {
					return "已答复";
				} else if (iscs == "1" && draft == "2") {
					return "初审查";
				} else if (examination == "1" && draft == "2") {
					return "已提交";
				} else if (examination == "3") {
					return "已置回";
				}
			}
		}, append)
		//查看
		$("#lmsuggesthandleYA ul>li").off("click").click(function() {
			var key = $(this).find("h1").attr("sortid");
			RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
				"sortid": key
			}).getDict()).getJson(function(json) {
				var draft, examination, deal, resume
				$("#handlesuggestinfo article").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd hh:mm");
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
					"resume": function(val) {
						resume = val;
						if (draft == "1") {
							return "草稿"
						} else if (deal == "1" && resume == "1") {
							return "已答复";
						} else if (deal == "1" && resume == "0") {
							return "已交办";
						} else if (examination == "2" && deal == "0" &&
							draft == "2") {
							return "已审查";
						} else if (isxzsc == "1" && draft == "2") {
							return "已答复";
						} else if (iscs == "1" && draft == "2") {
							return "初审查";
						} else if (examination == "1" && draft == "2") {
							return "已提交";
						} else if (examination == "3") {
							return "已置回";
						}
					},

				})
				$("#wuliuck").off("click").click(function() {
					location.href = "#processState";
					var sid = $(this).attr("rssid")
					RssApi.Details("suggest").condition(new RssDict().keyvalue({
						"id": sid
					}).getDict()).getJson(function(lcjson) {
						$("#processState article>ul").remove();
						var lcstate = "1";
						num[0] = lcstate;
						if (lcjson.examination == "5" && lcjson
							.isxzsc == "1" && lcjson.draft == "2") {
							lcstate = "6"
							////console.log(lcjson.examination)
						} else if (lcjson.examination == "3") {
							lcstate = "7"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "1") {
							lcstate = "5"
						} else if (lcjson.deal == "1" && lcjson
							.resume == "0") {
							lcstate = "4"
						} else if (lcjson.examination == "2" && lcjson
							.deal == "0" && lcjson.draft == "2") {
							lcstate = "3"
						} else if (lcjson.iscs == "1" && lcjson.draft ==
							"2") {
							lcstate = "2"
						}
						////console.log(lcstate);
						if (lcstate == "6") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.xzReviewTime) * 1000)
								.toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.xzReviewTime) * 1000).toString(
									"hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>乡镇政府办审查人：' +
								lcjson.xzname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson
										.InitialReviewTime) *
									1000).toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson
									.InitialReviewTime) * 1000)
								.toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
								lcjson.scname +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else if (lcstate == "7") {
							$("#processState article").prepend(
								'<ul><li>' + new Date(parseInt(
									lcjson.zhTime) * 1000).toString(
									"yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>置回</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.zhTime) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>置回人：' +
								lcjson.zhName +
								'</a></li><li class="processFoter"></li></ul><ul><li>' +
								new Date(parseInt(lcjson.shijian) *
									1000)
								.toString("yyyy-MM-dd") +
								'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
								new Date(parseInt(lcjson.shijian) *
									1000).toString("hh:mm") +
								'</a></div><img src="img/limg/name.png" /><a>提交人：' +
								lcjson.realname +
								'</a></li><li class="processFoter"></li></ul>'
							)
						} else {
							for (var i = 1; i <= lcstate; i++) {
								switch (i) {
									case 1:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>提交</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.shijian) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>提交人：' +
												lcjson.realname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 2:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.InitialReviewTime
													) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>初审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.InitialReviewTime
												) * 1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>代表团审查人：' +
												lcjson.scname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
										//                                    case 3:
										//                                        $("#processState article").prepend('<ul><li>' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("yyyy-MM-dd") + '</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>审查</b><img src="img/limg/sz.png"/><a class="time">' + new Date(parseInt(lcjson.xzReviewTime) * 1000).toString("hh:mm") + '</a></div><img src="img/limg/name.png" /><a>审查人：' + lcjson.xzname + '</a></li><li class="processFoter"></li></ul>')
										//                                        break;
									case 3:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>复审</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ReviewTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办审查人：' +
												lcjson.fsrname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 4:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>政府办</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
													.AssignedByTime
												) * 1000)
												.toString("hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>县政府办交办人：' +
												lcjson.zfbname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 5:
										$("#processState article")
											.prepend('<ul><li>' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"yyyy-MM-dd") +
												'</li><li class="processHeader"></li><li class="processTP"><img src="img/limg/tp.png"/></li><li class="processFont"><div class="jb"><b>答复</b><img src="img/limg/sz.png"/><a class="time">' +
												new Date(parseInt(lcjson
														.ResponseTime) *
													1000).toString(
													"hh:mm") +
												'</a></div><img src="img/limg/name.png" /><a>答复单位：' +
												lcjson.realcompanyname +
												'</a></li><li class="processFoter"></li></ul>'
											)
										break;
									case 6:
										break;
									case 7:
										break;
								}
							}
						}
					})
				});

				//评论条数
				RssApi.Table.List("suggest_praise").condition(new RssDict().keyvalue({
					"relationid": json[0].id,
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(date) {
					if (date.length > 0) {
						$("#tbdz").addClass('dj');
					} else {
						$("#tbdz").removeClass('dj')
					}

					RssApi.Details("s_praise_num").condition(new RssDict()
						.keyvalue({
							"relationid": json[0].id,
							"type": "2"
						}).getDict()).getJson(function(num) {
						var znum = "0";
						if (num) {
							znum = num.relnum
						}
						$("#handlesuggestinfo .ckfont").eq(0).text(
							znum);
						RssApi.Details("suggest_comment_num").condition(
							new RssDict().keyvalue({
								"suggestid": json[0].id
							}).getDict()).getJson(function(sunum) {
							var snum = "0";
							if (sunum) {
								snum = sunum.sugnum
							}
							$("#handlesuggestinfo .ckfont").eq(
								1).text(snum);
							RssApi.View.List("suggest_comment")
								.keyvalue("pagesize", "100")
								.condition(new RssDict()
									.keyvalue({
										"suggestid": json[0]
											.id
									}).getDict()).getJson(
									function(comment) {
										$("#handlesuggestinfo article>ul")
											.empty();
										if (comment.length ==
											"0") {
											$("#handlesuggestinfo article>ul")
												.before(
													'<div id="wpj">无评价</div>'
												)
										}
										$.each(comment,
											function(k, v) {
												if (v
													.myid ==
													RssUser
													.Data
													.myid) {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'<img src="img/limg/exit.png" /></li>'
														)
												} else {
													$("#handlesuggestinfo article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												}

											})
										sc();

									})
						})
					})
				})

				//点赞
				$("#tbdz").off("click").click(function() {
					var t = $(this);
					var zn = $("#handlesuggestinfo .ckfont").eq(0);
					var text_box = $("#add-num");
					if (t.hasClass('dj')) {
						RssApi.Delete("suggest_praise").condition(new RssDict()
							.keyvalue({
								'id': t.attr("dzid")
							}).keymyid().getDict()).getJson(function(json) {
							t.removeClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl - 1);
						});
						text_box.show().html(
							"<em class='add-animation'>-1</em>");
						$(".add-animation").removeClass("hover");
					} else {
						RssApi.Edit("suggest_praise").keymyid().keyvalue(
							'relationid', t.attr("rssid")).getJson(function(
							json) {
							t.addClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl + 1);
						});
						text_box.show().html(
							"<em class='add-animation'>+1</em>");
						$(".add-animation").addClass("hover");
					}
				})

				//发送评论
				$("#evaluate").off("click").click(function() {
					var tid = $("#tbdz").attr("rssid")
					var pjtext = "<p>" + $("#pjtext").text() + "</p>"
					//                  var text_box = $("#add-num");
					if ($("#pjtext").text() != "") {
						RssApi.Edit("suggest_comment").keymyid().keyvalue({
							'suggestid': tid,
							'matter': pjtext
						}).getJson(function(json) {
							if (json.id > 0) {
								$("#handlesuggestinfo article>ul")
									.append('<li PJid="' + json.id +
										'"><span>' + RssUser.Data
										.realname +
										'：</span>' + pjtext +
										'<img src="img/limg/exit.png" /></li>'
									)
								$("#pjtext").text("")
								$("#handlesuggestinfo article")
									.scrollTop($(
										"#handlesuggestinfo article"
									).height());
								var zn = $("#handlesuggestinfo .ckfont")
									.eq(1);
								var sl = parseInt(zn.text())
								zn.text(sl + 1);
								$("#wpj").remove();
								sc();
								//                          text_box.show().html("<em class='add-animationa'>+1</em>");
								//                      	$(".add-animationa").addClass("hover");
							}
						});
					} else {
						alert("评论不能为空！");
					}
				})
				$("#handlesuggestinfo .divp").html(json[0].matter)
				location.href = "#handlesuggestinfo";
			})
		});

		//删除
		function sc() {

			$("#handlesuggestinfo ul>li>img").off("click").click(function() {
				var PJid = $(this).parent().attr("PJid");
				//              	alert(PJid);
				if (confirm("确认删除?")) {
					//              			RssApi.Delete("suggest_praise").condition(new RssDict().keyvalue({'id': t.attr("dzid")}).keymyid().getDict()).getJson(function (json) {
					RssApi.Delete("suggest_comment").condition(new RssDict().keyvalue({
						"id": PJid
					}).getDict()).getJson(function(json) {
						//              				alert("删除成功！");
						$("#handlesuggestinfo ul>li[PJid='" + PJid + "']").remove();
						var zn = $("#handlesuggestinfo .ckfont").eq(1);
						var sl = parseInt(zn.text())
						zn.text(sl - 1);
						$("#wpj").remove();
					});

				}
				//alert("删除");
			});
		}

		//查看
		$("#lmsuggesthandleYA .ans").off("click").click(function() {
			var key = $(this).parent().attr("sortid");
			RssApi.Details("suggest_opinion").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				var star = ["business", "initiative", "communication", "counter",
					"consensus"
				]
				var checkbox = ["reply", "handle", "issue", "deal"]
				$("#handleevaluate article").mapview(json, {
					"seconded": function(val) {
						var seconded = dictdata.seconded[val]
						return seconded;
					},
					"permission": function(val) {
						var permission = dictdata.permission[val]
						return permission;
					},
					"suhandle": function(val) {
						var handle = dictdata.handle[val]
						return handle;
					}
				})
				$("[effect]").attr("relationid", json.effect);
				$("[effect]").text(dictdata.effect[json.effect])
				$.each(star, function(k, v) {
					var t = json[v];
					if (json[v]) {
						pingji(json[v], v)
					} else {
						$("[name ='" + v + "']").find("a").removeClass("sel");
					}
				})
				$("input[type='checkbox']").prop("checked", false);
				$.each(checkbox, function(k, v) {
					if (json[v] == "1") {
						$("input[name ='" + v + "']").prop("checked", true);
					}
				})
				$("[effect]").off("click").click(function() {
					zzc($(this), dictdata["effect"]);
				})
				$("#handleevaluate .normalbutton").off("click").click(function() {
					var k1 = {},
						k2 = {},
						k3 = "";
					$.each(star, function(k, v) {
						k1[v] = $("em[name='" + v + "']").find(".sel")
							.length;
					})
					$.each(checkbox, function(k, v) {
						if ($("input[name='" + v + "']").is(
								":checked")) {
							k2[v] = "1";
						} else {
							k2[v] = "2";
						}
					})
					k3 = $("[effect]").attr("relationid");
					RssApi.Delete("opinion").condition(new RssDict().keyvalue({
						"proposal": key
					}).keyvalue().getDict()).getJson(function(json) {
						RssApi.Edit("opinion").setLoading(true)
							.keyvalue(k1).keyvalue(k2).keyvalue({
								"myid": RssUser.Data.myid,
								"proposal": key,
								"effect": k3
							}).getJson(function(json) {
								alert("评价提交成功");
							})
					})
				})
			})
		})
	}).getJson();
})
//“一府一委两院”专项工作满意度测评
$("#yyl_evaluation").load(function() {
	if (arry.indexOf("yyl_evaluation") == "-1") {
		$("#yyl_evaluation ul li").eq(0).siblings().remove();
		arry.push("yyl_evaluation")
	} else {
		$("#yyl_evaluation ul li").remove();
	}
	faqsajax = RssApi.Table.List("yyl_evaluation").setLoading(true).setFlushUI(function(json, append) {

		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#yyl_evaluation ul").mapview(json, {
			"result": function(val) {
				if (val == "1") {
					return "满意";
				}
				if (val == "2") {
					return "基本满意";
				}
				if (val == "3") {
					return "不满意";
				}
			}
		}, append)
		$("#yyl_evaluation ul li").click(function() {
			var key = $(this).find("[rssid]").attr("rssid");
			location.href = "#yyl_evaluationck"
			$("#yyl_evaluationck").find("header>h1").text();
			RssApi.Table.Details("yyl_evaluation").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				$("#yyl_evaluationck article").mapview(json, {
					"result": function(val) {
						if (val == "1") {
							return "满意";
						}
						if (val == "2") {
							return "基本满意";
						}
						if (val == "3") {
							return "不满意";
						}
					}
				})
				if (json.note == "" || json.note == undefined) {
					$(".bz").hide()
				} else {
					$(".bz").show()
				}
			})
		})
	}).getJson();
})

//代表建议办理情况满意度测评
$("#user_cbdweval").load(function() {
	if (arry.indexOf("yyl_evaluation") == "-1") {
		$("#user_cbdweval ul li").eq(0).siblings().remove();
		arry.push("user_cbdweval")
	} else {
		$("#user_cbdweval ul li").remove();
	}
	faqsajax = RssApi.View.List("user_cbdweval").setLoading(true).condition(new RssDict().keyvalue({
		//        "classify": "1",
		"state": 3,
		//        "result":"(likeall~"+res+")"
	}).getDict()).setFlushUI(function(json, append) {

		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		var listBox = $('#user_cbdweval .fenye'),
			html = '',
			result = '',
			year = '',
			my = "",
			cbdwnote = "";
		$.each(json, function(k, v) {
			result = v.result ? v.result : '暂无评分';
			year = v.year ? v.year : '暂无年份';
			cbdwnote = v.cbdwnote ? v.cbdwnote : '暂无备注';
			if (result == '暂无评分') {
				my = "";
			}
			if (result >= 80) {
				my = "满意";
			}
			if (80 > result && result >= 60) {
				my = "基本满意";
			}
			if (result < 60) {
				my = "不满意";
			}
			////console.log(my);
			html += '<li><h1>' + v.allname + '</h1><div><p class="bb">[结果评定]：' + result +
				'&nbsp;&nbsp;' + my +
				'</p></div><p class="nf">年份：' + year + '</p><div><em>备注：</em>' + cbdwnote +
				'</div></li>';
		})
		listBox.append(html);
	}).getJson();
})
//代表履职满意度测评
$("#delegation_score").load(function() {
	if (arry.indexOf("delegation_score") == "-1") {
		$("#delegation_score ul li").eq(0).siblings().remove();
		arry.push("delegation_score")
	} else {
		$("#delegation_score ul li").remove();
	}

	RssApi.View.List("dbtuser").setLoading(true).condition(new RssDict().keyvalue({
		"state": 4,
		"level": 1
	}).getDict()).setFlushUI(function(json) {
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}

		function sortId(a, b) {
			return a.daibiaotuanCode - b.daibiaotuanCode
		}
		json.sort(sortId);
		$("#delegation_score ul").mapview(json, {

		})


		$("#delegation_score ul li").click(function() {
			$('#delegation_scoreck .fenye').empty();
			var key = $(this).find("[rssid]").attr("rssid");
			location.href = "#delegation_scoreck"
			$("#seenotice").find("header>h1").text();
			var mission = $(this).find(".myid").text();
			////console.log(mission);
			faqsajax = RssApi.View.List("delegation_score").setLoading(true).condition(
				new RssDict().keyvalue({
					"mission": mission
				}).getDict()).setFlushUI(function(json, append) {
				////console.log(json);
				if (json.length != "10") {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}
				var listBox = $('#delegation_scoreck .fenye'),
					html = '',
					delegate_score = '',
					year = '',
					my = '',
					note = '';
				$.each(json, function(k, v) {
					delegate_score = v.delegate_score ? v.delegate_score :
						'暂无评分';
					year = v.year ? v.year : '暂无年份';
					note = v.note ? v.note : '暂无备注';
					if (delegate_score == '暂无评分') {
						my = "";
					}
					if (delegate_score >= 80) {
						my = "满意";
					}
					if (80 > delegate_score && delegate_score >= 60) {
						my = "基本满意";
					}
					if (delegate_score < 60) {
						my = "不满意";
					}
					html += '<li><h1>' + v.realname + '</h1><p>[结果评定]：' +
						delegate_score + '&nbsp;' + my + '<span>年份：' +
						year + '</span></p><div><em>备注：</em>' + note +
						'</div></li>';
				})
				listBox.append(html);
			}).getJson();
		})
	}).getJson();
})

//满意率统计
var ruzhou_refresh_flag = 1 ; //为了处理进入二级页面返回以后，不要重新load. 汝州需求。 默认值1表示刷新。
$("#seeevaluation .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});	
$("#satisfactionRateView .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});


$("#evaluation").load(function() {
	//为了处理进入二级页面返回以后
	if ( ruzhou_refresh_flag ==  0 ) {
		ruzhou_refresh_flag = 1 ;
		return;
	}
	
	
	if (arry.indexOf("evaluation") == "-1") {
		$("#evaluation ul li").eq(0).siblings().remove();
		arry.push("evaluation")
	} else {
		$("#evaluation ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
		"degree": "1"
	}).getDict()).setFlushUI(function(json, append) {
		// console.log(json)
		
		var json2 = [];
		$.each(json, function(k, v) {
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})	
		// if (json2.length < 10 ) {
		// 	$('.nodata').hide();
		// } else {
		// 	$('.nodata').show();
		// }
		
		if (json2.length > 0 ) {
			$('.nodata_tip').hide();
		} else {
			$('.nodata_tip').show();
		}
		
		$("#evaluation_item_id").show();
		$("#evaluation ul").mapview(json2, {
			// "examination": function(val) {
			
			// 	if (val == "1") {
			// 		return state = "未审查";
			// 	} else if (val == "2") {
			// 		return state = "已审查";
			// 	} else if (val == "3") {
			// 		return state = "置回";
			// 	} else if (val == "4") {
			// 		return state = "待审查";
			// 	} else if (val == "5") {
			// 		return state = "乡镇已审查";
			// 	}
			// },
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
			}
		}, append);
		//查看
		$("#evaluation .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			
			var appendObj = "evaluation";
			
			//设置不需要重新加载标志
			ruzhou_refresh_flag = 0 ;
			viewSuggestInformation( appendObj , key );
			
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeevaluation article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"lwstate": function(val) {
			// 			if (val == "1") {
			// 				return lwstate = "建议";
			// 			} else if (val == "2") {
			// 				return lwstate = "议案";
			// 			} else if (val == "3") {
			// 				return lwstate = "批评";
			// 			} else if (val == "4") {
			// 				return lwstate = "意见";
			// 			} else if (val == "5") {
			// 				return lwstate = "质询";
			// 			}
			// 		},
			// 		"examination": function(val) {
			// 			if (val == "1") {
			// 				return examination = "未审查";
			// 			} else if (val == "2") {
			// 				return examination = "已审查";
			// 			} else if (val == "3") {
			// 				return examination = "置回";
			// 			} else if (val == "4") {
			// 				return examination = "待审查";
			// 			} else if (val == "5") {
			// 				return examination = "乡镇已审查";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seeevaluation article").append(
			// 			'<div class="divtop"><h1>' + v.sessionname +
			// 			'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="divp">' + v.matter +
			// 			'</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">主办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协办单位：' + v.company +
			// 			'</div><div class="fj no">附件：<span>' + v.enclosure +
			// 			'<span></div>')
			// 	})
			// })
		})

		// ting 获取对应的测评数据
		$("#evaluation .ans").off().click(function() {
			var key = $(this).parent().attr("sortid");
			//设置不需要重新加载标志
			ruzhou_refresh_flag = 0 ;
			
			// satisfactionRateEntry( key );
			$("#satisfactionRate_key").val(key);
			RssApi.Table.List("user").keyvalue("pagesize", "500").condition(new RssDict().keyvalue({
				"isdelegate": 1
			}).getDict()).getJson(function(jsonn) {
				// console.log(" ___________ satisfactionRateEntry jsonn=",jsonn)
				
				var totalDelegate = jsonn.length;
				totalDelegate = totalDelegate - 4 ;
				getData( totalDelegate);
			})
			
		})

	}).getJson();
})

//建议测评
// 为了处理进入二级页面返回以后，不要重新load. 汝州需求。 默认值1表示刷新。
$("#seeevaluationJY .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});	
$("#ansevaluationJY .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});
$("#evaluationUnitLayout .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});
$("#evaluationJY").load(function() { //加载建议测评数据
	
	if ( ruzhou_refresh_flag == 0 ) {
		ruzhou_refresh_flag = 1 ;
		return ;
	}


	if (arry.indexOf("evaluationJY") == "-1") {
		$("#evaluationJY ul li").eq(0).siblings().remove();
		arry.push("evaluationJY")
	} else {
		$("#evaluationJY ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
		"lwstate": "1"
	}).getDict()).setFlushUI(function(json, append) {

		var json2 = [];
		$.each(json, function(k, v) {
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})	
		// if (json2.length < 10 ) {
		// 	$('.nodata').hide();
		// } else {
		// 	$('.nodata').show();
		// }
		if (json2.length == 0  ) {
			$('.noEvaluation').show();
		} else {
			$('.noEvaluation').hide();
		}
		$("#evaluationJY ul").mapview(json2, {
			// "examination": function(val) {
			
			// 	if (val == "1") {
			// 		return state = "未审查";
			// 	} else if (val == "2") {
			// 		return state = "已审查";
			// 	} else if (val == "3") {
			// 		return state = "置回";
			// 	} else if (val == "4") {
			// 		return state = "待审查";
			// 	} else if (val == "5") {
			// 		return state = "乡镇已审查";
			// 	}
			// },
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
				}
		}, append);
		
		
		
		
		//查看
		$("#evaluationJY .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			var appendObj = "evaluationJY";
			
			ruzhou_refresh_flag =  0 ;
			// viewSuggestInformation( appendObj , key );
			viewSuggestInformation_ruzhou( appendObj , key );
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeevaluationJY article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"lwstate": function(val) {
			// 			if (val == "1") {
			// 				return lwstate = "建议";
			// 			} else if (val == "2") {
			// 				return lwstate = "议案";
			// 			} else if (val == "3") {
			// 				return lwstate = "批评";
			// 			} else if (val == "4") {
			// 				return lwstate = "意见";
			// 			} else if (val == "5") {
			// 				return lwstate = "质询";
			// 			}
			// 		},
			// 		"examination": function(val) {
			// 			if (val == "1") {
			// 				return examination = "未审查";
			// 			} else if (val == "2") {
			// 				return examination = "已审查";
			// 			} else if (val == "3") {
			// 				return examination = "置回";
			// 			} else if (val == "4") {
			// 				return examination = "待审查";
			// 			} else if (val == "5") {
			// 				return examination = "乡镇已审查";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seeevaluationJY article").append(
			// 			'<div class="divtop"><h1>' + v.sessionname +
			// 			'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="divp">' + v.matter +
			// 			'</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">承办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协助单位：' + v.company +
			// 			'</div><div class="fj no">附件：<span>' + v.enclosure +
			// 			'<span></div>')
			// 	})
			// })
		})
		
		
		//评价单位
		$("#evaluationJY .evaluate").off().click(function() {
			var key = $(this).parent().attr("sortid");
			console.log("___________ evaluationJY  key=",key )
			ruzhou_refresh_flag = 0 ;
			$("#lwstate_id").val( 1 );
			$("#key_id").val( key );
			$("#type_id").val( 0 );
			
			// $("#evaluationUnitLayout .normalbutton_submit").off().click(function() {
			// 	//先判断是否已经是已办复状态
			// 	console.log("___________ evaluationUnitLayout 1111 2222=" )
			// 	faqsajax = RssApi.View.List("sort").setLoading(false).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
			// 		"sortid": key
			// 	}).getDict()).setFlushUI(function(json, append) {
					
				
			// 	// var isDone = 0 ;
			// 	// if (deal == "1" && resume == "1") {
			// 	// 	isDone =  1 ;
			// 	// } 			
			// 	// if (isxzsc == "1" && draft == "2") {
			// 	// 	isDone =   1 ;
			// 	// } 
			// 	// if ( isDone ==  0 ) {
			// 	// 	alert("承办单位还未办复,不能对承办单位测评");
			// 	// 	return;
			// 	// }
					
				
				
				
			// 	var satisfied = $("#evaluationUnitLayout .marginb .form input:radio:checked")
			// 		.val();
			// 	var opinion = $("#evaluationUnitLayout textarea").val();
			// 	var k1 = {
			// 		"opinion": opinion,
			// 		"proposal": key,
			// 		"myid": RssUser.Data.myid,
			// 		"evaluationDone": "1",
			// 		"particitant": "1",
			// 		"evaluteType": "0",
			// 		"evaluation": satisfied
			// 	}
			// 	console.log("___________ k1=",k1)
			// 	RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue(k1)
			// 		.keyvalue({
			// 			"id": key
			// 		}).getJson(function(json) {
			// 			console.log(json)
			// 			if (json.id) {
			// 				alert("评价成功");
			// 				$("#evaluationUnitLayout textarea").val("");
			// 				//location.href = "#evaluationJY";
			// 			} else {
			// 				alert("评价失败");
			// 			}
			// 			history.go(-1);
			// 			ruzhou_refresh_flag =  0 ;
			// 		})
			// 	}).getJson(); //sort
			
			// })
		})
		
		
		//建议测评
		$("#evaluationJY .ans").off().click(function() {
			var key = $(this).parent().attr("sortid");
			$("#lwstate_id").val( 1 );
			$("#key_id").val( key );
			$("#type_id").val( 1 );
			console.log("___________ evaluationJY  评价建议key=",key )
			
			ruzhou_refresh_flag = 0 ;
			
			$("#ansevaluationJY .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationJY .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationJY textarea").val();
				var k1 = {
					"opinion": opinion,
					"proposal": key,
					"myid": RssUser.Data.myid,
					"evaluationDone": "1",
					"particitant": "1",
					"evaluation": satisfied
				}
				console.log("___________ k1=",k1)
				RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationJY textarea").val("");
							// location.href = "#evaluationJY";
							history.go(-1);
						} else {
							alert("评价失败");
						}
					})
			})
		})
		
		
		//建议测评
		$("#evaluationJY .result").off().click(function() {
			var key = $(this).parent().attr("sortid");
			$("#lwstate_id").val( 1 );
			$("#key_id").val( key );
			$("#type_id").val( 1 );
			console.log("___________ evaluationJY  评价建议key=",key )
			
			ruzhou_refresh_flag = 0 ;
			
			$("#ansevaluationJY .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationJY .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationJY textarea").val();
				var k1 = {
					"opinion": opinion,
					"proposal": key,
					"myid": RssUser.Data.myid,
					"evaluationDone": "1",
					"particitant": "1",
					"evaluation": satisfied
				}
				console.log("___________ k1=",k1)
				RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationJY textarea").val("");
							// location.href = "#evaluationJY";
							history.go(-1);
						} else {
							alert("评价失败");
						}
					})
			})
		})
		
	}).getJson();
})


//议案测评
$("#seeevaluationYA .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});	
$("#ansevaluationJY .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});

$("#evaluationUnitLayout .hisback").click(function() {
	
	ruzhou_refresh_flag = 0 ;
});

$("#evaluationYA").load(function() {
	
	if ( ruzhou_refresh_flag == 0 ) {
		ruzhou_refresh_flag = 1 ;
		return ;
	}
	if (arry.indexOf("evaluationYA") == "-1") {
		$("#evaluationYA ul li").eq(0).siblings().remove();
		arry.push("evaluationYA")
	} else {
		$("#evaluationYA ul li").remove();
	}
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
		"lwstate": "2"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		var json2 = [];
		$.each(json, function(k, v) {
			if ( "undefined".indexOf(v.avatar) != -1 ) {
				v.avatar = "avatar.png" ;
			}
			json2.push(v)
		})	
		// if (json.length <10 ) {
		// 	$('.nodata').hide();
		// } else {
		// 	$('.nodata').show();
		// }
		
		if (json.length > 0  ) {
			$('.noEvaluation').hide();
		} else {
			$('.noEvaluation').show();
		}
		$("#evaluationYA ul").mapview(json2, {
			// "examination": function(val) {
			
			// 	if (val == "1") {
			// 		return state = "未审查";
			// 	} else if (val == "2") {
			// 		return state = "已审查";
			// 	} else if (val == "3") {
			// 		return state = "置回";
			// 	} else if (val == "4") {
			// 		return state = "待审查";
			// 	} else if (val == "5") {
			// 		return state = "乡镇已审查";
			// 	}
			// },
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
				}
		}, append);
		//查看
		$("#evaluationYA .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			var appendObj = "evaluationYA";
			
			ruzhou_refresh_flag = 0 ;
			// viewSuggestInformation( appendObj , key );
			viewSuggestInformation_ruzhou( appendObj , key );
			
			// faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			// 	.keyvalue({
			// 		"id": key
			// 	}).getDict()).getJson(function(json) {
			// 	console.log(json)
			// 	var shijian = ""
			// 	$("#seeevaluationYA article").mapview(json, {
			// 		"shijian": function(val) {
			// 			return shijian = new Date(parseInt(val) * 1000)
			// 				.toString("yyyy-MM-dd hh:mm");
			// 		},
			// 		"lwstate": function(val) {
			// 			if (val == "1") {
			// 				return lwstate = "建议";
			// 			} else if (val == "2") {
			// 				return lwstate = "议案";
			// 			} else if (val == "3") {
			// 				return lwstate = "批评";
			// 			} else if (val == "4") {
			// 				return lwstate = "意见";
			// 			} else if (val == "5") {
			// 				return lwstate = "质询";
			// 			}
			// 		},
			// 		"examination": function(val) {
			// 			if (val == "1") {
			// 				return examination = "未审查";
			// 			} else if (val == "2") {
			// 				return examination = "已审查";
			// 			} else if (val == "3") {
			// 				return examination = "置回";
			// 			} else if (val == "4") {
			// 				return examination = "待审查";
			// 			} else if (val == "5") {
			// 				return examination = "乡镇已审查";
			// 			}
			// 		}
			// 	})
			// 	$.each(json, function(k, v) {
			// 		$("#seeevaluationYA article").append(
			// 			'<div class="divtop"><h1>' + v.sessionname +
			// 			'</h1><h2>[第' + v.id + '号]</h2><h3>' + v.title +
			// 			'</h3><h4 >提出者:' + v.realname +
			// 			'</h4><h4 shijian>' + shijian +
			// 			'</h4></div><div class="divp">' + v.matter +
			// 			'</div><div class="no">编号：' + v.realid +
			// 			'</div><div class="no">类型：' + lwstate +
			// 			'</div><div class="no">分类：' + v.reviewclass +
			// 			'</div><div class="no">审查状态：' + examination +
			// 			'</div><div class="no">承办单位：' + v.realcompanyname +
			// 			'</div><div class="no">协助单位：' + v.company +
			// 			'</div><div class="fj no">附件：<span>' + v.enclosure +
			// 			'<span></div>')
			// 	})
			// })
		})


//评价单位
		$("#evaluationYA .evaluate").off().click(function() {
			var key = $(this).parent().attr("sortid");
			console.log("___________ evaluationJY  key=",key )
			ruzhou_refresh_flag = 0 ;
			$("#lwstate_id").val( 2 );
			$("#key_id").val( key );
			$("#type_id").val( 0 );
			
			// $("#evaluationUnitLayout .normalbutton").off().click(function() {
			// 	//先判断是否已经是已办复状态
			// 	console.log("___________ evaluationUnitLayout 1111 2222=" )
			// 	faqsajax = RssApi.View.List("sort").setLoading(false).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
			// 		"sortid": key
			// 	}).getDict()).setFlushUI(function(json, append) {
					
				
			// 	var isDone = 0 ;
			// 	if (deal == "1" && resume == "1") {
			// 		isDone =  1 ;
			// 	} 			
			// 	if (isxzsc == "1" && draft == "2") {
			// 		isDone =   1 ;
			// 	} 
			// 	if ( isDone ==  0 ) {
			// 		alert("承办单位还未办复,不能对承办单位测评");
			// 		return;
			// 	}
					
				
				
				
			// 	var satisfied = $("#evaluationUnitLayout .marginb .form input:radio:checked")
			// 		.val();
			// 	var opinion = $("#evaluationUnitLayout textarea").val();
			// 	var k1 = {
			// 		"opinion": opinion,
			// 		"proposal": key,
			// 		"myid": RssUser.Data.myid,
			// 		"evaluationDone": "1",
			// 		"particitant": "1",
			// 		"evaluation": satisfied
			// 	}
			// 	console.log("___________ k1=",k1)
			// 	RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue(k1)
			// 		.keyvalue({
			// 			"id": key
			// 		}).getJson(function(json) {
			// 			console.log(json)
			// 			if (json.id) {
			// 				alert("评价成功");
			// 				$("#evaluationUnitLayout textarea").val("");
			// 				//location.href = "#evaluationJY";
			// 			} else {
			// 				alert("评价失败");
			// 			}
			// 			history.go(-1);
			// 			ruzhou_refresh_flag =  0 ;
			// 		})
			// 	}).getJson(); //sort
			
			// })
		})
		

		//评价
		$("#evaluationYA .ans").off().click(function() {
			
			ruzhou_refresh_flag = 0 ;			
			var key = $(this).parent().attr("sortid");
			
			$("#lwstate_id").val( 2 );
			$("#key_id").val( key );
			$("#type_id").val( 1 );
			
			
			// $("#ansevaluationYA .normalbutton").off().click(function() {
			// 	var satisfied = $("#ansevaluationYA .marginb .form input:radio:checked")
			// 		.val();
			// 	var opinion = $("#ansevaluationYA textarea").val();
			// 	var k1 = {
			// 		"evaluation": satisfied,
			// 		"opinion": opinion,
			// 		"evaluationDone": "1",
			// 		"myid": RssUser.Data.myid
			// 	}
			// 	// console.log(k1)
			// 	RssApi.Edit("overall_satisfaction").setLoading(true).keyvalue(k1)
			// 		.keyvalue({
			// 			"proposal": key
			// 		}).getJson(function(json) {
			// 			console.log(json)
			// 			if (json.id) {
			// 				alert("评价成功");
			// 				$("#ansevaluationYA textarea").val("");
			// 				location.href = "#evaluationYA";
			// 			} else {
			// 				alert("评价失败");
			// 			}
			// 		})
			// })
		})
		
	}).getJson();
})

//已完成听取和审议专项工作报告
$("#evaluationTQ").load(function() {
	if (arry.indexOf("evaluationTQ") == "-1") {
		$("#evaluationTQ ul li").eq(0).siblings().remove();
		arry.push("evaluationTQ")
	} else {
		$("#evaluationTQ ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "2",
		"taskDone": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0  ) {
			$('.noEvaluation').show();
		} else {
			$('.noEvaluation').hide();
		}
		$("#evaluationTQ ul").mapview(json, {}, append);

		//查看
		$("#evaluationTQ .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_specialwork").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = "",
					state = "";
				$("#seeevaluationTQ article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					},
					"state": function(val) {
						if (val == "1") {
							return state = "待主任会议审议";
						} else if (val == "2") {
							return state = "主任会议审议中";
						} else if (val == "3") {
							return state = "方案实施中";
						} else if (val == "4") {
							return state = "准备专项报告中";
						} else if (val == "5") {
							return state = "征求意见中";
						} else if (val == "6") {
							return state = "征求意见已通过";
						} else if (val == "7") {
							return state = "征求意见中";
						} else if (val == "8") {
							return state = "常委会审议中";
						} else if (val == "9") {
							return state = "常委会审议意见处理中";
						} else if (val == "10") {
							return state = "征求意见中";
						} else if (val == "11") {
							return state = "征求意见已通过";
						} else if (val == "12") {
							return state = "已反馈意见";
						} else if (val == "13") {
							return state = "已向常委会提出书面报告";
						}
					}
				})
				$.each(json, function(k, v) {
					$("#seeevaluationTQ article").append(
						'<div class="divtop"><h1>听取和审议专项工作报告' +
						'</h1>' + '<h3>' + v.title +
						'</h3><h4 >提出者:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">类别：' + v.reviewclass +
						'</div><div class="no">制定方案时间：' + shijian +
						'</div><div class="no1">当前进度：' + state +
						'</div><div class="no1">实施方案：' + v.enclosure +
						'</div><div class="no1">视察调研报告：' + v.enclosure1 +
						'</div><div class="no1">专项报告：' + v.enclosure2 +
						'</div><div class="no1">反馈意见：' + v.enclosure3 +
						'</div><div class="no1">市人大常委会审议意见：' + v
						.enclosure4 +
						'</div><div class="no1">检察院等形成专项报告：' + v
						.enclosure5 +
						'</div><div class="no1">检察院等处理报告向委室征求意见：' + v
						.enclosure6 +
						'</div>')
				})
			})
		})
		//满意度测评
		$("#evaluationTQ .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			// var title = $("#evaluationTQ .title").attr("title");
			// console.log(title)
			$("#ansevaluationTQ .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationTQ .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationTQ textarea").val();
				var k1 = {
					"name": RssUser.Data.realname,
					"evaluationResult": satisfied,
					"opinion": opinion,
					"typeid": "1",
					"myid": RssUser.Data.myid,
					"evaluationId": key
				}
				console.log(k1)
				RssApi.Edit("supervision_evaluation").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationTQ textarea").val("");
							location.href = "#evaluationTQ";
						} else {
							alert("评价失败");
						}
					})
			})
		})
	}).getJson();
})

//执法检查
$("#evaluationZF").load(function() {
	if (arry.indexOf("evaluationZF") == "-1") {
		$("#evaluationZF ul li").eq(0).siblings().remove();
		arry.push("evaluationZF")
	} else {
		$("#evaluationZF ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "3",
		"taskDone": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0  ) {
			$('.noEvaluation').show();
		} else {
			$('.noEvaluation').hide();
		}
		$("#evaluationZF ul").mapview(json, {}, append);
		//查看
		$("#evaluationZF .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeevaluationZF article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					$("#seeevaluationZF article").append(
						'<div class="divtop"><h1>规范性文件备案' +
						'</h1>' + '<h3>' + v.filename +
						'</h3><h4 >提出者:' + v.organizer +
						'</h4><h4 shijian>' + shijian +
						'</h4></div><div class="no">文件名：' + v.filename +
						'</div><div class="no">报备单位：' + v.organizer +
						'</div><div class="no">文号：' + v.Titanic +
						'</div><div class="no">送报人：' + v.name +
						'</div><div class="no">印发时间：' + v.yfdate +
						'</div><div class="no">备案时间：' + v.beiandate +
						'</div>')
				})
			})
		})

		//满意度测评
		$("#evaluationZF .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			// var title = $("#evaluationTQ .title").attr("title");
			// console.log(title)
			$("#ansevaluationZF .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationZF .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationZF textarea").val();
				var k1 = {
					"name": RssUser.Data.realname,
					"evaluationResult": satisfied,
					"opinion": opinion,
					"typeid": "2",
					"myid": RssUser.Data.myid,
					"evaluationId": key
				}
				console.log(k1)
				RssApi.Edit("supervision_evaluation").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationZF textarea").val("");
							location.href = "#evaluationZF";
						} else {
							alert("评价失败");
						}
					})
			})
		})
	}).getJson();
})

//专题询问
$("#evaluationZT").load(function() {
	if (arry.indexOf("evaluationZT") == "-1") {
		$("#evaluationZT ul li").eq(0).siblings().remove();
		arry.push("evaluationZT")
	} else {
		$("#evaluationZT ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true).condition(new RssDict()
		.keyvalue({
			"typeid": "5",
			"state": "16"
		}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0  ) {
			$('.noEvaluation').show();
		} else {
			$('.noEvaluation').hide();
		}
		$("#evaluationZT ul").mapview(json, {}, append);
		//查看
		$("#evaluationZT .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_special_inquery").setLoading(true)
				.condition(
					new RssDict().keyvalue({
						"id": key
					}).getDict()).getJson(function(json) {
					console.log(json)
					var shijian = ""
					$("#seeevaluationZT article").mapview(json, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						},
						"state": function(val) {
							if (val == "1") {
								return state = "待主任会议审议";
							} else if (val == "2") {
								return state = "主任会议审议中";
							} else if (val == "3") {
								return state = "方案实施中";
							} else if (val == "4") {
								return state = "准备专项报告中";
							} else if (val == "5") {
								return state = "征求意见中";
							} else if (val == "6") {
								return state = "征求意见已通过";
							} else if (val == "7") {
								return state = "征求意见中";
							} else if (val == "8") {
								return state = "常委会审议中";
							} else if (val == "9") {
								return state = "常委会审议意见处理中";
							} else if (val == "10") {
								return state = "征求意见中";
							} else if (val == "11") {
								return state = "征求意见已通过";
							} else if (val == "12") {
								return state = "已反馈意见";
							} else if (val == "13") {
								return state = "已向常委会提出书面报告";
							}
						}
					})
					$.each(json, function(k, v) {
						$("#seeevaluationZT article").append(
							'<div class="divtop"><h1>' + v.title +
							'</h1>'  + 
							'<h4 ></h4><h4 shijian>' + shijian +
							'</h4></div><div class="no">发起时间：' + shijian +
							'</div><div class="no">当前进度：' + state + '</div>')
					})
				})
		})
		//满意度测评
		$("#evaluationZT .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			// var title = $("#evaluationTQ .title").attr("title");
			// console.log(title)
			$("#ansevaluationZT .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationZT .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationZT textarea").val();
				var k1 = {
					"name": RssUser.Data.realname,
					"evaluationResult": satisfied,
					"opinion": opinion,
					"typeid": "3",
					"myid": RssUser.Data.myid,
					"evaluationId": key
				}
				console.log(k1)
				RssApi.Edit("supervision_evaluation").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationZT textarea").val("");
							location.href = "#evaluationZT";
						} else {
							alert("评价失败");
						}
					})
			})
		})
	}).getJson();
})

//视察
$("#evaluationSC").load(function() {
	if (arry.indexOf("evaluationSC") == "-1") {
		$("#evaluationSC ul li").eq(0).siblings().remove();
		arry.push("evaluationSC")
	} else {
		$("#evaluationSC ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "8",
		"state": "5"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		if (json.length == 0  ) {
			$('.noEvaluation').show();
		} else {
			$('.noEvaluation').hide();
		}
		$("#evaluationSC ul").mapview(json, {}, append)
		//查看
		$("#evaluationSC .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeevaluationSC article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					var attachment = v.enclosure;
					
					var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
					if ( "undefined".indexOf(attachment) != -1) {
						attachment = "无";
						attachmentDiv = '</div><div class="fj no">附件：' + attachment;
					}
					
					$("#seeevaluationSC article").append(
						'<div class="divtop"><h1 >' + v.title +
						'</h1>' +
						'<h4>方案制定人:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4>' + 
						'</div><div class="no">视察调研类别：' + v.reviewclass +
						'</div><div class="no">视察调研地点：' + v.place +
						'</div><div class="no">主任会议届次：' + v
						.directormeetingnum +
						// '</div><div class="fj no">附件：<span>' + attachment +	
						attachmentDiv + '</div>' +
						'<div>' + v.note + '</div>'
						)
				})
			})
		})

		//满意度测评
		$("#evaluationSC .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			// var title = $("#evaluationTQ .title").attr("title");
			// console.log(title)
			$("#ansevaluationSC .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationSC .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationSC textarea").val();
				var k1 = {
					"name": RssUser.Data.realname,
					"evaluationResult": satisfied,
					"opinion": opinion,
					"typeid": "8",
					"myid": RssUser.Data.myid,
					"evaluationId": key
				}
				console.log(k1)
				RssApi.Edit("supervision_evaluation").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationSC textarea").val("");
							location.href = "#evaluationSC";
						} else {
							alert("评价失败");
						}
					})
			})
		})
	}).getJson();
})

//调研
$("#evaluationDY").load(function() {
	if (arry.indexOf("evaluationDY") == "-1") {
		$("#evaluationDY ul li").eq(0).siblings().remove();
		arry.push("evaluationDY")
	} else {
		$("#evaluationDY ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		"typeid": "9",
		"state": "5"
	}).getDict()).setFlushUI(function(json, append) {
		console.log(json)
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if (json.length == 0  ) {
			$('.noEvaluation').show();
		} else {
			$('.noEvaluation').hide();
		}
		$("#evaluationDY ul").mapview(json, {}, append)
		//查看
		$("#evaluationDY .see").off().click(function() {
			var key = $(this).parent().attr("id");
			faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(
				new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
				console.log(json)
				var shijian = ""
				$("#seeevaluationDY article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}
				})
				$.each(json, function(k, v) {
					var attachment = v.enclosure;					
					var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;
					if ( "undefined".indexOf(attachment) != -1) {
						attachment = "无";
						attachmentDiv = '</div><div class="fj no">附件：' + attachment;
					}
					
					$("#seeevaluationDY article").append(
						'<div class="divtop"><h1>' + v.title +
						'</h1>'  +
						'<h4>方案制定人:' + v.initiator +
						'</h4><h4 shijian>' + shijian +
						'</h4>' +
						'</div><div class="no">视察调研类别：' + v.reviewclass +
						'</div><div class="no">视察调研地点：' + v.place +
						'</div><div class="no">主任会议届次：' + v
						.directormeetingnum +
						// '</div><div class="fj no">附件：<span>' + attachment +
						attachmentDiv + '</div>' + 
						'<div>' + v.note + '</div>'
						)
				})
			})
		})
		//满意度测评
		$("#evaluationDY .ans").off().click(function() {
			var key = $(this).parent().attr("id");
			// var title = $("#evaluationTQ .title").attr("title");
			// console.log(title)
			$("#ansevaluationDY .normalbutton").off().click(function() {
				var satisfied = $("#ansevaluationDY .marginb .form input:radio:checked")
					.val();
				var opinion = $("#ansevaluationDY textarea").val();
				var k1 = {
					"name": RssUser.Data.realname,
					"evaluationResult": satisfied,
					"opinion": opinion,
					"typeid": "8",
					"myid": RssUser.Data.myid,
					"evaluationId": key
				}
				console.log(k1)
				RssApi.Edit("supervision_evaluation").setLoading(true).keyvalue(k1)
					.keyvalue({
						"id": key
					}).getJson(function(json) {
						console.log(json)
						if (json.id) {
							alert("评价成功");
							$("#ansevaluationDY textarea").val("");
							location.href = "#evaluationDY";
						} else {
							alert("评价失败");
						}
					})
			})
		})
	}).getJson();
})

//课件
$("#courseware").load(function() {
	if (arry.indexOf("courseware") == "-1") {
		$("#courseware ul li").eq(0).siblings().remove();
		arry.push("courseware")
	} else {
		$("#courseware ul li").remove();
	}
	faqsajax = RssApi.View.List("courseware").setLoading(true).condition(new RssDict().keyvalue({
		//        "classify": "1",
		"objid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {

		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#courseware ul").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#courseware ul li").off().click(function() {
			$("#fz2").hide();
			//            location.href = "/app/infopage/notice.html";
			var key = $(this).find("[rssid]").attr("rssid");
			location.href = "#coursewareck"
			//            $("#coursewareck article")
			$("#coursewareck").find("header>h1").text();
			RssApi.Details("courseware").setLoading(true).condition(new RssDict().keyvalue({
				"id": key
			}).getDict()).getJson(function(json) {
				$("#coursewareck article").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					}
				})
				//                if(json.ico=="" || json.ico==undefined){$(".slt").hide()}else{$(".slt").show()}
				if (json.links == "" || json.links == undefined) {
					$(".wblj").hide()
				} else {
					$(".wblj").show()
				}
				if (json.enclosure == "" || json.enclosure == undefined) {
					$(".fj").hide()
				} else {
					$(".fj").show()
				}
				if (json.videosrc == "" || json.videosrc == undefined) {
					$(".sp").hide()
				} else {
					$(".sp").show()
				}
				var spa = $("#coursewareck .sp p").text();
				////console.log(spa);
				var bfa = myip + "upfile/" + spa;
				////console.log(bfa);
				var bf = document.getElementById('spbf1');
				bf.setAttribute("src", bfa);

				$(".fj p").off().click(function() {
					//                    alert("文件路径：com.rsseasy.lvzhi.file");
					var path = $(this).text();
					var dz = myip + "upfile/" + path;
					if ( dz.indexOf(".doc") != -1 ) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					}
					else if ( dz.indexOf(".pdf") != -1 ){
						var pdfh5 = new Pdfh5('.pdfjs1', {
							pdfurl: dz
						});
					}
					else {
						location.href = dz;
					}
					
				})
				//                $("#browser").click(function (ev) {
				//                    ev.preventDefault();
				//                    ev.stopPropagation();
				//                    JsAdapter.Browser("http://www.rsseasy.com").Submit();
				//                });
				var url = $("#coursewareck .wblj p").text();
				$("#coursewareck .wblj p").hide();
				$("#coursewareck .wblj a").text(url);
				$("#coursewareck .wblj a").attr("js-browser", url);

				//                $("#coursewareck .wblj p").click(function (ev) {
				//                    $(this).text();

				//                    ev.preventDefault();
				//                    ev.stopPropagation();
				//                    JsAdapter.Browser("http://tool.oschina.net/jscompress").Submit();
				//                    var res = $(this).text();
				//                    var btn = document.getElementById('btn');
				//                    btn.setAttribute("data-clipboard-text", res);
				//                    var clipboard = new ClipboardJS(btn);
				//                    clipboard.on('success', function (e) {
				////                        //////console.log(e);
				//                        $("#fz2").show();
				//                        setTimeout(function () {
				//                            $("#fz2").hide();
				//                        }, 1000);
				//                    });
				//
				//                    clipboard.on('error', function (e) {
				////                        ////console.log(e);
				//                    });
				//                })
			})
		})
	}).getJson();
})

//专题讲座
$("#lecture").load(function() {
	if (arry.indexOf("lecture") == "-1") {
		$("#lecture ul li").eq(0).siblings().remove();
		arry.push("lecture")
	} else {
		$("#lecture ul li").remove();
	}

	faqsajax = RssApi.View.List("lecture").setLoading(true).condition(new RssDict().keyvalue({
		//        "classify": "1",
		"objid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#lecture ul").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#lecture ul li").off().click(function() {
			$("#fz3").hide();
			//            location.href = "/app/infopage/notice.html";
			var key = $(this).find("[rssid]").attr("rssid");
			location.href = "#lectureck"
			$("#lectureck").find("header>h1").text();
			RssApi.Details("lecture").setLoading(true).condition(new RssDict().keyvalue({
				"id": key
			}).getDict()).getJson(function(json) {
				$("#lectureck article").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					"joinshijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					},
					"classify": function(val) {
						return dictdata.lectureclassify[val];
					}
				})
				//                if(json.ico=="" || json.ico==undefined){$(".slt").hide()}else{$(".slt").show()}
				if (json.links == "" || json.links == undefined) {
					$(".wblj").hide()
				} else {
					$(".wblj").show()
				}
				if (json.links == "" || json.links == undefined) {
					$(".zj").hide()
				} else {
					$(".zj").show()
				}
				if (json.links == "" || json.links == undefined) {
					$(".ks").hide()
				} else {
					$(".ks").show()
				}
				if (json.links == "" || json.links == undefined) {
					$(".xs").hide()
				} else {
					$(".xs").show()
				}
				if (json.enclosure == "" || json.enclosure == undefined) {
					$(".fj").hide()
				} else {
					$(".fj").show()
				}
				if (json.videosrc == "" || json.videosrc == undefined) {
					$(".sp").hide()
				} else {
					$(".sp").show()
				}
				var spa = $("#lectureck .sp p").text();
				//                ////console.log(spa);
				var bfa = myip + "upfile/" + spa;
				//                ////console.log(bfa);
				var bf = document.getElementById('spbf2');
				bf.setAttribute("src", bfa);

				$(".fj p").off().click(function() {
					//                    alert("文件路径：com.rsseasy.lvzhi.file");
					var path = $(this).text();
					var dz = myip + "upfile/" + path;
					if ( dz.indexOf(".doc") != -1 ) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					}
					else if ( dz.indexOf(".pdf") != -1 ){
						var pdfh5 = new Pdfh5('.pdfjs2', {
							pdfurl: dz
						});
					}
					else {
						location.href = dz;
					}
				})

				var url = $("#lectureck .wblj p").text();
				$("#lectureck .wblj p").hide();
				$("#lectureck .wblj a").text(url);
				$("#lectureck .wblj a").attr("js-browser", url);
				//                $(".wblj p").click(function () {
				//                    var res = $(this).text();
				//                    var btn = document.getElementById('btn3');
				//                    btn.setAttribute("data-clipboard-text", res);
				//                    var clipboard = new ClipboardJS(btn);
				//                    clipboard.on('success', function (e) {
				////                        ////console.log(e);
				//                        $("#fz3").show();
				//                        setTimeout(function () {
				//                            $("#fz3").hide();
				//                        }, 1000);
				//                    });
				//
				//                    clipboard.on('error', function (e) {
				////                        ////console.log(e);
				//                    });
				//                })
			})
		})
	}).getJson();
})

//履职参考
$("#reference").load(function() {
	if (arry.indexOf("reference") == "-1") {
		$("#reference ul li").eq(0).siblings().remove();
		arry.push("reference")
	} else {
		$("#reference ul li").remove();
	}

	faqsajax = RssApi.View.List("reference").setLoading(true).condition(new RssDict().keyvalue({
		//        "classify": "1",
		"objid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#reference ul").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#reference ul li").click(function() {
			$("#fz4").hide();
			//            location.href = "/app/infopage/notice.html";
			var key = $(this).find("[rssid]").attr("rssid");
			location.href = "#referenceck"
			$("#referenceck").find("header>h1").text();
			RssApi.Details("reference").setLoading(true).condition(new RssDict().keyvalue({
				"id": key
			}).getDict()).getJson(function(json) {
				$("#referenceck article").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					}
				})
				//                if(json.ico=="" || json.ico==undefined){$(".slt").hide()}else{$(".slt").show()}
				if (json.links == "" || json.links == undefined) {
					$(".wblj").hide()
				} else {
					$(".wblj").show()
				}
				if (json.enclosure == "" || json.enclosure == undefined) {
					$(".fj").hide()
				} else {
					$(".fj").show()
				}
				$(".fj p").off().click(function() {
					//                    alert("文件路径：com.rsseasy.lvzhi.file");
					var path = $(this).text();
					var dz = myip + "upfile/" + path;
					if ( dz.indexOf(".doc") != -1 ) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if ( dz.indexOf(".pdf") != -1 ){
						var pdfh5 = new Pdfh5('.pdfjs3', {
							pdfurl: dz
						});
					}
					else {
						location.href = dz;
					}
				})

				var url = $("#referenceck .wblj p").text();
				$("#referenceck .wblj p").hide();
				$("#referenceck .wblj a").text(url);
				$("#referenceck .wblj a").attr("js-browser", url);
				//                $(".wblj p").click(function () {
				//                    var res = $(this).text();
				//                    var btn = document.getElementById('btn4');
				//                    btn.setAttribute("data-clipboard-text", res);
				//                    var clipboard = new ClipboardJS(btn);
				//                    clipboard.on('success', function (e) {
				////                        ////console.log(e);
				//                        $("#fz4").show();
				//                        setTimeout(function () {
				//                            $("#fz4").hide();
				//                        }, 1000);
				//                    });
				//
				//                    clipboard.on('error', function (e) {
				////                        ////console.log(e);
				//                    });
				//                })
			})
		})
	}).getJson();
})

//法律法规
//$("#statute").load(function () {
//    if (arry.indexOf("statute") == "-1") {
//        $("#statute ul li").eq(0).siblings().remove();
//        arry.push("statute")
//    } else {
//        $("#statute ul li").remove();
//    }
//
//    faqsajax = RssApi.Table.List("statute").setLoading(true).setFlushUI(function (json, append) {
//        if (json.length != "10") {
//            $('.nodata').hide();
//        } else {
//            $('.nodata').show();
//        }
//        $("#statute ul").mapview(json, {
//            "shijian": function (val) {
//                return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
//            }
//        }, append)
//        $("#statute ul li").click(function () {
//            //            location.href = "/app/infopage/notice.html";
//            var key = $(this).find("[rssid]").attr("rssid");
//            location.href = "#statuteck"
//            $("#statuteck").find("header>h1").text();
//            RssApi.Details("statute").setLoading(true).condition(new RssDict().keyvalue({
//                "id": key
//            }).getDict()).getJson(function (json) {
//                $("#statuteck article").mapview(json, {
//                    "shijian": function (val) {
//                        return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
//                    }
//                })
////                if(json.ico=="" || json.ico==undefined){$(".slt").hide()}else{$(".slt").show()}
//                if(json.links=="" || json.links==undefined){$(".wblj").hide()}else{$(".wblj").show()}
//                if(json.enclosure=="" || json.enclosure==undefined){$(".fj").hide()}else{$(".fj").show()}
//                $(".fj p").click(function () {
//                    var path=$(this).text();
//                 RssDownFile.Start(myip + "upfile/"+path);
//             })
//            })
//        })
//    }).getJson();
//})
$("#statute nav>a").off("click").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
	var ind = $(this).index() + 1;
	if (arry.indexOf("statute") == "-1") {
		$("#statute ul li").eq(0).siblings().remove();
		arry.push("statute")
	} else {
		$("#statute ul li").remove();
	}

	faqsajax = RssApi.Table.List("statute").setLoading(true).condition(new RssDict().keyvalue({
		//        "classify": "1",
		"classify": ind
	}).getDict()).setFlushUI(function(json, append) {
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#statute ul").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			},
			"classify": function(val) {
				if (val == "1") {
					return "宪法";
				}
				if (val == "2") {
					return "国家法律";
				}
				if (val == "3") {
					return "相关法规";
				}
			}
		}, append)
		$("#statute ul li").click(function() {
			$("#fz5").hide();
			//            location.href = "/app/infopage/notice.html";
			var key = $(this).find("a").attr("rssid");
			//            ////console.log(key);
			location.href = "#statuteck"
			$("#statuteck").find("header>h1").text($("#statute").find(".sel").text() + "详情");
			RssApi.Table.Details("statute").setLoading(true).condition(new RssDict().keyvalue({
				"id": key
			}).getDict()).getJson(function(json) {
				$("#statuteck article").mapview(json, {
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					}
				})
				//                if(json.ico=="" || json.ico==undefined){$(".slt").hide()}else{$(".slt").show()}
				if (json.links == "" || json.links == undefined) {
					$(".wblj").hide()
				} else {
					$(".wblj").show()
				}
				if (json.enclosure == "" || json.enclosure == undefined) {
					$(".fj").hide()
				} else {
					$(".fj").show()
				}

				$(".fj p").off().click(function() {
					//                    alert("文件路径：com.rsseasy.lvzhi.file");
					var path = $(this).text();
					var dz = myip + "upfile/" + path;
					if (  dz.indexOf(".doc") != -1 ) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if (  dz.indexOf(".pdf") != -1 ){
						var pdfh5 = new Pdfh5('.pdfjs4', {
							pdfurl: dz
						});
					}
					else {
						location.href = dz;
					}
				})
				var url = $("#statuteck .wblj p").text();
				$("#statuteck .wblj p").hide();
				$("#statuteck .wblj a").text(url);
				$("#statuteck .wblj a").attr("js-browser", url);
				//                $(".wblj p").click(function () {
				//                    var res = $(this).text();
				//                    var btn = document.getElementById('btn5');
				//                    btn.setAttribute("data-clipboard-text", res);
				//                    var clipboard = new ClipboardJS(btn);
				//                    clipboard.on('success', function (e) {
				////                        ////console.log(e);
				//                        $("#fz5").show();
				//                        setTimeout(function () {
				//                            $("#fz5").hide();
				//                        }, 1000);
				//                    });
				//
				//                    clipboard.on('error', function (e) {
				////                        ////console.log(e);
				//                    });
				//                })
			})
		})
	}).getJson();
})
$('a[href="#statute"]').unbind().click(function() {
	$("#statute nav>a:first").click();
})

//交流社区、交流情况
$("#Communication").load(function() {
	if (arry.indexOf("Communication") == "-1") {
		$("#Communication ul li").eq(0).siblings().remove();
		arry.push("Communication")
	} else {
		$("#Communication ul li").remove();
	}

	faqsajax = RssApi.View.List("poll").setLoading(true).setFlushUI(function(json, append) {
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#Communication ul").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		$("#Communication ul li").click(function() {
			var key = $(this).find("[rssid]").attr("rssid");
			//            location.href = "#Communicationck"
			$("#Communicationck").find("header>h1").text();
			RssApi.View.List("poll").setLoading(true).condition(new RssDict().keyvalue({
				"id": key
			}).getDict()).getJson(function(json) {
				var shijian = "",
					type = ""
				$("#Communicationck article").mapview(json, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd");
					},
					"type": function(val) {
						return type = dictdata.gztype[val];
					}
				})
				console.log(json[0].matter)
				$('#Communicationck article').html('<div class="divtop"><h1>' + json[0]
					.title + '</h1><h4>发布者：' + json[0].realname +
					'</h4><h5>发布时间：' + shijian + '</h5><h5>工作分类：' + type +
					'</h5></div><div id="ckjy"><span class="dz">点赞：<b class="ckfont">0</b></span><span><u class="pl">评论：<b class="ckfont">0</b></u></span></div><div class="divp">' +
					json[0].matter +
					'</div><ul></ul><footer><div id="tbdz" bindattr="rssid"><img id="tbdzimg" src="img/limg/wdz.png"><span id="add-num"><em>+1</em></span></div><div id="pjevaluate"><p id="pjtext" contenteditable="true" placeholder="输入评价内容"></p></div><div><p id="evaluate">提交</p></div></footer>'
				);

				//评论条数
				RssApi.Table.List("suggest_praise").condition(new RssDict().keyvalue({
					"relationid": key,
					"myid": RssUser.Data.myid
				}).getDict()).getJson(function(date) {
					if (date.length > 0) {
						$("#tbdz").addClass('dj');
					} else {
						$("#tbdz").removeClass('dj')
					}

					RssApi.Details("s_praise_num").condition(new RssDict()
						.keyvalue({
							"relationid": key,
							//                        "type": "4"
						}).getDict()).getJson(function(num) {
						var znum = "0";
						if (num.relnum != undefined && num.relnum !=
							"") {
							znum = num.relnum
						}
						//                        ////console.log(znum);
						//                        $('.ckfont').eq(0).empty()
						$("#Communicationck .ckfont").eq(0).text(znum);
						RssApi.Details("suggest_comment_num").condition(
							new RssDict().keyvalue({
								"suggestid": key
							}).getDict()).getJson(function(sunum) {
							var snum = "0";
							if (sunum.sugnum != undefined &&
								sunum.sugnum != "") {
								snum = sunum.sugnum
							}
							$("#Communicationck .ckfont").eq(1)
								.text(snum);
							RssApi.View.List("suggest_comment")
								.keyvalue("pagesize", "100")
								.condition(new RssDict()
									.keyvalue({
										"suggestid": key
									}).getDict()).getJson(
									function(comment) {
										$("#Communicationck article>#wpj")
											.empty();
										$("#Communicationck article>ul")
											.empty();
										if (comment.length ==
											"0") {
											$("#Communicationck article>ul")
												.hide();
											$("#Communicationck article>ul")
												.before(
													'<div id="wpj">无评价</div>'
												)
										}

										$.each(comment,
											function(k, v) {
												$("#Communicationck #wpj")
													.remove();
												$("#Communicationck article>ul")
													.show();
												if (v
													.myid ==
													RssUser
													.Data
													.myid) {
													$("#Communicationck article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'<img src="img/limg/exit.png" /></li>'
														)
												} else {
													$("#Communicationck article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												}

											})
										sc();

									})
						})
					})
				})

				//点赞
				$("#Communicationck #tbdz").off("click").click(function() {
					var t = $(this);
					var zn = $("#Communicationck .ckfont").eq(0);
					var text_box = $("#add-num");
					if (t.hasClass('dj')) {
						RssApi.Delete("suggest_praise").condition(new RssDict()
							.keyvalue({
								'relationid': key,
								"myid": RssUser.Data.myid
							}).keymyid().getDict()).getJson(function(
							jsonn) {
							t.removeClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl - 1);
						});
						text_box.show().html(
							"<em class='add-animation'>-1</em>");
						$(".add-animation").removeClass("hover");
					} else {
						RssApi.Edit("suggest_praise").keymyid().keyvalue(
							'relationid', key).getJson(function(json) {
							t.addClass('dj')
							var sl = parseInt(zn.text())
							zn.text(sl + 1);
						});
						text_box.show().html(
							"<em class='add-animation'>+1</em>");
						$(".add-animation").addClass("hover");
					}
				})

				//发送评论
				$("#Communicationck #evaluate").off("click").click(function() {
					var pjtext = "<p>" + $("#pjtext").text() + "</p>"
					var pj = $("#pjtext").text();
					//                  var text_box = $("#add-num");
					if ($("#pjtext").text() != "") {
						RssApi.Table.List("mingancitype_classify").keyvalue(
							"pagesize", "10000").condition(new RssDict()
							.keyvalue({
								"state": 0
							}).getDict()).getJson(function(mgc) {
							var tf = true;
							$.each(mgc, function(k, v) {
								if (v.name != null) {
									if (pj.indexOf(v.name) >=
										0) {
										alert("发表内容包含敏感词['" + v
											.name + "']!");
										return tf = false;
									}
								}
							})
							if (tf == true) {
								RssApi.Edit("suggest_comment").keymyid()
									.keyvalue({
										'suggestid': key,
										'matter': pjtext
									}).getJson(function(json) {
										if (json.id > 0) {
											$("#Communicationck article>ul")
												.show();
											$("#Communicationck article>ul")
												.append(
													'<li PJid="' +
													json.id +
													'"><span>' +
													RssUser.Data
													.realname +
													'：</span>' +
													pjtext +
													'<img src="img/limg/exit.png" /></li>'
												)
											$("#pjtext").text("")
											$("#Communicationck article")
												.scrollTop($(
													"#Communicationck article"
												).height());
											var zn = $(
												"#Communicationck .ckfont"
											).eq(1);
											var sl = parseInt(zn
												.text())
											zn.text(sl + 1);
											$("#Communicationck #wpj")
												.remove();
											sc();
										}
									});
							}
						})
					} else {
						alert("评论不能为空！");
					}
				})
				$("#Communicationck .divp").html(json.matter)
				location.href = "#Communicationck"
			})
			//删除
			function sc() {
				$("#Communicationck ul>li>img").off("click").click(function() {
					var PJid = $(this).parent().attr("PJid");
					if (confirm("确认删除?")) {
						RssApi.Delete("suggest_comment").condition(new RssDict()
							.keyvalue({
								"id": PJid
							}).getDict()).getJson(function(json) {
							$("#Communicationck ul>li[PJid='" + PJid + "']")
								.remove();
							var zn = $("#Communicationck .ckfont").eq(1);
							var sl = parseInt(zn.text())
							zn.text(sl - 1);
							$("#Communicationck article>ul").hide();
							$("#Communicationck article>ul").before(
								'<div id="wpj">无评价</div>')
							//                            $("#Communicationck #wpj").remove();
						});

					}
					//alert("删除");
				});
			}
		})
	}).getJson();
})

//意见征询
$("#opinion nav>a").off("click").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
	var ind = $(this).index() + 1;
	if (arry.indexOf("opinion") == "-1") {
		$("#opinion ul li").eq(0).siblings().remove();
		arry.push("opinion")
	} else {
		$("#opinion ul li").remove();
	}
	if (ind == "1") {
		faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
			//        "classify": "1",
			"resume": "0",
			"consultation": "0",
			"myid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#opinion ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				}
			}, append)
			$("#opinion ul li").click(function() {
				//            location.href = "/app/infopage/notice.html";
				var key = $(this).find("a").attr("rssid");
				//                ////console.log(key);
				location.href = "#opinionckW"
				$("#opinionckW").find("header>h1").text($("#opinion").find(".sel").text() +
					"详情");
				RssApi.Details("sort").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					$("#opinionckW article").mapview(json, {
						"shijian": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						}
					})
				})
			})
		}).getJson();
	}
	if (ind == "2") {
		faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
			//        "classify": "1",
			"resume": "1",
			"myid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#opinion ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				}
			}, append)
			$("#opinion ul li").off().click(function() {
				var aa = $('#opinionckY article .fj p:first').text();
				if (!(aa == "" || aa == undefined)) {
					$('#opinionckY article .fj p:last').remove();
				}
				//            location.href = "/app/infopage/notice.html";
				var key = $(this).find("[rssid]").attr("rssid");
				//                ////console.log(key);
				location.href = "#opinionckY"
				$("#opinionckY").find("header>h1").text($("#opinion").find(".sel").text() +
					"详情");
				RssApi.Details("sort").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					$("#opinionckY article").mapview(json, {
						"shijian": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"organize": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"degree": function(val) {
							if (val == "1") {
								return "已解决";
							}
							if (val == "2") {
								return "正在解决";
							}
							if (val == "3") {
								return "列入计划解决";
							}
							if (val == "4") {
								return "因条件限制无法解决";
							}
						},
						"way": function(val) {
							if (val == "1") {
								return "书面（以邮寄方式）";
							}
							if (val == "2") {
								return "平台（上传附件）";
							}
							if (val == "3") {
								return "其他";
							}
						}
					})
					//                    $("#opinionckY article .fj")
					var dfenclosure = $("#opinionckY article .fj p").text();
					var str = dfenclosure.split(",");
					//                    ////console.log(str);
					var html = ""
					$.each(str, function(idx, value) {
						if (value != "") {
							html = "<p class='pdfjs5'>" + value + "</p>"
							$('#opinionckY article .fj').append(html);
						}
					})

					$('#opinionckY article .fj p:first').hide();
					$(".fj p").off().click(function() {
						//                        alert("文件路径：com.rsseasy.lvzhi.file");
						var path = $(this).text();
						var dz = myip + "upfile/" + path;
						if (  dz.indexOf(".doc") != -1 ) {
							var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
							xurl += encodeURIComponent(dz);
							window.open(xurl);
						} 
						else if (  dz.indexOf(".pdf") != -1 ){
							var pdfh5 = new Pdfh5('.pdfjs5', {
								pdfurl: dz
							});
						}
						else {
							location.href = dz;
						}
					})
				})
			})
		}).getJson();
	}
	if (ind == "3") {
		faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
			//        "classify": "1",
			"resume": "1",
			"consultation": "0",
			"myid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#opinion ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				}
			}, append)
			$("#opinion ul li").click(function() {
				$("#opinionckDBYJ article .bh p").remove();
				//            location.href = "/app/infopage/notice.html";
				var key = $(this).find("[rssid]").attr("rssid");
				//                ////console.log(key);
				location.href = "#opinionckDBYJ"
				$("#opinionckDBYJ").find("header>h1").text($("#opinion").find(".sel").text() +
					"详情");
				RssApi.Details("sort").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					$("#opinionckDBYJ article").mapview(json, {})
					var html = "<p>" + key + "</p>"
					$("#opinionckDBYJ article .bh").append(html);
					$("#opinionckDBYJ article .bh p").hide();
				})
			})
		}).getJson();
	}
	if (ind == "4") {
		faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict().keyvalue({
			//        "classify": "1",
			"resume": "1",
			"consultation": "1",
			"myid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#opinion ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				}
			}, append)
			$("#opinion ul li").click(function() {
				//            location.href = "/app/infopage/notice.html";
				var key = $(this).find("[rssid]").attr("rssid");
				//                ////console.log(key);
				location.href = "#opinionckYJ"
				$("#opinionckYJ").find("header>h1").text($("#opinion").find(".sel").text() +
					"详情");
				RssApi.Details("sort").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					$("#opinionckYJ article").mapview(json, {
						"shijian": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"effect": function(val) {
							return dictdata.effect[val];
						}
					})
					if (json.comments == "" || json.comments == undefined) {
						$(".bf").hide()
					} else {
						$(".bf").show()
					}
					$(".fj p").off().click(function() {
						//                        alert("文件路径：com.rsseasy.lvzhi.file");
						var path = $(this).text();
						var dz = myip + "upfile/" + path;
						if (  dz.indexOf(".doc") != -1 ) {
							var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
							xurl += encodeURIComponent(dz);
							window.open(xurl);
						}
						else if (  dz.indexOf(".pdf") != -1 ) {
							var pdfh5 = new Pdfh5('.pdfjs', {
								pdfurl: dz
							});
						}
						else {
							location.href = dz;
						}

					})
				})
			})
		}).getJson();
	}

})
$('a[href="#opinion"]').unbind().click(function() {
	$("#opinion nav>a:first").click();
})

$("#opinionckDBYJ").load(function() {
	$("#opinionckDBYJ input").val("");
	$("#opinionckDBYJ .ql-editor").text("");
})
$("#opinionckDBYJ .normalbutton").click(function() {
	var proposal = $("#opinionckDBYJ .divtop .bh>p").text();
	var companyidlist = $("#opinionckDBYJ .divtop .cb>h4").text();
	var sf = $("#opinionckDBYJ .sf select").val();
	var rw = $("#opinionckDBYJ .rw select").val();
	var title = Date.parse(new Date($("#opinionckDBYJ input").val()));
	var textarea = $("#opinionckDBYJ .ql-editor").html();
	var sj = parseInt(title / 1000).toString();
	var aa = companyidlist.split(",");
	if (textarea == "" || textarea == "<p><br></p>") {
		alert("请填写内容");
	} else {
		RssApi.View.List("suggest_company").setLoading(true).condition(new RssDict().keyvalue({
			"type": 2,
			"suggestid": proposal
		}).getDict()).getJson(function(json) {
			//        ////console.log(json);
			if (sj.length != 10) {
				alert("请输入有效时间");
			} else {
				var ss = 0;
				$.each(json, function(k, v) {
					//                    ////console.log(v.companyid);
					RssApi.Edit("opinion").setLoading(true).keyvalue({
						"reply": sf,
						"effect": rw,
						"proposal": proposal,
						"replyshijian": sj,
						"opinion": textarea,
						"companyid": v.companyid,
						"myid": RssUser.Data.myid
					}).getJson(function(jsonsa) {
						ss++;
					})
				})
				var my = 0;
				$.each(json, function(k, v) {
					my = v.myid;
				})
				RssApi.Edit("suggest").setLoading(true).keyvalue({
					"consultation": 1,
					"id": proposal,
					"myid": my
				}).getJson(function(jsonas) {})
				if (ss != json.length) {
					alert("提交成功");
					//                    $("#opinionckDBYJ article ul>li input").val("");
					//                    $("#opinionckDBYJ article textarea").val("");
					$("#opinion nav>a:last").click();
					location.href = "#opinion";
				}
			}
		});
	}
})

//联名意见征询
$("#Ajoint nav>a").off("click").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
	var ind = $(this).index() + 1;
	if (arry.indexOf("Ajoint") == "-1") {
		$("#Ajoint ul li").eq(0).siblings().remove();
		arry.push("Ajoint")
	} else {
		$("#Ajoint ul li").remove();
	}
	if (ind == "1") {
		faqsajax = RssApi.View.List("sortuser").setLoading(true).condition(new RssDict().keyvalue({
			"resume": "1",
			"userid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#Ajoint ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				},
				"resumetype": function(val) {
					if (val == "1") {
						return "已填写意见";
					} else {
						return "未填写意见";
					}
				}
			}, append)
			$("#Ajoint ul li").off().click(function() {
				$("#AjointckY article .qt").remove();
				var aa = $('#AjointckY article .fj p:first').text();
				if (!(aa == "" || aa == undefined)) {
					$('#AjointckY article .fj p:last').remove();
				}
				var key = $(this).find("[rssid]").attr("rssid");
				location.href = "#AjointckY"
				$("#AjointckY").find("header>h1").text($("#Ajoint").find(".sel").text() + "详情");
				RssApi.Details("sortuser").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					$("#AjointckY article").mapview(json, {
						"shijian": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"organize": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"degree": function(val) {
							if (val == "1") {
								return "已解决";
							}
							if (val == "2") {
								return "正在解决";
							}
							if (val == "3") {
								return "列入计划解决";
							}
							if (val == "4") {
								return "因条件限制无法解决";
							}
						},
						"way": function(val) {
							if (val == "1") {
								return "书面（以邮寄方式）";
							}
							if (val == "2") {
								return "平台（上传附件）";
							}
							if (val == "3") {
								return "其他";
							}
						}
					})
					//                    $("#opinionckY article .fj")
					var dfenclosure = $("#AjointckY article .fj p").text();
					var str = dfenclosure.split(",");
					//                    ////console.log(str);
					var html = ""
					$.each(str, function(idx, value) {
						if (value != "") {
							html = "<p class='pdfjs21'>" + value + "</p>"
							$('#AjointckY article .fj').append(html);
						}
					})
					RssApi.View.List("suggestcomments").keyvalue("pagesize", "10000")
						.condition(new RssDict().keyvalue({
							"suggestid": key,
							"resume": "1",
							"resumetype": "1",
							"userid": RssUser.Data.myid
						}).getDict()).getJson(function(lmr) {
							$.each(lmr, function(k, v) {
								$("#AjointckY article").append(
									'<div class="qt"><b>其他代表意见</b><br><p>' +
									v.comments + '</p></div>');
							})
						})

					$('#AjointckY article .fj p:first').hide();
					$(".fj p").off().click(function() {
						var path = $(this).text();
						var dz = myip + "upfile/" + path;
						if (  dz.indexOf(".doc") != -1 ) {
							var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
							xurl += encodeURIComponent(dz);
							window.open(xurl);
						} 
						else if (  dz.indexOf(".pdf") != -1 ){
							var pdfh5 = new Pdfh5('.pdfjs21', {
								pdfurl: dz
							});
						}
						else {
							location.href = dz;
						}
					})
				})
			})
		}).getJson();
	}
	if (ind == "2") {
		faqsajax = RssApi.View.List("sortuser").setLoading(true).condition(new RssDict().keyvalue({
			//        "classify": "1",
			"resume": "1",
			"resumetype": "0",
			"userid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#Ajoint ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				},
				"resumetype": function(val) {
					if (val == "1") {
						return "已填写意见";
					} else {
						return "未填写意见";
					}
				}
			}, append)
			$("#Ajoint ul li").click(function() {
				$("#AjointkDBYJ article .bh p").remove();
				//            location.href = "/app/infopage/notice.html";
				var key = $(this).find("[rssid]").attr("rssid");
				//                ////console.log(key);
				location.href = "#AjointkDBYJ"
				$("#AjointkDBYJ").find("header>h1").text($("#Ajoint").find(".sel").text() +
					"详情");
				RssApi.Details("sort").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {
					$("#AjointkDBYJ article").mapview(json, {})
					var html = "<p>" + key + "</p>"
					$("#AjointkDBYJ article .bh").append(html);
					$("#AjointkDBYJ article .bh p").hide();
				})
			})
		}).getJson();
	}
	if (ind == "3") {
		faqsajax = RssApi.View.List("sortuser").setLoading(true).condition(new RssDict().keyvalue({
			//        "classify": "1",
			"resume": "1",
			"resumetype": "1",
			"userid": RssUser.Data.myid
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			$("#Ajoint ul").mapview(json, {
				"shijian": function(val) {
					return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
				},
				"resumetype": function(val) {
					if (val == "1") {
						return "";
					} else {
						return "未填写意见";
					}
				}
			}, append)
			$("#Ajoint ul li").click(function() {
				$("#AjointckYJ article .bf").remove()
				//            location.href = "/app/infopage/notice.html";
				var key = $(this).find("[rssid]").attr("rssid");
				//                ////console.log(key);
				location.href = "#AjointckYJ"
				$("#AjointckYJ").find("header>h1").text($("#Ajoint").find(".sel").text() +
					"详情");
				RssApi.Details("sortuser").setLoading(true).condition(new RssDict().keyvalue({
					"id": key
				}).getDict()).getJson(function(json) {

					$("#AjointckYJ article").mapview(json, {
						"shijian": function(val) {
							return new Date(parseInt(val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"effect": function(val) {
							return dictdata.effect[val];
						}
					})
					RssApi.View.List("suggestcomments").keyvalue().condition(
						new RssDict().keyvalue({
							"suggestid": key,
							"resume": "1",
							"resumetype": "1",
							"userid": RssUser.Data.myid
						}).getDict()).getJson(function(lmra) {
						$.each(lmra, function(k, v) {
							$("#AjointckYJ article").append(
								'<div class="bf"><b>' + v.realname +
								' &nbsp;&nbsp;代表意见</b><br><p>' +
								v.comments +
								'</p></div><div class="bf"><b>满意度</b><br><p>' +
								dictdata.effect[v.effect] +
								'</p></div>');
						})
					})

				})
			})
		}).getJson();
	}

})
$('a[href="#Ajoint"]').unbind().click(function() {
	$("#Ajoint nav>a:first").click();
})

$("#AjointkDBYJ").load(function() {
	$("#AjointkDBYJ input").val("");
	//    $("#AjointkDBYJ textarea").val("");
	$("#AjointkDBYJ .ql-editor").text("");
})
$("#AjointkDBYJ .normalbutton").click(function() {
	var proposal = $("#AjointkDBYJ .divtop .bh>p").text();
	var companyidlist = $("#AjointkDBYJ .divtop .cb>h4").text();
	var sf = $("#AjointkDBYJ .sf select").val();
	var rw = $("#AjointkDBYJ .rw select").val();
	var title = Date.parse(new Date($("#AjointkDBYJ input").val()));
	var textarea = $("#AjointkDBYJ .ql-editor").html();
	var sj = parseInt(title / 1000).toString();
	var aa = companyidlist.split(",");
	if (textarea == "" || textarea == "<p><br></p>") {
		alert("请填写内容");
	} else {
		RssApi.View.List("suggest_company").setLoading(true).condition(new RssDict().keyvalue({
			"type": 2,
			"suggestid": proposal
		}).getDict()).getJson(function(json) {
			//        ////console.log(json);
			if (sj.length != 10) {
				alert("请输入有效时间");
			} else {
				var ss = 0;
				$.each(json, function(k, v) {
					//                    ////console.log(v.companyid);
					RssApi.Edit("suggestcomments").setLoading(true).keyvalue({
						"suggestid": proposal,
						"effect": rw,
						"replyshijian": sj,
						"comments": textarea,
						"userid": RssUser.Data.myid,
						"myid": RssUser.Data.myid
					}).getJson(function(jsonst) {
						ss++;
					})
					RssApi.Table.List("secondeduser").condition(new RssDict().keyvalue({
						"suggestid": proposal,
						"userid": RssUser.Data.myid
					}).getDict()).getJson(function(sr) {
						var idd = 0;
						$.each(sr, function(kk, vv) {
							idd = vv.id;
						})
						RssApi.Edit("secondeduser").setLoading(true).keyvalue({
							"resumetype": 1,
							"myid": RssUser.Data.myid,
							"id": idd
						}).getJson(function(json) {})
					})
				})

				if (ss != json.length) {
					alert("提交成功");
					//                    $("#AjointkDBYJ article ul>li input").val("");
					//                    $("#AjointkDBYJ article textarea").val("");
					$("#Ajoint nav>a:last").click();
					location.href = "#Ajoint";
				}
			}
		});
	}
})

//本次会议建议议案查询
$("#newsuggest").load(function() {
	$("#newsuggest .search button").off("click").click(function() {
		var key = $("#newsuggest .search input").val();
		var likeall = {};
		if (key == undefined || key == "") {

		} else {
			likeall = {
				'title': "{likeall~" + key + "}"
			};
		}
		if (arry.indexOf("newsuggest") == "-1") {
			$("#newsuggest ul li").eq(0).siblings().remove();
			arry.push("newsuggest")
		} else {
			$("#newsuggest ul li").remove();
		}
		RssApi.Details("sugsessnum1").condition(new RssDict().keyvalue({
			"draft": "2",
			"sessionid": "25"
		}).getDict()).getJson(function(json) {
			var num = 0;
			if (json.sessionnum) {
				num = json.sessionnum;
			}

			$("#newsuggest .monifooter").text("共" + num + "条信息");
			faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
				.keyvalue({
					"draft": "2",
					"sessionid": "25"
				}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
					
				  mapviewFillData ( "#newsuggest ul" , json , append );
				// if (json.length != "10") {
				// 	$('.nodata').hide();
				// } else {
				// 	$('.nodata').show();
				// }
				// $("#newsuggest ul").mapview(json, {
				// 	"registertype": function(val) {
				// 		var registertype = dictdata.registertype[val]
				// 		return registertype;
				// 	},
				// 	"examination": function(val) {
				// 		if (val == "1") {
				// 			return examination = "未审查";
				// 		} else if (val == "2") {
				// 			return examination = "已审查";
				// 		} else if (val == "3") {
				// 			return examination = "置回";
				// 		} else if (val == "4") {
				// 			return examination = "待审查";
				// 		} else if (val == "5") {
				// 			return examination = "乡镇已审查";
				// 		}
				// 	},
				// 	"lwstate": function(val) {
				// 		if (val == "1") {
				// 			return lwstate = "建议";
				// 		} else if (val == "2") {
				// 			return lwstate = "议案";
				// 		} else if (val == "3") {
				// 			return lwstate = "批评";
				// 		} else if (val == "4") {
				// 			return lwstate = "意见";
				// 		} else if (val == "5") {
				// 			return lwstate = "质询";
				// 		}
				// 	},
				// }, append)

				//查看
				$("#newsuggest .see").off().click(function() {
					$('#seesuggest article .no1').remove();
					var key = $(this).parent().attr("sortid");
					
					var reject = 0 ;
					lwstate =  1 ;
					var obj = "seesuggest" ;
					viewSuggestDetail( obj ,reject , lwstate ,key );
					// RssApi.View.List("sort").setLoading(true).condition(
					// 	new RssDict().keyvalue({
					// 		"sortid": key
					// 	}).getDict()).getJson(function(json) {
					// 	var shijian = "",
					// 		level = ""
					// 	$("#seesuggest article").mapview(json, {
					// 		"shijian": function(val) {
					// 			return shijian = new Date(
					// 				parseInt(val) * 1000
					// 			).toString(
					// 				"yyyy-MM-dd hh:mm");
					// 		},
					// 		"level": function(val) {
					// 			return level = dictdata
					// 				.circles[val];
					// 		}
					// 	})
					// 	$.each(json, function(k, v) {
					// 		$("#seesuggest article").append(
					// 			'<div class="divtop"><h1 >' +
					// 			v.sessionname +
					// 			'</h1><h2>[第' + v.realid +
					// 			'号]</h2><h3>' + v.title +
					// 			'</h3><h4 >提出者:' + v
					// 			.realname +
					// 			'</h4><h4 shijian>' +
					// 			shijian +
					// 			'</h4></div><div class="divp">' +
					// 			v.matter +
					// 			'</div><div class="no"  >会议次数：' +
					// 			v.csname +
					// 			'</div><div class="no"  >层次：' +
					// 			level +
					// 			'</div><div class="no">：' +
					// 			v.scname +
					// 			'</div><div class="no fj">附件：<span>' +
					// 			v.enclosure + '<span></div>'
					// 		)
					// 	})
					// 	RssApi.View.List("second_user").setLoading(true)
					// 		.condition(new RssDict().keyvalue({
					// 			"suggestid": key
					// 		}).keyvalue().getDict()).getJson(function(
					// 			lm) {
					// 			var lmr = ""
					// 			$.each(lm, function(k, v) {
					// 				lmr += v.realname + ",";
					// 			})
					// 			$('#seesuggest article .fj').before(
					// 				'<div class="no1">联名代表：' +
					// 				lmr + '</div>');
					// 		})
					// 	var dfenclosure = $(
					// 		"#seesuggest article .fj span").text();
					// 	var str = dfenclosure.split(",");
					// 	////console.log(str);
					// 	var html = ""
					// 	$.each(str, function(idx, value) {
					// 		if (value != "") {
					// 			html = "<p class='pdfjs13'>" +
					// 				value + "</p>"
					// 			$('#seesuggest article .fj')
					// 				.append(html);
					// 		}
					// 	})
					// 	$('#seesuggest article  .fj span').hide();
					// 	$(".fj p").off().click(function() {
					// 		//                                alert("文件路径：com.rsseasy.lvzhi.file");
					// 		var path = $(this).text();
					// 		var dz = myip + "upfile/" + path;
					// 		var pdfh5 = new Pdfh5('.pdfjs13', {
					// 			pdfurl: dz
					// 		});
					// 	})
					// 	//                        $("#seesuggest .divp").html(json[0].matter)
					// })
				})

				//办复信息
				$("#newsuggest .ans").off("click").click(function() {
					var key = $(this).parent().attr("sortid");
					location.href = "#anssuggest"
					//                    $("#anssuggest").find("header>h1").text($("#opinion").find(".sel").text() + "详情");
					RssApi.View.List("sort").setLoading(true).condition(
						new RssDict().keyvalue({
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
									return shijian =
										new Date(parseInt(
											val) * 1000)
										.toString(
											"yyyy-MM-dd");
								},
								"organize": function(val) {
									return organize =
										new Date(parseInt(
											val) * 1000)
										.toString(
											"yyyy-MM-dd");
								},
								"degree": function(val) {
									if (val == "1") {
										return degree =
											"已解决";
									}
									if (val == "2") {
										return degree =
											"正在解决";
									}
									if (val == "3") {
										return degree =
											"列入计划解决";
									}
									if (val == "4") {
										return degree =
											"因条件限制无法解决";
									}
								},
								"way": function(val) {
									if (val == "1") {
										return way =
											"书面（以邮寄方式）";
									}
									if (val == "2") {
										return way =
											"平台（上传附件）";
									}
									if (val == "3") {
										return way = "其他";
									}
								}
							})
							$.each(json, function(k, v) {
								$("#anssuggest article").append(
									'<div class="divtop"><h1>' +
									v.title +
									'</h1><h4>发布者：' + v
									.realname +
									'</h4><h4>发布时间：' +
									shijian +
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
							var dfenclosure = $(
									"#anssuggest article .pdfjs6")
								.text();
							var str = dfenclosure.split(",");
							////console.log(str);
							var html = ""
							$.each(str, function(idx, value) {
								if (value != "") {
									html =
										"<p class='pdfjs20'>" +
										value + "</p>"
									$('#anssuggest article .fj')
										.append(html);
								}
							})
							$('#anssuggest article .pdfjs6').hide();
							$(".fj p").off().click(function() {
								//                                alert("文件路径：com.rsseasy.lvzhi.file");
								var path = $(this).text();
								var dz = myip + "upfile/" +
									path;
								if (  dz.indexOf(".doc") != -1 ) {
									var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
									xurl += encodeURIComponent(dz);
									window.open(xurl);
								} 
								else if (  dz.indexOf(".pdf") != -1 ){
									var pdfh5 = new Pdfh5(
										'.pdfjs20', {
											pdfurl: dz
										});
								}
								else {
									location.href = dz;
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
				// if (json.length == "0") {
				// 	alert("未找到查询目标")
				// }
			}).getJson();
		})
	})
	if ($("#newsuggest .search input").val() == "") {
		$("#newsuggest .search button").click();
	}
})
var ceshi1 = "1";

//历届会议议案建议查询
$("#oldsuggest").load(function() {
	var session = {},
	sid = "0";
	$("#oldsuggest ul li").eq(0).siblings().remove();
	RssApi.Table.List("session_classify").condition(new RssDict().keyvalue({
		"state": "1"
	}).getDict()).getJson(function(json) {
		$.each(json, function(k, v) {
			session[v.id] = v.name
			$("#oldsuggest [sessionid]").attr("relationid", v.id)
			$("#oldsuggest [sessionid]").text(v.name)
		})
		$("#oldsuggest [sessionid]").off("click").click(function() {
			zzc6($(this), session);
		})
		if ($("#oldsuggest .search input").val() == "") {
			$("#oldsuggest .search button").click();
		}
	})
	$("#oldsuggest .search button").off("click").click(function() {
		var key = $("#oldsuggest .search input").val();
		var likeall = {};
		if (key == undefined || key == "") {

		} else {
			likeall = {
				'title': "{likeall~" + key + "}"
			};
		}
		var sessionid = $("#oldsuggest [sessionid]").attr("relationid");
		if (arry.indexOf("oldsuggest") == "-1") {
			$("#oldsuggest ul li").eq(0).siblings().remove();
			arry.push("oldsuggest")
		} else {
			$("#oldsuggest ul li").remove();
		}
		RssApi.Details("sugsessnum1").condition(new RssDict().keyvalue({
			"draft": "2",
			"sessionid": sessionid
		}).getDict()).getJson(function(data) {
			var num = 0;
			if (data.sessionnum) {
				num = data.sessionnum;
			}
			$("#oldsuggest .monifooter").text("共" + num + "条信息");
			faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "300").condition(new RssDict()
				.keyvalue({
					"draft": "2",
					"sessionid": sessionid
				}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
					mapviewFillData ( "#oldsuggest ul" , json , append );
				// if (json.length < 10 ) {
				// 	$('.nodata').hide();
				// } else {
				// 	$('.nodata').show();
				// }
				// if (json.length > 0  ) {
				// 	$('.nosolutions').hide();
				// } else {
				// 	$('.nosolutions').show();
				// }
				
				
				// $("#oldsuggest ul").mapview(json, {
				// 	"registertype": function(val) {
				// 		var registertype = dictdata.registertype[val]
				// 		return registertype;
				// 	},
				// 	"examination": function(val) {
				// 		if (val == "1") {
				// 			return examination = "未审查";
				// 		} else if (val == "2") {
				// 			return examination = "已审查";
				// 		} else if (val == "3") {
				// 			return examination = "置回";
				// 		} else if (val == "4") {
				// 			return examination = "待审查";
				// 		} else if (val == "5") {
				// 			return examination = "乡镇已审查";
				// 		}
				// 	},
				// 	"lwstate": function(val) {
				// 		if (val == "1") {
				// 			return lwstate = "建议";
				// 		} else if (val == "2") {
				// 			return lwstate = "议案";
				// 		} else if (val == "3") {
				// 			return lwstate = "批评";
				// 		} else if (val == "4") {
				// 			return lwstate = "意见";
				// 		} else if (val == "5") {
				// 			return lwstate = "质询";
				// 		}
				// 	},
				// }, append)
				//查看
				$("#oldsuggest .see").off().click(function() {
					var key = $(this).parent().attr("sortid");
					
					var reject = 0 ;
					lwstate =  1 ;
					var obj = "seesuggest" ;
					viewSuggestDetail( obj, reject , lwstate ,key );
					
					// $('#seesuggest article .no1').remove();
					// RssApi.View.List("sort").setLoading(true).condition(
					// 	new RssDict().keyvalue({
					// 		"sortid": key
					// 	}).getDict()).getJson(function(json) {
					// 	var shijian = "",
					// 		level = ""
					// 	$("#seesuggest article").mapview(json, {
					// 		"shijian": function(val) {
					// 			return shijian = new Date(
					// 				parseInt(val) * 1000
					// 			).toString(
					// 				"yyyy-MM-dd hh:mm");
					// 		},
					// 		"level": function(val) {
					// 			return level = dictdata
					// 				.circles[val];
					// 		}
					// 	})
					// 	$.each(json, function(k, v) {
					// 		$("#seesuggest article").append(
					// 			'<div class="divtop"><h1 >' +
					// 			v.sessionname +
					// 			'</h1><h2>[第' + v.realid +
					// 			'号]</h2><h3>' + v.title +
					// 			'</h3><h4 >提出者:' + v
					// 			.realname +
					// 			'</h4><h4 shijian>' +
					// 			shijian +
					// 			'</h4></div><div class="divp">' +
					// 			v.matter +
					// 			'</div><div class="no"  >会议次数：' +
					// 			v.csname +
					// 			'</div><div class="no"  >层次：' +
					// 			level +
					// 			'</div><div class="no">：' +
					// 			v.scname +
					// 			'</div><div class="no fj">附件：<span>' +
					// 			v.enclosure + '<span></div>'
					// 		)
					// 	})
					// 	RssApi.View.List("second_user").setLoading(true)
					// 		.condition(new RssDict().keyvalue({
					// 			"suggestid": key
					// 		}).keyvalue().getDict()).getJson(function(
					// 			lm) {
					// 			var lmr = ""
					// 			$.each(lm, function(k, v) {
					// 				lmr += v.realname + ",";
					// 			})
					// 			console.log(lmr);
					// 			$('#seesuggest article .fj').before(
					// 				'<div class="no1">联名代表：' +
					// 				lmr + '</div>');
					// 		})
					// 	var dfenclosure = $(
					// 		"#seesuggest article .fj span").text();
					// 	var str = dfenclosure.split(",");
					// 	////console.log(str);
					// 	var html = ""
					// 	$.each(str, function(idx, value) {
					// 		if (value != "") {
					// 			html = "<p class='pdfjs12'>" +
					// 				value + "</p>"
					// 			$('#seesuggest article .fj')
					// 				.append(html);
					// 		}
					// 	})
					// 	$('#seesuggest article  .fj span').hide();
					// 	$(".fj p").off().click(function() {
					// 		//                                alert("文件路径：com.rsseasy.lvzhi.file");
					// 		var path = $(this).text();
					// 		var dz = myip + "upfile/" + path;
					// 		var pdfh5 = new Pdfh5('.pdfjs12', {
					// 			pdfurl: dz
					// 		});
					// 	})
					// 	//                        $("#seesuggest .divp").html(json[0].matter)
					// })
				})

				//办复信息
				$("#oldsuggest .ans").off("click").click(function() {
					var key = $(this).parent().attr("sortid");
					location.href = "#anssuggest"
					//                    $("#anssuggest").find("header>h1").text($("#opinion").find(".sel").text() + "详情");
					RssApi.View.List("sort").setLoading(true).condition(
						new RssDict().keyvalue({
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
									return shijian =
										new Date(parseInt(
											val) * 1000)
										.toString(
											"yyyy-MM-dd");
								},
								"organize": function(val) {
									return organize =
										new Date(parseInt(
											val) * 1000)
										.toString(
											"yyyy-MM-dd");
								},
								"degree": function(val) {
									if (val == "1") {
										return degree =
											"已解决";
									}
									if (val == "2") {
										return degree =
											"正在解决";
									}
									if (val == "3") {
										return degree =
											"列入计划解决";
									}
									if (val == "4") {
										return degree =
											"因条件限制无法解决";
									}
								},
								"way": function(val) {
									if (val == "1") {
										return way =
											"书面（以邮寄方式）";
									}
									if (val == "2") {
										return way =
											"平台（上传附件）";
									}
									if (val == "3") {
										return way = "其他";
									}
								}
							})
							$.each(json, function(k, v) {
								$("#anssuggest article").append(
									'<div class="divtop"><h1>' +
									v.title +
									'</h1><h4>发布者：' + v
									.realname +
									'</h4><h4>发布时间：' +
									shijian +
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
							var dfenclosure = $(
									"#anssuggest article .pdfjs6")
								.text();
							var str = dfenclosure.split(",");
							////console.log(str);
							var html = ""
							$.each(str, function(idx, value) {
								if (value != "") {
									html =
										"<p class='pdfjs21'>" +
										value + "</p>"
									$('#anssuggest article .fj')
										.append(html);
								}
							})
							$('#anssuggest article .pdfjs6').hide();
							$(".fj p").off().click(function() {
								//                                alert("文件路径：com.rsseasy.lvzhi.file");
								var path = $(this).text();
								var dz = myip + "upfile/" +
									path;
								if (  dz.indexOf(".doc") != -1 ) {
									var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
									xurl += encodeURIComponent(dz);
									window.open(xurl);
								} 
								else if (  dz.indexOf(".pdf") != -1 ){
									var pdfh5 = new Pdfh5(
										'.pdfjs21', {
											pdfurl: dz
										});
								}
								else {
									location.href = dz;
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
				if (json.length == "0") {
					// alert("未找到查询目标")
				}
			}).getJson();
		})
	})


	//    })
})
//建议议案
$("#suggestsubYA").load(function() {
	var session = {},
		sid = "0",
		meetingnum = {},
		reviewclass = {},
		circless = [],
		isdelegate = "1",
		mission = {};
	RssApi.Table.List("session_classify").condition(new RssDict().keyvalue({
		"state": "1"
	}).getDict()).getJson(function(json) {
		$.each(json, function(k, v) {
			session[v.id] = v.name
			$("#suggestsubYA [sessionid]").attr("relationid", v.id)
			$("#suggestsubYA [sessionid]").text(v.name)
		})
		$("#suggestsubYA [sessionid]").off("click").click(function() {
			zzc($(this), session);
		})
	})
	RssApi.Table.List("companytypeee_classify").keyvalue("pagesize", "30").condition(new RssDict().keyvalue({}).getDict()).getJson(
		function(json) {
			$.each(json, function(k, v) {
				meetingnum[v.id] = v.name
				$("#suggestsubYA [meetingnum]").attr("relationid", v.id)
				$("#suggestsubYA [meetingnum]").text(v.name)
			})
			$("#suggestsubYA [meetingnum]").off("click").click(function() {
				zzc($(this), meetingnum);
			})
		})
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(json) {
		var aa = (json[0].circleslist).split(",");
		isdelegate = json[0].isdelegate + "";
		console.log(aa)
		var cnt = 0;
		$.each(aa, function(k, v) {
			if (v != "") {
				console.log(k + ":" + v)
				circless.push(dictdata["circles"][v])
				$("#suggestsubYA [circless]").attr("relationid", v)
				$("#suggestsubYA [circless]").text(circless)
				cnt ++ ;
			}
			
		})
		
		if ( cnt == 0 ){
		circless.push(dictdata["circles"][1])
		$("#suggestsubYA [circless]").attr("relationid", 1)
		$("#suggestsubYA [circless]").text(circless)	
		}
		$("#suggestsubYA [circless]").off("click").click(function() {
			zzc($(this), circless);
		})
	})
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#suggestsubYA [reviewclass]").attr("relationid", v.id)
			$("#suggestsubYA [reviewclass]").text(v.name)
		})
		$("#suggestsubYA [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})
	$("#suggestsubYA .lmr").off().click(function() {
		var span = $("#suggestsubYA .span").text().split(",");
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "100").condition(
			new RssDict().keyvalue({
				// "mission": missions,
				// "myid": "{notin~" + RssUser.Data.myid + "}"
				"isdelegate": 1
			}).getDict()).setFlushUI(function(jsona, append) {
			//            $("#dbt article ul").mapview(jsona, {
			//                
			//            }, append)
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < span.length; i++) {
					if (v.myid == span[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="myid"  myid="' + v.myid +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.telphone +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}

			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="myid"]:checked').each(function() {
					id_array.push($(this).attr("myid")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestr = name_array.join(',');
				$("#suggestsubYA span").text(idstr)
				$("#suggestsubYA [mission]").val(namestr);
				location.href = "#suggestsubYA"
			});
		}).getJson();
	})
	//    $("#suggestsubYA .fj .fja").text("");
	//    $("#suggestsubYA article .fj .fja").text("");
	//    $("#suggestsubYA article .marginb input").val("");
	//    $("#suggestsubYA article textarea").val("");
	//    $("#suggestsubYA article .lmr span").text("");

	//loadmeeting();//added by jackie//只需一次载入meeting即可，不需要重复载入
	$("#suggestsubYA .normalbutton").off().click(function() {
		
		////判断如果不是代表就提示没有权限 2022-06-13
		if ( isdelegate.indexOf("1") == -1 ) {
			alert("您没有权限");
			return;
		}
		
		var title = $("#suggestsubYA .marginb input").val();
		
		// var matter = $("#suggestsubYA .ql-editor").val();
		var matter = $("#suggestsubYA .ql-editor").html();
		
	
		
		
		if ( isEmpty(title) ) {
			alert("请添加标题")
			return false;
		}
		if ( isEmpty(matter) || ( "<p><br></p>".indexOf( matter ) != -1 ) ) {
			alert("请添加内容")
			return false;
		}
		
		
		var zhi = ($("#suggestsubYA .span").text()).split(",");
		if (zhi.length < 9) {
			alert("附议代表人数得大于等于10人！");
			//            alert(zhi.length);
		} else {
			//            alert(zhi.length);
			var k1 = {}
			//        console.log($("#suggestsub span").text());
			k1["sessionid"] = $("#suggestsubYA [sessionid]").attr("relationid");
			k1["meetingnum"] = $("#suggestsubYA [meetingnum]").attr("relationid");
			k1["level"] = $("#suggestsubYA [circless]").text();

			k1["reviewclass"] = $("#suggestsubYA [reviewclass]").attr("relationid");
			//        k1["mission"] = $("#suggestsubYA .lmr span").text();
			k1["title"] = $("#suggestsubYA .marginb input").val();
			k1["matter"] = $("#suggestsubYA .ql-editor").html();
			k1["myid"] = RssUser.Data.myid;
			k1["draft"] = "2";
			k1["reviewopinion"] = "0";
			k1["permission"] = "0";
			k1["sugyears"] = "0";
			k1["seconded"] = "0";
			k1["sugformation"] = "0";
			// alert("flowtype_ysw11::" + flowtype_ysw);
			k1["isysw"] = flowtype_ysw; //测试，还要加是否会议期间的判断//added by jackie
			var date = new Date;
			var year = date.getFullYear();
			var mydate = year.toString();
			k1["year"] = mydate;
			k1["ProposedBill"] = Date.parse(new Date()) / 1000;
			k1["shijian"] = Date.parse(new Date()) / 1000;
			k1["enclosure"] = $("#suggestsubYA .fja").text() + ",";
			console.log(Date.parse(new Date()) / 1000);
			var sj = Date.parse(new Date()) / 1000;
			var userid = ($("#suggestsubYA .span").text()).split(",");
			k1["numpeople"] = userid.length;
			console.log(userid);
			if (k1["level"] == "乡镇人大代表") {
				k1["level"] = 0;
			} else {
				k1["level"] = 1;
			}

			console.log(k1["level"]);
			// if (k1["title"] != "" && k1["matter"] != "") {
			if ( !isEmpty( k1["title"] ) && !isEmpty( k1["matter"] ) ) {	
				
				RssApi.Edit("suggest").setLoading(true).keyvalue(k1).keyvalue({
					"lwstate": "2"
				}).getJson(function(jsons) {
					var sortid = jsons.id;
					console.log(sortid);
					RssApi.View.Details("sort_num").condition(new RssDict().keyvalue({
						"type": "2"
					}).getDict()).getJson(function(e) {
						var numzhi = "";
						//                    console.log(e.length + "-----e");
						if (e.length == "0" || e.length == undefined) {
							numzhi = 1;
						} else {
							numzhi = parseInt(e.num) + 1;
						}
						console.log(numzhi);
						RssApi.Edit("sort").keyvalue({
							"sortid": sortid,
							"realid": sortid,
							"type": "2",
							"myid": 0
						}).getJson(function(jsonaa) {
							RssApi.Edit("suggestscr").setLoading(true)
								.keyvalue({
									"suggestid": sortid,
									"userid": missions,
									"myid": 0
								}).getJson(function(aa) {
									for (var i = 0; i < userid
										.length; i++) {
										RssApi.Edit("secondeduser")
											.setLoading(true).keyvalue({
												"suggestid": sortid,
												"userid": userid[i],
												"myid": RssUser.Data
													.myid,
											}).getJson(function(jsonnn) {})
									}
								})

							if (jsonaa.id) {
								alert("提交成功")
								$("#suggestsubYA article li input").val("");
								$("#suggestsubYA article .fj label input").val(
									"");
								$("#suggestsubYA article .span").text("");
								$("#suggestsubYA .fj .fja").text("");
								$("#suggestsubYA .ql-editor").text("");
								$("#suggestsubYA [mission]").val("");
								location.href = "#suggest"
							} else {
								alert("提交失败")
							}
						})
					})
				})
			} else {
				alert("标题和内容不能为空");
			}
		}
	})
})
//$("#suggestsubYA .normalbutton").click(function () {
//    alert("ddd");
//    var k1 = {},
//            k2 = {};
//    $("#suggestsubYA input[type='checkbox']").each(function () {
//        if ($(this).is(":checked")) {
//            $(this).val("1")
//        } else {
//            $(this).val("2")
//        }
//    });
//    $("#suggestsubYA input").each(function () {
//        var t = $(this).attr("name");
//        k1[t] = $(this).val();
//    })
//    k1["matter"] = $("#suggestsubYA textarea").val();
//    k1["myid"] = RssUser.Data.myid;
//    k1["draft"] = "2";
//    RssApi.Edit("suggest").setLoading(true).keyvalue(k1).keyvalue({"lwstate": "2"}).getJson(function (json) {
//        var sortid = json.id;
//        RssApi.Details("sort_num").condition(new RssDict().keyvalue({
//            "type": "2"
//        }).getDict()).getJson(function (e) {
//            var num = parseInt(e.num) + 1
//            RssApi.Edit("sort").keyvalue({
//                "sortid": sortid,
//                "realid": num,
//                "type": "2",
//                "myid": RssUser.Data.myid
//            }).getJson(function (json) {
//                if (json.id) {
//                    alert("增加成功")
//                }
//            })
//        })
//    })
//})
//建议建议
$("#suggestsub").load(function() {
	//    $("#suggestsub article .fj .fja").text("");
	//    $("#suggestsub article .marginb input").val("");

	//    $("#suggestsub article .lmr span").text("");
	var session = {},
		sid = "0",
		meetingnum = {},
		reviewclass = {},
		circless = [],
		isdelegate ="1",
		mission = {};
	RssApi.Table.List("session_classify").condition(new RssDict().keyvalue({
		"state": "1"
	}).getDict()).getJson(function(json) {
		$.each(json, function(k, v) {
			session[v.id] = v.name
			$("#suggestsub [sessionid]").attr("relationid", v.id)
			$("#suggestsub [sessionid]").text(v.name)
		})
		$("#suggestsub [sessionid]").off("click").click(function() {
			zzc($(this), session);
		})
	})
	RssApi.Table.List("companytypeee_classify").keyvalue("pagesize", "30").condition(new RssDict().keyvalue({}).getDict()).getJson(
		function(json) {
			$.each(json, function(k, v) {				
				meetingnum[v.id] = v.name
				$("#suggestsub [meetingnum]").attr("relationid", v.id)
				$("#suggestsub [meetingnum]").text(v.name)
			})
			$("#suggestsub [meetingnum]").off("click").click(function() {
				zzc($(this), meetingnum);
			})
		})
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(json) {
		var aa = (json[0].circleslist).split(",");
		isdelegate = json[0].isdelegate + "";
		var cnt = 0 ;
		$.each(aa, function(k, v) {
			if (v != "") {
				console.log(k + ":" + v)
				circless.push(dictdata["circles"][v])
				$("#suggestsub [circless]").attr("relationid", v)
				$("#suggestsub [circless]").text(circless)
				cnt ++;
				
			}
		})
		if ( cnt == 0 ){
			RssApi.Table.List("circles_classify").keyvalue("pagesize", "10").condition(new RssDict().keyvalue({}).getDict()).getJson(
				function(json2) {
					$.each(json2, function(k, v) {				
						circless.push(dictdata["circles"][v])
						$("#suggestsub [circless]").attr("relationid", v)
						$("#suggestsub [circless]").text(circless)
					})
					
					$("#suggestsub [circless]").off("click").click(function() {
						zzc($(this), circless);
					})
					
				})
			
			// circless.push(dictdata["circles"][0])
			// $("#suggestsub [circless]").attr("relationid", 1)
			// $("#suggestsub [circless]").text(circless)	
		}
		
		
		
		$("#suggestsub [circless]").off("click").click(function() {
			zzc($(this), circless);
		})
	})
	RssApi.Table.List("companytypee_classify").condition(new RssDict().keyvalue({}).getDict()).getJson(function(
		json) {
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#suggestsub [reviewclass]").attr("relationid", v.id)
			$("#suggestsub [reviewclass]").text(v.name)
		})
		$("#suggestsub [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	var missions = "",
		realname = "";
	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission;
		})
	})

	$("#suggestsub .lmr").off().click(function() {
		var span = $("#suggestsub .span").text().split(",");
		//        $("#suggestsub .lmr span").empty();
		location.href = "#dbt"
		if (arry.indexOf("dbt") == "-1") {
			$("#dbt ul li").eq(0).siblings().remove();
			arry.push("dbt")
		} else {
			$("#dbt ul li").remove();
		}
		$("#dbt article .dbta").text(realname);
		faqsajax = RssApi.Table.List("user").setLoading(true).keyvalue("pagesize", "100").condition(
			new RssDict().keyvalue({
				// "mission": missions,				
				// "myid": "{notin~" + RssUser.Data.myid + "}"
				"isdelegate": 1
			}).getDict()).setFlushUI(function(jsona, append) {
			let html = "";
			var flag = false;
			$.each(jsona, function(k, v) {
				for (var i = 0; i < span.length; i++) {
					if (v.myid == span[i]) {
						flag = true;
						break;
					}
				}
				html += '<li><input type="checkbox" ' + (flag ? "checked" : "") +
					' name="myid"  myid="' + v.myid +
					'" realname="' + v.realname + '" /><em>' + v.realname +
					'</em><span class="dh">' + v.telphone +
					'</span></li>';
				flag = false;
			})
			$("#dbt article ul").html(html);
			//除了表头（第一行）以外所有的行添加click事件.
			$("#dbt ul>li").slice(0).click(function() {
				// 切换样式
				$(this).toggleClass("tr_active");
				// 找到checkbox对象
				var chks = $("input[type='checkbox']", this);
				var tag = $(this).attr("tag");
				if (tag == "selected") {
					// 之前已选中，设置为未选中
					$(this).attr("tag", "");
					chks.prop("checked", false);
				} else {
					// 之前未选中，设置为选中
					$(this).attr("tag", "selected");
					chks.prop("checked", true);
				}
			});
			$("#dbt article .submitName").off().click(function() {
				var id_array = new Array();
				var name_array = new Array();
				$('input[name="myid"]:checked').each(function() {
					id_array.push($(this).attr("myid")); //向数组中添加元素  
					name_array.push($($(this)).attr("realname")); //向数组中添加元素  
				});
				var idstr = id_array.join(','); //将数组元素连接起来以构建一个字符串  
				var namestr = name_array.join(',');
				location.href = "#suggestsub"
				$("#suggestsub span").text(idstr)
				$("#suggestsub [mission]").html(namestr);
			});
		}).getJson();
	})
	
	
	//loadmeeting();//added by jackie////只需一次载入meeting即可，不需要重复载入
	$("#suggestsub .normalbutton").off().click(function() {
		////判断如果不是代表就提示没有权限 2022-06-13
		if ( isdelegate.indexOf("1") == -1 ) {
			alert("您没有权限");
			return;
		}
		
		
		var enclosure = $("#suggestsub .fj_path").text() ;
		var enclosurename = $("#suggestsub article .fj label input").val() ;
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
		
		
		var k1 = {}
		//        console.log($("#suggestsub span").text());
		k1["sessionid"] = $("#suggestsub [sessionid]").attr("relationid");
		k1["meetingnum"] = $("#suggestsub [meetingnum]").attr("relationid");
		k1["level"] = $("#suggestsub [circless]").text();
		k1["reviewclass"] = $("#suggestsub [reviewclass]").attr("relationid");
		//k1["mission"] = $("#suggestsub .lmr span").text();
		k1["title"] = $("#suggestsub .marginb input").val();
		k1["matter"] = $("#suggestsub .ql-editor").html();
		k1["myid"] = RssUser.Data.myid;
		k1["draft"] = "2";
		k1["reviewopinion"] = "0";
		k1["permission"] = "0";
		k1["sugyears"] = "0";
		k1["seconded"] = "0";
		k1["sugformation"] = "0";
		// alert("flowtype_ysw11::" + flowtype_ysw);
		k1["isysw"] = flowtype_ysw; //测试，还要加是否会议期间的判断//added by jackie
		
		// var title = $("#suggestsub .marginb input").val();
		var title = $("#suggestsub .suggest_title input").val();
		
		// var matter = $("#suggestsub .ql-editor").val();
		var matter = $("#suggestsub .ql-editor").html();
		console.log(" ________________ title"+title)
		console.log(" ________________ matter"+matter)
		if ( isEmpty(title) ) {
			alert("请添加标题")
			return false;
		}
		if ( isEmpty(matter) || ( "<p><br></p>".indexOf( matter ) != -1 ) ) {
			alert("请添加内容")
			return false;
		}
		
		
		k1["title"] = $("#suggestsub .suggest_title input").val();

		var date = new Date;
		var year = date.getFullYear();
		var mydate = year.toString();
		k1["year"] = mydate;
		k1["ProposedBill"] = Date.parse(new Date()) / 1000;
		k1["shijian"] = Date.parse(new Date()) / 1000;
		k1["enclosure"] = $("#suggestsub .fja").text() + ",";
		
		k1["enclosure"] = enclosure;
		k1["enclosurename"] = enclosurename;
		
		console.log(Date.parse(new Date()) / 1000);
		var sj = Date.parse(new Date()) / 1000;
		var userid = ($("#suggestsub .span").text()).split(",");
		k1["numpeople"] = userid.length;
		console.log(k1["matter"]);
		if (k1["level"] == "乡镇人大代表") {
			k1["level"] = 0;
		} else {
			k1["level"] = 1;
		}
		console.log(k1);
		if (k1["title"] != "" && k1["matter"] != "") {
			RssApi.Edit("suggest").setLoading(true).keyvalue(k1).keyvalue({
				"lwstate": "1"
			}).getJson(function(jsons) {
				var sortid = jsons.id;
				console.log(jsons);
				console.log(sortid);
				RssApi.View.Details("sort_num").condition(new RssDict().keyvalue({
					"type": "1"
				}).getDict()).getJson(function(e) {
					var numzhi = "";
					console.log(e.length + "-----e");
					if (e.length == "0" || e.length == undefined) {
						numzhi = 1;
					} else {
						numzhi = parseInt(e.num) + 1;
					}
					console.log(numzhi);
					RssApi.Edit("sort").keyvalue({
						"sortid": sortid,
						"realid": sortid,
						"type": "1",
						"myid": 0
					}).getJson(function(jsonaa) {
						RssApi.Edit("suggestscr").setLoading(true).keyvalue({
							"suggestid": sortid,
							"userid": missions,
							"myid": 0
						}).getJson(function(aa) {
							for (var i = 0; i < userid.length; i++) {
								RssApi.Edit("secondeduser").setLoading(
									true).keyvalue({
									"suggestid": sortid,
									"userid": userid[i],
									"myid": RssUser.Data.myid,
								}).getJson(function(jsonnn) {})
							}
						})

						if (jsonaa.id) {
							alert("提交成功")
							$("#suggestsub article li input").val("");
							$("#suggestsub article .fj label input").val("");
							$("#suggestsub .span").text("");
							$("#suggestsub .fj .fja").text("");
							$("#suggestsub .ql-editor").text("");
							
							$("#suggestsub .fja").text("");
							$("#suggestsub .fj_path").text("");
							//$("#suggestsub span").text("")
							$("#suggestsub [mission]").val("");
							location.href = "#suggest"
						} else {
							alert("提交失败")
						}
					})
				})
			})
		} else {
			alert("建议标题和内容不能为空");
		}
	})
})





function isXuangongweiAccount() {
	var result = 0 ;
	var myid = RssUser.Data.myid;
	if ( myid.indexOf("1429") != -1 ) {
		result = 1 ;
	}
	return result ;
}
//上传履职情况
var entryuploadActivity = 0 ;
var relationid = 1 ;
var reviewclassName = "出席人代会";


$("#uploadActivity").load(function() {
	var missions = "", realname = "" ,isdelegate ="1";
	reviewclass = {},

	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission; //代表团
			realname = v.realname;
			isdelegate = v.isdelegate +"";
		})
	})
	
	
	$("#uploadActivity article .fj").show();
	
	
	RssApi.Table.List("activity_classify").keyvalue("pagesize", "20").condition(new RssDict()
		.keyvalue({
			// "state": 0
		}).getDict()).getJson(function(json) {		
		
		var cnt = 0;	
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#uploadActivity [reviewclass]").attr("relationid", v.id)
			$("#uploadActivity [reviewclass]").text(v.name)
			if ( cnt == 0 ) {
				 $("#uploadActivity [reviewclass]").text(reviewclassName)
			}
		})
		$("#uploadActivity [reviewclass]").off("click").click(function() {
			zzc($(this), reviewclass);
		})
	})
	// $("#uploadActivity [reviewclass]").attr("relationid", relationid)
	// $("#uploadActivity [reviewclass]").text( reviewclassName )
	
	$("#uploadActivity .lmr").off().click(function() {
		addmember ( "uploadActivity" );
		
	})
	
	$("#uploadActivity .hisback").click(function() {
		$("#uploadActivity .smalltitle input").val("");
		$("#uploadActivity .marginb .select").val("");			
		$("#uploadActivity .smalltitle .place").val("");
		$("#uploadActivity .fj_path").text("") ;
		$("#uploadActivity textarea").val("");
		$("#uploadActivity .fja").text("") ;
		$("#uploadActivity .lmr span").text("");
		$("#uploadActivity .lmr label").text("");
		$("#uploadActivity article .fj label input").val("") ;
		$("#uploadActivity .date-picker").val("");
		
		//恢复初始值
		relationid = 1 ;
		reviewclassName = "出席人代会";
	});	


	$("#uploadActivity .submitbutton").off().click(function() {
	    //submitnewsolution ("uploadActivity");
		
		//判断如果不是代表就提示没有权限 2022-06-13
		
		if ( isdelegate.indexOf("1") == -1 ) {
			alert("您没有权限");
			return;
		}
		
		
		
		
		var title = $("#uploadActivity .smalltitle input").val();
		//var classify = $("#uploadActivity .marginb .select").val();	
		var classify = $("#uploadActivity [reviewclass]").attr("relationid");
		
		//处理上传履职活动编辑界面输入法界面导致刷新时，恢复为出席人代会
		classify = relationid ;
		//处理上传履职活动编辑界面输入法界面导致刷新时，恢复为出席人代会

		var place = $("#uploadActivity .smalltitle .place").val();
		var matter = $("#uploadActivity textarea").val();
		//var enclosure = $("#uploadActivity .fja").text() ;
		// var enclosure = $("#uploadActivity .fja").text() + ",";
		var enclosure = $("#uploadActivity .fj_path").text() ;
		var userid = $("#uploadActivity .lmr span").text();
		
		var enclosurename = $("#uploadActivity article .fj label input").val() ;
		// var enclosurename = $("#uploadActivity article .fj label input").val() + ",";
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);
			
		// var enclosurename = $("#uploadActivity article .fj label input").val() ;	
		var enclosurename = $("#uploadActivity .fja").text() ;
				
		var activityshijian = $("#uploadActivity .date-picker").val();
		var shijian = Date.parse(new Date()) / 1000;
		
		var username = $("#uploadActivity [mission]").text();
		if ( parseInt( classify ) >= 7 ){
			// classify = parseInt( classify ) + 2 ;
		}
		
		
		//为了解决附件问题
		if ( isEmpty( enclosure ) ) {
			enclosure = global_enclosurepath;
		}
		
		// var username = $("#uploadActivity .lmr [mission]").html();
		var myid = RssUser.Data.myid;
		if ( isEmpty( activityshijian ) ) {
		    alert( "请添加履职时间" );
			return;
		}
		if ( isEmpty( title ) ) {
		    alert( "请添加履职标题" );
			return;
		}
		// if ( isEmpty( enclosure ) ) {
		//     alert( "请添加履职附件" );
		// 	return;
		// }
		var myid = "" +  RssUser.Data.myid ;
		if ( myid.indexOf( userid ) == -1 ) {
			userid += "," + RssUser.Data.myid;
		}	
		if ( isEmpty(userid) ) {
			userid = RssUser.Data.myid;
		}
		
		// activityshijian = Math.round(new Date(activityshijian) / 1000);
		//添加到活动列表
		var activityshijian = Math.round(new Date(activityshijian) / 1000);
		var acitivitiesid = "";
		
		
		if ( isEmpty(username)){
			if ( isXuangongweiAccount() == 0 ) {
				username = realname;
			}
		}
		else {
			username = realname + "," +  username;
		}
		
		RssApi.Edit("activities").setLoading(true).keyvalue({
			"title": title,
			"classify": classify,
			"place": place,
			"myid": RssUser.Data.myid,
			"userid": userid,
			"enclosure": enclosure,			
			"enclosurename": filename,
			"realname": realname,
			"username": username,
			"note": matter,
			// "private": "3",
			"private": "1",
			"enroll": "3",
			"beginshijian": activityshijian,
			"finishshijian": activityshijian,
			"shijian": shijian
			}).getJson(function(jsonnn) {
				//重新读取写入的记录，获取记录id
				
				RssApi.Table.List("activities").setLoading(false).condition(new RssDict().keyvalue({						
					"classify": classify ,
					"place": place,
					"beginshijian": activityshijian,
					"enclosure": enclosure,		
					"enclosurename": filename,
					"realname": realname,
					"userid": userid,
					"title": title,
					"private": 3 ,
					"shijian": shijian,
					"myid": RssUser.Data.myid 
					}).getDict()).getJson(function(json) {
					var uids = userid.split(",");					
					$.each(uids, function(idx, value) {
						RssApi.Edit("activities_userlist").setLoading(true).keyvalue({
							"activitiesid": jsonnn.id ,
							"userid": value,
							"myid": RssUser.Data.myid,
							"jointype": 2,
							"matter": matter,
							"enrollname": username,
							"attendancetype": 2,
							"enroll": 3,
							"shijian": shijian
							}).getJson(function(jsonnn) {
								written = 1 ;
							})	
					})
					
					$("#uploadActivity .smalltitle input").val("");
					$("#uploadActivity .marginb .select").val("");			
					$("#uploadActivity .smalltitle .place").val("");
					$("#uploadActivity .fj_path").text() ;
					$("#uploadActivity textarea").val("");
					$("#uploadActivity .fja").text("") ;
					$("#uploadActivity .lmr span").text("");
					$("#uploadActivity .lmr label").text("");
					$("#uploadActivity article .fj label input").val("") ;
					$("#uploadActivity .date-picker").val("");
					alert("提交成功");
				    
					//恢复初始值
					relationid = 1 ;
					reviewclassName = "出席人代会";
					history.go(-1);
					// location.href = "#suggest";
				})
		    })
		})
})







function insert_activity_table( data , userid ) {	
	console.log( data )
	var shijian = Date.parse(new Date()) / 1000;
	RssApi.Edit("activities").setLoading(true).keyvalue( data ).keyvalue({
		"userid": RssUser.Data.userid
	}).getJson(function(json) {
		// console.log("______ json=",json)
		
		if ( data.enroll == "1") {
			alert("提交成功");
			return;
		}
		var activitiesid = json.id;
		// var userid = json.userid ;
		var uids = userid.split(",");
		$.each(uids, function(idx, uid) {
			RssApi.Edit("activities_userlist").setLoading(true).keyvalue({
				"activitiesid": activitiesid,
				"myid": RssUser.Data.myid,
				"jointype": data.enroll,				
				"userid": uid,
				"attendancetype": 1 ,
				"shijian": shijian
			}).getJson(function(jsonnn) {
			})
		})
		if (json.id) {
			alert("提交成功");
			// location.href = "#suggest";
		} else {
			alert("提交失败");
		}
	})
}
//发起活动 活动提交
$("#initiateHD").load(function() {
	var missions = "", realname = "";
	reviewclass = {},
	
	department = {},
	

	RssApi.Table.List("user").condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(jsonn) {
		$.each(jsonn, function(k, v) {
			missions = v.mission; //代表团
			realname = v.realname;
		})
	})
	
	
	RssApi.Table.List("activity_classify").keyvalue("pagesize", "20").condition(new RssDict()
		.keyvalue({
			// "state": 0
		}).getDict()).getJson(function(json) {		
			
		$.each(json, function(k, v) {
			reviewclass[v.id] = v.name
			$("#initiateHD [reviewclass]").attr("relationid", v.id)
			$("#initiateHD [reviewclass]").text(v.name)
		})
		// $("#initiateHD [reviewclass]").off("click").click(function() {
		$("#reviewclass_id").off("click").click(function() {
		
			zzc($("#initiateHD [reviewclass]"), reviewclass);
			// zzc($(this), reviewclass);
		})
	})
	
	RssApi.Table.List("activity_department").keyvalue("pagesize", "20").condition(new RssDict()
		.keyvalue({
			// "state": 0
		}).getDict()).getJson(function(json) {		
			
		$.each(json, function(k, v) {
			department[v.id] = v.realname
			$("#initiateHD [department]").attr("relationid", v.id)
			$("#initiateHD [department]").text(v.realname)
		})
		
		
		$("#department_id").off("click").click(function() {
			zzc($("#initiateHD [department]"), department);
		})
	})
	
	$("#initiateHD .lmr").off().click(function() {
		addmember ( "initiateHD" );
	})


	$("#initiateHD input[type='radio'][name='ZH']").off().click(function() {
		var value = $(this).val();
		if (value == 1) {
			$("#hd_participant").hide();
			$("#deadlinetime").show();
			$("#enrollperson_id").show();
			
		} else {
			$("#hd_participant").show();
			$("#deadlinetime").hide();
			$("#enrollperson_id").hide();
		}
		
		// $("#initiateHD .smalltitle input").val("");
		// $("#initiateHD .smalltitle .department").val("");
		// $("#initiateHD .smalltitle .place").val("");
		// $("#initiateHD textarea").val("");
		// $("#initiateHD .fja").text("");
		// $("#initiateHD .fj_path").text("");
		// $("#initiateHD .lmr span").text("");
		// $("#initiateHD [mission]").val("");
		// $("#initiateHD article .fj label input").val("") ;
		// $("#initiateHD .beginshijian .date-picker").val("");
		// $("#initiateHD .finishshijian .date-picker").val("");
		// $("#initiateHD .endshijian .date-picker").val("");
	})

	$("#initiateHD .submitbutton").off().click(function() {
		
		if ( RssUser.Data.myid.indexOf("1407") != -1 ) {
			alert("你没有权限发起活动");
			return;
		}
		var title = $("#initiateHD .smalltitle input").val();
		// var classify = $("#initiateHD .marginb .select").val();	
		var classify = $("#initiateHD [reviewclass]").attr("relationid");
		var place = $("#initiateHD .smalltitle .place").val();
		// var department = $("#initiateHD .smalltitle .department").val();
		
		var enrollperson = $("#initiateHD .smalltitle .enrollperson").val();
		var mdepartment = $("#initiateHD [department]").attr("relationid");
		var departmentname = department[mdepartment];
		var matter = $("#initiateHD textarea").val();
		var enclosure = $("#initiateHD .fj_path").text() ;
		var userid = $("#initiateHD .lmr span").text();
		var enclosurename = $("#initiateHD article .fj label input").val() ;
		// var enclosurename = $("#uploadActivity article .fj label input").val() + ",";
		var filename = enclosurename.substring(enclosurename.lastIndexOf("\\") + 1);			
		var beginshijian = $("#initiateHD .beginshijian .date-picker").val();
		var finishshijian = $("#initiateHD .finishshijian .date-picker").val();
		var endshijian = $("#initiateHD .endshijian .date-picker").val();
		
		var shijian = Date.parse(new Date()) / 1000;
		console.log("______________ classify =",classify)
		// if ( parseInt( classify ) >= 7 ){
		// 	classify = parseInt( classify ) + 2 ;
		// }
		
		//怎么判断是指定报名还是自愿报名？
		var enroll = $("#initiateHD input[name='ZH']:checked").val() ; //自愿报名
		
		if ( isEmpty( title ) ) {
		    alert( "请添加活动标题" );
			return;
		}
		if ( isEmpty( beginshijian ) ) {
		    alert( "请添加开始时间" );
			return;
		}
		if ( isEmpty( finishshijian ) ) {
		    alert( "请添加结束时间" );
			return;
		}
		if ( isEmpty( userid ) && enroll == 2 ) {
		    alert( "请添加代表" );
			return;
		}
		if (  isEmpty( endshijian ) && enroll == 1 ) {
		    alert( "请添加截至时间" );
			return;
		}
		
		if (  isEmpty( enrollperson ) && enroll == 1 ) {
		    alert( "请填写最大报名人数" );
			return;
		}
		// if ( isEmpty( enclosure ) ) {
		//     alert( "请添加附件" );
		// 	return;
		// }
		
		
		beginshijian = Math.round(new Date(beginshijian) / 1000);
		finishshijian = Math.round(new Date(finishshijian) / 1000);
		endshijian = Math.round(new Date(endshijian) / 1000);
		
		// if (  enroll == 2 ) {
		// 	if ( RssUser.Data.myid.indexOf( userid) == -1 ) {
		// 		userid += "," + RssUser.Data.myid;
		// 	}
		// 	if ( isEmpty(userid) ) {
		// 		userid = RssUser.Data.myid;
				
		// 	}
		// }
		if ( enroll == 1 ) { //自愿报名
			userid = "";
		}
		else {
			endshijian = Math.round(new Date(finishshijian) / 1000); //没有截至时间，随便填个时间
			
		}
		
		// console.log(" ______________  place=",place );
		var data = {
			"title": title,
			"classify": classify,
			"department": departmentname,
			"place": place,
			"note": matter,
			"enclosure": enclosure,
			"myid": RssUser.Data.myid,
			"shijian": shijian,
			"enclosurename": filename,
			"beginshijian": beginshijian,
			"finishshijian": finishshijian,
			"endshijian": endshijian,
			"userid": userid,
			"maxperson": enrollperson,
			"realname": realname,
			"private": "0",
			"enroll": enroll
			// "private": "1",
			// "enroll": "2"
		}
		insert_activity_table ( data , userid ) ;
		//清空数据
		$("#initiateHD .smalltitle input").val("");
		// $("#initiateHD .marginb select").val("");
		$("#initiateHD .smalltitle .department").val("");
		$("#initiateHD .smalltitle .enrollperson").val("");
		$("#initiateHD .smalltitle .place").val("");
		$("#initiateHD textarea").val("");
		$("#initiateHD .fja").text("");
		$("#initiateHD .fj_path").text("");
		$("#initiateHD .lmr span").text("");
		$("#initiateHD [mission]").val("");
		$("#initiateHD article .fj label input").val("") ;
		$("#initiateHD .beginshijian .date-picker").val("");
		$("#initiateHD .finishshijian .date-picker").val("");
		$("#initiateHD .endshijian .date-picker").val("");
		location.href = "#suggest";
		})
})

//新增规范性文件
$("#shenchaXZ").load(function() {
	$("#shenchaXZ .normalbutton").off().click(function() {
		//将前端输入的数据放到k1对象中
		var filename = $("#shenchaXZ .marginb .filename").val();
		var organizer = $("#shenchaXZ .marginb .organizer").val();
		var Titanic = $("#shenchaXZ .marginb .Titanic").val();
		var name = $("#shenchaXZ .marginb .name").val();
		var telephone = $("#shenchaXZ .marginb telephone").val();
		var remarks = $("#shenchaXZ textarea").val();
		var shijian = Date.parse(new Date()) / 1000;
		var enclosure = $("#shenchaXZ .fja").text() + ",";
		var k1 = {
			"filename": filename,
			"organizer": organizer,
			"Titanic": Titanic,
			"name": name,
			"telephone": telephone,
			"myid": RssUser.Data.myid,
			"remarks": remarks,
			"enclosure": enclosure,
			"shijian": shijian
		}
		console.log(k1)
		if (filename != "" && remarks != "") {
			//标题和问题不能为空
			RssApi.Edit("shenchadengji").setLoading(true).keyvalue(k1).keyvalue({
				"userid": RssUser.Data.userid
			}).getJson(function(json) {
				console.log(json)
				if (json.id) {
					alert("提交成功");
					$("#shenchaXZ .marginb .filename").val("");
					$("#shenchaXZ .marginb .organizer").val("");
					$("#shenchaXZ .marginb .Titanic").val("");
					$("#shenchaXZ .marginb .name").val("");
					$("#shenchaXZ .marginb .telephone").val("");
					$("#shenchaXZ textarea").val("");
					$("#shenchaXZ .fja").text("");
					location.href = "#supervRD";
				} else {
					alert("提交失败");
				}
			})
		} else {
			alert("范性文件的标题和内容不能为空！");
		}
	})
})



//通知公告
$("#noticesel li").click(function() {
	var ind = $(this).index();
	location.href = "#noticebulletin";
	$("#noticebulletin nav>a").eq(ind).click();
})




function getnewinformationState( data ) {
	var state = 1 ;
	if ( isEmpty( data.readuserid ) ) {
		state = 1 ;
	}
	else {
		if ( data.readuserid.indexOf( RssUser.Data.myid ) != -1 ) {
		    state = 2 ;
		}
		else {
			state = 1 ;
		}
		
	}
	// console.log(" ______ dyz data",data)
	// ///////////////因为读取通知时，无法更改newinforamtion的值，也无法读取view的值。采用这种不好的办法。后面需要改。20220608
	// RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict()
	// 	.keyvalue({
	// 		"relationid": data.id,
	// 	}).getDict()).getJson( function(json) {
	// 		console.log(" ______ dyz json",json)
	// 		if ( json.length > 0 ) {
	// 			if ( data.readuserid.indexOf( RssUser.Data.myid ) != -1 ) {
	// 			    state = 2 ;
	// 			}
	// 		}
	// })
	return state;
}


//增加新闻以后注释le 
$("#noticebulletin_old_old nav>a").off("click").click(function() {
	
	$(this).addClass("sel").siblings().removeClass("sel");
	var ind = $(this).index() + 1;
	noticeSelectTab = ind ;
	console.log("____________ noticebulletin",ind)
	var messageJson = [];
	
	if (arry.indexOf("noticebulletin") == "-1") {
		$("#noticebulletin ul li").eq(0).siblings().remove();		
		arry.push("noticebulletin")
	} else {
		$("#noticebulletin ul li").remove();
		
	}
	
	
	//faqsajax = RssApi.View.List("lzmessage_news_user").setLoading(true).condition(new RssDict().keyvalue({
	faqsajax = RssApi.Table.List("newinformation").setLoading(true).keyvalue("pagesize", "500").condition(new RssDict().keyvalue({
		// "fbstate": "1",
		"infotype": ind
		// "myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		// if (json.length < 10 ) {
		// 	$('.nodata').hide();
		// } else {
		// 	$('.nodata').show();
		// }
		faqsajax = RssApi.Table.List("notify_messages").setLoading(false).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
			"infotype": ind
		}).getDict()).setFlushUI(function(notifymessage_json, append) {
		//需要读notify_messages，用于判断是否包含已读用户
		if (json.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
		}

		
		var json2 = [];
		
		for (var i = 0; i < json.length; i++) {
			var data = json[i];
			var state = getnewinformationState ( data ) ;
			
			if ( state == 1) {
				data.ico = 'img/limg/unreadico.png';
			} else if ( state == 2 ) {
				data.ico = 'img/limg/nbico.png';
			}
			
			// 判断是否在notifymessage表格包含了已读用户
			$.each(notifymessage_json, function(k, v) {
				data.relationid = v.relationid ; //赋值relationid
				
				if ( v.relationid == data.id ) {
					var readuserid = v.readuserid +"";
					if (  readuserid.indexOf( RssUser.Data.myid ) != -1 ) {
						// data.readuserid = v.readuserid;
						data.ico = 'img/limg/nbico.png';
					}
					
					
				}
			})
			
			
			var objids = data.objids + "" ;
			if ( data.isFromwebsite == "1") {
				json2.push(data);
				messageJson.push(data);	
			}
			else {
				if (  objids.indexOf( RssUser.Data.myid ) != -1 ) {
					//如果是指定收到通知用户，加入数组
					json2.push(data);
					messageJson.push(data);
				}				
			}
			
			
			// json2.push(data);
			
			// messageJson.push(data);
		}
		
		$("#noticebulletin ul").mapview(json2, {
			"fbshijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			}
		}, append)
		
		
		
		$("#noticebulletin ul li").click(function() {

			var key = $(this).find("[rssid]").attr("rssid");
			var currentIndex = $(this).index();
			//点击查看通知
			console.log("____________ li.js noticebulletin",ind)
			noticebulletinClick(key, currentIndex, json2, messageJson, append);
			return;

			$("#fz1").hide();
			//            location.href = "/app/infopage/notice.html";
			var key = $(this).find("[rssid]").attr("rssid");
			location.href = "#seenotice"
			$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() +
				"详情");
		    // lzmessage_news_user  --> newinformation
			// console.log("________ 点击查看 key=",key);
			RssApi.Table.List("newinformation").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key
				}).getDict()).getJson( function(json) {
				//更改	notify_messages 对应的状态值
				
				var state = 1;
				$.each(json, function(k, v) {
					state = getnewinformationState ( v ) ;
					if ( state == 1 ) {
					    change_notify_table_state( v.title , key  );
					}
				})
								
				//更改结束
				
				$("#seenotice article").mapview(json, {
					//fbshijian -- > shijian
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					}
				})
				$("#seenotice .divp2").html(json[0].matter);
				if (json.ico == "" || json.ico == undefined) {
					$(".slt").hide()
				} else {
					$(".slt").show()
				}
				if (json.links == "" || json.links == undefined) {
					$(".wblj").hide()
				} else {
					$(".wblj").show()
				}
				if (json.enclosure == "" || json.enclosure == undefined) {
					$(".fj").hide()
				} else {
					$(".fj").show()
				}

				$(".fj p").off().click(function() {
					//                    alert("文件路径：com.rsseasy.lvzhi.file");
					var path = $(this).text();
					var dz = myip + "upfile/" + path;
					if (  dz.indexOf(".doc") != -1 ) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if (  dz.indexOf(".pdf") != -1 ) {
						var pdfh5 = new Pdfh5('.pdfjs', {
							pdfurl: dz
						});
					}
					else {
						location.href = dz;
					}
				})

				var url = $("#seenotice .wblj p").text();
				$("#seenotice .wblj p").hide();
				$("#seenotice .wblj a").text(url);
				$("#seenotice .wblj a").attr("js-browser", url);

				//                $(".wblj p").click(function () {
				//                    var res = $(this).text();
				//                    ////console.log(res);
				//                    var btn = document.getElementById('btn2');
				//                    btn.setAttribute("data-clipboard-text", res);
				//                    var clipboard = new ClipboardJS(btn);
				//                    clipboard.on('success', function (e) {
				//                        ////console.log(e);
				//                        $("#fz1").show();
				//                        setTimeout(function () {
				//                            $("#fz1").hide();
				//                        }, 1000);
				//                    });
				//
				//                    clipboard.on('error', function (e) {
				//                        ////console.log(e);
				//                    });
				//                })
			})
		})
	}).getJson();
	
	
		}).getJson();
			
})
//通知消息点击以后icon变为已读
function noticebulletinClick(key, currentIndex, json2, messageJson, append) {
	$("#fz1").hide();
			//            location.href = "/app/infopage/notice.html";
			location.href = "#seenotice"
			$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() +
				"详情");
		    // lzmessage_news_user  --> newinformation
			console.log("________ 点击查看返回的数据 key=",key);
			// console.log("________ 点击查看返回的数据 messageJson=",messageJson);
			
			RssApi.View.List("newinformation").setLoading(true).condition(new RssDict()
				.keyvalue({
					"id": key					
				}).getDict()).getJson( function(json) {
				
					
				//更改	notify_messages 对应的状态值
				var state = 1;
				$.each(json, function(k, v) {
					state = getnewinformationState ( v ) ;
					if ( state == 1 ) {
						//更改对应表格的数据
					    change_notify_table_state( v.title , key  );
					}
				})

				console.log('currentIndex is:', currentIndex);				
				if (currentIndex < messageJson.length) {
					var data = messageJson[currentIndex];
					data["readuserid"] = RssUser.Data.myid;
    				messageJson[currentIndex] = data;
				}
				
				$("#seenotice article").mapview(json, {
					//fbshijian -- > shijian
					"shijian": function(val) {
						return new Date(parseInt(val) * 1000).toString(
							"yyyy-MM-dd");
					}
				})
				// console.log('matter is:', json[0].matter);
				$("#seenotice .divp2").html(json[0].matter);
				if (json.ico == "" || json.ico == undefined) {
					$(".slt").hide()
				} else {
					$(".slt").show()
				}
				if (json.links == "" || json.links == undefined) {
					$(".wblj").hide()
				} else {
					$(".wblj").show()
				}
				if (json.enclosure == "" || json.enclosure == undefined) {
					$(".fj").hide()
				} else {
					$(".fj").show()
				}

				$(".fj p").off().click(function() {
					//                    alert("文件路径：com.rsseasy.lvzhi.file");
					var path = $(this).text();
					var dz = myip + "upfile/" + path;
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if (dz.indexOf(".pdf") != -1){
						var pdfh5 = new Pdfh5('.pdfjs', {
							pdfurl: dz
						});
					}
					else {
						location.href = dz;
					}
				})

				var url = $("#seenotice .wblj p").text();
				$("#seenotice .wblj p").hide();
				$("#seenotice .wblj a").text(url);
				$("#seenotice .wblj a").attr("js-browser", url);

				$("#seenotice .hisback").click(function() {
					var json3 = [];
					// console.log(" ____________ key:",key)
					for (var i = 0; i < messageJson.length; i++) {
						var data = messageJson[i];
						// console.log(" ____________ data:",data)
						// var state = getnewinformationState ( data ) ;
						// if ( state == 1) {
						// 	data.ico = 'img/limg/unreadico.png';
						// } else if ( state == 2 ) {
						// 	data.ico = 'img/limg/nbico.png';
						// }
						
						// if ( data.id == key ) {
						// 	data.ico = 'img/limg/nbico.png';
						// 	messageJson[i].cio = 'img/limg/nbico.png';
						// }
						
						// 判断是否在notifymessage表格包含了已读用户
						$.each(messageJson, function(k, v) {
							
							// console.log(" ____________ v:",v)
							// console.log(" ____________ v.relationid:",v.relationid)
							if ( v.id == data.id ) {
								var readuserid = v.readuserid +"";
								
							
								if (  readuserid.indexOf( RssUser.Data.myid ) != -1 ) {
									// data.readuserid = v.readuserid;
									data.ico = 'img/limg/nbico.png';
								}	
								
								
								
								
							}
						})
						
						
						json3.push(data);
					}
					$("#noticebulletin ul li").remove();
					$("#noticebulletin ul").mapview(messageJson, {
						"fbshijian": function(val) {
							return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
						}
					}, append)
					$("#noticebulletin ul li").click(function() {
						var key = $(this).find("[rssid]").attr("rssid");
						var currentIndex = $(this).index();
						noticebulletinClick(key, currentIndex, json3, messageJson, append)
					})

				});

				//                $(".wblj p").click(function () {
				//                    var res = $(this).text();
				//                    ////console.log(res);
				//                    var btn = document.getElementById('btn2');
				//                    btn.setAttribute("data-clipboard-text", res);
				//                    var clipboard = new ClipboardJS(btn);
				//                    clipboard.on('success', function (e) {
				//                        ////console.log(e);
				//                        $("#fz1").show();
				//                        setTimeout(function () {
				//                            $("#fz1").hide();
				//                        }, 1000);
				//                    });
				//
				//                    clipboard.on('error', function (e) {
				//                        ////console.log(e);
				//                    });
				//                })
			})
}

//扫一扫
$("#scanninghref").click(function() {
	JsAdapter.onQRcodeDecode = function(json) {
		var val = json["qrcode"];
		if (val == "" || val == undefined) {
			alert("用户不存在！")
		} else {
			RssApi.Details("user_delegation").condition(new RssDict().keyvalue({
				"myid": val
			}).getDict()).getJson(function(json) {
				$("#scanning article").mapview(json, {
					//性别
					"sex": function(val) {
						return dictdata["sex"][val];
					},
					//党派
					"clan": function(val) {
						return dictdata["clan"][val];
					},
					//民族
					"nationid": function(val) {
						return dictdata["nationalityid"][val][0];
					},
					//界别
					"circles": function(val) {
						return dictdata["circles"][val];
					},
					//代表团
					"delegationname": function(val) {
						return val ? val : "无";
					}
				})
				$("#scanning .normalbutton").off("click").click(function() {
					RssApi.Table.List("user_friend").condition(new RssDict().keyvalue({
						"friendid": val,
						"myid": RssUser.Data.myid
					}).getDict()).getJson(function(json) {
						if (json.length == "0") {
							RssApi.Edit("user_friend").keyvalue({
								"friendid": val,
								"myid": RssUser.Data.myid
							}).getJson(function(json) {
								if (json.id) {
									alert("成功");
								}
							});
						} else {
							alert("好友已存在")
						}
					});
				});
				if (json.account) {
					location.href = "#scanning"
				} else {
					alert("用户不存在！")
				}
			});
		}
	};
	JsAdapter.QRcodeScan().Submit();
})


//二维码
//$("#my").load(function () {
//    $("#doublecode").find("canvas").remove();
//    $("#doublecode").qrcode({"text": RssUser.Data.myid});
//    $("#doublecode").qrcode({"text": myip + "newhtml.html"});
//})

//意见反馈
$("[name='type']").click(function() {
	zzc($(this), dictdata["fbtype"]);
})
$("#feedback").load(function() {
	$(this).find("[res='myname']").text(RssUser.Data.realname)
	$(this).find("[res='mytelphone']").text(RssUser.Data.telphone)
})
$("#feedback .normalbutton").click(function() {
	var type = $("#feedback>article>ul>li:nth-of-type(1)>em").attr("relationid");
	var title = $("#fdtitle").val();
	var matter = $("#fdmatter").val();
	if (title != "" && matter != "") {
		RssApi.Edit("feed_back").setLoading(true).keyvalue({
			"classifyid": type,
			"title": title,
			"description": matter,
			"myid": RssUser.Data.myid
		}).getJson(function(json) {
			if (json.id) {
				alert("提交成功");
				$("#fdtitle").val("");
				$("#fdmatter").val("");
			}
		})
	} else {
		alert("反馈的标题和内容不能为空！");
	}
})
//我的日志
$("#mylog").load(function() {
	if (arry.indexOf("mylog") == "-1") {
		$("#mylog ul li").eq(0).siblings().remove();
		arry.push("mylog")
	} else {
		$("#mylog ul li").remove();
	}
	faqsajax = RssApi.Table.List("syslog").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).setFlushUI(function(json, append) {
		if (json.length != "10") {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		$("#mylog ul").mapview(json, {
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd hh:mm:ss");
			}
		}, append)
	}).getJson();
})

//登录日志
if (RssUser.Data.myid) {
	RssApi.Edit("syslog").keyvalue({
		"logclass": "1",
		"logtitle": "手机登录成功",
		"matter": "手机app登录",
		"myid": RssUser.Data.myid
	}).getJson(function(json) {
		if (json.id) {
			//            alert("登录成功");
		}
	})
}

$("#sqmysub").load(function() {
	$("#sqmysub input").val("");
	$("#sqmysub textarea").val("");
})
$("#sqmysub .normalbutton").click(function() {
	var title = $("#sqmysub input").val();
	var textarea = $("#sqmysub .ql-editor").html();
	var type = $("#sqmysub option:selected").val()
	if (title == "" || textarea == "<p><br></p>") {
		alert("标题和内容不能为空");
	} else {
		RssApi.Table.List("mingancitype_classify").keyvalue("pagesize", "10000").condition(new RssDict()
			.keyvalue({
				"state": 0
			}).getDict()).getJson(function(mgc) {
			var tf = true;
			$.each(mgc, function(k, v) {
				if (v.name != null) {
					if (title.indexOf(v.name) >= 0) {
						alert("发表标题包含敏感词['" + v.name + "']!");
						return tf = false;
					}
					if (textarea.indexOf(v.name) >= 0) {
						alert("发表内容包含敏感词['" + v.name + "']!");
						return tf = false;
					}
				}
			})
			if (tf == true) {
				RssApi.Edit("poll").setLoading(true).keyvalue({
					"title": title,
					"matter": textarea,
					"type": type,
					"myid": RssUser.Data.myid
				}).getJson(function(json) {
					if (json.id) {
						alert("提交成功");
						$("#sqmysub input").val("");
						//                        $("#sqmysub textarea").val("");
						$("#sqmysub .ql-editor").text("");
						location.href = "#suggest"
					}
				})
			}
		})
	}
})

$("#mysqmy").load(function() {
	if (arry.indexOf("mysqmy") == "-1") {
		$("#mysqmy ul li").eq(0).siblings().remove();
		arry.push("mysqmy")
	} else {
		$("#mysqmy ul li").remove();
	}
	RssApi.Details("poll_num").condition(new RssDict().keyvalue({
		"state": "1",
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(json) {
		var num = 0;
		if (json.statenum) {
			var num = json.statenum;
		}
		$("#mysqmy .monifooter").text("共" + num + "条信息");
		faqsajax = RssApi.Table.List("poll").setLoading(true).condition(new RssDict().keyvalue({
			"myid": RssUser.Data.myid,
			"state": "1"
		}).getDict()).setFlushUI(function(json, append) {
			if (json.length != "10") {
				$('.nodata').hide();
			} else {
				$('.nodata').show();
			}
			var shijian = "";
			$("#mysqmy ul").mapview(json, {
				"shijian": function(val) {
					return shijian = new Date(parseInt(val) * 1000).toString(
						"yyyy-MM-dd");
				},
				"type": function(val) {
					return dictdata.gztype[val];
				}
			})
			$.each(json, function(k, v) {
				var matter = $(v.matter).text(),
					title = "";
				//                if ((v.matter).indexOf("</")) {matter = $(v.matter).text()} else {title = v.matter;}
				if (v.title == "" || v.title == undefined) {
					title = "无标题"
				} else {
					title = v.title;
				}
				$("#mysqmy ul").append('<li><h1 rssid="' + v.id + '">' + title +
					'</h1><p>' + matter + '</p><span>' +
					shijian + '</span></li>');
			});

			$("#mysqmy ul li").click(function() {
				var key = $(this).find("[rssid]").attr("rssid");
				location.href = "#mysqmyck"
				$("#mysqmyck").find("header>h1").text();
				RssApi.View.List("poll").setLoading(true).condition(new RssDict()
					.keyvalue({
						"id": key
					}).getDict()).getJson(function(jsons) {
					console.log(jsons);
					var shijian = "",
						type = ""
					$("#mysqmyck article").mapview(jsons, {
						"shijian": function(val) {
							return shijian = new Date(parseInt(
								val) * 1000).toString(
								"yyyy-MM-dd");
						},
						"type": function(val) {
							return type = dictdata.gztype[val];
						}
					})
					console.log(jsons[0].matter)
					$('#mysqmyck article').html('<div class="divtop"><h1>' +
						jsons[0].title + '</h1><h4>发布者：' + jsons[0]
						.realname +
						'</h4><h5>发布时间：' + shijian + '</h5><h5>工作分类：' +
						type +
						'</h5></div><div id="ckjy"><span class="dz">点赞：<b class="ckfont">0</b></span><span><u class="pl">评论：<b class="ckfont">0</b></u></span></div><div class="divp">' +
						jsons[0].matter + '</div><ul></ul>');
					RssApi.Details("s_praise_num").condition(new RssDict()
						.keyvalue({
							"relationid": key,
							//                        "type": "4"
						}).getDict()).getJson(function(num) {
						var znum = "0";
						if (num.relnum != undefined && num.relnum !=
							"") {
							znum = num.relnum
						}
						//                        ////console.log(znum);
						//                        $('.ckfont').eq(0).empty()
						$("#mysqmyck .ckfont").eq(0).text(znum);
						RssApi.Details("suggest_comment_num").condition(
							new RssDict().keyvalue({
								"suggestid": key
							}).getDict()).getJson(function(sunum) {
							var snum = "0";
							if (sunum.sugnum != undefined &&
								sunum.sugnum != "") {
								snum = sunum.sugnum
							}
							$("#mysqmyck .ckfont").eq(1).text(
								snum);
							RssApi.View.List("suggest_comment")
								.keyvalue("pagesize", "100")
								.condition(new RssDict()
									.keyvalue({
										"suggestid": key
									}).getDict()).getJson(
									function(comment) {
										$("#mysqmyck article>#wpj")
											.empty();
										$("#mysqmyck article>ul")
											.empty();
										if (comment.length ==
											"0") {
											$("#mysqmyck article>ul")
												.hide();
											$("#mysqmyck article>ul")
												.before(
													'<div id="wpj">无评价</div>'
												)
										}

										$.each(comment,
											function(k, v) {
												$("#mysqmyck #wpj")
													.remove();
												$("#mysqmyck article>ul")
													.show();
												if (v
													.myid ==
													RssUser
													.Data
													.myid) {
													$("#mysqmyck article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												} else {
													$("#mysqmyck article>ul")
														.prepend(
															'<li PJid="' +
															v
															.id +
															'"><span>' +
															v
															.realname +
															'：</span>' +
															v
															.matter +
															'</li>'
														)
												}

											})
										//                                sc();
									})
						})
					})
				})
			})

		}).getJson();
	})
})
//账号安全
$("#accountsoft").load(function() {
	RssApi.Table.List("user").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
	}).getDict()).getJson(function(json) {

		$("#accountsoft ul").mapview(json, {

		})
		$("[userpwd]").off("click").click(function() {
			var t = $(this),
				dict = t.attrmap(t.attr("userpwd"));
			dict["account"] = RssUser.Data.account;
			try {
				ValidatedV2.dictset(dict).keyset("oldpwd").isPwd().keyset("pwd").isPwd().keyset(
					"repwd").isPwd().isEqual(dict[
					"pwd"]);
				new Ajax("userpwd").keyvalue(dict).getJson(function(json) {
					if (json["state"] == "ok") {
						alert('已成功修改密码');
					} else if (json["state"] == "no") {
						alert('密码输入错误');
					}
				});
			} catch (e) {
				RssCode.alert(e);
			}
		});
		//         $("#accountsoft .normalbutton").click(function () {
		//
		//             
		//        })
	})
})

//统计
$("[suggesttype1]").off("click").click(function() {
	console.log("____________ suggesttype")
	var lwstatee = $(this).attr("suggesttype"); //建议议案
	$("#suggesttype nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		var ind = $(this).index();
		$("#suggesttype article>div").eq(ind).show().siblings("div").hide();
		var memutype = $(this).attr("memutype"); //统计类型
		var sessionide = "";
		optionajax(memutype, lwstatee, sessionide);
	})
	location.href = "#suggesttype"
	optionajax("1", lwstatee, "");
	if (lwstatee == "1") {
		$("#suggesttype header h1").text("建议统计");
		$("#suggesttype article nav a").eq(0).text("建议状态");
		$("#suggesttype article nav a").eq(1).text("代表团建议");
	} else {
		$("#suggesttype header h1").text("议案统计");
		$("#suggesttype article nav a").eq(0).text("议案状态");
		$("#suggesttype article nav a").eq(1).text("代表团议案");
	}
})
//$("#suggesttype").load(function () {

//    $("#suggesttype nav>a").eq(0).click();
//    var myChart1 = echarts.init(document.getElementById('bzt'));
//    var myChart2 = echarts.init(document.getElementById('zxt'));
//    var myChart3 = echarts.init(document.getElementById('ldt'));
//    var myChart4 = echarts.init(document.getElementById('zzt'));
//    //    var data = genData(50);
//    option = {
//        tooltip: {
//            trigger: 'item',
//            formatter: "{a} <br/>{b}: {c} ({d}%)"
//        },
//        //    legend: {
//        //        orient: 'vertical',
//        //        x: 'left',
//        //        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//        //    },
//        series: [{
//                name: '访问来源',
//                type: 'pie',
//                radius: ['50%', '70%'],
//                avoidLabelOverlap: false,
//                label: {
//                    normal: {
//                        show: false,
//                        position: 'center'
//                    },
//                    emphasis: {
//                        show: true,
//                        textStyle: {
//                            fontSize: '30',
//                            fontWeight: 'bold'
//                        }
//                    }
//                },
//                labelLine: {
//                    normal: {
//                        show: false
//                    }
//                },
//                data: [{
//                        value: 335,
//                        name: '1'
//                    },
//                    {
//                        value: 310,
//                        name: '2'
//                    },
//                    {
//                        value: 234,
//                        name: '3'
//                    },
//                    {
//                        value: 135,
//                        name: '4'
//                    },
//                    {
//                        value: 1548,
//                        name: '5'
//                    }
//                ]
//            }]
//    };
//    myChart1.setOption(option);
//
//    option = {
//        xAxis: {
//            type: 'category',
//            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//        },
//        yAxis: {
//            type: 'value'
//        },
//        series: [{
//                data: [820, 932, 901, 934, 1290, 1330, 1320],
//                type: 'line'
//            }]
//    };
//    myChart2.setOption(option);
//    option = {
//        //    title: {
//        //        text: '基础雷达图'
//        //    },
//        tooltip: {},
//        //    legend: {
//        //        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
//        //    },
//        radar: {
//            // shape: 'circle',
//            name: {
//                textStyle: {
//                    color: '#fff',
//                    backgroundColor: '#999',
//                    borderRadius: 3,
//                    padding: [3, 5]
//                }
//            },
//            indicator: [{
//                    name: '1',
//                    max: 6500
//                },
//                {
//                    name: '2',
//                    max: 16000
//                },
//                {
//                    name: '3',
//                    max: 30000
//                },
//                {
//                    name: '4',
//                    max: 38000
//                },
//                {
//                    name: '5',
//                    max: 52000
//                },
//                {
//                    name: '6',
//                    max: 25000
//                }
//            ]
//        },
//        series: [{
//                //        name: '预算 vs 开销（Budget vs spending）',
//                type: 'radar',
//                // areaStyle: {normal: {}},
//                data: [{
//                        value: [4300, 10000, 28000, 35000, 50000, 19000],
//                        name: '预算分配（Allocated Budget）'
//                    },
//                    {
//                        value: [5000, 14000, 28000, 31000, 42000, 21000],
//                        name: '实际开销（Actual Spending）'
//                    }
//                ]
//            }]
//    };
//    myChart3.setOption(option);
//    option = {
//        xAxis: {
//            type: 'category',
//            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//        },
//        yAxis: {
//            type: 'value'
//        },
//        series: [{
//                data: [120, 200, 150, 80, 70, 110, 130],
//                type: 'bar'
//            }]
//    };
//    myChart4.setOption(option);
//})

//登录页面载入loginpage//loginform相当于系统启动时..不怎么起作用
$("#loginpage").load(function() {
	//alert("111");
})
//alert("启动001。。。");
//自动检测新版本，系统启动时
function autocheckversion() {
	// RssApi.Table.List("soft_grade").setLoading(true).keyvalue({
	// 	"pagesize": "1"
	// }).getJson(function(json) {
	// 	if (nowedition != json[0].version) {
	// 		RssDialog.onConfig = function() {
	// 			// JsAdapter.Push({
	// 			//     "adapter": "SoftUpdate",
	// 			//     "url": RssApp.UpHost + json[0].url
	// 			// }).Submit();
	// 			update_ksd(RssApp.UpHost + json[0].url); //更新函数,在下面//Added by Jackie
	// 		}
	// 		RssDialog.SetTitle("发现新版本").setConfig("立即升级").AddHtml(json[0].remark).Popup();
	// 	}
	// })

}


function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

function unreadmsg() {
	//履职献策
	RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
				"infotype": "16",
				"state": "1"
				//"userid": RssUser.Data.userid
	}).getDict()).getJson(function(json) {
		var myenroll = 0 ;
		var myactivities = 0 ;
		var ongoing = 0 ;
		var sj = (new Date()).getTime() / 1000;
		var aaa = 0 ;
		$.each(json, function(k, v) {
			if ( v.enroll == "1" ) {
				if ( isEmpty( v.userid ) ) {
					//如果没有uid
					myenroll ++ ;
				}
				else if ( v.enroll == "2") {
					if ( v.userid.indexOf( RssUser.Data.myid ) != -1 ) {
						myenroll -- ;
					}else {
						myenroll ++ ;
					}
				}
				
			}else {
				//指定报名
				if ( isEmpty( v.readuserid ) ) {
					//如果没有uid
					myactivities ++ ;
				}
				else {
					
					if ( v.userid.indexOf( RssUser.Data.myid ) != -1 ) {
					    //userid 和myid是同一个id
						if ( isEmpty( v.readuserid ) ) {
							myactivities ++ 
							ongoing ++ ;
						}
						else {
							if ( v.readuserid.indexOf( v.userid ) != -1 ) {
							}
							else {
								myactivities ++ ;
								ongoing ++ ;
							}
						}
						
					}
					
				}
			}
			
		})
		
		console.log(" _______ myenroll",myenroll);
		if ( myenroll > 0) {
			$("#myenroll").show();
			$("#myenroll").addClass("unreadSpan");
			$("#myenroll").html( myenroll  );
			
			// $("#luzhixiance").css("background-color", "#fc6678");
			// $("#luzhixiance").html( myenroll + myactivities );
			// $("#luzhixiance").css("display", "inline");
		
		
		} else {
			$("#myenroll").hide();
			$("#myenroll").removeClass("unreadSpan");
			
			// $("#luzhixiance").css("display", "none");
			// $("#luzhixiance").hide();
			// $("#luzhixiance").removeClass("unreadSpan");
			
		}
		
		//我的活动
		if ( myactivities > 0) {
			$("#myactivityspan").show();
			$("#myactivityspan").addClass("unreadSpan");
			$("#myactivityspan").html( myactivities  );
			
			
			// $("#myactivityspan").show();
			// $("#myactivityspan").addClass("unreadSpan");
			// $("#myactivityspan").html( counter );
			
			// $("#luzhixiance").css("background-color", "#fc6678");
			// $("#luzhixiance").html( myenroll + myactivities );
			// $("#luzhixiance").css("display", "inline");
		
		
		} else {
			$("#myactivityspan").hide();
			$("#myactivityspan").removeClass("unreadSpan");
			
			// $("#luzhixiance").css("display", "none");
			// $("#luzhixiance").hide();
			// $("#luzhixiance").removeClass("unreadSpan");
			
		}
		
		//我的活动
		if ( ongoing > 0) {
			$("#activityongoing").show();
			$("#activityongoing").addClass("unreadSpan");
			$("#activityongoing").html( ongoing  );	
		} else {
			$("#activityongoing").hide();
			$("#activityongoing").removeClass("unreadSpan");
		}
		
		if ( myactivities  < 0 ) {
			myactivities = 0 ;
		}
		if ( myenroll  < 0 ) {
			myenroll = 0 ;
		}
		if ( ongoing  < 0 ) {
			ongoing = 0 ;
		}
		if ( myenroll + myactivities + ongoing > 0 ) {
			$("#luzhixiance").css("background-color", "#fc6678");
			$("#luzhixiance").html( myenroll + myactivities );
			$("#luzhixiance").css("display", "inline");
		}
		else {
			$("#luzhixiance").css("display", "none");
			$("#luzhixiance").hide();
			$("#luzhixiance").removeClass("unreadSpan");
		}
		
		
			
	});
	
}



//听取和审议专项工作报告消息提醒
function unreadspecialworkmsg() {
	
	var counter = 0 ;
	var myspecialwork = 0 ; //我的专项工作报告
	var recievedspecialwork = 0 ; //承办的专项工作报告
	var finishspecialwork = 0 ;//已经完成的专项工作报告
	
	RssApi.Table.List("supervision_specialwork").setLoading(false).condition(new RssDict().keyvalue({
			// "previewleadername": RssUser.Data.myid,
			// "readState": "1",
			"typeid": "1"
		}).getDict()).getJson(function(json) {
	// console.log(" _______ json",json);
		$.each(json, function(k, v) {
			// if ( !isEmpty( v.previewleadername ) ) {
			// 	var previewleadername = v.previewleadername ;
			// 	if ( previewleadername.indexOf( RssUser.Data.myid ) != -1  && v.state == 1 ) {
			// 		investigation ++ ;
			// 	}
			// }
			
			//我的工作报告
			if ( !isEmpty( v.objid ) ) { //参与者
				if ( v.objid.indexOf( RssUser.Data.myid) != -1  ) { //我是参与者
					if ( !isEmpty( v.myrecordreadstateids ) ) { 
						if ( v.myrecordreadstateids.indexOf( RssUser.Data.myid) == -1  ) { //我未读过
							myspecialwork ++ ;
						}
					}
					else { //没有人读过
						myspecialwork ++ ;
					}
				}
			}
			
			
			//承办
			if ( !isEmpty( v.userroleid ) ) {
				if ( v.userroleid.indexOf( RssUser.Data.myid ) != -1 ) {
					recievedspecialwork ++ ;
				}
			}
			
			//完成的工作报告
			if ( v.taskDone == 1 ) {
				if ( isEmpty( v.finishreadid ) ) {
					finishspecialwork ++ ;
				}else {
					if ( v.finishreadid.indexOf( RssUser.Data.myid ) == -1  ) {
						finishspecialwork ++ ;
					}
				}
			}
			
			
			
		})
		
		//investigation +=  json.length;
		
		if ( myspecialwork > 0) { //我的列表
			$("#myspecialwork").show();
			$("#myspecialwork").addClass("unreadSpan");
			$("#myspecialwork").html( myspecialwork  );
		
		} else {
			$("#myspecialwork").hide();
			$("#myspecialwork").removeClass("unreadSpan");			
		}
		
		if ( finishspecialwork > 0) { //完成
			$("#finishspecialwork").show();
			$("#finishspecialwork").addClass("unreadSpan");
			$("#finishspecialwork").html( finishspecialwork  );
		
		} else {
			$("#finishspecialwork").hide();
			$("#finishspecialwork").removeClass("unreadSpan");			
		}
		
		if ( recievedspecialwork > 0) { //承办
			$("#myundertakspecialwork").show();
			$("#myundertakspecialwork").addClass("unreadSpan");
			$("#myundertakspecialwork").html( recievedspecialwork  );
		
		} else {
			$("#myundertakspecialwork").hide();
			$("#myundertakspecialwork").removeClass("unreadSpan");			
		}
		
		counter = finishspecialwork + recievedspecialwork ;
		
		
		//TODO:后续需要完善
		// if ( counter > 0 ) {
		// 	$("#supervision_icon").css("background-color", "#fc6678");
		// 	$("#supervision_icon").html( counter );
		// 	$("#supervision_icon").css("display", "inline");
		// }
		// else {
		// 	$("#supervision_icon").css("display", "none");
		// 	$("#supervision_icon").hide();
		// 	$("#supervision_icon").removeClass("unreadSpan");
		// }
		});
		
			
	
}



function unreadsupervisionmsg() {
	
	var counter = 0 ;
	//调研
	var investigation = 0 ; //需要预审的调研
	var recievedinvestigation = 0 ; //承办的调研
	var finishinvestigation = 0 ;//已经完成的调研
	var myinvestigation = 0 ;//我参与的调研（我的调研)
	
	
	//视察
	var inspection = 0 ; //需要预审的视察
	var recievedinspection = 0 ; //承办的视察
	var finishinspection = 0 ;//已经完成的视察
	var myinspection = 0 ;//我参与的调研（我的视察)
	
	RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
			// "previewleadername": RssUser.Data.myid,
			// ///////////////"readState": "1",
			"typeid": "9"
		}).getDict()).getJson(function(json) {
	// console.log(" _______ json",json);
		$.each(json, function(k, v) {
			if ( !isEmpty( v.previewleadername ) ) {
				var previewleadername_id = v.previewleadername ;
				if ( previewleadername_id.indexOf( RssUser.Data.myid ) != -1  && v.state == 1 ) {
					investigation ++ ;
				}
			}
			
			if ( !isEmpty( v.organizationid ) ) { //有承办单位			
				if ( v.organizationid.indexOf( RssUser.Data.myid != -1 ) ) {//我是承办单位
					if ( isEmpty ( v.undertakeReadids)  ) { //我没读过
						recievedinvestigation ++ ;
					}
					else {
						if ( v.undertakeReadids.indexOf( RssUser.Data.myid == -1 ) ) { //读过里面没有我
							recievedinvestigation ++ ;
						}
					}
					//recievedinvestigation ++ ;
				}
			}
			
			//判断是否我参与的方案
			if ( isparticipant( v ) ) {
				
				if ( isEmpty( v. solutionReadids ) ) {
					//没有读过
					myinvestigation ++ ;
				}
				else {
					if (  v.solutionReadids.indexOf( RssUser.Data.myid ) == - 1 ) {
						////登录账号没有读过
						myinvestigation ++ ;
					}
				}
			}
			
			
		})
		//investigation +=  json.length;
		//我的调研
		
		if ( myinvestigation > 0) { //我参与的方案
			$("#myinvestigation").show();
			$("#myinvestigation").addClass("unreadSpan");
			$("#myinvestigation").html( myinvestigation  );
		
		} else {
			$("#myinvestigation").hide();
			$("#myinvestigation").removeClass("unreadSpan");			
		}
		
		
		if ( investigation > 0) { //预审
			$("#mypreviewinvestigation").show();
			$("#mypreviewinvestigation").addClass("unreadSpan");
			$("#mypreviewinvestigation").html( investigation  );
		
		} else {
			$("#mypreviewinvestigation").hide();
			$("#mypreviewinvestigation").removeClass("unreadSpan");			
		}
		
		if ( recievedinvestigation > 0) { //承办
			$("#myundertakeinvestigation").show();
			$("#myundertakeinvestigation").addClass("unreadSpan");
			$("#myundertakeinvestigation").html( recievedinvestigation  );
		
		} else {
			$("#myundertakeinvestigation").hide();
			$("#myundertakeinvestigation").removeClass("unreadSpan");			
		}
		
		
	
		
		
		counter = investigation + recievedinvestigation ;
		
		
		
		if ( counter > 0 ) {
			$("#supervision_icon").css("background-color", "#fc6678");
			$("#supervision_icon").html( counter );
			$("#supervision_icon").css("display", "inline");
		}
		else {
			$("#supervision_icon").css("display", "none");
			$("#supervision_icon").hide();
			$("#supervision_icon").removeClass("unreadSpan");
		}
		});
		
		
		
		
		RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
				// "previewleadername": RssUser.Data.myid,
				"readState": "1",
				"typeid": "8"
			}).getDict()).getJson(function(json) {
				$.each(json, function(k, v) {
					if ( !isEmpty( v.previewleadername ) ) {
						var previewleadername = v.previewleadername ;
						if ( previewleadername.indexOf( RssUser.Data.myid ) != -1  && v.state == 1 ) {
							inspection ++ ;
						}
					}
					
					if ( !isEmpty( v.organizationid ) ) {
						if ( v.organizationid.indexOf( RssUser.Data.myid != -1 ) ) {
							recievedinspection ++ ;
						}
					}
				})
				//我的视察
				if ( inspection > 0) { //预审
					$("#mypreviewinspection").show();
					$("#mypreviewinspection").addClass("unreadSpan");
					$("#mypreviewinspection").html( inspection  );
				
				} else {
					$("#mypreviewinspection").hide();
					$("#mypreviewinspection").removeClass("unreadSpan");			
				}
				
				if ( recievedinspection > 0) { //承办
					$("#myundertakeinspection").show();
					$("#myundertakeinspection").addClass("unreadSpan");
					$("#myundertakeinspection").html( recievedinspection  );
				
				} else {
					$("#myundertakeinspection").hide();
					$("#myundertakeinspection").removeClass("unreadSpan");			
				}
				
				counter += inspection + recievedinspection ;
				if ( counter > 0 ) {
					$("#supervision_icon").css("background-color", "#fc6678");
					$("#supervision_icon").html( counter );
					$("#supervision_icon").css("display", "inline");
				}
				else {
					$("#supervision_icon").css("display", "none");
					$("#supervision_icon").hide();
					$("#supervision_icon").removeClass("unreadSpan");
				}
				
			});
		
	
}


autocheckversion();

unreadmsg();
setInterval(function(){ unreadmsg(); }, 6000 * 5 ); //60000



function unreadmsg1() {
	
    unreadmsg();
	unreadspecialworkmsg ( );
	supervisionUnreadMsg( );
	supervisionEnforcementNotify ();
		
	RssApi.Table.List("notify_messages").setLoading(false).keyvalue("pagesize", "500").condition(new RssDict().keyvalue({
			// "infotype": "1",
			"lwstate": "1"
	}).getDict()).getJson(function(json) {
		
		var counter = 0 ;
		var lawcounter = 0 ;
		var instantNewscounter = 0 ; //要文
		var billboardcounter = 0 ;//公告
		var noticecounter = 0 ;//通知
		$.each(json, function(k, v) {
			
			var state = getnewinformationState( v );
			var objids = v.userid +"";
			var readuserid = v.readuserid + "";
			
			var isobjid = 0 ;
			if ( objids.indexOf( RssUser.Data.myid ) != -1  ) {
				isobjid = 1 ;
		
			}
			else {
				if ( v.isFromwebsite == "1") { //如果是从网站过来的信息
					isobjid = 1 ;
				}
			}
			
			if ( readuserid.indexOf( RssUser.Data.myid ) != -1  ) {
				isobjid =  0 ;
			}
			
			if ( isobjid == 1 ) {
				
				if ( v.infotype == 4 ) {
					//法律法规
					lawcounter ++ ;
					
				}
				else if ( v.infotype == 3  ){
					//要文
					instantNewscounter ++ ;
				}
				else if ( v.infotype == 2  ){
					//公告
					billboardcounter ++ ;
				}
				else {
					noticecounter ++ ;
				}
				
			}
			
		})
		console.log("__________ unreadmsg1 counter ",counter )
		console.log("__________ unreadmsg1 noticecounter ",noticecounter )
		console.log("__________ unreadmsg1 instantNewscounter ",instantNewscounter )
		console.log("__________ unreadmsg1 billboardcounter ",billboardcounter )
		counter += 	noticecounter;
		counter += 	lawcounter;
		counter += 	instantNewscounter;
		counter += 	billboardcounter;
		
		
		//新加资讯以后，强行把通知的消息数清空
		counter = 0 ;
		lawcounter = 0 ;
		instantNewscounter = 0 ; //要文
		billboardcounter = 0 ;//公告
		noticecounter = 0 ;//通知
		
		
		
		
		if ( counter > 0) {
			$("#tongzhigonggao").css("background-color", "#fc6678");
			$("#tongzhigonggao").html( counter );
			$("#tongzhigonggao").css("display", "inline");
		} else {
			$("#tongzhigonggao").css("display", "none");
			$("#tongzhigonggao").hide();
			$("#tongzhigonggao").removeClass("unreadSpan");
			
		}
		
		
		if ( lawcounter > 0) {//法律法规
			$("#lawSpan").css("background-color", "#fc6678");
			$("#lawSpan").html( counter );
			$("#lawSpan").css("display", "inline");
		} else {
			$("#lawSpan").css("display", "none");
			$("#lawSpan").hide();
			$("#lawSpan").removeClass("unreadSpan");
			
		}
		
		badge_number = counter;
		
		console.log("__________ unreadmsg1 badge_number ",badge_number )
		if (noticecounter > 0) { //通知
			$("#tongzhigonggaoSpan").show();
			$("#tongzhigonggaoSpan").addClass("unreadSpan");
			$("#tongzhigonggaoSpan").html(noticecounter);
			
			// $("#tongzhigonggaoSpan").css("background-color", "#fc6678");
			// $("#tongzhigonggaoSpan").html( counter );
			
		} else {
			$("#tongzhigonggaoSpan").hide();
			$("#tongzhigonggaoSpan").removeClass("unreadSpan");
			// $("#tongzhigonggaoSpan").hide();
			// $("#tongzhigonggaoSpan").removeClass("unreadSpan");
		}
		
		
		
		if (lawcounter > 0) {//法律法规
			$("#lawSpan").show();
			$("#lawSpan").addClass("unreadSpan");
			$("#lawSpan").html(lawcounter);
			
		} else {
			$("#lawSpan").hide();
			$("#lawSpan").removeClass("unreadSpan");
		}
		
		if (instantNewscounter > 0) { //要问
			$("#instantNewsSpan").show();
			$("#instantNewsSpan").addClass("unreadSpan");
			$("#instantNewsSpan").html(instantNewscounter);
			
		} else {
			$("#instantNewsSpan").hide();
			$("#instantNewsSpan").removeClass("unreadSpan");
		}
		
		if (billboardcounter > 0) { //公告
			$("#billboardSpan").show();
			$("#billboardSpan").addClass("unreadSpan");
			$("#billboardSpan").html(billboardcounter);
			
		} else {
			$("#billboardSpan").hide();
			$("#billboardSpan").removeClass("unreadSpan");
		}
		
		//$("#tongzhigonggao").css("background-color", "#fc6678");
		//$("#tongzhigonggao").html(json.length);
	});
	
	

	
	//1参加视察  2开展专题调研 3参加调研 4参加执法检查 5参加学习培训  6提出建议议案等  7出席人代会 8 参加其他会议 
	// 9接待选民 10 化解矛盾纠纷 11 扶弱济困 12 办好事、实事 13 参加公益慈善事业 14向选民述职 15 其他
	
	//人大履职
	var length = 0 ;
	var length1 = 0 ;
	var length2 = 0 ;
	
	//专项工作报告
	RssApi.Table.List("supervision_specialwork").setLoading(false).condition(new RssDict().keyvalue({
				"readState": "1"

	}).getDict()).getJson(function(json) {
		///////$("#supervision_icon").css("background-color", "#fc6678");
		length +=  json.length;
		//////////////$("#supervision_icon").html( length );
	});
	//执法检查	
	RssApi.Table.List("supervision_enforcement").setLoading(false).condition(new RssDict().keyvalue({
				"readState": "1"
	
	}).getDict()).getJson(function(json) {
		///////$("#supervision_icon").css("background-color", "#fc6678");
		length +=  json.length;
		//////////////$("#supervision_icon").html( length );
	});
	
	//专题询问
	RssApi.Table.List("supervision_special_inquery").setLoading(false).condition(new RssDict().keyvalue({
				"readState": "1"
	
	}).getDict()).getJson(function(json) {
		///////$("#supervision_icon").css("background-color", "#fc6678");
		length +=  json.length;
		//////////////$("#supervision_icon").html( length );
	});
	
	
	//特定问题调查
	RssApi.Table.List("supervision_specific_issue").setLoading(false).condition(new RssDict().keyvalue({
				"readState": "1"
	
	}).getDict()).getJson(function(json) {
		///////$("#supervision_icon").css("background-color", "#fc6678");
		length +=  json.length;
		//////////////$("#supervision_icon").html( length );
	});
	
	//视察
	RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
				"readState": "1",
				"typeid": "8"

	}).getDict()).getJson(function(json) {
		///////$("#supervision_icon").css("background-color", "#fc6678");
		length +=  json.length;
		//////////////$("#supervision_icon").html( length );
	});
	
//调研
	RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
				"readState": "1",
				"typeid": "9"

	}).getDict()).getJson(function(json) {
		///////$("#supervision_icon").css("background-color", "#fc6678");
		length +=  json.length;
		//////////////$("#supervision_icon").html( length );
	});
	
	// 建议议案通知
	RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
				"infotype": "6"
	}).getDict()).getJson(function(json) {
		// console.log('json is:', json);
		for (var i = 0; i < json.length; i++) {
			var data = json[i];
			if (data["lwstate"] == 1) {
				length1++;
			} else {
				length2++;
			}
		}
		
		if (length1 > 0) {
			///////$("#mySuggestSpan").show();
			//////$("#mySuggestSpan").addClass("unreadSpan");
			/////$("#mySuggestSpan").html(length1);
		} else {
			$("#mySuggestSpan").hide();
			$("#mySuggestSpan").removeClass("unreadSpan");
		}
		// if (length2 > 0) {
		// 	$("#tongzhigonggaoSpan").show();
		// 	$("#tongzhigonggaoSpan").addClass("unreadSpan");
		// 	$("#tongzhigonggaoSpan").html(length2);
		// } else {
		// 	$("#tongzhigonggaoSpan").hide();
		// 	$("#tongzhigonggaoSpan").removeClass("unreadSpan");
		// }
		
	});
	
	
	
}


function isNotifyState ( v ) {
	var result = false ;
	var state = parseInt( v.state )
	if ( state == 2 || state == 3  || state == 4 || state == 5 ||  state == 6 ) {//8满意度测评
		result = true ;
	}
	return result;
}
function showNotifyIcon( myInspection , undertakInspection , previewInspection, finishInspection, inspectionCnt ){
	
	if ( myInspection > 0) { //我的
		$("#myinspection").show();
		$("#myinspection").addClass("unreadSpan");
		$("#myinspection").html( myInspection  );
	
	} else {
		$("#myinspection").hide();
		$("#myinspection").removeClass("unreadSpan");			
	}		
	
	if ( undertakInspection > 0) { //承办
		$("#myundertakeinspection").show();
		$("#myundertakeinspection").addClass("unreadSpan");
		$("#myundertakeinspection").html( undertakInspection  );
	
	} else {
		$("#myundertakeinspection").hide();
		$("#myundertakeinspection").removeClass("unreadSpan");			
	}
	
	
	if ( previewInspection > 0) { //预审
		$("#mypreviewinspection").show();
		$("#mypreviewinspection").addClass("unreadSpan");
		$("#mypreviewinspection").html( previewInspection  );
	
	} else {
		$("#mypreviewinspection").hide();
		$("#mypreviewinspection").removeClass("unreadSpan");			
	}
	
	if ( finishInspection > 0) { //完成
		$("#myfinishinspection").show();
		$("#myfinishinspection").addClass("unreadSpan");
		$("#myfinishinspection").html( finishInspection  );
	
	} else {
		$("#myfinishinspection").hide();
		$("#myfinishinspection").removeClass("unreadSpan");			
	}
	
	
	if ( inspectionCnt > 0 ) {
		$("#supervision_icon").css("background-color", "#fc6678");
		$("#supervision_icon").html( inspectionCnt );
		$("#supervision_icon").css("display", "inline");
	}
	else {
		$("#supervision_icon").css("display", "none");
		$("#supervision_icon").hide();
		$("#supervision_icon").removeClass("unreadSpan");
	}
							
}

function supervisionUnreadMsg() {
	var counter = 0 ;
	//调研
	var investigation = 0 ; //需要预审的调研
	var recievedinvestigation = 0 ; //承办的调研
	var finishinvestigation = 0 ;//已经完成的调研
	var myinvestigation = 0 ;//我参与的调研（我的调研)
	
	
	//视察
	var previewInspection = 0 ; //需要预审的视察
	var undertakInspection = 0 ; //承办的视察
	var finishInspection = 0 ;//已经完成的视察
	var myInspection = 0 ;//我的视察
	var inspectionCnt = 0 ;
	
	
	//预审
	var previewerid = "";
	//我的视察调研用户id
	var uid = "";
	//承办人
	var undertakeuid = "";
	
	RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
			"typeid": "8",
		}).getDict()).getJson(function(json) {
			console.log(" ______________  json =", json)
		$.each(json, function( k, v ) {
			//处理预审
			previewerid = v.previewleadername ;
			if ( !isEmpty( previewerid) ) {
				var previewleaderReadids = v.previewleaderReadids ;
				console.log(" ______________  previewleaderIdReads =", previewleaderReadids)
				if ( previewerid.indexOf( RssUser.Data.myid ) != -1  ) {
					console.log(" ______________  inspectionCnt 000 ")
					if ( isEmpty( previewleaderReadids ) ) { //如果没有ids，说明未读
						previewInspection ++ ;
						inspectionCnt ++ ;
						// console.log(" ______________  inspectionCnt111 ")
					}
					else {
						
						if ( previewleaderReadids.indexOf( RssUser.Data.myid ) == -1  ) {
							inspectionCnt ++ ;
							// console.log(" ______________  inspectionCnt 222 ")
						}
					}
				}
			}
			//我的视察
			var myid = v.myid ;
			// console.log(" ______________  v.myid= ",v.myid)
			if ( isparticipant( v )) {
				if ( isEmpty( myid ) ) {
					
				}else {
					
					if ( myid.indexOf( RssUser.Data.myid ) == -1 ) {
						// console.log(" ______________  v.solutionReadids= ",v.solutionReadids)
						var solutionReadids = v.solutionReadids ;
						if ( isEmpty( solutionReadids) ) {
							myInspection ++ ;
							inspectionCnt ++ ;	
						}
						else {
							if ( solutionReadids.indexOf( RssUser.Data.myid ) == -1  ) {
								myInspection ++ ;
								inspectionCnt ++ ;
							}
						}
					}
				}
			}
			
			
			if ( !isEmpty( myid ) ) {
				//我的方案
				if ( myid.indexOf( RssUser.Data.myid ) != -1  && isNotifyState( v )) {
					myInspection ++ ;
					inspectionCnt ++ ;
				}
			}	
			
			
		
			//我承办的方案
			var organizationid = v.organizationid ;
			var loginId = RssUser.Data.myid ;
			var undertakeReadids = "";
			undertakeReadids = v.undertakeReadids ;
			if ( !isEmpty( organizationid ) ) {
				if ( organizationid.indexOf ( loginId ) != -1 ) { //属于承办单位
					if ( isEmpty( undertakeReadids) ) { //未读
						undertakInspection ++ ;
						inspectionCnt ++ ;
					}
					else { //承办单位未读
						
						if ( undertakeReadids.indexOf( loginId ) == -1  ) { //还未读
							undertakInspection ++ ;
							inspectionCnt ++ ;	
							

						}
					}
				}
				
			}			
				
				
			
			//完成的视察
			var finishReadids = v.finishReadids ;
			var state = parseInt( v.state ) ;
			var taskDone = parseInt( v.taskDone ) ;
			if ( isparticipant( v ) && taskDone == 1 ) {
				if ( !isEmpty( finishReadids ) ) {
					if ( finishReadids.indexOf ( loginId ) == -1 ) { //未读
						finishInspection ++ ;
						inspectionCnt ++ ;	
					}					
				}
				else { //未读
					finishInspection ++ ;
					inspectionCnt ++ ;	
				}
					
			}
	})
		
		console.log(" ______________  myInspection =", myInspection)
		console.log(" ______________   undertakInspection =", undertakInspection)
		console.log(" ______________   previewInspection =", previewInspection)
		console.log(" ______________   finishInspection =", finishInspection)
		console.log(" ______________   inspectionCnt =", inspectionCnt)
				
		showNotifyIcon( myInspection , undertakInspection , previewInspection, finishInspection, inspectionCnt ) ;
		})
	

}    

function supervisionUnreadMsg1() {
	var counter = 0 ;
	//调研
	var investigation = 0 ; //需要预审的调研
	var recievedinvestigation = 0 ; //承办的调研
	var finishinvestigation = 0 ;//已经完成的调研
	var myinvestigation = 0 ;//我参与的调研（我的调研)
	
	
	//视察
	var previewInspection = 0 ; //需要预审的视察
	var undertakInspection = 0 ; //承办的视察
	var finishInspection = 0 ;//已经完成的视察
	var myInspection = 0 ;//我的视察
	var inspectionCnt = 0 ;
	
	
	//预审
	var previewerid = "";
	//我的视察调研用户id
	var uid = "";
	//承办人
	var undertakeuid = "";
	
	RssApi.Table.List("activities_notifystate").setLoading(false).condition(new RssDict().keyvalue({
			"typeid": "8",
					
		}).getDict()).getJson(function(json) {
			console.log(" ______________  json =", json)
		$.each(json, function( k, v ) {
			//处理预审
			previewerid = v.previewerid ;
			if ( !isEmpty( previewerid) ) {
				if ( previewerid.indexOf( RssUser.Data.myid ) != -1 && v.previewerstate == 1 && v.auditstate == 1  ) {
					previewInspection ++ ;
					inspectionCnt ++ ;
				}
			}
			//我的视察
			uid = v.myid ;
			if ( !isEmpty( uid) ) {
				if ( uid.indexOf( RssUser.Data.myid ) != -1 && v.mystate == 1 ) {
					myInspection ++ ;
					inspectionCnt ++ ;
				}
			}
			
			//承办的视察
			undertakeuid = v.undertakeuid ;
			if ( !isEmpty( undertakeuid) ) {
				if ( undertakeuid.indexOf( RssUser.Data.myid ) != -1 && v.undertakestate == 1 ) {
					undertakInspection ++ ;
					inspectionCnt ++ ;
				}
			}
			
			//完成的视察
			if ( !isEmpty( uid) ) {
				uid = v.uid ;
				if ( uid.indexOf( RssUser.Data.myid ) != -1 && v.finishstate == 1 ) {
					finishinvestigation ++ ;
					inspectionCnt ++ ;
				}
			}
		})
		
		console.log(" ______________  myInspection =", myInspection)
		console.log(" ______________  undertakInspection =", undertakInspection)
		console.log(" ______________  previewInspection =", previewInspection)
		console.log(" ______________  finishInspection =", finishInspection)
		console.log(" ______________  inspectionCnt =", inspectionCnt)
				
		showNotifyIcon( myInspection , undertakInspection , previewInspection, finishInspection, inspectionCnt ) ;
		})
	

	}

unreadmsg1();
setInterval(function(){ unreadmsg1(); }, 6000 * 5 ); //5分钟 60000 * 5

//检查更新//手动检测
var needupdate = true ;
var newversion = "1.9.4" ;
var oldversion = "1.9.3" ;

function updateComplete(){
	RssApi.Edit("soft_grade_user").setLoading(true).keyvalue({
			"myid": RssUser.Data.myid,
			"version":newversion,
			"oldversion":newversion,
		}).getJson(function(json) {
			alert("更新完成")
		})	
}

$("#update").load(function() {
	
	RssApi.Table.List("soft_grade_user").setLoading(true).keyvalue({
		"myid": RssUser.Data.myid
	}).getJson(function(json) {
		if ( json.length > 0 ) { 
			newversion = json[0].version;
			oldversion = json[0].oldversion;
			// console.log("__________ newversion= " + json[0].version);
			// console.log("__________ oldversion= "+ json[0].oldversion)
			if ( newversion == oldversion ) {
				needupdate = false ;
			}
		}
		// console.log("__________ needupdate= " + needupdate );
		
		if ( needupdate ) {
			$("#nowedition").text("当前版本：v" + oldversion)
			$("#newedition").text("最新版本：v" + newversion)
			$("#update article").find("a").text("点击获取新版本");
			
		}
		else {
			$("#nowedition").text("当前版本：v" + oldversion)
			$("#newedition").text("最新版本：v" + newversion)
			$("#update article").find("a").text("无需更新");
				
		}
		
		RssApi.Table.List("soft_grade").setLoading(true).keyvalue({
			"pagesize": "1"
		}).getJson(function(json) {
			
			$("#update article").find("a").click(function() {
				if ($(this).text() == "点击获取新版本") {
					RssDialog.onConfig = function() {
						// JsAdapter.Push({
						//     "adapter": "SoftUpdate",
						//     "url": RssApp.UpHost + json[0].url
						// }).Submit();
						update_ksd(RssApp.UpHost + json[0].url); //更新函数,在下面//Added by Jackie
					}
					RssDialog.SetTitle("发现新版本").setConfig("立即升级").AddHtml(json[0].remark).Popup();
				}
			})
		})
		
		
		
	})
	return;
	RssApi.Table.List("soft_grade").setLoading(true).keyvalue({
		"pagesize": "1"
	}).getJson(function(json) {
		
		
		if ( needupdate ) {
			RssApi.Edit("soft_grade_user").setLoading(true).keyvalue({
				"myid": RssUser.Data.myid,
				"version":newversion,
				"oldversion":newversion,
			}).getJson(function(json) {
				alert("write")
			
			})
		}
		
		// $("#nowedition").text("当前版本：v" + nowedition)
		// $("#newedition").text("最新版本：v" + json[0].version)
		// if (nowedition != json[0].version) {
		// 	$("#update article").find("a").text("点击获取新版本");
		// } else {
		// 	$("#update article").find("a").text("无需更新");
		// }
		
		if ( needupdate ) {
			$("#nowedition").text("当前版本：v" + oldversion)
			$("#newedition").text("最新版本：v" + newversion)
			if (nowedition != json[0].version) {
				$("#update article").find("a").text("点击获取新版本");
			} else {
				$("#update article").find("a").text("无需更新");
			}	
		}
		else {
			$("#nowedition").text("当前版本：v" + oldversion)
			$("#newedition").text("最新版本：v" + newversion)
			$("#update article").find("a").text("无需更新");
				
		}
		
		
		
		$("#update article").find("a").click(function() {
			if ($(this).text() == "点击获取新版本") {
				RssDialog.onConfig = function() {
					// JsAdapter.Push({
					//     "adapter": "SoftUpdate",
					//     "url": RssApp.UpHost + json[0].url
					// }).Submit();
					update_ksd(RssApp.UpHost + json[0].url); //更新函数,在下面//Added by Jackie
				}
				RssDialog.SetTitle("发现新版本").setConfig("立即升级").AddHtml(json[0].remark).Popup();
			}
		})
	})
})

$("[href='#mysuggest']").click(function() {
	mysuggestnav = "1";
})
$("[href='#mysuggestYA']").click(function() {
	mysuggestnavYA = "1";
})
$("[href='#myHD']").click(function() {
	myHDy = "1";
})
$("[href='#myHD']").click(function() {
	myHDnav = "1";
})
$("[href='#supervisionYS']").click(function() {
	supervisionYSnav = "1";
})

$("[href='#supevaluation']").click(function() {
	supevaluationnav = "1"; //我的专题询问
})
$("[href='#supevaluationYS']").click(function() {
	supevaluationYSnav = "1"; //我的预审专题询问
})
$("[href='#evaluationsystemLayout']").click(function() {
	evaluationsystemLayoutnav = "1"; //人大监督测评系统
})




$("[href='#supervision']").click(function() {
	supervisionnav = "1";
})

$("[href='#supspecialwork']").click(function() {
	specialworknav = "1";
})


$("[href='#myresearch']").click(function() {
	investigatenav = "1";
	
})



$("[href='#researchYS']").click(function() {
	researchYSnav = "1";
})
$("[href='#supinspectionYS']").click(function() {
	supinspectionYSnav = "1";
})
$("[href='#supevaluationYS']").click(function() {
	supevaluationYSnav = "1";
})

// $("[href='#myspecificissue']").click(function() {
// 	// mySpecificIssuenav = "1";
// })



$(".hisbacka").click(function() {
	location.href = "#suggest";
});


//点击加载更多
$('.nodata').on("click", function() {
	var t = $(this);
	faqsajax.nextpage().lastpage(function() {
		t.hide();
	}).getJson();
});

var pingji = function(ind, name) {
	$("[name ='" + name + "']").find("a").each(function() {
		if ($(this).index() <= ind - 1) {
			$(this).addClass("sel")
		} else {
			$(this).removeClass("sel")
		}
	})
}

//ks.update_ksd==========//有进度条
function update_ksd(url) {
	var options = {
		method: "GET"
	};
	console.log("___________ ur="+url)
	dtask = plus.downloader.createDownload(url, options);
	dtask.addEventListener("statechanged", function(task, status) {
		switch (task.state) {
			case 1: // 开始  
				break;
			case 2: //已连接到服务器  
				break;
			case 3: // 已接收到数据  
				var current = parseInt(100 * task.downloadedSize / task.totalSize);
				//RssProgBar.prototype.Progress(100,current);
				// RssProgBar.prototype.Html();
				var pg = document.getElementById('pg');
				//setInterval(function(e){				
				//   if(pg.value!=100) pg.value=current;//pg.value++;
				//   else pg.value=0;				
				//},100);
				//console.log(current);
				break;
			case 4: // 下载完成  plus.notification.compProgressNotification("下载完成");//插件调用  
			    updateComplete();
				plus.runtime.install(plus.io.convertLocalFileSystemURL(task.filename), //安装APP  
					{
						force: true
					},
					function() {

					},
					function() {
						mui.toast('安装失败');
					});
				break;
		}
	});
	dtask.start();
}


//ks.update_ksd==========
function update_ksd_old(url) {
	//console.log(url);
	//创建下载管理对象
	//alert("rrr:"+url);
	//plus.nativeUI.showWaiting("下载wgt文件..."+url);
	var dtask = plus.downloader.createDownload(url, {}, function(d, status) {
		// 下载完成
		//alert("status:"+status);
		if (status == 200) { //下载成功后的回调函数
			plus.nativeUI.toast("更新成功，准备安装");
			//安装程序，第一个参数是路径，默认的下载路径在_downloads里面
			// plus.runtime.install(url,{},function(){
			//     plus.nativeUI.toast('安装成功');},function(){plus.nativeUI.toast('安装失败');});
			// plus.nativeUI.closeWaiting();
			//下载成功,d.filename是文件在保存在本地的相对路径，使用下面的API可转为平台绝对路径
			//var fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
			//plus.nativeUI.toast( "绝对路径看d.filename:::" + d.filename );
			//plus.nativeUI.toast( "绝对路径看fileSaveUrl:::" + fileSaveUrl );
			plus.runtime.openFile(d.filename); //选择软件打开文件，页就安装了

		} else {
			alert("下载失败 " + status);
		}
	});
	//alert("ok");
	//dtask.addEventListener( "statechanged", onStateChanged, false );
	dtask.start(); //开始下载任务
}

/** 活动开始日期 **/
function YYYYMMDDstart() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.form1.st_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.form1.st_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.form1.st_month.options.add(new Option(i, i));
	// document.form1.st_year.value = y;
	// document.form1.st_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear(y)) n++;
	// writeDay(n); //赋日期下拉框
	// document.form1.st_day.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDstart);
else
	window.addEventListener('load', YYYYMMDDstart, false);

function YYYYDD(str) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.form1.st_month.options[document.form1.st_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.form1.st_day;
		optionsClear(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear(str)) n++;
	writeDay(n)
}

function MMDD(str) //月发生变化时日期联动
{
	var YYYYvalue = document.form1.st_year.options[document.form1.st_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.form1.st_day;
		optionsClear(e);
		return;
	}
	var n = MonHead[str - 1];
	if (str == 2 && IsPinYear(YYYYvalue)) n++;
	writeDay(n)
}

function writeDay(n) //据条件写日期的下拉框
{
	var e = document.form1.st_day;
	optionsClear(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYear(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClear(e) {
	e.options.length = 0;
}

/** 活动结束日期**/
function YYYYMMDDfinish() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.form2.finish_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.form2.finish_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.form2.finish_month.options.add(new Option(i, i));
	// document.form2.finish_year.value = y;
	// document.form2.finish_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	// writeDay1(n); //赋日期下拉框
	// document.form2.finish_day.value = new Date().getDate();
}
// if (document.attachEvent)
// 	window.attachEvent("onload", YYYYMMDDfinish);
// else
// 	window.addEventListener('load', YYYYMMDDfinish, false);

// removed by dyz
document.addEventListener('plusready', onPlusReady, false);
function onPlusReady(){
	console.log("_________________ badge_number",badge_number)
	plus.runtime.setBadgeNumber(badge_number)
}

function YYYYDD1(finish) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.form2.finish_month.options[document.form2.finish_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.form2.finish_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear1(finish)) n++;
	writeDay1(n)
}

function MMDD1(finish) //月发生变化时日期联动
{
	var YYYYvalue = document.form2.finish_year.options[document.form2.finish_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.form2.finish_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[finish - 1];
	if (finish == 2 && IsPinYear1(YYYYvalue)) n++;
	writeDay1(n)
}

function writeDay1(n) //据条件写日期的下拉框
{
	var e = document.form2.finish_day;
	optionsClear1(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYear1(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClear1(e) {
	e.options.length = 0;
}

// 报名截止时间
function YYYYMMDDend() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.form3.end_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.form3.end_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.form3.end_month.options.add(new Option(i, i));
	// document.form3.end_year.value = y;
	// document.form3.end_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	// writeDay2(n); //赋日期下拉框
	// document.form3.end_day.value = new Date().getDate();
}
// if (document.attachEvent)
// 	window.attachEvent("onload", YYYYMMDDend);
// else
// 	window.addEventListener('load', YYYYMMDDend, false);

// function YYYYDD2(end) //年发生变化时日期发生变化(主要是判断闰平年)
// {
// 	var MMvalue = document.form3.end_month.options[document.form3.end_month.selectedIndex].value;
// 	if (MMvalue == "") {
// 		var e = document.form3.end_day;
// 		optionsClear1(e);
// 		return;
// 	}
// 	var n = MonHead[MMvalue - 1];
// 	if (MMvalue == 2 && IsPinYear1(end)) n++;
// 	writeDay1(n)
// }

function MMDD2(end) //月发生变化时日期联动
{
	var YYYYvalue = document.form3.end_year.options[document.form3.end_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.form3.end_day;
		optionsClear2(e);
		return;
	}
	var n = MonHead[end - 1];
	if (end == 2 && IsPinYear2(YYYYvalue)) n++;
	writeDay2(n)
}

function writeDay2(n) //据条件写日期的下拉框
{
	var e = document.form3.end_day;
	optionsClear1(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYear2(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClear2(e) {
	e.options.length = 0;
}

//新增专项工作报告
// function YYYYMMDDZX() {
// 	MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 	//先给年下拉框赋内容
// 	var y = new Date().getFullYear();
// 	for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
// 		document.form.zx_year.options.add(new Option(i, i));
// 	for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
// 		document.form.zx_year.options.add(new Option(i, i));
// 	//赋月份的下拉框
// 	for (var i = 1; i < 13; i++)
// 		document.form.zx_month.options.add(new Option(i, i));
// 	document.form.zx_year.value = y;
// 	document.form.zx_month.value = new Date().getMonth() + 1;
// 	var n = MonHead[new Date().getMonth()];
// 	if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
// 	writeDayZX(n); //赋日期下拉框
// 	document.form.zx_day.value = new Date().getDate();
// }
// if (document.attachEvent)
// 	window.attachEvent("onload", YYYYMMDDZX);
// else
// 	window.addEventListener('load', YYYYMMDDZX, false);

// function YYYYDDZX(zx) //年发生变化时日期发生变化(主要是判断闰平年)
// {
// 	var MMvalue = document.form.zx_month.options[document.form.zx_month.selectedIndex].value;
// 	if (MMvalue == "") {
// 		var e = document.form.zx_day;
// 		optionsClear1(e);
// 		return;
// 	}
// 	var n = MonHead[MMvalue - 1];
// 	if (MMvalue == 2 && IsPinYear1(zx)) n++;
// 	writeDayZX(n)
// }

function MMDDZX(zx) //月发生变化时日期联动
{
	var YYYYvalue = document.form.zx_year.options[document.form.zx_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.form.zx_day;
		optionsClearZX(e);
		return;
	}
	var n = MonHead[zx - 1];
	if (zx == 2 && IsPinYearZX(YYYYvalue)) n++;
	writeDayZX(n)
}

function writeDayZX(n) //据条件写日期的下拉框
{
	var e = document.form.zx_day;
	optionsClearZX(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYearZX(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClearZX(e) {
	e.options.length = 0;
}

//新增执法检查
function YYYYMMDDZF() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.formZF.zf_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.formZF.zf_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.formZF.zf_month.options.add(new Option(i, i));
	// document.formZF.zf_year.value = y;
	// document.formZF.zf_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	// writeDayZF(n); //赋日期下拉框
	// document.formZF.zf_day.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDZF);
else
	window.addEventListener('load', YYYYMMDDZF, false);

function YYYYDDZF(zf) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.formZF.zf_month.options[document.formZF.zf_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.formZF.zf_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear1(zf)) n++;
	writeDayZF(n)
}

function MMDDZF(zf) //月发生变化时日期联动
{
	var YYYYvalue = document.formZF.zf_year.options[document.formZF.zf_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.formZF.zf_day;
		optionsClearZF(e);
		return;
	}
	var n = MonHead[zf - 1];
	if (zf == 2 && IsPinYearZF(YYYYvalue)) n++;
	writeDayZF(n)
}

function writeDayZF(n) //据条件写日期的下拉框
{
	var e = document.formZF.zf_day;
	optionsClearZF(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYearZF(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClearZF(e) {
	e.options.length = 0;
}

//新增特定问题调查
function YYYYMMDDTD() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.formtd.td_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.formtd.td_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.formtd.td_month.options.add(new Option(i, i));
	// document.formtd.td_year.value = y;
	// document.formtd.td_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	// writeDayTD(n); //赋日期下拉框
	// document.formtd.td_day.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDTD);
else
	window.addEventListener('load', YYYYMMDDTD, false);

function YYYYDDTD(td) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.formtd.td_month.options[document.formtd.td_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.formtd.td_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear1(td)) n++;
	writeDayTD(n)
}

function MMDDZF(td) //月发生变化时日期联动
{
	var YYYYvalue = document.formtd.td_year.options[document.formtd.td_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.formtd.td_day;
		optionsClearTD(e);
		return;
	}
	var n = MonHead[td - 1];
	if (td == 2 && IsPinYearTD(YYYYvalue)) n++;
	writeDayTD(n)
}

function writeDayTD(n) //据条件写日期的下拉框
{
	var e = document.formtd.td_day;
	optionsClearTD(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYearTD(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClearTD(e) {
	e.options.length = 0;
}
//新增撤职案的审议和决定
function YYYYMMDDCZ() {
	MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	//先给年下拉框赋内容
	var y = new Date().getFullYear();
	for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
		document.formcz.cz_year.options.add(new Option(i, i));
	for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
		document.formcz.cz_year.options.add(new Option(i, i));
	//赋月份的下拉框
	for (var i = 1; i < 13; i++)
		document.formcz.cz_month.options.add(new Option(i, i));
	document.formcz.cz_year.value = y;
	document.formcz.cz_month.value = new Date().getMonth() + 1;
	var n = MonHead[new Date().getMonth()];
	if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	writeDayCZ(n); //赋日期下拉框
	document.formcz.cz_day.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDCZ);
else
	window.addEventListener('load', YYYYMMDDCZ, false);

function YYYYDDCZ(cz) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.formcz.cz_month.options[document.formcz.cz_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.formcz.cz_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear1(td)) n++;
	writeDayCZ(n)
}

function MMDDZF(cz) //月发生变化时日期联动
{
	var YYYYvalue = document.formcz.cz_year.options[document.formcz.cz_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.formcz.cz_day;
		optionsClearCZ(e);
		return;
	}
	var n = MonHead[cz - 1];
	if (cz == 2 && IsPinYearCZ(YYYYvalue)) n++;
	writeDayCZ(n)
}

function writeDayCZ(n) //据条件写日期的下拉框
{
	var e = document.formcz.cz_day;
	optionsClearCZ(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYearCZ(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClearCZ(e) {
	e.options.length = 0;
}

//新增视察方案
function YYYYMMDDSC() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.formsc.sc_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.formsc.sc_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.formsc.sc_month.options.add(new Option(i, i));
	// document.formsc.sc_year.value = y;
	// document.formsc.sc_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	// writeDaySC(n); //赋日期下拉框
	// document.formsc.sc_day.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDSC);
else
	window.addEventListener('load', YYYYMMDDSC, false);

function YYYYDDCZ(sc) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.formsc.sc_month.options[document.formsc.sc_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.formsc.sc_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYear1(td)) n++;
	writeDaySC(n)
}

function MMDDZF(sc) //月发生变化时日期联动
{
	var YYYYvalue = document.formsc.sc_year.options[document.formsc.sc_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.formsc.sc_day;
		optionsClearSC(e);
		return;
	}
	var n = MonHead[sc - 1];
	if (sc == 2 && IsPinYearSC(YYYYvalue)) n++;
	writeDaySC(n)
}

function writeDaySC(n) //据条件写日期的下拉框
{
	var e = document.formsc.sc_day;
	optionsClearSC(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYearSC(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClearSC(e) {
	e.options.length = 0;
}

//新增调研方案
function YYYYMMDDDT() {
	// MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// //先给年下拉框赋内容
	// var y = new Date().getFullYear();
	// for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
	// 	document.formdy.dy_year.options.add(new Option(i, i));
	// for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
	// 	document.formdy.dy_year.options.add(new Option(i, i));
	// //赋月份的下拉框
	// for (var i = 1; i < 13; i++)
	// 	document.formdy.dy_month.options.add(new Option(i, i));
	// document.formdy.dy_year.value = y;
	// document.formdy.dy_month.value = new Date().getMonth() + 1;
	// var n = MonHead[new Date().getMonth()];
	// if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	// writeDayDY(n); //赋日期下拉框
	// document.formdy.dy_day.value = new Date().getDate();
}
if (document.attachEvent)
	window.attachEvent("onload", YYYYMMDDDT);
else
	window.addEventListener('load', YYYYMMDDDT, false);

function YYYYDDDY(dy) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.formdy.dy_month.options[document.formdy.dy_month.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.formdy.dy_day;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYearDY(td)) n++;
	writeDayDY(n)
}

function MMDDDY(dy) //月发生变化时日期联动
{
	var YYYYvalue = document.formdy.dy_year.options[document.formdy.dy_year.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.formdy.dy_day;
		optionsClearSC(e);
		return;
	}
	var n = MonHead[dy - 1];
	// if (dy) n++;
	writeDayDY(n)
}

function writeDayDY(n) //据条件写日期的下拉框
{
	var e = document.formdy.dy_day;
	optionsClearSC(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

function IsPinYearDY(year) //判断是否闰平年
{
	return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
}

function optionsClearSC(e) {
	e.options.length = 0;
}

//我的调研方案
function YYYYMMDDDT2() {
	MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	//先给年下拉框赋内容
	var y = new Date().getFullYear();
	for (var i = (y - 5); i <= y; i++) //以今年为准，前5年，后5年
		document.formdy2.dy_year2.options.add(new Option(i, i));
	for (var i = y + 1; i < y + 6; i++) //以今年为准，前5年，后5年
		document.formdy2.dy_year2.options.add(new Option(i, i));
	//赋月份的下拉框
	for (var i = 1; i < 13; i++)
		document.formdy2.dy_month2.options.add(new Option(i, i));
	document.formdy2.dy_year2.value = y;
	document.formdy2.dy_month2.value = new Date().getMonth() + 1;
	var n = MonHead[new Date().getMonth()];
	if (new Date().getMonth() == 1 && IsPinYear1(y)) n++;
	writeDayDY2(n); //赋日期下拉框
	document.formdy2.dy_day2.value = new Date().getDate();
}
// if (document.attachEvent)
// 	window.attachEvent("onload", YYYYMMDDDT2);
// else
// 	window.addEventListener('load', YYYYMMDDDT2, false);
//日期框
$('.date-picker').datepicker({
				autoclose: true,
				todayHighlight: true
			});			

function YYYYDDDY2(dy) //年发生变化时日期发生变化(主要是判断闰平年)
{
	var MMvalue = document.formdy2.dy_month2.options[document.formdy2.dy_month2.selectedIndex].value;
	if (MMvalue == "") {
		var e = document.formdy2.dy_day2;
		optionsClear1(e);
		return;
	}
	var n = MonHead[MMvalue - 1];
	if (MMvalue == 2 && IsPinYearDY(td)) n++;
	writeDayDY2(n)
}

function MMDDDY2(dy) //月发生变化时日期联动
{
	var YYYYvalue = document.formdy2.dy_year2.options[document.formdy2.dy_year2.selectedIndex].value;
	if (YYYYvalue == "") {
		var e = document.formdy2.dy_day2;
		optionsClearSC(e);
		return;
	}
	var n = MonHead[dy - 1];
	// if (dy) n++;
	writeDayDY2(n)
}

function writeDayDY2(n) //据条件写日期的下拉框
{
	var e = document.formdy2.dy_day2;
	optionsClearSC(e);
	for (var i = 1; i < (n + 1); i++)
		e.options.add(new Option(i, i));
}

























function plusReady() {
	plus.runtime.setBadgeNumber(badge_number)
	// 监听“返回”按钮事件
	plus.key.addEventListener("backbutton", function() {
		
		var str = window.location.href;
		// alert(str)
		var path = str.substring(str.lastIndexOf("#") + 1);
		if (path != "noticebulletin" && path != "suggest" && path != "supervRD" && path != "statistics" && path !=
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

function showRealName(val) {
	return new Promise((resolve, reject) => {
		RssApi.Table.List("user").setLoading(false).condition(new RssDict().keyvalue({
							"myid": val
						}).getDict()).getJson(function(json) {	
						    var data = json[0];							
							var realname =  data["realname"];
							// console.log("realname=",realname )
							resolve(realname)
						})
	});
}

function getnotifymessages(val , infotype) {
	return new Promise((resolve, reject) => {
		RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
							"infotype": infotype,
							"state": "1",
							"relationid": val
						}).getDict()).getJson(function(json) {	
							// console.log("____ getnotifymessages json ", json )
						    var data = json[0];							
							//var realname =  data["realname"];
							var counter = 0 ;
							
							for (var i = 0; i < json.length; i++) {
								var data = json[i];
								var userid = data["userid"] ;
								// console.log("____ userid ", userid )
								// console.log("____ RssUser.Data.myid ", RssUser.Data.myid )
								if ( userid == null ) {
									counter ++ ;
									// console.log("____ getnotifymessages counter11 ", counter )
									continue ;
								}
								if ( userid.indexOf(RssUser.Data.myid) == -1 ) {
									counter ++ ;
									// console.log("____ getnotifymessages counter ", counter )
								}
							}				
							// console.log("realname=",realname )
							resolve(counter)
						})
	});
}



function getUseridOfnotifymessage(val ,infotype) {
	 console.log("_____ getUseridOfnotifymessage=",val )
	return new Promise((resolve, reject) => {
		RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
							"infotype": infotype ,
							"state": "1",
							"relationid": val
						}).getDict()).getJson(function(json) {	
							console.log("___ getUseridOfnotifymessage json=",json )
						    var data = json[0];							
							var userid = "";
							for (var i = 0; i < json.length; i++) {
								var data = json[i];
								userid = data["userid"] ;
								
							}				
							// console.log("realname=",realname )
							resolve(userid)
						})
	});
}

//ting 查看活动报名列表的记录信息
function seeInfo(key) {
	var realname=""; 	
	var obj = "activityenroll"; //activityHD
	var hisbackaa = "#" + obj + ".hisbackaa";
	var activityType = 1 ;
	viewEnrollInformation( activityType , obj ,key );
	$("#activityenroll .hisbackaa").click(function() {
			location.href = "#applyHD";
	});		
			
}

function seeActivityInfo(key) {
	var realname=""; 
	var obj = "activityHD";
	var activityType = 1 ;
	viewActivityInformation( activityType , obj ,key );
	$("#activityHD .hisbackaa").click(function() {
		location.href = "#marchHD";
	});	
}


//活动进行中考勤
function attendActivity( key ) {
	var userids = "";
	var id = "";
	console.log("____ key =", key )
	RssApi.Table.List("activities_userlist").setLoading(true).condition(new RssDict().keyvalue({
		"activitiesid": key,
		// "attendancetype": 2,
		"userid": RssUser.Data.myid
	}).getDict()).getJson(function(json) {				
		console.log("____",json)
		//把activity的记录拷贝到activities_userlist
		if ( json[0].attendancetype == 2 ) {
			// if ( json.length > 0 ) {
			alert("已考勤");
			return;
		}
		
		RssApi.Edit("activities_userlist").setLoading(true).keyvalue({
			"id":json[0].id,
			"activitiesid": key,
			"jointype": 2,
			"attendancetype": 2,
			"shijian": json[0].shijian,
			"myid": json[0].myid ,
			"userid": RssUser.Data.myid	
		}).getJson(function(jsonnn) {
			$("#btn_attendance").hide();
			alert("考勤成功");
		})						
	})		
}


function attendSign( key ) {
	var enrollname = "";
	RssApi.Table.List("user").setLoading(true).condition(new RssDict().keyvalue({
		"myid": RssUser.Data.myid
		///"userid": RssUser.Data.myid
	}).getDict()).getJson(function(json) {	
		enrollname = json[0].realname;
		console.log("___ attendSign enrollname= ",json[0].realname)
		
	})
	// var id = $(this).parent().attr("id");
			//var key = $(this).parent().attr("id");
			// console.log("_____objid=",RssUser.Data.myid)
	RssApi.Table.Details("activities_userlist").setLoading(false).condition(new RssDict()
		.keyvalue({
			"activitiesid": key,
			"userid": RssUser.Data.myid
		}).getDict()).getJson(function(json) {
		if (json.jointype == "2") {
			alert("已经报名过了");
		} else {
			//console.log("___ key ",key)
			
		var id = $(this).parent().attr("id"); 
						
		RssApi.Table.List("activities").setLoading(true).condition(new RssDict().keyvalue({
			"id": key
			///"userid": RssUser.Data.myid
		}).getDict()).getJson(function(json) {				
			console.log("____",json)
			//把activity的记录拷贝到activities_userlist
			var activitiesid = json[0].id;
			var currentperson = parseInt(json[0].currentperson);
			console.log("____activitiesid=",activitiesid)
			RssApi.Edit("activities_userlist").setLoading(true).keyvalue({
				"activitiesid": activitiesid,
				"jointype": 2,
				"attendancetype": 1,
				"enrollname": enrollname,
				"shijian": json[0].shijian,
				"myid": json[0].myid ,
				"userid": RssUser.Data.myid							
			
			}).getJson(function(jsonnn) {
				//console.log(" _______ ",jsonnn)
				$("#btn_enroll").hide();
				alert("报名成功");
			})																		
		
		})	
	}

	})
}

function showpersonInformation(  key ) //显示个人信息
{
	//var key = $(this).parent().attr( sortid );
	RssApi.View.List("sort").setLoading(true).condition(new RssDict()
		.keyvalue({
			"sortid": key
		}).getDict()).getJson(function(json) {
		console.log(json)
		var shijian = "",
			level = ""
		$("#seesuggest article").mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(
					val) * 1000).toString(
					"yyyy-MM-dd hh:mm");
			},
			"level": function(val) {
				return level = dictdata.circles[
					val];
			},

			// "examination": function(val) {
			// 	if (val == "1") {
			// 		return examination = "未审查";
			// 	} else if (val == "2") {
			// 		return examination = "已审查";
			// 	} else if (val == "3") {
			// 		return examination = "置回";
			// 	} else if (val == "4") {
			// 		return examination = "待审查";
			// 	} else if (val == "5") {
			// 		return examination = "乡镇已审查";
			// 	}
			// }
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
			}
		})
		$.each(json, function(k, v) {
			$("#seesuggest article").append(
				'<div class="divtop"><h1 >' + v
				.sessionname + '</h1><h2>[第' + v
				.realid +
				'号]</h2><h3>' + v.title +
				'</h3><h4 >提出者:' + v.realname +
				'</h4><h4 shijian>' + shijian +
				'</h4></div><div class="divp">' + v
				.matter +
				'</div><div class="no"  >会议次数：' + v
				.csname +
				'</div><div class="no"  >层次：' +
				level +
				'</div><div class="no">：' + v
				.scname +
				'</div><div class="no fj">附件：<span>' +
				v.enclosure + '<span></div>')
		})
		
		
	})	
}
function enterAttachment(attachment) {
	//location.href = "http://117.158.113.36:9002/upfile/" + attachment;
	var dz = myip + "upfile/" + attachment;
	if (dz.indexOf(".doc") != -1) {
		var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
		xurl += encodeURIComponent(dz);
		window.open(xurl);
	} 
	else if (dz.indexOf(".pdf") != -1){
		var pdfh5 = new Pdfh5('.pdfjs8', {
			pdfurl: dz
		});
	}
	else {
		location.href = dz;
	}
}

function enterAttachmentPath(attachment) {
	var dz = myip + "upfile/" + attachment;
	if (dz.indexOf(".doc") != -1) {
		var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
		xurl += encodeURIComponent(dz);
		window.open(xurl);
	} 
	else if (dz.indexOf(".pdf") != -1) {
		var pdfh5 = new Pdfh5('#seeendsupspecialwork article', {
			pdfurl: dz
		});
	}
	else {
		location.href = dz;
	}
}

//查看履职详情
function viewrankDetail ( obj , key  ){
	
	var table = "rank_sort";
	var removeObj = "#" + obj + " article .no1";
	var removeH3Obj = "#" + obj + " article h3";
	
	var appendObj = "#" + obj + " article";
	var  index = 0 ;
	var k_condition = {
		"id": key
	};
	$( removeObj ).remove();
	$( removeH3Obj ).html("");
	RssApi.Table.List( table ).setLoading(true).condition(new RssDict()
			.keyvalue( k_condition ).getDict()).getJson(function(json) {
		
		$.each( json , function(k, v) {
			var meeting = v.meeting ;
			var othering = v.othering ;
			var study = v.study ;
			var suggest = v.suggest ;
			var specialsurvey = v.specialsurvey ;
			var totalMixActivities = v.totalMixActivities ;
			var meeting = v.meeting ;
			var meeting = v.meeting ;
			var meeting = v.meeting ;
			var meeting = v.meeting ;
			var meeting = v.meeting ;
			
			$( appendObj ).append(
			'<div class="divtop2">' +
			'<h3>' + v.realname +'</h3>' + 
			'<h4 > ' + " " +
		
			'</h3><h4 author>出席人代会: ' + meeting +
			'</h4><h4 shijian>参加其他会议: ' + othering +
			'</h4><h4 shencha>参加学习培训: ' + study +
			'</h4><h4 leixing>提出议案，建议、批评和意见: ' + suggest + '</h4>' + 
			'<h4 leixing>开展专题调研: ' + specialsurvey +  								
			'</h4><h4 shencha>参加视察、调研及执法检查: ' + totalMixActivities +
			'</h4></div>'
			)	
		})
		})
}
//查看建议议案的具体内容
function viewSuggestDetail( obj , reject ,lwstate ,key ) {
	// var fjObj_span = "#seesuggest article .fj span";
	// var fjObj = "#seesuggest article .fj";
	// var appendObj = "#seesuggest article";
	var fjObj_span = "#" + obj + " article .fj span";
	var fjObj = "#" + obj + " article .fj";
	var article_fj = "#" + obj + " article";
	
	var appendObj = "#" + obj + " article";
	var removeObj = "#" + obj + " article .no1";
	var removeH3Obj = "#" + obj + " article h3";
	
	var  index = 0 ;
	if ( obj.indexOf("handlesuggestinfo") != -1  ) {
		index = 1 ;
		fjObj_span = "#handlesuggestinfo article .fj span";
		fjObj = "#handlesuggestinfo article .fj";
		removeObj = "#" + obj + " article .ul .li";
	}
	
	var k_condition = {
		"sortid": key
	};
	if ( obj.indexOf("seeWDF") != -1  ) {
		k_condition = {
			"id": key,
			"resume": "0",
			"consultation": "0"
		}
	}
	else if ( obj.indexOf("seeYDF") != -1  ) {
		k_condition = {
			"id": key,
			"resume": "1",
			"consultation": "0"
		}
	}
	else if ( obj.indexOf("seeDFYJ") != -1  ) {
		k_condition = {
			"id": key,
			"resume": "1"
		}
	}
	else if ( obj.indexOf("seeYTX") != -1  ) {
		k_condition = {
			"id": key,
			"resume": "1",
			"consultation": "1"
		}
	}
	// $( obj ).find("header>h1").text("汝州人大");

	// $('#seesuggest article .no1').remove();
	$( removeObj ).remove();
	$( removeH3Obj ).html("");
				//var key = $(this).parent().attr("sortid");
		RssApi.View.List("sort").setLoading(true).condition(new RssDict()
			.keyvalue(
			// {
			// "sortid": key
			k_condition
			// }
		).getDict()).getJson(function(json) {
	
		console.log(json)
		var shijian = "",
		level = ""
		
		//置回理由
		var rejectReason = "";
		
		//获取附件名称
		var enclosurename = "";
		var enclousre = "";
		// RssApi.Table.List("suggest").setLoading(false)
		// .condition(new RssDict().keyvalue({
		// 	"id": key
		// }).keyvalue().getDict()).getJson(function( bill ) {
			
			$.each( json , function(k, v) {
				enclousre = v.enclosure ;
				enclosurename = v.enclosurename ;
			})
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
			var noAttachement = 0 ;
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
													
			var examination = "未审核";
			$( appendObj ).mapview(json, {
			// $("#seesuggest article").mapview(json, {
				
				"shijian": function(val) {
					return shijian = new Date(parseInt(
						val) * 1000).toString(
						"yyyy-MM-dd hh:mm");
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
					examination = state ;
					 return state ;
					}
				// "examination": function(val) {
				// 	if (val == "1") {
				// 		return examination = "未审查";
				// 	} else if (val == "2") {
				// 		return examination = "已审查";
				// 	} else if (val == "3") {
				// 		return examination = "置回";
				// 	} else if (val == "4") {
				// 		return examination = "待审查";
				// 	} else if (val == "5") {
				// 		return examination = "乡镇已审查";
				// 	}
				// }
			})
			$.each(json, function(k, v) {
				if ( v.reviewclass == 1 ){
					v.reviewclass ="经济类" ;
				}
				else if ( v.reviewclass == 2 ){
					v.reviewclass ="人文教育类" ;
				}
				else if ( v.reviewclass == 3 ){
					v.reviewclass ="环境保护类" ;
				}
				else if ( v.reviewclass == 4 ){
					v.reviewclass ="交通类" ;
				}
				else if ( v.reviewclass == 5 ){
					v.reviewclass ="城乡建设类" ;
				}
				else if ( v.reviewclass == 6 ){
					v.reviewclass ="人事福利类" ;
				}
				var attachment = v.enclosure;												
				var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;				
				var xieban = '<h4 leixing>协办单位: ' + v.company + '</h4>' ;
				var attachmentOnclick = '<h4 fj> onclick="enterAttachment(\''+attachment+'\')">附件: ' + enclosurename + '</h4>' ;

				attachmentPath =  attachment;
				if ( "undefined".indexOf(attachment) != -1 ) {
					attachment = "无";
					attachmentDiv = '</div><div class="fj no">附件：' + attachment;
					noAttachement = 1 ;
					
				}
				if ( "暂无".indexOf(v.company) != -1 ) {
					xieban ="";
				}
				//置回
				if ( reject == 1 ) {
				rejectReason = v.buyBack;
				}
											

				if ( noAttachement ==  1 ) {
					$( appendObj ).append(
					//$("#seesuggest article").append(
						'<div class="divtop2">' +
						'<h3>' + v.title +'</h3>' + 
						'<h4 > ' + " " +										
						'</h3><h4 author>提出者: ' + v.realname +
						'</h4><h4 shijian>时间: ' + shijian +
						'</h4><h4 shencha>审查状态: ' + examination +
						'</h4><h4 leixing>分类: ' + v.reviewclass + '</h4>' + 
						'<h4 leixing>主办单位: ' + v.realcompanyname +  								
						xieban + 
						fuyi +  		
						'</h4></div>' + 	
						'<div class="contentdivp">' + v.matter + '</div>' 			
						)
				}else {
					
				$( appendObj ).append(
				// $("#seesuggest article").append(
					'<div class="divtop2">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +

					'</h3><h4 author>提出者: ' + v.realname +
					'</h4><h4 shijian>时间: ' + shijian +
					'</h4><h4 shencha>审查状态: ' + examination +
					'</h4><h4 leixing>分类: ' + v.reviewclass + '</h4>' + 
					'<h4 leixing>主办单位: ' + v.realcompanyname +  								
					xieban + 
					fuyi +  		
				  

					
					'</h4></div>' + 
					'<div class="attachment fj"><span>'  + '<span></div>' + 

				  //'<div class="attachment fj">附件：<span>' + enclosurename + '<span></div>' + 
					
					'<div class="contentdivp">' + v.matter + '</div>' 								
					)
				}//else end
					
			}) ///each结束

			if ( noAttachement == 0 ) {
				var dfenclosure = $( fjObj_span ).text();
				dfenclosure =  attachmentPath ;	
				var str = dfenclosure.split(",");
				var html = ""
				$.each(str, function(idx, value) {	
					if (value != "") {
						html = "<div class='no'><p class='pdfjs8' name='"+value+"'>" + attachmentPath + "</p></div>"
						// if ( index == 0 ) {
						// 	$('#seesuggest  article .fj').append( html );	
						// }
						
						$( fjObj ).append( html );
						
					}
				})
			}
			
			$(".fj p").off().click(function() {
				var path = $(this).attr("name");
				var dz = myip + "upfile/" + path;
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
				else if ( dz.indexOf(".pdf") != -1 ) {
					
					var pdfh5 = new Pdfh5( article_fj , {
						pdfurl: dz
					});
					// if ( index == 0 ) {
					// 	var pdfh5 = new Pdfh5('#seesuggest  article', {
					// 		pdfurl: dz
					// 	});
					// }
					// else if ( index == 1 ) {
					// 	var pdfh5 = new Pdfh5('#handlesuggestinfo  article', {
					// 		pdfurl: dz
					// 	});	
					// }
					
					
					
				}
				else {
					location.href = dz;
				}
			})//$(".fj p").off().click(function() 结束
			
				
				
				
				
				
				
				
				
			})//获取联名代表结束
		})//获取附件名称结束
			

	// })
		
	
}



//查看满意率统计具体内容
function viewSuggestInformation( Obj, key ) {
	
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
				$.each(json, function(k, v) {
					
					//var noAttachement = 0 ;
					// var attachment = v.enclosure;	
					attachment = v.enclosure;	
					var attachmentDiv = '</div><div class="fj no" onclick="enterAttachment(\''+attachment+'\')">附件：' + attachment;					
					var xieban = '<h4 leixing>协办单位: ' + v.company + '</h4>' ;
					
					var attachmentOnclick = '<h4 fj> onclick="enterAttachment(\''+attachment+'\')">附件: ' + enclosurename + '</h4>' ;
					attachmentPath =  attachment;
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
							'<div class="divtop2">' +
							'<h3>' + v.title +'</h3>' + 
							'<h4 > ' + " " +										
							'</h3><h4 author>提出者: ' + v.realname +
							'</h4><h4 shijian>时间: ' + shijian +
							'</h4><h4 shencha>办理状态: ' + checkState +
							'</h4><h4 leixing>分类: ' + v.reviewclass + '</h4>' + 
							'<h4 leixing>主办单位: ' + v.realcompanyname +  								
							xieban + 
							fuyi +  		
							'</h4></div>' + 	
							'<div class="contentdivp">' + v.matter + '</div>' 			
							)
					}else {
					$( appendObj ).append(
						'<div class="divtop2">' +
						'<h3>' + v.title +'</h3>' + 
						'<h4 > ' + " " +

						'</h3><h4 author>提出者: ' + v.realname +
						'</h4><h4 shijian>时间: ' + shijian +
						'</h4><h4 shencha>办理状态: ' + checkState +
						'</h4><h4 leixing>分类: ' + v.reviewclass + '</h4>' + 
						'<h4 leixing>主办单位: ' + v.realcompanyname +  								
						xieban + 
						fuyi +  		
					  

						
						'</h4></div>' + 
						
					  '<div class="attachment fj"><span>'  + '<span></div>' + 
					  // '<div class="attachment fj">附件：<span>' +  v.enclosure + '<span></div>' + 
						
						'<div class="contentdivp">' + v.matter + '</div>' 								
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


//获取建议状态
function getSuggestState ( v ) {
	var result = "未审查"
	if ( v.iscs == "1" ) {
	    result = "待复审"
	}

	if (v.examination == "2" ) {
		result = "待交办"
		btnAuditShow = "0" ;
		if ( v.handlestate == "2"  || v.handlestate == "1" ){ //建议议案办理状态1:未确定,2待确定,3已确定,4申退中
			result = "待复审"
		}
	}
	if ( v.isxzsc == "1" ) {
		result = "待交办"
		if ( v.handlestate == "2"  ){ //建议议案办理状态1:未确定,2待确定,3已确定,4申退中
			result = "待复审"
		}
	}

	if ( v.handlestate == "3" ) {
		result = "待交办"
		if ( v.deal == "1"  ) {
			result = "待办复"
		}
	}
	if ( v.handlestate == "4" ) {
		result = "已驳回"
	}


	if ( v.handlestate == "3"  ) {
		result = "待办复"
		if ( v.deal == "0"  ) {
			result = "待交办"
		}
	}
	if ( v.resume == "1" && v.examination == "2"  ) {
		result = "已办复"
	}
	if ( v.examination == "3"  ) {
		result = "已置回"
	}
	return result;
}
//判断是否进行中
function isongoing (  v ){
	var result = 0 ;
	var time = (new Date()).getTime() / 1000;
	var beginyear = 0 ;
	var beginmonth = 0 ;
	var beginday = 0 ;
	
	var finishyear = 0 ;
	var finishmonth = 0 ;
	var finishday = 0 ;
	
	var currentyear = 0 ;
	var currentmonth = 0 ;
	var currentday = 0 ;
	
	var beginshijian = new Date(parseInt( v.beginshijian ) * 1000).toString("yyyy-MM-dd");
	var currentshijian = new Date(parseInt(time) * 1000).toString("yyyy-MM-dd");
	var finishshijian = new Date(parseInt( v.finishshijian ) * 1000).toString("yyyy-MM-dd");
	
	var str = beginshijian.split("-");
	$.each(str, function(idx, value) {
		if ( idx == 0 ) {
		    beginyear = parseInt( value );
		}
		else if ( idx == 1 ) {
		    beginmonth = parseInt( value );
		}
		else if ( idx == 2 ) {
		    beginday = parseInt( value );
		}
	})
	
	str = finishshijian.split("-");
	$.each(str, function(idx, value) {
		if ( idx == 0 ) {
		    finishyear = parseInt( value );
		}
		else if ( idx == 1 ) {
		    finishmonth = parseInt( value );
		}
		else if ( idx == 2 ) {
		    finishday = parseInt( value );
		}
	})
	
	str = currentshijian.split("-");
	$.each(str, function(idx, value) {
		if ( idx == 0 ) {
		    currentyear = parseInt( value );
		}
		else if ( idx == 1 ) {
		    currentmonth = parseInt( value );
		}
		else if ( idx == 2 ) {
		    currentday = parseInt( value );
		}
	})
	
	if ( currentyear ==  beginyear && currentyear ==  finishyear ) {
			if ( currentmonth ==  beginmonth && currentmonth ==  finishmonth ) {
				if ( currentday >= beginday && currentday <= finishday  ) {
				    ///out.print("<em style='color:orange;font-weight:bold;'>活动中</em>");
					result = 1 ;
				}
				else if (  currentday < beginday ) {
				    //out.print("<em style='color:red;font-weight:bold;'>活动未开始</em>");
					result = 0 ;
				}
				else if (  currentday > finishday ) {
				//out.print("<em style='color:#a9a9a9;font-weight:bold;'>活动已结束</em>");
				    result = 2 ;
				}
			}
			else if ( currentmonth >  finishmonth ) {
				//out.print("<em style='color:#a9a9a9;font-weight:bold;'>活动已结束</em>");
				result = 2 ;

			}
			else if ( currentmonth <  beginmonth ) {
				//out.print("<em style='color:red;font-weight:bold;'>活动未开始</em>");
				result = 0 ;

			}
		}
		else if ( currentyear  >  finishyear ) {
			//out.print("<em style='color:#a9a9a9;font-weight:bold;'>活动已结束</em>");
		}
	return result ;

	
}
//查看我的活动具体内容
function viewActivityInformation( activityType , Obj, key ) {
	
	// var fjObj = "#activitysHD article .fj span";
	// var appendObj = "#activitysHD article";
	var fjObj = "#" + Obj + " article .fj span";
	var appendObj = "#" + Obj + " article";
	var removeObj = "#" + Obj + " article .no1";
	var  index = 0 ;
	
	
	$( removeObj ).remove();
	if ( "activityHD".indexOf( Obj ) != -1 ) { //活动进行中的活动详情
		// $('#activityHD article .no1').remove();
		fjObj = "#activityHD article .fj span";
		appendObj = "#activityHD article";
		index =  1;
		
		
	}
	else if ( "resultsHDck".indexOf( Obj ) != -1 ) {
		// $('#resultsHDck article .no1').remove();
		fjObj = "#resultsHDck article .fj span";
		appendObj = "#resultsHDck article";
		index =  2 ;
		
		
	}
	else {
		// $('#activitysHD article .no1').remove();
	}
	
	//因为不能更改activities的currentperson字段，所以采用次方法判断报名人数
	var currentpersons = "" ;
	var enrollname = "";
	RssApi.Table.List("activities_userlist").setLoading(true).condition(new RssDict()
		.keyvalue({
			"activitiesid": key,
			"jointype": 2,
		    // "userid": RssUser.Data.myid
		}).getDict()).getJson(function(json) {	
			currentpersons = json.length ;
			var addecnt = 0 ;
			$.each(json, async function(k, v) {
				if ( addecnt > 0 && v.enroll != 1 )
				{
					
				}
				else {
					enrollname += v.enrollname + " ";	
				}
				addecnt ++ ;
			})

		// RssApi.View.List("activities").setLoading(false).condition(new RssDict()
		RssApi.Table.List("activities").setLoading(true).condition(new RssDict()
			.keyvalue({
				"id": key,
				// "userid": RssUser.Data.myid
			}).getDict()).getJson(function(json) {	
			
			var lmr = "";
			var noAttachement = 0 ;	
				
			var enroll_persons_layout = "";
			var max_enroll_persons = "";
			var activity_arrange = "";
			var department_layout = "";
			//为了处理布局（字体太长覆盖问题)
			// var place_layout = '</h4><h4 shencha2>活动地点: ';
			var place_layout = '</h4><h4 leixing>活动地点: ';		
			$( appendObj ).mapview(json, {
				"shijian": function(val) {
			return shijian = new Date(parseInt(
			val) * 1000)
			.toString("yyyy-MM-dd hh:mm");
			},
			"beginshijian": function(val) {
			return beginshijian = new Date(
			parseInt(val) * 1000)
			.toString("yyyy-MM-dd");
			},
			"finishshijian": function(val) {
			return finishshijian = new Date(
			parseInt(val) *
			1000).toString("yyyy-MM-dd");
			},
			
			"endshijian": function(val) {
				return new Date(parseInt(val) * 1000).toString(
					"yyyy-MM-dd");
			},
			"classify": function(val) {
				return dictdata["activitiestypeclassify"][val];
			},
	
			
		})
		
		var classify = "未知";
		$.each(json, function(k, v) {			
			//把阅读过的用户id写到readuserid里面，表示已经读过
			// console.log("查看我参与的活动，改变通知表状态 v.username =", v.username)	
			changenotifymessageState ( v.id );
			
			attachment = v.enclosure;		
			attachmentPath =  attachment;
			var matter = v.matter;
			var department = v.department;
			var place = v.place ;
			var note = v.note ;
			enclosurename = v.enclosurename;
			var mclassify = v.classify ;
			if ( v.enroll == 3 ) {
				var index = parseInt(mclassify);
				if ( index >= 6 ) {
					index += 2 ; 
					mclassify = index + "";
				}
			}
			classify= dict_classify[parseInt( mclassify )] ;
			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			
			if ( "undefined".indexOf( v.note ) != -1 ) {
				matter = "无内容";				
			}
			if ( "undefined".indexOf( v.place ) != -1 ) {
				place = "未知";				
			}
			
			if ( "undefined".indexOf( v.department ) != -1 ) {
				department = "未知";				
			}
			if ( "undefined".indexOf( v.note ) != -1 ) {
				note = "无内容";				
			}

			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				enclosurename = "无";				
			}
			
			// if ( v.name.indexOf("调研及执法检查") != -1  ||  v.name.indexOf("建议") != -1) {
			// 	place_layout = '</h4><h4 leixing>活动地点: ';
			// }
			// else {
			// 	place_layout = '</h4><h4 shencha2>活动地点: ';
			// }
			
			//todo: 需要处理参与代表

			if ( v.private == 0 && v.enroll == 1 ) 
			{				
				max_enroll_persons = '<h4 leixing>限额报名人数: ' + v.maxperson +  '</h4>'  ;
				enroll_persons_layout = '<h4 shencha2>已报名人数: ' + currentpersons +  '</h4>'  ;
				activity_arrange = '<h4 shencha2>活动安排: ' + note +  '</h4>'  ;
				department_layout = '</h4><h4 leixing>组织部门: ' + department + '</h4>';
			}
			else if ( v.private == 1 ) {
				 department_layout = '</h4><h4 leixing>组织人: ' + v.realname + '</h4>';
			}
			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					'<div class="divtop2">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					
					'</h3><h4 author>提出者: ' + v.realname +
					'</h4><h4 shijian>时间: ' + shijian +
					'</h4><h4 leixing>活动类型: ' + classify +
					// '</h4><h4 shencha2>活动地点: ' + place +		
					place_layout + place +		
													 
					'</h4><h4 leixing>开始时间: ' + beginshijian + '</h4>' + 
					'</h4><h4 shencha2>结束时间: ' + finishshijian + '</h4>' + 
					max_enroll_persons +
					enroll_persons_layout + 
					department_layout + 
					// '</h4><h4 leixing>组织部门: ' + department + '</h4>' +
					'<h4>参与代表: ' + enrollname + 
					'</h4></div>' + 								  				
						'<div class="contentdivp">' + note + '</div>' 								
								
					)
			}else {
				$( appendObj ).append(
					'<div class="divtop2">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +

					'</h3><h4 author>发起者: ' + v.realname +
					'</h4><h4 shijian>时间: ' + shijian +
					'</h4><h4 leixing>活动类型: ' + classify +	
					// '</h4><h4 shencha2>活动地点: ' + place +	
					place_layout + place +		
					'</h4><h4 leixing>开始时间: ' + beginshijian + '</h4>' + 
					'</h4><h4 shencha2>结束时间: ' + finishshijian + '</h4>' + 
					max_enroll_persons +
					enroll_persons_layout + 
					// '</h4><h4 leixing>组织部门: ' + department + '</h4>' +
					department_layout + 
					activity_arrange + 
					'<h4>参与代表: ' + enrollname +
					'</h4></div>' + 					
					  '<div class="attachment fj"><span>'  + '<span></div>' + 				
						'<div class="contentdivp">' + note + '</div>' 								
						)
					}//else end			
				})
				
				
				if ( noAttachement == 0 ) {
				var dfenclosure = $( fjObj ).text();
				
				if (typeof attachment !=  "undefined") {
					dfenclosure =  attachment ;	
				 
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + enclosurename + "</p></div>"
							if ( index == 0 ) {
								$('#activitysHD  article .fj').append( html );	
							}
							else if ( index == 1 ) {
								$('#activityHD article .fj').append( html );
							}
							else if ( index == 2 ) {
								$('#resultsHDck article .fj').append( html );
							}
							else if ( index == 3 ) {
								//$('#seeevaluationYA article .fj').append( html );
							}
							else if ( index == 4 ) {
								//$('#seeevaluationSC article .fj').append( html );
							}
							else if ( index == 5 ) {
								//$('#seeevaluationDY article .fj').append( html );
							}
						}
					})
				}
				
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
						
					//var pdfh5 = new Pdfh5('.pdfjs8', {
						//pdfurl: dz
					
//修改
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} else if (dz.indexOf(".pdf") != -1) {
					if ( index == 0 ) {
						var pdfh5 = new Pdfh5('#activitysHD  article', {
							pdfurl: dz
						});
					} else if ( index == 1 ) {
						var pdfh5 = new Pdfh5('#activityHD article', {
							pdfurl: dz
						});
					} else if ( index == 2 ) {
						var pdfh5 = new Pdfh5('#resultsHDck article', {
							pdfurl: dz
						});
					} else if ( index == 3 ) {
						// var pdfh5 = new Pdfh5('.pdfjs8', {
						// 	pdfurl: dz
						// });
					} else if ( index == 4 ) {
						// var pdfh5 = new Pdfh5('.pdfjs8', {
						// 	pdfurl: dz
						// });
					} else if ( index == 5 ) {
						// var pdfh5 = new Pdfh5('.pdfjs8', {
						// 	pdfurl: dz
						// });
					}		 
					} else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}
					
					
				})
			}) //activities
		})	//读activities_userlist		
}



function getEnrollmessages( myid) {

	return new Promise((resolve, reject) => {
		RssApi.Table.List("user").setLoading(false).condition(new RssDict().keyvalue({
							"myid": myid
						}).getDict()).getJson(function(json) {	
							var value = "";
							$.each(json, function(k, v) {	
								value = v.realname;
							})
							resolve(value)
						})
	});
}
//"myid": RssUser.Data.id
function getEnrollUsers( key  ) {
	var username = [] ;
	return new Promise((resolve, reject) => {
		RssApi.Table.List("activities_userlist").setLoading(false).condition(new RssDict().keyvalue({
			"activitiesid": key
		}).getDict()).getJson(function(json) {	
			console.log("_________ json1 is:", json)
				$.each(json, function(k, v) {	
					
					RssApi.Table.List("user").setLoading(false).condition(new RssDict().keyvalue({
						"myid": v.myid
					}).getDict()).getJson(function(json2) {
						console.log("_________ json2 is:", json2)
						if ( json2.length > 0 ) {
							$.each(json2, function(k, v) {	
								username.push( v.realname );
								console.log("_________ realname1 is:", v.realname)
								resolve( username )
							})
						}
						else {
							username.push("暂无代表报名" );
						}
						
						})		
					resolve( username )
					
				})
				 resolve( username )
		})	
		
	});
}

// counter = await getEnrollmessages( v.id , infotype );

function changenotifymessageState( id ) {	
	RssApi.Table.List("notify_messages").setLoading(true).condition(new RssDict()
		.keyvalue({
			"relationid": id
		}).getDict()).getJson(function(json) {	
		$.each(json, async function(k, v) {	
		var userid = v.userid ;
		if ( v.enroll == 2 ) { //指定报名
			userid = v.readuserid ;
		}
		var relationid = v.relationid ;
		console.log("________ changenotifymessageState userid",userid)
		//更改通知列表
		var users = "";
		if ( "undefined".indexOf(userid ) == 0 ) {
			users = RssUser.Data.myid;
		}
		else {
			if ( userid.indexOf( RssUser.Data.myid ) != -1 ) {
				return;
			}
			users = userid ;
			users += "," + RssUser.Data.myid ;
		}
		if ( v.enroll == 1 ) {
		RssApi.Edit("notify_messages").setLoading(false).keyvalue({
					"id": v.id,
					"title": v.title,
					"shijian": v.shijian,
					 
					"myid": v.myid,
					"relationid": v.relationid,
					"infotype": v.infotype,
					"state": v.state,
					"lwstate": v.lwstate,
					"userid": users,
					"enroll": v.enroll,
					"endshijian": v.endshijian,
					"readuserid": v.readuserid
					}).getJson(function(json) {
					unreadmsg( );
					unreadmsg1( );
				})	
		}//  v.enroll == 1 
		else {
			RssApi.Edit("notify_messages").setLoading(false).keyvalue({
						"id": v.id,
						"title": v.title,
						"shijian": v.shijian,
						 
						"myid": v.myid,
						"relationid": v.relationid,
						"infotype": v.infotype,
						"state": v.state,
						"lwstate": v.lwstate,
						"userid": v.userid,
						"enroll": v.enroll,
						"endshijian": v.endshijian,
						"readuserid": users
						}).getJson(function(json) {
							
						
						unreadmsg( );
						unreadmsg1( );
					})		
		}
		
		
		});
			
	});
		
}
//查看报名列表信息
function viewEnrollInformation( activityType , Obj, key ) {
	var dict_classify = ["未知", "出席人代会","参加其他会议","参加学习培训","提出议案，建议、批评和意见",
	"开展专题调研","参加视察","调研","执法检查","接待选民","化解矛盾纠纷","扶弱济困","办好事、实事","参加公益慈善事业","向选民述职","其他"];
	
	// var fjObj = "#activityHD article .fj span";
	// var appendObj = "#activityHD article";
	
	var fjObj_span = "#" + Obj + " article .fj span";
	var appendObj = "#" + Obj  + " article";
	var removeObj = '#' + Obj  + ' article .no1';
	var fjObj = "#" + Obj  + " article .fj";
	var  index = 0 ;
	var enrolled = "";
	var enrolled_users = "";
	
	
	$(removeObj).remove();
	
//获取已经报名人数
	RssApi.Table.List("activities_userlist").setLoading( false ).condition(new RssDict()
		.keyvalue({
			"activitiesid": key,
			// "userid": RssUser.Data.myid
			"jointype": 2
		}).getDict()).getJson(function(json) {	
		    enrolled = json.length ;
			// console.log("___________ json=",json);
			
			$.each(json, function(k, v) {
				enrolled_users += v.enrollname + " "
			})
		
	    
		// RssApi.View.List("activities").setLoading(true).condition(new RssDict()
		RssApi.Table.List("activities").setLoading(true).condition(new RssDict()
			.keyvalue({
				"id": key
				// "userid": RssUser.Data.userid
			}).getDict()).getJson(function(json) {	
		var lmr = "";
		var noAttachement = 0 ;	
			
		var enroll_persons_layout = "";
		var max_enroll_persons = "";
		var activity_arrange = "";
		
				
		$( appendObj ).mapview(json, {
			"shijian": function(val) {
			return shijian = new Date(parseInt(
			val) * 1000)
			.toString("yyyy-MM-dd hh:mm");
			},
			"beginshijian": function(val) {
			return beginshijian = new Date(
			parseInt(val) * 1000)
			.toString("yyyy-MM-dd");
			},
			"finishshijian": function(val) {
			return finishshijian = new Date(
			parseInt(val) *
			1000).toString("yyyy-MM-dd");
			},
			
			"endshijian": function(val) {
				return new Date(parseInt(val) * 1000).toString(
					"yyyy-MM-dd");
			},
			"classify": function(val) {
				return dictdata["activitiestypeclassify"][val];
			},
	
			
		})
		$.each(json, async function(k, v) {	
			
			
			
			changenotifymessageState ( v.id ) ;
			attachment = v.enclosure;		
			attachmentPath =  attachment;
			var matter = v.matter;
			var department = v.department;
			var place = v.place ;
			var note = v.note ;
			var realname = "";
			
		 //    realname  = await getEnrollmessages( v.myid );
			// users = await getEnrollUsers( key  ) ;
			// console.log("___________ enrolled_users=",enrolled_users)
			
			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			
			if ( "undefined".indexOf( v.matter ) != -1 ) {
				matter = "无内容";				
			}
			if ( "undefined".indexOf( v.place ) != -1 ) {
				place = "未知";				
			}
			
			if ( "undefined".indexOf( v.department ) != -1 ) {
				department = "未知";				
			}
			if ( "undefined".indexOf( v.note ) != -1 ) {
				note = "无内容";				
			}
			

			if ( v.private == 0 && v.enroll == 1 ) 
			{				
				max_enroll_persons = '<h4 leixing>限额报名人数: ' + v.maxperson +  '</h4>'  ;
				enroll_persons_layout = '<h4 shencha2>已报名人数: ' + enrolled +  '</h4>'  ;
				activity_arrange = '<h4 shencha2>活动安排: ' + note +  '</h4>'  ;
			}
			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					'<div class="divenrolltop">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					
					'</h3><h4 author>提出者: ' + v.realname +
					'</h4><h4 shijian>时间: ' + shijian +
					'</h4><h4 leixing>活动类型: ' + dict_classify[parseInt(v.classify)] +
					'</h4><h4 shencha2>活动地点: ' + place +										 
					'</h4><h4 leixing>开始时间: ' + beginshijian + '</h4>' + 
					'</h4><h4 shencha2>结束时间: ' + finishshijian + '</h4>' + 
					max_enroll_persons +
					enroll_persons_layout + 
					'</h4><h4 leixing>组织部门: ' + department + '</h4>' +
					'<h4>报名代表: ' + enrolled_users   + 
					'</h4></div>' + 								  				
						'<div class="contentdivp">' + note + '</div>' 								
								
					)
			}else {
				
				$( appendObj ).append(
					'<div class="divenrolltop">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +

					'</h3><h4 author>发起者: ' + v.realname +
					'</h4><h4 shijian>时间: ' + shijian +
					'</h4><h4 leixing>活动类型: ' + dict_classify[parseInt(v.classify)] +	
					'</h4><h4 shencha2>活动地点: ' + place +	
					'</h4><h4 leixing>开始时间: ' + beginshijian + '</h4>' + 
					'</h4><h4 shencha2>结束时间: ' + finishshijian + '</h4>' + 
					max_enroll_persons +
					enroll_persons_layout + 
					'</h4><h4 leixing>组织部门: ' + department + '</h4>' +
					activity_arrange + 
					'<h4>报名代表: ' + enrolled_users   + 
					'</h4></div>' + 					
					  '<div class="attachment fj"><span>'  + '<span></div>' + 				
						'<div class="contentdivp">' + note + '</div>' 								
						)
					}//else end			
				})
				
				
				if ( noAttachement == 0 ) {
				var dfenclosure = $( fjObj_span ).text();
				
				if (typeof attachment !=  "undefined") {
					dfenclosure =  attachment ;	
				 
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							//html = "<div class='no3'><p class='pdfjs8'>" + value + "</p></div>"
							// if ( index == 0 ) {
							// 	$('#activitysHD  article .fj').append( html );	
							// }
							// else if ( index == 1 ) {
							// 	$('#activityHD article .fj').append( html );
							// 	$('#activityenroll article .fj').append( html );
								
							// }
							// else if ( index == 2 ) {
							// 	$('#resultsHDck article .fj').append( html );
							// }
							$( fjObj ).append( html );
						}
					})
				}
				
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
					var path = $(this).text();
					 var dz = myip + "upfile/" + path;
					//var dz = myip + "upfile/" + attachmentPath;
					// alert(attachmentPath);
					
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if (dz.indexOf(".pdf") != -1){
						var pdfh5 = new Pdfh5('.pdfjs8', {
							pdfurl: dz
						});
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}
				})
				
	
			
			})
	
		})//读activities_userlist
}




function change_notify_table_state( title , key ) {
	
	//条件修改，不知道有没有问题
	RssApi.Table.List("notify_messages").keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
		// "title": title,
		"relationid": key
	}).getDict()).getJson(function(json) {
		
		$.each(json, function(k, v) {	
			// if ( title.indexOf( v.title ) != -1 ) {
				var users = v.readuserid ;
				if ( isEmpty( v.readuserid ) ) {
					users =  RssUser.Data.myid ;
				}
				else {
					users += "," + RssUser.Data.myid;
					
				}
				
				//把已读用户id写notify_messages里面的readuserid字段
				RssApi.Edit("notify_messages").setLoading(true).keyvalue({
					"id": v.id,
					"relationid": v.relationid,
					"title": v.title,
					"shijian": v.shijian,
					"endshijian": v.endshijian,
					"myid": v.myid,
					"lwstate": 1,
					"infotype": v.infotype,
					"state": 2,
					"enroll": v.enroll,
					"userid": v.userid,
					"readuserid": users,
					}).getJson(function(json) {
						// console.log("____ json=",json  )
					unreadmsg1( );
				})
			// }
			
			console.log("____ messageid=",key  )
			// var k1 = {}
			// k1["messageid"] = key;
			// k1["objid"] = RssUser.Data.myid ;
			// RssApi.Edit("lzmessage_read").setLoading(false).keyvalue(k1).keyvalue({
			// 		"groupid": "8"
			// 	}).getJson(function(jsons) {
			// console.log("____ jsons=",jsons  )
				
				
			
		
		})
	})
	
	RssApi.View.List("newinformation").condition(new RssDict().keyvalue({
		"id": key
	}).getDict()).getJson(function(json1) {
		console.log("____ aaaaaa  key=",key )	
		$.each(json1, function(k1, v1) {	
			
			var users = v1.readuser ;
			if ( isEmpty( v1.readuserid ) ) {
				users =  RssUser.Data.myid ;
			}
			else {
				users += "," + RssUser.Data.myid;
				
			}
			
			
			
			RssApi.Edit("newinformation").setLoading(false).keyvalue({
						"id": key,
						// "title": v1.title,
						// "shijian": v1.shijian,
						 
						
						"state": users
						}).getJson(function(json) {
							
						
						unreadmsg1( );
					})		
			
			
		
		})
	})
	
	
}

		
//获取听取和审议专项工作报告进度状态
function getSpecialWorkprogress ( v ) {
	var progress = "主任会议审议";
	if ( v.state == "1" ) {
		progress = "主任会议审议";
	}
	else if ( v.state == "2"  ) {
		progress = "主任会议审议通过";
	}
	else if ( v.state == "3"  ) {
		progress = "交送";
	}
	else if ( v.state == "4"  ) {
		progress = "调研报告和交办主任会审议意见中";
	}
	else if ( v.state == "5"  ) {
		progress = "反馈意见";
	}
	else if ( v.state == "6"  ) {
		progress = "常委会审议";
	}
	else if ( v.state == "7"  ) {
		progress = "";
	}
	else if ( v.state == "8"  ) {
		progress = "常委会审议完成";
	}
	else if ( v.state == "9"  ) {
		progress = "";
	}
	else if ( v.state == "10"  ) {
		progress = "反馈意见";
	}
	else if ( v.state == "11"  ) {
		progress = "向常委会出报告";
	}
	else if ( v.state == "13"  ) {
		progress = "满意度测评";
	}
	else {
		progress = "已完成";
	}
	return progress ;
}


//更改状态
function writeSpecialWorkReadState( v ,index ){
	var finishreadid = v.finishreadid ;  //已完成列表
	var myrecordreadstateids = v.myrecordreadstateids ;//我的列表
	var needWrite = 1 ;
	
	if ( index == 1 ) { //我的列表
		if ( !isEmpty ( v.myrecordreadstateids ) ) {
			myrecordreadstateids =  v.myrecordreadstateids ;
			myrecordreadstateids += "," ;
			if ( isUserExsit( myrecordreadstateids  ) == 1 ) {
				needWrite =  0 ;
			}
		}
		myrecordreadstateids += RssUser.Data.myid ;
	}
	else if ( index == 3 ) { //已完成的工作报告
		needWrite = 1;
		if ( !isEmpty ( v.finishreadid ) ) {
			finishreadid =  v.finishreadid ;
			finishreadid += "," ;
			
			if ( isUserExsit(finishreadid ) == 1 ) {
				needWrite =  0 ;
			}
		}
		finishreadid += RssUser.Data.myid ;
	}
	
	if ( needWrite == 0 ) {
		console.log(" ________ 返回");
		return ;
	}
	
	RssApi.Edit("supervision_specialwork").setLoading(true).keyvalue({
			"id": v.id,
			"title": v.title,
			"notice": v.notice,
			"directormember": v.directormember,
			"membername": v.membername,
			"enclosure": v.enclosure,
			"enclosurename": v.enclosurename,
			"enclosure1": v.enclosure1,
			"enclosurename1": v.enclosurename1,
			"enclosure2": v.enclosure2,
			"enclosurename2": v.enclosurename2,
			"enclosure3": v.enclosure3,
			"enclosurename3": v.enclosurename3,
			"enclosure4": v.enclosure4,
			"enclosurename4": v.enclosurename4,
			"enclosure5": v.enclosure5,
			"enclosurename5": v.enclosurename5,
			"enclosure6": v.enclosure6,
			"enclosurename6": v.enclosurename6,
			"myid": v.myid,
			"shijian": v.shijian,
			"directorshijian": v.directorshijian,
			"directormeetingnum": v.directormeetingnum,
			"committeshijian": v.committeshijian,
			"committemeetingnum": v.committemeetingnum,
			"state": v.state,
			"matter": v.matter,
			"directormatter": v.directormatter,
			"committeematter": v.committeematter,
			"lwstate": v.lwstate,
			
			"userroleid": v.userroleid,
			"organizationid": v.organizationid,
			"rematter": v.rematter,
			"reenclosure": v.reenclosure,
			"reenclosurename": v.reenclosurename,
			"objid": v.objid,
			"typeid": v.typeid,
			"reviewclass": v.reviewclass,
			"initiator": v.initiator,
			"enclosuretemp": v.enclosuretemp,
			"enclosure7": v.enclosure7,
			"enclosurename7": v.enclosurename7,
			
			"taskDone": v.taskDone,
			"evaluateobjid": v.evaluateobjid,
			// "place": v.place,
			// "company": v.company,
			// "taskDone": v.taskDone,
			// "parttimemember": v.parttimemember,
			"expertmemberid": v.expertmemberid,
			"readState": v.readState,
			// "previewleadername": v.previewleadername,
			// "needsubmitmeeting": v.needsubmitmeeting,
			// "previewopinion": v.previewopinion,
			// "meetingshijian1": v.meetingshijian1,
			// "meetingshijian2": v.meetingshijian2,
			// "directormeetingnum1": v.directormeetingnum1,
			// "directormeetingnum2": v.directormeetingnum2,
			
			"myrecordreadstateids": myrecordreadstateids,
			"finishreadid": finishreadid
			}).getJson(function(json) {
			
			unreadmsg( );
			unreadmsg1( );
		})	
	
}

function updateSupervision1( v  ){
	var key = v.id ;
	
	RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(
	   {
		"id": key,				
		"myid": v.myid,
		"state": v.state,
		// "typeid": v.typeid,
		}
	).getJson(function(json) {
			if (json.id) {
				alert( "成功" );
			}else {
				alert("失败");
		}
		location.href = "#supervision";
	})	
	return ;
	RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
		$.each(json, function(k, v) {
			//var state = parseInt(v.state);
			state =7  ;
			RssApi.Edit("supervision_inspection").setLoading(true).keyvalue(
			   {
				"id": key,				
				"myid": v.myid,
				"state": state,
				// "typeid": v.typeid,
				}
			).getJson(function(json) {
					if (json.id) {
						alert( "成功" );
					}else {
						alert("失败");
				}
				location.href = "#supervision";
			})	
		})
	})
		
}
function writereadState( v ,tablename) {
	var mTablename = "supervision_inspection" ;
	var state = parseInt(v.state);
	var solutionReadids = v.solutionReadids;//我的方案已读ids
	var undertakeReadids = v.undertakeReadids; //承办单位已读ids
	var previewleaderReadids = v.previewleaderReadids; //预审已读ids
	var finishReadids = v.finishReadids; //已完成的已读ids
	var parameter = {
		"id": v.id,
	};
	
	if ( !isEmpty( tablename ) ) {
		mTablename =  tablename ;
	}
	
	if ( isEmpty(solutionReadids) ) {
		solutionReadids = RssUser.Data.myid;
	}
	else {
		if ( solutionReadids.indexOf( RssUser.Data.myid ) == -1 ) {
			solutionReadids += "," + RssUser.Data.myid ;
		}
		
	}
	
	if ( state == 7 ) { //如果已经交办，判断交办单位是否已经读过记录
		if ( isEmpty(undertakeReadids) ) {
			undertakeReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( undertakeReadids.indexOf( RssUser.Data.myid ) == -1 ) {
				undertakeReadids += "," + RssUser.Data.myid ;
			}
		}
		
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"undertakeReadids": undertakeReadids,
			"solutionReadids": solutionReadids
		};
	}
	else if ( state >= 8 ) {
		if ( isEmpty(finishReadids) ) {
			finishReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( finishReadids.indexOf( RssUser.Data.myid ) == -1 ) {
				finishReadids += "," + RssUser.Data.myid ;
			}
		}
				
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids,
			"finishReadids": finishReadids
		};	
	}
	else if ( state == 1 ) {
		if ( isEmpty(previewleaderReadids) ) {
			previewleaderReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( previewleaderReadids.indexOf( RssUser.Data.myid ) != -1 ) {
				return ;
			}
			previewleaderReadids += "," + RssUser.Data.myid ;
		}
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids,
			"previewleaderReadids": previewleaderReadids,
		};	
	}
	else {
		
		if ( isEmpty( solutionReadids ) ) {
			solutionReadids = RssUser.Data.myid ;
		}
		else 
		{
			if ( solutionReadids.indexOf( RssUser.Data.myid ) != -1 ) {
				return ;
			}
			solutionReadids += "," + RssUser.Data.myid ;
		}
		parameter = {
			"id": v.id,
			"myid": v.myid,
			"solutionReadids": solutionReadids,
		};
		
	}
	
	console.log("___________ v.id=",v.id)
	console.log("___________ v.myid=",v.myid)
	console.log("___________ solutionReadids=",solutionReadids)
	console.log("___________ parameter=",parameter)
	console.log("___________ mTablename=",mTablename)
	 // updateSupervision1(v);
	RssApi.Edit( mTablename ).setLoading(true).keyvalue(
	   parameter
	).getJson(function(json) {
		console.log("___________ 更改状态成功json",json)
		supervisionUnreadMsg ();
		// location.href = "#supervision";
	})	
	
}




function viewSpecialworkDetail( Obj, key ) {
	var tablename = "supervision_specialwork";
	var fjObj = "#seesupspecialwork article .fj span";
	var appendObj = "#seesupspecialwork article";
	var  index = 1 ;
	var writestate = 0 ;
	
	var divtype_start = '<div class="divtop2">'; //默认高度
	
	var catagory = "报告类别: ";	
	
	if ( "seeendsupspecialwork".indexOf( Obj ) != -1 ) { //已完成的专项工作报告
		$('#seeendsupspecialwork article .no1').remove();
		fjObj = "#seeendsupspecialwork article .fj span";
		appendObj = "#seeendsupspecialwork article";
		index =  3 ;
		divtype_start = '<div class="divspecialworktop2">'; //改变高度
		writestate = 1 ;
	} 
	

	
	
	else {
		$('#seesupspecialwork article .no1').remove();
		writestate = 1 ;
		
	}
	
	
	
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {	
		var lmr = "";
		var noAttachement = 0 ;	
			
		var audit_state = "";
		var progress_state = "";
		var committeemeetingtime = "";
		var committeemeetingnum = "";
		
		$( appendObj ).mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(
						val) * 1000)
					.toString("yyyy-MM-dd");
					// .toString("yyyy-MM-dd hh:mm");
			},
			"directorshijian": function(val) {
				return directorshijian = new Date(parseInt(
						val) * 1000)
					.toString("yyyy-MM-dd");
					// .toString("yyyy-MM-dd hh:mm");
			},
			// "committeshijian": function(val) {
			// 	return committeshijian = new Date(parseInt(
			// 			val) * 1000)
			// 		.toString("yyyy-MM-dd");
			// },
			
			
			"state": function(val) {
				if (val == "1") {
					return state = "待主任会议审议";
				} else if (val == "2") {
					return state = "主任会议审议中";
				} else if (val == "3") {
					return state = "方案实施中";
				} else if (val == "4") {
					return state = "准备专项报告中";
				} else if (val == "5") {
					return state = "征求意见中";
				} else if (val == "6") {
					return state = "征求意见已通过";
				} else if (val == "7") {
					return state = "征求意见中";
				} else if (val == "8") {
					return state = "常委会审议中";
				} else if (val == "9") {
					return state = "常委会审议意见处理中";
				} else if (val == "10") {
					return state = "征求意见中";
				} else if (val == "11") {
					return state = "征求意见已通过";
				} else if (val == "12") {
					return state = "已反馈意见";
				} else if (val == "13") {
					return state = "已向常委会提出书面报告";
				}
			}
		})
		
		$.each(json, function(k, v) {	
			//把阅读过的用户id写到readuserid里面，表示已经读过
			// console.log("查看我参与的活动，改变通知表状态 id =", v.id)	
			//changenotifymessageState ( v.id );
			
			if ( v.state < 6 ) {
			 divtype_start = '<div class="divspecialworktop1">'; //改变高度
			}
			else if ( v.state == 13 ) {
				divtype_start = '<div class="divspecialworktop2">'; //改变高度
			}
			//把状态改为已读
			if ( writestate == 1 ) 
			{
				writeSpecialWorkReadState ( v , index )
			}
			
			
			
			attachment = v.enclosure;		
			attachmentPath =  attachment;
			var matter = v.matter;
			var department = v.department;
			var place = v.place ;
			var note = v.note ;
			enclosurename = v.enclosurename;
			
			//附件
			var Implementation = "";//实施方案
			var Inspectreport = "";//视察调研报告
			var Specialwork = "";//专项报告
			var Committeopinion = "";//常委会审议意见
			var Finalspecialwork = "";//最终专项报告
			var Feedbackopinion = "";//反馈意见
			var Writtenreport = "";//书面报告
			
			if ( !isEmpty( v.enclosurename ) ) {
				
				Implementation = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure+'\')">实施方案: ' + v.enclosurename + '</div>';
			}
			
			if ( !isEmpty( v.enclosurename1 ) ) {
				
				Inspectreport = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure1+'\')">视察调研报告: ' + v.enclosurename1 + '</div>';
			}
			
			if ( !isEmpty( v.enclosurename2 ) ) {
				
				Specialwork = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure2+'\')">专项工作报告: ' + v.enclosurename2 + '</div>';
			}
			
			if ( !isEmpty( v.enclosurename4 ) ) {
				
				Committeopinion = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure4+'\')">常委会审议意见: ' + v.enclosurename4 + '</div>';
			}
			
			if ( !isEmpty( v.enclosurename5 ) ) {
				
				Finalspecialwork = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure5+'\')">最终专项报告: ' + v.enclosurename5 + '</div>';
			}
			
			if ( !isEmpty( v.enclosurename6 ) ) {
				
				Feedbackopinion = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure6+'\')">反馈意见: ' + v.enclosurename6 + '</div>';
			}
			
			if ( !isEmpty( v.enclosurename7 ) ) {
				
				Writtenreport = '<div class="contentdivp2" onclick="enterAttachmentPath(\''+v.enclosure7+'\')">书面报告: ' + v.enclosurename7 + '</div>';
			}
			
			if ( v.leaderpreview == 1 ) {
				if ( v.state == 1 )
				audit_state = '<h4 leixing>审阅状态: 待审阅' +  '</h4>'  ;
				else 
				audit_state = '<h4 leixing>审阅状态: 已审阅' +  '</h4>'  ;
				
				
				progress_state = '<h4 shencha2>进度: ' +  getprogressState( v ) + '</h4>'  ;
				
				
			}
			else {
				//如果不需要审阅
				progress_state = '<h4 shencha2>进度: ' + getprogressState( v ) +  '</h4>'  ;
			}
			
			if ( !isEmpty( v.committeshijian ) ) {
				var committeshijian = new Date(parseInt(
						v.committeshijian) * 1000)
					.toString("yyyy-MM-dd");
				committeemeetingtime = '<h4 leixing>常委会议时间: ' + committeshijian +  '</h4>'  ;
				var meetingnum = v.committeemeetingnum;
				if ( isEmpty( v.committeemeetingnum ) ) {
					meetingnum = "未知";
				}
				committeemeetingnum = '<h4 shencha2>常委会议届次: ' + meetingnum  +  '</h4>'  ;
			}

			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			
			if ( "undefined".indexOf( v.matter ) != -1 ) {
				matter = "无内容";				
			}
			if ( "undefined".indexOf( v.place ) != -1 ) {
				place = "未知";				
			}
			
			if ( "undefined".indexOf( v.department ) != -1 ) {
				department = "未知";				
			}
			if ( "undefined".indexOf( v.note ) != -1 ) {
				note = "无内容";				
			}

			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				enclosurename = "无";				
			}
			

			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					// '<div class="divtop2">' +
					divtype_start + 
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					
					'</h3><h4 author>提出者: ' + v.initiator +
					// '</h4><h4 shijian>' + catagory + v.reviewclass +
					// '</h4><h4 shencha2>' + catagory_place + place +										 
					'</h4><h4 leixing>发起时间: ' + shijian + '</h4>' + 
					'</h4><h4 leixing>' + catagory + v.reviewclass +
					
					'</h4><h4 shencha2>' + catagory_time  + '</h4>' + 					
					progress_state + 
					'</h4><h4 leixing>主任会议时间: '  + directorshijian + '</h4>' +
					'</h4><h4 shencha2>主任会议届次: '  + v.directormeetingnum + '</h4>' +
					committeemeetingtime + 
					committeemeetingnum + 
					Implementation +
					Inspectreport + 
					Specialwork + 
					Committeopinion + 
					Finalspecialwork + 
					Feedbackopinion + 
					Writtenreport + 
					// '<h4>参与代表: ' + v.username  + '</h4>'
					'</div>' + 								  				
					'<div class="contentdivp">' + matter + '</div>' 								
								
					)
			}else {
					// appendHtml = '<div class="divtop2">' +
					appendHtml = divtype_start +
					
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					'</h3><h4 author>提出者: ' + v.initiator +
					// '</h4><h4 shijian>审阅人: ' + v.previewleadername +
					'</h4><h4 shijian>发起时间: ' + shijian + '</h4>' +
					'</h4><h4 leixing>' + catagory + v.reviewclass +
					progress_state + 
					'</h4><h4 leixing>主任会议时间: '  + directorshijian + '</h4>' +
					'</h4><h4 shencha2>主任会议届次: '  + v.directormeetingnum + '</h4>' +
					committeemeetingtime +
					committeemeetingnum + 
					Implementation + 
					Inspectreport + 
					Specialwork + 
					Committeopinion + 
					Finalspecialwork +
					Feedbackopinion + 
					Writtenreport + 
					// '<h4>参与代表: ' + v.username  + '</h4>'
					'</div>' + 					
					  '<div class="attachment fj"><span>'  + '<span></div>' + 				
						'<div class="contentdivp2">' + matter + '</div>';
				// }

				$( appendObj ).append( appendHtml )
					}//else end			
				})
				
				
				if ( noAttachement == 0 ) {
				var dfenclosure = $( fjObj ).text();
				
				if (typeof attachment !=  "undefined") {
					dfenclosure =  attachment ;	
				 
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + enclosurename + "</p></div>"
							if ( index == 0 ) {
								// $('#seesupspecialwork  article .fj').append( html );	
							}
							else if ( index == 1 ) {
								 //// $('#seesupspecialwork article .fj').append( html );
							}
							else if ( index == 2 ) {
								// $('#seeendsupspecialwork article .fj').append( html );
							}
							else if ( index == 3 ) {
								// //$('#seeendsupspecialwork article .fj').append( html );
							}
							else if ( index == 4 ) {
								$('#seesupervreport article .fj').append( html );
							}
							else if ( index == 5 ) {
								$('#seeendsupspecialwork article .fj').append( html );
							}
							
							else if ( index == 6 ) {
								$('#seesupspecialwork article .fj').append( html );
							}
							
						}
					})
				}
				
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
						
					//var pdfh5 = new Pdfh5('.pdfjs8', {
						//pdfurl: dz
					
//修改
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} 
					else if (dz.indexOf(".pdf") != -1) {
						if ( index == 1 ) {
							var pdfh5 = new Pdfh5('#seesupspecialwork  article', {
								pdfurl: dz
							});
						} else if ( index == 2 ) {
							// var pdfh5 = new Pdfh5('#seeendsupspecialwork article', {
							// 	pdfurl: dz
							// });
						} else if ( index == 2 ) {
							var pdfh5 = new Pdfh5('#seeendsupspecialwork article', {
								pdfurl: dz
							});
						} else if ( index == 4 ) {
							// var pdfh5 = new Pdfh5('.pdfjs8', {
							// 	pdfurl: dz
							// });
						} else if ( index == 5 ) {
							// var pdfh5 = new Pdfh5('.pdfjs8', {
							// 	pdfurl: dz
							// });
						}		 
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}
					
					
				})
				
	
			
	})
}

//查看司法监督议题具体内容
function showprovidecluelayout( Obj ,key ) {
var appendObj = "#ansjudicsup article";

	$( appendObj ).append(
		'<div class="fj">征集文件' +
		'<label>' + 
		'<input type="file" class="files1" name="files1" accept="." onchange="upfiles1(this);" multiple>' +
		'</label>' + 
		'<div class="fja"> ' +	'</div>' + 
		'</div>' + 
		
		'<textarea placeholder="征集线索" name="matter" class="title"></textarea>' + 
		'<a class="normalbutton">提交</a>' 
		)
}
function viewjusticsDetail( Obj , key , typeid ) {

	var tablename = "judicsup";
	var viewname = "judicsup";
	var fjObj = "#" + Obj + " article .fj span";
	var appendObj = "#" + Obj + " article";
	var removeObj = '#' + Obj + ' article .no1';
	var fjObj_fj = "#" + Obj + " article .fj";
	
	var  index = 0 ;
	var writestate = 0 ;

	var catagory = "调研类别: ";
	var catagory_place = "调研地点: ";
	var catagory_time = "调研时间: ";
	if ( "seejudsupadm".indexOf( Obj ) != -1 ) {
		// $('#seemyresearch article .no1').remove();
		// fjObj = "#seemyresearch article .fj span";
		// appendObj = "#seemyresearch article";
		// index =  1;
		tablename = "judsupadm";
		
	}
	
	
	else {
		$( removeObj ).remove();
	}
	
	
	var dataLength = 0 ;
	RssApi.View.List(viewname).setLoading(true).condition(new RssDict()
	// RssApi.Table.List(tablename).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			"typeid": typeid,
		}).getDict()).getJson(function(json) {	
			
		dataLength = json.length ;
		var lmr = "";
		var noAttachement = 0 ;	
		$( appendObj ).mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(
						val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
					// .toString("yyyy-MM-dd hh:mm");
			},		
			
		})
		
		if (json.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
			
		}
		var attachment = "";
		$.each(json, function(k, v) {	
			attachment = v.enclosure;		
			var matter = v.matter;
			var state = v.state ;
			if ( v.state == 0 ){
				state = "征集中"
			}
			else {
				state = "征集结束"
			}
			var note = v.note ;
			enclosurename = v.enclosurename;
			
			progress_state = '<h4 leixing>征集状态: ' + state +  '</h4>'  ;
			
			if ( "undefined".indexOf(attachment) != -1 ) {
				attachment = "无";				
				noAttachement = 1 ;
				
			}
			
			if ( "undefined".indexOf( v.matter ) != -1 ) {
				matter = "无内容";				
			}
			

			if ( "undefined".indexOf( enclosurename ) != -1 ) {
				enclosurename = "无";				
			}
			

			if ( noAttachement ==  1 ) {
				$( appendObj ).append(								
					'<div class="divtop2">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +
					
					'</h3><h4 author>提出者: ' + v.realname +
					'</h4><h4 shencha2>时间: ' + shijian + '</h4>' + 
					'</div>' + 								  				
					'<div class="contentdivp">' + matter + '</div>' 								
								
					)
			}else {
					appendHtml = '<div class="divtop2">' +
					'<h3>' + v.title +'</h3>' + 
					'<h4 > ' + " " +

					'</h3><h4 author>发起者: ' + v.perchar +
					'</h4><h4 leixing>发起时间: ' + shijian + '</h4>' +
					'</div>' + 					
					  '<div class="attachment fj"><span>'  + '<span></div>' + 				
						'<div class="contentdivp2">' + matter + '</div>';
				$( appendObj ).append( appendHtml )
				}//else end			
			})
				
				
			if ( noAttachement == 0 && dataLength > 0 ) {
				var dfenclosure = $( fjObj ).text();
			
				if (typeof attachment !=  "undefined") {
					dfenclosure =  attachment ;	
				 
					var str = dfenclosure.split(",");
					var html = ""
					$.each(str, function(idx, value) {	
						if (value != "") {
							html = "<div class='no3'><p class='pdfjs8' name='"+value+"'>" + enclosurename + "</p></div>"
							
							$( fjObj_fj ).append( html );	
							// if ( index == 0 ) {
							// 	$('#seeresearchYS  article .fj').append( html );	
							// }
							// else if ( index == 1 ) {
							// 	$('#seemyresearch article .fj').append( html );
							// }
							// else if ( index == 2 ) {
							// 	$('#seesupervision article .fj').append( html );
							// }
							// else if ( index == 3 ) {
							// 	$('#seesupervisionYS article .fj').append( html );
							// }
							// else if ( index == 4 ) {
							// 	$('#seesupervreport article .fj').append( html );
							// }
							// else if ( index == 5 ) {
							// 	 $('#seeendsupervisionYS article .fj').append( html );
							// }
							
							// else if ( index == 6 ) {
							// 	 $('#seeendsupervision article .fj').append( html );
							// }
							
						}
					})
				}
				
				}
				
				 $(".fj p").off().click(function() {
				//$(".fj").off().click(function() {
					var path = $(this).attr("name");
					 var dz = myip + "upfile/" + path;
//修改
					if (dz.indexOf(".doc") != -1) {
						var xurl = "https://view.xdocin.com/xdoc?_xdoc=";
						xurl += encodeURIComponent(dz);
						window.open(xurl);
					} else if (dz.indexOf(".pdf") != -1){
						var Obj2 = '#' + obj + ' article';
						var pdfh5 = new Pdfh5( Obj2 , {
							pdfurl: dz
						});
						
						// if ( index == 0 ) {
						// 	var pdfh5 = new Pdfh5('#seeresearchYS  article', {
						// 		pdfurl: dz
						// 	});
						// } else if ( index == 1 ) {
						// 	var pdfh5 = new Pdfh5('#seemyresearch article', {
						// 		pdfurl: dz
						// 	});
						// } else if ( index == 2 ) {
						// 	var pdfh5 = new Pdfh5('#resultsHDck article', {
						// 		pdfurl: dz
						// 	});
						// } 
					}
					else {
						location.href = "#pictureSt";
						$("#attachmentImg").attr("src", dz);
					}
					
					
				})
				
	
			
	})
	
}





function supervisionEnforcementNotify() {
	
	var typeid = "3" ; //执法检查
	var tablename = "supervision_enforcement" ;
	var counter = 0 ;		
	//视察
	var previewEnforcement = 0 ; //需要预审的执法检查
	var undertakInspection = 0 ; //承办的视察
	var finishInspection = 0 ;//已经完成的视察
	var myInspection = 0 ;//我的视察
	var inspectionCnt = 0 ;
	
	
	//预审领导的id
	var previewerid = "";
	
	//我的视察调研用户id
	var uid = "";
	//承办人
	var undertakeuid = "";
	
	RssApi.Table.List( tablename ).setLoading(false).condition(new RssDict().keyvalue({
			"typeid": typeid,
		}).getDict()).getJson(function(json) {
		console.log(" ______________  supervisionEnforcementNotify json =", json)
		$.each(json, function( k, v ) {
			//处理预审
			previewerid = v.previewleadername ;
			if ( !isEmpty( previewerid) ) {
				var previewleaderReadids = v.previewleaderReadids ;
				console.log(" ______________  previewleaderIdReads =", previewleaderReadids)
				if ( previewerid.indexOf( RssUser.Data.myid ) != -1  ) {
					console.log(" ______________  inspectionCnt 000 ")
					if ( isEmpty( previewleaderReadids ) ) { //如果没有ids，说明未读
						previewEnforcement ++ ;
						inspectionCnt ++ ;
					}
					else {
						
						if ( previewleaderReadids.indexOf( RssUser.Data.myid ) == -1  ) {
							inspectionCnt ++ ;
						}
					}
				}
			}
			//我的视察
			var myid = v.myid ;
			// console.log(" ______________  v.myid= ",v.myid)
			if ( isparticipant( v )) {
				if ( isEmpty( myid ) ) {
					
				}else {
					
					if ( myid.indexOf( RssUser.Data.myid ) == -1 ) {
						// console.log(" ______________  v.solutionReadids= ",v.solutionReadids)
						var solutionReadids = v.solutionReadids ;
						if ( isEmpty( solutionReadids) ) {
							myInspection ++ ;
							inspectionCnt ++ ;	
						}
						else {
							if ( solutionReadids.indexOf( RssUser.Data.myid ) == -1  ) {
								myInspection ++ ;
								inspectionCnt ++ ;
							}
						}
					}
				}
			}
			
			
			if ( !isEmpty( myid ) ) {
				//我的方案
				if ( myid.indexOf( RssUser.Data.myid ) != -1  && isNotifyState( v )) {
					myInspection ++ ;
					inspectionCnt ++ ;
				}
			}	
			
			
		
			//我承办的方案
			// var organizationid = v.organizationid ;
			// var loginId = RssUser.Data.myid ;
			// var undertakeReadids = "";
			// undertakeReadids = v.undertakeReadids ;
			// if ( !isEmpty( organizationid ) ) {
			// 	if ( organizationid.indexOf ( loginId ) != -1 ) { //属于承办单位
			// 		if ( isEmpty( undertakeReadids) ) { //未读
			// 			undertakInspection ++ ;
			// 			inspectionCnt ++ ;
			// 				console.log(" ______________   aaaaaa  loginId=", loginId)
			// 				console.log(" ______________   aaaaaa  undertakeReadids=", undertakeReadids)
			// 		}
			// 		else { //承办单位未读
						
			// 			if ( undertakeReadids.indexOf( loginId ) == -1  ) { //还未读
			// 				undertakInspection ++ ;
			// 				inspectionCnt ++ ;	
			// 				console.log(" ______________   bbb  loginId=", loginId)
			// 				console.log(" ______________   bbb  undertakeReadids=", undertakeReadids)
							

			// 			}
			// 		}
			// 	}
				
			// }			
				
				
			
			//完成的视察
			// var finishReadids = v.finishReadids ;
			// var state = parseInt( v.state ) ;
			// var taskDone = parseInt( v.taskDone ) ;
			// if ( isparticipant( v ) && taskDone == 1 ) {
			// 	if ( !isEmpty( finishReadids ) ) {
			// 		if ( finishReadids.indexOf ( loginId ) == -1 ) { //未读
			// 			finishInspection ++ ;
			// 			inspectionCnt ++ ;	
			// 		}					
			// 	}
			// 	else { //未读
			// 		finishInspection ++ ;
			// 		inspectionCnt ++ ;	
			// 	}
					
			// }
	})
		
		// console.log(" ______________   undertakInspection =", undertakInspection)
		console.log(" ______________   previewEnforcement =", previewEnforcement)
		// console.log(" ______________   finishInspection =", finishInspection)
		// console.log(" ______________   inspectionCnt =", inspectionCnt)
				
		showEnforcementNotifyIcon( myInspection , undertakInspection , previewEnforcement, finishInspection, inspectionCnt ) ;
		})
	

}    


function showEnforcementNotifyIcon( myInspection , undertakInspection , previewEnforcement, finishInspection, inspectionCnt ){
	
	if ( previewEnforcement > 0) { //预审
		$("#mypreviewenforcement").show();
		$("#mypreviewenforcement").addClass("unreadSpan");
		$("#mypreviewenforcement").html( previewEnforcement  );
	
	} else {
		$("#mypreviewenforcement").hide();
		$("#mypreviewenforcement").removeClass("unreadSpan");			
	}
	

	console.log(" ______________   showEnforcementNotifyIcon inspectionCnt =", inspectionCnt)
	if ( inspectionCnt > 0 ) {
		$("#supervision_icon").css("background-color", "#fc6678");
		$("#supervision_icon").html( inspectionCnt );
		$("#supervision_icon").css("display", "inline");
	}
	else {
		$("#supervision_icon").css("display", "none");
		$("#supervision_icon").hide();
		$("#supervision_icon").removeClass("unreadSpan");
	}
							
}


//新改的关于拆分js以后，消息不能传递的问题
//专项工作报告
$("#specailWorkauditLayout1111").load(function() { 
	var key = $("#specailWorkauditLayout_handleID").val();
	RssApi.Table.List( "supervision_specialwork" ).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key,
			// "typeid": typeid
		}).getDict()).getJson(function(json) {	
			console.log(" ____________ json.lenght ="+json.length);
			console.log(" ____________ json ="+json[0]);
		faqsajax = RssApi.Table.List("user").setLoading(true).condition({
			"myid": json[0].myid,
			}).setFlushUI(function(json1, append) {
				json[0].ico = global_ip + 'upfile/' +json1[0].avatar;
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
	})
})

//建议议案映射数据公用函数
function mapviewFillData( appendObj , json , append ) {
	if (json.length < 10 )
	{
		$('.nodata').hide();
		} else {
		$('.nodata').show();
	}
	if (json.length > 0 )
	{
		$('.nosolutions').hide();
		} else {
		$('.nosolutions').show();
	}
	$( appendObj ).mapview(json, {
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
	}, append)	
}