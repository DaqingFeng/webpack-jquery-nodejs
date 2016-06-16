//合同详情信息
define([], function () {
    var Act = "QXT2020";
    var Req = {
        ADAPTER: "QXT2020",//	业务适配器	区分大小写		
        SIGNATURE: '',	//			
        USERID: '',//	用户ID			
        CONTRACTID: '',//	合同ID			
    }
    var Rsp = {
        ADAPTER: '',//	业务适配器	区分大小写		
        STATE: '',//	状态	0为成功，错误对应相应的错误代码		
        MSG: '',//	错误信息	登陆失败时返回该消息		
        CRTID: '',//	合同ID			
        OFFERS: '',//	报价数量			
        MAXPRICE: '',//	最高报价			
        MINPRICE: '',//	最低报价			
        DEALPRICE: '',//	中标价格			
        PRICEDESC: '',//	中标价格说明			
        OFFERDATE: '',//	中标价格报价时间			
        DEALTIME: '',//	成交时间			
        BCOMMENTED: '',//	买方是否评价	Y 是 N否		
        SCOMMENTED: '',//	卖方是否评价	Y 是 N否		
        REQUIREID: '',//	找货信息ID			
        SERIESID: '',//	系列ID			
        SERIES: '',//	系列			
        MATERIAL: '',//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE: '',//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY: '',//	交货地			
        DETAIL: '',//	找货详情			
        REQDATE: '',//	发布找货时间			
        ENDREQDATE: '',//	找货截止时间			
        BUSERID: '',//	买方用户ID			
        BCOMPANY: '',//	买方公司名称			
        BCONTACT: '',//	买方联系人			
        BTEL: '',//	买方联系电话			
        BCREDIT: '',//	买方信用			
        BREQCOUNT: '',//	买方发布找货次数			
        BDEALCOUNT: '',//	买方成交次数			
        OFFERID: '',//	中标报价ID			
        SUSERID: '',//	卖方用户			
        SCOMPANY: '',//	卖方公司名称			
        SCONTACT: '',//	卖方联系人			
        STEL: '',//	卖方联系电话			
        SCREDIT: '',//	卖方信用			
        SOFFERCOUNT: '',//	卖方报价次数			
        SDEALCOUNT: '',//	卖方成交次数			
        SCORES: '',//	未提醒的相关当分记录			
        SCORE: '',//	得分			
        DESC: '',//	说明			
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});