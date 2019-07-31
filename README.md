2019-08-01

此项目为一个前后端分离的后台管理的SPA,包括前端pc应用和后端应用;

包括用户管、品分类管理、商品管理、权限管理等功能模块;

前端使用:React全家桶+And+axios+es6+webpack等技术;

后端用的:Node+Express+Mongdb等技术;

采用模块化、组件化、工程化的开发模式;

前端：{
    react
    react-router-dom
    antd
    redux
  }

后台应用：{
  node 
  mongDodb
  mongoose
  multer --------node.js 中间件
  blueimp-md5 加密
}

前后台交互{
  ajax:axios、jsonp、promise、async、await
}

模块化：Es6 、 Commonjs
  
构建工具：webpack、create-react-app、eslint

富文本编辑：{
  react-draft-wysiwyg、
  draft.js、
  draftjs-to-html
}
组件按需加载:react-app-rewired customize-cra babel-plugin-import;

前端路由：{
  登录的路由组件：login、
  管理路由组件:admin
}
dev分支：git checkout -b dev origin/dev; git pull origin dev



添加两个工具：{
 merroyUtifs------持久存储 如果内存中没有user=====>当前没有登录  return <Redirect to='/login' />
 storgeUtifs------store库本地永久存贮相当于localstorge;

}
/*
withRouter 高阶组件
包装非路由组件，返回一个新的组件
新的组件向非路由组件传递3个参数  history/location/match   
*/
history:push()/replace()goback()
location:pathname属性
match:params属性