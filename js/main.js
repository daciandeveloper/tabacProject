//use strict
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  $('.top-section__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  });

  $('.mostsales__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,     
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
   
  });


  $(".products-star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });


  $(function(){  
    $(".shop__filter-price-input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.shop__filter-price-from').text(data.from);
        $('.shop__filter-price-to').text(data.to);
      },
      onChange: function (data) {
       $('.shop__filter-price-from').text(data.from);
       $('.shop__filter-price-to').text(data.to);
     },
    })
  })



  $(function(){  
    $(".shop__filter-width-input").ionRangeSlider({
      type: "double",
      prefix: "$",
      onStart: function (data) {
        $('.shop__filter-width-from').text(data.from);
        $('.shop__filter-width-to').text(data.to);
      },
      onChange: function (data) {
       $('.shop__filter-width-from').text(data.from);
       $('.shop__filter-width-to').text(data.to);
     },
    })
  })




  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1, 
    vertical: true,
    draggable: false,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1100,
        settings: {
        vertical: false,
        }
      }
    ]
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false, 
    arrows: false,
  });

  $('.article-tabs__top-item').on('click', function(e){
     e.preventDefault();
     $('.article-tabs__top-item').removeClass('article-tabs__top-item--active');
     $(this).addClass('article-tabs__top-item--active');
     $('.article-tabs__content-item').removeClass('article-tabs__content-item--active');
     $($(this).attr('href')).addClass('article-tabs__content-item--active');
  });



  $(function() {
    $('.select-style, .article-item__num').styler();
  });
