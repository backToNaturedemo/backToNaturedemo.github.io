!(function () {
    var Tips = function (data) {
        var $wraper;
        var $body = $(window.document.body);
        var style = 
        '<style class="pop-tips-style">.module-pop-tips{position:fixed;top:0;left:50%;z-index:9000}' +
        '.module-pop-tips .pop-tips-content{height:0;opacity:0;filter:alpha(opcity=0);border-radius:5px;top:0;padding:0 30px;position:relative}' +
        '.module-pop-tips .pop-tips-content span{line-height:53px;font-size:16px;font-weight:700}' +
        '.module-pop-tips .pop-tips-text{margin-left:16px}' +
        '.module-pop-tips .pop-tips-glyphicon{position:absolute;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAUCAMAAADCxCHbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTdBRjg1RDNBMkU4MTFFNTgyODM4NkU4NUVCODIwQjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTdBRjg1RDRBMkU4MTFFNTgyODM4NkU4NUVCODIwQjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5N0FGODVEMUEyRTgxMUU1ODI4Mzg2RTg1RUI4MjBCMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5N0FGODVEMkEyRTgxMUU1ODI4Mzg2RTg1RUI4MjBCMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnSBWKgAAABgUExURTZzki1vNpO1mKk7MPn5+Nmoo5S1xV2QZBZdgOzT0fbs6srbzLZZT4Cmudfj6WyZr+Lr69jk2b/S3K3HsbXM18vb46S/zVSIou709kd/m50dEKQtIq3G0suHgJ8iFf///7SKDpMAAAAgdFJOU/////////////////////////////////////////8AXFwb7QAAAWtJREFUeNqs1OuugyAMAGAURGR4mXfFwfu/5VAQUXA/jqeJiRL80pQWIP87wN9+K3Ivunvx1Zw+ETUv1AEJ8IIUd+I7imIXZFBT2fyxiziQyFDeiAp0Sco45yuZCS4+yKz2xBenPCxuYJTa70RAyFWW2cwhnDOz2pL6Cnakd0X0NuuVBpHdODKoSJYoD842x4XsVTsqexbTqHEzROc6qhDrc9Sxn/AO7En3JT5ElCqmCWWoKwm34Aco8SBrktt9qCStLJ06aqgJgyoYv4DbWVcEjKYyE1FvgyOieKPiNAxSnSKjZ3HNrNAlnNZ/htNZazIMbqcM9Ylf+jFfi7kQXcCzaMkbkF/IvcNrNTtkkSHRkAFQKE0klHGXtDODcjzKsLiRPqjEtQ91E3GR/ZpCb2biKB0Dt0wi9DyrLC0o8eRvLP25fo3BiysxbUM/2dHhoGvrSwD85H5Eg3+dTeOjG7da+msUz+7wH/EVYADeD5ysOMfJNAAAAABJRU5ErkJggg==)}' +
        '.module-pop-tips .pop-tips-blue{background:#d9edf6;border:1px solid #bce8f1}' +
        '.module-pop-tips .pop-tips-blue span{color:#31708f}' +
        '.module-pop-tips .glyphicon-upload{left:17px;top:17px;background-position:-52px 0;height:18px;width:23px}' +
        '.module-pop-tips .pop-tips-green{background:#def0d8;border:1px solid #d5e9c6}' +
        '.module-pop-tips .pop-tips-green span{color:#34743d}' +
        '.module-pop-tips .glyphicon-ok{left:22px;top:17px;background-position:-4px 0;height:18px;width:18px}' +
        '.module-pop-tips .pop-tips-red{background:#f2dedf;border:1px solid #ebccd1}' +
        '.module-pop-tips .pop-tips-red span{color:#aa3c31}' +
        '.module-pop-tips .glyphicon-remove{left:22px;top:17px;background-position:-29px 0;height:18px;width:18px}</style>';

        if (!$('.pop-tips-style').length) {
            $('head').append(style);
        }
        var tpl_tips = 
            '<div class="pop-tips-content">' +
                '<span class="pop-tips-glyphicon" aria-hidden="true"></span>' +
                '<span node-type="pop-tips-text" class="pop-tips-text"></span>' +
            '</div>';
        

        if (!$('.module-pop-tips').length) {
            $wraper = $('<div node-type="pop-tips-wrapper" class="module-pop-tips"></div>');
            $body.append($wraper);
        } else {
            $wraper = $('.module-pop-tips');
        }

        var $tpl_tips = $(tpl_tips);
        $tpl_tips.find('span[node-type="pop-tips-text"]').text(data.content || '');
        var $glyphicon = $tpl_tips.find('.pop-tips-glyphicon');
        if (data.theme === 'green') {
            $glyphicon.addClass('glyphicon-ok');
            $tpl_tips.addClass('pop-tips-green');
        } else if (data.theme === 'red') {
            $glyphicon.addClass('glyphicon-remove');
            $tpl_tips.addClass('pop-tips-red');
        } else {
            $glyphicon.addClass('glyphicon-upload');
            $tpl_tips.addClass('pop-tips-blue');
        }
        $wraper.append($tpl_tips);
        $wraper.css('margin-left', '-' + $wraper.width() / 2 + 'px');
        var $currentTip = $wraper.find('.pop-tips-content').last();
        $currentTip.animate({
            opacity: 1,
            height: '53px'
        }, 'slow', 'swing', function () {
            window.setTimeout(function () {
                $currentTip.animate({
                    opacity: 0,
                    height: 0
                }, 'slow', function () {
                    if (typeof data.callback === 'function') {
                        data.callback();
                    }
                    $currentTip.remove();
                });
            }, data.showTime || 1500);
        });

    };
    // RequireJS && SeaJS
    if (typeof define === 'function') {
        define(function() {
            return Tips;
        });
    // NodeJS
    } else if (typeof exports !== 'undefined') {
        module.exports = Tips;
    } else {
        this.Tips = Tips;
    }
}());