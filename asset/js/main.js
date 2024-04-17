$(document).ready(function() {
    $(".promotions-carousel").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 639,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  