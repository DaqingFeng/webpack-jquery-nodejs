//获取推荐设区(V2.0 新增)
define(["../utils/SysConfig",
    "../utils/SysUrl",
     "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_RecommandBBS"],
    function (SysConfig,SysUrl, CreateObject, ModuleBase, rs_RecommandBBS) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_RecommandBBS.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_RecommandBBS.Act);
            },
            setter: function (userid, thumb) {
                var self = this;
                self.module.USERID = userid;//	用户ID
            },
            getRecommandBBS: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });