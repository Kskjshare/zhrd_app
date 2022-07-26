
var opinionDetailViewnav = "0"
var opinionlayoutHtml = "";
var myOpinionEchart = echarts.init(document.getElementById('viewEvaluationDetail_graphic1'));
var attitudeEchart = echarts.init(document.getElementById('viewEvaluationDetail_graphic2'));
var replyEchart = echarts.init(document.getElementById('viewEvaluationDetail_graphic3'));
var resultEchart = echarts.init(document.getElementById('viewEvaluationDetail_graphic4'));
var allEchart = echarts.init(document.getElementById('viewEvaluationDetail_graphic5'));

// var barchart1 = echarts.init(document.getElementById('viewEvaluationDetail_barchart1'));

//面商
	var satisfaction_face = 0 ;
	var basicsatisfaction_face = 0 ;
	var dissatisfaction_face = 0 ;
	//态度
	var satisfaction_attiude = 0 ;
	var basicsatisfaction_attiude = 0 ;
	var dissatisfaction_attiude = 0 ;
	//答复
	var satisfaction_reply = 0 ;
	var basicsatisfaction_reply = 0 ;
	var dissatisfaction_reply = 0 ;
	//结果
	var satisfaction_result = 0 ;
	var basicsatisfaction_result = 0 ;
	var dissatisfaction_result = 0 ;
	//综合
	var satisfaction_all = 0 ;
	var basicsatisfaction_all = 0 ;
	var dissatisfaction_all = 0 ;

