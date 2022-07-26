function fillranklistdata( v , Obj ) {
	var mstate = parseInt( v.state );
	var typeid = 8 ;
	var append_obj = "#" + Obj + " ul";
	var href_obj = "#see"+ Obj ;
	var state = "办理进度: " + getprogressState( v ) ;
	var initiator = "提出者: " + v.initiator ;
	
	// <img  class="headimage" avatar alt="" />
	var liStr = '<li><div class="liico1"></div>' +
		'<img class="headimage" src="'+ avatar +'" bindkeys="avatar" ' +
		'<h1 style="margin-left:20px;">' + v.realname +
		'</h1>' +		
		'<p style="margin-left:20px;">代表团：<text>' + v.delegationname + '</text></p>' + 
		'<p style="margin-left:20px;"><text>' + v.delegationname + '</text></p>' +  
		'<div class="lifoot" id=' + v.id +
		' id=' + v.id +
		'>'
		liStr += '<a href="#seesupervision" class="see" onclick="seeRankDetail('+v.id+');"><span>查看详情</span></a></div></li>';
		liStr += '<input type="hidden" state_id='+mstate+' />'
		$(append_obj).append(liStr);
		$("#state_id").val(mstate);
}



$("#rankLZ").load(function() {
	if (arry.indexOf("supervision") == "-1") {
		$("#rankLZ ul li").eq(0).siblings().remove();
		arry.push("supervision")
	} else {
		$("#rankLZ ul li").remove();
	}
	if ($(this).index() == "0") {
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

			
			
				$.each(json2, async function(k, v) {
					
					fillranklistdata ( v , "rankLZ" );				 
				})				
		}).getJson();
	} // 0

})

function seeRankDetail( key ) {
	var obj = "rankLZ";
	viewSupervisionDetail( obj ,key );
	
	$("#rankLZ .hisback").click(function() {
		location.href = "#seesupervision";
	});					
}