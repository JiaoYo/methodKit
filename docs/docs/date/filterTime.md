---
sidebar_position: 1
---

# 格式化时间

## 概念

处理时间的方法

## 接收参数

```
filterDateTime(dataTime,format)
参数1:dataTime
	这是日期时间
参数2:format
	这是格式化时间的格式
```



## 例子

```javascript
import { filterDateTime } from 'method-kit'
// ····

console.log(filterDateTime(null, 'YYYY-MM-dd hh:mm:SSS')); // 2023-06-07 15:45:028
console.log(filterDateTime(null, 'yyyy-MM-dd hh:mm:ss')); // 2023-06-07 15:45:00
console.log(filterDateTime(null, 'YYYY-MM-dd')); // 2023-06-07
console.log(filterDateTime(null, 'yyyy')); // 2023
console.log(filterDateTime(null, 'MM-dd')); // 06-07
console.log(filterDateTime(null, 'hh:mm:ss')); // 15:45:00
console.log(filterDateTime(null, 'hh:mm')); // 15:45

```



## 源码

```javascript
function filterDateTime(dataTime: string | number | Date, format = 'yyyy-MM-dd hh:mm:ss'): string {
  const systemDate = dataTime ? new Date(dataTime) : new Date();
  
  const year = systemDate.getFullYear();
  const month = String(systemDate.getMonth() + 1).padStart(2, '0');
  const date = String(systemDate.getDate()).padStart(2, '0');
  const hours = String(systemDate.getHours()).padStart(2, '0');
  const minutes = String(systemDate.getMinutes()).padStart(2, '0');
  const seconds = String(systemDate.getSeconds()).padStart(2, '0');
  const milliseconds = String(systemDate.getMilliseconds()).padStart(3, '0');

  return format.replace('yyyy', year.toString())
    .replace('YYYY', year.toString())
    .replace('MM', month.toString())
    .replace('dd', date.toString())
    .replace('DD', date.toString())
    .replace('hh', hours.toString())
    .replace('mm', minutes.toString())
    .replace('ss', seconds.toString())
    .replace('SSS', milliseconds.toString());
}

```

