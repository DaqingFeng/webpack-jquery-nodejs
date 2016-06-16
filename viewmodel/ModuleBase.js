define(["jquery","jquerycrsdomain", "../utils/SysConfig"], function ($, jquerycrsdomain,SysConfig) {

    var RspData = function () {
        this.isSuccess = null;
        this.ErrorMsg = null;
        this.Data = null;
    }

    var ModuleBase = function (url, method, data, callback, contentType) {
        this.Url = url;
        this.Method = method;
        this.CallBack = callback;
        this.Data=data;
        this.ConentType = contentType;
        this.module = {};
        this.UsingType = false;
        if (method == null) {
            this.Method = window.SysInfo.Ajax.postMethod;
        }
        if (typeof contentType !== "undefined") {
            this.UsingType = true;
        }
    }

    ModuleBase.prototype = {
        Ajax: function () {
            var self = this;
            var rspdata=new RspData();
            if (self.UsingType == false) {
                (function () {
                   
                    $.ajax({
                        'type': self.Method,
                        'url': self.Url,
                        'data': self.Data,
                        'dataType': 'json',
                       'success': function (data) {
                            rspdata.isSuccess = true;
                            rspdata.Data = data;
                            self.CallBack.call(this,rspdata);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            rspdata.isSuccess = false;
                            rspdata.Data = null;
                            rspdata.ErrorMsg = thrownError;
                            self.CallBack.call(this,rspdata);
                        }
                    }); 
                })();
            }
            else {
                (function () {
                    var rspdata=new RspData();
                    $.ajax({
                        'type': self.Method,
                        'url': self.Url,
                        'data': self.Data,
                        'contentType': self.ConentType,
                        'dataType': 'json',
                        'success': function (data) {
                            rspdata.isSuccess = true;
                            rspdata.Data = data;
                            self.CallBack.call(this,rspdata);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            rspdata.isSuccess = false;
                            rspdata.Data = null;
                            rspdata.ErrorMsg = thrownError;
                            self.CallBack.call(this,rspdata);
                        }
                    });
                })();
            }
        },
        JqChain: function () {
            var self = this;
            var rspdata=new RspData();
            if (self.Method.toLowerCase() == "post") {
                return $.post(self.Url, self.Data, self.ConentType).done(function (data) {
                    rspdata.isSuccess = true;
                    rspdata.Data = data;
                    self.CallBack(rspdata);
                }).fail(function (jqXHR, textStatus) {
                    rspdata.isSuccess = false;
                    rspdata.Data = null;
                    rspdata.ErrorMsg = textStatus;
                    self.CallBack(rspdata);
                });
            }
            else {
                return $.get(self.Url, self.Data, self.ConentType).done(function (data) {
                    rspdata.isSuccess = true;
                    rspdata.Data = data;
                    self.CallBack(rspdata);
                }).fail(function (jqXHR, textStatus) {
                    rspdata.isSuccess = false;
                    rspdata.Data = null;
                    rspdata.ErrorMsg = textStatus;
                    selft.CallBack(rspdata);
                });
            }
        }
    }
    //singleton
    var instance;
    var InstanceBase = {
        GetInstance: function () {
            if (!instance) {
                instance = new ModuleBase();
            }
            return instance;
        },
        MBase: ModuleBase,
    }
    return InstanceBase;
});