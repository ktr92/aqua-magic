$(document).ready(function () {
              new WOW().init();
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

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.748154, 37.540236],
          zoom: 11
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: '',
          balloonContent: ''
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/mapmark.svg',
          // Размеры метки.
          iconImageSize: [47, 54],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      }),

      myPlacemarkWithContent = new ymaps.Placemark([55.832262, 37.450989], {
          hintContent: '',
          balloonContent: '',
          iconContent: ''
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/mapmark.svg',
          // Размеры метки.
          iconImageSize: [47, 54],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemark)
      .add(myPlacemarkWithContent);
});