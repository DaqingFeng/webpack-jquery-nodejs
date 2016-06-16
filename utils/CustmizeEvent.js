 define([], function () {
    var Custmize = {
        Notify: function (element, eventname) {
            if (document.createEventObject) {
                // dispatch for IE
                var evt = document.createEventObject();
                return element.fireEvent('on' + eventname, evt)
            }
            else {
                // dispatch for firefox + others
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(eventname, true, true); // event type,bubbling,cancelable
                return !element.dispatchEvent(evt);
            }
        },
        //CustomData can't supported by ie 8 . forgive NotifyData solution 
        ///Element Event
        DoEvent: function (element, eventname, func) {
            if (element.attachEvent) {
                return element.attachEvent("on" + eventname, func);
            }
            else if (element.addEventListener) {
                return element.addEventListener(eventname, func, false);
            }
            else {
                return element.on(eventname, func);
            }
        }
    };
    return Custmize;
})
