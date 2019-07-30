//路由管理
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/home/home';
import Category from '../pages/category/category';
import Product from '../pages/product/product';
import User from '../pages/user/user';
import Role from '../pages/role/role';
import Line from '../pages/charts/line';
import Pie from '../pages/charts/pie';




export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/category' component={Category}></Route>
        <Route path='/product' component={Product}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/role' component={Role}></Route>
        <Route path='/charts/line' component={Line}></Route>
        <Route path='/charts/pie' component={Pie}></Route>
        <Redirect to='/home'></Redirect>
      </Switch>
    )
  }
}