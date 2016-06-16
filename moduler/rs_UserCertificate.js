//用户认证
define([], function () {
    var Act = "QXT2003";
    var Req = {
        ADAPTER: 'QXT2003',//业务适配器	区分大小写		
        SIGNATURE: '',//签名
        CPNAME: '',//	公司名称
        YYZZ: '',//	营业执照
        SWDJZ: '',//	税务登记证
        USERID: '',//	用户ID		
    }
    var Rsp = {
        ADAPTER: "", //业务适配器	区分大小写		
        STATE: "",//状态	0为成功，错误对应相应的错误代码		
        MSG: "",//错误信息	登陆失败时返回该消息		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});