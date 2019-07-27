
//登录的路由组件
import React, { Component } from 'react';
import './login.less';
import logo from './logo.jpg'
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';

class Login extends Component {


  handleSubmit = e => {
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
        console.log('Received values of form: ', values);
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
    } else if (value.length > 4) {
      callback('密码不能大于12位')
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback('密码必须是数字、字母或下划线')
    } else {
      callback()
    }

  }
  render() {
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
}
//高阶函数
//高阶组件
/*
包装form组件生成新的组件 Form(login);
新组件会向Form组件中
* */

const wrapLogin = Form.create()(Login)
export default wrapLogin;