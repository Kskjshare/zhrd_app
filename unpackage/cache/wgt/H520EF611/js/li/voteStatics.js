
var votestaticsViewnav = "0"
var layouHtml = "";
var myEchart = echarts.init(document.getElementById('votestaticsView_nav1'));

function fillChartData(key, total) {
	var totalDelegate = total ;
	var totaldelegate = total;
	var satisfaction = 0 ;
	var basicsatisfaction = 0;
	var dissatisfaction = 0 ;
	var unsatisfactionRate ;
	var satisfactionRate ;
	var basicsatisfactionRate ;
	
	RssApi.Table.List("vote_evaluation").setLoading(true).condition(new RssDict().keyvalue({
		"evaluationId": key
	}).getDict()).getJson(function(json) {
		for ( var i = 0 ; i < json.length ; i  ++ ) {
			var data = json[ i ] ;
			if (  data["evaluationResult"]== 3 ){
				dissatisfaction ++ ;
			}
			else if ( data["evaluationResult"]== 2 ) {
				basicsatisfaction ++ ;
			}
			else {
				satisfaction ++;
			}
		}
		
			
		var temp = dissatisfaction;
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
		showechart( bingoption ,totalDelegate);
		
		layouHtml = "";		
		layouHtml += '<li class="no">总投票人数：' +
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
	});
}

function getVoteData() {
	
	var totalDelegate = 0 ;
	var satisfaction = 0 ;
	var basicsatisfaction = 0;
	var dissatisfaction = 0 ;
	var unsatisfactionRate ;
	var satisfactionRate ;
	var basicsatisfactionRate ;
	var key = $("#vote_key").val();
	
	console.log(" ___________ key",key)
	RssApi.Table.List("vote_activity").setLoading(true).condition(new RssDict().keyvalue({
		"id": key
	}).getDict()).getJson(function(json) {
		console.log(" ___________ json",json)
	
	if ( json.length > 0 )	{
	
		var votetype = json[0].votetype ;
		if ( votetype == "1") {
			RssApi.Table.List("user").keyvalue("pagesize", "500").condition(new RssDict().keyvalue({
				"isdelegate": 1
			}).getDict()).getJson(function(jsonn) {
				totalDelegate = jsonn.length;
				fillChartData( key , totalDelegate);
			})
		}
		else {
			var voterids = json[0].voterids;
			var voterids = voterids.split(",");
			$.each(voterids, function(idx, value) {	
				totalDelegate ++;
			})
			
			fillChartData( key , totalDelegate);
			
		}
	}
		
	}).getJson();	
	

	// RssApi.Table.List("vote_evaluation").setLoading(true).condition(new RssDict().keyvalue({
	// 	"evaluationId": key
	// }).getDict()).getJson(function(json) {
	// 	for ( var i = 0 ; i < json.length ; i  ++ ) {
	// 		var data = json[ i ] ;
	// 		if (  data["evaluationResult"]== 3 ){
	// 			dissatisfaction ++ ;
	// 		}
	// 		else if ( data["evaluationResult"]== 2 ) {
	// 			basicsatisfaction ++ ;
	// 		}
	// 		else {
	// 			satisfaction ++;
	// 		}
	// 	}
		
			
	// 	var temp = dissatisfaction;
	// 	totaldelegate = 357 ;
	// 	unsatisfactionRate = dissatisfaction/totaldelegate;
	// 	satisfactionRate = satisfaction/totaldelegate;
	// 	basicsatisfactionRate = basicsatisfaction/totaldelegate;

	// 	unsatisfactionRate = unsatisfactionRate.toFixed(3);
	// 	satisfactionRate = satisfactionRate.toFixed(3);
	// 	basicsatisfactionRate = basicsatisfactionRate.toFixed(3);
		
	// 	bingoption = [], tiaodate = [], tiaooption = [];
		
	// 	bingoption.push({value: satisfaction, name: "满意人数"})
	// 	bingoption.push({value: basicsatisfaction, name: "基本满意人数"})
	// 	bingoption.push({value: dissatisfaction, name: "不满意人数"})
	// 	showechart( bingoption );
		
	// 	layouHtml = "";		
	// 	layouHtml += '<li class="no">总代表人数：' +
	// 		+ totaldelegate
	// 	 '</li>';	
	// 	layouHtml += '<li class="no">满意人数：' +  
	// 		+ satisfaction
	// 	 '</li>';	
	// 	 layouHtml += '<li class="no">基本满意人数：' +
	// 	 	+ basicsatisfaction
	// 	  '</li>';
	// 	layouHtml += '<li class="no">不满意人数：' +
	// 		+ dissatisfaction
	// 	 '</li>';
	// 	layouHtml += '<li class="no">满意率：' +
	// 		+ satisfactionRate + 
	// 	 '%</li>';
	// 	layouHtml += '<li class="no">基本满意率：' +
	// 		+ basicsatisfactionRate + 
	// 	 '%</li>';
	// 	layouHtml += '<li class="no">不满意率：' +
	// 		+ unsatisfactionRate + 
	// 	 '%</li>';   
		 
		 
								
		
	// });
}

 function showechart( bingoption ,totalDelegate) {
    var total = "    总人数: " + totalDelegate
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
	
	
	

$("#votestatics").load(function() {	
	if ( votestaticsViewnav == "0") {
		$("#votestatics nav>a").eq(0).click();  
		$("#votestaticsView_nav2").hide();
	}
	
	
	$("#votestatics nav>a").off("click").click(function() {
		var ind = $(this).index() + 1;
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("votestatics") == "-1") {
			$("#votestatics ul li").eq(0).siblings().remove();
			arry.push("votestatics")
		} else {
			$("#votestatics ul li").remove();
		}
		
		$("#votestatics .hisback").click(function() {
			votestaticsViewnav = "0";
		});	
		
		
		if ($(this).index() == "0") {
			votestaticsViewnav = "0";
			$("#votestaticsView_nav1").show();
			$("#votestaticsView_nav2").hide();
			// getData();
		} 
		else  {
				votestaticsViewnav = "1";
				$("#votestaticsView_nav1").hide();
				$("#votestaticsView_nav2").show();
				$("#votestatics article ul").html(layouHtml);
				
		}
	})
	
	if ( votestaticsViewnav == "1" ) {
		
		$("#votestatics nav>a").eq(1).click();
	}
})


$("[href='#votestatics']").click(function() {
	
	votestaticsViewnav = "1";
})

function satisfactionRateEntry( key ) {
	$("#vote_key").val(key);
	getVoteData( key )
}
