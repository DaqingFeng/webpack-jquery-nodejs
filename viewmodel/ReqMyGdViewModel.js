//获取找货信息列表 QXT2011
define(["../utils/SysConfig",
    "../utils/SysUrl", "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_RequireMyGoods"],
    function (SysConfig, SysUrl, CreateObject, ModuleBase, rs_RequireMyGoods) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_RequireMyGoods.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_RequireMyGoods.Act);
            },
            setter: function(userid, state, glance, pindex, psize) {
                var self = this;
                self.module.USERID = userid//	用户ID
                 self.module.STATE = state; //A报价中 B已过期 C已确认, D已撤销 
                self.module.GLANCE = glance;//随便看看 "A随便看看（不含管材和棒材），AA随便看看（全部）,
                //B查看USERID当前用户发布的找货信息，C查看USERID订阅的找货信息，"
                //(查询当前用户(GLANCE=B)发布的找货信息时，可同时提供多个状态进行组合查询, 如: "B,D")		
                self.module.PINDEX = pindex;
                self.module.PSIZE = psize;
            },
            getMyGoods: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });