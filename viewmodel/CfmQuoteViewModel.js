//买方确认购买意向
define(["../utils/SysConfig",
    "../utils/SysUrl","../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_ConfirmQuoted"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_ConfirmQuoted) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }
        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_ConfirmQuoted.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_ConfirmQuoted.Act);
            },
            setter: function (userid,requireid,offerid) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.REQUIREID=requireid; //发货Id
                self.module.OFFERID=offerid;//报价Id
         },
            confirmQuoted: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });