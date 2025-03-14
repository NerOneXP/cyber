$(function () {



  function initSliders() {
    var windowWidth = $(window).width();


    if (windowWidth >= 1200) {
      if ($('.category-slider__page').hasClass('slick-initialized')) {
        $('.category-slider__page').slick('unslick');
      }

      $('.category-slider').removeClass('category-slider__paged');

      if (!$('.category-slider').hasClass('slick-initialized')) {
        $('.category-slider').slick({
          infinite: true,
          arrows: true,
          dots: false,
          slidesToShow: 6,
          slidesToScroll: 1,
          prevArrow:
            '<button type="button" class="slick-prev"><img src="img/icon/arrow.svg" alt=""></button>',
          nextArrow:
            '<button type="button" class="slick-next"><img src="img/icon/arrow.svg" alt=""></button>',
          variableWidth: true,
        });
      }
      $('.category-slider').not(':first').hide();
    } else {
      if ($('.category-slider').hasClass('slick-initialized')) {
        $('.category-slider').slick('unslick');
      }

      $('.category-slider').addClass('category-slider__paged');

      if (!$('.category-slider__page').hasClass('slick-initialized')) {
        $('.category-slider__page').slick({
          infinite: true,
          arrows: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          prevArrow:
            '<button type="button" class="slick-prev"><img src="img/icon/arrow.svg" alt=""></button>',
          nextArrow:
            '<button type="button" class="slick-next"><img src="img/icon/arrow.svg" alt=""></button>',
        });
      }

    }
    if (windowWidth >= 1350) {
      if ($('.popular__list').hasClass('slick-initialized')) {
        $('.popular__list').slick('unslick');
      }
    } else {
      if (!$('.popular__list').hasClass('slick-initialized')) {
        $('.popular__list').slick({
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
        });
      }
    }
  }
  // Запуск при загрузке и ресайзе
  initSliders();
  $(window).on('resize', function () {
    initSliders();
  });


  $(document).ready(function () {
    const $subnav = $('.subnav');

    $(window).on('scroll', function () {
      if ($(window).width() >= 1027) {
        if ($(this).scrollTop() > 50) {
          $subnav.addClass('.subnav--scrolled');
        } else {
          $subnav.removeClass('.subnav--scrolled');
        }
      } else {
        $subnav.removeClass('.subnav--scrolled');
      }
    });
  });
  var mixer = mixitup('.product-content' )
  
});