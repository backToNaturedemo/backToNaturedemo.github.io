!(function () {
    var ucAppList = {
        sinaWeibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        weixin: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        weixinFriend: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        QQ: ['kQQ', 'QQ', '4', 'QQ好友'],
        QZone: ['kQZone', 'QZone', '3', 'QQ空间']
    };

    var util = {
        loadJs: function (src, fun) {
            var head = document.getElementsByTagName('head')[0] || document.head || document.documentElement;
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('charset', 'UTF-8');
            script.setAttribute('src', src);
            if (typeof fun === 'function') {
                if (window.attachEvent) {
                    script.onreadystatechange = function () {
                        var r = script.readyState;
                        if (r === 'loaded' || r === 'complete') {
                            script.onreadystatechange = null;
                            fun();
                        }
                    };
                } else {
                    script.onload = fun;
                }
            }

            head.appendChild(script);
        }
    };

    var loadQQapi = function (fn) {
        var src = (UA.browserVersion < 5.4) ? 'http://3gimg.qq.com/html5/js/qb.js' : 'http://jsapi.qq.com/get?api=app.share';
        util.loadJs(src, fn);
    };

    var Share = function (platform_id, config, backupUrl) {
        var isucBrowser = (!!window.ucweb && !!window.ucweb.startRequest) || (!!window.ucbrowser && !!window.ucbrowser.web_share),
            to_app, B, k;
        
        var title = config.title,
            url = config.url,
            desc = config.desc,
            img = config.img,
            img_title = config.img_title,
            from = config.from;
        if (isucBrowser) {
            to_app = to_app == '' ? '' : (UA.ios ? ucAppList[platform_id][0] : ucAppList[platform_id][1]);
            if (platform_id == 'QZone') {
                B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+img+"&title="+title+"&description="+desc+"&url="+url+"&app_name="+from;
                k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
                    k && k.parentNode && k.parentNode.removeChild(k)
                }, 5E3);
            }
            if (typeof(window.ucweb) != "undefined") {
                window.ucweb.startRequest("shell.page_share", [title, desc, url, to_app, '', "@" + from, ""])
            } else {
                if (typeof(window.ucbrowser) != "undefined") {
                    window.ucbrowser.web_share(title, desc, url, to_app, "", "@" + from, '')
                } else {
                }
            }
        } else if (UA.browser === 'qq' && UA.browser !== 'weixin') {
            to_app = to_app == '' ? '' : ucAppList[platform_id][2];
            var ah = {
                url: config.url,
                title: config.title,
                description: config.desc,
                img_url: config.img,
                img_title: config.img_title,
                to_app: to_app,//微信好友1,腾讯微博2,QQ空间3,QQ好友4,生成二维码7,微信朋友圈8,啾啾分享9,复制网址10,分享到微博11,创意分享13
                cus_txt: "请输入此时此刻想要分享的内容"
            };
            ah = to_app == '' ? '' : ah;
            loadQQapi(function () {
                if (typeof(window.browser.app) != "undefined") {
                    window.browser.app.share(ah)
                } else if (typeof(window.qb) != "undefined") {
                    window.qb.share(ah)
                }
            });
        } else {
            location.href = backupUrl;
        }
    };

    if (typeof define === 'function') {
        define(function() {
            return Share;
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = Share;
    } else {
        this.Share = Share;
    }
}());