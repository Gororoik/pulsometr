
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 600,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 915,
//                 settings: {
//                   dots: true,
//                   arrows: false
//                 }
//             }
//         ]
//       });
//   });


// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     nav: false,
//     controls: false
//   });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
// });

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link')
    toggleSlide('.catalog-item__back')


});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    dots:false,
    center:true,
    navText: ["<div class='carousel-button owl-prev'><img src='icons/arrows/left.png'></div>",
    "<div class='carousel-button owl-next'><img src='icons/arrows/right.png'></div>"],
    responsiveClass:true,
    // responsive:{
    //     0:{
    //         nav:true,
    //     },
    //     800:{
    //         nav:false,
    //     },
    //     1000:{
    //         nav:true,
    //         loop:true
    //     }
    // }
})