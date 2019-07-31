import React from 'react';
import './text.less';
import logo from '../../assets/img/logo.jpg';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import menuList from '../../config/menuConfig';

const { SubMenu } = Menu;

class LeftNav extends React.Component {
  //map+递归调用（方法一）
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
        return (
          <SubMenu
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

          </SubMenu>
        )
      }
    })
  }
  //reduce+递归（方法二）
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
        //查找一个当前路径匹配的子item
        const path = this.props.location.pathname;
        // eslint-disable-next-line no-unused-expressions
        const items = item.children.find(childItem => childItem.path === path)
        if (items) {
          this.openKey = item.path;
        }



        //如果存在，说明当前item的子列表需要打开

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
  //第一次render之前执行一次。。。。
  componentWillMount() {
    this.getMenuNodes(menuList)
  }
  render() {

    /*
    得到当前请求的路由路径
    location 、hash、match
    刷新时选中对应的菜单项  selectedKeyse是当前请求的path
    刷新子菜单路径时自动打开子菜单列表  defaultOpenKeys是当前一级列表项的子菜单项是对应当前子列表的key  例如 charts/pie  /pie
    */
    
    const path = this.props.location.pathname;
    const openKey = this.openKey;
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
          defaultOpenKeys={[openKey]}
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