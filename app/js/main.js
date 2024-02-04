$(document).ready(function () {

    // Adding swiper classes to Hero section - small screens
    let teamMember = $(".section-hero--team");
    let teamMembersList = $(".section-hero--team-members-list");
    let teamMemberCard = $(".section-hero--team-member");

    function manageSwiperClasses () {
        if(window.innerWidth <= 768){
            teamMember.toggleClass("swiper");
        }
        else {
            teamMember.toggleClass("swiper");
        }
    }

    manageSwiperClasses();

    // Slider (Swiper) - activation
    let init = false;
    let swiper;
    function swiperActivation() {
        if (window.innerWidth <= 768) {
            if (!init) {
                init = true;
                swiper = new Swiper(".swiper", {
                    direction: "horizontal",
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 32,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        } else if (init) {
            swiper.destroy();
            init = false;
        }
    }
    swiperActivation();

}, jQuery);