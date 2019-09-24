
$(function () {

  var sayac = 0;
  var ulwidth = $("header .container .menu ul");
  // $(ulwidth).css("width", "0");
  var odd = 1;
  $("header .menu .menuicon").on('click', function () {
    if (odd == 1) {
      $(ulwidth).css("width", "0");
      odd = 0;
    }
    if (!sayac) {
      $(ulwidth).slideDown((100), function () {
        $(ulwidth).animate({ width: '100%' }, 250);
      });
      sayac = 1;
    } else {
      $(ulwidth).animate({ width: '0' }, 250);
      $(ulwidth).slideUp((100));
      sayac = 0;
    }

    $("header .container .menu").css({
      "flex": "2",
      "text-align": "right"
    });


  });
  /*******************************TEAM************************ */
  var swiperslide = $('.team .team-body .container .swiper-slide .team-image');
  var overlay = $(swiperslide).find(".overlay");

  $(overlay).hover(
    function () {
      $(this).css({
        "opacity": ".95",
        "transition": "all 500ms ease"
      });

    },
    function () {
      $(this).css("opacity", "0");
    }
  );
  /**********************************WORKS************************ */
  var col4 = $('.works-body .col4');
  var efect = $(col4).find(".panel-overlay");

  $(efect).hover(
    function () {
      $(this).css({
        "opacity": ".9",
        "transition": "all 500ms ease"
      });

    },
    function () {
      $(this).css("opacity", "0");
    }
  );


  /*****************************TABS***************** */
  $(".tabs li").on('click', function () {

    var parent = $(this).parents('.works-body');
    parent.find(".tabs li.active").removeClass('active');
    $(this).addClass('active');

    var panelToShow = $(this).attr('rel');
    parent.find('.panel.active').stop().fadeOut(200, showNextPanel);

    //show next panel
    function showNextPanel() {
      $(this).removeClass('active');

      $('#' + panelToShow).stop().fadeIn(200, function () {

        $(this).addClass('active');
      });
    }
  });

  /***********************SWİPER*****************/
  var swiper = new Swiper('.slider .swiper-container', {
    direction: 'vertical',
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true
    },
  });

  var swiper = new Swiper('.features-body .swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      direction: 'horizontal',
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  var swiper = new Swiper('.team-body .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      960: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      720: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  /**********************footer-address*********************/
  var genis = screen.width;
  var text = $(".discuss .container .discuss-text").html();

  var item = $(".footer .container .item:eq(2)");
  if (genis <= "720") {
    $(item).html(text);

    $(".container .discuss-text .adres").css({
      "color": "#fff",
      "font-size": "13px",
      "font-weight": "400",
      "line-height": "1.7em",
      "width": "70%"

    });


  }


});


