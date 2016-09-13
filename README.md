# jquery.TipMsg
基于jquery封装的弹出框，提示插件
1.文件目录：{
    demo.html：插件使用案例,

    jquery.min.js : jquery压缩版 ,

    jquery.tipMsg.js ： 插件文件 ,

    jquery.tipMsg.min.js ： 插件压缩版文件 ,

    tipMsg.css ： 插件样式表文件 ,

    tipMsg.css ： 插件样式表压缩版文件

}
2.依赖于于jquery封装的插件，在使用插件之前，请先引入jquery，函数名为:tipMsg();

3.插件使用时为json键值对格式

4.方法参数为：//参数1：
            tip提示的内容，字符串
            tipMsg:"",
            //参数2:提示按钮的个数，数字
            btnNum:,
            //tip提示按钮的内容,数组
            btnMsg:["",""]

5.弹出框的样式可以在tipMsg.css中进行修改
