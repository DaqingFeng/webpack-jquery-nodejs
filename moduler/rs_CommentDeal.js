//评价
define([], function () {
    var Act = "QXT2018";
    var Req = {
        ADAPTER: "QXT2018",//	业务适配器	区分大小写		
        SIGNATURE:'',	//			
        USERID:'',//	用户ID			
        CONTRACTID:'',//	合同ID			
        SCORE:'',//	评分			
        NOTE:'',//	备注			
        FLAG:'',//	买卖标识	B 买  S 卖  （主动）		
    }
    var Rsp = {
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//		状态	0为成功，错误对应相应的错误代码		
        SCORE:'',//		本次评价获得积分			
        LEVEL:'',//		信誉等级	本次评价得分后，升级则返回新的信誉等级，未升级返回0		
        MSG:'',//		错误信息	登陆失败时返回该消息		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});