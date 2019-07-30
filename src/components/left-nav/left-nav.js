import React from 'react';
import './text.less';
import logo from '../../assets/img/logo.jpg';
import { Link,withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig';

const { SubMenu } = Menu;

class LeftNav extends React.Component {
  //map+递归调用

  getMenuNodes_map = (menuList) => {
    if (!menuList) { return null }
    return menuList.map((s, i) => {
      if (!s.children) {
        return (
          <Menu.Item key={s.path}>
            <Link to={s.path}>
              <Icon type={s.icon} />
              <span>{s.title}</span>
            </Link>
          </Menu.Item>
        )
      }
      else {
        return (<SubMenu
          key={s.path}
          title={
            <span>
              <Icon type={s.icon} />
              <span>{s.title}</span>
            </span>
          }
        >
          {
            this.getMenuNodes(s.children)
          }

        </SubMenu>)
      }
    })
  }
  //reduce+递归
  getMenuNodes = (menuList) => {
    if (!menuList) { return null }
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        pre.push(
          <SubMenu
            key={item.path}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {
              this.getMenuNodes(item.children)
            }

          </SubMenu>
        )
      }
      return pre;
    }, [])
  }
  render() {
    //得到当前请求的路由路径
    // location 、hash、match
    const path = this.props.location.pathname;
    console.log(path)
    return (
      <div className='left-nav'>
        <Link to='/' className='left-nav-header'>
          <img src={logo} alt='logo' />
          <h1>丹妮儿</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
        selectedKeys={[path]}
        >
          {
            this.getMenuNodes(menuList)
          }
        </Menu >
      </div >

    )
  }
}
/*
withRouter 高阶组件
包装非路由组件，返回一个新的组件
新的组件向非路由组件传递3个参数  history/location/match
 */

export default withRouter(LeftNav);