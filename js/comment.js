$('.comment-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
  });

  let slider = $('.comment-list');
    $('.sl-count-total').text(slider.slick('getSlick').slideCount);
    slider.on('afterChange', function(event , slick , currentSlide) {
      $('.sl-count-current').text(currentSlide +1);
  });
  console.log='.sl-count-total'