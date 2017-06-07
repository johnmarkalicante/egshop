(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "crypto", "./../config/const"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var crypto = require("crypto");
    var Const = require("./../config/const");
    var Crypto = (function () {
        function Crypto() {
        }
        Crypto.prototype.encrypt = function (password) {
            var hash = crypto.createHmac('SHA256', Const.sha256.secret).update(password).digest('hex');
            return hash;
        };
        Crypto.prototype.cipher = function (text) {
            var cipher = crypto.createCipher(Const.cipher.algorithm, Const.cipher.secret);
            var crypted = cipher.update(text, 'utf8', 'hex');
            crypted += cipher.final('hex');
            return crypted;
        };
        Crypto.prototype.decipher = function (text) {
            var decipher = crypto.createDecipher(Const.cipher.algorithm, Const.cipher.secret);
            var dec = decipher.update(text, 'hex', 'utf8');
            dec += decipher.final('utf8');
            return dec;
        };
        return Crypto;
    }());
    exports.Crypto = Crypto;
});
//# sourceMappingURL=crypto.js.map