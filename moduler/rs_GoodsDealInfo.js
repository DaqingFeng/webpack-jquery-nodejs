//获取（买\卖）成交信息
define([], function () {
    var Act = "QXT2017";
    var Req = {
        ADAPTER: "QXT2017",//	业务适配器	区分大小写		
        SIGNATURE: '',	//			
        USERID: '',	//	买方用户ID			
        FLAG: '',//	买卖标识	B 买  S 卖		
        PINDEX: '',//	页码	数字		
        PSIZE: '',//	页大小	数字		
    }
    var Rsp = {
        ADAPTER: "",//	业务适配器			
        STATE: "",//	状态	0为成功，错误对应相应的错误代码		
        MSG: "",//		错误信息	登陆失败时返回该消息		
        DATAS: "",//					
        CONTRACTID: "",//		合同ID			
        REQUIREID: "",//		找货信息ID			
        BUSERID: "",//		买方ID			
        BCOMPANY: "",//		买方公司名称			
        BCONTACT: "",//		买方联系人			
        BUSERTEL: "",//		买方联系电话			
        BCREDIT: "",//		买家信用			
        SERIESID: "",//		系列ID			
        SERIES: "",//		找货系列			
        MATERIAL: "",//		找货材质	对于管材、棒材，此字段也代表品种		
        SURFACE: "",//		找货表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY: "",//		交货地			
        DETAIL: "",//		找货详情			
        OFFERID: "",//		报价信息ID			
        SUSERID: "",//		卖方用户ID			
        SCONTACT: "",//		卖方联系人			
        SUSERTEL: "",//		卖方联系电话			
        SCOMPANY: "",//		卖方公司名称			
        SCREDIT: "",//		卖家信用			
        PRICE: "",//		报价			
        NOTE: "",//		报价备注			
        DEALTIME: "",//		成交时间			
        BCOMMENTED: "",//		买方是否评价	Y 是 N否		
        SCOMMENTED: "",//		卖方是否评价	Y 是 N否		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});