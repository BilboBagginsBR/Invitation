$(document).ready(function () {

  $('.about__toggle').click(function (event) {
      event.preventDefault();

      $('.about-content__box').hide();

      let href = $(this).attr('href');

      $(href).fadeIn();

  });

  let windowHieght = $(window).height();

  $(window).scroll(function () {
     if ($(this).scrollTop() > windowHieght) {
         $('#scrollToTop').fadeIn();
     } else {
         $('#scrollToTop').fadeOut();
     }
  });


    $('#scrollToTop').click(function (event) {

        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800)
    });





});