//评价2018
define(["../utils/SysConfig",
    "../utils/SysUrl",
    "../utils/CreateObject",
    "../viewmodel/ModuleBase",
    "../moduler/rs_CommentDeal"],
    function (SysConfig, SysUrl,CreateObject, ModuleBase, rs_CommentDeal) {
        function Control() {
            ModuleBase.MBase.call(this);
            CreateObject(Control, ModuleBase.MBase);
            this.init();
        }

        Control.prototype = {
            init: function () {
                var self = this;
                self.module = rs_CommentDeal.Req;
                self.module.SIGNATURE = window.SysInfo.baseGuid;//签名
                self.Url = SysUrl.getApiUrl("ADAPTER", rs_CommentDeal.Act);
            },
            setter: function (userid,contractid,score,note,flag) {
                var self = this;
                self.module.USERID = userid;//	用户ID
                self.module.CONTRACTID=contractid; //合同ID
                self.module.SCORE=score;//评分
                self.module.NOTE=note;//备注
                self.module.FLAG=flag;//买卖标识	B 买  S 卖  （主动）	
            },
            sendcomment: function (callfunc) {
                var self = this;
                self.Data = this.module;
                self.CallBack = callfunc;
                self.Ajax();
            }
        };
        return Control;
    });