(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../config/modules", "../config/env"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modules_1 = require("../config/modules");
    var env_1 = require("../config/env");
    var Jwt = (function () {
        function Jwt() {
            this._modules = modules_1.Modules.get();
            this._jories = 'canino';
        }
        Jwt.prototype.encode = function (_decipher) {
            var payload = {
                email: _decipher.user.email,
                exp: this._modules.moment().add(15, 'days').unix()
            };
            var token = this._modules.jwtsimple.encode(payload, env_1.CONFIG.ENCODEDHASH);
            return token;
        };
        Jwt.prototype.decode = function (authorization) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!authorization) {
                    reject();
                }
                var token = _this._modules.jwtsimple.decode(authorization, env_1.CONFIG.ENCODEDHASH);
                resolve(token);
            });
        };
        return Jwt;
    }());
    exports.Jwt = Jwt;
});
//# sourceMappingURL=jwt.js.map