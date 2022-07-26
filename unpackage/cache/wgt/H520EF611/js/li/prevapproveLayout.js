
function inquiry_entry( key ) {
    $("#prevapproveLayout_id").val( key );
	$("#prevapproveLayout_typeid").val( 5 ); //专题询问
	$("#prevapproveLayout_tablename").val( "supervision_special_inquery"); //专题询问
	updateReadState ( "supervision_special_inquery" , key , "view" ) ;
}
$("#prevapproveLayout").load(function () {
	var caption = "预审的专题询问";
	var key = $("#prevapproveLayout_id").val();
	var typeid = $("#prevapproveLayout_typeid").val();
	var tablename = "supervision_inspection";
	
	if ( typeid == 3 ) {
		caption = "预审的执法检查";
		//tablename = "supervision_enforcement";
	}
	$("#prevapproveLayout h1").text( caption )
	
	
	RssApi.Table.List(tablename).setLoading(true).condition(new RssDict()
		.keyvalue({
			"id": key
		}).getDict()).getJson(function(json) {})
});

$("#prevapproveLayout .normalbutton").click(function() {
	var isagree = $("#prevapproveLayout .marginb form input:radio:checked").val();
	var previewopinion = $("#prevapproveLayout textarea").val();
	var tablename = $("#prevapproveLayout_tablename").val();
	var key = $("#prevapproveLayout_id").val();
	var myid = RssUser.Data.myid ;
	// "myid": RssUser.Data.myid,
	var k = {
	"id": key
	
	}
	
	RssApi.Table.List( tablename ).setLoading(true).keyvalue( { "id": key }).getJson(function(json) {
		console.log("_____ json=",json)
		if (json.length > 0  ) {
			
			myid = json[0].myid ;
			var state = 2
			var needsubmitmeeting = 1 ;
			if (isagree == "2") {
				state = 5 ;
				needsubmitmeeting = 2 ;
			}
			var parameter = {
			"id": key,
			"myid": myid,
			"state": state,
			"needsubmitmeeting": needsubmitmeeting,
			"previewopinion": previewopinion
			}
			RssApi.Edit( tablename ).setLoading(true).keyvalue(parameter).getJson(function(json1) {
				console.log("_____ json1=",json1)
				if (json1.id) {
					alert("审阅成功");
					$("#prevapproveLayout textarea").val("");
					$("#prevapproveLayout .marginb form input:radio:checked").val(1);
					//supervisionUnreadMsg();
					updateReadState ( tablename , key , "preview" ) ;
					supevaluationYSnav = "1";
					previewEnforcementnav = "1";
					history.go(-1);
				} else {
					alert("审阅失败");
				}
			})
			
			
			
		}
	})
	
	
})

