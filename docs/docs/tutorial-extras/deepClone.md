---
sidebar_position: 2
---

# 深拷贝

## 概念

主要用于限制某个函数在一段时间内被频繁调用的次数。它常用于处理用户交互、滚动、窗口调整大小等事件，以避免性能问题。

## 接收参数

```
deepClone(obj)
参数:obj
	接收对象
```



## 例子

```javascript
import { deepClone } from 'method-kit'
// ····
const obj = {
  name:'zhangsan',
  age:18,
  address:{
    city:'beijing',
    street:'dongcheng'
  }
}
const newObj = deepClone(obj);

console.log(newObj===obj); // false

```



## 源码

```javascript
function deepClone(obj: any) {
  // 处理 null 和非对象的情况
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let result: any = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepClone(obj[key]); // 递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
```

