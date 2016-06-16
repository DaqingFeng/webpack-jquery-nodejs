define([], function () {
    (function (window) {
        window.SysInfo = {
            VituralPath: "",
            baseApiURL: "http://192.168.8.216:9002", //http://192.168.8.216:9002   http://192.168.8.34:8800
            baseNodeJS: "http://192.168.8.216:5681",//http://192.168.8.216:5679     http://192.168.8.216:5681  
            baseGuid: '6d0ed124dd7a4e57',
            Paging: { VisiblePages: 1, DftPageSize: 7 }, 
            Ajax: { postMethod: 'post', getMethod: 'get', },
            SeriesSupport:
            {
                Board: '^1AD03CAB0564FFA1E050007F010079E7|1AD03CAB0565FFA1E050007F010079E7|1AD03CAB0566FFA1E050007F010079E7$',
                Pipe: '^226EFD6EFB2818E5E050007F01008594$',
                Bar: "^226EFD6EFB2918E5E050007F01008594$",
            },
        }
    })(window);
});