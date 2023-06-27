# 学习svg相关知识
在学习前端可视化编辑器的开发的过程中，发现了该项目的大部分图形都是使用svg绘画的，由于在之前的学习中，对于svg涉入的并不多，为了能够更好的学习下去，在这里初步了解下svg，并学习相关基本用法
## 认识svg
svg全称可伸缩矢量图形（Scalable Vector Graphics）,对图像的形状描述，体积小
特点：
* 随意缩放而不损失画质
* 可被众多工具打开或修改
* 基于xml
* 通过改变部分代码 来使图形具有交互功能

## 基本元素
svg提供了基本标签元素以供使用
矩形 rect
圆形 circle
椭圆 ellipse
线条 line
多线条 polyline
多边形 polygon
路径 payh

## 矩形rect
width: 矩形宽度
height: 矩形高度
fill：矩形填充颜色
stroke-width 矩形边框宽度
stroke：边框颜色
x: 定义矩形的左边位置
y: 定义矩形的顶部位置
fill-opacity：填充颜色不透明度 0-1
stroke-opacity： 边框不透明度 0-1
opacity： 整个元素的不透明度 0-1
rx：定义圆角x轴方向的半径长度
ry：定义圆角y轴方向的半径长度
```html
<svg width="400" height="110">
    <rect width="300" height="100" fill="pink" x="100" y="0" stroke="blue"></rect>
</svg>>
```

## 圆形circle
cx: 圆心x坐标
cy：圆心y轴坐标
r：圆的半径
fill：矩形填充颜色
stroke-width 矩形边框宽度
stroke：边框颜色
```html

```

## 椭圆 ellipse
cx: 圆心x坐标
cy：圆心y轴坐标
rx：水平半径
ry：垂直半径
fill：矩形填充颜色
stroke-width 矩形边框宽度
stroke：边框颜色
## 直线line
X1：起始x坐标
y1：起始y坐标
x2：结束x坐标
y2：结束y坐标
```html
<!-- x1 起始横坐标 y1 起始纵坐标 x2 结束横坐标 y2 结束纵坐标 -->
<svg width="750" height="500">  // width 定义画布宽度 height 定义画布宽度
  <line x1="3" y1="3" x2="48" y2="3"></line> 
  <line x1="3" y1="19" x2="65" y2="19"></line>
  <line x1="3" y1="35" x2="48" y2="35"></line>
  <line x1="3" y1="51" x2="65" y2="51"></line>
</svg>
```
## 多边形polygon
points: 至少3个点的坐标 坐标之间空格隔开 （x1,y1 x2,y2 x3,y3）

## 多线条（折线）polyline
points： 至少2个点的坐标 坐标之间空格隔开 （x1,y1 x2,y2）

## 绘制文本text
x: 坐标
y：坐标
font-size：大小
text-anchor：文本对齐与坐标方式 start 文本左边 middle文本中间 end文本末尾
transform：变换rotate（旋转角度，旋转中心点x坐标,旋转中心点x坐标）
```html
<svg xmlns:xlink="http://www.w3.org/1999/xhtml">
    <a xlink:href=""><text>
    i love you
    <tspan></tspan>
</text></a>
</svg>
```
## g标签 group 用来设置公共的属性
## 绘制路径path
命令的大小写表示意义不同 大写表示绝对定位，小写表示相对定位（相对于上一个绘制点）
d：draw 表示绘制命令 M：moveto M150 0  从150,0 位置开始  L：lineto 链接点 l75 200   q: 绘制二次贝塞尔曲线 q 150 -300  300 0  表示 控制点 和 终点坐标


## 描边属性
stroke：笔画颜色属性
stroke-width：笔画宽度
stroke-linecap：笔画笔帽属性 butt没有线帽 round圆形线帽 square方形线帽
stroke-dasharray：虚拟笔画属性 stroke-dasharray属性至少两个值 （长度，间隔）

##  模糊和阴影效果filter
filter 都在defs元素中定义的
id: 用于识别过滤器

### 模糊效果
feGaussianBlur：高斯模糊标签 stdDeviation设置高斯模糊值
```html
<svg>
    <defs>
        <filter x="0" y="0" id="f1">
            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
        </filter>
    </defs>
    <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f1)"></rect>
</svg>
```
### 阴影效果
feOffset：阴影 dx：x轴偏移 dy：y轴偏移 in：阴影来源 SourceAlpha使用黑色 SourceGraphic使用原始图像：
feBlend： in： SourceGraphic
```html
<svg>
    <defs>
        <filter id="f2" x="0" y="0" width="200" height="200">
            <feOffset dx="20" dy="20" in="SourceAlpha"/>
            <feBlend in="SourceGraphic"></feBlend>
        </filter>
    </defs>
    <rect width="90" height="90" stroke="green" stroke-width="3" fill="yellow" filter="url(#f2)"></rect>
</svg>
```
## 渐变
### 现行渐变linearGradient
x1，y1: 线性渐变的开始位置
x2, y2: 线性渐变的结束位置
stop标签： offset属性：定义渐变颜色的开始和结束位置，为百分比
stop-color：渐变颜色
```html
<svg width="400" height="150">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="g1">
      <stop offset="0%" stop-color="pink"/>
      <stop offset="10%" stop-color="skyblue"/>
      <stop offset="100%" stop-color="red"/>
    </linearGradient>
  </defs>
  <ellipse cx="200" cy="80"  rx="85" ry="55" fill="url(#g1)"/>
</svg>
```

### 径向渐变
radialGradient
cx: 外部圆
cy：外部圆
r：外圆半径
fx: 内部圆
fy: 内部圆

```html
<svg width="500" height="150">
    <defs>
        <radialGradient cx="50%" cy="50%" r="50%" fx="50%" fy="50%" id="g2">
            <stop offset="0%" stop-color="#fff">
                
            </stop>
            <stop offset="100%" stop-color="skyblue"></stop>
        </radialGradient>

    </defs>
    <ellipse cx="200" cy="80" rx="85" ry="55" fill="url(#g2)"></ellipse>
</svg>
```