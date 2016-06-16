define(["socketio", "../utils/SysConfig"],
    function (io, SysConfig) {
        function SocketClient(options) {

            //执行注册事件
            this.setting = $.extend({
                //新用户登录
                onUserJoin: null,
                //用户退出
                onUserLogout: null,
                //有新求购发布
                onRequirePunished: null,
                //买方有新报价
                onQuotedPunished: null,
                //买方确认交易意向
                onQuotedConfirmed: null,
            }, options);

              
            this.user = null;
            this.connected = false;
            this.socket = null;
            this.init();
        }

        SocketClient.prototype = {
            init: function () {
                this.socket = io(window.SysInfo.baseNodeJS);
                this.clientLogic();
            },
            //Send Info
            userJoin: function (userinfo) {
                if (!this.user)
                    return false;
                this.socket.emit('user_join', this.user);
                this.connected = true;
            },
            userLogout: function (user) {
                if (!this.user)
                    return false;
                this.socket.emit('user_logout', this.user);
            },
            sendQuoted: function (viequoted) {
                var self = this;
                if (!viequoted || !self.connected)
                    return false;
                self.socket.emit('new_quoted', viequoted);
                return true;
            },
            sendConfirm: function (deliverconfirm) {
                if (!deliverconfirm || !this.connected)
                    return false;
                this.socket.emit("confirm_quoted", deliverconfirm);
                return true;
            },
            clientLogic: function () {
                var self = this;
                //新用户登录
                self.socket.on("user_joined", function (data) {
                    if (typeof self.setting.onUserJoin == 'function') {
                        self.setting.onUserJoin.call(self, data);
                    }
                });

                //用户退出
                self.socket.on("user_loggedout", function (data) {
                    if (typeof self.setting.onUserLogout == 'function') {
                        self.setting.onUserLogout.call(self, data);
                    }
                });

                //有新求购发布
                self.socket.on("require_punished", function (data) {
                    if (typeof self.setting.onRequirePunished == 'function') {
                        self.setting.onRequirePunished(self, data);
                    }
                });

                //买方有新报价
                self.socket.on("quoted_punished", function (data) {
                    if (typeof self.setting.onQuotedPunished == 'function') {
                        self.setting.onQuotedPunished(self, data);
                    }
                });

                //买方确认交易意向
                self.socket.on("quoted_confirmed", function (data) {
                    if (typeof self.setting.onQuotedConfirmed == 'function') {
                        self.setting.onQuotedConfirmed(self, data);
                    }
                });
            },
        };
        return SocketClient;
    });