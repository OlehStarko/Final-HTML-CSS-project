$(document).ready(function () {
  $('.slider-cream').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    initialSlide: 2,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slildesPerRow: 1,
    vertical: false,
  });

  $('.products-list__button--cream').click(function (event) {
    $('.slider-cream').slick('slickNext');
  });
});

$(document).ready(function () {
  $('.slider-coffee').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    initialSlide: 2,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slildesPerRow: 1,
    vertical: false,
  });

  $('.products-list__button--coffee').click(function (event) {
    $('.slider-coffee').slick('slickNext');
  });
});

$(document).ready(function () {
  $('.slider-milkshakes').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    initialSlide: 2,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slildesPerRow: 1,
    vertical: false,
  });

  $('.products-list__button--milkshakes').click(function (event) {
    $('.slider-milkshakes').slick('slickNext');
  });
});
