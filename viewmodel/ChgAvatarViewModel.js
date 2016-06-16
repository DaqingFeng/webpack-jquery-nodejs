//修改头像
define(["../utils/SysConfig",
    "../utils/SysUrl",
    "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_ChgAvatar"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_ChgAvatar) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_ChgAvatar.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_ChgAvatar.Act);
            },
            setter: function (userid,thumb) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.THUMB=thumb;//图像
            },
            changeAvatar: function (callfunc) {
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });