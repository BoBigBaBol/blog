window.onload = function(){
    //当然先要获得各种元素了呀
    var imgs = document.images;
    var spans = document.getElementsByTagName('span');
    var td = document.getElementsByTagName('td');
    var li = document.getElementsByTagName('li');
    var body = document.body;
    //为了防止拖拽的时候没有拖到合适的地方导致火狐弹出新选项卡
    body.ondrop = function(event){
        event.stopPropagation();
        event.preventDefault();
    }
    //被拖动元素开始事件
    function dragStart(event){
        var data = event.dataTransfer;  //取得event的dataTransfer对象
        data.setData("text/plain",event.target.id);     //数据传输方式为text，参数为id
        event.target.style.opacity = .6;        //拖动时被拖动元素透明度设为0.6
    }
    //拖动完成透明度重置为1
    function dragEnd(event){
        event.target.style.opacity = 1;
    }

    //将元素拖入当前元素时，当前元素设置一个背景色，可以辨别拖动位置
    function dragEnter(event){
        event.target.style.background='rgba(0,0,255,.2)';
    }
    //离开的时候背景色重置
    function dragLeave(event){
        event.target.style.background='';
    }
    
    //阻止默认行为，让不可放置元素成为可放置的
    function dragOver(event){
        event.preventDefault();
    }

    //将元素释放到当前元素中
    function drop(event){
        var data = event.dataTransfer;
        var id = data.getData('text/plain');
        event.target.style.backgroundColor='';      //重置背景色样式
        var ele = document.getElementById(id);      //把传过来的元素通过id取得
        var item = event.target.appendChild(ele.cloneNode(true));       //深复制元素节点并追加到当前元素
        item.style.opacity = 1;     //拖动过来的复制的新元素透明度重置   
        //阻止冒泡
        event.stopPropagation();
        //解决火狐下面弹出选项卡的问题
        event.preventDefault();
    }
        //把取得的类数组转化为数组
        imgs = Array.prototype.slice.call(imgs,0);
        spans  = Array.prototype.slice.call(spans,0);
        td  = Array.prototype.slice.call(td,0);
        li  = Array.prototype.slice.call(li,0);

        //对数组元素进行遍历调用函数

        imgs.forEach(function(item){
            item.ondragstart = dragStart;
            item.ondragend = dragEnd;
        });

        li.forEach(function(item){
            item.ondragstart = dragStart;
            item.ondragend = dragEnd;
        });
        
        spans.forEach(function(item){
            item.ondragstart = dragStart;
            item.ondragend = dragEnd;
        });

        //当前元素调用函数
        td.forEach(function(item){
            item.ondragenter = dragEnter;
            item.ondragleave = dragLeave;
            item.ondragover = dragOver;
            item.ondrop = drop;
        });
}