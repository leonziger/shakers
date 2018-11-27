import $ from 'jquery';

let top_offset = 0;
if ($('html').width() <= 1020 ) {
  top_offset = 70;
} else {
  top_offset = 97; }
let coordinats = $('.main-header').offset().top + top_offset;

$(window).scroll(function() {
  let windowScrollTop = $(window).scrollTop();
  if (windowScrollTop >= coordinats) {
    $('.main-header').addClass('sticky');
  }
  else {
    $('.main-header').removeClass('sticky');
  }
});
