/*jslint browser: true, vars: true, nomen: true, indent: 4, maxlen: 80, plusplus: true, sloppy: true, newcap: true, sub: true, regexp: true, continue: true*/
/*global console: true, changyan: true*/
var Barrage = (function () {
    // 定义动画方法
    (function () {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // Webkit中此取消方法的名字变了
                window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }());

    var flag = 1, $commentArr = [], distanceArr = [], params;

    function _isObj(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }

    // 编译弹幕模板
    function _compilerTpl(tpl, data, i) {
        if (typeof tpl !== 'string' || !_isObj(data)) {
            return;
        }
        return tpl;
    }

    // 执行css
    function _execCss(el, top) {
        if (top < params.top) {
            top = params.top;
        }
        el.css('top', top);
    }

    // 动画函数
    function animate(a, b) {
//        a = a - b / 100;
        return a - 1;
    }

    // 渲染评论数据
    function render(obj) {
        var tpl = obj.tpl, data = obj.data, $comment, 
        warpper = obj.warpper, top = obj.top, i = 0, gap = obj.gap, originTop = top + 3 * gap;
        console.log(originTop);
        data.forEach(function (item) {
            $comment = $(_compilerTpl(tpl, item, i));
            $comment._originTop = originTop;
            top += gap;
            console.log(top);
            $comment.css('top', parseInt($comment.css('top')) + top);
            warpper.append($comment);
            _exec($comment);
            i++;
        });

    }

    // 对单条评论执行动画
    function _exec($comment) {
        var start = 0, during = 10000, originTop = parseInt($comment.css('top'));
        var _run = function () {
            start++;
            var top = parseInt($comment.css('top'));
            // 200是偏移到的top值
            _execCss($comment, animate(top, params.top));
            var currentTop = parseInt($comment.css('top'));
            if (start < during && currentTop > params.top && flag == 1) {
                requestAnimationFrame(_run);
            } else if (currentTop == params.top && flag == 1) {
                start = 10000;
                $comment.css('top', $comment._originTop);
                _exec($comment);
            }
        };
        _run();
    }



    // 初始化
    function _init(obj) {
        render(obj);
    }

    // 弹幕对象
    function Barrage(obj) {
        if (_isObj(obj)) {
            this.obj = obj;
            params = obj;
        } else {
            console.log('请传入正确的参数');
            return this;
        }
    }
    // 播放弹幕
    Barrage.prototype.play = function () {
        _init(this.obj);

    };

    // 暂停弹幕
    Barrage.prototype.pause = function () {
        flag = 1;
    };

    // 关闭弹幕
    Barrage.prototype.close = function () {

    };
    return Barrage;
}());