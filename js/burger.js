$('.burger').click(function(event){
    $('.burger,.menu-item').toggleClass('active');
    $('body').toggleClass ('lock');
})