var opinion_totalDelegate = 357 ;
function getOpinionData() {
	/*需要动态获取测评人数，目前暂时写固定值357*/
	
	var satisfaction = 0 ;
	var basicsatisfaction = 0;
	var dissatisfaction = 0 ;
	var unsatisfactionRate ;
	var satisfactionRate ;
	var basicsatisfactionRate ;
	
	
	// var key = 936;
	var key = $("#viewEvaluationDetail_key").val();
	key = 72;
	RssApi.Table.List("opinion").setLoading(true).condition(new RssDict().keyvalue({
		"id": key
	}).getDict()).getJson(function(json) {
		$.each(json, function(k, v) {
			var data = json[ i ] ;
			var data = v ;
			if (  v["effect"]== 1 ){
				satisfaction_face ++ ;
			}
			else if ( data["effect"]== 2 ) {
				basicsatisfaction_face ++ ;
			}
			else if ( data["effect"]== 3 ) {
				dissatisfaction_face ++;
			}
			
			if (  data["effect2"]== 1 ){
				satisfaction_attiude ++ ;
			}
			else if ( data["effect2"]== 2 ) {
				basicsatisfaction_attiude ++ ;
			}
			else if ( data["effect2"]== 3 ) {
				dissatisfaction_attiude ++;
			}
			
			
			if ( data["effect3"]== 1 ){
				satisfaction_reply ++ ;
			}
			else if ( data["effect3"]== 2 ) {
				basicsatisfaction_reply ++ ;
			}
			else if ( data["effect3"]== 3 ) {
				dissatisfaction_reply ++;
			}
			
			if ( data["effect4"]== 1 ){
				satisfaction_result ++ ;
			}
			else if ( data["effect4"]== 2 ) {
				basicsatisfaction_result ++ ;
			}
			else if ( data["effect4"]== 3 ) {
				dissatisfaction_result ++;
			}
			
			if ( data["effect5"]== 1 ){
				satisfaction_all ++ ;
			}
			else if ( data["effect5"]== 2 ) {
				basicsatisfaction_all ++ ;
			}
			else if ( data["effect5"]== 3 ) {
				dissatisfaction_all ++;
			}
		})
		
			
		var temp = dissatisfaction;
		unsatisfactionRate = dissatisfaction/opinion_totalDelegate;
		satisfactionRate = satisfaction/opinion_totalDelegate;
		basicsatisfactionRate = basicsatisfaction/opinion_totalDelegate;

		unsatisfactionRate = unsatisfactionRate.toFixed(3);
		satisfactionRate = satisfactionRate.toFixed(3);
		basicsatisfactionRate = basicsatisfactionRate.toFixed(3);
		
		// bingoption = [], tiaodate = [], tiaooption = [];
		
		// bingoption.push({value: satisfaction, name: "满意率"})
		// bingoption.push({value: basicsatisfaction, name: "基本满意率"})
		// bingoption.push({value: dissatisfaction, name: "不满意率"})
		// showOpinionechart( bingoption , 1);
		// showOpinionechart( bingoption , 2 );
		// showOpinionechart( bingoption ,3 );
		// showOpinionechart( bingoption , 4);
		// showOpinionechart( bingoption , 5 );
		fillOptionData();	
							
							
							
							
							
							
		bingoption = [], tiaodate = [], bingoption2 = [],
		bingoption3 = [],
		bingoption4 = [],
		bingoption5 = [],tiaooption = [];
		
		
		// fillOptionData();	
		
		bingoption.push({value: satisfaction_face, name: "满意率"})
		bingoption.push({value: basicsatisfaction_face, name: "基本满意率"})
		bingoption.push({value: dissatisfaction_face, name: "不满意率"})
		bingoption.push({value: opinion_totalDelegate - satisfaction_face - basicsatisfaction_face - dissatisfaction_face, name: "未测评率"})
		
		// bingoption2.push({value: satisfaction_attiude_rate, name: "满意率"})
		// bingoption2.push({value: basicsatisfaction_attiude_rate, name: "基本满意率"})
		// bingoption2.push({value: dissatisfaction_attiude_rate, name: "不满意率"})
		
		
		// bingoption3.push({value: satisfaction_reply_rate, name: "满意率"})
		// bingoption3.push({value: basicsatisfaction_reply_rate, name: "基本满意率"})
		// bingoption3.push({value: dissatisfaction_reply_rate, name: "不满意率"})
		
		
		// bingoption4.push({value: satisfaction_result_rate, name: "满意率"})
		// bingoption4.push({value: basicsatisfaction_result_rate, name: "基本满意率"})
		// bingoption4.push({value: dissatisfaction_result_rate, name: "不满意率"})
		
		
		// bingoption5.push({value: satisfaction_all_rate, name: "满意率"})
		// bingoption5.push({value: basicsatisfaction_all_rate, name: "基本满意率"})
		// bingoption5.push({value: dissatisfaction_all_rate, name: "不满意率"})
		
		bingoption2.push({value: satisfaction_attiude, name: "满意率"})
		bingoption2.push({value: basicsatisfaction_attiude, name: "基本满意率"})
		bingoption2.push({value: dissatisfaction_attiude, name: "不满意率"})
		bingoption2.push({value: opinion_totalDelegate - satisfaction_attiude - basicsatisfaction_attiude - dissatisfaction_attiude, name: "未测评率"})
		
		bingoption3.push({value: satisfaction_reply, name: "满意率"})
		bingoption3.push({value: basicsatisfaction_reply, name: "基本满意率"})
		bingoption3.push({value: dissatisfaction_reply, name: "不满意率"})
		bingoption3.push({value: opinion_totalDelegate - satisfaction_reply - basicsatisfaction_reply - dissatisfaction_reply, name: "未测评率"})
		
		bingoption4.push({value: satisfaction_result, name: "满意率"})
		bingoption4.push({value: basicsatisfaction_result, name: "基本满意率"})
		bingoption4.push({value: dissatisfaction_result, name: "不满意率"})
		bingoption4.push({value: opinion_totalDelegate - satisfaction_result - basicsatisfaction_result - dissatisfaction_result, name: "未测评率"})
		
		
		bingoption5.push({value: satisfaction_all, name: "满意率"})
		bingoption5.push({value: basicsatisfaction_all, name: "基本满意率"})
		bingoption5.push({value: dissatisfaction_all, name: "不满意率"})
		bingoption5.push({value: opinion_totalDelegate - satisfaction_all - basicsatisfaction_all - dissatisfaction_all, name: "未测评率"})
		showOpinionechart( bingoption , bingoption2 , bingoption3 , bingoption4 ,bingoption5);
		showbarchart1();
		// showOpinionechart( bingoption2 , 2 );
		// showOpinionechart( bingoption3 ,3 );
		// showOpinionechart( bingoption4 , 4);
		// showOpinionechart( bingoption5 , 5 );					
							
							
		
	});
}


//对应比例变量
var satisfaction_face_rate;
var basicsatisfaction_face_rate ;
var dissatisfaction_face_rate ;
//态度
var satisfaction_attiude_rate;
var basicsatisfaction_attiude_rate ;
var dissatisfaction_attiude_rate ;
//答复
var satisfaction_reply_rate ;
var basicsatisfaction_reply_rate ;
var dissatisfaction_reply_rate  ;

//结果
var satisfaction_result_rate ;
var basicsatisfaction_result_rate ;
var dissatisfaction_result_rate;
// 综合
var satisfaction_all_rate ;
var basicsatisfaction_all_rate ;
var dissatisfaction_all_rate  ;

