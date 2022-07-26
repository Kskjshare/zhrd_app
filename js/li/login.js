//用户登陆
//    empty('#loginpage');



// $("#loginpage").load(function () {
// 	var dict = localStorage.getItem('account'); 
	
// 	    // var t = $(this), dict = t.attrmap(t.attr("userlogin"));
		
// 					  console.log('______ 登录 #loginpage is:', dict)
// 	    try {
// 	        ValidatedV3.setdict(dict).isNotEmpty("account", "登陆账号不能为空").isNotEmpty("pwd", "密码不能为空").isPwd("pwd");
// 	        new Ajax("applogin").keyvalue(dict).getJson(function (json) {
// 	//        new Ajax("user/login").keyvalue(dict).getJson(function (json) {
// 	            if (json["state"] == "no") {
// 	                alert("账号或密码错误！")
// 	                return false;
// 	            }
// 	            if (json["state"] == "yes") {
// 					localStorage.setItem('account', dict); //保存
// 					//ding 注释调第一次要求修改密码
					
// 	                // alert("第一次登录请修改密码！")
// 	                // $(".cfpwd").show();
// 	                // $("[name='newpsw']").blur(function () {
// 	                //     if (!$("[name='newpsw']").val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/)) {
// 	                //         alert("格式不正确");
// 	                //     }
// 	                // })
// 	                // $("[name='againpsw']").blur(function () {
// 	                //     console.log($("[name='newpsw']").val() == $("[name='againpsw']").val())
// 	                //     if ($("[name='newpsw']").val() != $("[name='againpsw']").val()) {
// 	                //         alert("两次密码格输入不一致");
// 	                //     }
// 	                // })
// 	                // $(".cfpwd .normalbutton").click(function () {
// 	                //     var account = $('#loginform input[name="account"]').val();
// 	                //     var pwd = $('#loginform input[name="againpsw"]').val();
// 	                //     new Ajax("userloginpwd").keyvalue({"account": account, "pwd": pwd}).getJson(function (jsons) {
// 	                //         $(".cfpwd").hide();
// 	                //         $('#loginform input[name="account"]').val(account);
// 	                //         $('#loginform input[name="againpsw"]').val(pwd);
// 	                //     });
// 	                // });
// 	            } else {
// 	            	 //var account = json[0].account;
// 	            	 //localStorage.setItem('account', account);
					
// 					localStorage.setItem('account', dict); //保存
					
// 	                delete json.matter;
// 	                RssUser.Update(json[0]);
// 	                if ($("#forget").is(":checked")) {
// 	                    localStorage.password = $("input[name='pwd']").val();
// 	                }
// 	                $("input[name='account']").val("");
// 	                $("input[name='pwd']").val("");
	                
					
					
// 	     //            RssApi.Table.List("notify_messages").setLoading(false).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
// 	     //                    // "infotype": "1",
// 	     //                    "lwstate": "1"
// 	     //            }).getDict()).getJson(function(json) {
// 	     //                // console.log('______ 登录 json2 is:', json)
// 	     //                var counter = 0 ;
// 						// $.each(json, function(k, v) {
// 						// 	// var state = getnewinformationState( v );
// 						// 	// if ( state == 1 ) {
// 						// 	// 	counter ++ ;
// 						// 	// }
// 						// 	//改为如果是属于当前账号的通知
// 						// 	var objids = v.userid +"";
// 						// 	var isobjid = 0 ;
// 						// 	if ( objids.indexOf( RssUser.Data.myid ) != -1  ) {
// 						// 		var readuserid = v.readuserid + "";
// 						// 		if ( readuserid.indexOf( RssUser.Data.myid ) == -1  ) {
// 						// 			counter ++ ;
// 						// 		}
								
// 						// 	}
							
							
							
// 						// })
	                    
