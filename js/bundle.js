$(document).ready((function(){(new WOW).init(),$(".sliderblock__team").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,dots:!1,nextArrow:$(".swiper-team-button-next"),prevArrow:$(".swiper-team-button-prev"),responsive:[{breakpoint:1023,settings:{slidesToShow:3,slidesToScroll:1,centerMode:!1,variableWidth:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),new Swiper(".gallery__container",{slidesPerView:"auto",spaceBetween:8,speed:5e3,loop:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{480:{slidesPerView:"auto",spaceBetween:8},767:{slidesPerView:"auto",spaceBetween:8},1023:{slidesPerView:4,spaceBetween:22}},autoplay:{delay:0,disableOnInteraction:!1}}),$(".sliderblock__slider-review").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,dots:!1,nextArrow:$(this).find(".arrowRight"),prevArrow:$(this).find(".arrowLeft"),responsive:[{breakpoint:1023,settings:{slidesToShow:4,slidesToScroll:1,variableWidth:!0}},{breakpoint:800,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),lightbox.option({resizeDuration:10,wrapAround:!0}),$(".accordeon-titlejs").click((function(e){$(this).toggleClass("active"),$(this).next(".accordeon-contentjs").toggleClass("active")}))})),function(e){e(window).on("load",(function(){e(window).width()>767&&e(".textlimit").mCustomScrollbar({axis:"y",autoHideScrollbar:0})}))}(jQuery),$(document).ready((function(){jQuery("a.scrollTo").click((function(e){e.preventDefault();let o=jQuery(this).attr("href"),i=jQuery(o).offset().top-60;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:i},900),$(".mobilemenu").hide(),!1})),$('input[type="tel"]').mask("+7 (999) 999-99-99"),$(".js-menu").on("click",(function(){$(".mobilemenu").slideToggle()})),$(window).scroll((function(){scroll=$(window).scrollTop(),scroll>=578?$(".totop").addClass("active"):$(".totop").removeClass("active")})),$(window).width()<1024&&$(window).scroll((function(){scroll=$(window).scrollTop(),scroll>=578?$("#header").addClass("fixed"):$("#header").removeClass("fixed")}))}));
//# sourceMappingURL=bundle.js.map