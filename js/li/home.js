var len = 5;
var clientWidth = document.body.clientWidth;
$(" .slider2 img").css('width', clientWidth);
         var totalWidth = clientWidth * len;
         $(".v_content_list").width(totalWidth + "px");
         var ulWidth = 16 * len + 10 * (len - 1);
         // $(".num").width(ulWidth + "px");
         // $(".num").css("marginLeft", (clientWidth - ulWidth) + "px");
         var index = 0;
         var adTimer;
         $(".num li").mouseover(function(){
            index  =   $(".num li").index(this);
            showImg(index);
         }).eq(0).mouseover();  
         //滑入 停止动画，滑出开始动画.
         $('.v_content_list').hover(function(){
                 clearInterval(adTimer);
             },function(){
                 adTimer = setInterval(function(){
                    showImg(index)
                    index++;
                    if(index==len){index=0;}
                  } , 2000);
         }).trigger("mouseleave");

function showImg(index){
    var adWidth = $("#sliderDiv").width();
    console.log('adWidth is:', adWidth);
    $(".v_content_list").animate({left : -adWidth*index},1000);
    $(".num li").removeClass("on")
            .eq(index).addClass("on");
}
