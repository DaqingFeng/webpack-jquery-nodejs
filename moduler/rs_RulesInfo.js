//用户规则
define([], function () {
    var Act = "QXT2009";
    var Req = {
            ADAPTER:"QXT2009",//	业务适配器	区分大小写		
            SIGNATURE:"",//				
            USERID:"",//				
            SERIES:"",//	系列	统一使用Id，多个系列之间用英文逗号分割，如：系列ID1，系列ID2		
            MATERIAL:"",//	材质	统一使用Id, 多个材质之间用英文逗号分割，如：材质ID1,材质ID2		
            SURFACE:"",//	表面	统一使用Id, 多个表面之间用英文逗号分割，如：表面ID1,表面ID2		
    }
    var Rsp = {
        ADAPTER:"",//	业务适配器	区分大小写		
        STATE:"",//	状态	0为成功，错误对应相应的错误代码		
        MSG:"",//	错误信息	登陆失败时返回该消息		
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});