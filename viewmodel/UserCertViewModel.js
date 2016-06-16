define(["../utils/SysConfig",
    "../utils/SysUrl", 
    "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_UserCertificate"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_UserCertificate) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_UserCertificate.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_UserCertificate.Act);
            },
            //用户认证
            setter: function (company, licence, register, userid) {
                var self = this;
                self.module.CPNAME = company;//	公司名称
                self.module.YYZZ = licence;//	营业执照
                self.module.SWDJZ = register;//	税务登记证
                self.module.USERID = userid//	用户ID
            },
            userCertificate: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });