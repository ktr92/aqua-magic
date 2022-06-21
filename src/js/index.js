$(document).ready(function () {
  new WOW().init();

  $('.sliderblock__team').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    nextArrow: $(".swiper-team-button-next"),
    prevArrow: $(".swiper-team-button-prev"),
  });


  var swiper = new Swiper('.gallery__container', {  
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 5000,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    /* autoplay: {
      delay: 0,
      disableOnInteraction: false 
    } */
  });

  $('.sliderblock__slider-review').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    nextArrow: $(this).find(".arrowRight"),
    prevArrow: $(this).find(".arrowLeft"),
  });


  $('.accordeon-titlejs').click(function (event) {
	/* 	$(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active');
		$(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active'); */
		$(this).toggleClass('active');
		/* $([document.documentElement, document.body]).animate({
			scrollTop: $(this).offset().top
		}, 400);*/
		$(this).next('.accordeon-contentjs').slideToggle();
	});


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
