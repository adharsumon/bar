$(function () {

  $(window).scroll(function () {
    var scrollAmount = $(window).scrollTop();

    if (scrollAmount > 300) {
      $(".header-part").addClass("sticky");
    } 
    else {
      $(".header-part").removeClass("sticky");
    }
  });

  // BANNER SLIDER JS HERE
  $('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

// PRICING SLIDER JS HERE

$('.pricing-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: ".right-btn",
  prevArrow: ".left-btn",
  dots: false,
  autoplay: false,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 577,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// TESTIMONIAL SLIDER JS HERE
$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false
});



});