/**
 * @author guohao
 * @version [v1.0] 2015-08-13
 * @description 移动模态框
 */
!(function () {
    var Dialog = function (cfg) {
        var $body = $('body');
        // 创建遮罩
        var createPress = function () {
            var $press = $('<div class="cui-mobile-dialog-press"></div>');
            $body.append($press);
        };
        
        // 移除遮罩
        var removePress = function () {
            $('.cui-mobile-dialog-press').remove();
        };

        // 渲染模态框
        var renderDialog = function () {
            var $wrapper = $('<div class="cui-mobile-dialog-wrapper"></div>');
            $wrapper.addClass('cui-mobile-dialog-pre').append(cfg.tpl);
            $wrapper.show().removeClass('cui-mobile-dialog-pre');
            $body.append($wrapper);
            window.setTimeout(function () {
                $wrapper.addClass('cui-mobile-dialog-active');
            },1);
        };
        createPress();
        renderDialog();     
    };   
    window.Dialog = Dialog;
}());