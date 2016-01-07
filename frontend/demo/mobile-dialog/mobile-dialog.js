/**
 * @author guohao
 * @version [v1.0] 2015-08-13
 * @description 移动模态框
 */
!(function () {
    var $body = $('body');
    var Dialog = {
        init: function (cfg) {
            this.createPress();
            this.renderDialog(cfg.tpl, cfg.onshowed); 
        },
        // 创建遮罩
        createPress: function () {
            var self = this,
            $press = $('<div class="cui-mobile-dialog-press"></div>');
            $body.append($press);
            $press.on('click', function () {
                self.close();
            });
        },
        // 关闭模态框
        close: function () {
            $('.cui-mobile-dialog-press').remove();
            $('.cui-mobile-dialog-wrapper').remove();
        },
        // 渲染模态框
        renderDialog: function (tpl, fn) {
            var $wrapper = $('<div class="cui-mobile-dialog-wrapper"></div>');
            $wrapper
            .addClass('cui-mobile-dialog-pre')
            .append(tpl)
            .show()
            .removeClass('cui-mobile-dialog-pre');
            $body.append($wrapper);
            var win_height = $(window).height(),win_width = $(window).width(),
            wrapper_height = $wrapper.height(),wrapper_width = $wrapper.width(),
            top = (win_height - wrapper_height) / 2, left = (win_width - wrapper_width) / 2;
            $wrapper.css('left', left).css('top', top);

            if ($.isFunction(fn)) {
                fn($wrapper);
            }
            window.setTimeout(function () {
                $wrapper.addClass('cui-mobile-dialog-active');
            },1);
        }
    };
    window.Dialog = Dialog;
}());