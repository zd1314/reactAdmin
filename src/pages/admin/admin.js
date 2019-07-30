
//管理路由组件
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import merroyUtifs from '../../utifs/merroryUtifs';

export default class Login extends Component {
  render() {
    const user = merroyUtifs.user;
    // //如果内存中没有user=====>当前没有登录
    if (!user || !user._id) {
      // 自动跳转到登录页面
      return <Redirect to='/login' />
    }
    return (
      <div>Hello {user.username}</div>
    )
  }
}