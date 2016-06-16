define([], function () {

    function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }

    // check to make sure the receiving class doesn't
    // have a method of the same name as the one currently
    // being processed
    var ExtendMethod = function (receivingClass, givingClass) {

        for (var methodName in givingClass.prototype) {
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
    return ExtendMethod;
})