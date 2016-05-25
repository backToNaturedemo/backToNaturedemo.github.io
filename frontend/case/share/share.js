
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