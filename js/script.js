$('.offer-list').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    });

  var slider = $(".offer-list");
    $(".sl-count-total").text(slider.slick("getSlick").slideCount);
    slider.on("afterChange", function(_event, _slick, currentSlide) {
      $(".sl-count-current").text(currentSlide +1);
    });