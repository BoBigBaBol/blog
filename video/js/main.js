var video = document.getElementsByTagName('video')[0];
var btns = document.getElementsByTagName('button');
btns = Array.prototype.slice.call(btns,0);
function handle(){
    //区分每一个button的功能
    //this-->button
    var value = this.innerText;
    if(value == '播放'){
        video.play();
        return;
    }else if(value == '暂停'){
        video.pause();
        return;
    }
    if(value == '快速'){
        //正常值是1   >1快速播放  <1慢速播放
        video.playbackRate = 1.5;//1.5倍速
        return;
    }
    if(value == '慢速'){
        //正常值是1   >1快速播放  <1慢速播放
        video.playbackRate = 0.8;//0.8倍速
        return;
    }
    if(value == '正常'){
        //正常值是1   >1快速播放  <1慢速播放
        video.playbackRate = 1.0;//正常速度
        return;
    }
    if(value == '快进'){
        //currentTime  当前播放时间
        video.currentTime +=5;
        return;
    }
    if(value == '后退'){
        //currentTime  当前播放时间
        video.currentTime -=5;
        return;
    }
}
btns.forEach(function(item,index){
    //item--button
    //给每一个button绑定事件
    item.onclick = handle;
});
btns[2].onclick = function(){
    //播放或暂停
    if(video.paused){
        video.play();
        this.innerText = '暂停';
    }else if(video.play){
        video.pause();
        this.innerText = '播放';
    }
}
//实现键盘左右键按下控制视频播放
document.onkeydown = function(event){
    if(event.keyCode == 37){
        //左
        video.currentTime -=5;
        return;
    }
    if(event.keyCode == 39){
        //右
        video.currentTime +=5;
        return;
    }
    if(event.keyCode == 38){
        //上
        if(video.volume<0.9){
            video.volume +=0.1;
        }else{
            video.volume = 1;
        }
        return;
    }
    if(event.keyCode == 40){
        //下
        if(video.volume>0.1){
            video.volume -=0.1;
        }else{
            video.volume = 0;
        }
        return;
    }
}