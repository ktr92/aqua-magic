/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};$(document).ready((function(){(new WOW).init()})),$(document).ready((function(){jQuery("a.scrollTo").click((function(e){e.preventDefault();let o=jQuery(this).attr("href"),t=jQuery(o).offset().top-90;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},400),!1})),$('input[type="tel"]').mask("+7 (999) 999-99-99"),$(".js-menubtn-toggle").on("click",(function(){$(".mainmenu").slideToggle()})),$(".footermenu__title").on("click",(function(){$(this).toggleClass("active"),$(this).closest(".footermenu").find(".footermenu__list").slideToggle()})),$(".js-modalcall--success").on("click",(function(){$("#modal-callback").modal("hide"),$("#modal-success").modal("show")})),$(window).scroll((function(){scroll=$(window).scrollTop(),scroll>=578?$("#header").addClass("fixed"):$("#header").removeClass("fixed")}))})),ymaps.ready((function(){var e=new ymaps.Map("map",{center:[55.748154,37.540236],zoom:11},{searchControlProvider:"yandex#search"}),o=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),t=new ymaps.Placemark(e.getCenter(),{hintContent:"",balloonContent:""},{iconLayout:"default#image",iconImageHref:"img/mapmark.svg",iconImageSize:[47,54],iconImageOffset:[-5,-38]}),n=new ymaps.Placemark([55.832262,37.450989],{hintContent:"",balloonContent:"",iconContent:""},{iconLayout:"default#imageWithContent",iconImageHref:"img/mapmark.svg",iconImageSize:[47,54],iconImageOffset:[-24,-24],iconContentOffset:[15,15],iconContentLayout:o});e.geoObjects.add(t).add(n)})),(()=>{"use strict";e.r(o)})()})();
//# sourceMappingURL=bundle.js.map