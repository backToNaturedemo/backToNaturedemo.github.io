
var creteOverlay = function () {
    var $overlay = $('.changyan-overlay').length? $('.changyan-overlay') : $('<div class="changyan-overlay changyan-overlay-fixed"></div>').appendTo('body');
    $('html').addClass('changyan-overlay-lock');
};

var closeOvery = function () {
    $('changyan-overlay').remove();
    $('html').removeClass('changyan-overlay-lock');
};


var Dialog = {
    show: function () {
        creteOverlay();
    },
    close: function () {

    }
};