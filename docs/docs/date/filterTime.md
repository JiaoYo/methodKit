---
sidebar_position: 1
---

# 格式化时间

## 概念

处理时间的方法

## 接收参数

```
filterDateTime(type,dataTime)
参数1:type
	类型
参数2:dataTime
	这是日期时间
```



## 例子

```javascript
import { filterDateTime } from 'method-kit'
// ····

console.log(filterDateTime(0,'2023-08-29 10:10:10')) // 2023-08-29 
console.log(filterDateTime(1,'2023-08-29 10:10:10')) // 2023-08-29 10:10:10
console.log(filterDateTime(2,'2023-08-29 10:10:10')) // 2023-08-29 10:10:10.000
console.log(filterDateTime(3,'2023-08-29 10:10:10')) // 2023-08
console.log(filterDateTime(4,'2023-08-29 10:10:10')) // 2023
console.log(filterDateTime(5,'2023-08-29 10:10:10')) // 1693430410000
```



## 源码

```javascript
function filterDateTime(type: number, dataTime?: string | number | null) {
  let systemDate = dataTime ? new Date(dataTime) : new Date(),
    year = systemDate.getFullYear(),
    month: any = systemDate.getMonth() + 1,
    date: any = systemDate.getDate(),
    hours: any = systemDate.getHours(),
    minutes: any = systemDate.getMinutes(),
    seconds: any = systemDate.getSeconds(),
    milliseconds: any = systemDate.getMilliseconds();
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (type == 0) {
    return year + '-' + month + '-' + date;
  } else if (type == 1) {
    return year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds;
  } else if (type == 2) {
    return year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds + '.' + milliseconds;
  } else if (type == 3) {
    return year + '-' + month;
  } else if (type == 4) {
    return year
  } else if (type == 5) {
    return new Date(year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds).getTime();
  }
}
```

