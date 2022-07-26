

function getTypeidtitle( data ) {
	var result = "听取和审议专项工作报告";
	var evaluation_classify = [ "未知","听取和审议专项工作报告","参加其他会议","参加学习培训","提出议案，建议、批评和意见",
		"专题询问","参加视察","参加调研","参加执法检查","接待选民","化解矛盾纠纷","扶弱济困","办好事、实事","参加公益慈善事业","向选民述职","其他"];
	
	var typeid = parseInt( data.typeid ) ;
	return evaluation_classify[typeid] ;
	
}
function iscanEvaluat( v ) {
	var result = false ;
	var uid = RssUser.Data.myid ;
	//isparticipant
	var voterids = v.voterids ;
	var evaluatedids = v.evaluatedids ;
	if ( !isEmpty( voterids ) ) { //有投票人
		if ( voterids.indexOf( uid) != -1 ) { //可以投票
		   if ( isEmpty( v.evaluatedids  ) ) { //没有投过票
				result = true ;
		    }
		   else {
			   if ( evaluatedids.indexOf( uid) == -1 ) { //可以投票
				 result = true ;
			   }
		   }
			
		}
		
	}
	
	if ( uid == v.myid ) {
		result = true ;
	}
	return result ;
}

function appendLidata( v ) {
	var uid = RssUser.Data.myid ;
	var appendObj = "#evaluationsystemLayout"  + " article ul";
	var detail = '<a href="#viewdetaiLayout" class="see"><span>查看详情</span></a>' ;
	var viewresult = '<a href="#ViewevaluationLayout" class="ans" bindattr="myid"><span>测评结果</span></a>' ;
	var evaluate = '<a href="#evaluationLayout" class="evaluate" bindattr="myid"><span>我要测评</span></a>' ;
	// var setting = '<a href="#evaluationSettingLayout" class="set" bindattr="myid"><span>开启测评</span></a>' ;
	// var setting = '<a class="set" switch=' + v.evaluationState + '<span>开启测评</span></a>' ;	
	var setting = '<a href="#evaluationSettingLayout" class="set" bindattr="myid"><span>开启测评</span></a>' ;
	var setting_off = '<a  class="switchoff" bindattr="myid"><span>关闭测评</span></a>' ;
	if ( v.evaluationState == "0" ) {
		evaluate = "";
		if ( uid != v.myid ) {
			setting = "";
		}
		setting_off = ""
	}
	else{
		setting = "";
		if ( uid == v.myid ) {
		setting_off = '<a  class="switchoff" bindattr="myid"><span>关闭测评</span></a>' ;
		}
		// evaluate = '<a class="set" switch=' + v.evaluationState + '<span>关闭测评</span></a>' ;	
		evaluate = '<a href="#evaluationLayout" class="evaluate" bindattr="myid"><span>我要测评</span></a>' ;
	}
	
	
	var appendHtml = '<li>' +
		'<div class="liico"><span bindkeys="id">' + v.id + '</span></div>' + 
		'<h1 bindkeys="title">' + v.title + '</h1>' + 
		'<p initiator>' + v.initiator + '</p>' + 
		// '<div class="lifoot" id=' + v.id + '>' + 
		 '<div class="lifoot" id=' + v.id + ' switch=' +  v.evaluationState  +  '>'  +
		 // '<div class="lifoot" switch=' + v.evaluationState + '>' + 
		// '<div class="lifoot" bindattr="id">' + 
		detail + 
		viewresult + 
		evaluate + 	
		setting + 
		setting_off + 
		'</div></li>';
	$( appendObj ).append( appendHtml )
}
$("#evaluationsystemLayout").load(function() {
	
	var tablename = "supervision_special_inquery";
	var typeid = 5 ;
	
	$("#evaluationsystemLayout nav>a").off("click").click(function() {
		$(this).addClass("sel").siblings().removeClass("sel");
		if (arry.indexOf("evaluationsystemLayout") == "-1") {
			$("#evaluationsystemLayout ul li").eq(0).siblings().remove();
			arry.push("evaluationsystemLayout")
		} else {
			$("#evaluationsystemLayout ul li").remove();
		}
		
		if ($(this).index() == "0") {
			faqsajax = RssApi.Table.List( tablename ).setLoading(true).condition(new RssDict()
				.keyvalue({
					"taskDone": 1,
					"typeid": typeid
					// "previewleadername": RssUser.Data.myid
				}).getDict()).setFlushUI(function(json, append) {
					
					
				//在列表增加办理状态和提出者
				var json2 = [];
				$.each(json, function(k, v) {
					var data = v ;
					var state = data.state ;
					// var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: " + getprogressState( data ) ;
					var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "测评主题: " + getTypeidtitle( data ) ;
					data.initiator = initiator ;
					var uid = RssUser.Data.myid ;
					// if ( isparticipant( v ) ) {
					// if ( ( v.evaluationState == "1") && iscanEvaluat ( v ) ) {
					if ( iscanEvaluat ( v ) ) {	
						
						json2.push( data );
						appendLidata ( data ) ;
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
				
				// $("#evaluationsystemLayout ul").mapview(json2, {}, append)
				
				//查看
				$("#evaluationsystemLayout .see").off().click(function() {
					var key = $(this).parent().attr("id");
					console.log(" ___________________ 1111 see key=",key)
					$("#viewdetaiLayout_id").val( key );
					$("#viewdetaiLayout_typeid").val( typeid );
					$("#viewdetaiLayout_tablename").val( tablename );
					//viewSupervisionDetail ( obj , key ) ;
					// changeReadState ( key  , "supervision_special_inquery") ;
				})
				
				//审阅
				$("#evaluationsystemLayout .ans").off().click(function() {
					
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					$("#ViewevaluationLayout_handleID").val( key );
					$("#ViewevaluationLayout_typeid").val( typeid );
					$("#ViewevaluationLayout_tablename").val( tablename );

					console.log(" ___________________ 11111 ans key=",key)
					console.log(" ___________________ ans myid=",myid)
					//changeReadState ( key  , "supervision_special_inquery") ;
					// $("#anssupevaluationYS .normalbutton").off().click(function() {})
				})
				
				//测评
				$("#evaluationsystemLayout .evaluate").off().click(function() {
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					console.log(" ___________________ evaluate  key=",key)
					$("#evaluation_id").val( key );
					$("#evaluation_typeid").val( typeid );
					$("#evaluation_tablename").val( tablename );
					
					//changeReadState ( key  , "supervision_special_inquery") ;
					// $("#anssupevaluationYS .normalbutton").off().click(function() {})
				})
				
				$("#evaluationsystemLayout .set").off().click(function() {
					var key1 = $(this).parent().attr("switch");
					var id = $(this).parent().attr("id");
					console.log(" ___________________ set  key1=",key1)
					console.log(" ___________________ set  id=",id)
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					$("#evaluationSettingLayout_id").val( key );
					$("#evaluationSettingLayout_typeid").val( typeid );
					$("#evaluationSettingLayout_tablename").val( tablename );
					
					
					
					//changeReadState ( key  , "supervision_special_inquery") ;
					// $("#anssupevaluationYS .normalbutton").off().click(function() {})
				})
				
				$("#evaluationsystemLayout .switchoff").off().click(function() {
					var key1 = $(this).parent().attr("switch");
					var id = $(this).parent().attr("id");
					console.log(" ___________________ switchoff  key1=",key1)
					console.log(" ___________________ switchoff  id=",id)
					var key = $(this).parent().attr("id");
					var myid = $(this).attr("myid");
					
					settingSwitchOff( tablename , key ,typeid )
					
					//changeReadState ( key  , "supervision_special_inquery") ;
					// $("#anssupevaluationYS .normalbutton").off().click(function() {})
				})
				//查看
			}).getJson();
		}else{
			
			faqsajax = RssApi.Table.List( tablename ).setLoading(true).condition(new RssDict()
				.keyvalue({
					"taskDone": 1,
					"typeid": typeid
				}).getDict()).setFlushUI(function(json, append) {
				var json2 = [];
				$.each(json, function(k, v) {
					var data = v ;
					var state = data.state ;
					var initiator = "提出者: " + v.initiator + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + "办理进度: 已完结" ;
					data.initiator = initiator ;
					if ( isparticipant( v ) ) {
					if ( ( v.evaluationState == "1") && !iscanEvaluat ( v ) )
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
				$("#evaluationsystemLayout ul").mapview(json2, {}, append)
				$("#evaluationsystemLayout .evaluate").hide();
				//查看
				$("#evaluationsystemLayout .see").off().click(function() {
					var key = $(this).parent().attr("id");
					$("#viewdetaiLayout_id").val( key );
					$("#viewdetaiLayout_typeid").val( typeid );
					$("#viewdetaiLayout_tablename").val( tablename );
				})
				$("#evaluationsystemLayout .ans").off().click(function() {
					var key = $(this).parent().attr("id");
					$("#ViewevaluationLayout_handleID").val( key );
					$("#ViewevaluationLayout_typeid").val( typeid );
					$("#ViewevaluationLayout_tablename").val( tablename );
				})
				
			}).getJson();
		}
	})
	if (evaluationsystemLayoutnav == "1") {
		$("#evaluationsystemLayout nav>a").eq(0).click();
		evaluationsystemLayoutnav = "0";
	}
})