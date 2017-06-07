(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.argv = process.argv;
    exports.getArgv = function (arg) {
        var argument;
        var data = exports.argv.filter(function (filter) {
            argument = filter.split('=')[0];
            if (argument && argument === arg) {
                return true;
            }
            return false;
        })[0];
        return data ? data.split('=')[1] : false;
    };
});
//# sourceMappingURL=argv.js.map