function fillOptionData(){
	//面商
	var satisfaction_face_rate = satisfaction_face*100/opinion_totalDelegate ;
	var basicsatisfaction_face_rate =basicsatisfaction_face*100/opinion_totalDelegate ;
	var dissatisfaction_face_rate =  dissatisfaction_face*100/opinion_totalDelegate;
	if ( satisfaction_face > 0 )
	satisfaction_face_rate = satisfaction_face_rate.toFixed(2)+"%";
	else
	satisfaction_face_rate = "0%";
	
	if ( basicsatisfaction_face > 0 )
	basicsatisfaction_face_rate= basicsatisfaction_face_rate.toFixed(2)+"%";
	else
	basicsatisfaction_face_rate = "0%";
	
	if ( dissatisfaction_face > 0 )
	dissatisfaction_face_rate= basicsatisfaction_face_rate.toFixed(2)+"%";
	else
	dissatisfaction_face_rate = "0%";
	
	//态度
	var satisfaction_attiude_rate = satisfaction_attiude*100/opinion_totalDelegate ;
	var basicsatisfaction_attiude_rate =basicsatisfaction_attiude*100/opinion_totalDelegate ;
	var dissatisfaction_attiude_rate =  dissatisfaction_attiude*100/opinion_totalDelegate ;
	if ( satisfaction_attiude > 0 )
	satisfaction_attiude_rate = satisfaction_attiude_rate.toFixed(2)+"%";
	else
	satisfaction_attiude_rate = "0%";
	
	if ( basicsatisfaction_attiude > 0 )
	basicsatisfaction_attiude_rate= basicsatisfaction_attiude_rate.toFixed(2)+"%";
	else
	basicsatisfaction_attiude_rate = "0%";
	
	if ( dissatisfaction_attiude > 0 )
	dissatisfaction_attiude_rate= dissatisfaction_attiude_rate.toFixed(2)+"%";
	else
	dissatisfaction_attiude_rate = "0%";
	
	//答复
	var satisfaction_reply_rate = satisfaction_reply*100/opinion_totalDelegate ;
	var basicsatisfaction_reply_rate =basicsatisfaction_reply*100/opinion_totalDelegate ;
	var dissatisfaction_reply_rate =  dissatisfaction_reply*100/opinion_totalDelegate ;
	if ( satisfaction_reply > 0 )
	satisfaction_reply_rate= satisfaction_reply_rate.toFixed(2)+"%";
	else
	satisfaction_reply_rate = "0%";
	
	if ( basicsatisfaction_reply > 0 )
	basicsatisfaction_reply_rate= basicsatisfaction_reply_rate.toFixed(2)+"%";
	else
	basicsatisfaction_reply_rate = "0%";
	
	if ( dissatisfaction_reply > 0 )
	dissatisfaction_reply_rate= dissatisfaction_reply_rate.toFixed(2)+"%";
	else
	dissatisfaction_reply_rate = "0%";
	
	//结果
	var satisfaction_result_rate = satisfaction_result*100/opinion_totalDelegate ;
	var basicsatisfaction_result_rate =basicsatisfaction_result*100/opinion_totalDelegate ;
	var dissatisfaction_result_rate =  dissatisfaction_result*100/opinion_totalDelegate ;
	if ( satisfaction_result > 0 )
	satisfaction_result_rate= satisfaction_result_rate.toFixed(2)+"%";
	else
	satisfaction_result_rate = "0%";
	if ( basicsatisfaction_result > 0 )
	basicsatisfaction_result_rate= basicsatisfaction_result_rate.toFixed(2)+"%";
	else
	basicsatisfaction_result_rate = "0%";
	if ( dissatisfaction_result > 0 )
	dissatisfaction_result_rate= dissatisfaction_result_rate.toFixed(2)+"%";
	else
	dissatisfaction_result_rate = "0%";
	
	var satisfaction_all_rate = satisfaction_all*100/opinion_totalDelegate ;
	var basicsatisfaction_all_rate =basicsatisfaction_all*100/opinion_totalDelegate;
	var dissatisfaction_all_rate =  dissatisfaction_all*100/opinion_totalDelegate ;
	if ( satisfaction_all > 0 )
	satisfaction_all_rate= satisfaction_all_rate.toFixed(2)+"%";
	else
	satisfaction_all_rate = "0%";
	if ( basicsatisfaction_all > 0 )
	basicsatisfaction_all_rate= basicsatisfaction_all_rate.toFixed(2)+"%";
	else
	basicsatisfaction_all_rate = "0%";
	
	if ( dissatisfaction_all > 0 )
	dissatisfaction_all_rate= dissatisfaction_all_rate.toFixed(2)+"%";
	else
	dissatisfaction_all_rate = "0%";
	
	opinionlayoutHtml = "";
	opinionlayoutHtml += '<li class="smalltitle">面商</li>'+
	'<li class="rem">满意<em>' + satisfaction_face_rate + '</em></li>' +
	'<li class="rem">基本满意<em>' + basicsatisfaction_face_rate + '</em></li>' +	
	'<li class="rem">不满意<em>' + dissatisfaction_face_rate + '</em></li>' +	
	'<li class="smalltitle">态度</li>'+
	'<li class="rem">满意<em>' + satisfaction_attiude_rate + '</em></li>' +
	'<li class="rem">基本满意<em>' + basicsatisfaction_attiude_rate + '</em></li>' +	
	'<li class="rem">不满意<em>' + dissatisfaction_attiude_rate + '</em></li>' +	
	'<li class="smalltitle">答复</li>'+
	'<li class="rem">满意<em>' + satisfaction_reply_rate + '</em></li>' +
	'<li class="rem">基本满意<em>' + basicsatisfaction_reply_rate + '</em></li>' +	
	'<li class="rem">不满意<em>' + dissatisfaction_reply_rate + '</em></li>' +	
	'<li class="smalltitle">结果</li>'+
	'<li class="rem">满意<em>' + satisfaction_result_rate + '</em></li>' +
	'<li class="rem">基本满意<em>' + basicsatisfaction_result_rate + '</em></li>' +	
	'<li class="rem">不满意<em>' + dissatisfaction_result_rate + '</em></li>' +	
	'<li class="smalltitle">综合</li>'+
	'<li class="rem">满意<em>' + satisfaction_all_rate + '</em></li>' +
	'<li class="rem">基本满意<em>' + basicsatisfaction_all_rate + '</em></li>' +	
	'<li class="rem">不满意<em>' + dissatisfaction_all_rate + '</em></li>' 
	$("#viewEvaluationDetail article ul").html(opinionlayoutHtml);
}




 function showOpinionechart( bingoption , bingoption2, bingoption3 , bingoption4 ,bingoption5 ) {
    var total = "    总人数: " + opinion_totalDelegate;
	
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
			// formatter: '{a} <br/>{b} : {c} ({d}%)'
			formatter: function (params,ticket,callback) {
			  if ( params['value'] == 0 ){
				  return params['name'] + "0%"
			  }
			  else if ( params['value'] == opinion_totalDelegate){
				return params['name'] + "100%"
			  }			 
			  else{
				return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%";
			  }
			},
		},
		color: [
			'rgb(159,230,180)',
			'rgb(255,114,147)',
			'rgb(130,120,223)',
			'rgb(251,1,100)',
		],
		legend: {
			orient: 'vertical',
			right: '10',
			top:"10",
			data: [
				'满意率',
				'基本满意率',
				'不满意率',                    
				'未测评率',  
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
					'42%', '65%'
				],
				
				
				label: {
				  alignTo: 'edge',
				  // formatter: '{name|{b}}\n}',
				  minMargin: 5,
				  edgeDistance: 30,
				  lineHeight: 15,
				  rich: {
				    time: {
				      fontSize: 10,
				      color: '#999'
				    }
				  },
				  formatter: function (params,ticket,callback) {
					    if ( params['value'] == 0 ){
					  	  return params['name'] + "0%\n"
					    }
					    else if ( params['value'] == opinion_totalDelegate){
					  	return params['name'] + "100%\n"
					    }					  
					    else{
					  	return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%\n";
					    }
					  },
				},
				labelLine: {
				  length: 15,
				  length2: 0,
				  maxSurfaceAngle: 80
				},
				labelLayout: function (params) {
				  const isLeft = params.labelRect.x < myChart.getWidth() / 2;
				  const points = params.labelLinePoints;
				  // Update the end point.
				  points[2][0] = isLeft
				    ? params.labelRect.x
				    : params.labelRect.x + params.labelRect.width;
				  return {
				    labelLinePoints: points
				  };
				},
				
				data: bingoption,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			},
			{
				name:'内圈',
				type:'pie',
				silent:true,
				radius: [0, '20%'],
				center: ["42%", "65%"],
				hoverAnimation:false,
				label: {
					normal: {
						show: true,
						position: 'center',
						textStyle:{
							fontSize:16,
							color:'#000'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:6, name:'面商'}
				],
				color:['#fff']
			},
			
			
		]
	};
	
	
	option2 = {
		backgroundColor: '#FFFFFF',
		title: {
			top:"10",
			left:"10",
			text: "",
			// text: '    总人数',
			// subtext: '纯属虚构',
			left: 'left',
			textStyle: {
				color: "#000",
	
			}
		},
		tooltip: {
			trigger: 'item',
			// formatter: '{a} <br/>{b} : {c} ({d}%)'
			formatter: function (params,ticket,callback) {
			  if ( params['value'] == 0 ){
				  return params['name'] + "0%"
			  }
			  else if ( params['value'] == opinion_totalDelegate){
				return params['name'] + "100%"
			  }
			  else{
				return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%";
			  }
			},
		},
		color:['rgb(155,0,255)','rgb(251,1,100)','rgb(253,145,23)','rgb(255,0,250)'],

		legend: {
			orient: 'vertical',
			right: '10',
			top:"10",
			data: [
				'满意率',
				'基本满意率',
				'不满意率',   
				'未测评率',  
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
					'42%', '65%'
				],
				label: {
				  alignTo: 'edge',
				  // formatter: '{name|{b}}\n}',
				  minMargin: 5,
				  edgeDistance: 30,
				  lineHeight: 15,
				  rich: {
				    time: {
				      fontSize: 10,
				      color: '#999'
				    }
				  },
				  formatter: function (params,ticket,callback) {
					    if ( params['value'] == 0 ){
					  	  return params['name'] + "0%\n"
					    }
					    else if ( params['value'] == opinion_totalDelegate){
					  	return params['name'] + "100%\n"
					    }					  
					    else{
					  	return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%\n";
					    }
					  },
				},
				labelLine: {
				  length: 15,
				  length2: 0,
				  maxSurfaceAngle: 80
				},
				labelLayout: function (params) {
				  const isLeft = params.labelRect.x < myChart.getWidth() / 2;
				  const points = params.labelLinePoints;
				  // Update the end point.
				  points[2][0] = isLeft
				    ? params.labelRect.x
				    : params.labelRect.x + params.labelRect.width;
				  return {
				    labelLinePoints: points
				  };
				},
				data: bingoption2,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			},
			{
				name:'内圈',
				type:'pie',
				silent:true,
				radius: [0, '20%'],
				center: ["42%", "65%"],
				hoverAnimation:false,
				label: {
					normal: {
						show: true,
						position: 'center',
						textStyle:{
							fontSize:16,
							color:'#000'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:6, name:'态度'}
				],
				color:['#fff']
			},
			
			
		]
	};
	
	option3 = {
		backgroundColor: '#FFFFFF',
		title: {
			top:"10",
			left:"10",
			text: "",
			// text: '    总人数',
			// subtext: '纯属虚构',
			left: 'left',
			textStyle: {
				color: "#000",
	
			}
		},
		tooltip: {
			trigger: 'item',
			// formatter: '{a} <br/>{b} : {c} ({d}%)'
			formatter: function (params,ticket,callback) {
			  if ( params['value'] == 0 ){
				  return params['name'] + "0%"
			  }
			  else if ( params['value'] == opinion_totalDelegate){
				return params['name'] + "100%"
			  }
			  else{
				return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%";
			  }
			},
		},
		// color:['rgb(155,0,255)','rgb(251,1,100)','rgb(253,145,23)','rgb(255,0,250)'],
	   color: [
	               // 'rgb(255,219,91)',
	               //  'rgb(159,230,180)',
	               //  'rgb(255,114,147)',
	               //  'rgb(130,120,223)',
	               'rgb(47,197,223)',
	               'rgb(255,159,120)',
	               'rgb(231,188,242)',
	               'rgb(71,96,255)',
	            ],
	
		legend: {
			orient: 'vertical',
			right: '10',
			top:"10",
			data: [
				'满意率',
				'基本满意率',
				'不满意率', 
				'未测评率',  
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
					'42%', '65%'
				],
				label: {
				  alignTo: 'edge',
				  // formatter: '{name|{b}}\n}',
				  minMargin: 5,
				  edgeDistance: 30,
				  lineHeight: 15,
				  rich: {
				    time: {
				      fontSize: 10,
				      color: '#999'
				    }
				  },
				  formatter: function (params,ticket,callback) {
					    if ( params['value'] == 0 ){
					  	  return params['name'] + "0%\n"
					    }
					    else if ( params['value'] == opinion_totalDelegate){
					  	return params['name'] + "100%\n"
					    }					  
					    else{
					  	return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%\n";
					    }
					  },
				},
				labelLine: {
				  length: 15,
				  length2: 0,
				  maxSurfaceAngle: 80
				},
				labelLayout: function (params) {
				  const isLeft = params.labelRect.x < myChart.getWidth() / 2;
				  const points = params.labelLinePoints;
				  // Update the end point.
				  points[2][0] = isLeft
				    ? params.labelRect.x
				    : params.labelRect.x + params.labelRect.width;
				  return {
				    labelLinePoints: points
				  };
				},
				data: bingoption3,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			},
			{
				name:'内圈',
				type:'pie',
				silent:true,
				radius: [0, '20%'],
				center: ["42%", "65%"],
				hoverAnimation:false,
				label: {
					normal: {
						show: true,
						position: 'center',
						textStyle:{
							fontSize:16,
							color:'#000'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:6, name:'答复'}
				],
				color:['#fff']
			},
			
			
		]
	};
	
	
	option4 = {
		backgroundColor: '#FFFFFF',
		title: {
			top:"10",
			left:"10",
			text: "",
			// text: '    总人数',
			// subtext: '纯属虚构',
			left: 'left',
			textStyle: {
				color: "#000",
	
			}
		},
		tooltip: {
			trigger: 'item',
			// formatter: '{a} <br/>{b} : {c} ({d}%)'
			formatter: function (params,ticket,callback) {
			  if ( params['value'] == 0 ){
				  return params['name'] + "0%"
			  }
			  else if ( params['value'] == opinion_totalDelegate){
				return params['name'] + "100%"
			  }
			  else{
				return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%";
			  }
			},
		},
		// color:['rgb(155,0,255)','rgb(251,1,100)','rgb(253,145,23)','rgb(255,0,250)'],
	   color: [
		     'rgb(255,219,91)',
		                   'rgb(159,230,180)',
		                   'rgb(255,114,147)',
		                   'rgb(130,120,223)',
	            ],
	
		legend: {
			orient: 'vertical',
			right: '10',
			top:"10",
			data: [
				'满意率',
				'基本满意率',
				'不满意率',   
				'未测评率',  				 
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
					'42%', '65%'
				],
				label: {
				  alignTo: 'edge',
				  // formatter: '{name|{b}}\n}',
				  minMargin: 5,
				  edgeDistance: 30,
				  lineHeight: 15,
				  rich: {
				    time: {
				      fontSize: 10,
				      color: '#999'
				    }
				  },
				  formatter: function (params,ticket,callback) {
					    if ( params['value'] == 0 ){
					  	  return params['name'] + "0%\n"
					    }
					    else if ( params['value'] == opinion_totalDelegate){
					  	return params['name'] + "100%\n"
					    }					  
					    else{
					  	return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%\n";
					    }
					  },
				},
				labelLine: {
				  length: 15,
				  length2: 0,
				  maxSurfaceAngle: 80
				},
				labelLayout: function (params) {
				  const isLeft = params.labelRect.x < myChart.getWidth() / 2;
				  const points = params.labelLinePoints;
				  // Update the end point.
				  points[2][0] = isLeft
				    ? params.labelRect.x
				    : params.labelRect.x + params.labelRect.width;
				  return {
				    labelLinePoints: points
				  };
				},
				data: bingoption4,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			},
			{
				name:'内圈',
				type:'pie',
				silent:true,
				radius: [0, '20%'],
				center: ["42%", "65%"],
				hoverAnimation:false,
				label: {
					normal: {
						show: true,
						position: 'center',
						textStyle:{
							fontSize:16,
							color:'#000'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:6, name:'结果'}
				],
				color:['#fff']
			},
			
			
		]
	};

    
	
	option5 = {
		backgroundColor: '#FFFFFF',
		title: {
			top:"10",
			left:"10",
			text: "",
			// text: '    总人数',
			// subtext: '纯属虚构',
			left: 'left',
			textStyle: {
				color: "#000",
	
			}
		},
		// tooltip: {
		// 	trigger: 'item',
		// 	formatter: '{a} <br/>{b} : {c} ({d}%)'
		// },
		
		tooltip : {
			trigger: 'item',
			formatter: function (params,ticket,callback) {
			  if ( params['value'] == 0 ){
				  return params['name'] + "0%"
			  }
			  else if ( params['value'] == opinion_totalDelegate){
				return params['name'] + "100%"
			  }
			  else{
				return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%";
			  }
			},
		},
	   color: [
		     'rgb(255,219,91)','rgb(155,0,255)','rgb(253,145,23)','rgb(255,114,147)',
			 ],
	
		legend: {
			orient: 'vertical',
			right: '10',
			top:"10",
			data: [
				'满意率',
				'基本满意率',
				'不满意率',   
				'未测评率', 
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
					'40%', '65%'
				],
				
				label: {
				  alignTo: 'edge',
				  // formatter: '{name|{b}}\n}',
				  minMargin: 5,
				  edgeDistance: 30,
				  lineHeight: 15,
				  rich: {
				    time: {
				      fontSize: 10,
				      color: '#999'
				    }
				  },
				  formatter: function (params,ticket,callback) {
					    if ( params['value'] == 0 ){
					  	  return params['name'] + "0%\n"
					    }
					    else if ( params['value'] == opinion_totalDelegate){
					  	return params['name'] + "100%\n"
					    }					  
					    else{
					  	return params['name'] + (params['value']/opinion_totalDelegate*100).toFixed(2)+"%\n";
					    }
					  },
				},
				labelLine: {
				  length: 15,
				  length2: 0,
				  maxSurfaceAngle: 80
				},
				labelLayout: function (params) {
				  const isLeft = params.labelRect.x < myChart.getWidth() / 2;
				  const points = params.labelLinePoints;
				  // Update the end point.
				  points[2][0] = isLeft
				    ? params.labelRect.x
				    : params.labelRect.x + params.labelRect.width;
				  return {
				    labelLinePoints: points
				  };
				},
				
				
				data: bingoption5,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			},
			
			
			{
				name:'内圈',
				type:'pie',
				silent:true,
				radius: [0, '20%'],
				center: ["40%", "65%"],
				hoverAnimation:false,
				label: {
					normal: {
						show: true,
						position: 'center',
						textStyle:{
							fontSize:16,
							color:'#000'
						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:6, name:'综合'}
				],
				color:['#fff']
			},
			
			
		]
	}; 

     
        myOpinionEchart.setOption(option);
        window.addEventListener("resize",function(){
            myOpinionEchart.resize();
        });
        myOpinionEchart.on('click', function (params) {
            console.log(params );          
        })
		
		
		attitudeEchart.setOption(option2);
		window.addEventListener("resize",function(){
		    attitudeEchart.resize();
		});
		
		replyEchart.setOption(option3);
		window.addEventListener("resize",function(){
		    attitudeEchart.resize();
		});
		
		resultEchart.setOption(option4);
		window.addEventListener("resize",function(){
		    attitudeEchart.resize();
		});
		
		allEchart.setOption(option5);
		window.addEventListener("resize",function(){
		    attitudeEchart.resize();
		});

    }
	
	
	

