$(function () {



    var common = function () {
        var loading = function (fn) {
            var $press = $('<div class="cyan-data-press"></div>'),
                $spinner = $('<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>'),
                $body = $(window.document.body);
            $body.append($press);
            $body.append($spinner);
            window.setTimeout(function () {
                $press.remove();
                $spinner.remove();
                $('body').fadeOut().fadeIn(500);
                if ($.isFunction(fn)) {
                    fn();
                }
            }, 1000);
        };

        loading();
    };

    var wap = function () {
        common();
    };

    var pc = function () {
        common();
    };

    var init = function (data) {
        if (data) {
            alert(data);
        }
        if ($('#SOHUCS').length) {
            // 如果有接入畅言得话
            if ($('#cy-cbox-wrapper').length) {
                // wap站
                wap();

            } else {
                // PC站
                pc();
            }
        }
    };

    init();

//    window._cyanData = init;

});