// 	     //                console.log("__________ 登录 counter= ",counter )
// 	     //                if ( counter > 0) {
// 	     //                    $("#tongzhigonggao").css("background-color", "#fc6678");
// 	     //                    $("#tongzhigonggao").html( counter );
// 	     //                    $("#tongzhigonggao").css("display", "inline");
// 	     //                } else {
// 	     //                    $("#tongzhigonggao").css("display", "none");
	                        
// 	     //                }
	                    
// 	     //                if (counter > 0) {
// 	     //                    $("#tongzhigonggaoSpan").show();
// 	     //                    $("#tongzhigonggaoSpan").addClass("unreadSpan");
// 	     //                    $("#tongzhigonggaoSpan").html(counter);
// 	     //                } else {
// 	     //                    $("#tongzhigonggaoSpan").hide();
// 	     //                    $("#tongzhigonggaoSpan").removeClass("unreadSpan");
// 	     //                }
						
						
// 						// console.log("__________ unreadmsg1 counter ",counter )
// 						// console.log("__________ unreadmsg1 noticecounter ",noticecounter )
// 						// console.log("__________ unreadmsg1 instantNewscounter ",instantNewscounter )
// 						// console.log("__________ unreadmsg1 billboardcounter ",billboardcounter )
	                    
// 	     //            });
		 
		 
// 		 RssApi.Table.List("notify_messages").setLoading(false).keyvalue("pagesize", "500").condition(new RssDict().keyvalue({
// 		 		// "infotype": "1",
// 		 		"lwstate": "1"
// 		 }).getDict()).getJson(function(json) {
		 	
// 		 	var counter = 0 ;
// 		 	var lawcounter = 0 ;
// 		 	var instantNewscounter = 0 ; //要文
// 		 	var billboardcounter = 0 ;//公告
// 		 	var noticecounter = 0 ;//通知
// 		 	$.each(json, function(k, v) {
		 		
// 		 		var state = getnewinformationState( v );
// 		 		var objids = v.userid +"";
// 		 		var readuserid = v.readuserid + "";
		 		
// 		 		var isobjid = 0 ;
// 		 		if ( objids.indexOf( RssUser.Data.myid ) != -1  ) {
// 		 			isobjid = 1 ;
		 	
// 		 		}
// 		 		else {
// 		 			if ( v.isFromwebsite == "1") { //如果是从网站过来的信息
// 		 				isobjid = 1 ;
// 		 			}
// 		 		}
		 		
// 		 		if ( readuserid.indexOf( RssUser.Data.myid ) != -1  ) {
// 		 			isobjid =  0 ;
// 		 		}
		 		
// 		 		if ( isobjid == 1 ) {
		 			
// 		 			if ( v.infotype == 4 ) {
// 		 				//法律法规
// 		 				lawcounter ++ ;
		 				
// 		 			}
// 		 			else if ( v.infotype == 3  ){
// 		 				//要文
// 		 				instantNewscounter ++ ;
// 		 			}
// 		 			else if ( v.infotype == 2  ){
// 		 				//公告
// 		 				billboardcounter ++ ;
// 		 			}
// 		 			else {
// 		 				noticecounter ++ ;
// 		 			}
		 			
// 		 		}
		 		
// 		 	})
// 		 	console.log("__________ unreadmsg1 counter ",counter )
// 		 	console.log("__________ unreadmsg1 noticecounter ",noticecounter )
// 		 	console.log("__________ unreadmsg1 instantNewscounter ",instantNewscounter )
// 		 	console.log("__________ unreadmsg1 billboardcounter ",billboardcounter )
// 		 	counter += 	noticecounter;
// 		 	counter += 	lawcounter;
// 		 	counter += 	instantNewscounter;
// 		 	counter += 	billboardcounter;
		 	
		 	
		 	
		 	
		 	
		 	
		 	
// 		 	if ( counter > 0) {
// 		 		$("#tongzhigonggao").css("background-color", "#fc6678");
// 		 		$("#tongzhigonggao").html( counter );
// 		 		$("#tongzhigonggao").css("display", "inline");
// 		 	} else {
// 		 		$("#tongzhigonggao").css("display", "none");
// 		 		$("#tongzhigonggao").hide();
// 		 		$("#tongzhigonggao").removeClass("unreadSpan");
		 		
