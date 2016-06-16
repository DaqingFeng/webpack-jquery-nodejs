//卖方报价/修改报价
define([], function () {
    var Act = "QXT2015";
    var Req = {
        ADAPTER: "QXT2015",//	业务适配器	区分大小写		
        SIGNATURE: "",//			
        USERID: "",//			卖方用户ID			
        REQUIREID: "",//			找货ID			
        OFFERID: "",//  报价ID 新的报价，此字段留空，如果是修改报价，此字段内填入原报价ID		
        PRICE: "",//		 报价			
        EXPIRES: "",//	 过期时长	过期分钟数		
        NOTE: "",//			备注			
        LOCATION: "",// 客户位置	"纬度,经度,[省份,城市,区县, ADDR]"，经纬度必须，地址可选		
    }
    var Rsp = {
        ADAPTER: "",//	业务适配器	区分大小写		
        STATE: "",//	状态	0为成功，错误对应相应的错误代码	
        SCORE:"",	//本次报价获得积分
        LEVEL:"",//	信誉等级	本次报价得分后，升级则返回新的信誉等级，未升级返回0		
        MSG: "",//	错误信息	登陆失败时返回该消息	
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});