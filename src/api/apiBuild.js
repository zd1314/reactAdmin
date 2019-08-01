//接口函数的组件
import jsonp from 'jsonp'
import ajax from './ajax';
import { message } from 'antd';

//登录接口
export const reqLogin = (username, password) => ajax('/login', username, password, 'POST');
//添加用户接口
export const addUser = (user) => ajax('/adduser', user, 'POST');




//jsonp请求的天气接口
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    //发送jsonp请求
    jsonp(url, {}, (err, data) => {
      if (!err && data.status === 'success') {
        const { dayPictureUrl, weather } = data.results[0].weather_data[0];
        resolve({ dayPictureUrl, weather })
      } else {
        message.error('获取天气信息失败')
      }
    })

  })
}
// reqWeahter('张家港')
/*
jsonp 只能解决get类型的ajax请求跨域问题
jsonp请求不是ajax请求,是一般的get请求
基本原理：
   浏览器端：
       动态生成<script>请求后台返回来的接口（src就是接口的url）
         定义好用于接收响数据的函数（fn），并将函数通过请求参数提交给后台（如：callback）；
   服务端：
        接收到请求处理结果数据后，返回一个函数调用的js代码，并将结果数据作为实参传入函数调用；
   浏览器：
        收到响应自动执行函数的调用的js代码，也就执行了提前定义好的函数，并得到需要的结果数据。

 *
*/
