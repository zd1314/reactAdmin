
/*
封装axios 库；
函数的返回值是promise对象
* */
import axios from 'axios';
import { message } from 'antd';
export default function ajax(url, data = {}, type) {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === 'GET') {
      promise = axios.get(url, {
        parmas: data
      })
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response)
    }).catch(error => {
      message.error('请求出错了'+error.message)
    })
  })

}