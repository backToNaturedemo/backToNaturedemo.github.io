(function () {
    var getStartScript = function () {
        // changyan.js changyan-plus.js
        var scripts = document.getElementsByTagName('script'),
            i,
            currentScript;
        for (i = 0; i < scripts.length; i++) {
            if (/changyan\.js/gi.test(scripts[i].src) || /changyan-plus\.js/gi.test(scripts[i].src)) {
                currentScript = scripts[i];
                break;
            }
        }
        return currentScript;
    };

    var getUrlParams = function (url) {
        var obj = {};

        if (!url || typeof url !== 'string') {
            return obj; 
        }

        var paramStr = url.split('?')[1] || '';
        var paramArr = paramStr.split('&');
        var i, subArr;
        if (paramArr.length) {
            for (i = 0; i < paramArr.length; i++) {
                subArr = paramArr[i].split('=');
                if (!obj[subArr[0]]) {
                    obj[subArr[0]] = subArr[1];
                }
            }
        }
        return obj;
    };

    var script = getStartScript();
    var url = (script && script.src) || '';
    var params = getUrlParams(url);
    console.log(url);
    // isv._script.appid = params.appid;
    // isv._script.conf = params.conf;
}());