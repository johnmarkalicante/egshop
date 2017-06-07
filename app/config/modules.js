(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "path", "body-parser", "bcryptjs", "chalk", "compression", "fs", "jwt-simple", "method-override", "moment", "morgan", "oboe", "serve-static", "url", "request", "cookie-parser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var path = require("path");
    var bodyparser = require("body-parser");
    var bcrypt = require("bcryptjs");
    var chalk = require("chalk");
    var compression = require("compression");
    var fs = require("fs");
    var jwtsimple = require("jwt-simple");
    var methodoverride = require("method-override");
    var moment = require("moment");
    var morgan = require("morgan");
    var oboe = require("oboe");
    var servestatic = require("serve-static");
    var url = require("url");
    var request = require("request");
    var cookieParser = require("cookie-parser");
    var Modules = (function () {
        function Modules() {
        }
        Modules.get = function () {
            return {
                bodyparser: bodyparser,
                bcrypt: bcrypt,
                chalk: chalk,
                compression: compression,
                fs: fs,
                path: path,
                jwtsimple: jwtsimple,
                methodoverride: methodoverride,
                moment: moment,
                morgan: morgan,
                oboe: oboe,
                servestatic: servestatic,
                url: url,
                request: request,
                cookieParser: cookieParser,
            };
        };
        return Modules;
    }());
    exports.Modules = Modules;
});
//# sourceMappingURL=modules.js.map