// 		 	}
		 	
		 	
// 		 	if ( lawcounter > 0) {//法律法规
// 		 		$("#lawSpan").css("background-color", "#fc6678");
// 		 		$("#lawSpan").html( counter );
// 		 		$("#lawSpan").css("display", "inline");
// 		 	} else {
// 		 		$("#lawSpan").css("display", "none");
// 		 		$("#lawSpan").hide();
// 		 		$("#lawSpan").removeClass("unreadSpan");
		 		
// 		 	}
		 	
// 		 	badge_number = counter;
		 	
		 	
// 		 	if (noticecounter > 0) { //通知
// 		 		$("#tongzhigonggaoSpan").show();
// 		 		$("#tongzhigonggaoSpan").addClass("unreadSpan");
// 		 		$("#tongzhigonggaoSpan").html(noticecounter);
		 		
// 		 		// $("#tongzhigonggaoSpan").css("background-color", "#fc6678");
// 		 		// $("#tongzhigonggaoSpan").html( counter );
		 		
// 		 	} else {
// 		 		$("#tongzhigonggaoSpan").hide();
// 		 		$("#tongzhigonggaoSpan").removeClass("unreadSpan");
// 		 		// $("#tongzhigonggaoSpan").hide();
// 		 		// $("#tongzhigonggaoSpan").removeClass("unreadSpan");
// 		 	}
		 	
		 	
		 	
// 		 	if (lawcounter > 0) {//法律法规
// 		 		$("#lawSpan").show();
// 		 		$("#lawSpan").addClass("unreadSpan");
// 		 		$("#lawSpan").html(lawcounter);
		 		
// 		 	} else {
// 		 		$("#lawSpan").hide();
// 		 		$("#lawSpan").removeClass("unreadSpan");
// 		 	}
		 	
// 		 	if (instantNewscounter > 0) { //要问
// 		 		$("#instantNewsSpan").show();
// 		 		$("#instantNewsSpan").addClass("unreadSpan");
// 		 		$("#instantNewsSpan").html(instantNewscounter);
		 		
// 		 	} else {
// 		 		$("#instantNewsSpan").hide();
// 		 		$("#instantNewsSpan").removeClass("unreadSpan");
// 		 	}
		 	
// 		 	if (billboardcounter > 0) { //公告
// 		 		$("#billboardSpan").show();
// 		 		$("#billboardSpan").addClass("unreadSpan");
// 		 		$("#billboardSpan").html(billboardcounter);
		 		
// 		 	} else {
// 		 		$("#billboardSpan").hide();
// 		 		$("#billboardSpan").removeClass("unreadSpan");
// 		 	}
		 
// 		 	//$("#tongzhigonggao").css("background-color", "#fc6678");
// 		 	//$("#tongzhigonggao").html(json.length);
// 		 });
		 
		 
		 
		 
		 
		 
	                
					
// 					//履职献策
// 					RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
// 								"infotype": "16",
// 								"state": "1"
// 								//"userid": RssUser.Data.userid
// 					}).getDict()).getJson(function(json) {
// 						var counter = 0 ;
// 						var sj = (new Date()).getTime() / 1000;
// 						console.log(" _______ unreadmsg",json)
// 						for (var i = 0; i < json.length; i++) {
// 							var data = json[i];
// 							if (data.endshijian < sj) {
// 								//如果超过报名截止时间
// 								continue;
// 							}
// 							if (data["enroll"] == 1 ) {
// 								var userid = data["userid"] ;
// 								if ( userid == null ) {
// 									counter ++ ;
// 								}
// 								else {
// 									if ( userid.indexOf(RssUser.Data.myid) == -1 ) {
// 										counter ++ ;
// 									}
// 								}
								
// 							} 
// 							else {
// 								if ( data["userid"] == RssUser.Data.myid ) {
// 									counter ++;
// 								}
								
