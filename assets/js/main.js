
//Adds the 'bg-nav-colored' class to the navbar on scroll, changing its background color
$(function () {
    $(document).scroll(function(){
      var nav = $("#navbar");
      nav.toggleClass("bg-nav-colored", $(this).scrollTop() > nav.height() );
    })
  });