var util = {
    isElement: function (obj) {
        return !!(obj && obj.nodeType === 1);
    },
    isString: function (obj) {
      return toString.call(obj) === '[object String]';
    }
};

var closeOverlay = function () {
    $('.changyan-overlay').remove();
    $('html').removeClass('changyan-overlay-lock');
    $(window).off('resize.changyan-overlay');
};

var creteOverlay = function () {
    var $overlay = $('.changyan-overlay').length? $('.changyan-overlay') : $('<div class="changyan-overlay changyan-overlay-fixed"></div>').appendTo('body');
    $('html').addClass('changyan-overlay-lock');
    $overlay.on('click', function (e) {
        if ($(e.target).parent().hasClass('changyan-overlay-outer')) {
            return;
        }
        $overlay.off('click');
        closeOverlay();
    });
};

var createDialog = function (dom) {
    var $dom;
    if (util.isElement(dom) || util.isString(dom)) {
        $dom = $(dom);
    }
    creteOverlay();
    var $outer = $('<div class="changyan-overlay-outer" style="filter:alpha(opacity=0);opacity: 0;"></div>');
    var $wrapper = $outer.html($(dom));
    $('.changyan-overlay').append($wrapper);
    var cssObj = {
        top: ($(window).height() - $wrapper.height()) / 2,
        left: ($(window).width() - $wrapper.width()) / 2,
        opacity: 1
    };
    $wrapper.css(cssObj);
    $wrapper.show();
    $(window).on('resize.changyan-overlay', function () {
        console.log(123);
        $wrapper.css({
            top: ($(window).height() - $wrapper.height()) / 2,
            left: ($(window).width() - $wrapper.width()) / 2
        });
    });
};

var Dialog = {
    show: function (contet) {
        createDialog(contet);
    },
    close: function () {
        closeOverlay();
    }
};