// 							}
// 						}
						
						
// 						if ( counter > 0) {
// 							$("#myenroll").show();
// 							$("#myenroll").addClass("unreadSpan");
// 							$("#myenroll").html( counter );
							
// 							$("#luzhixiance").css("background-color", "#fc6678");
// 							$("#luzhixiance").html( counter );
							
					
					
// 						} else {
// 							$("#myenroll").hide();
// 							$("#myenroll").removeClass("unreadSpan");
							
// 							$("#luzhixiance").hide();
// 							$("#luzhixiance").removeClass("unreadSpan");
							
// 						}
							
// 					});
// 					//履职借宿
	                
	
	                
// 	                //1参加视察  2开展专题调研 3参加调研 4参加执法检查 5参加学习培训  6提出建议议案等  7出席人代会 8 参加其他会议 
// 	                // 9接待选民 10 化解矛盾纠纷 11 扶弱济困 12 办好事、实事 13 参加公益慈善事业 14向选民述职 15 其他
	                
// 	                //人大履职
// 	                var length = 0 ;
// 	                var length1 = 0 ;
// 	                var length2 = 0 ;
	                
// 	                //专项工作报告
// 	                RssApi.Table.List("supervision_specialwork").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "readState": "1"
	
// 	                }).getDict()).getJson(function(json) {
// 	                    ///////$("#supervision_icon").css("background-color", "#fc6678");
// 	                    length +=  json.length;
// 	                    ///////$("#supervision_icon").html( length );
// 	                });
// 	                //执法检查  
// 	                RssApi.Table.List("supervision_enforcement").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "readState": "1"
	                
// 	                }).getDict()).getJson(function(json) {
// 	                   ////// $("#supervision_icon").css("background-color", "#fc6678");
// 	                    length +=  json.length;
// 	                    ///////$("#supervision_icon").html( length );
// 	                });
	                
// 	                //专题询问
// 	                RssApi.Table.List("supervision_special_inquery").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "readState": "1"
	                
// 	                }).getDict()).getJson(function(json) {
// 	                   /////// $("#supervision_icon").css("background-color", "#fc6678");
// 	                    length +=  json.length;
// 	                    ///////$("#supervision_icon").html( length );
// 	                });
	                
	                
// 	                //特定问题调查
// 	                RssApi.Table.List("supervision_specific_issue").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "readState": "1"
	                
// 	                }).getDict()).getJson(function(json) {
// 	                    ///////$("#supervision_icon").css("background-color", "#fc6678");
// 	                    length +=  json.length;
// 	                    ///////$("#supervision_icon").html( length );
// 	                });
	                
// 	                //视察
// 	                RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "readState": "1",
// 	                            "typeid": "8"
	
// 	                }).getDict()).getJson(function(json) {
// 	                    ///////$("#supervision_icon").css("background-color", "#fc6678");
// 	                    length +=  json.length;
// 	                   /////// $("#supervision_icon").html( length );
// 	                });
	                
// 	            //调研
// 	                RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "readState": "1",
// 	                            "typeid": "9"
	
// 	                }).getDict()).getJson(function(json) {
// 	                    ///////$("#supervision_icon").css("background-color", "#fc6678");
// 	                    length +=  json.length;
// 	                    ///////$("#supervision_icon").html( length );
// 	                });
	                
// 	                // 建议议案通知
// 	                RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
// 	                            "infotype": "6"
// 	                }).getDict()).getJson(function(json) {
// 	                    console.log('json is:', json);
// 	                    for (var i = 0; i < json.length; i++) {
// 	                        var data = json[i];
// 	                        if (data["lwstate"] == 1) {
// 	                            length1++;
// 	                        } else {
// 	                            length2++;
// 	                        }
// 	                    }
	                    
