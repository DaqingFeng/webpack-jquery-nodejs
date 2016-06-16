
//忽略找货信息
define(["../utils/SysConfig",
    "../utils/SysUrl","../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_IgnoreRequire"],
    function (SysConfig, SysUrl, CreateObject,ModuleBase, rs_IgnoreRequire) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_IgnoreRequire.Req;
                self.module.SIGNATURE=window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_IgnoreRequire.Act);
            },
            //用户认证
            setter: function (userid, requireid) {
                var self = this;
                 self.module.USERID = userid//	用户ID	
                 self.module.REQUIREID=requireid;//找货ID
            },
            ignoreRequire: function (callfunc) {
                var self = this;
                 self.Data = this.module;
                 self.CallBack = callfunc;
                 self.Ajax();
            }
        };
        return Control;
    });