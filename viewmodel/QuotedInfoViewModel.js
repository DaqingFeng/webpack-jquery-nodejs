//查询当前用户报价信息
define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_QuotedInfo"],
    function (SysConfig,SysUrl, CreateObject, ModuleBase, rs_QuotedInfo) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_QuotedInfo.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名

            },
            //用户认证
            setter: function (userid, state, pindex, psize, serial) {
                var self = this;
                self.module.USERID = userid//	用户ID
                self.module.STATE = state;//	报价状态	A报价中 B已过期 C已成交，
                //注意：查询已成交报价时此接口不会返回合同Id，如需合同ID字段，请使用QXT2017+QXT2020查询		
                self.module.PINDEX = pindex;//页码
                self.module.PSIZE = psize;//页宽
             
                //Provide to by Serial query 
                if (typeof serial != "undefined")
                    self.module.SERIES = serial;
            },
            quoteGoods: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_QuotedInfo.Act.Quote);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            qutebySerial: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_QuotedInfo.Act.QuoteBySerial);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
        };
        return Control;
    });