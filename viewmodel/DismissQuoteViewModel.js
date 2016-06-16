//撤销报价信息
define(["../utils/SysConfig",
    "../utils/SysUrl","../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_DismissQuote"],
    function (SysConfig,SysUrl,CreateObject, ModuleBase, rs_DismissQuote) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_DismissQuote.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_DismissQuote.Act);
            },
            setter: function (userid,offerid) {
                var self = this;
                self.module.USERID = userid;//	用户Id
                self.module.OFFERID=offerid; //报价Id	
            },
            quotedDimmiss: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });