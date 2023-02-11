
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
});

$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:100,
    nav:true,
    items:1,
    dots:false,
    center:true,
    navText: ["<div class='carousel-button owl-prev'><img src='icons/arrows/left.png'></div>",
    "<div class='carousel-button owl-next'><img src='icons/arrows/right.png'></div>"],
    responsiveClass:true,
    responsive:{
        0:{
            nav:true,
        },
        800:{
            nav:false,
        },
        1000:{
            nav:true,
            loop:true
        }
    }
})