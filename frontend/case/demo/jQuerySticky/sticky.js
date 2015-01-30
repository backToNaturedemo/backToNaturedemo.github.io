/**
 * Created by guohao on 15/1/26.
 * @base jQuery
 */

window.Sticky = (function () {
    'use strict';
    var sticky_id = 0;
    /**
     * Sticky类.
     * @param {Object} config - 参数对象
     */
    function Sticky(config) {
        var i;
        // 选中一起跟着滚动的元素
        if (config.el) {
            if (config.el.nodeType === 1 || typeof config.el === 'string' || config.el instanceof 'HTMLElement') {
                // 若el参数为原生dom元素或者selector字符串，加入jquery方法
                this.el = $(config.el);
            } else if(config.el instanceof 'jQuery') {
                // 若传入jquery-dom
                this.el = config.el;
            }
        }

        for (i in config) {
            if (i == 'top' || i == 'bottom') {
                // 判断参数为top还是bottom
                if (typeof config[i] == 'number' || typeof config[i] == 'string') {
                    this.type = i;
                    this[i] = config[i];
                }
            }
        }
        if (config.target && typeof config.target == 'string') {
            this.target = config.target;
        } else {
            this.target = window;
        }

        if (typeof config.callback === 'function') {
            // 回调函数
            this.callback = config.callback;
        }

        // 初始化监听函数
        this.init();
    }
    Sticky.prototype.init = function () {

        sticky_id ++;   // 唯一标示绑定Sticky的元素

        var el = this.el,
            target = this.target,
            type = this.type,
            value = this[type],
            callback = this.callback;

        // 纪录元素初始位置
        var originTop = el._originTop = el.offset().top,
            originLeft = el._originLeft = el.offset().left;

        // 需要添加的样式
        var fixedStyle = {
            position: "fixed",
            left: originLeft,
            margin: 0
        };
        fixedStyle[type] = this[type];

        // 保存元素原来的样式
        el._originStyles = {
            position: el.css("position"),
            top: el.css("top"),
            left: el.css("left"),
            margin: el.css("margin")
        };

        /**
         * 添加占位符
         * 需要占位符的情况有: position: static or relative，除了 display 不是 block 的情况
         */

        // _addPlaceholder: function() {
        //     var need = false,
        //         el = this.get('el'),
        //         position = el.css('position');

        //     if (position === 'static' || position === 'relative') {
        //         need = true;
        //     }
        //     if (el.css('display') !== 'block') {
        //         need = false;
        //     }

        //     if (need) {
        //         // 添加占位符
        //         this._placeholder = $('<div style="visibility:hidden;margin:0;padding:0;"></div>');
        //         this._placeholder.width(el.outerWidth(true))
        //             .height(el.outerHeight(true))
        //             .css('float', el.css('float')).insertAfter(el);
        //     }
        // },

        // 监听滚动事件
        var currentScroll,
            placeHolder;
        $(target).on("scroll." + sticky_id.toString(),function(){
            currentScroll = (type == 'top')? originTop - value : originTop - $(target).height();
            if ($(target).scrollTop() >= currentScroll) {
                // 添加占位符
                if ($('.Sticky-Placeholder' + sticky_id).length === 0) {
                    if ((el.css('position') === 'static' || el.css('position') === 'relative') && el.css('float') === 'none') {
                        el._placeholder = $('<div style="visibility:hidden;margin:0;padding:0;"></div>');
                        el._placeholder.width(el.outerWidth(true))
                        .height(el.outerHeight(true))
                        .addClass('Sticky-Placeholder' + sticky_id)
                        .css('float', el.css('float')).insertAfter(el);
                    }
                }
                
                el.css(fixedStyle);
                //执行回调,并传入true参数
                if(!el.data("bindSticky")){
                    callback(true);
                }
                // 标记已经绑定sticky的元素
                el.data("bindSticky",true);
            } else {
                if ($('.Sticky-Placeholder' + sticky_id).length === 1) {
                    if (!((el.css('position') === 'static' || el.css('position') === 'relative') && el.css('float') === 'none')) {
                        el._placeholder.remove();
                    }
                }
                el.css(el._originStyles);
                //执行回调,并传入false参数
                if(el.data("bindSticky")){
                    callback(false);
                }
                // 取消标记已经绑定sticky的元素
                el.data("bindSticky",false);
            }
        });
    };
    Sticky.prototype.destory = function () {
        var el = this.el,
            target = this.target;
        $(target).unbind('scroll.' + sticky_id.toString());
        el.css(el._originStyles);
        el.data("bindSticky",false);
    };
    return Sticky;
})();