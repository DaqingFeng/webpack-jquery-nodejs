//忽略找货信息
define([], function () {
    var Act = "QXT2019";
    var Req = {
        ADAPTER: "QXT2019",//	业务适配器	区分大小写		
        SIGNATURE:'',	//			
        USERID:"",//	卖方用户ID
        REQUIREID:"",//	找货ID
    }
    var Rsp = {
        ADAPTER:'',	//	业务适配器	区分大小写		
        STATE:'',	//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',	//	错误信息	找货失败时返回该消息		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});