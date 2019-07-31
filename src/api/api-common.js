import ApiBuilder from '../ApiBuilder';

const builder = new ApiBuilder({
  baseUrl: 'http://localhost:3000/apis',
  simulation: false
});

/**
 * http://0.0.0.0:8080/
 * @type {string}
 */

builder.BASEURL_01 = window.BASEURL_01 || '';
builder.BASEURL_02 = window.BASEURL_02||'http://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'


export default builder;
