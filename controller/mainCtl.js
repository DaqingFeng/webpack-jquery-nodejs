import act from './account.js';
import main from './mainMgmt.js';
require.ensure([], function (require) {
    //new Main source
    var instancemain = new main();

    require('jqueryui');
    function indexView() {
        this.ModelName = "Webpack Index";
    };
    indexView.prototype = {
        init: function () {
            $('.content').append("<p>Webpack Demo. Preety good </p>");
            this.bindEvent();
        },
        bindEvent: function () {
            $('.content').css("color", "blue");
        }
    };
    (function () {
        var a = new indexView();
        a.init();
    })();
}, "refer.bundle");

