
var allRecord_refresh = 1 ; //为了处理进入二级页面返回以后，不要重新load. 汝州需求。 默认值1表示刷新。
$("#seestatisticsMY .hisback").click(function() {
	
	allRecord_refresh = 0 ;
});	



var searchState = 0 ;
$("#allRecord").load(function() {
	//如果进入二级页面返回，怎不需要刷新，这里直接返回。
	if ( allRecord_refresh == 0 ) {
		allRecord_refresh = 1 ;
		return ;
	}
	
	
	if ( searchState == 0 ) {
		$("#search_delete_btn").hide();
	}
	else {
		$("#search_delete_btn").show();
	}
	
	
	$('.rank').show();
	// $("#allRecord .search input").val("请输入关键字");
	reviewclass = {};
	if (arry.indexOf("allRecord") == "-1") {
		$("#allRecord ul li").eq(0).siblings().remove();
		arry.push("allRecord")
	} else {
		$("#allRecord ul li").remove();
	}
	
	// faqsajax = RssApi.Table.List("rank_sort").setLoading(true).keyvalue("pagesize", "1000").condition(
	faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "1000").condition(
		new RssDict().keyvalue({
			"draft": 2
		}).getDict()).setFlushUI(function(json, append) {
		// console.log(" __________________ json=",json)
		
		
		if (json.length < 10 ) {
			$('.nodata').hide();
		} else {
			$('.nodata').show();
		}
		
		$("#allRecord ul").mapview(json, {
			"shijian": function(val) {
				return shijian = new Date(parseInt(val) * 1000)
					.toString("yyyy-MM-dd hh:mm");
			}
		}, append);
		
		
		$("#allRecord .select").off("click").change(function() { 
			var meeting = 1;
			meeting = $("#allRecord .select1").val();
			var meetingnum = $("#allRecord .select").val();
			
			if (arry.indexOf("allRecord") == "-1") {
				$("#allRecord ul li").eq(0).siblings().remove();
				arry.push("allRecord")
			} else {
				$("#allRecord ul li").remove();
			}
		
		// RssApi.Table.List("companytypeee_classify").keyvalue("pagesize", "30").condition(new RssDict().keyvalue({}).getDict()).getJson(
		// 	function(json) {
		// 		$.each(json, function(k, v) {				
		// 			meetingnum[v.id] = v.name
		// 			$("#suggestsub [meetingnum]").attr("relationid", v.id)
		// 			$("#suggestsub [meetingnum]").text(v.name)
		// 		})
		// 		$("#suggestsub [meetingnum]").off("click").click(function() {
		// 			zzc($(this), meetingnum);
		// 		})
		// 	})
			// var sessionid = Integer.parseInt(meeting) + 29 ;
			// console.log(" __________ meeting="+ meeting )
			// console.log(" __________ meeting1 ="+ Integer.parseInt(meeting) + 29 )
			faqsajax = RssApi.View.List("sort").setLoading(true).keyvalue("pagesize", "1000").condition(
				new RssDict().keyvalue({
					"draft": 2 ,
					// "sessionid11": Integer.parseInt(meeting) + 29,
					"meetingnum": meetingnum,
				}).getDict()).setFlushUI(function(json1, append) {
				// console.log(" __________ json1.length="+json1.length)
				// console.log(" __________ meetingnum="+meetingnum)
				if (json1.length < 10 ) {
					$('.nodata').hide();
				} else {
					$('.nodata').show();
				}	
				$("#allRecord ul").mapview(json1, {
					"shijian": function(val) {
						return shijian = new Date(parseInt(val) * 1000)
							.toString("yyyy-MM-dd hh:mm");
					}				 
				}, append);	
			}).getJson();

			 
		})
		
		$("#allRecord .hisback").click(function() {
			//$("#allRecord ul li").remove();
			searchState = 0 ;
			$("#allRecord .search input").val("");
			$('.rank').show();
		});	
		
		//查看
		$("#allRecord .see").off().click(function() {
			var key = $(this).parent().attr("sortid");
			//$("#duptyId").val(key);
			var appendObj = "seestatisticsMY";
			
			//设置二级页面返回刷新状态
			allRecord_refresh = 0 ;
			
			viewSuggestInformation( appendObj , key );
			$("#seestatisticsMY").find("header>h1").text("查看详情");
			
		})
		
		//搜索
		$("#allRecord .search button").off("click").click(function() {
			$('.rank').hide();
			
			if ( searchState == 0 ) {
				searchState = 1 ;
				$("#search_delete_btn").show();
				$("#search_btn").hide();
			}else {
				searchState = 0 ;
				$("#search_delete_btn").hide();
				$("#search_btn").show();
				$("#allRecord .search input").val("");
			}
			
			var key = $("#allRecord .search input").val();
			
			if (key == undefined || key == "") {
				$("#search_delete_btn").hide();
				$("#search_btn").show();
			} 
			
			
			console.log("_____________ search button key="+key + " searchState="+searchState)
			var likeall = {};
			if (key == undefined || key == "") {
				
			} else {
				likeall = {
					'realname': "{likeall~" + key + "}"
					// 'title': "{likeall~" + key + "}",
					// 'matter': "{likeall~" + key + "}"
				};
			}
			
			$("#allRecord ul li").remove();
			
		
			faqsajax = RssApi.View.List("sort").setLoading(true).condition(new RssDict()
				.keyvalue({
					"draft": 2 ,
				}).keyvalue(likeall).getDict()).setFlushUI(function(json, append) {
					$("#allRecord ul").mapview(json, {
						
						"shijian": function(val) {
							return shijian = new Date(parseInt(val) * 1000)
								.toString("yyyy-MM-dd hh:mm");
						}	
					}, append)
				
					if (json.length < 10 ) {
						$('.nodata').hide();
					} else {
						$('.nodata').show();
					}	
				$("#allRecord .see").off().click(function() {
					var key = $(this).parent().attr("sortid");
					//$("#duptyId").val(key);
					var appendObj = "seestatisticsMY";
					viewSuggestInformation( appendObj , key );
					$("#seestatisticsMY").find("header>h1").text("查看详情");
					
				})	
			
			}).getJson();
			
			
			
			
			
		})		
			
		
		
	}).getJson();
})