// 	                    if (length1 > 0) {
// 	                       //// $("#mySuggestSpan").show();
// 	                       ///// $("#mySuggestSpan").addClass("unreadSpan");
// 	                       ///// $("#mySuggestSpan").html(length1);
// 	                    } else {
// 	                        $("#mySuggestSpan").hide();
// 	                        $("#mySuggestSpan").removeClass("unreadSpan");
// 	                    }
	                   
	                    
// 	                });
					
// 					LoginshowNotify();
	                
// 	                location.href = "#notice"
// 	                RssApi.Edit("syslog").keyvalue({"logclass": "1", "logtitle": "手机登录成功", "matter": "手机app登录", "myid": RssUser.Data.myid}).getJson(function (json) {
// 	                })
// 	            }
// 	        });
// 	    } catch (e) {
// 	        console.log(e)
// 	        RssCode.alert(e);
// 	    }
	
	
// })

$("[userlogin]").click(function () {
    var t = $(this), dict = t.attrmap(t.attr("userlogin"));
	
				  console.log('______ 登录 dict is:', dict)
    try {
        ValidatedV3.setdict(dict).isNotEmpty("account", "登陆账号不能为空").isNotEmpty("pwd", "密码不能为空").isPwd("pwd");
        new Ajax("applogin").keyvalue(dict).getJson(function (json) {
//        new Ajax("user/login").keyvalue(dict).getJson(function (json) {
            if (json["state"] == "no") {
                alert("账号或密码错误！")
                return false;
            }
            if (json["state"] == "yes") {
				localStorage.setItem('account', dict); //保存
				//ding 注释调第一次要求修改密码
				
                alert("第一次登录请修改密码！")
                $(".cfpwd").show();
                $("[name='newpsw']").blur(function () {
                    if (!$("[name='newpsw']").val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/)) {
                        alert("格式不正确");
                    }
                })
                $("[name='againpsw']").blur(function () {
                    console.log($("[name='newpsw']").val() == $("[name='againpsw']").val())
                    if ($("[name='newpsw']").val() != $("[name='againpsw']").val()) {
                        alert("两次密码格输入不一致");
                    }
                })
                $(".cfpwd .normalbutton").click(function () {
                    var account = $('#loginform input[name="account"]').val();
                    var pwd = $('#loginform input[name="againpsw"]').val();
                    new Ajax("userloginpwd").keyvalue({"account": account, "pwd": pwd}).getJson(function (jsons) {
                        $(".cfpwd").hide();
                        $('#loginform input[name="account"]').val(account);
                        $('#loginform input[name="againpsw"]').val(pwd);
                    });
                });
            } else {
            	 //var account = json[0].account;
            	 //localStorage.setItem('account', account);
				
				localStorage.setItem('account', dict); //保存
				
                delete json.matter;
                RssUser.Update(json[0]);
                if ($("#forget").is(":checked")) {
                    localStorage.password = $("input[name='pwd']").val();
                }
                $("input[name='account']").val("");
                $("input[name='pwd']").val("");
                
				
				
     //            RssApi.Table.List("notify_messages").setLoading(false).keyvalue("pagesize", "1000").condition(new RssDict().keyvalue({
     //                    // "infotype": "1",
     //                    "lwstate": "1"
     //            }).getDict()).getJson(function(json) {
     //                // console.log('______ 登录 json2 is:', json)
     //                var counter = 0 ;
					// $.each(json, function(k, v) {
					// 	// var state = getnewinformationState( v );
					// 	// if ( state == 1 ) {
					// 	// 	counter ++ ;
					// 	// }
					// 	//改为如果是属于当前账号的通知
					// 	var objids = v.userid +"";
					// 	var isobjid = 0 ;
					// 	if ( objids.indexOf( RssUser.Data.myid ) != -1  ) {
					// 		var readuserid = v.readuserid + "";
					// 		if ( readuserid.indexOf( RssUser.Data.myid ) == -1  ) {
					// 			counter ++ ;
					// 		}
							
					// 	}
						
						
						
					// })
                    
     //                console.log("__________ 登录 counter= ",counter )
     //                if ( counter > 0) {
     //                    $("#tongzhigonggao").css("background-color", "#fc6678");
     //                    $("#tongzhigonggao").html( counter );
     //                    $("#tongzhigonggao").css("display", "inline");
     //                } else {
     //                    $("#tongzhigonggao").css("display", "none");
                        
     //                }
                    
     //                if (counter > 0) {
     //                    $("#tongzhigonggaoSpan").show();
     //                    $("#tongzhigonggaoSpan").addClass("unreadSpan");
     //                    $("#tongzhigonggaoSpan").html(counter);
     //                } else {
     //                    $("#tongzhigonggaoSpan").hide();
     //                    $("#tongzhigonggaoSpan").removeClass("unreadSpan");
     //                }
					
					
					// console.log("__________ unreadmsg1 counter ",counter )
					// console.log("__________ unreadmsg1 noticecounter ",noticecounter )
					// console.log("__________ unreadmsg1 instantNewscounter ",instantNewscounter )
					// console.log("__________ unreadmsg1 billboardcounter ",billboardcounter )
                    
     //            });
	 
	 
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
	 
	 
	 
	 
	 
	 
                
				
				//履职献策
				RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
							"infotype": "16",
							"state": "1"
							//"userid": RssUser.Data.userid
				}).getDict()).getJson(function(json) {
					var counter = 0 ;
					var sj = (new Date()).getTime() / 1000;
					console.log(" _______ unreadmsg",json)
					for (var i = 0; i < json.length; i++) {
						var data = json[i];
						if (data.endshijian < sj) {
							//如果超过报名截止时间
							continue;
						}
						if (data["enroll"] == 1 ) {
							var userid = data["userid"] ;
							if ( userid == null ) {
								counter ++ ;
							}
							else {
								if ( userid.indexOf(RssUser.Data.myid) == -1 ) {
									counter ++ ;
								}
							}
							
						} 
						else {
							if ( data["userid"] == RssUser.Data.myid ) {
								counter ++;
							}
							
						}
					}
					
					
					if ( counter > 0) {
						$("#myenroll").show();
						$("#myenroll").addClass("unreadSpan");
						$("#myenroll").html( counter );
						
						$("#luzhixiance").css("background-color", "#fc6678");
						$("#luzhixiance").html( counter );
						
				
				
					} else {
						$("#myenroll").hide();
						$("#myenroll").removeClass("unreadSpan");
						
						$("#luzhixiance").hide();
						$("#luzhixiance").removeClass("unreadSpan");
						
					}
						
				});
				//履职借宿
                

                
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
                    ///////$("#supervision_icon").html( length );
                });
                //执法检查  
                RssApi.Table.List("supervision_enforcement").setLoading(false).condition(new RssDict().keyvalue({
                            "readState": "1"
                
                }).getDict()).getJson(function(json) {
                   ////// $("#supervision_icon").css("background-color", "#fc6678");
                    length +=  json.length;
                    ///////$("#supervision_icon").html( length );
                });
                
                //专题询问
                RssApi.Table.List("supervision_special_inquery").setLoading(false).condition(new RssDict().keyvalue({
                            "readState": "1"
                
                }).getDict()).getJson(function(json) {
                   /////// $("#supervision_icon").css("background-color", "#fc6678");
                    length +=  json.length;
                    ///////$("#supervision_icon").html( length );
                });
                
                
                //特定问题调查
                RssApi.Table.List("supervision_specific_issue").setLoading(false).condition(new RssDict().keyvalue({
                            "readState": "1"
                
                }).getDict()).getJson(function(json) {
                    ///////$("#supervision_icon").css("background-color", "#fc6678");
                    length +=  json.length;
                    ///////$("#supervision_icon").html( length );
                });
                
                //视察
                RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
                            "readState": "1",
                            "typeid": "8"

                }).getDict()).getJson(function(json) {
                    ///////$("#supervision_icon").css("background-color", "#fc6678");
                    length +=  json.length;
                   /////// $("#supervision_icon").html( length );
                });
                
            //调研
                RssApi.Table.List("supervision_inspection").setLoading(false).condition(new RssDict().keyvalue({
                            "readState": "1",
                            "typeid": "9"

                }).getDict()).getJson(function(json) {
                    ///////$("#supervision_icon").css("background-color", "#fc6678");
                    length +=  json.length;
                    ///////$("#supervision_icon").html( length );
                });
                
                // 建议议案通知
                RssApi.Table.List("notify_messages").setLoading(false).condition(new RssDict().keyvalue({
                            "infotype": "6"
                }).getDict()).getJson(function(json) {
                    console.log('json is:', json);
                    for (var i = 0; i < json.length; i++) {
                        var data = json[i];
                        if (data["lwstate"] == 1) {
                            length1++;
                        } else {
                            length2++;
                        }
                    }
                    
                    if (length1 > 0) {
                       //// $("#mySuggestSpan").show();
                       ///// $("#mySuggestSpan").addClass("unreadSpan");
                       ///// $("#mySuggestSpan").html(length1);
                    } else {
                        $("#mySuggestSpan").hide();
                        $("#mySuggestSpan").removeClass("unreadSpan");
                    }
                   
                    
                });
				
				LoginshowNotify();
                
				
				// location.href = "#notice"
                location.href = "#noticebulletin"
                RssApi.Edit("syslog").keyvalue({"logclass": "1", "logtitle": "手机登录成功", "matter": "手机app登录", "myid": RssUser.Data.myid}).getJson(function (json) {
                })
            }
        });
    } catch (e) {
        console.log(e)
        RssCode.alert(e);
    }
});
$("#logout").click(function () {
    if (confirm("确定退出登陆?")) {
//        location.href = "#loginpage"
//        RssApi.Delete("userDeviceid").keyvalue({"myid": RssUser.Data.myid}).getJson(function (json) {
//        })
//        RssApi.Delete("userDeviceid").condition(new RssDict().keyvalue({
//            "myid": RssUser.Data.myid,
//            "state":1
//        }).keymyid().getDict()).getJson(function (jsonn) {
//        });
        RssUser.LoginOut();
        RssPage.PageToggle("#loginpage", false);
        JsAdapter.ClearHistory().Submit();
    }
})

