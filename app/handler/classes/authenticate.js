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
    var Authenticate = (function () {
        function Authenticate() {
        }
        Authenticate.auth = function (req, res, next) {
            if (req.headers.authorization) {
            }
            else {
                var error = new Error('Authentication Fail');
                error.status = 401;
                return next(error);
            }
            return next();
        };
        return Authenticate;
    }());
    exports.Authenticate = Authenticate;
});
//# sourceMappingURL=authenticate.js.map