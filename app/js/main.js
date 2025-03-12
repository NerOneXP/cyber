$(function () {

  $('.category-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 6,
    prevArrow:'<button type="button" class="slick-prev"><img src="img/icon/arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icon/arrow.svg" alt=""></button>',
    variableWidth: true
  });

  $(document).ready(function () {
    const $subnav = $('.subnav');

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $subnav.addClass('.subnav--scrolled');
      } else {
        $subnav.removeClass('.subnav--scrolled');
      }
    });
  });
  var mixer = mixitup('.product-content');   
});