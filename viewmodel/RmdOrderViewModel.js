//按找货信息推荐商城货源
define(["../utils/SysConfig",
    "../utils/SysUrl",
    "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_RecommandOrder"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_RecommandOrder) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_RecommandOrder.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_RecommandOrder.Act);
            },
            setter: function (userid, requireid) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.REQUIREID = requireid;//需求ID
            },
            getRecommandOrder: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });