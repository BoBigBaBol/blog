window.onload = function(){
    //获取元素
    var box = document.getElementById('box');
    var btn = document.getElementById('btn');
    var img = document.getElementsByTagName('img')[0];   
    var h2 = document.getElementsByTagName('h2')[0];
    //创建数组，模拟数据
    var arr = [{name:"青椒肉丝",src:"./images/f1.jpg"},
            {name:"小酥肉",src:"./images/f2.jpg"},
            {name:"干锅虾",src:"./images/f3.jpg"},
            {name:"小笼包",src:"./images/f4.jpg"},
            {name:"菜肉馄饨",src:"./images/f5.jpg"},
            {name:"干锅土豆片",src:"./images/f6.jpg"},
            {name:"烤肉",src:"./images/f7.jpg"},
            {name:"快餐",src:"./images/f8.jpg"}]
    //开始事件
    btn.onclick = function(){
        var len= arr.length;
        //图片预加载
        var images = new Array();  
        function preload() {  
            for (i = 0; i < len; i++) {  
                images[i] = new Image()  
                images[i].src = arr[i].src;  
            }  
        }  
        preload(arr[0].src,
            arr[1].src,
            arr[2].src,
            arr[3].src,
            arr[4].src,
            arr[5].src,
            arr[6].src,
            arr[7].src);  
    //监视按钮的状态
    if(this.value==="开始"){
            //定时器
            timeId=setInterval(function () {
            //获取随机菜品
            var random = parseInt(Math.random()*len);
            h2.innerText = arr[random].name;
            img.src = arr[random].src;
        },100);
        this.value="停止";
    }else{
            //清除计时器
        clearInterval(timeId);
        this.value="开始";
    }
    }
}