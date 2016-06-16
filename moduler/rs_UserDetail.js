//读取用户信息
define([], function () {
    var Act = "QXT2021";
    var Req = {
        ADAPTER: "QXT2021",//	业务适配器	区分大小写	
        SIGNATURE: '',
        USERID: null,//	用户ID				
    }
    var Rsp = {
        ADAPTER: "",	//业务适配器	区分大小写		
        STATE: "",	//	状态	0为成功，错误对应相应的错误代码		
        MSG: "",	//	错误信息	登陆失败时返回该消息		
        USERID: "",	//	当前用户ID			
        MOBILE: "",	//	用户手机			
        CONTACT: "",	//	联系人			
        COMPANY: "",	//	公司名称			
        BCREDIT: "",	//	买家信用			
        SCREDIT: "",	//	卖家信用			
        BSCORE: "",	//	买家信誉分			
        SSCORE: "",	//	卖空信誉分			
        GOTBSCORE: "",	//	今日买家信誉加分			
        GOTSSCORE: "",	//	今日卖家信誉加分			
        CERTSTATE: "",	//	用户状态	N未认证，C认证中，Y已认证, X认证未通过		
        CERTDESC: "",	//	认证未通过原因	认证状态为X时，此字段说明未通过认证原因		
        THUMB: "",	//	用户头像URL			
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});