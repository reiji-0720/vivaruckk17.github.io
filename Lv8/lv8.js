$(window).on('load scroll', function (){

    var box = $('.nicky');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });

    var box = $('.steve');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });

    var box = $('.axwell');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
  
    var box = $('.yellow');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });

    var box = $('.snake');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 300 ){
        $(this).addClass(animated);
      }
    });
  });