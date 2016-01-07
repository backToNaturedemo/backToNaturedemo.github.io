$(function () {
    $('#test').on('click', function () {
        $.ajax({
            url: 'http://changyan.sohu.com/debug/cookie',
            dataType: 'jsonp',
            jsonp: 'callback',
            cache: false,
            success: function (data) {
                console.log(data);
            }
        });
    });

    $('#set').on('click', function () {
        // Cookies.set('test', '123123', { domain: '.sohu.com', path: '/', expires: 7 });
        $.ajax({
            url: 'http://changyan.sohu.com/debug/cookie',
            dataType: 'jsonp',
            jsonp: 'callback',
            cache: false,
            data: {
                setCookie: 'debug_uuid=C6E82A58D2A00001CED81A6022EF15B3; expires=Fri Jan 06 2017 10:43:43 GMT 0800 (中国标准时间); path=/; domain=.changyan.sohu.com'
            },
            success: function (data) {
                console.log(data);
            }
        });
    });
});