$(function(){
    var shop = $('.shop')[0];
    var shade = $('.shade')[0];
    var img = $('#detial')[0];
    //给左边的展示图添加鼠标移入事件
    $('.shop').mouseover(function(){
        //鼠标移入，遮罩出现
        $('.shade').css('display','block');
        //鼠标移入，右边细节图出现
        $('.detial').css('display','block');

        // 鼠标拖着遮罩移动事件
        $('.shop').mousemove(function(e){
            // 计算遮罩的left和top值，视口坐标 - 遮罩自身宽高的1/2 - 外边距
            var left = e.clientX - shade.offsetWidth/2 - 150;
            var top = e.clientY - shade.offsetHeight/2 - 100;
            // 判断左边和上边是否溢出父元素，鼠标溢出父元素后left和top值不再变化
            left = left<0 ? 0 : left;
            top = top<0 ? 0 :top;
            // 判断右边和下边是否溢出父元素，鼠标溢出父元素后left和top值不再变化
            left = left>shop.offsetWidth - shade.offsetWidth ?shop.offsetWidth-shade.offsetWidth:left;
            top = top>shop.offsetHeight - shade.offsetHeight ?shop.offsetHeight-shade.offsetHeight:top;
            //设置遮罩移动距离
            $('.shade').css('left',left+'px');
            $('.shade').css('top',top+'px');

            //设置细节图放大
            $('#detial').css('margin-left', -left * (img.offsetWidth/shop.offsetWidth)+"px");
            $('#detial').css('margin-top', -top * (img.offsetHeight/shop.offsetHeight)+'px');
        });
    });
    $('.shop').mouseout(function(){
        //鼠标移出，遮罩隐藏
        $('.shade').css('display','none');
        //鼠标移出，右边细节图隐藏
        $('.detial').css('display','none');
    });
})
