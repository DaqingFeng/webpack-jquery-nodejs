define(["../utils/SysConfig", "../utils/SysUrl", "../utils/CreateObject", "../viewmodel/ModuleBase", "../moduler/rs_UserInfo"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_UserInfo) {

        function Control() {
            //Extend base Prototype
            ModuleBase.MBase.call(this);
            //Extend base method
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_UserInfo.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;
            },
            setter: function (mobile, password, username, smscode) {
                var self = this;
                self.module.MOBILE = mobile;
                self.module.PASSWD = password;
                if (typeof username !== "undefined")//修改用户名
                    self.module.UNAME = username;
                if (typeof smscode !== "undefined") //修改密码
                    self.module.SERNO = smscode;
            },
            settercert: function (userid) {
                var self = this;
                self.module.USERID = userid;
            },
            //登录
            loginSys: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_UserInfo.Act.Login);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //修改用户名
            mdUserName: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_UserInfo.Act.MdUname);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //查询是否通过验证
            queryCert: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_UserInfo.Act.QueryCert);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //修改用户密码 1.后去短信验证码   2.新密码
            mdPassWord: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_UserInfo.Act.QueryCert);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });