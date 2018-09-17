window.onload = function(){
    var div = document.getElementsByTagName('div')[0];
    var handler = function(event){
        var e = event || window.event;//兼容IE8
            if(e.keyCode == 39 && div.offsetLeft < document.body.clientWidth-100){
                div.style.left = div.offsetLeft + 50 + 'px';
            }
            else if(e.keyCode == 40){
                div.style.top = div.offsetTop + 50 + 'px';
            }else if(e.keyCode == 37 &&div.offsetLeft >0){
                div.style.left = div.offsetLeft - 50 + 'px';                          
            }else if(e.keyCode == 38 &&div.offsetTop >0){
                div.style.top = div.offsetTop - 50 + 'px';                            
            };
    };
    document.onkeydown = handler;
}