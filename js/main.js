$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".project__detailsSwiper", {
        pagination: {
            el: ".project__details-pagination",
            dynamicBullets: true,
        },
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".project__details-button-next",
            prevEl: ".project__details-button-prev",
        },
    });

    var swiper = new Swiper(".news_openSwiper", {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".news_open-button-next",
            prevEl: ".news_open-button-prev",
        },
        breakpoints: {
            0: { /* when window >=0px - webflow mobile landscape/portriat */
                slidesPerView: 1,
            },
            480: { /* when window >=0px - webflow mobile landscape/portriat */
                slidesPerView: 1,
            },
            767: { /* when window >= 767px - webflow tablet */
                slidesPerView: 1,
            },
            992: { /* when window >= 988px - webflow desktop */
                slidesPerView: 1,
            },
            1200: { /* when window >= 988px - webflow desktop */
                slidesPerView: 2,
            }
        },
    });


    var swiper = new Swiper(".newsSwiper", {
        navigation: {
            nextEl: ".news-swiper-button-next",
            prevEl: ".news-swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        breakpoints: {
            0: { /* when window >=0px - webflow mobile landscape/portriat */
                slidesPerView: 1,
            },
            480: { /* when window >=0px - webflow mobile landscape/portriat */
                slidesPerView: 1,
            },
            800: { /* when window >= 767px - webflow tablet */
                slidesPerView: 1,
            },
            992: { /* when window >= 988px - webflow desktop */
                slidesPerView: 1,
            },
            1200: { /* when window >= 988px - webflow desktop */
                slidesPerView: 2,
            },
            1400: { /* when window >= 988px - webflow desktop */
                slidesPerView: 3,
            }
        },
    });
    var swiper = new Swiper(".projectSwiper", {
        spaceBetween: 10,
        loop: true,
        slidesPerView: 2,


        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev",
        },
    });

});

$(document).ready(function () {

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $(".menu__mobile__close").click(function () {
        $(".menu__mobile").css({ "transform": "translateX(120vw)" })

    })
    $(".burger__menu, .burger__fix").click(function () {
        $(".menu__mobile").css({ "transform": "translateX(0vw)" })

    })

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    $('#file').on('change', function (e) {
        if (e.target.files.length == 1) {
            console.log($("#file").val())
            $('.label__file').html(e.target.files[0].name);
            $('.label__file').css({ "color": "var(--dark)" });
            $('.label__file').next("span").html(`
            <svg id="clear" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <rect x="7.13611" y="20.5714" width="1" height="19" rx="0.5" transform="rotate(-134.94 7.13611 20.5714)" fill="#707274"/>
            <rect x="20.5712" y="19.8644" width="0.999998" height="19" rx="0.499999" transform="rotate(135 20.5712 19.8644)" fill="#707274"/>
          </svg>`);
        } else {
            $('.label__file').html(`Прикрепить файл`);
        }
        $("#clear").click(function () {
            $("#file").val("");
            $('.label__file').html(`Прикрепить файл`);
            $("#clear").remove();
            $('.label__file').css({ "color": "var(--grey-02)" });

        });
    });


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const element = document.getElementById('phone');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(element, maskOptions);





    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++









    $(".pin").click(function () {
        if ($(".card__project").css("opacity") == "1") {
            $(".card__project").css({ "opacity": "0", "z-index": "-1" })
        }

        var sizeWith = window.innerWidth;

        var leftPin = $(this).offset().left;
        // получаем координату top
        var top = $(this).offset().top;
        // получаем координату left
        var left = $(this).offset().left;



        setTimeout(function () {

            if (sizeWith > 950) {
                if (leftPin > 0 && leftPin < sizeWith * 0.33) {

                    $(".card__project").css({ "opacity": "1", "z-index": "5", "right": "0" })
                    // изменяем координаты элемента, а имеено увеличиваем их на 50px
                    $(".card__project").offset({ top: top + 60, left: 33 });



                } else if (leftPin > sizeWith * 0.33 && leftPin < sizeWith * 0.66) {

                    $(".card__project").css({ "opacity": "1", "z-index": "5", "right": "0" })
                    // изменяем координаты элемента, а имеено увеличиваем их на 50px
                    $(".card__project").offset({ top: top + 60, left: left + 33 });


                } else {

                    $(".card__project").css({ "opacity": "1", "z-index": "5", "left": "auto", "right": "0" })
                    // изменяем координаты элемента, а имеено увеличиваем их на 50px
                    $(".card__project").offset({ top: top + 60 });


                }

            } else {
                $(".card__project").css({ "opacity": "1", "z-index": "5", "left": "50%", "transform": "translate(-50%, 0px)" })
                // изменяем координаты элемента, а имеено увеличиваем их на 50px
                $(".card__project").offset({ top: top + 30, });
            }
        }, 300);

    })







    // закрываем окна


    $(document).click(function (e) {

        var div = $(".card__project");

        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0
            && div.css("opacity") == "1"
            && !$(".pin").is(e.target)
        ) { // и не по его дочерним элементам
            div.css({ "opacity": "0", "z-index": "-1" })
        }

    })

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




});
