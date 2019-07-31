import React from 'react';
import { formateData } from '../../utifs/dateUtifs';
import merroryutifs from '../../utifs/merroryUtifs';
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
  getTime=()=> {
   this.timer= setInterval(() => {
      // eslint-disable-next-line no-unused-expressions
      this.setState({
        currentTime: formateData(Date.now())
      })
    },1000)
  }
  //天气接口
  getWeather = async () => {
    //调用接口请求异步数据
    const { dayPictureUrl, weather } = await reqWeather('北京');
    this.setState({ dayPictureUrl, weather } )
  }
  render() {
    const { currentTime, dayPictureUrl, weather } = this.state;
    const username = merroryutifs.user.username;
    return <div className='header'>
      <div className='header-top'>
        <span>欢迎, {username} </span>
        <a href='javascript:'>退出</a>
      </div>
      <div className='header-bottom'>
        <div className='header-bottom-left'>首页</div>
        <div className='header-bottom-right'>
          <span>{currentTime}</span>
          <img src={dayPictureUrl} alt='weather' />
          <span>{weather}</span>

        </div>
      </div>
    </div>
  }
  componentDidMount() {
    const me = this;
    me.getTime();
    me.getWeather()
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
}
export default Header;