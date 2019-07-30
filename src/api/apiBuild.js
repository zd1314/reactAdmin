//接口函数的组件

import ajax from './ajax';

//登录接口
export const reqLogin = (username, password) => ajax('/login', username, password, 'POST');
//添加用户接口
export const addUser = (user) => ajax('/adduser', user, 'POST');

