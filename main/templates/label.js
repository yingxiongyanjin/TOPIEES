// Parameter 参数设置
var parameter = {
    // 标题内容
    "context": "标题",
    // 指向地址
    "url": "https://www.cnblogs.com/cainiao-chuanqi/p/11301471.html",
    // 默认支持 s0,h1,h2,h3,p1,p2,p3
    // s0: 完全自定义
    // h1、h2、h3、h4: 标题
    // p1: 默认正文
    // p2: 引用文
    // p3: 强调
    "level": "p1",
    // 完全自定义样式
    "style": {},
    // 针对默认文本样式的设置
    // 默认黑色,可参考https://www.cnblogs.com/cainiao-chuanqi/p/11301471.html
    "color": "",
    // 一级标题默认居中,其他默认左对齐
    "text-aling": "",
    // 提供缩进方法
    // 标题默认为0
    // 正文默认为2
    // n表示空格数
    "text-indent": 0,
}



// 模块
function init_lable(parameter) {
    // 初始化化参数
    var context = parameter["context"];
    var url = parameter["usrl"];
    var level = parameter["level"];
    var style = parameter["style"];
    var color = parameter["color"];
    var text_aling = parameter["text-aling"];
    var text_indent = parameter["text-indent"];

    // 改进/用户修改
    if (level == "p1") {
        text_indent = 2;
    }
    if (level == 'p2') {
        context = "[ " + context + " ] ";
    }
    if (text_indent > 0) {
        var item = "\xa0\xa0";
        for (var i = 0; i < text_indent; i++) {
            context = item + context;
        }
    }
    // 样式设置
    if (level != "s0") {
        var h1 = {
            "font-size": "2.5em", // 字体大小，
            // "font-family": "", // 字体系列, 暂不不支持
            // "font-style": "italic", // 字体样式: 暂不不支持
            "font-weight": "bold", //字体粗细: 100,...,400(normal),...,700(bold),...900
            "color": "blcak",// 文本颜色 https://www.cnblogs.com/cainiao-chuanqi/p/11301471.html
            "text-align": "center", // 文本对齐方式
            // "text-decoration": "None", // 文本修饰，主要用于删除连接下划线，暂不支持
            // "text-indent":"", // 文本缩进，暂不支持
        };
        var h2 = {
            "font-size": "2em",
            "font-weight": "bold",
            "color": "black",
        };
        var h3 = {
            "font-size": "1.5em",
            "font-weight": "bold",
            "color": "black",
        };
        var h4 = {
            "font-size": "1em",
            "font-weight": "bold",
            "color": "black",
        };
        var p1 = {
            "font-size": "1em",
            "color": "black",
        };
        var p2 = {
            "font-size": "0.8em",
            "color": "black",
        };
        var p3 = {
            "font-size": "1em",
            "font-weight": "bold",
            "color": "black",
        };

        var default_style = {
            "s0": style,
            "h1": h1,
            "h2": h2,
            "h3": h3,
            "h4": h4,
            "p1": p1,
            "p2": p2,
            "p3": p3,
        };

    }
    else {
        var default_style = {
            "s0": style
        };
    }

    if (color != "") {
        default_style[level]["color"] = color;
    }
    if (text_aling != "") {
        default_style[level]["text-aling"] = text_aling;
    }


    // 生成Label
    var label = ui.Label(
        context,
        default_style[level],
        url,
    )

    return label
}