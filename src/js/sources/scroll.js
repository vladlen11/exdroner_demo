$(document).ready(function() {
    if ($(".home").length >= 1) {
        const $window = $(window);
        let $section = $("section");
        let $btnHero = $(".btn-menu");
        let $btnHeader = $(".header-nav");


        $('.flowing-scroll').on( 'click', function(){
            let el = $(this);
            let dest = el.attr('href'); // получаем направление
            if(dest !== undefined && dest !== '') { // проверяем существование
                $('html').animate({
                        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
                    }, 500 // скорость прокрутки
                );
            }
            return false;
        });

        $window.scroll(function(){
            const $height = $window.scrollTop();

            if($height >= $btnHero.eq(0).offset().top - 50) {
                $btnHeader.eq(0).addClass('fixed');
                $btnHero.eq(0).removeClass('show');

            } else {
                $btnHeader.eq(0).removeClass('fixed');
                $btnHero.eq(0).addClass('show');
            }
            if($height >= $btnHero.eq(1).offset().top - 50) {
                $btnHeader.eq(1).addClass('fixed');
                $btnHero.eq(1).removeClass('show');
            } else {
                $btnHeader.eq(1).removeClass('fixed');
                $btnHero.eq(1).addClass('show');
            }
            if($height >= $btnHero.eq(2).offset().top - 50) {
                $btnHeader.eq(2).addClass('fixed');
                $btnHero.eq(2).removeClass('show');
            } else {
                $btnHeader.eq(2).removeClass('fixed');
                $btnHero.eq(2).addClass('show');
            }
        });
    }

});
