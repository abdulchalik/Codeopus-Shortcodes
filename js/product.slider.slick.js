jQuery(document).ready(function($){
	
	"use strict";
	
	$('.cdo-product-slider-slick').slick({
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

	
});

