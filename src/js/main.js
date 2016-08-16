$(document).ready(function(){


    // Brand + Hero animation
    $(window).scroll(function(){
        $(".Hero").css("opacity", 1 - $(window).scrollTop() / $('.Hero').height());

        if($(window).scrollTop() > ($(".Hero").height())/2) {
          $('.Brand').addClass('on-scroll');
        } else {
          $('.Brand').removeClass('on-scroll');
        }
    });



    //add some smooth for scroll
    $('nav ul li a').on('click', function() {
        $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
        return false;
    });

});