//获取找货信息列表
define([], function () {
    var Act = "QXT2011";
    var Req = {
        ADAPTER: "QXT2011",//		业务适配器	区分大小写		
        SIGNATURE: '',//				
        USERID: '',//	用户ID			
        STATE: '',//	状态	"A报价中 B已过期 C已确认, D已撤销 
        //(查询当前用户(GLANCE=B)发布的找货信息时，可同时提供多个状态进行组合查询, 如: ""B,D"")"		
        PINDEX: 1,//	页码	数字		
        PSIZE: 6,//	页大小	数字		
        GLANCE: '',//	随便看看	"A随便看看（不含管材和棒材），AA随便看看（全部）,
        //B查看USERID当前用户发布的找货信息，C查看USERID订阅的找货信息，"		       
    }
    var Rsp = {
        ADAPTER: '',//	业务适配器	区分大小写		
        STATE: '',//	状态	0为成功，错误对应相应的错误代码		
        MSG: '',//	错误信息	登陆失败时返回该消息		
        DATAS: '',//				
        REQUIREID: '',//	找货信息ID			
        SERIESID: '',//	系列ID			
        SERIES: '',//	系列			
        MATERIAL: '',//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE: '',//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY: '',//	交货地			
        DETAIL: '',//	求购明细			
        STARTTIME: '',//	报价时间			
        ENDTIME: '',//	截止时间			
        BCOMPANY: '',//	买方公司名称			
        BCREDIT: '',//	买方信用			
        PUSHCOUNT: '',//	推送数量			
        OFFERCOUNT: '',//	报价数量			
        IGNORECOUNT: '',//忽略数量			
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});