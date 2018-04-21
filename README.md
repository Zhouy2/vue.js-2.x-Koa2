# smilevue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# vue.js-2.x-Koa2
这是一个Vue.js 2.x + Koa 2 实现的移动电商系统

# 安装vant
1、使用淘宝的源加速npm的安装：  
``` bash
npm install vant --save --registry=https://registry.npm.taobao.org
```

2、不推荐全局引入vant，可以使用babel-plugin-import来按需引入  
``` bash
安装bable-plugin-import，命令：npm i babel-plugin-import -D
在.babellrc中的plugins中加入["import",{"libraryName":"vant","style":true}]
最后在main.js中按需引入import {Button} from "vant"，使用Vue.use(Button)

全局引入，在main.js中，import Vant from 'vant'，使用Vue.use(Vant)
```

# 适配手机
1、移动端适配方法  
 * 固定高度，宽度百分比（过时了）  
 * Media Query（媒体查询，较新）  
 * flex布局+rem（目前的主流）  
2、rem（font size of the root element）是相对长度单位。相对于根元素（即html元素）font-size计算值的倍数。
3、在iphone 5中1rem=16px，宽度为320px，也就是html中font-size=16px;  
4、获取屏幕大小，对根元素设置font-size的大小，以达成rem的适配：  
```javascript
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 20 + 'px';
```

# 首页布局
1、移动端禁止用户缩放，在meta标签中加入：user-scalable=no 
```javascript
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
```
2、vue模块快速搭建插件：Vue VSCode Snippets,标签自动闭合插件：auto close tag 
3、vant是24格布局法，需要引入Row、Col组件  
```javascript
<van-row>
  <van-col span="8">span:8</van-col>
  <van-col span="8">span:8</van-col>
  <van-col span="8">span:8</van-col>
</van-row>
```