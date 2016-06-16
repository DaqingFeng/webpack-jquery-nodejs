define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_UserValidate"],
    function (SysConfig,CreateObject, SysUrl, ModuleBase, rs_UserValidate) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_UserValidate.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_UserValidate.Act);
            },
            //用户认证
            setter: function (mobile, password) {
                var self = this;
                self.module.MOBILE = mobile;//	电话号码
                self.module.PASSWD = password;//	密码
            },
            userValidate: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });