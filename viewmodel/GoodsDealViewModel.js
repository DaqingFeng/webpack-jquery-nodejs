
//获取（买\卖）成交信息 QXT2017
define(["../utils/SysConfig",
    "../utils/SysUrl","../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_GoodsDealInfo"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_GoodsDealInfo) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_GoodsDealInfo.Req;
                self.module.SIGNATURE=window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_GoodsDealInfo.Act);
            },
            //用户认证
            setter: function (userid,flag,pindex,psize) {
                var self = this;
                 self.module.USERID = userid//	用户ID
                 self.module.FLAG=flag;//买卖标识	B 买  S 卖		
                 self.module.PINDEX=pindex;//页码
                 self.module.PSIZE=psize;//页宽
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