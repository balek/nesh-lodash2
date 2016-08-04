exports.postStart = function (context) {
    var server = context.repl;
    var specialVar = '__';
    var lodash = require('lodash').runInContext(server.context);

    // inject lodash into the context
    Object.defineProperty(server.context, '_', {
        'configurable': true,
        'enumerable': false,
        'get': function () {
            return lodash;
        },
        'set': function (val) {
            server.context[specialVar] = val;
        }
    });
};