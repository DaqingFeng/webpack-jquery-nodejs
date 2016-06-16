//用户注册
define([], function () {
    var Act = "QXT2002";
    var Req = {
        ADAPTER: 'QXT2002',//业务适配器	区分大小写		
        SIGNATURE: '',//签名
        MOBILE: '', //手机号
        SERNO: '',//	短信验证码
        PASSWD: '',//	密码
    }
    var Rsp = {
        ADAPTER: '', //业务适配器	区分大小写		
        STATE: '',//状态	0为成功，错误对应相应的错误代码		
        MSG: '',//错误信息	登陆失败时返回该消息		
        USERID: '',//用户ID
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});