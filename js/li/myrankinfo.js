// var arry = []
// //点击选择民族样式的遮罩层
// $("#zzc1").click(function () {
//     $("#zzc1").hide();
// });
// $("section").load(function () {
//     $("#zzc1").hide();
// });
// var zzc1 = function (t, e) {
//     $("#zzc1 ul").empty();
//     $("#zzc1").show();
//     $.each(e, function (k, v) {
//         $("#zzc1 ul").append("<li relationid='" + k + "'>" + v[0] + "</li>");
//     });
//     $("#zzc1 li").off("click").click(function (e) {
//         e.stopPropagation();
//         t.find("em").text($(this).text());
//         t.find("em").attr("relationid", $(this).attr("relationid"));
//         $("#zzc1").hide();
//     });
// };


// $("#zzc10 ul .submitName").click(function () {
//     $("#zzc10").hide();
// });
// $("section").load(function () {
//     $("#zzc10").hide();
// });
// //点击层次
// var zzc10 = function (t, e) {
//     $("#zzc10 ul").empty();
//     $("#zzc10").show();
// //    for (var ever in e) {
// //        e++;
// //        console.log("ever:"+ever);
// //    }
//     $.each(e, function (k, v) {
// //        console.log(v)
//         $("#zzc10 ul").append("<li relationid='" + k + "'><input type='checkbox' name='myid'  idd='" + k + "' realname=" + v + " />" + v + "</li>");
//         if (k == 4) {
//             $("#zzc10 ul").append("<p class='submitName'>确定</p>");
//         }
//     });
//     $("#zzc10 ul>li").slice(0).click(function () {
//         // 切换样式
//         $(this).toggleClass("tr_active");
//         // 找到checkbox对象
//         var chks = $("input[type='checkbox']", this);
//         var tag = $(this).attr("tag");
//         if (tag == "selected") {
//             // 之前已选中，设置为未选中
//             $(this).attr("tag", "");
//             chks.prop("checked", false);
//         } else {
//             // 之前未选中，设置为选中
//             $(this).attr("tag", "selected");
//             chks.prop("checked", true);
//         }
//     });
//     $("#zzc10 ul .submitName").off().click(function () {});
// };

// $("#zzc11 ul .submitName").click(function () {
//     $("#zzc11").hide();
// });
// $("section").load(function () {
//     $("#zzc11").hide();
// });
// //点击届次
// var zzc11 = function (t, e) {
//     $("#zzc11 ul").empty();
//     $("#zzc11").show();
//     var len = 0, ee = 0;
//     for (var ever in e) {
//         ee++;
//     }

//     RssApi.Table.List("user").condition(new RssDict().keyvalue({
//         "myid": RssUser.Data.myid
//     }).getDict()).getJson(function (json) {
//         var sessionlist1 = "";
//         $.each(json, function (k, v) {
//             sessionlist1 = v.sessionlist;
//         })
// //        sessionlist1 = sessionlist1.substring(0, sessionlist1.length - 1);

//         let html = "";
//         var flag = false;
//         var sess = sessionlist1.split(",");
//         $.each(e, function (k, v) {
//             for (var i = 0; i < sess.length; i++) {
//                 if (k == sess[i]) {
//                     flag = true;
//                     break;
//                 }
//             }
//             len++;
//             html += '<li relationid=' + k + '><input type="checkbox" ' + (flag ? "checked" : "") + ' name="myidd"  iddd="' + k + '" realname="' + v + '" />' + v + '</li>';
//             flag = false;
//         })
//         $("#zzc11 ul").html(html);
//         if (len == ee) {
//             $("#zzc11 ul").append("<p class='submitName'>确定</p>");
//         }
//         $("#zzc11 ul>li").slice(0).click(function () {
//             // 切换样式
//             $(this).toggleClass("tr_active");
//             // 找到checkbox对象
//             var chks = $("input[type='checkbox']", this);
//             var tag = $(this).attr("tag");
//             if (tag == "selected") {
//                 // 之前已选中，设置为未选中
//                 $(this).attr("tag", "");
//                 chks.prop("checked", false);
//             } else {
//                 // 之前未选中，设置为选中
//                 $(this).attr("tag", "selected");
//                 chks.prop("checked", true);
//             }
//         });
//     });
// };
// $("section").load(function () {
//     $("#zzc2").hide();
// });




