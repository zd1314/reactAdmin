
//登录的路由组件
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './login.less';
import logo from '../../assets/img/logo.jpg';
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';
import * as  api from '../../api/api-login';
import merroyUtifs from '../../utifs/merroryUtifs';
import storgeUtifs from '../../utifs/storgeUtifs';
class Login extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  _tokens = [];
  _clearTokens() {
    this._tokens.forEach((token) => token.cancel());
    this._tokens = [];
  }
  //点击登录事件
  handleSubmit = e => {
    const me = this;
    //阻止事件的默认行为
    e.preventDefault();
    //得到form对象
    const form = this.props.form;
    //获取表单输入的数据
    // let value = form.getFieldsValue();


    //对所有表单进行校验
    form.validateFields((err, values) => {
      //校验成功
      if (!err) {
        try {
          me._tokens.push(api.login.send({}).then(res => {
            let result = res.data;
            if (result.username === values.username && result.password === values.password) {//登录成功
              message.success('登录成功');
              let user = res.data;
              merroyUtifs.user = user;
              storgeUtifs.saveUser(user)//保存到logcal中

              //跳转到管理页面
              this.props.history.replace('/admin')
            } else {
              message.error('登录失败')
            }
          }))
        } catch (error) {
          console.log('请求失败')
        }
      } else {
        console.log('校验失败');
      }
    });

  }
  handleConfirmPassword = (rule, value, callback) => {
    if (!value) {
      callback('密码不能为空')
    } else if (value.length < 4) {
      callback('密码不能小于4位')
    } else if (value.length > 12) {
      callback('密码不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是数字、字母或下划线')
    } else {
      callback()
    }

  }
  render() {
    //如果用户已经登录，自动跳到管理页面；
    const user = merroyUtifs.user;
    if (user && user._id) {
      return <Redirect to='/' />
    }
    //得到强大的form 对象
    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className={'login'}>
        <div className='login-header'>
          <img src={logo} alt='logo' />
          <h1>React后台管理系统</h1>
        </div>
        <section className='login-content'>
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                //声明验证：
                rules: [
                  { required: true, whitespace: true, message: '用户名不能为空' },
                  { min: 4, message: '用户名最少4位' },
                  { max: 12, message: '用户名最多12位' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是数字、字母或下划线' }
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { validator: this.handleConfirmPassword }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
          </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
  componentWillMount() {
    this._clearTokens();
  }
}
//高阶函数
//高阶组件
/*
包装form组件生成新的组件 Form(login);
新组件会向Form组件中
* */

const wrapLogin = Form.create()(Login)
export default wrapLogin;