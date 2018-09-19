$(function () {
    $(window).bind("scroll",function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 40) {

            $('.sticky').css({
                'position': 'fixed',
                'top': 0,
                'z-index':'999'
            });

            $('.back').show();
        } 
        else {

            $('.sticky').css({
                'position': 'static',
            });

            $('.back').hide();
        }
            var $sticky = $(".sticky");
		    var color = $sticky.css("background-color");
		    var rgb = color.split(',');  
		    var r = parseInt(rgb[0].split('(')[1]);
		    var g = parseInt(rgb[1]);
		    var b = parseInt(rgb[2].split(')')[0]);
		    if(scrollTop > 150){
		        $sticky.css("background","rgba(" + r + ", " + g + ", " + b +", 0.5)") ;
		    }
		    else if(scrollTop > 0 && scrollTop <= 150 ){
		        var m = (400 - scrollTop)*0.8 / 400;
		        $sticky.css("background","rgba(" + r + ", " + g + ", " + b +", " + m + ")") ;
		    }
    });
    $('.back').click(function(){
        $('html').animate({
            scrollTop: 0
        })
    });

})