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
            $('.cui-mobile-dialog-wrapper')
            .removeClass('cui-mobile-dialog-show')
            .addClass('cui-mobile-dialog-hide');
            window.setTimeout(function () {
                $('.cui-mobile-dialog-press').remove();
                $('.cui-mobile-dialog-wrapper').remove();
            }, 300);
        },
        // 渲染模态框
        renderDialog: function (tpl, fn) {
            var $wrapper = $('<div class="cui-mobile-dialog-wrapper"></div>');
            var $temp = $('<div class="cui-mobile-dialog-wrapper" style="opacity: 0;"></div>');
            // 计算元素宽高
            $temp
            .addClass('cui-mobile-dialog-show')
            .append(tpl);
            $body.append($temp);
            $temp.show();
            var top = $temp.height() / 2, left = $temp.width() / 2;
            $temp.remove();

            $wrapper
            .addClass('cui-mobile-dialog-hide')
            .append(tpl);
            $body.append($wrapper);
            $wrapper.show();
            $wrapper.css('margin-left', -left).css('margin-top', -top);

            if ($.isFunction(fn)) {
                fn($wrapper);
            }
            
            window.setTimeout(function () {
                $wrapper
                .removeClass('cui-mobile-dialog-hide')
                .addClass('cui-mobile-dialog-show');
            }, 1);
        }
    };
    window.Dialog = Dialog;
}());