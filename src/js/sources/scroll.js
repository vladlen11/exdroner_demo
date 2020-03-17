$(document).ready(function() {

    const $window = $(window);
    let $section = $("section");
    let $btnMenu = $(".header-item");
    let $sectionNumber = 0;
    // let $sectionHeight = $section[i].offsetTop;

    // console.log($section , 'section');
    // console.log($btnMenu.eq(1).addClass('test') , '$btnMenu');
    // console.log($btnMenu[0].addClass('sadf') , '$btnMenu');
    // console.log($section.outerHeight() , '$section[0].outerHeight()');

    //
    for (let i=0; i < $section.length; i++ ) {
        // $sectionHeight = $section[i].offsetTop;
    }
    console.log($section.eq(0).outerHeight(), ' $section.eq(0).outerHeight() ');
    console.log($section[0].offsetTop, ' $section.eq(0).offsetTop ');
    $window.scroll(function(){
        const height = $window.scrollTop();

        if(height >= $section[0].offsetTop + ( $section.eq(0).outerHeight() / 4 ) ) {
            $btnMenu.eq(0).addClass('fixed');
        } else {
            $btnMenu.eq(0).removeClass('fixed');
        }

        if(height >= $section[1].offsetTop + ( $section.eq(1).outerHeight() / 4 ) ) {
            $btnMenu.eq(1).addClass('fixed');
        } else {
            $btnMenu.eq(1).removeClass('fixed');
        }

        if(height >= $section[2].offsetTop + ( $section.eq(2).outerHeight() / 4 ) ) {
            $btnMenu.eq(2).addClass('fixed');
        } else {
            $btnMenu.eq(2).removeClass('fixed');
        }


    });



});
