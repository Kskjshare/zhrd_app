/// <reference path="jquery.min.js" />
/// <reference path="rsseasy.adapter.min.js" />
/// <reference path="rsseasy.min.js" />
/// <reference path="rsseasy.dialog.min.js" />


//APP配置基本信息
// RssApp["WwwHost"] = "http://wsrd.cloudrich.top:10000/";  //wsrd
// RssApp["WwwHost"] = "http://116.95.33.77:10000/";  //wsrd
//RssApp["WwwHost"] = "http://219.159.165.98:81/";//bmrd

let ip = "http://117.158.113.36:9002/";
// let ip = "http://81.70.154.225:8001/";
// let ip = "http://localhost:8084/";

RssApp["WwwHost"] = "http://117.158.113.36:9002/";  //开发地址

RssApp["ApiHost"] = RssApp.WwwHost + "api/";   //API接口地址
RssApp["UpHost"] = RssApp.WwwHost + "upfile/"; 
RssApp["UpFileApi"] = RssApp.WwwHost + "widget/upload.jsp";
RssApp["LiVeUrl"] = "http://live.itemjia.com/rsseasy/";
RssApp["AllPage"] = $("section");  //获取所有页
RssApp["CurPage"] = RssApp["AllPage"].first().show();  //默认第一页
RssApp["Hash"] = "#";
RssApp["HashLoad"] = true;
RssApp["Menu"] = $("body>footer>a");   //主菜单
RssApp["Width"] = $(window).width();  //APP窗口宽度
RssApp["WinHeight"] = $(window).height();  //APP窗口高度
RssApp["SmsToken"] = "";  //发送的短信验证码生成的令牌
RssApp["ImgToken"] = "";  //图片验证码生成的令牌
RssApp["Module"] = {"goods": 3}

//上传文件配置
//RssUpFile.DoMain = "http://wsrd.cloudrich.top:10000/upfile/";//wsrd
// RssUpFile.DoMain = "http://116.95.33.77:10000/upfile/";//wsrd
//RssUpFile.DoMain = "http://219.159.165.98:81/upfile/";//bmrd

RssUpFile.DoMain = ip +"upfile/";//开发地址



$(window).resize(function () {
    RssApp.Width = $(window).width();
    $("html").css("font-size", parseInt(RssApp.Width / 750 * 100));
}).resize();

//AJAX配置信息
Ajax.prototype.prikey = "www.rsseasy.com";  //数据签名密钥
Ajax.prototype.host = RssApp["ApiHost"];   //AJAX请求时URL地址相同部份
Ajax.prototype.oncreate = function () {
};
Ajax.onrsscode = function () { }
Ajax.rsscode = function (code) {
    if (Ajax.onrsscode(code)) {
        Ajax.onrsscode = function () { };
        alert("9999999")
        location.hash = "#loginpassword";
        return;
    }
    alert("88888")
    RssCode.alert(code);
}

RssTask.synctime(RssApp.ApiHost + "time");  //获取服务器时间接口地址
RssVideo.player = document.getElementById("videoplay");   //指定视频播放器,音乐播放器程序自动创建并在后台调用播放

RssApp["Menu"].click(function () {
    RssApp["Menu"].removeClass();
    $(this).addClass("active");
    if (!$(this).attr("islogin")) {
        JsAdapter.ClearHistory().Submit();
    }
});

//所有单页
var RssPage = {};
RssPage["MaskLayer"] = $("#masklayer");
RssPage.Init = function (pageid) {
    if (!this[pageid]) {
        var page = $("#" + pageid);
        this[pageid] = {
            "page": page,
            "header": page.find(">header"),
            "title": page.find(">header h1"),
            "article": page.find(">article"),
            "footer": page.find(">footer"),
            "right": page.find(">header .right"),
            "left": page.find(">header .left"),
            "top": function () {
                var t = this;
                this.page.attr("target", "top").find(".hisback").unbind().click(function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    t.page.removeAttr("target");
                });
                return t;
            }
        }
    }
    return this[pageid];
};
RssPage.onpagechange = function (to, isload) {
    RssApp["AllPage"].hide();
    if (to) {
        if (to != "#loginpage") {
            RssApp.Hash = to;
        }
        RssAudio.stop();
        RssVideo.stop();
        RssApp["Menu"].filter("[href='" + to + "']").click();//改变footer菜单样式，调用方法：RssApp["Menu"].click()
        document.title = $("#hash header h1").text() || document.title;
        to = $(to).show();
        if (isload) {
            to.load();
        }
        to.trigger("pagechange");
        return;
    }
    RssApp["AllPage"].first().show().load();
}
$("section").each(function ()//通过循环将section增加到RssPage中
{
    var id = this.id;//获取每个section的id值
    if (id) {
        RssPage[id] = RssPage.Init(id);
    }
})
window.onhashchange = function () {
    RssPage.onpagechange(location.hash, true);
};
window.onhashchange();

