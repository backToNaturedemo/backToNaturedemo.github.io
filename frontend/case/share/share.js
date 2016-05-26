if (ucweb) {
    // UC浏览器
    return;
}







/*UC浏览器下 分享到微信朋友圈和微信好友*/
if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                //判断是手机端访问
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

                    //判断是UC浏览器
                    if (typeof (ucweb) != "undefined") {
                        
                        //微信好友
                        $("#btnShareFirend").unbind();
                        $("#btnShareFirend").bind("click", function () {
                            var Browser = new Object();
                            Browser.ios = /iphone/.test(Browser.userAgent); //判断ios系统 
                            var title = document.title;
                            var img = "";
                            var url = location.href;
                            if (Browser.ios) {
                                ucbrowser.web_share(title, img, url, 'kWeixin', '', '', '');
                            } else {
                                ucweb.startRequest("shell.page_share", [title, img, url, 'WechatFriends', '', '', '']);
                            };
                        });

                        //微信朋友圈
                        $("#btnWeixinShare").unbind();
                        $("#btnWeixinShare").bind("click", function () {
                            var Browser = new Object();
                            Browser.ios = /iphone/.test(Browser.userAgent); //判断ios系统 
                            var title = document.title;
                            var img = "";
                            var url = location.href;
                            if (Browser.ios) {
                                ucbrowser.web_share(title, img, url, 'kWeixinFriend', '', '', '');
                            } else {
                                ucweb.startRequest("shell.page_share", [title, img, url, 'WechatTimeline', '', '', '']);
                            };
                        });
                         
                    }
                }
            } catch (e) { }
        }
    }

$('#shareQQ').on('click', function () {
    // window.location.href = "mqqapi://share/to_fri?src_type=web&version=1&file_type=news&"
    window.location.href = b("mqqapi://share/to_fri?src_type=web&version=1&file_type=news", {
        share_id: "1101685683",
        title: Base64.encode(f),
        thirdAppDisplayName: Base64.encode("\u624B\u673A\u641C\u72D0"),
        url: Base64.encode(d)
    });
});