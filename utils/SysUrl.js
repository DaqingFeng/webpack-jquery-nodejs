define(["../utils/SysConfig"], function (SysConfig) {
    var SysUrl = {
        //获取域的Url
        getUrl: function (path) {
            if (!window.location.origin) {
                window.location.origin = window.location.protocol
                    + "//" + window.location.hostname
                    + (window.location.port ? ':'
                        + window.location.port : '');
            }
            var baseurl = window.location.origin;
            if (path.charAt(0) != '/') {
                path = '/' + path;
            }
            return baseurl + SysInfo.VituralPath + path;
        },

        //获取Api 的Url
        getApiUrl: function (action, api) {
            var currentControl = "Adapter";
            var tpSupportAction = /^ADAPTER$/;
            if (!tpSupportAction.test(action)) {
                return '';
            }
            return window.SysInfo.baseApiURL + "/" + currentControl + "?" + action + "=" + api;
        },
    }
    return SysUrl;
});