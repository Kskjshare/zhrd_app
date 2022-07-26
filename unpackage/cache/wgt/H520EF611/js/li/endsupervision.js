

function append_data1 ( ) {
	// $("#endsupervision ul li").remove();
	var btn_layout = '<a href="#ansendsupervision" class="ans"><span>查看满意度测评</span></a>'
	var liStr = '<div class="liico"><span bindkeys="id">0001</span></div>' +
	 '<h1 bindkeys="title"></h1><p initiator></p>' + 
	 '<div class="lifoot" bindattr="id">' + 
	 '<a href="#seeendsupervision" class="see"><span>查看详情</span></a>' + 
	 btn_layout +
	 '</div>' ;
	
	var append_obj = "#endsupervision" + " ul";
	$(append_obj).append(liStr);
	
}


function append_data( v, Obj ) {
	var mstate = parseInt( v.state );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	
	var evaluationState = parseInt( v.evaluationState ) ;
	var showBtnEvaluation = true ;
	if ( !isEmpty( v.evaluatedids ) ) {
		var evaluatedids = v.evaluatedids +"";
		if ( evaluatedids.indexOf(RssUser.Data.myid ) != -1 ) {
			showBtnEvaluation = false ;
		}
	}
	
	if ( evaluationState == 0 ) {
		showBtnEvaluation = false ;
	}
	var liStr = '<li><div class="liico"><span >' + v.id +
		'</span></div><h1>' + v.title +
		'</h1><p>' + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'   + '</p>'+
		'<div class="lifoot" id=' + v.id + '>'
	if ( showBtnEvaluation ) {
		liStr += '<a href="#seesupervision" class="see" onclick="viewendsupervisionDetail('+v.id+');"><span>查看详情</span></a><a href="#evaluationLayout" class="ans" onclick="evaluation('+v.id+');"><span>我要测评</span></a><a href="#ViewevaluationLayout" class="see" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';
	}
	else {
		liStr += '<a href="#seesupervision" class="see" onclick="viewendsupervisionDetail('+v.id+');"><span>查看详情</span></a><a href="#ViewevaluationLayout" class="ans" onclick="viewevaluation('+v.id+');"><span>测评结果</span></a></div></li>';		
	}
	$(append_obj).append(liStr);
	
}


function viewendsupervisionDetail( key ) {
	var obj = "seesupervision";
	viewSupervisionDetail( obj ,key );
	
	$("#supervision .hisback").click(function() {
		location.href = "#seesupervision";
	});					
}

$("#endsupervision").load(function () {
	if (arry.indexOf("endsupervision") == "-1") {
		$("#endsupervision ul li").eq(0).siblings().remove();
		arry.push("endsupervision")
	} else {
		$("#endsupervision ul li").remove();
	}
	faqsajax = RssApi.Table.List("supervision_inspection").setLoading(true).condition(new RssDict().keyvalue({
		//"state": "8",
		"typeid": "8",
		"taskDone": "1"
	}).getDict()).setFlushUI(function(json, append) {
		console.log("_______ json=",json)
		
		//$("#endsupervision ul").mapview(json, {}, append)
		//在列表增加办理状态和提出者
		var json2 = [];
		$.each(json, function(k, v) {
			
			var state = parseInt( v.state );
			var taskDone = parseInt( v.taskDone ) ;
			var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: 已完成 ";//  + getprogressState(v);
			var data = v ;
			data.initiator = initiator ;
			if ( taskDone == 1 && ismysolution_2( v ) ) {
				json2.push( data );
				append_data ( data , "endsupervision" );
			}
			
		})
		
		
		if ( json2.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		if ( json2.length > 0 ) {
			$('.nosolutions').hide();
		} else {
			$('.nosolutions').show();
		}
		return;
		$("#endsupervision ul").mapview(json2, {}, append)
		//查看
		$("#endsupervision .see").off().click(function() {
			var key = $(this).parent().attr("id");
			var obj = "seeendsupervision";
			viewSupervisionDetail( obj , key ) ;
			// changeReadState( key ) ;	
			changeReadState( key , "supervision_inspection") ;	
		
		})
		//查看满意度测评
	}).getJson();
})