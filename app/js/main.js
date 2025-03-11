$(function(){
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
});