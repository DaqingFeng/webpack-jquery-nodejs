//获取买卖交易汇总
define([], function () {
    var Act = "QXT2010";
    var Req = {
            ADAPTER:"QXT2010",//	业务适配器	区分大小写		
            SIGNATURE:"",//				
            USERID:"",//					
    }
    var Rsp = {
        ADAPTER:"",//	业务适配器	区分大小写		
        STATE:"",//	状态	0为成功，错误对应相应的错误代码		
        MSG:"",//	错误信息	登陆失败时返回该消息		
        OFFERING:"",//	报价中	B		
        CONFIRMED:"",//	已确认	B		
        EXPIRED:"",//	已过期	B		
        CANCELED:"",//	已撤销	B		
        BIDDING:"",//	抢单中	S		
        BIDDED:"",//	已抢单	S		
        VICTORY:"",//	抢成功	S		
        LOSE:"",//	抢失败	S		 
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});