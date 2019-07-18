$(document).ready(function(){
    // Slider
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand'
    });
    // End Slider

    // To go from mobile to desktop/tablet, need to display original navbar menu
    $(window).on('resize', function(){
        var screenWidth = $(window).width();
        if (screenWidth > 600) {
            $('.social-nav').css('display', 'flex');
            $('.horizontal-social-nav').css('display', 'none');
        }
        else {
            $('.social-nav').css('display', 'none');
            $('.horizontal-social-nav').css('display', 'flex');
        }
    });

    // JQuery for the dropdown menu to display on click 
    $('.navbar-mobile-menu').on('click', function() {
        // Shows navbar if not already showing it
        $('.navbar-link-container').slideToggle();
    }); 

    $(window).on('resize', function(){
        var screenWidth = $(window).width();
        if (screenWidth > 600) {
          $('.navbar-link-container').css('display', 'inherit');
        }
        else {
          $('.navbar-link-container').css('display', 'none');
        }
    });

    $('.social-nav').hide();

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var screenWidth = $(window).width();
        if (screenWidth > 600) {
            if (scroll < 420) {
                $('.social-nav').hide();
            }
            else {
                $('.social-nav').show(); 
            }
        }
    });
});