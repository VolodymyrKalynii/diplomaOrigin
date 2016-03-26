//фіксація меню при прокрутці
var h_hght = 80; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна

$(document).ready(function () {
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        var elem = $('#nav');
        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });
});

