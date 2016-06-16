
define([], function () {
    var Act = {
        Quoted: "QXT2012",//获取当前找货的报价信息
        Required: "QXT2013", //获取找货信息详情(抢单详情)
        RequireBySerial:'QXT2027', //按系列获取报价中的找货信息列表(V2.0 新增)
        RequireWithQuoting:'QXT2030',//获取用户发布的报价中的找货信息列表（附带报价信息）
    };
    var Req = {
        ADAPTER: "",//		业务适配器	区分大小写		
        SIGNATURE: '',//				
        USERID: '',//	用户ID			
        REQUIREID: '',//找货信息ID
        //(查询当前用户(GLANCE=B)发布的找货信息时，可同时提供多个状态进行组合查询, 如: ""B,D"")"		
        PINDEX: 1,//	页码	数字		
        PSIZE: 6,//	页大小	数字
        SERIES:'',//	查询的系列ID	选填字段，当为空时表示全部系列，多个系列用逗号分隔, 例：“系列1ID,系列2ID”		
		     
    }
    //报价详情
    var Rsp = {
        ADAPTER: '',//	业务适配器			
        STATE: '',//	状态	0为成功，错误对应相应的错误代码		
        MSG: '',//	错误信息	登陆失败时返回该消息		
        REQUIREID: '',//	找货信息ID			
        SERIESID: '',//	系列ID			
        SERIES: '',//	系列			
        MATERIAL: '',//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE: '',//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY: '',//	交货地			
        DETAIL: '',//	找货详情			
        BUSERID: '',//	买方用户ID			
        BCOMPANY: '',//	买方公司名称			
        BCREDIT: '',//	买方信用			
        PUSHCOUNT: '',//	推送数量			
        OFFERCOUNT: '',//	报价数量			
        IGNORECOUNT: '',//	忽略数量			
        DATAS: '',//				
        OFFERID: '',//	卖方报价信息ID			
        PRICE: '',//	报价			
        NOTE: '',//	备注			
        SUSERID: '',//	卖方用户ID			
        SCONTACT: '',//	卖方联系人			
        SUSERTEL: '',//	卖方联系电话			
        SCOMPANY: '',//	卖方公司名称			
        SCREDIT: '',//	卖家信用			
        SOFFERCOUNT: '',//	报价总数	当前卖方历史报价总数		
        SDEALCOUNT: '',//	成交总数	当前卖方历史成交总数		
        OFFERTIME: '',//	报价时间			
        EXPIRESIN: '',//	报价截止时间			
    };
    //找货详情
    var RspRequire={
        ADAPTER:"",//	业务适配器			
        STATE:"",//	状态	0为成功，错误对应相应的错误代码		
        MSG:"",//	错误信息	操作失败时返回该消息		
        REQUIREID:"",//	找货信息ID			
        REQSTATUS:"",//	找货状态	A报价中 B已过期 C已成交 D已撤销		
        SERIESID:"",//	系列ID			
        SERIES:"",//	系列			
        MATERIAL:"",//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE:"",//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY:"",//	交货地			
        DETAIL:"",//	找货详情			
        PUBDATE:"",//	发布时间			
        ENDDATE:"",//	截止时间			
        BUSERID:"",//	买方用户ID			
        BCOMPANY:"",//	买方公司名称			
        BCREDIT:"",//	买方信用			
        REQCOUNT:"",//	买方发布找货次数			
        DEALCOUNT:"",//	买方成交次数			
        OFFERS:"",//	已有报价数量			
        MAXPRICE:"",//	最高报价			
        MINPRICE:"",//	最低报价			
    }
    
    var RepRequireSeries={
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',//	错误信息	登陆失败时返回该消息		
        DATAS:'',//				
        REQUIREID:'',//	找货信息ID			
        SERIESID:'',//	系列ID			
        SERIES:'',//	系列			
        MATERIAL:'',//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE:'',//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY:'',//	交货地			
        DETAIL:'',//	求购明细			
        STARTTIME:'',//	报价时间			
        ENDTIME:'',//	截止时间			
        BUSERID:'',//	买方用户ID			
        BCOMPANY:'',//	买方公司名称			
        BCREDIT:'',//	买方信用			
        PUSHCOUNT:'',//	推送数量			
        OFFERCOUNT:'',//	报价数量			
        IGNORECOUNT:'',//	忽略数量			
    }
    
    var RepRequireWithQuoting={
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',//	错误信息	登陆失败时返回该消息		
        DATAS:'',//				
        REQUIREID:'',//	找货信息ID			
        SERIESID:'',//	系列ID			
        SERIES:'',//	系列			
        MATERIAL:'',//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE:'',//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY:'',//	交货地			
        DETAIL:'',//	求购明细			
        STARTTIME:'',//	报价时间			
        ENDTIME:'',//	截止时间			
        BCOMPANY:'',//	买方公司名称			
        BCREDIT:'',//	买方信用			
        PUSHCOUNT:'',//	推送数量			
        OFFERCOUNT:'',//	报价数量			
        IGNORECOUNT:'',//	忽略数量			
        OFFERS:'',//	报价列表			
        OFFERID:'',//	卖方报价信息ID			
        PRICE:'',//	报价			
        NOTE:'',//	备注			
        SUSERID:'',//	卖方用户ID			
        SCONTACT:'',//	卖方联系人			
        SUSERTEL:'',//	卖方联系电话			
        SCOMPANY:'',//	卖方公司名称			
        SCREDIT:'',//	卖家信用			
        SOFFERCOUNT:'',//	报价总数	当前卖方历史报价总数		
        SDEALCOUNT:'',//	成交总数	当前卖方历史成交总数		
        OFFERTIME:'',//	报价时间			
        EXPIRESIN:'',//	报价截止时间			
    }
    
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp,
        RspRequire:RspRequire,
        RepRequireSeries:RepRequireSeries,
        RepRequireWithQuoting:RepRequireWithQuoting
    }
});