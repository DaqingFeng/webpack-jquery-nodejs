//获取短信验证码
define([], function () {
    var Act =
        {
            SMS: "QXT2001",
            Rules: "QXT2008",
        }
    var Req = {
        ADAPTER: '',//业务适配器	区分大小写		
        SIGNATURE: '',//签名
        MOBILE: '', //手机号
        OPCODE: '',//操作类型	A注册用户，Z其它	 | 获取卖家订阅规则	A：包含RULES，否则返回结果不包含RULES字段
    }
    var RspSMS = {
        ADAPTER: '', //业务适配器	区分大小写		
        STATE: '',//状态	0为成功，错误对应相应的错误代码		
        MSG: '',//错误信息	登陆失败时返回该消息		
        SMSCODE: '',//短信验证码
    }
    var RspRules = {
        ADAPTER: '',	//业务适配器	区分大小写		
        STATE: '',	//状态	0为成功，错误对应相应的错误代码		
        MSG: '',	//错误信息	登陆失败时返回该消息		
        SERIES: '',	//系列	统一使用Id，多个系列之间用英文逗号分割，如：系列ID1，系列ID2		
        MATERIAL: '',	//材质	统一使用Id, 多个材质之间用英文逗号分割，如：材质ID1,材质ID2		
        SURFACE: '',	//表面	统一使用Id, 多个表面之间用英文逗号分割，如：表面ID1,表面ID2		
        RULES: {},	//系列列表（Array）	访问路径：JSON.RULES		
        // ID:{},	//系列ID	访问路径：JSON.RULES[n].ID		
        // NAME:{},	//系列名称	访问路径：JSON.RULES[n].NAME		
        // MATERIALS:{},	//系列下级材质列表（Array）	访问路径：JSON.RULES[n].MATERIALS		
        // ID:{},	//材质列表	访问路径：JSON.RULES[n].MATERIALS[i].ID		
        // NAME:{},	//材质名称	访问路径：JSON.RULES[n].MATERIALS[i].NAME		

        // SURFACES:{},	//系列下级表面列表（Array）	访问路径：JSON.RULES[n].SURFACE		
        // ID:{},	//表面ID	访问路径：JSON.RULES[n].SURFACE[i].ID		
        // NAME:{},	//表面名称	访问路径：JSON.RULES[n].SURFACE[i].NAME		
        // MATERIAL_ALIAS:{},	//材质别名			
        // SURFACE_ALIAS:{},	//表面别名		
    }
    var RspRulesDetail = {
        ID: "",	//材质列表	访问路径：JSON.RULES[n].MATERIALS[i].ID		
        NAME: "",	//材质名称	访问路径：JSON.RULES[n].MATERIALS[i].NAME	
    }
    return {
        Act: Act,
        Req: Req,
        Rsp: RspSMS,
        RspRules: RspRules,
        RspRulesDetail: RspRulesDetail,
    }
});