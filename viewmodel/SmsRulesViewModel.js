define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_SmsCode_Rules"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_SmsCode_Rules) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_SmsCode_Rules.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
            },
            //用户订阅   A注册用户，Z其它     |用户订阅 A：包含RULES，否则返回结果不包含RULES字段
            setter: function (userid, opcode) {
                var self = this;
                self.module.USERID = userid;
                self.module.OPCODE = opcode;
            },
            //用户认证   A注册用户，Z其它     |用户订阅 A：包含RULES，否则返回结果不包含RULES字段
            setterSms: function (mobile, opcode) {
                var self = this;
                self.module.MOBILE = mobile;
                self.module.OPCODE = opcode;
            },
            //获取验证码
            getSMSCode: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_SmsCode_Rules.Act.SMS);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //获取用户订阅规则
            getRules: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_SmsCode_Rules.Act.Rules);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });