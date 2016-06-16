//获取推荐设区(V2.0 新增)
define([], function () {
    var Act = "QXT2032";
    var Req = {
        ADAPTER: "QXT2032",//	业务适配器	区分大小写		
        SIGNATURE:'',	//			
        USERID:"",//	卖方用户ID
    }
    var Rsp = {
        ADAPTER:'',//	业务适配器	区分大小写		
        STATE:'',//	状态	0为成功，错误对应相应的错误代码		
        MSG:'',//	错误信息	失败时返回该消息		
        DATAS:'',//				
        ID:'',//	社区ID			
        NAME:'',//	社区名称			
        ICON:'',//	图标URL路径			
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp
    }
});