//买方确认购买意向
define([], function () {
    var Act = "QXT2016";
    var Req = {
        ADAPTER: "QXT2016",//	业务适配器	区分大小写
        SIGNATURE:'',					
        USERID: '',//	用户ID			
        REQUIREID: '',//	找货ID			
        OFFERID: '',//	报价ID			
    }
    var Rsp = {
        ADAPTER: "",//	业务适配器	区分大小写		
        STATE: "",//	状态	0为成功，错误对应相应的错误代码	
        SCORE: "",	//本次报价获得积分
        LEVEL: "",//	信誉等级	本次报价得分后，升级则返回新的信誉等级，未升级返回0		
        MSG: "",//	错误信息	登陆失败时返回该消息	
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});