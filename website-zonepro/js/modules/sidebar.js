const Sidebar={init:function(){let e=$(".sidebar"),s=$(".header"),o=s.outerHeight();$(window).scroll(function(){s.offset().top>o?e.addClass("sidebar--scrolled"):e.removeClass("sidebar--scrolled")})}};