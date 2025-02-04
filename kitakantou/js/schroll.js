$(function(){
  $('.box p').addClass('move');
  $(window).scroll(function(){
    $(".box").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass('move');
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
});