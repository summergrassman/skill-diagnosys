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

    // Contact form validation
    var mainForm = $('#contactForm');

    mainForm.parsley({
        successClass: 'custom-success-message', // Custom CSS class for success state
        errorClass: 'custom-error-message',     // Custom CSS class for error state
        errorsWrapper: '<span class="help-block"></span>',  // Error message container
        errorTemplate: '<span></span>',  // Error message template

        // Customize success messages
        success: function (element) {
            // You can customize success messages here
            // For example, you can use a different class or display a success message below the input
        },

        // Customize error messages
        errors: function (parsleyField) {
            // You can customize error messages here
            // For example, you can display a custom error message below the input
        }
    });

    mainForm.on('form:validate', function () {
        // Check if the form is valid
        if (mainForm.parsley().isValid()) {
            // Enable the submit button
            mainForm.find('.input-field--submit-button').prop('disabled', false);
        } else {
            // Disable the submit button if the form is not valid
            mainForm.find('.input-field--submit-button').prop('disabled', true);
        }
    });

    mainForm.parsley({
        errorsWrapper: '<span class="help-block"></span>',
        errorTemplate: '<span></span>',
    });

    // Enable/disable the submit button based on form validity
    mainForm.on('form:validate', function () {
        var isValid = $('#contactForm').parsley().isValid();
        $('#submitButton').prop('disabled', !isValid);
    });

    // Monitor the validation status of each input field
    $('#contactForm input, #contactForm textarea').on('input', function () {
        var isValid = $(this).parsley().isValid();

        // Change the color of the input text based on validation status
        if (isValid) {
            $(this).addClass('valid-input').removeClass('invalid-input');
        } else {
            $(this).addClass('invalid-input').removeClass('valid-input');
        }
    });

}, jQuery);