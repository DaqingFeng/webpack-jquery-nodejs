//撤销 删除找货
define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_Dis_DelRequire"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_Dis_DelRequire) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_Dis_DelRequire.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名

            },
            setter: function (userid, requireid) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.REQUIREID = requireid; //合同ID	
            },
            dimissRequire: function (callfunc) {
                //撤销找货信息
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_Dis_DelRequire.Act.Dismiss);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            deleteRequire: function (callfunc)//删除找货
            {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_Dis_DelRequire.Act.Delete);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });