//买方找货
define([], function () {
    var Act = "QXT2014";
    var Req = {
        ADAPTER: "QXT2014",//	业务适配器	区分大小写		
        SIGNATURE:'',	//			
        USERID:'',	//	买方用户ID			
        SERIES:'',	//	系列			
        MATERIAL:'',	//	材质			
        SURFACE:'',	//	表面			
        EXPIRES:'',	//	过期时长	过期分钟数		
        DETAIL:'',	//	找货信息详情			
        LOCATION:'',	//	客户位置	"纬度,经度,[省份,城市,区县, ADDR]"，经纬度必须，地址可选		
        EXTRA:'',	//	找货扩展信息	当找货为管材、棒材时，此字段表示“材质要求”,2\3\4系板材忽略此字段	
        DELIVERY:'',	//	交货地	

    }
    var Rsp = {
        ADAPTER:'',	//	业务适配器	区分大小写		
        STATE:'',	//	状态	0为成功，错误对应相应的错误代码		
        SCORE:'',	//	本次找货获得积分			
        LEVEL:'',	//	信誉等级	本次找货得分后，升级则返回新的信誉等级，未升级返回0		
        REQUIREID:'',	//	找货信息ID	本次找货的信息ID		
        MSG:'',	//	错误信息	找货失败时返回该消息		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});