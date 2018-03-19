$(document).ready(function () {
    $('#myCarousel').carousel({
        interval:4000
    });

    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function () {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
             //   $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
<<<<<<< HEAD
});

$(document).ready(function(){
    $('#php').LineProgressbar({
          percentage: 99,
          fillBackgroundColor: '#1abc9c',
          height: '12px'
    });
    $('#php1').LineProgressbar({
          percentage: 92,
          fillBackgroundColor: 'red',
          height: '12px'
    });
    $('#php2').LineProgressbar({
          percentage: 95,
          fillBackgroundColor: 'green',
          height: '12px'
    });
    $('#php3').LineProgressbar({
          percentage: 90,
          fillBackgroundColor: 'blue',
          height: '12px'
    });
=======
>>>>>>> beffc04b8cd7deb4c7f1b89d40ccf133c712aecb
});