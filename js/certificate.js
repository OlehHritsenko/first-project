$('.certificate-list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,   
  });

  let slider = $('.certificate-list');
    $('.sl-count-total').text(slider.slick('getSlick').slideCount);
    slider.on('afterChange' , function (_event, _slick, currentSlide) {
      $('.sl-count-current').text(currentSlide + 1);
    });