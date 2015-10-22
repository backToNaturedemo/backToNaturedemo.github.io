/**
 * Created by haoguo on 2015/10/19.
 */
$(function () {
    var container = document.getElementById('cyanData-frontend-param');
    var editor = new JSONEditor(container);
    var json = {
        'array': [1, 2, 3, 4, 5, 6, 7, 8, 8, 9],
        'boolean': true,
        'null': null,
        'number': 123,
        'object': {'a': 'b', 'c': 'd'},
        'string': 'Hello World'
    };
    editor.set(json);

});