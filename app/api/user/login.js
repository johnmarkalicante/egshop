var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../config/const", "./user", "../../config/modules"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Const = require("../../config/const");
    var user_1 = require("./user");
    var modules_1 = require("../../config/modules");
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login(_app) {
            var _this = _super.call(this) || this;
            _this._app = _app;
            return _this;
        }
        Login.prototype.facebook = function () {
            var _this = this;
            this._app
                .route('/fb/account')
                .get(function (req, res, isToken) {
                if (req.cookies.u_accessToken) {
                    _this.tokenExtend(req.cookies.u_accessToken);
                    res.render('profile', {
                        title: 'Hello Hugo',
                        authToken: req.cookies.u_accessToken
                    });
                }
                else {
                    res.render('fb_login', { title: 'Welcome' });
                }
            });
        };
        Login.prototype.getToken = function () {
            this._app
                .route('/fb/get/token')
                .get(function (req, res, next) {
                var user = {
                    _id: req.query.id,
                    _name: req.query.name,
                    _email: req.query.email,
                    _profile: req.query.profile,
                    _authToken: req.query.authToken
                };
                res.redirect('http://localhost:8082/fb/change/token?authToken=' + user._authToken);
            });
        };
        Login.prototype.tokenExtend = function (u_accessToken) {
            var fbGraphURL = 'https://graph.facebook.com/oauth/access_token?client_id=';
            fbGraphURL += Const.fbCredentials.clientID;
            fbGraphURL += '&client_secret=' + Const.fbCredentials.clientSecret;
            fbGraphURL += '&fb_exchange_token=' + u_accessToken;
            fbGraphURL += '&grant_type=fb_exchange_token';
            modules_1.Modules.get().request(fbGraphURL, function (err, resp, body) {
                body = JSON.parse(body);
                return body.access_token;
            });
        };
        Login.prototype.changeToLongLiveToken = function () {
            this._app
                .route('/fb/change/token')
                .get(function (req, res, next) {
                var fbGraphURL = 'https://graph.facebook.com/oauth/access_token?client_id=';
                fbGraphURL += Const.fbCredentials.clientID;
                fbGraphURL += '&client_secret=' + Const.fbCredentials.clientSecret;
                fbGraphURL += '&fb_exchange_token=' + req.query.authToken;
                fbGraphURL += '&grant_type=fb_exchange_token';
                modules_1.Modules.get().request(fbGraphURL, function (err, resp, body) {
                    body = JSON.parse(body);
                    res.header("Content-Type", 'application/json');
                    res.send(JSON.stringify(body, null, 4));
                });
            });
        };
        Login.prototype.checkTokenIfExist = function (req, res, next) {
            next(false);
            console.log(req.cookies.u_accessToken);
        };
        Login.prototype.errorToken = function (req, res, next, token, render) {
            if (null == token) {
                res.render(render, { title: 'Hello Hugo' });
            }
            else {
                res.render('index', { title: 'Welcome' });
            }
        };
        return Login;
    }(user_1.User));
    exports.Login = Login;
});
//# sourceMappingURL=login.js.map