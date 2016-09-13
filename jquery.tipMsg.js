// 构造函数对象传递参数
function tipMain(tipMsg,btnNum,btnMsg){
    this.tipMsg=tipMsg;
    this.btnNum=btnNum;
    this.btnMsg=[];
}
$.fn.extend({
    //封装代码
    tipMsg:function(tipMain){
        //创建对象
        var layout;
        var tip;
        var layouts;
        var closeTip;
        var tipBtn;
        //创建蒙版 ，提示框
        layout = "<div id='layout' class='layout-module'></div>";
        tip = "<ul id='tip' class='tip-main'><li>"+tipMain.tipMsg+"</li></ul>";
        //根据传入参数：按钮个数进行创建按钮
        tipBtn = "";
        if(tipMain.btnNum>2){
            //按钮个数不能大于2
            alert("按钮个数不能大于2");
        }else if(tipMain.btnNum==2){
            //按钮个数=2
            tipBtn = "<li class='tip-btn'><span>"+tipMain.btnMsg[0]+"</span><span>"+tipMain.btnMsg[1]+"</span></li>";
        }else if(tipMain.btnNum==1){
            //按钮个数=1
            tipBtn = "<li class='tip-btn'><span>"+tipMain.btnMsg[0]+"</span></li>";
        }
        //将蒙版插入body
        $("body").append(layout);
        //弹出框添加到蒙版
        layouts = $("#layout");
        layouts.append(tip);
        tips = $("#tip");
        tips.append(tipBtn);
        layouts.css({
            width:"100%",
            height:"100%",
            position:"absolute",
            background:"rgba(0,0,0,.3)",
            "z-index":99,
            left:0,
            top:0
        }).addClass("tipCenter");
        //控制隐藏
        var showHide;
        closeTip = tips.children("li").children("span");
        closeTip.on("click",function(){
            layouts.remove();
        });
    }
});
