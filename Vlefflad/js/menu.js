$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $(".header_menu_bg").css({
    opacity: function() {
      return 1 - (300 - scrollTop) / 300;
    }
  });
});