import $ from 'jquery';

$('nav a').click(function() {
  let link = $(this).attr('href');

  $('nav a').removeClass('active');
  $(this).addClass('active');

  let current_li = $('nav a.active').parent('li').index();

  let coordinates = $(link).offset().top - 120;
  $('html, body').animate({
          scrollTop:  coordinates
        }, 1000);
  return false;
});
