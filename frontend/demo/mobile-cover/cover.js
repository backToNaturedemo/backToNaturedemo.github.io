/**
 * @author guohao
 * @version [v1.0] 2015-08-13
 * @description 移动侧拉
 */
!(function () {
    // 获取wrapper
    var getWraper = function () {
        var i = document.createElement("div");
        i.style.position = "fixed";
        return i.style.position === "fixed"
    }();
    // 监听渐变结束
    var onTransitionEnd = "onTransitionEnd" in window ? "transitionEnd": "webkitTransitionEnd";
    var coverClass = 'mobile-cover';


    function Cover (cfg) {
        this.$el = $('<div class="mobile-cover"></div>');
        if (cfg.onShow) {
            this.onShow = cfg.onShow;
        }

        if (cfg.onHide) {
            this.onHide = cfg.onHide;
        }

        if (!getWraper) {
            this.$el.css({
                position: "absolute"
            })
        }
        this.init();
    };

    Cover.prototype.init = function () {
        this.render().bindEvent();
    };

    Cover.prototype.show = function () {
        var self = this;
        this.showed = true;
        if (!getWraper) {
            this.$el.css({
                top: window.pageYOffset,
                height: window.innerHeight
            })
        }
        this.$el.show();
        setTimeout(function() {
            self.$el.addClass("show");
            self.$el.trigger('show');
        }, 50);
        return this;
    };

    Cover.prototype.setContent = function (content) {
        this.$el.empty().append(content);
        return this;
    };

    Cover.prototype.render = function () {
        $("body").append(this.$el);
        return this;
    };

    Cover.prototype.bindEvent = function () {
        var self = this;
        var autoHeight = function() {
            self.$el.css("height", window.innerHeight)
        };
        var $body = $("body");
        self.$el.on("show", function () {
            if (!getWraper) {
                window.addEventListener("resize", autoHeight);
            }
            $body.css("-webkit-tap-highlight-color", "transparent");
            if ($.isFunction(self.onShow)) {
                self.onShow(self.$el);
            }
        }).on("hide", function () {
            if (!getWraper) {
                window.removeEventListener("resize", autoHeight);
            }
            $body.css("-webkit-tap-highlight-color", "");
            if ($.isFunction(self.onHide)) {
                self.onHide(self.$el);
            }
        });
        return this;
    };

    Cover.prototype.hide = function () {
        var self = this;
        if (this.showed) {
            this.showed = false
        } else {
            return this
        }
        this.$el.on(onTransitionEnd, function() {
            self.$el.hide();
            self.$el.off(onTransitionEnd);
        });
        this.$el.removeClass("show");
        this.$el.trigger("hide");
        return this;
    };

    Cover.prototype.destroy = function () {
        this.hide();
        this.$el.remove();
    };



    if (typeof define === 'function') {
        define(function() {
            return Cover;
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = Cover;
    } else {
        this.Cover = Cover;
    }
}());