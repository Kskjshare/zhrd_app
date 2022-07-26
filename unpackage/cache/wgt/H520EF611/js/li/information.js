
var arry = [];
var delegationchildnav  = "0";
var liaisonstationnav  = "0";//联络站导航

// var delegationId = 0 ;
// var isEntry = 0 ;//代表团用于是否第一次进入界面。刷新数据
// var liaisonstationEntry = 0 ; //联络站
// var divisionStationid = 0 ; //联络站id


// var homepagenav = "0";

// location.href = "#noticebulletin";
setTimeout("$('#noticebulletin nav>a').eq(0).click()",1);




$("[href='#noticebulletin']").click(function() {
	console.log("___________ information noticebulletin bbbb ")
	homepagenav = "1";
})



//导航条切换
$("nav>a").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
})

var faqsajax;



$("#noticebulletin .hisback").click(function() {
	console.log("_________ information #noticebulletin .hisback")
	// exit();
});


function compare(p){ //这是比较函数
    return function(m,n){
        var a = m[p];
        var b = n[p];
        return b - a; //升序
    }
}

$("#noticebulletin nav>a").off("click").click(function() {
	$(this).addClass("sel").siblings().removeClass("sel");
	var ind = $(this).index() + 1;
	
	
	var messageJson = [];
	if (arry.indexOf("noticebulletin") == "-1") {
		$("#noticebulletin ul li").eq(0).siblings().remove();		
		arry.push("noticebulletin")
	} else {
		$("#noticebulletin ul li").remove();
		
	}
	
	var tablename = "stationcontent";
	var k1 = {
		"classify": ind,
		"state": 2
	}
	
	if ( ind == 1 ) {
		//人大要闻
		tablename = "releasum" ;
		k1 = {
			"classifyid": ind,
			"newsid": 1,
			"state": 1
		}
		
	}
	else if ( ind == 2 ) {
		// 时政新闻
		tablename = "releasum" ;
		k1 = {
			"classifyid": 1,
			"newsid": 2,
			"state": 1
		}
	}
	else if ( ind == 3 ){
		
		//代表风采4 代表履职2
		tablename = "stationcontent" ;
		k1 = {
			"classify": 4		
		}
		
	}
	else if ( ind == 4 ){
		//公告
		tablename = "newinformation" ;
		k1 = {
			//infotype通知1 公告2
			"infotype": "2"		 
		}
		
		
	}
	else if ( ind == 5 ){
		//公告
		tablename = "newinformation" ;
		k1 = {
			"infotype": 4		
		}
		
		
	}
	
	
	faqsajax = RssApi.Table.List( tablename ).setLoading(true).condition(new RssDict().keyvalue(k1).getDict()).keyvalue({ "pagesize": 1000 }).setFlushUI(function(json, append) {							   
							   
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
		
		json.sort(compare("shijian"));

		
		var json2 = [];
		var testIndex = 111
		var endCharacter = '\"';
		var startCharcter = 'src=';
		
		if ( ind == 4 ) {
			console.log("_______________ aaa json:",json)
			//如果是通知公告需要过滤一下
		}
		for (var i = 0; i < json.length; i++) {
			
			
			var data = json[i];		
			var startIndex = 0;
			var endIndex = 0;
			var content = data.matter ;
			var noImg = 0 ;
			
			// if ( ind == 4 ) 
			{
				// console.log("_______________ aaa data.infotype:",json[i].infotype )
				//如果是通知公告需要过滤一下
				if ( data.infotype != '1' || data.infotype != '2' ) {
					// continue ;
				}
			}
			
			if (data == "" || data.ico == undefined ) {
				if ( i == testIndex ) {
				// console.log("_______________ aaa content:",content )
				// console.log("_______________ bbb content=",content )
				}
				
				
				data.ico = 'default_station.png';
				if (content.indexOf( startCharcter ) != '-1') {
					
					
					
					startIndex = content.indexOf( startCharcter ) + startCharcter.length;
					
					startIndex ++ ;
					content =  content.slice( startIndex );
					startIndex = 0 ;
					
				}
				else {
					noImg = 1 ;
				}
				
				if (content.indexOf( "default_station.png" ) != '-1') {
					noImg = 1 ;
				}
				if (content.indexOf( endCharacter ) != '-1') {					
					endIndex = content.indexOf( endCharacter );
				}
				if ( i == testIndex ) {
				// console.log("_______________ aaa content:",content )
				console.log("_______________ startIndex=",startIndex )
				console.log("_______________ endIndex=",endIndex )
				}
				if (endIndex > startIndex) {
				 // var url = content.substr(startIndex, endIndex-startIndex);
				 var url  = content.substr( startIndex , endIndex - startIndex );
				 
				 var url2 = url.replace("http://117.158.113.36:9002/upfile/","");
				 url2 = url.replace("http://www.rzsrd.gov.cn:9002/upfile/","");
				 url2 = url.replace("http://117.158.113.36:80/upfile/","");				 
				 data.ico = url2 ;
				 data.icon = "upfile/" + url2;
				}
				
				if ( noImg == 1 ) {
					data.ico = "http://www.rzsrd.gov.cn:9002/upfile/default_station.png" ;
					data.icon = "http://www.rzsrd.gov.cn:9002/upfile/default_station.png" ;
				}
								
			}
			else{
				
					var micon = data.ico ;
					data.icon = 'upfile/' + data.ico;
					
					if ( i == testIndex ) {
					console.log("_______________ micon=",micon )
					}
					if ( "default_station.png".indexOf( micon ) != -1 ) {
							
							if (content.indexOf( startCharcter) != '-1') {
								startIndex = content.indexOf( startCharcter ) + startCharcter.length;
								
								startIndex ++ ;
								content =  content.slice( startIndex );
								startIndex = 0 ;
								
							}
							if (content.indexOf( endCharcter ) != '-1') {
								endIndex = content.indexOf( endCharacter );
							}
							if (endIndex > startIndex) {
								 var url  = content.substr( startIndex + 1, endIndex - startIndex );
								 var url2 = url.replace("http://117.158.113.36:9002/upfile/","");
								 url2 = url.replace("http://www.rzsrd.gov.cn:9002/upfile/","");
								 url2 = url.replace("http://117.158.113.36:80/upfile/","");
								 data.ico = url2 ;
								 data.icon = "upfile/" + url2;
							}
					}
				else {
				}
			}
			
			if ( i == testIndex ) {
				console.log("_______________ data=",data )
			}
			// data.icon = 'upfile/' + data.ico;
			
			json2.push(data);
			messageJson.push(data);
		}
		
		$("#noticebulletin ul").mapview(json2, {
			
			"shijian": function(val) {
				return new Date(parseInt(val) * 1000).toString("yyyy-MM-dd");
			},
			"icon": function(val) {
				return val ;
				
			}
		}, append)
		$("#noticebulletin ul li").click(function() {

			var key = $(this).find("[rssid]").attr("rssid");
			console.log("___________ information.js noticebulletin click key=" + key)
			noticebulletinOnClick(key, tablename ,json2, append);
			return;

			//$("#fz1").hide();
			//var key = $(this).find("[rssid]").attr("rssid");
			//location.href = "#seenotice"
			//$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() +"详情");
		    
		})
	}).getJson();
})

//通知消息点击以后icon变为已读
function noticebulletinOnClick(key, tablename , json2, append) {
	// $("#fz1").hide();

	location.href = "#seenotice"
	$("#seenotice").find("header>h1").text($("#noticebulletin").find(".sel").text() + "详情");
	RssApi.Table.List( tablename ).setLoading(true).condition(new RssDict()
	// RssApi.Table.List("stationcontent").setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson( function(json) {
		
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
		$("#seenotice .divp2").html(json[0].matter);
	})
}


function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}
