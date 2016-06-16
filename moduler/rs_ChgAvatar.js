//修改公司名称
define([], function () {
    var Act = "QXT2029";
    var Req = {
        ADAPTER: "QXT2029",//	业务适配器	区分大小写		
        SIGNATURE:'',	//			
        USERID:'',//	用户ID			
        THUMB:'',//	用户头像	图片文件		
    }
    var Rsp = {
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',//	错误信息	登陆失败时返回该消息		
        THUMB:'',//	用户头像地址			

    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});