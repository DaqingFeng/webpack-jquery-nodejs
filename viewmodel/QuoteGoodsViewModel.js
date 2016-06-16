//卖方报价（修改报价）
define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_QuoteGoods"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_QuoteGoods) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_QuoteGoods.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_QuoteGoods.Act);
            },
            setter: function (userid, requireid, offerid, price, expires, note, location) {
                var self = this;
                self.module.USERID = userid//	用户ID
                self.module.REQUIREID = requireid;//找货ID  
                self.module.OFFERID = offerid;  // 报价ID	新报价可为空
                self.module.PRICE = price;//报价
                self.module.EXPIRES = expires;//过期时长 分钟
                self.module.NOTE = note; //备注
                self.module.LOCATION = location;//"纬度,经度,[省份,城市,区县, ADDR]"，经纬度必须，地址可选
            },
            quoteGoods: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });