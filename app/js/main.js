$(document).ready(function () {

    //Use Slick Slider to gallery usage

    var teamMemberslist = $('.section-hero--team-members-list');

    function initializeSlider() {
        teamMemberslist.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    function destroySlider() {
        // If the slider is initialized, destroy it
        if (teamMemberslist.hasClass('slick-initialized')) {
            teamMemberslist.slick('unslick');
        }
    }

    // Check the screen width on page load
    if (window.innerWidth < 1024) {
        initializeSlider();
    }

    // Recheck the screen width when the window is resized
    $(window).resize(function(){
        if (window.innerWidth < 1024) {
            initializeSlider();
        } else {
            destroySlider();
        }
    });


}, jQuery);