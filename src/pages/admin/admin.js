
//管理路由组件
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import merroyUtifs from '../../utifs/merroryUtifs';

import LeftNav from '../../components/left-nav/left-nav';
import Header from '../../components/header/header';
import Router from '../../router/router';
const { Footer, Sider, Content } = Layout;
export default class Login extends Component {
  render() {
    const user = merroyUtifs.user;
    // //如果内存中没有user=====>当前没有登录
    if (!user || !user._id) {
      // 自动跳转到登录页面
      return <Redirect to='/login' />
    }
    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header></Header>
          <Content style={{ background: '#fff' }}>
           < Router></Router>
          </Content>
          <Footer style={{textAlign:'center',color:'#ccc'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}