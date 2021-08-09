$(window).scroll(function () {
    const wScroll = $(this).scrollTop();
    const wScrollDown = $(this).height() - $(this).scrollTop();

    console.log(wScroll);

    if ($(this).width() > 1010) {
        // Parallax for Contact Form
        if (wScroll > 3900) {
            $('.form-contact-img').css({
                'backgroundPosition': '75% ' + wScroll * 0.105 + '%'
            });
        }

        showAnimationLoop('.card-price', -400, 500)

    } else if ($(this).width() < 700) {
        // Parallax for Contact Form
        if (wScroll > 3900) {
            $('.form-contact-img').css({
                'backgroundPosition': '75% ' + (wScroll * 0.015 - 90) + '%'
            });
        }
    } else {
        if (wScroll > 3900) {
            $('.form-contact-img').css({
                'backgroundPosition': '75% ' + (wScroll * 0.015 - 70) + '%'
            });
        }

    }

    if ($(this).width() > 540) {
        // Parallax for Jumbotron Header
        $('.row-head h1').css({
            'transform': 'translateY(' + wScroll / 5 + '%)'
        });
        $('.row-head h4').css({
            'transform': 'translateY(' + wScroll / 3 + '%)'
        });
        $('.buttons').css({
            'transform': 'translateY(' + wScroll / 5 + '%)'
        });
        if (wScroll > 2500 && wScroll < 3450) {
            $('.brands').css({
                'transform': 'translateY(' + (wScroll * 0.04 - 100) + '%)',
                'opacity': 1,
            });
        } else if (wScroll > 1800 && wScroll < 2500) {
            // Parallax for Brands
            $('.brands').css({
                'transform': 'translateY(' + (wScroll - 2000) / 4 + '%)',
                'opacity': 1,
            });
        } else {
            $('.brands').css('opacity', 0);
        }

        if (wScroll > $('.row-head').offset().top + 110) {
            $('.row-head h1').css({
                'opacity': 0,
                'transition': 'opacity 0.7s'
            })
            $('.row-head h4').css({
                'opacity': 0,
                'transition': 'opacity 0.7s'
            })
            $('.buttons').css({
                'opacity': 0,
                'transition': 'opacity 0.7s'
            })
        } else if (wScroll > $('.row-head').offset().top + 50) {
            $('.row-head h1').css({
                'opacity': (wScrollDown / 1000) - (wScroll / 1000),
                'transition': 'opacity 0.7s'
            })
        } else {
            $('.row-head h1').css({
                'opacity': 1
            })
            $('.row-head h4').css({
                'opacity': 1
            })
            $('.buttons').css({
                'opacity': 1
            })
        }
    } else {
        $('.row-head h1').css({
            'transform': 'translateY(' + wScroll / 5 + '%)'
        });
        $('.row-head h4').css({
            'transform': 'translateY(' + wScroll / 7 + '%)'
        });
        $('.buttons').css({
            'transform': 'translateY(' + wScroll / 9 + '%)'
        });

        if (wScroll > $('.row-head').offset().top + 110) {
            $('.row-head h1').css({
                'opacity': 0,
                'transition': 'opacity 0.7s'
            })
            $('.row-head h4').css({
                'opacity': 0,
                'transition': 'opacity 0.7s'
            })
            $('.buttons').css({
                'opacity': 0,
                'transition': 'opacity 0.7s'
            })
        } else if (wScroll > $('.row-head').offset().top + 50) {
            $('.row-head h1').css({
                'opacity': (wScrollDown / 1000) - (wScroll / 1000),
                'transition': 'opacity 0.7s'
            })
        } else {
            $('.row-head h1').css({
                'opacity': 1
            })
            $('.row-head h4').css({
                'opacity': 1
            })
            $('.buttons').css({
                'opacity': 1
            })
        }

        if (wScroll > 3900 && wScroll < 4750) {
            // Parallax for Brands
            $('.brands').css({
                'transform': 'translateY(' + (wScroll * 0.03 - 120) + '%)',
                'opacity': 1,
            });
        } else {
            $('.brands').css('opacity', 0);
        }
    }


    if ($(this).width() > 900) {
        showAnimation('.col-product', 20, 500)
        showAnimation('.col-desc h2', 20, 400)
        showAnimation('.col-desc p', 60, 395)
        showAnimation('.indv-card', 20, 450)
        showAnimation('.col-title h2', 10, 400)
        showAnimation('.col-title p', 60, 395)
        showAnimation('.contact-desc h2', 10, 400)
        showAnimation('.contact-desc p', 60, 395)
    } else {
        showAnimationLoop('.card-price', -1500, 1700)
        showAnimationLoop('.col-product', -500, 500)
        showAnimationLoop('.col-desc h2', 20, 400)
        showAnimationLoop('.col-desc p', 60, 395)
        showAnimationLoop('.indv-card', -1000, 550)
        showAnimationLoop('.col-title h2', 10, 600)
        showAnimationLoop('.col-title p', 60, 595)
        showAnimationLoop('.contact-desc h2', 0, 600)
        showAnimationLoop('.contact-desc p', 40, 695)

    }


    function showAnimation(yourclass, firstHeight, scndHeight) {
        if ((wScroll > $('' + yourclass + '').offset().top - firstHeight)) {
            $('' + yourclass + '').removeClass('showUp').addClass('UnshowUp')
        } else if (wScroll > $('' + yourclass + '').offset().top - scndHeight) {
            $('' + yourclass + '').addClass('showUp').removeClass('UnshowUp')
        } else {
            $('' + yourclass + '').removeClass('showUp')
        }
    }
    function showAnimationLoop(yourclass, firstHeight, scndHeight) {
        if ((wScroll > $('' + yourclass + '').offset().top - firstHeight)) {
            $('' + yourclass + '').removeClass('showUp').addClass('UnshowUp')
        } else if (wScroll > $('' + yourclass + '').offset().top - scndHeight) {
            $('' + yourclass + '').each(function (i) {
                setTimeout(function () {
                    $('' + yourclass + '').eq(i).addClass('showUp').removeClass('UnshowUp')
                }, 500 * i + 1)
            })
        } else {
            $('' + yourclass + '').removeClass('showUp')
        }
    }
});

$('.mobileNav').hide();
$('#toggleNav').click(function () {
    $('.mobileNav').slideToggle();
    if ($('.mobileNav a').click(function (e) {
        // e.preventDefault();
        $('.mobileNav').slideUp();

    })) {

    }

});

const cardHovering = (yourclass, newClass) => {
    $('' + yourclass + '').mouseenter(function () {
        $(this).addClass('' + newClass + '');
    });
    $('' + yourclass + '').mouseleave(function () {
        $(this).removeClass('' + newClass + '');
    });
}

const InputInteraction = (firstClass, scndClass) => {
    $('' + scndClass + '').change(() => {
        let inputName = $('' + scndClass + '')
        console.log('1', inputName.val());
    })
    $('' + firstClass + '').click(function (e) {
        let inputName = $('' + scndClass + '')
        if (inputName.val() != '') {
            e.preventDefault();
            console.log('2', inputName.val());
            $('.snackbar p').text('Terimakasih ' + inputName.val() + ' :)');
            $('.snackbar').css({
                'transform': 'translate(-50%, 0)',
                'background': '#50CB93'
            });
            setTimeout(() => {
                $('.snackbar').css({
                    'transform': 'translate(-50%, 120px)',
                    'background': '#50CB93'
                });
            }, 2000);
        } else {
            e.preventDefault();
            $('.snackbar p').text('Masukin Email dulu dong kawan :)');
            $('.snackbar').css({
                'transform': 'translate(-50%, 0)',
                'background': '#FF4848'
            });
            setTimeout(() => {
                $('.snackbar').css({
                    'transform': 'translate(-50%, 100px)',
                    'background': '#FF4848'
                });
            }, 2000);
        }
        inputName.val('')
        console.log('3', inputName.val());
    });
}

$('.card-price').mouseenter(function () {
    $('.nominal-div h3').css('color', '#23A6F0');
    $('.nominal-div h5').css('color', '#8EC2F2');
});


const App = () => {
    cardHovering('.card', 'mouseenter');
    cardHovering('.card-price', 'cardHover');
    InputInteraction('#subsButton', '#subsEmail')
}

App()