function calculateScore(json , index ){
	
    var baseScore = 	 [0, 15, 3 , 3,   0  ,4 ,6  ,4  ,5 ,5,5,5];
	var baseExtraScore = [0, 0, 1 , 3,    0  ,1	,1  ,2  ,1,1,1];
	var baseMaxScore = [0, 15, 5 , 5, 	  0  ,6 ,10 ,12  ,8,8,8,8];
	
	var obj = json[0].meeting  ;
	if ( index == 1 ){
		obj = json[0].meeting ;
	}
	else if ( index == 2 ){
		obj = json[0].othermeeting ;
	}
	else if ( index == 3 ) {
		obj = json[0].study ;
	}
	
	else if ( index == 5 ) {
		obj = json[0].specialsurvey ;
	}
	else if ( index == 6 ) {
		obj = json[0].totalMixActivities ;
	}
	else if ( index == 7 ) {
		obj = json[0].recievevoters ;
	}
	else if ( index == 8 ) {
		obj = json[0].reslovedispute ;
	}
	else if ( index == 9 ) {
		obj = json[0].helpweak ;
	}
	else if ( index == 10 ) {
		obj = json[0].goodthing ;
	}
	else if ( index == 11 ) {
		obj = json[0].charity ;
	}
	else if ( index == 12 ) {
		obj = json[0].reportvoter ;
	}
	scoreTemp = 0 ;
	z = parseInt( obj );
	var i = 0 ; 
	for ( i = 0 ; i < z ; i ++ ){
		if ( i == 0 ){
			scoreTemp += baseScore[ index ] ;
		}
		else {
			scoreTemp += baseExtraScore[ index ]  ;
		}
	}
	if ( scoreTemp > baseMaxScore[ index ] ){
		scoreTemp = baseMaxScore[ index ] ;
	}
	
	if ( index == 1) {
		json[0].meeting =  json[0].meeting + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 2 ){
		json[0].othermeeting =  json[0].othermeeting + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 3 ){
		json[0].study =  json[0].study + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 5 ){
		json[0].specialsurvey =  json[0].specialsurvey + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 6 ){
		json[0].totalMixActivities =  json[0].totalMixActivities + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 7 ){
		json[0].recievevoters =  json[0].recievevoters + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 8 ){
		json[0].reslovedispute =  json[0].reslovedispute + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 9 ){
		json[0].helpweak =  json[0].helpweak + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}
	else if ( index == 10 ){
		json[0].goodthing =  json[0].goodthing + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}	
	else if ( index == 11 ){
		json[0].charity =  json[0].charity + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}	
	else if ( index == 12 ){
		json[0].reportvoter =  json[0].reportvoter + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
		
	}	
	// obj =  obj + "次&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + scoreTemp;
	
	
}


$("#myrankinfo").load(function () {
	var suggestScore = 0 ;
	var suggestBaseScore = 6 ;
	var suggestExtrBaseScore = 2 ;
	var suggestExtraScore = 1 ;
    var duptyId = $("#duptyId").val();
    console.log('———————— myrankinfo duptyId is:', duptyId);
    var sessionname = "", list = "{";
	
	// String[] ta = {"0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"};

    RssApi.Table.List("rank_sort").setLoading(true).condition(new RssDict().keyvalue({"id": duptyId}).getDict()).getJson(function (json) {
        console.log(json);
        if (json.length == 1) {
			
			// console.log('———————— json is:', json);
			RssApi.Table.List("suggest").setLoading(true).condition(new RssDict().keyvalue({"myid": json[0].myid}).getDict()).getJson(function (json1) {
				// console.log('———————— json1 is:', json1 );
				var suggestcnt = 0 ;
				$.each(json1, function(k, v) {
					if ( suggestcnt == 0 ){
						suggestScore += suggestBaseScore;
					}
					
					else {
						suggestScore += suggestExtrBaseScore;
					}
					suggestcnt ++ ;
				})
				
				if ( suggestScore > 10 ) {
					suggestScore = 10 ;
				}
				
				if ( suggestScore < 10  ) {
					//读取附议人
					faqsajax = RssApi.View.List("second_suggest").setLoading(true).keyvalue("pagesize", "100").condition(
						new RssDict().keyvalue({
							"userid": json[0].myid
						}).getDict()).setFlushUI(function(json2, append) {
						// console.log('———————— json2 is:', json2 );
						$.each( json2 , function( k, v ) {
							suggestScore += suggestExtraScore;
							
						})
						// console.log('———————— suggestScore is:', suggestScore );
						if ( suggestScore > 10 ) {
							suggestScore = 10 ;
						}
						// console.log('———————— json[0].suggest is:', json[0].suggest );
						// console.log('———————— json[0].suggestScore is:', suggestScore );
						json[0].suggest =  json[0].suggest + "件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + suggestScore
						// console.log('———————— aaaabbb json[0].suggest is:', json[0].suggest );
						
						// console.log('———————— aaaa json[0].myid is:', json[0].myid );
						
						
						scoreTemp = calculateScore( json , 1 )
						scoreTemp = calculateScore( json , 2 )
						scoreTemp = calculateScore( json , 3 )
						scoreTemp = calculateScore( json , 4 )
						scoreTemp = calculateScore( json , 5 )
						scoreTemp = calculateScore( json , 6 )
						scoreTemp = calculateScore( json , 7 )
						scoreTemp = calculateScore( json , 8 )
						scoreTemp = calculateScore( json , 9 )
						scoreTemp = calculateScore( json , 10 )
						scoreTemp = calculateScore( json , 11 )
						scoreTemp = calculateScore( json , 12 )
						$("#myrankinfo>article>ul").mapview(json, {});
						
						
						
						//1出席人代会  2参加其他会议 3 参加学习培训 4 提出议案，建议、批评和意见（附议人一条1分,最高分4分）  5 开展专题调研  6参加视察、调研及执法检查 9 接待选民 10 化解矛盾纠纷 11 扶弱济困 12 办好事、实事
						//13 参加公益慈善事业 14 向选民述职 15 其他
						// int[] baseScore = new int[]{  0, 15, 3 , 3, 6, 4 ,        6 , 6 , 6 ,       4 , 5 ,5  ,5,     5, 5, 5};
						// int[] extraScore = new int[]{ 0, 0,  1 , 1, 2, 1 ,        1 , 1 ,1 ,        2 , 1 ,1  ,1,     1, 1, 0};
						// int[] maxScore = new int[]{   0, 15, 5 , 5, 10, 6 ,       10 , 10 ,10 ,     12 ,8 ,8 ,8,      8, 8, 5 };     
						// faqsajax = RssApi.View.List("activities_userlist").setLoading(true).keyvalue("pagesize", "100").condition(
						// 	new RssDict().keyvalue({
						// 		"myid": json[0].myid,
						// 		"attendancetype": 2 ,
						// 		"auditState": 2
						// 	}).getDict()).setFlushUI(function(json3, append) {
								
									
						// 		scoreTemp = calculateScore( json , 1 )
						// 		scoreTemp = calculateScore( json , 2 )
						// 		scoreTemp = calculateScore( json , 3 )
								
								
								
						// 		$("#myrankinfo>article>ul").mapview(json, {});
								
						// 	}).getJson();	
							
					}).getJson();
				}
				else {
					// json[0].suggest =  json[0].suggest + "件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + suggestScore
					json[0].suggest =  json[0].suggest + "件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;得分: " + suggestScore
					
					
					scoreTemp = calculateScore( json , 1 )
					scoreTemp = calculateScore( json , 2 )
					scoreTemp = calculateScore( json , 3 )
					
					
					scoreTemp = calculateScore( json , 5 )
					scoreTemp = calculateScore( json , 6 )
					scoreTemp = calculateScore( json , 7 )
					scoreTemp = calculateScore( json , 8 )
					scoreTemp = calculateScore( json , 9 )
					scoreTemp = calculateScore( json , 10 )
					scoreTemp = calculateScore( json , 11 )
					scoreTemp = calculateScore( json , 12 )
					$("#myrankinfo>article>ul").mapview(json, {});
					// faqsajax = RssApi.View.List("activities_userlist").setLoading(true).keyvalue("pagesize", "100").condition(
					// 	new RssDict().keyvalue({
					// 		"myid": json[0].myid,
					// 		"attendancetype": 2 ,
					// 		"auditState": 2
					// 	}).getDict()).setFlushUI(function(json3, append) {
					// 		console.log('———————— json3 is:', json3 );
								
					// 		$.each(json3, function(k, v) {})	
								
					// 		$("#myrankinfo>article>ul").mapview(json, {});
							
					// 	}).getJson();	
					
					
					
				}
			
			});
			
			
			
            var realname = json[0].realname;
            $("#myrankinfo h1").html(realname + "履职详情");
            //显示数据
            // $("#myrankinfo>article>ul").mapview(json, {});
            var totalScore = json[0].totalScore;
            var num = json[0].num;
            var meeting = json[0].meeting;
            var othermeeting = json[0].othermeeting;
            var study = json[0].study;
            var suggest = json[0].suggest ;
            var specialsurvey = json[0].specialsurvey;
            var totalMixActivities = json[0].totalMixActivities;
            var recievevoters = json[0].recievevoters;
            var reslovedispute = json[0].reslovedispute;
            var helpweak = json[0].helpweak;
            var goodthing = json[0].goodthing;
            var charity = json[0].charity;
            var reportvoter = json[0].reportvoter;
            if (totalScore > 0) {
				// $("#totalScoreLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#totalScoreLi1").css("background-size", ".16rem");
                $("#totalScoreLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (num > 0) {
                // $("#numLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#numLi1").css("background-size", ".16rem");
                $("#numLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (meeting > 0) {
                // $("#meetingLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#meetingLi1").css("background-size", ".16rem");
                $("#meetingLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (othermeeting > 0) {
                // $("#othermeetingLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#othermeetingLi1").css("background-size", ".16rem");
                $("#othermeetingLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (study > 0) {
                // $("#studyLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#studyLi1").css("background-size", ".16rem");
                $("#studyLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (suggest > 0) {
                // $("#suggestLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#suggestLi1").css("background-size", ".16rem");
                $("#suggestLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (specialsurvey > 0) {
                // $("#specialsurveyLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#specialsurveyLi1").css("background-size", ".16rem");
                $("#specialsurveyLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (totalMixActivities > 0) {
                // $("#totalMixActivitiesLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#totalMixActivitiesLi1").css("background-size", ".16rem");
                $("#totalMixActivitiesLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (recievevoters > 0) {
                // $("#recievevotersLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#recievevotersLi1").css("background-size", ".16rem");
                $("#recievevotersLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (reslovedispute > 0) {
                // $("#reslovedisputeLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#reslovedisputeLi1").css("background-size", ".16rem");
                $("#reslovedisputeLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (helpweak > 0) {
                // $("#helpweakLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#helpweakLi1").css("background-size", ".16rem");
                $("#helpweakLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (goodthing > 0) {
                // $("#goodthingLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#goodthingLi1").css("background-size", ".16rem");
                $("#goodthingLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (charity > 0) {
                // $("#charityLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#charityLi1").css("background-size", ".16rem");
                $("#charityLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            if (reportvoter > 0) {
                // $("#reportvoterLi1").css("background", "#fff url(img/limg/into_right.png) no-repeat 97% 50%");
                $("#reportvoterLi1").css("background-size", ".16rem");
                $("#reportvoterLi1").off().click(function() {
                    // location.href = "#duptyLZ";
                });
            }
            //性别
            // $("#myinfo [sex]").text(dictdata["sex"][data[0].sex]).attr("relationid", data[0].sex);
			
			// $.each(json, function(k, v) {
			// $("#myrankinfo [meeting]").text( v.meeting );
			// $("#myrankinfo [othermeeting]").text( v.othermeeting );
			// })
            
			// $("#myinfo [meeting]").text([data[0].meeting);
			// $("#myinfo [meeting]").text([data[0].meeting);
   //          $("#myinfo [clan]").text(dictdata["clan"][data[0].clan]).attr("relationid", data[0].clan);
            //代表团
            // $("#myrankinfo [delegationname]").attr("relationid", data[0].id);

//            //点击邮箱li标签
//            $("#myinfo ul>li:nth-of-type(12)").off("click").click(function () {
//                console.log($(this).find("em").text());
//                zzc2($(this).find("em"), $(this).find("em").text());
//            });
//            //点击籍贯li标签
//            $("#myinfo ul>li:nth-of-type(13)").off("click").click(function () {
//                console.log($(this).find("em").text());
//                zzc2($(this).find("em"), $(this).find("em").text());
//            });
        }

    });


});



var ceshi2 = "1";
//通讯录
$("#maillist").load(function () {
    $("#maillist .search button").off("click").click(function () {
        var key = $("#maillist .search input").val();
        var likeall = {};
        if (key == undefined || key == "") {

        } else {
            likeall = {'realname': "{likeall~" + key + "}"};
        }
        if (ceshi2 == "1") {
            $("#maillist ul li").eq(0).siblings().remove();
        } else {
            $("#maillist ul li").remove();
        }

        ceshi2 = "2"
        faqsajax = RssApi.View.List("fri_user_del").setLoading(true).condition(new RssDict().keyvalue({"myid": RssUser.Data.myid}).keyvalue(likeall).getDict()).setFlushUI(function (json, append) {
            if (json.length != "10") {
                $('.nodata').hide();
            } else {
                $('.nodata').show();
            }
            console.log(json);
            $("#maillist ul").mapview(json, {}, append);

            //点击通讯录li标签
            $("#maillist ul>li").off("click").click(function () {
                console.log($(this).attr("dataid"));
                var scanning_book_id = $(this).attr("dataid");
                location.href = "#scanning_book";
                //通讯录详情页
                RssApi.Details("user_delegation").setLoading(true).condition(new RssDict().keyvalue({"myid": scanning_book_id}).getDict()).getJson(function (data) {
                    console.log(data);
                    $("#scanning_book article>div").mapview(data, {
                        "sex": function (val) {
                            return dictdata["sex"][val];
                        },
                        "nationid": function (val) {
                            return dictdata["nationalityid"][val][0];
                        }
                    });
                    $("#scanning_book article>ul").mapview(data, {
                        "clan": function (val) {
                            return dictdata["clan"][val];
                        },
                        "circles": function (val) {
                            return dictdata["circles"][val];
                        }

                    });
                });
            });

            if (json.length == "0") {
                alert("未找到查询目标");
            }
        }).getJson();
    });
    if ($("#maillist .search input").val() == "") {
        $("#maillist .search button").click();
    }
});

//我的 头像和名字
$("#my").load(function () {
    $("#doublecode").find("canvas").remove();
    $("#doublecode").qrcode({"text": RssUser.Data.myid});
    RssApi.Table.List("user").setLoading(true).condition(new RssDict().keyvalue({"myid": RssUser.Data.myid}).getDict()).getJson(function (data) {
        $("#mybackgroundtop").mapview(data, {});
    });
});

