//获取当前用户报价信息
define([], function () {
    var Act ={
         Quote:"QXT2023",
         QuoteBySerial:"QXT2027",
    }
    
    var Req = {
        ADAPTER: "",//	业务适配器	区分大小写		
        SIGNATURE: "",//			
        USERID: "",//			卖方用户ID					
        STATE:'',//	报价状态	A报价中 B已过期 C已成交，注意：查询已成交报价时此接口不会返回合同Id，如需合同ID字段，请使用QXT2017+QXT2020查询		
        SERIES:'',//	查询的系列ID	选填字段，当为空时表示全部系列，多个系列用逗号分隔, 例：“系列1ID,系列2ID”		
        PINDEX:'',//	页码	数字		
        PSIZE:'',//	页大小	数字		

    }
    var Rsp = {
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',//	错误信息	登陆失败时返回该消息		
        DATAS:'',//				
        REQUIREID:'',//	找货ID			
        REQDATE:'',//	找货时间			
        ENDTIME:'',//	找货失效时间			
        REQSTATE:'',//	找货状态	A报价中 B已过期 C已确认		
        BUSERID:'',//	买家用户ID			
        BCOMPANY:'',//	买方公司名称			
        BMOBILE:'',//	买方联系电话			
        BCONTACT:'',//	买方联系人			
        BCREDIT:'',//	买方信用			
        SERIES:'',//	系列			
        SERIESID:'',//	系列ID			
        MATERIAL:'',//	材质	对于管材、棒材，此字段也代表品种		
        SURFACE:'',//	表面	对于管材、棒材，此字段代表找货发布的“材质要求”		
        DELIVERY:'',//	交货地			
        DETAIL:'',//	找货详情			
        REQCOUNT:'',//	买方找货次数			
        DEALCOUNT:'',//	买方成交次数			
        OFFERID:'',//	卖家报价ID			
        PRICE:'',//	卖家报价			
        PRICEDESC:'',//	卖家报价详情			
        OFFERDATE:'',//	卖家报价时间			
        OFFERS:'',//	报价数量			
        MAXPRICE:'',//	最高价			
        MINPRICE:'',//	最低价			
        DEALPRICE:'',//	中标报价	 仅当找货状态为C时，此字段有意义，  找货状态为 B 时，表示流标		
        DEALPRICEDESC:'',//	中标报价备注	 仅当找货状态为C时，此字段有意义，  找货状态为 B 时，表示流标		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});