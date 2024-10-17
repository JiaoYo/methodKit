---
sidebar_position: 1
---

# 防抖

## 概念

主要用于限制某个函数在一段时间内被频繁调用的次数。它常用于处理用户交互、滚动、窗口调整大小等事件，以避免性能问题。

## 接收参数

```
debounce(fn,delay)
参数1:fn
	接收函数
参数2:delay
	这是延迟的时间（以毫秒为单位）
```



## 例子

```javascript
import { debounce } from 'method-kit'
// ····
const log = () => {
    console.log("Function executed!");
};
const debouncedLog = debounce(log, 300);

// 假设在短时间内多次调用
debouncedLog(); // 这个调用会被防抖
debouncedLog(); // 会重置定时器
setTimeout(debouncedLog, 100); // 仍会重置定时器
setTimeout(debouncedLog, 400); // 300ms后，最终会执行log

```



## 源码

```javascript
function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  return function(this: unknown, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

