define(["jquery", "../utils/SysUrl"], function ($, SysUrl) {
    function showMoney(type) {
        var islogin = "@isLogin";
        if (islogin == "False") {
            window.top.location.href = SysUrl.getUrl("/Account/Login?ReturnUrl=" + window.top.location.href);
        } else {
            $.post(SysUrl.getUrl("/Users/Fund/Summary"), function (data) {
                if (data.Code == 1) {
                    if (type == "A") {
                        $(".nav-content .memberSpMallMoney").text(data.MallMoney + ' 元').addClass("fontRed");
                        $(".nav-content .memberSpMallMoney").css("display", "inline");
                        $(".nav-content .memberLbMallMoney").hide();//.css("cursor", "default");
                    } else if (type == "B") {
                        $(".nav-content .memberSpOrderMoney").text(data.OrderMoney + ' 元').addClass("fontRed");
                        $(".nav-content .memberSpOrderMoney").css("display", "inline");
                        $(".nav-content .memberLbOrderMoney").hide();//.css("cursor", "default");
                    } else if (type == "C") {
                        $(".work_user-money .memberSpMallMoney").text(data.MallMoney + ' 元').addClass("fontRed");
                        $(".work_user-money .memberSpMallMoney").css("display", "inline");
                        $(".work_user-money .memberLbMallMoney").hide();//.css("cursor", "default");
                    } else if (type == "D") {
                        $(".work_user-money .memberSpOrderMoney").text(data.OrderMoney + ' 元').addClass("fontRed");
                        $(".work_user-money .memberSpOrderMoney").css("display", "inline");
                        $(".work_user-money .memberLbOrderMoney").hide(); //css("cursor", "default");
                    }
                } else if (data.Code == 0) {
                    window.top.location.href = SysUrl.getUrl("/Account/Login?ReturnUrl=" + window.top.location.href);
                } else if (data.indexOf("登录超时") != -1) {
                    window.top.location.href = SysUrl.getUrl("/Account/Login?ReturnUrl=" + window.top.location.href);
                }
            })
        }

    }

    function hideMoney(type) {
        if (type == 'A') {
            console.log("xxx");
            $(".nav-content .memberSpMallMoney").css("display", "none");
            $(".nav-content .memberLbMallMoney").css("display", "inline");
        }
        else if (type == 'B') {
            $(".nav-content .memberSpOrderMoney").css("display", "none");
            $(".nav-content .memberLbOrderMoney").css("display", "inline");
        } else if (type == 'C') {
            $(".work_user-money .memberSpMallMoney").css("display", "none");
            $(".work_user-money .memberLbMallMoney").css("display", "inline");
        } else if (type == 'D') {
            $(".work_user-money .memberSpOrderMoney").css("display", "none");
            $(".work_user-money .memberLbOrderMoney").css("display", "inline");
        }
    }

    var Utils = {
        Ajax: function (url, data, type) {
            return $.ajax({
                url: url,
                data: data,
                type: type,
                dataType: "json",
                contentType: 'application/json; charset=utf-8',
                async: false,
                cache: false,
                beforeSend: function (xhr) {

                },
                success: function (data) {

                },
                error: function () {

                },
                complete: function (xht, ts) {

                }
            }).responseJSON;
        },
        FillSelect: function (controlId, data, defaultOption) {
            if (controlId && data) {
                if (Dd(controlId)) {
                    Dd(controlId).length = 1;
                    $.each(data, function (k, v) {
                        if (defaultOption && defaultOption === v.Value)
                            $('#' + controlId).append("<option value='" + v.Id + "' selected>" + v.Value + "</option>");
                        else
                            $('#' + controlId).append("<option value='" + v.Id + "'>" + v.Value + "</option>");
                    });
                }
            }
        }
    }

    function Dd(i) { return document.getElementById(i); }
    function Ds(i) { Dd(i).style.display = ''; }
    function Dh(i) { Dd(i).style.display = 'none'; }
    function Df(i) { Dd(i).focus(); }


    //返回顶部
    function gotoTop(acceleration, stime) {
        acceleration = acceleration || 0.1;
        stime = stime || 6;
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        var x3 = 0;
        var y3 = 0;
        if (document.documentElement) {
            x1 = document.documentElement.scrollLeft || 0;
            y1 = document.documentElement.scrollTop || 0;
        }
        if (document.body) {
            x2 = document.body.scrollLeft || 0;
            y2 = document.body.scrollTop || 0;
        }
        var x3 = window.scrollX || 0;
        var y3 = window.scrollY || 0;

        var x = Math.max(x1, Math.max(x2, x3));

        var y = Math.max(y1, Math.max(y2, y3));


        var speeding = 1 + acceleration;
        window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

        if (x > 0 || y > 0) {
            var run = "gotoTop(" + acceleration + ", " + stime + ")";
            window.setTimeout(run, stime);
        }
    };

    var PlaceHolder = function () {
        function isPlaceholer() {
            var input = document.createElement('input');
            return "placeholder" in input;
        }

        $(function () {
            if (!isPlaceholer()) {
                $("input[type=text],textarea").each(function (k, v) {
                    var txt = $(v).attr("placeholder");
                    var val = $(v).val();
                    if (txt === val || ('' === val && undefined !== txt)) {
                        $(v).addClass("f-gray");
                        $(v).val(txt);
                    }

                    $(v).blur(function () {
                        if (!$(v).val() || $(v).val() === txt) {
                            $(v).addClass("f-gray");
                            $(v).val(txt);
                        }
                    });

                    $(v).focus(function () {
                        $(v).removeClass("f-gray");
                        if ($(v).val() === txt) {
                            $(v).val('');
                        }
                    });
                });
            }
        });
    }

    //Check user  certificate
    function checkCert(userInfo) {
        if (userInfo && typeof (userInfo) === "object") {
            if (userInfo.SystemCert.indexOf('A') < 0) {
                var msg = {};
                var custDialog = new CustDialog(msg);
                switch (userInfo.CertState) {
                    case 0:
                        msg.title = "请认证后再操作";
                        msg.desc = "您还不是认证用户，未认证无法操作哦。";
                        msg.button = {
                            cleanBtn: true,
                            enterBtn: {
                                text: '去认证',
                                url: SysUrl.getUrl('/Users/ValidateInfo/BaseInfo')
                            }
                        };
                        custDialog.showNoCertDialog(msg);
                        return false;;
                    case 1:
                        msg.title = "资料审核中，暂时无法操作";
                        msg.desc = "联系客服0510-66008000了解审核进度。";
                        msg.button = {
                            cleanBtn: false,
                            enterBtn: {
                                text: '关闭',
                                url: 'javascript:hideCertDialog();'
                            }
                        };
                        custDialog.showNoCertDialog(msg);
                        return false;;
                    case 3:
                        msg.title = "认证未通过，无法操作";
                        msg.desc = "您的帐号未通过认证审核，原因：" + userInfo.CertNote + "。重新认证通过后才可以操作~";
                        msg.button = {
                            cleanBtn: true,
                            enterBtn: {
                                text: '重新认证',
                                url: SysUrl.getUrl('/Users/ValidateInfo/BaseInfo')
                            }
                        };
                        custDialog.showNoCertDialog(msg);
                        return false;
                }
            }
        }
        return true;
    }


    var CustDialog = function (_msg, options) {
        this.msg = $.extend({
            title: null,
            desc: null,
            htmlTemplate: null,
            button: {
                cleanBtn: {
                    visable: false,
                    text: null,
                    OnCancel: null,
                },
                enterBtn: {
                    text: '',
                    url: '',
                    onConfrim: null
                },
                extendBtn:
                {
                    visable: false,
                    text: '',
                    url: '',
                    OnExtendClick: null
                }
            }
        }, _msg);
        this.certDialog = null;
    }
    CustDialog.prototype = {
        showNoCertDialog: function () {
            var self = this;
            self.certDialog = $.dialog({
                lock: true,
                max: false,
                min: false,
                fixed: true,
                resize: false,
                drag: true,
                close: true,
            });
            self.certDialog.hide();
            self.certDialog.title("");
            var html = "";
            html += "<div class=\"ui-member-dialog width500\">";
            html += "<div class=\"title\"><h3>" + self.msg.title + "</h3></div>";
            html += "<div class=\"msg\">" + self.msg.desc + "</div>";
            if (self.msg.htmlTemplate != null) {
                html += self.msg.htmlTemplate
            }
            html += "<div class=\"btns\">";
            if (self.msg.button.cleanBtn != undefined) {
                if (self.msg.button.cleanBtn.visable) {
                    html += "<a class='hideCertDialog' href=\"javascript:;\" >" + self.msg.button.cleanBtn.text + "</a>";
                }
            }

            html += '<a  class=\"confirmCertdialog ';
            if (self.msg.button.extendBtn != undefined) {
                if (!self.msg.button.extendBtn.visable) {
                    html += "normal-blue-button";
                }

            }//未定义扩展button ，该button为默认button.
            else {
                html += "normal-blue-button";
            }
            //检查是否有URL信息
            if (self.msg.button.enterBtn.url != null) {
                html += '" href=\"' + self.msg.button.enterBtn.url + '"';
            }
            html += '\">' + self.msg.button.enterBtn.text + '</a>';

            if (self.msg.button.extendBtn != undefined) {
                if (self.msg.button.extendBtn.visable) {
                    html += "<a class='extendCertDialog normal-blue-button' href=\"javascript:;\" >" + self.msg.button.extendBtn.text + "</a>";
                }
            }
            html += "</div>";
            html += "</div>";
            self.certDialog.content(html);
            var parentelement = $('.ui-member-dialog');
            self._bindEvents(parentelement);
            self.certDialog.show();
        },
        _bindEvents: function (ptelement) {
            var self = this;
            var hidedlg = ptelement.find('.hideCertDialog');
            hidedlg.click(function () {
                if (typeof self.msg.button.cleanBtn.OnCancel == 'function') {
                    self.msg.button.cleanBtn.OnCancel(this);
                }
                self.certDialog.close();

                return false;
            });

            var certdlg = ptelement.find('.confirmCertdialog');
            certdlg.click(function () {
                if (typeof self.msg.button.enterBtn.onConfrim == 'function') {
                    self.msg.button.enterBtn.onConfrim(this);
                }
                self.certDialog.close();

                return false;
            });

            var extend = ptelement.find('.extendCertDialog');
            extend.click(function () {
                if (typeof self.msg.button.extendBtn.OnExtendClick == 'function') {
                    self.msg.button.extendBtn.OnExtendClick(this);
                }
                self.certDialog.close();

                return false;
            });
        }
    }

    return {
        showMoney: showMoney,
        hideMoney: hideMoney,
        PlaceHolder: PlaceHolder,
        Utils: Utils,
        gotoTop: gotoTop,
        checkCert: checkCert,
        CustDialog: CustDialog,
        Dd: Dd,
        Ds: Ds,
        Dh: Dh,
        Df: Df,
    }
});