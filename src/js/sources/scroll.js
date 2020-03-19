$(document).ready(function() {
    if ($(".home").length >= 1) {
        const $window = $(window);
        const $document = $(document);
        let $header = $('.header');
        let $btnMenuHeader = $(".btn-header-menu");
        let $btnMenuHero = $(".hero__menu .btm-menu");
        // let $sectionHeight = $section[i].offsetTop;
        let $fixed1 = false;
        let $showClass = 'fixed';

        console.log($btnMenuHeader);
        console.log($btnMenuHeader[0]);
        console.log($btnMenuHero[1]);

        function showFixedMenu(fixed, index) {

            if(fixed) {
                $btnMenuHeader.eq( index ).toggleClass('fixed');
                $btnMenuHero.eq( index ).toggleClass('show');
            } else {
                $btnMenuHeader.eq( index ).toggleClass('fixed');
                $btnMenuHero.eq( index ).toggleClass('show');
            }
        }

        $window.scroll(function(){
            const height = $window.scrollTop();
            const height2 = $document.scrollTop();
            console.log(height, 'height');
            console.log(height2, 'height2');
            // if(height >= $btnMenuHero[0].offsetTop ) {
            //      showFixedMenu(true, 0);
            // } else {
            //      showFixedMenu(false, 0);
            // }
            // if(height >= $btnMenuHero[1].offsetTop ) {
            //     showFixedMenu(true, 1);
            // } else {
            //     showFixedMenu(false, 1);
            // }
            // if(height >= $btnMenuHero[2].offsetTop ) {
            //     showFixedMenu(true, 2);
            // } else {
            //     showFixedMenu(false, 2);
            // }

        });

        3
        4
        5
        6
        7
        8
        9
        10
        11

        $('.flowing-scroll').on( 'click', function(){
            var el = $(this);
            var dest = el.attr('href'); // получаем направление
            if(dest !== undefined && dest !== '') { // проверяем существование
                $('html').animate({
                        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
                    }, 500 // скорость прокрутки
                );
            }
            return false;
        });
    }
});
