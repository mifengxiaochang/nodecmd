# 前端自动化

## 对NODE的误解

- NODE 肯定是几个前端工程师在实验室里捣鼓出来的。
- 为了后端而后端，有意思吗？
- 怎么又发明了一门新语言？
- javascript 承担的责任太重了
- 直觉上，JavaScript不应该运行在后端
- 前端工程师要逆袭了
## 图灵完备语言
一切可计算的问题都能计算，这样的虚拟机或者编程语言就叫图灵完备的。

一个能计算出每个图灵可计算函数（Turing-computable function）的计算系统被称为图灵完备的。一个语言是图灵完备的，意味着该语言的计算能力与一个通用图灵机 （Universal Turing Machine）相当，这也是现代计算机语言所能拥有的最高能力。

现在的计算机编程语言都是图灵完全（完备）的。

因此，这世上也不存在一种语言可以做，而另一种语言不可以做的事儿

## javascript
javascript 借鉴了 C,Scheme,Self,Java 的设计。

javascript “基于对象” 任何事都是对象，所以你可以使用面向对象的编程风格

javascript [First-class function](https://en.wikipedia.org/wiki/First-class_function),所以你可以使用函数式编程

所以做一件事在javascript 中往往有多种方式
## first-class

通常，编程语言会限制操作计算元素的途径。带有最少限制的元素被称为具有一等地位。一些一等元素的“权利和特权”是：

它们可以绑定到名称。
它们可以作为参数向函数传递。
它们可以作为函数的返回值返回。
它们可以包含在好素具结构中。

## NODE
Ryan Dahl 是一名资深的程序员，在创造出NODE之前，他的主要工作都是围绕高性能Web服务器进行的。经历过一些尝试和失败之后，他找到了设计高性能Web服务器的几个要点：事件驱动，非阻塞I/O.

经过C,Lua,Haskell,Ruby,javascript等权衡最终选择的了javascript。

起初，Ryan Dahl称她的项目为web.js,就是一个Web服务器，但是项目的发展超过了他最初构想，变成了一个构建网络应用的基础框架。每个NODE进程都构成网络应用中的一个节点，这就是NODE名字所含意义的真谛。

虽然NODE这么酷炫但是我们都不用我们只用它写脚本。

## 指令&数据

这两个概念在计算机世界无处不在，一般数据的载体的就是文件，而这个文件在一定的环境下又变成了指令。如：一个HTML文件放在服务器上就是数据，而当浏览器获取了它，并将其解析绚丽的页面它就成了指令。

而前端主要由三种数据组成，HTML,CSS,JS，因此前端自动化就是用脚步自动化处理前端所涉及的数据（文件）。

而这个脚步呢就用NODE写，其一前端开发对JS技术栽比较熟悉容易上手，其二NODE社区灰常活跃你基本能找到你想要的所有东西。

不过大家在网上检索前端自动化，基本都会感觉前端自动化是grunt，gulp，webpack...,或者因为NODE才有了前端自动化。

程序员能用脚本就不用手个性-->前端自动化古即有之，只是NODE未出之前从未如此强势！！！

## 前端自动化都做什么

- 压缩CSS，js。
- 预编译HTML，JS，CSS 前端涉及到的语言。HTML ，CSS 抽象程度比较低为了更高效的开发一般 HTML，css 由 jade，less 等DSL(Domain Specific Language)编译而成。
- 语法检查，格式整理，自动刷新页面等其它功能。


## ESlint

### npm init 

![](pic/npm-init.gif)

### npm install

![](pic/npm-install.gif)
### node index.js

![](pic/node-run.gif)

### package.json
```
{
  "name": "eslint-demo",
  "version": "1.0.0",
  "description": "a demo for eslint",
  "main": "index.js",
  "scripts": {
    "test": "npm run test"
  },
  "author": "liz",
  "license": "ISC",
  "dependencies": {
    "eslint": "^3.19.0"
  }
}
```
### index.js
```
"use strict";
var CLIEngine = require("eslint").CLIEngine;

var cli = new CLIEngine({
    envs: ["browser", "mocha"],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

// lint the supplied text and optionally set
// a filename that is displayed in the report
var report = cli.executeOnText("test.js");
console.dir(report);
```
-------
![](pic/saber.gif)