//获取元素
var box = document.getElementById('box');
var btn = document.getElementById('btn');
var span = document.getElementById('span');
//加入姓名
var arr = ["乔丹","科比","韦斯特","韦德","艾弗森","魔术师","库里","罗伯特森",
    "斯托克顿","詹姆斯","伯德","J博士","杜兰特","乔治","邓肯","马龙","巴克利","加内特"
    ,"诺维茨基","奥尼尔","奥拉朱旺","罗宾逊","尤因","姚明","麦迪","郭艾伦","易建联","王治郅"
    ,"周琦","哈登","汤普森","格林","吉诺比利","贾巴尔","加索尔","林书豪"];
//动态创建层
for(var i =0;i<arr.length;i++){
    var div = document.createElement("div");
    div.innerText=arr[i];
    div.className="name";
    box.appendChild(div);
};
//开始事件
btn.onclick=function(){
    var len= arr.length;
    //监视按钮的状态
    if(this.innerText==="开始"){
            //定时器
            timeId=setInterval(function () {
            //清空所有层的颜色
            arr.forEach(function(item,index){
                box.children[index].style.background="";
            })
            //留下当前层的颜色
            var random = parseInt(Math.random()*len);
            box.children[random].style.background="skyblue";
        },100);
        this.innerText="停止";
    }else{
            //清除计时器
        clearInterval(timeId);
        this.innerText="开始";
    };
};
//获取时间的函数        
// function getTime(){
//     span.innerText = (new Date()).toLocaleString();
// }
// getTime();
// setInterval(getTime,1000);
getTime();
setInterval(getTime,1000)
function getTime(){
    var day = new Date();
    var year = day.getFullYear();//年
    var month = day.getMonth()+1;//月
    var dat = day.getDate();//日
    var hour = day.getHours();//小时
    var minitue = day.getMinutes();//分钟
    var second = day.getSeconds();//秒
    month=month<10?"0"+month:month;
    dat=dat<10?"0"+dat:dat;
    hour=hour<10?"0"+hour:hour;
    minitue=minitue<10?"0"+minitue:minitue;
    second=second<10?"0"+second:second;
    span.innerText=year+"-"+month+"-"+dat+" "+hour+":"+minitue+":"+second
}