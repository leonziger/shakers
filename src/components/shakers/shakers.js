import $ from 'jquery';

$('.shakers-list').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 1365,
      settings: {
        centerMode: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 2
      }
    }
  ]
});