$("#viewEvaluationDetail").load(function() {	
	console.log('__________ viewEvaluationDetail load:');
	if ( opinionDetailViewnav == "0") {
		$("#satisfactionRateView nav>a").eq(0).click();  
		$("#viewEvaluationDetail_graphic1").hide();
		$("#viewEvaluationDetail_graphic2").hide();
		$("#viewEvaluationDetail_graphic3").hide();
		$("#viewEvaluationDetail_graphic4").hide();
		$("#viewEvaluationDetail_graphic5").hide();
		
		// $("#viewEvaluationDetail_barchart1").hide();
		
		$("#viewEvaluationDetail ul li").remove();
		$("#viewEvaluationDetail_list").show();
	}
	
	
	$("#viewEvaluationDetail nav>a").off("click").click(function() {
		var ind = $(this).index() + 1;
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("viewEvaluationDetail") == "-1") {
			$("#viewEvaluationDetail ul li").eq(0).siblings().remove();
			arry.push("viewEvaluationDetail")
		} else {
			$("#viewEvaluationDetail ul li").remove();
		}
		
		$("#viewEvaluationDetail .hisback").click(function() {
			opinionDetailViewnav == "0";
		});	
		
		
		if ($(this).index() == "0") {
			opinionDetailViewnav = "0";
			$("#viewEvaluationDetail_list").show();
			$("#viewEvaluationDetail_graphic1").hide();
			$("#viewEvaluationDetail_graphic2").hide();
			$("#viewEvaluationDetail_graphic3").hide();
			$("#viewEvaluationDetail_graphic4").hide();
			$("#viewEvaluationDetail_graphic5").hide();
			
			// $("#viewEvaluationDetail_barchart1").hide();
			
			$("#viewEvaluationDetail article ul").html(opinionlayoutHtml);
			// getData();
		} 
		else if ($(this).index() == "1") { 
				opinionDetailViewnav = "1";
				
				$("#viewEvaluationDetail_list").hide();
				// $("#viewEvaluationDetail_barchart1").hide();
				
				$("#viewEvaluationDetail_graphic1").show();
				$("#viewEvaluationDetail_graphic2").show();
				$("#viewEvaluationDetail_graphic3").show();
				$("#viewEvaluationDetail_graphic4").show();
				$("#viewEvaluationDetail_graphic5").show();
				
		}
		else {
		opinionDetailViewnav = "2";
		
		$("#viewEvaluationDetail_list").hide();
		// $("#viewEvaluationDetail_barchart1").show();
		
		$("#viewEvaluationDetail_graphic1").hide();
		$("#viewEvaluationDetail_graphic2").hide();
		$("#viewEvaluationDetail_graphic3").hide();
		$("#viewEvaluationDetail_graphic4").hide();
		$("#viewEvaluationDetail_graphic5").hide();	
		}
	})
	
	if ( opinionDetailViewnav == "1" ) {
		
		$("#viewEvaluationDetail nav>a").eq(1).click();
	}
})