RssPage.PageToggle = function (to) {
    RssApp["AllPage"].hide();
    var isload = true;
    if (to) {
        $(RssApp.Hash).trigger("unload", function (load) {
            isload = load;
        });
        if (to != "#loginpage") {
            RssApp.Hash = to;
        }
        RssAudio.stop();
        RssVideo.stop();
        RssApp["Menu"].filter("[href='" + to + "']").click();//改变footer菜单样式，调用方法：RssApp["Menu"].click()
        document.title = $("#hash header h1").text() || document.title;
        to = $(to).show();
        if (isload) {
            to.load();
        }
        return;
    }
    RssApp["AllPage"].first().show().load();
}

//检测新版本
JsAdapter.onGetVersion = function (json) {
    new Ajax("version").keyvalue(json).getJson(function (json) {
        if (!json["url"]) {
            return;
        }
        RssDialog.onConfig = function () {
            // JsAdapter.Push({"adapter": "SoftUpdate", "url": RssApp.UpHost + json["url"]}).Submit();
            //alert("启动2。。。");
		}
        RssDialog.SetTitle("发现新版本").setConfig("立即升级").AddHtml(json["remark"]).Popup();
        console.log(JSON.stringify(json));
    });
}

JsAdapter.GetVersion().Submit();

JsAdapter.onReady = function (pzhi) {
    new Ajax("Deviceid").keyvalue({"myid": RssUser.Data.myid, "deviceid": pzhi["deviceid"]}).getJson(function (pzhi) {
    });
//    alert(pzhi["deviceid"]);
}
JsAdapter.Ready({"myid": RssUser.Data.myid}).Submit();

JsAdapter.onPushMessage = function (mg) {
    if (mg["key"] == "1") {
        //活动
        location.href = "#applyHD";
    }
    if (mg["key"] == "2") {
        //建议
        location.href = "#suggesthandle";
    }
    if (mg["key"] == "3") {
        //议案
        location.href = "#suggesthandleYA";
    }

    // 4 5 6 7通知公告
    if (mg["key"] == "4") {
        location.href = "#noticebulletin";
    }
    if (mg["key"] == "5") {
        location.href = "#noticebulletin";
    }
    if (mg["key"] == "6") {
        location.href = "#noticebulletin";
    }
    if (mg["key"] == "7") {
        location.href = "#noticebulletin";
    }
    if (mg["key"] == "8") {
        //学习课件
        location.href = "#courseware";
    }
    if (mg["key"] == "9") {
        //专题讲座
        location.href = "#lecture";
    }
    if (mg["key"] == "10") {
        //履职参考
        location.href = "#reference";
    }
    if (mg["key"] == "11") {
        //法律法规 宪法
        location.href = "#statute";
    }
    if (mg["key"] == "12") {
        //国法
        location.href = "#statute";
    }
    if (mg["key"] == "13") {
        //相关法规
        location.href = "#statute";
    }



//    switch (mg["key"]) {
//        case 1:
//            location.href = "#applyHD";
//            break;
//        case 2:
//            location.href = "#suggesthandle";
//            break;
//        case 3:
//            location.href = "#suggesthandleYA";
//            break;
//        case 4:
//            location.href = "#notice";
//            break;
//        case 5:
//            location.href = "#notice";
//            break;
//        case 6:
//            location.href = "#notice";
//            break;
//        case 7:
//            location.href = "#notice";
//            break;
//        case 8:
//            location.href = "#courseware";
//            break;
//        case 9:
//            location.href = "#lecture";
//            break;
//        case 10:
//            location.href = "#reference";
//            break;
//        case 11:
//            location.href = "#statute";
//            break;
//        case 12:
//            location.href = "#statute";
//            break;
//        case 13:
//            location.href = "#statute";
//            break;
////        case 14:
////            location.href = "#user_cbdweval";
////            break;
//        default:
//            break;
//    }
}

if (!Storage.Get("launch")) {
    Storage.Set("launch", "1");
    $("#launchpage").on("pageslideend", function (ev, json) {
        if (json["curpage"] == json["totalpage"]) {
            $(this).hide();
        }
    }).show();
}
//if(Url['bb']){
//    loct
//}
//正则匹配钱数
function num(obj) {
    $('input').bind('input propertychange', function () {
        obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
    })
}