;(function($) {
    var event = $.Event('tap');
    var touch = {};
    touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
    touch.el.trigger(event);
    $.fn.tap = function (callback) {return this.on('tap', callback)};
})(Zepto)