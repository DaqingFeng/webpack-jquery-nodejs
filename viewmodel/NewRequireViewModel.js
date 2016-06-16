//买方找货
define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_NewRequire"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_NewRequire) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.newRequireModelLst = [];
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_NewRequire.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_NewRequire.Act);
            },
            setterModel: function (_module) {
                this.module = _module;
                this.module.SIGNATURE = window.SysInfo.baseGuid;//签名
            },
            setterlst: function (_modulelst) {
                this.newRequireModelLst = _modulelst;
            },
            //用户认证
            setter: function (userid, serials, material, surface, expires, detail, location, extra, delivery) {
                var self = this;
                self.module.USERID = userid//	用户ID
                self.module.SERIES = serials;//系列
                self.module.MATERIAL = material;//材料
                self.module.SURFACE = surface;//表面
                self.module.EXPIRES = expires;//过期时长 分钟
                self.module.DETAIL = detail; //备注
                self.module.LOCATION = location;//"纬度,经度,[省份,城市,区县, ADDR]"，经纬度必须，地址可选
                self.module.EXTRA = extra; //找货扩展信息
                self.module.DELIVERY = delivery;//交货地
             
            },
            newRequire: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            newRequirelst: function (callfunc) {
                var self = this;
                for (var i = 0; i < self.newRequireModelLst.length; i++) {
                    self.module = self.newRequireModelLst[i];
                    self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                    self.Url = SysUrl.getApiUrl("ADAPTER", rs_NewRequire.Act);
                    self.newRequire(callfunc);
                }
            },
        };
        return Control;
    });