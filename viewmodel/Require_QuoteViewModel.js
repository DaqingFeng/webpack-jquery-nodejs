//获取买卖交易汇总
define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_Required_Quoted"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_Required_Quoted) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_Required_Quoted.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名

            },
            setter: function (userid, requireid, pindex, psize) {
                var self = this;
                self.module.USERID = userid//	用户ID
                self.module.REQUIREID = requireid; //找货ID  获取当前找货的报价信息
                if (typeof pindex !== "undefined")  // 获取当前报价详情
                {
                    self.module.PINDEX = pindex;
                    self.module.PSIZE = psize;
                }
            },
            //2027 抢单
            setterSeries: function (userid, series, pindex, psize) //按系列获取报价中的找货信息列表(V2.0 新增) QXT2027
            {
                var self = this;
                self.module.USERID = userid//	用户ID
                self.module.PINDEX = pindex;
                self.module.PSIZE = psize;
                self.SERIES = series;
            },
            setterQuote: function (userid, pindex, psize)//获取用户发布的报价中的找货信息列表（附带报价信息）QXT2030
            {
                var self = this;
                self.module.USERID = userid//	用户ID
                self.module.PINDEX = pindex;
                self.module.PSIZE = psize;
            },
            //-----------------
            getQuoted: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_Required_Quoted.Act.Quoted);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //获取找货信息详情(抢单详情)
            getRequireDetail: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_Required_Quoted.Act.Required);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //按系列获取报价中的找货信息列表(V2.0 新增)
            getRequiringBySeries: function (callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_Required_Quoted.Act.RequireBySerial);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            },
            //获取用户发布的报价中的找货信息列表（附带报价信息）
            RequireWithQuoting:function(callfunc) {
                var self = this;
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_Required_Quoted.Act.RequireWithQuoting);
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });