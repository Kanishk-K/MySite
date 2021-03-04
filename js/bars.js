var done = false;
$(window).scroll(function() {
  var hT = $('#projects').offset().top,
      hH = $('#projects').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH) && !done){
    done = true;
    $('.progress-bar-inner').each(function(){
      $(this).animate({
        width: $(this).data("value")+"%"
      },500,'swing');
    });
  }
});