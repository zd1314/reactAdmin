const { override, fixBabelImports,addLessLoader } = require('customize-cra');
module.exports = override(
  //针对antd进行按需打包，根据import进行打包(使用babel-plugin-import)
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',//自动打包相关样式
  }),
  //使用lessLoder对源码中的less进行修改颜色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  })
);