# 关于node EventEmitter 的思考

起因看见 stream 继承 EventEmitter 奇怪的写法
## 继承code
 ```javascript
 const util = require('util');
const EventEmitter = require('events');
// 为什么每个子类需要继承一个 EventEmitter 实例
// EventEmitter 实现观察者模式肯定需要一个存储订阅事件的容器，而这个容器不能共用每个子类需要一个，而JS 原型继承的方式无法满足（并不会像类继承一样，为从父类继承的属性开辟单独的内存）
// 这应该也是es6规范没有实例属性 而是写在 constructor 中原因
// 总结起来就是需要开始内存独立的实例属性
function MyStream() {
  EventEmitter.call(this);
}

util.inherits(MyStream, EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit('data', data);
};

const stream = new MyStream();

console.log(stream instanceof EventEmitter); // true
console.log(MyStream.super_ === EventEmitter); // true

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('It works!'); // Received data: "It works!"

const EventEmitter = require('events');

class MyStream extends EventEmitter {
  constructor() {
    super();
  }
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) => {
  console.log(`Received data: "${data}"`);
});
stream.write('With ES6');
```

