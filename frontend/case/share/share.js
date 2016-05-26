
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
    window.location.href = "mqqapi://share/to_fri?src_type=web&version=1&file_type=news&"
    window.location.href = b("mqqapi://share/to_fri?src_type=web&version=1&file_type=news", {
        share_id: "1101685683",
        title: Base64.encode(f),
        thirdAppDisplayName: Base64.encode("\u624B\u673A\u641C\u72D0"),
        url: Base64.encode(d)
    });
});

this.shareto = function(a) {
            var d, e = this.device, f = this.title, i = this.desc, j = this.image, k = this.from, l = this.newsid;
            if (d = e.browser.isUC ? b(this.url, {
                _once_: h.shareback + a + "_uc"
            }) : e.browser.isQQ ? b(this.url, {
                _once_: h.shareback + a + "_qq"
            }) : e.browser.isSogou ? b(this.url, {
                _once_: h.shareback + a + "_sogou"
            }) : b(this.url, {
                _once_: h.shareback + a
            }),
            "sohuwd" == a) {
                var m = "undefined" == typeof gallery ? 3 : 4;
                window.location.href = b("http://h5.t.sohu.com/feed/share", {
                    url: d,
                    id: l,
                    type: m,
                    title: f,
                    pic: j,
                    passport: this.sohupassport
                })
            } else if ("qzone" == a) {
                d = Base64.encode(d),
                j = Base64.encode(j),
                f = Base64.encode(f),
                i = Base64.encode(i),
                k = Base64.encode(k);
                var n = {
                    android: "mqqapi://share/to_qzone?src_type=app&version=1&file_type=news&req_type=1",
                    ios: "mqqapi://share/to_fri?file_type=news&src_type=app&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A&"
                };
                e.os.isAndroid ? e.browser.isSamsung ? window.location.href = b(n.android, {
                    url: d,
                    previewimageUrl: j,
                    title: f,
                    description: i,
                    thirdAppDisplayName: k
                }) : g(b(n.android, {
                    url: d,
                    image_url: j,
                    title: f,
                    description: i,
                    app_name: k
                })) : window.location.href = b(n.ios, {
                    url: d,
                    previewimageUrl: j,
                    title: f,
                    description: i,
                    thirdAppDisplayName: k
                })
            } else if ("qq" == a)
                window.location.href = b("mqqapi://share/to_fri?src_type=web&version=1&file_type=news", {
                    share_id: "1101685683",
                    title: Base64.encode(f),
                    thirdAppDisplayName: Base64.encode("\u624B\u673A\u641C\u72D0"),
                    url: Base64.encode(d)
                });
            else if ("wechatfriends" == a || "wechattimeline" == a || "sinaweibo" == a)
                if (e.browser.isUC)
                    e.os.isiOS && "undefined" != typeof ucbrowser ? (a = this.appList[a][0],
                    alert(f);
                    alert(d);
                    alert(a);
                    alert(k);
                    ucbrowser.web_share(f, f, d, a, "", " @" + k + " ", "")) : "undefined" != typeof ucweb ? (a = this.appList[a][1],
                    ucweb.startRequest("shell.page_share", [f, f + " @" + k + " ", d, a, "", "", ""])) : console.log("UCBrowser native share bypass.");
                else if (e.browser.isQQ) {
                    a = this.appList[a][2];
                    var o = {
                        url: d,
                        title: f,
                        img_url: j,
                        to_app: a,
                        cus_txt: f + " @\u624B\u673A\u641C\u72D0 "
                    };
                    browser && browser.app && browser.app.share ? browser.app.share(o) : console.log("QQBrowser native share bypass.")
                } else if (e.browser.isSogou) {
                    var p = {
                        shareTitle: f,
                        shareContent: i,
                        shareImageUrl: j,
                        shareUrl: d,
                        shareSnapshotTab: "",
                        shareType: null 
                    };
                    "wechatfriends" == a || "wechattimeline" == a ? ("wechatfriends" == a ? p.shareType = 2 : "wechattimeline" == a && (p.shareType = 4),
                    SogouMse && SogouMse.Utility && SogouMse.Utility.shareWithInfo ? SogouMse.Utility.shareWithInfo(p) : console.log("sogouBrowser native share error.")) : window.location.href = b("http://service.weibo.com/share/share.php?", {
                        title: encodeURIComponent(f),
                        url: encodeURIComponent(d),
                        appkey: "217550396",
                        pic: j,
                        ralateUid: "1934323297",
                        count: "n",
                        size: "middle"
                    })
                } else
                    "wechatfriends" == a || "wechattimeline" == a ? (d = c(d, {
                        _once_: "000022_shareback_" + a
                    }),
                    d = b(d, {
                        shareApp: a
                    }),
                    e.os.isiOS && e.os.version > 8 ? window.location.href = "mttbrowser://url=" + d : g("mttbrowser://url=" + d)) : "sinaweibo" == a && (window.location.href = b("http://service.weibo.com/share/share.php?", {
                        title: encodeURIComponent(f),
                        url: encodeURIComponent(d),
                        appkey: "217550396",
                        pic: j,
                        ralateUid: "1934323297",
                        count: "n",
                        size: "middle"
                    }))
        }