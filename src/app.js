import Vue from "vue";
import { Dialog,Toast,Popup,Area,DatetimePicker } from 'vant';
import Loading from "vendor/ui/loading";
require("assets/css/cropper.css");
require("assets/css/vant/index.css");
require("assets/css/swiper.css");
require("assets/scss/reset.scss");
require("assets/scss/global.scss");
require("vendor/utils/vconsole.js");
let _origin = window.location.origin;
const weixin = require("vendor/weixin/weixin");
import ls from 'vendor/utils/cz-storage';
export const LS = ls;
import query from "vendor/utils/getUrlParms";
//测试代码
if( _origin.indexOf('localhost')!=-1 ){
    window.llbLogin = 1;
}
Vue.use(Popup);
Vue.use(Area);
Vue.use(DatetimePicker);

/**
 * 全局配置
 */
export const config = {
    serverPath: _origin.indexOf('localhost')!=-1?'':window["serverPath"], 
    wangyiCaptchaId:"93d02ae951e24166b32f57ce97a3b375"
}
console.log('config',config);
/**
 * 事件管理中心
 */
export const globalDispatcher = new Vue();

export const flash = null;

/**
 * ui
 */
export{ Dialog, Loading, Toast };

/**
 * 百度统计初始化
 */
// tracking.baiduInit("bfe970956f59893da369c031c380c5f5");

/**
 * 微信jssdk初始化
 */ 
// console.info("微信jssdk初始化...");  
// var shareObj = {
//     title: "",
//     desc: "",
//     link: '',
//     imgUrl: '',
//     success: function (type) {
//         tracking.trackEvent(type, "wxshare", "dfw2021"); 
//     },
//     cancel: function () {
        
//     }
// };
// $.getJSON("//160615fg0007.eintone.com/wx/jsticket?callback=?").done(function (res) {
//     if (res.success) {
//         weixin.init(res.result.ticket, res.result.appID, shareObj, false);
//     }
// });
/**
 * 数据管理
 */
export const appData = {};
export function pageInit(app, data={}){
    return new Vue({
        el: "#app",
        data: data,
        render:h=>h(app),
    });
}