function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}

function isparticipant( v ){ //参与人
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
	return result ;
}

function isNotifyState ( v ) {
	var result = false ;
	var state = parseInt( v.state )
	if ( state == 2 || state == 3  || state == 4 || state == 5 ||  state == 6 ) {//8满意度测评
		result = true ;
	}
	return result;
}
function LoginshowNotifyIcon( myInspection , undertakInspection , previewInspection, finishInspection, inspectionCnt ){
	
	if ( myInspection > 0) { //承办
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

function LoginshowNotify() {
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
						console.log(" ______________  inspectionCnt111 ")
					}
					else {
						
						if ( previewleaderReadids.indexOf( RssUser.Data.myid ) == -1  ) {
							inspectionCnt ++ ;
							console.log(" ______________  inspectionCnt 222 ")
						}
					}
				}
			}
			var myid = v.myid ;
			if ( isparticipant( v )) {
				if ( isEmpty( myid ) ) {
					
				}else {
					
					if ( myid.indexOf( RssUser.Data.myid ) == -1 ) {
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
			
			//承办的视察
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
			//完成的视察
			var finishReadids = v.finishReadids ;
			var state = parseInt( v.state ) ;
			if ( isparticipant( v ) && state >= 8 ) {
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
				
		LoginshowNotifyIcon( myInspection , undertakInspection , previewInspection, finishInspection, inspectionCnt ) ;
		})
	

}    
	
	
function LoginshowNotify1() {
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
			uid = v.uid ;
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
				
		LoginshowNotifyIcon( myInspection , undertakInspection , previewInspection, finishInspection, inspectionCnt ) ;
		})
	

	}    	