$("[href='#viewEvaluationDetail']").click(function() {
	
	opinionDetailViewnav = "1";
})

function viewEvaluationDetailEntry( key ) {
	console.log('__________ viewEvaluationDetailEntry');
	$("#viewEvaluationDetail_key").val(key);
	getOpinionData( key )
}




 function showbarchart1( ) {
	 let obj = []; //定义新数组，传入echart图表所需要的数据格式 和字段
	         obj.push({product:"汽车及装备制造业","待处理":1,"处理中":2,"已完成":3})
	         obj.push({product:"电子信息工业","待处理":1,"处理中":2,"已完成":3})
	var ratename = [ "满意率", "基本满意率", "不满意率"];   
	var ratevalue =[];
	ratevalue.push( satisfaction_face ) ;
	ratevalue.push( basicsatisfaction_face ) ;
	ratevalue.push( dissatisfaction_face ) ;
		
	var ratevalue2 =[];
	var tmp = satisfaction_face*100/opinion_totalDelegate;
	tmp = tmp.toFixed(2);
	tmp = tmp + "%";
	ratevalue2.push(tmp);
	tmp = basicsatisfaction_face*100/opinion_totalDelegate;
	tmp = tmp.toFixed(2);
	tmp = tmp + "%";
	ratevalue2.push(tmp);
	tmp = dissatisfaction_face*100/opinion_totalDelegate;
	tmp = tmp.toFixed(2);
	tmp = tmp + "%";
	ratevalue2.push("20%");	
		
        option = {
            backgroundColor: '#FFFFFF',
            title: {
                text: '面商',
                // subtext: '数据来自网络',
                textStyle: {
                    color: "#000"
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }

            },
            
          
            
            grid: {
                left: '4%',
                right: '10%',
                bottom: '3%',
                containLabel: true

            },
            xAxis: [
                {
                    type: 'category',
                    data: ratename,
                    textStyle:{
                        
                    },
                    axisTick: {
                        alignWithLabel: true,
                        barBorderRadius: [0, 0, 0, 0]
                    },
                    axisLine: {
                        lineStyle: {
                             color: "#000"
                           
                        }
                    },
                    axisLabel:{
                         interval:0,//横轴信息全部显示
                         rotate:45,//度角倾斜显示
                         formatter:function(ratename){//只显示五个字 其余省略号
//                             return datasss.length > 4?datasss.substring(0,6)+'...':datasss;
                             return ratename.length > 4?ratename.substring(0,6):ratename;

                         }
                     }
                }
            ],
            yAxis: [
                { 
                    // min:0, //y轴的最小值
                    // max:number, //y轴最大值
                    interval:10, //值之间的间隔
                    type: 'value',
                    axisLine: {
                        lineStyle: {
//                            color: "#fff"
                            color: "#000"

                        }
                    }
                }
            ],
            // color:"rgb(0,227,255)",
            series: [
                {
                    // name: '总产值',
					name: '',
                    type: 'bar',
                    barWidth: '20',
                    barBorderRadius: 0,
                    data: ratevalue2,
                    
                    center: [
                        '45%', '50%'
                    ],
                    itemStyle: {
                        normal: { // 柱形图圆角，初始化效果
                            barBorderRadius: [0, 0, 0, 0],
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(4,233,255)'
                                

                            },
                            {
                                offset: 0.5,
                                color: 'rgb(255,54,254)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgb(255,54,254)'
                                

                            },
                            {
                                offset: 1,
                                color: 'rgb(2,132,254)'
                            }
                         ]),
                        },
                       
                    },
                }
            ]
        };
        // barchart1.setOption(option);
        // window.addEventListener("resize",function(){
        //     barchart1.resize();
        // });
        // barchart1.on('click', function (params) {
        //     console.log(params);
        // });

    }