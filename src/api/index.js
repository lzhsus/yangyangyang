import query from "vendor/utils/getUrlParms";
import Loading from "vendor/ui/loading";

module.exports = {   
    //用户信息
    monopoly202112(data,opt={}){
        return request('monopoly2021/api/game61/info', data,Object.assign({type:'POST',isLoading:false }, opt));
    },
}
function request(url, data={}, opt={}) {
    var dtd = $.Deferred();
    if( opt.isLoading ){
        Loading.show();
    }
    let ajaxHeader = {
        headers: {
            "Accept": "application/json; charset=utf-8",
            "appid": appid,
            "llbtoken": llbtoken,
            "authorization": token?'Bearer ' +token:'',
        },
        url: url.indexOf('http')!=-1?url:vueApp.config.serverPath+url,
        type: opt.type||"POST",
        data: data,        
    }
    console.log('data',data);
    $.ajax(ajaxHeader).done((res,status,xhr) => {
        dtd.resolve(res); 
    }).fail(res => {
        Loading.hide();  
        dtd.resolve({success:false,msg:'网络错误请重试！'});
        console.log('res',res);
    }).always((res) => {
        if( opt.isLoading ){
            Loading.hide();  
        }
    });
    return dtd;
}