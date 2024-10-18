// 深拷贝
export function deepClone(obj: any) {
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

// 防抖
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  return function (this: unknown, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// 数字补零
export function padZero(num: number) {
  return (num < 10 ? '0' : '') + num;
}

// 数组转树形结构
export function ArrayTree(data: any, parentId: number | null = null) {
  return data.filter((item: any) => item.parentId === parentId).map((item: any) => {
      const children = ArrayTree(data, item.id);
      return { ...item, children };
  });
}

export function isType(val: any) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

export function isObject(val: any) {
  return isType(val) === 'Object';
}

export function isArray(val: any) {
  return isType(val) === 'Array';
}

export function isFunction(val: any) {
  return isType(val) === 'Function';
}