//用户登录
define([], function () {
    var Act = {
        Login: "QXT2004",  //登录
        MdUname: "QXT2005",//修改用户名
        QueryCert: "QXT2006",//查询是否验证
        MdPwd: 'QXT2007',//找回密码 1.获取手机验证码 2.输入验证码后，再重置.
    }
    
    var Req = {
        ADAPTER: "",//业务适配器	区分大小写		
        SIGNATURE: "",//签名
        MOBILE: "",//	手机号
        PASSWD: "",//	密码
        UNAME: "",//用户名	
        SERNO: "",//短信验证码
    }
    
    var Rsp = {
        ADAPTER: "", //业务适配器	区分大小写		
        STATE: "",//状态	0为成功，错误对应相应的错误代码		
        MSG: "",//错误信息	登陆失败时返回该消息	
        USERID: "",//当前用户ID
        CERTSTATE: "",//用户状态	N未认证，C认证中，Y已认证		
        THUMB: "",//用户头像URL
    }
    
    var RspCert = {
        ADAPTER: '',	//业务适配器	区分大小写		
        STATE: '',	//状态	0为成功，错误对应相应的错误代码		
        MSG: '',	//错误信息	登陆失败时返回该消息		
        USERID: '',	//当前用户ID			
        CERTSTATE: '',	//用户状态	N未认证，C认证中，Y已认证, X认证未通过		
        CERTDESC: '',	//认证未通过原因	认证状态为X时，此字段说明未通过认证原因		
    }

    return {
        Act: Act,
        Req: Req,
        Rsp: Rsp,
        RspCert: RspCert,
    }
});