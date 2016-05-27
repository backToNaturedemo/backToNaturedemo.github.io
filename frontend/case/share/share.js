!(function () {
    var ucAppList = {
        sinaWeibo: ['kSinaWeibo', 'SinaWeibo', 11, '新浪微博'],
        weixin: ['kWeixin', 'WechatFriends', 1, '微信好友'],
        weixinFriend: ['kWeixinFriend', 'WechatTimeline', '8', '微信朋友圈'],
        QQ: ['kQQ', 'QQ', '4', 'QQ好友'],
        QZone: ['kQZone', 'QZone', '3', 'QQ空间']
    };

    var isucBrowser = (ucweb && ucweb.startRequest) || (ucbrowser && ucbrowser.web_share);
    var Share = function (platform_id, config) {
        // 1: 微信，2: 微信朋友圈, 3: sina微博, 4: qq, 5: qzone
        var title = config.title,
            url = config.url,
            desc = config.desc,
            img = config.img,
            img_title = config.img_title,
            from = config.from;

        if (isucBrowser) {
            if (platform_id == 5) {
                B = "mqqapi://share/to_qzone?src_type=web&version=1&file_type=news&req_type=1&image_url="+img+"&title="+title+"&description="+desc+"&url="+url+"&app_name="+from;
                k = document.createElement("div"), k.style.visibility = "hidden", k.innerHTML = '<iframe src="' + B + '" scrolling="no" width="1" height="1"></iframe>', document.body.appendChild(k), setTimeout(function () {
                    k && k.parentNode && k.parentNode.removeChild(k)
                }, 5E3);
            }
            if (UA.android) {

            } else if (UA.ios) {

            }
            
            if (typeof(ucweb) != "undefined") {
                ucweb.startRequest("shell.page_share", [title, title, url, to_app, "", "@" + from, ""])
            } else {
                if (typeof(ucbrowser) != "undefined") {
                    ucbrowser.web_share(title, title, url, to_app, "", "@" + from, '')
                } else {
                }
            }
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