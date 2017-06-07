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
        define(["require", "exports", "../../config/const", "./user", "../../handler/classes/authenticate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Const = require("../../config/const");
    var user_1 = require("./user");
    var authenticate_1 = require("../../handler/classes/authenticate");
    var Registration = (function (_super) {
        __extends(Registration, _super);
        function Registration(_app) {
            var _this = _super.call(this) || this;
            _this._app = _app;
            return _this;
        }
        Registration.prototype.saveOne = function () {
            this._app
                .route(Const.apiVersion + 'user')
                .post(authenticate_1.Authenticate.auth, function (req, res, next) {
                res.status(200)
                    .send({
                    code: 1,
                    data: 'success'
                });
            });
        };
        return Registration;
    }(user_1.User));
    exports.Registration = Registration;
});
//# sourceMappingURL=registration.js.map