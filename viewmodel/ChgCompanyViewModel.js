
 //修改公司名称
define(["../utils/SysConfig",
    "../utils/SysUrl",
    "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_ChgCompany"],
    function (SysConfig, SysUrl, CreateObject,ModuleBase, rs_ChgCompany) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_ChgCompany.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_ChgCompany.Act);
            },
            setter: function (userid,company) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.COMPANY=company;//公司名称
            },
            changeCompany: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });