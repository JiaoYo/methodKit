// 格式化时间
export function filterDateTime(dataTime: string | number | Date, format = 'yyyy-MM-dd hh:mm:ss'): string {
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
