//格式化日期：
export  function formateData(time) {
  if (!time) return '';
  let data = new Date(time);
  let month = (data.getMonth() + 1).toString().padStart(2, '0');
  let date = data.getDate().toString().padStart(2, '0');
  let hours = data.getHours().toString().padStart(2, '0');
  let minutes = data.getMinutes().toString().padStart(2, '0');
  let seconds = data.getSeconds().toString().padStart(2, '0')
  return data.getFullYear() + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
}