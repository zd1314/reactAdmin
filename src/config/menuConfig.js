const menuList = [
  {
    title: '首页',
    path: '/home',
    icon: 'home'
  },
  {
    title: '商品',
    path: '/products',
    icon: 'appstore',
    children: [
      {
        title: '品类管理',
        path: '/category',
        icon: 'bars'
      },
      {
        title: '商品管理',
        path: '/product',
        icon: 'tool'
      },
    ]
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    path: '/role',
    icon: 'shake'
  },
  {
    title: '图形图表',
    path: '/charts',
    icon: 'shake',
    children: [
      {
        title: '线图',
        path: '/charts/line',
        icon: 'menu'
      },
      {
        title: '饼图',
        path: '/charts/pie',
        icon: 'tag'
      }
    ]
  },

]
export default menuList;