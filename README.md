# Templates of PIE Engine Studio UI
## 想法
## 通用组件
### 关于Label：
PIE Engine Studio为用户提供了ui.Label类用于显示各类文本内容。  
> **Label初始化参数**
> - Label( context, style, url)  
>   - context: 要显示的文本
>   - style: 样式
>   - url: 指向地址，当前可能暂不支持该功能

通过再封装，提供一些常用文本样式，避免重复造轮子(这里我本想参考常用的一些常用的工具包和模板例如Bootstrap等来设计，但是由于我目前能力不足没能做到)。
> **init_label函数使用**  
> - function init_label(parameters)  
>   - parameters:参数，见下方的“参数字典”
>   - return Label  
>
> **parameters说明**
> - parameters["context"]:要显示的文本内容
> - parameters["url"]:要指向地址
> - parameters["level"]:文本样式，默认为p1
>   - 提供默认的一、二、三级、四级标题(h1,h2,h3,h4)以及正文、引用、强调(p1,p2,p3)三种文本。
>   - 也提供了完全自定义模式：s0,必须与parameters["style"]配合使用。
> - parameters["style"]:设置完全自定义的样式。  
> 
>下面的参数可支持对默认文本样式做一些修改
> - parameters["color"]:文本颜色，默认为黑色  
> - parameters["text-aling"]:文本对齐的方式
> - parameters["text-indent"]:缩进,段首添加n个tab位

在PIE-Engine Studio的使用用例(当前还不支持import，故需要将模块复制到对应文件中)：  

    // ...copy and paste include parameters object and init_label function 

    // 方式1：显示在控制台上  
    var p = parameters;
    p["context"] = "一级标题"
    p["level"] = "h1";
    var label = init_label(p);
    print(label);

    // 方式2：植入地图界面
    var panel = ui.Panel({
    widgets: [label],
    style: {
        width: "400px",
        },
    });
    ui.root.add(panel);

**效果可见/images/label:**  
![label效果01](./images/label/label%E6%95%88%E6%9E%9C01.png)
![label效果02](./images/label/label%E6%95%88%E6%9E%9C02.png)
    
## 界面模板
## 参考




