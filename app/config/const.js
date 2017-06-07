(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./modules", "../services/argv"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modules_1 = require("./modules");
    var args = require("../services/argv");
    exports.port = process.env.port || args.getArgv('--port') || '8082';
    var path = "$dirname";
    path = modules_1.Modules.get().path.dirname(path);
    exports.root = path;
    exports.apiVersion = '/api/v1/';
    exports.sha256 = {
        secret: process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19',
    };
    exports.cipher = {
        algorithm: process.env.ALGORITHM || 'aes-256-ctr',
        secret: process.env.ENCODEDHASH || '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19'
    };
    exports.fbCredentials = {
        'clientID': '178559469337276',
        'clientSecret': '1a29b69d8cc4122d7e453d8ac3414ea6',
        'callbackURL': 'http://localhost:8082/fb/login',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'fbURL': 'https://www.facebook.com/login.php?login_attempt=1'
    };
});
//# sourceMappingURL=const.js.map