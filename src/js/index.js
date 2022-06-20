$(document).ready(function () {
  new WOW().init();

  const swiper = new Swiper('.swiper-team', {
    // Optional parameters
    loop: false,
    slidesPerView: 4,
    spaceBetween: 22,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      420: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
  /* $('.js-teamslider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    fade: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  })

  $(".sliderarrow__right").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickNext");
  });
  $(".sliderarrow__left").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickPrev");
  }); */

});

$(document).ready(function () {

  jQuery("a.scrollTo").click(function (event) {
    event.preventDefault()
    let elementClick = jQuery(this).attr("href");
    let destination = jQuery(elementClick).offset().top - 90;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 400);
    return false;
  });

  $('input[type="tel"]').mask('+7 (999) 999-99-99')




  $('.js-menubtn-toggle').on('click', function () {
    $('.mainmenu').slideToggle()
  })

  $('.footermenu__title').on('click', function () {
    $(this).toggleClass('active')
    $(this).closest('.footermenu').find('.footermenu__list').slideToggle()
  })


  /* открытие и закрытие модальных окон из js  */
  $('.js-modalcall--success').on('click', function () {
    $('#modal-callback').modal('hide')
    $('#modal-success').modal('show')
  })
  /*  */

  $(window).scroll(function () {
    scroll = $(window).scrollTop();

    if (scroll >= 578) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');
  });


  


})
