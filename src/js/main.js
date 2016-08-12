$(document).ready(function(){
    $(window).scroll(function(){
        $(".Hero").css("opacity", 1 - $(window).scrollTop() / $('.Hero').height());

        if($(window).scrollTop() > ($(".Hero").height())/2) {
          $('.Brand').addClass('on-scroll');
        } else {
          $('.Brand').removeClass('on-scroll');
        }
    });
});