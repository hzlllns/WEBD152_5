$(document).ready (function () {

    $(window).scroll (function () { // HAZEL WROTE THIS
        var pageTop = $(this).scrollTop();
            if (pageTop >= 780) {
                $('.logo').addClass('logo-feat')
            } else {
                $('.logo').removeClass('logo-feat')
            }
    });

    $("#tabs-left").tabs({ // HAZEL WROTE THIS
    	event: "mouseover",
    	active: 1
    });


  $('a[href*=#]:not([href=#])').click(function() { // SMOOTH SCROLL FROM CSS-TRICKS YO
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });    

});