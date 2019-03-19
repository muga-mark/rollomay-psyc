// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //aboutme
    $("#meaning1,#meaning2,#meaning3,#meaning4,#meaning5,#meaning6,meaning7,#meaning8,#meaning9,#meaning10,#meaning11,#meaning12,#meaning13,#meaning14,#meaning15").animatedModal({modalTarget: 'definition',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});

    //animatedModal
    $("#work1").animatedModal({modalTarget: 'history1',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work2").animatedModal({modalTarget: 'history2',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work3").animatedModal({modalTarget: 'history3',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work4").animatedModal({modalTarget: 'history4',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work5").animatedModal({modalTarget: 'history5',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work6").animatedModal({modalTarget: 'history6',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work7").animatedModal({modalTarget: 'history7',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work8").animatedModal({modalTarget: 'history8',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work9").animatedModal({modalTarget: 'history9',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work10").animatedModal({modalTarget: 'history10',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work11").animatedModal({modalTarget: 'history11',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work12").animatedModal({modalTarget: 'history12',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work13").animatedModal({modalTarget: 'history13',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work14").animatedModal({modalTarget: 'history14',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work15").animatedModal({modalTarget: 'history15',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work16").animatedModal({modalTarget: 'history16',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work17").animatedModal({modalTarget: 'history17',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work18").animatedModal({modalTarget: 'history18',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#work19").animatedModal({modalTarget: 'history19',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    
    //groups
    $("#group1").animatedModal({modalTarget: 'more1',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#group2").animatedModal({modalTarget: 'more2',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});
    $("#group3").animatedModal({modalTarget: 'more3',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});

    //Check-in
    // $("#check-in1").animatedModal({modalTarget: 'more4',animatedIn: 'lightSpeedIn', animatedOut: 'bounceOutDown'});

    // Contact Form 	        

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});



//Friends
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });