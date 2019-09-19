$(function() {
    $('.main-logo').fadeIn(2000);

    $('.bottom-logo img').fadeIn(2000);

    $('.lesson-hover').hover(
        function() {
          $(this).find('.text-contents').addClass('text-active'); 
        },
        function() {
          $(this).find('.text-contents').removeClass('text-active');
        }
    );
});