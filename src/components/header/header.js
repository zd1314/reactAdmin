/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { formateData } from '../../utifs/dateUtifs';
import merroryutifs from '../../utifs/merroryUtifs';
import storeutifs from '../../utifs/storgeUtifs';
import menuList from '../../config/menuConfig';
import { reqWeather } from '../../api/apiBuild';
class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      currentTime: formateData(Date.now()),
      dayPictureUrl: '',//天气图片
      weather: ''//天气内容
    }
  }
  //当前时间定时器
  getTime = () => {
    this.timer = setInterval(() => {
      // eslint-disable-next-line no-unused-expressions
      this.setState({
        currentTime: formateData(Date.now())
      })
    }, 1000)
  }
  //天气接口
  getWeather = async () => {
    //调用接口请求异步数据
    const { dayPictureUrl, weather } = await reqWeather('北京');
    this.setState({ dayPictureUrl, weather })
  }
  //标题切换 
  getTitle = () => {
    const path = this.props.location.pathname;
    let title
    // eslint-disable-next-line array-callback-return
    menuList.map(s => {
      if (s.path === path) {
        title = s.title
      } else if (s.children) {
        const cItem = s.children.find(cItem => cItem.path === path);
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title;
  }
  //退出登录

  _clcikDialog = () => {
    Modal.confirm({
      content: '确定退出吗',
      cancelText: '取消',
      onOk: () => {
        //删除保存的user数据
        storeutifs.removeUser();
        merroryutifs.user = {}
        //跳转到login页面
        this.props.history.replace('/login')

      }
    })
  }

  componentDidMount() {
    const me = this;
    me.getTime();
    me.getWeather();

  }
  render() {
    const { currentTime, dayPictureUrl, weather } = this.state;
    const username = merroryutifs.user.username;
    const title = this.getTitle();
    return <div className='header'>
      <div className='header-top'>
        <span>欢迎, {username} </span>
       
        <a href='javascript:' onClick={this._clcikDialog.bind(this)}>退出</a>
      </div>
      <div className='header-bottom'>
        <div className='header-bottom-left'>{title}</div>
        <div className='header-bottom-right'>
          <span>{currentTime}</span>
          <img src={dayPictureUrl} alt='weather' />
          <span>{weather}</span>

        </div>
      </div>
    </div>
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
}
export default withRouter(Header);