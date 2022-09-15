let origin = window.location.origin;
import query from "vendor/utils/getUrlParms";
import Api from "api/index";
import moment from "moment";
import addressDatas from "api/address.json";
import AppData from "./AppData";
// 是否微信访问
export const isWeiXin = function() {
    var ua = window.navigator.userAgent.toLowerCase();
    console.log('ua', ua);
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

// 求百分比
export const getPercent = function(num, total) {
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? 0 : (Math.round(num / total * 10000) / 100.00);
}

// 获取地理位置
export const getCurrentPosition = function() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            let coords;
            /* 地理位置服务可用 */
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                coords = position.coords;
                getCurrentPositionInfo(coords, resolve);
            });
            if (!coords) {
                getCurrentPositionInfo({
                    latitude: 39.916152,
                    longitude: 116.403406,
                }, resolve);
            }
        } else {
            getCurrentPositionInfo({
                latitude: 39.916152,
                longitude: 116.403406,
            }, resolve);
        }
    });
}

function getCurrentPositionInfo(coords, resolve) {
    $.ajax({
        type: "get",
        dataType: 'jsonp',
        data: {
            location: coords.latitude + ',' + coords.longitude,
            key: vvueApp.config.mapTxKey,
            output: 'jsonp',
            get_poi: 0,
        },
        jsonp: "callback",
        jsonpCallback: "QQmap",
        url: "http://apis.map.qq.com/ws/geocoder/v1/",
    }).done((res) => {
        res = res.result || {};
        let ad_info = res.address_component || {};
        ad_info.location = res.location || {};
        ad_info.formatted_addresses = res.formatted_addresses || {};
        ad_info.address = res.address || '';
        resolve(ad_info);
    })
}

// 从 canvas 提取图片 image  
export const convertCanvasToImage = function(canvas) {
    return canvas.toDataURL("image/jpeg", 1);
}

// 生成json文件
export const saveJSON = function(data, filename) {
    if (!data) {
        alert('保存的数据为空');
        return;
    }
    if (!filename)
        filename = 'json.json'
    if (typeof data === 'object') {
        data = JSON.stringify(data, undefined, 4)
        console.log('----', data)
    }
    var blob = new Blob([data], { type: 'text/json' }),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a')
    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}
// base64 转 blob
export const dataURLtoBlob = function(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}

// 页面跳转
export const openLink = function(link, isReplace) {
    if (window.location.origin.indexOf('localhost') != -1) {
        window.location.href = link;
        return;
    }
    let parameter = link.split('?')[1] || '';
    if (link.indexOf('index.html') != -1) {
        link = vueApp.config.serverPath + 'monopoly2021/game61/index' + (parameter ? '?' + parameter : '');
    }
    if (isReplace) {
        location.replace(link);
    } else {
        window.location.href = link;
    }
}
export const getPathUrl = function(link) {
    if (!link) return link;
    if (link.indexOf('http') != -1) return link;
    return vueApp.config.ossPath + link;
}
// 打开一张图片
export const openImageUrl = function(link) {
    if (!link) return link;
    link = getPathUrl(link);
    console.log('link', link)
    wx.previewImage({
        current: link, // 当前显示图片的http链接
        urls: [link] // 需要预览的图片http链接列表
    });
}
// 防抖
export const debounce = function(fn, wait) {
    var timer = null;
    return function() {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}
// 设置等级
export const botanyPerGrade = function(per) {
    per = per * 100;
    if (per >= 99) return 3;
    if (per >= 66) return 2;
    if (per >= 33) return 1;
    return 0;
}
export const isIOS = function() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
        return true;
    }
    return false;
}
export const pageChangeShowHide = function() {
    let hidden, state, visibilityChange;
    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        state = 'visibilityState';
        visibilityChange = 'visibilitychange';
    } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        state = 'mozvisibilityState';
        visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        state = 'msvisibilityState';
        visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        state = 'webkitvisibilityState';
        visibilityChange = 'webkitvisibilitychange';
    }
    return { hidden, state, visibilityChange }
}