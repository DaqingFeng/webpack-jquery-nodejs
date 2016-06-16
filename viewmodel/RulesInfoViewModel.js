define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_RulesInfo"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_RulesInfo) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_RulesInfo.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
            },
            //用户ID  型号  材质    表面
            setter: function (userid, series,material,surface) {
                var self = this;
                self.module.USERID = userid;
                self.module.SERIES = series;
                self.module.MATERIAL=material;
                self.module.SURFACE=surface;
            },
            //发送规则
            setRulesInfo: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_RulesInfo.Act);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
        };
        return Control;
    });