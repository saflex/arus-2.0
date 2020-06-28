$(document).ready(function() {
    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
            $('.navbar-expand-lg').toggleClass('fxvs');
        }
    });
});


$(function() {
    $('.sp1').on('click', function(e) {
        $('.sp1').addClass('active');
        $('.step1').addClass('active');
        $('.sp2').removeClass('active');
        $('.sp3').removeClass('active');
        $('.step2').removeClass('active');
        $('.step3').removeClass('active');
        e.preventDefault();
    });
});

$(function() {
    $('.sp2').on('click', function(e) {
        $('.sp2').addClass('active');
        $('.step2').addClass('active');
        $('.sp1').removeClass('active');
        $('.sp3').removeClass('active');
        $('.step1').removeClass('active');
        $('.step3').removeClass('active');
        e.preventDefault();
    });
});


$(function() {
    $('.sp3').on('click', function(e) {
        $('.sp3').addClass('active');
        $('.step3').addClass('active');
        $('.sp1').removeClass('active');
        $('.sp2').removeClass('active');
        $('.step1').removeClass('active');
        $('.step2').removeClass('active');
        e.preventDefault();
    });
});



$(function() {
    $('#s2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section1').offset().top }, 700);
        $('.navbar-expand-lg').addClass('fx');
        e.preventDefault();
    });
});


$(function() {
    $('#s3').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section2').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('#s4').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section3').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('#s5').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section4').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('#s6').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section5').offset().top }, 700);
        e.preventDefault();
    });
});








$(function() {
    $('#sm2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section1').offset().top }, 700);
        $('.navbar-expand-lg').addClass('fx');
        e.preventDefault();
    });
});


$(function() {
    $('#sm3').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section2').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('#sm4').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section3').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('#sm5').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section4').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('#sm6').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#section5').offset().top }, 700);
        e.preventDefault();
    });
});






$(function() {
    $('.scroll1').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#5').offset().top }, 700);
        e.preventDefault();
    });
});



$(function() {
    $('.arrow-top').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('body').offset().top }, 700);
        e.preventDefault();
    });
});



$(function() {
    $('.btn1').on('click', function(e) {
        $('.img1').addClass('activeim');
        $('.f1').addClass('show-duration');
        $('.ww1').addClass('fxmod');
        $('.btn1').addClass('fxvs');
        e.preventDefault();
    });
});


$(function() {
    $('.btn2').on('click', function(e) {
        $('.img2').addClass('activeim2');
        $('.ww2').addClass('fxmod');
        $('.f2').addClass('show-duration');
        $('.btn2').addClass('fxvs2');
        e.preventDefault();
    });
});


$(function() {
    $('.btn3').on('click', function(e) {
        $('.img3').addClass('activeim');
        $('.ww3').addClass('fxmod');
        $('.f3').addClass('show-duration');
        $('.btn3').addClass('fxvs');
        e.preventDefault();
    });
});















$(function() {
    $('.black-bg').on('click', function(e) {
        $('.black-bg').addClass('show-duration2');
        e.preventDefault();
    });
});



$(function() {
    $('.btn-mob1').on('click', function(e) {
        $('.f1').addClass('show-duration');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.ww1 .txt-info').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').removeClass('show-block');
        $('.group-2').removeClass('show-block');
        $('.group-3').removeClass('show-block');
        $('.section5 h2').addClass('no-show-block');
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
    });
});


$(function() {
    $('.btn-mob2').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-1').removeClass('show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.btn-mob3').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.group-3').addClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.group-1').removeClass('show-block');
        $('.group-2').removeClass('show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.group-2-btn1').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.ww2 .txt-info').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-3').addClass('no-show-block');
        $('.f2').addClass('show-duration');
        $('.section5 h2').addClass('no-show-block');
        e.preventDefault();
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
    });
});

$(function() {
    $('.group-2-btn2').on('click', function(e) {
        $('.ww2 .txt-info').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.group-2-btn3').on('click', function(e) {
        $('.ww3 .txt-info').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        e.preventDefault();
    });
});

$(function() {
    $('.back1').on('click', function(e) {
        $('.f1').removeClass('show-duration');
        $('.ww1 .txt-info').removeClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.section5 h2').removeClass('no-show-block');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        e.preventDefault();
    });
});


$(function() {
    $('.back2').on('click', function(e) {
        $('.f2').removeClass('show-duration');
        $('.ww1 .txt-info').removeClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.section5 h2').removeClass('no-show-block');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        e.preventDefault();
    });
});

$(function() {
    $('.back3').on('click', function(e) {
        $('.f3').removeClass('show-duration');
        $('.ww1 .txt-info').removeClass('no-show-block');
        $('.ww2 .txt-info').removeClass('no-show-block');
        $('.ww3 .txt-info').removeClass('no-show-block');
        $('.ww2').removeClass('no-show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').removeClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-2').removeClass('no-show-block');
        $('.group-3').removeClass('no-show-block');
        $('.section5 h2').removeClass('no-show-block');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        e.preventDefault();
    });
});


$(function() {
    $('.navigation__link').click(function() {
        $('.button-nav').removeClass('actives');
        $('.mob-menu').removeClass('show');
        $('.logo-sn').removeClass('hides');
        $('.scroll1').removeClass('hides');
        $('.section1 p').removeClass('hides');
        $('.info-header').removeClass('show-info');
    })
});





if ($(window).width() > 1023) {

    $(document).ready(function() {

        //main nav
        $(window).on('scroll load', function() {
            updateMainNav();
        });

        function updateMainNav() {
            if ($(window).scrollTop() >= 51) {
                $('body').addClass('minimize-menus');
            } else {
                $('body').removeClass('minimize-menus');
            }
        }



    });
} else {
    // change functionality for larger screens
}






if ($(window).width() < 1024) {

    $(document).ready(function() {

        //main nav
        $(window).on('scroll load', function() {
            updateMainNav();
        });

        function updateMainNav() {
            if ($(window).scrollTop() >= 20) {
                $('body').addClass('minimize-men');
            } else {
                $('body').removeClass('minimize-men');
            }
        }



    });
} else {
    // change functionality for larger screens
}





$(function() {
    $('.group-3-btn1').on('click', function(e) {
        $('.ww1').addClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.ww3 .txt-info').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').addClass('no-show-block');
        $('.group-2').addClass('no-show-block');
        $('.f3').addClass('show-duration');
        $('html,body').stop().animate({ scrollTop: $('.section5').offset().top }, 700);
        $('.section5 h2').addClass('no-show-block');
        e.preventDefault();

    });
});

$(function() {
    $('.group-3-btn2').on('click', function(e) {
        $('.ww3 .txt-info').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        e.preventDefault();
    });
});


$(function() {
    $('.group-3-btn3').on('click', function(e) {
        $('.ww2 .txt-info').addClass('no-show-block');
        $('.group-2').removeClass('show-block');
        $('.group-2').addClass('no-show-block');
        $('.group-1').removeClass('no-show-block');
        $('.group-1').addClass('show-block');
        $('.group-3').addClass('no-show-block');
        $('.group-3').removeClass('show-block');
        $('.ww1').removeClass('no-show-block');
        $('.ww2').addClass('no-show-block');
        $('.ww3').addClass('no-show-block');
        e.preventDefault();
    });
});







$(function() {
    $('.scroll2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#4').offset().top }, 700);
        e.preventDefault();
    });
});





$(function() {
    $('.button-nav').click(function() {
        $('.button-nav').toggleClass('actives');
        $('.mob-menu').toggleClass('show');
        $('.logo-sn').toggleClass('hides');
        $('.scroll1').toggleClass('hides');
        $('.section1 p').toggleClass('hides');
        $('.info-header').toggleClass('show-info');
        $('.navbar-expand-lg').toggleClass('fxvs');

    })
});




$(function() {
    $('.bottom-footer2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('body').offset().top }, 700);
        e.preventDefault();
    });
});





ymaps.ready(init);


function init() {
    var location = ymaps.geolocation;
    var inputSearch = new ymaps.control.SearchControl({
            options: {

                // Пусть элемент управления будет
                // в виде поисковой строки.
                size: 'large',
                // Включим возможность искать
                // не только топонимы, но и организации.
                provider: 'yandex#search'

            }
        }),



        // Добавим поисковую строку на карту. 
        myMap = new ymaps.Map('map', {
            zoom: 10,
            center: [55.76, 27.64],
            controls: [inputSearch, 'zoomControl']
        });



    // Получение местоположения и автоматическое отображение его на карте.
    location.get({
            mapStateAutoApply: true
        })
        .then(
            function(result) {
                // Получение местоположения пользователя.
                var userAddress = result.geoObjects.get(0).properties.get('text');
                var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
                // Пропишем полученный адрес в балуне.
                result.geoObjects.get(0).properties.set({
                    balloonContentBody: 'Адрес: ' + userAddress +
                        '<br/>Координаты:' + userCoodinates
                });
                myMap.geoObjects.add(result.geoObjects)
            },
            function(err) {
                console.log('Ошибка: ' + err)
            }
        );



    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },

        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',

        }),


        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

        }, {
            // Опции.
            // Необходимо указать данный тип проекта.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });


    myPlacemark2 = new ymaps.Placemark([55.76, 37.78], {
        // Свойства.

    }, {
        // Опции.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/maps.svg',
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-27, -2]
    });




    myPlacemark3 = new ymaps.Placemark([55.9198471, 37.7654985], {
        // Свойства.

    }, {
        // Опции.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/maps.svg',
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-27, -2]
    });




    myMap.behaviors.disable('scrollZoom');



    if ($(window).width() < 768) {

        myMap.behaviors.disable('drag');


    } else {
        // change functionality for larger screens
    }

    myMap.geoObjects.add(myPlacemark)
        .add(myPlacemark2).add(myPlacemark3)
}






ymaps.ready(init2);

function init2() {
    var myMap2 = new ymaps.Map("map2", {
            center: [47.200458, 8.786512],
            zoom: 12,
            controls: ['zoomControl']
        }),


        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [47.200458, 8.786512]
            },

        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',

        }),


        myPlacemark2 = new ymaps.Placemark(myMap2.getCenter(), {
            balloonContent: '143080, Московская область, Одинцовский район, р.п. Большие Вяземы, Можайское шоссе, дом 5'
        }, {
            // Опции.
            // Необходимо указать данный тип проекта.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps.svg',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -2]
        });

    myMap2.behaviors.disable('scrollZoom');

    if ($(window).width() < 768) {

        myMap2.behaviors.disable('drag');


    } else {
        // change functionality for larger screens
    }


    myMap2.geoObjects.add(myPlacemark2)
}


    if($(window).width() > 897) {
   $('#fullpage').fullpage({
       anchors: ['s1', 's2', 's3', 's4', 's5',  's6'],
        menu: '#menu',
        lazyLoad: true,
    });
} else { 
}


$(document).ready(function() {
      $('.s-items').slick({
      dots: true,
              infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
});
 });