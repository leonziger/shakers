import $ from 'jquery';

$(window).scroll(function (){
  if ($(this).scrollTop() > 0){
    $('.main-header').addClass('sticky');
  } else{
    $('.main-header').removeClass('sticky');
  }
});
