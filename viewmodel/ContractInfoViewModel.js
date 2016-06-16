//合同详情
define(["../utils/SysConfig",
    "../utils/SysUrl","../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_ContractInfo"],
    function (SysConfig,SysUrl,CreateObject,  ModuleBase, rs_ContractInfo) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_ContractInfo.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_ContractInfo.Act);
            },
            setter: function (userid,contractid) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.CRTID=contractid; //合同ID	
            },
            getContractInfo: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });