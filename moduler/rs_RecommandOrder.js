//按找货信息推荐商城货源
define([], function () {
    var Act = "QXT3002";
    var Req = {
        ADAPTER: "QXT3002",//	业务适配器	区分大小写			
        SIGNATURE: '',	//设备签名	可为空		
        USERID: '',	//当前用户ID	可为空		
        REQUIREID: '',	//找货信息ID			
    }
    var Rsp = {
        MATERIAL: '',//	材质			
        SURFACE: '',//	表面			
        THICK: '',//	厚度			
        REFTHICK: '',//	参厚			
        WIDTH: '',//	宽度			
        FACTORY: '',//	生产厂家			
        STOCK: '',//	仓库（所属区域）			
        BORDER: '',//	边部			
        LEVEL: '',//	等级			
        PACK: '',//	包装			
        CALCULATE: '',//	计算方式			
        STANDARD: '',//	执行标准			
        WEIGHT: '',//	重量（吨）			
        PRICE: '',//	价格			
        PRICETYPE: '',//	价格类型	A 商城价, B订货价.		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});