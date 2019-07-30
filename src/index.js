/*入口文件* */

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'antd/dist/antd.less';
import merroyUtifs from './utifs/merroryUtifs';
import storgeUtifs from './utifs/storgeUtifs';
//读取logcal中保存的user;保存到内存中
const user = storgeUtifs.getUser();
merroyUtifs.user = user;
ReactDom.render(<App />, document.getElementById('root'))