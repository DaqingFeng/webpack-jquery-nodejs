define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_RulesInfo"],
    function (SysConfig,SysUrl,CreateObject,  ModuleBase, rs_SmsCode_Rules) {
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
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_RulesInfo.Act);
            },
            //卖家订阅
            setter: function (userid, serials, material, surface) {
                var self = this;
                self.module.USERID = mobile;
                self.module.SERIES = serials;
                self.module.MATERIAL = material;
                self.module.SURFACE = surface;
                // 统一使用Id，多个系列之间用英文逗号分割，如：系列ID1，系列ID2		
                // 统一使用Id, 多个材质之间用英文逗号分割，如：材质ID1,材质ID2		
                // 统一使用Id, 多个表面之间用英文逗号分割，如：表面ID1,表面ID2		
            },
            //获取用户订阅规则
            setRules: function (callfunc) {
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });