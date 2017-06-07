(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express", "./api", "./config/express", "./config/modules", "./services/logger"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var express = require("express");
    var api_1 = require("./api");
    var express_1 = require("./config/express");
    var modules_1 = require("./config/modules");
    var logger_1 = require("./services/logger");
    var Server = (function () {
        function Server() {
            this.modules = modules_1.Modules.get();
            this.app = express();
            this.expressConfig = new express_1.ExpressConfig(this.app);
            this.api = new api_1.Api(this.app);
            this.expressConfig.loadExpressConfig();
            this.api
                .userApi();
            this.api
                .loginFacebook();
            this.api
                .getToken();
            this.api
                .changeToLongLiveToken();
            this.api
                .homePage();
            this.expressConfig.loadExpressMiddleware();
            process.on('unhandledRejection', function (reason, p) {
                new logger_1.Logger('app.server.ts[api/room][72]', p, 'error');
                new logger_1.Logger('app.server.ts[api/room][72]', 'REASON: ' + reason, 'error');
            });
        }
        Server.bootstrap = function () {
            return new Server();
        };
        Server.prototype.getExpressInstance = function () {
            return this.app;
        };
        return Server;
    }());
    exports.Server = Server;
    Server.bootstrap();
});
//# sourceMappingURL=app.server.js.map