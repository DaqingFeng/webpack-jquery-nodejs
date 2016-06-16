//获取买卖交易汇总
define([], function () {
    var Act = "QXT2033";
    var Req = {
            ADAPTER:"QXT2033",//	业务适配器	区分大小写		
            SIGNATURE:"",//				
            MOBILE:"",//	
            PASSWD:'',//				
    }
    var Rsp = {
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',//	错误信息	登陆失败时返回该消息		
        USERID:'',//	当前用户ID			
        CERTSTATE:'',//	用户状态	N未认证，C认证中，Y已认证		
        THUMB:'',//	用户头像URL			
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});