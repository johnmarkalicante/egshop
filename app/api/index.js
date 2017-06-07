(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./user/registration", "./user/login", "../pages/home/home"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var registration_1 = require("./user/registration");
    var login_1 = require("./user/login");
    var home_1 = require("../pages/home/home");
    var Api = (function () {
        function Api(_app) {
            this._app = _app;
            this._registration = new registration_1.Registration(this._app);
            this._socialLogin = new login_1.Login(this._app);
            this._homepage = new home_1.Home(this._app);
        }
        Api.prototype.userApi = function () {
        };
        Api.prototype.loginFacebook = function () {
            this._socialLogin.facebook();
            return this;
        };
        Api.prototype.getToken = function () {
            this._socialLogin.getToken();
            return this;
        };
        Api.prototype.changeToLongLiveToken = function () {
            this._socialLogin.changeToLongLiveToken();
            return this;
        };
        Api.prototype.homePage = function () {
            this._homepage.home();
            return this;
        };
        return Api;
    }());
    exports.Api = Api;
});
//# sourceMappingURL=index.js.map