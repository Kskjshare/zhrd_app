//统计
$("[suggesttype]").off("click").click(function() {
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


var satisfactionRateViewnav = "0"
var layouHtml = "";
var myEchart = echarts.init(document.getElementById('satisfactionRateView_nav1'));
function getData( total ) {
	
	console.log('______ 查看满意率 getData total=',total);
	
	var totalDelegate = total ;
	var satisfaction = 0 ;
	var basicsatisfaction = 0;
	var dissatisfaction = 0 ;
	var unsatisfactionRate ;
	var satisfactionRate ;
	var basicsatisfactionRate ;
	
	
	// var key = 936;
	var key = $("#satisfactionRate_key").val();
	RssApi.Table.List("overall_satisfaction").setLoading(true).condition(new RssDict().keyvalue({
		"proposal": key
	}).getDict()).getJson(function(json) {
		for ( var i = 0 ; i < json.length ; i  ++ ) {
			var data = json[ i ] ;
			if (  data["evaluation"]== 3 ){
				dissatisfaction ++ ;
			}
			else if ( data["evaluation"]== 2 ) {
				basicsatisfaction ++ ;
			}
			else {
				satisfaction ++;
			}
		}
		
			
		var temp = dissatisfaction;
		totaldelegate = total ;
		unsatisfactionRate = dissatisfaction/totaldelegate;
		satisfactionRate = satisfaction/totaldelegate;
		basicsatisfactionRate = basicsatisfaction/totaldelegate;

		if ( unsatisfactionRate > 0 ) {
			unsatisfactionRate = unsatisfactionRate*100;
		}
		if ( satisfactionRate > 0 ) {
			satisfactionRate = satisfactionRate*100;
		}
		if ( basicsatisfactionRate > 0 ) {
			basicsatisfactionRate = basicsatisfactionRate*100;
		}
		unsatisfactionRate = unsatisfactionRate.toFixed(3);
		satisfactionRate = satisfactionRate.toFixed(3);
		basicsatisfactionRate = basicsatisfactionRate.toFixed(3);
		
		bingoption = [], tiaodate = [], tiaooption = [];
		
		bingoption.push({value: satisfaction, name: "满意人数"})
		bingoption.push({value: basicsatisfaction, name: "基本满意人数"})
		bingoption.push({value: dissatisfaction, name: "不满意人数"})
		showechart( bingoption , total);
		
		// layouHtml = "";		
		// layouHtml += '<li class="no">总代表人数：' +
		// 	+ totaldelegate
		//  '</li>';	
		// layouHtml += '<li class="no">满意人数：' +  
		// 	+ satisfaction
		//  '</li>';	
		//  layouHtml += '<li class="no">基本满意人数：' +
		//  	+ basicsatisfaction
		//   '</li>';
		// layouHtml += '<li class="no">不满意人数：' +
		// 	+ dissatisfaction
		//  '</li>';
		// layouHtml += '<li class="no">满意率：' +
		// 	+ satisfactionRate + 
		//  '%</li>';
		// layouHtml += '<li class="no">基本满意率：' +
		// 	+ basicsatisfactionRate + 
		//  '%</li>';
		// layouHtml += '<li class="no">不满意率：' +
		// 	+ unsatisfactionRate + 
		//  '%</li>';   
		 
		layouHtml = "";
		layouHtml += '<li class="no">总代表人数：' +
			+ totaldelegate
		 '</li>';	
		layouHtml += '<li class="no">满意人数：' +  
			+ satisfaction
		 '</li>';	
		 layouHtml += '<li class="no">基本满意人数：' +
		 	+ basicsatisfaction
		  '</li>';
		layouHtml += '<li class="no">不满意人数：' +
			+ dissatisfaction
		 '</li>';
		layouHtml += '<li class="no">满意率：' +
			+ satisfactionRate + 
		 '%</li>';
		layouHtml += '<li class="no">基本满意率：' +
			+ basicsatisfactionRate + 
		 '%</li>';
		layouHtml += '<li class="no">不满意率：' +
			+ unsatisfactionRate + 
		 '%</li>';   
		  
		 
		$("#satisfactionRateView article ul").html(layouHtml); 
		
		// $("#satisfactionRateView article").mapview(json, {
			
		// })
								
		
	});
}

 function showechart( bingoption ,total) {
    var total = "    总人数: " + total
        option = {
            backgroundColor: '#FFFFFF',
            title: {
				top:"10",
				left:"10",
				text: total,
                // text: '    总人数',
                // subtext: '纯属虚构',
                left: 'left',
                textStyle: {
                    color: "#000",
 
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: [
                'rgb(159,230,180)',
                'rgb(255,114,147)',
                'rgb(130,120,223)',
            ],
            legend: {
                orient: 'vertical',
                right: '10',
                top:"10",
                data: [
                    '满意人数',
                    '基本满意人数',
                    '不满意人数',                    
                ],
                textStyle: {
                    color: "#000",

                }
            },
            series: [
                {
                    name: '数据',
                    type: 'pie',
                    radius: [
                        '25%', '50%'
                    ],
                    labelLine:{
                        normal:{
                            length:30,  //视觉引导线长度
                            length2:50
                        }
                    },
                    center: [
                        '48%', '65%'
                    ],
                    label:{   //文本样式处理
                          // formatter: "{d}%,{b|{b}}\n\n",
						  formatter: '{b|{b}}{c}\n\n',
                            borderWidth: 1,
                            borderRadius: 4,
                            padding: [0, -70],
                            // borderColor:'#000',  // label border
                            rich: {
                                b: {
                                //color: "#fff",
                                color: "#000",

                                fontSize: 12,
                                // lineHeight: 33
                                },
                            }
                    },
                    data: bingoption,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        myEchart.setOption(option);
        window.addEventListener("resize",function(){
            myEchart.resize();
        });
        myEchart.on('click', function (params) {
            console.log(params );          
        })

    }
	
	
	

$("#satisfactionRateView").load(function() {	
	console.log('__________ satisfactionRateView load:');
	// $("#satisfactionRateView_nav1").hide();
	$("#satisfactionRateView_nav2").show();
	
	return;
	
	
	if ( satisfactionRateViewnav == "0") {
		$("#satisfactionRateView nav>a").eq(0).click();  
		$("#satisfactionRateView_nav2").hide();
	}
	
	
	$("#satisfactionRateView nav>a").off("click").click(function() {
		var ind = $(this).index() + 1;
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("satisfactionRateView") == "-1") {
			$("#satisfactionRateView ul li").eq(0).siblings().remove();
			arry.push("satisfactionRateView")
		} else {
			$("#satisfactionRateView ul li").remove();
		}
		
		$("#satisfactionRateView .hisback").click(function() {
			satisfactionRateViewnav = "0";
		});	
		
		
		if ($(this).index() == "0") {
			satisfactionRateViewnav = "0";
			$("#satisfactionRateView_nav1").show();
			$("#satisfactionRateView_nav2").hide();
			// getData();
		} 
		else  {
				satisfactionRateViewnav = "1";
				$("#satisfactionRateView_nav1").hide();
				$("#satisfactionRateView_nav2").show();
				$("#satisfactionRateView article ul").html(layouHtml);
				
		}
	})
	
	if ( satisfactionRateViewnav == "1" ) {
		
		$("#satisfactionRateView nav>a").eq(1).click();
	}
})


$("[href='#satisfactionRateView']").click(function() {
	
	delegationchildnav = "1";
})

function satisfactionRateEntry( key ) {
	
	console.log(" ___________ satisfactionRateEntry key=",key)
	$("#satisfactionRate_key").val(key);
	RssApi.Table.List("user").keyvalue("pagesize", "500").condition(new RssDict().keyvalue({
		"isdelegate": 1,
	}).getDict()).getJson(function(jsonn) {
		var totalDelegate = jsonn.length;
		console.log(" ___________ satisfactionRateEntry totalDelegate=",totalDelegate)
		totalDelegate = totalDelegate - 4 ;
		getData( totalDelegate);
	})
	// getData( key )
}
