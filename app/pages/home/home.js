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
        define(["require", "exports", "../../api/user/user"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var user_1 = require("../../api/user/user");
    var Home = (function (_super) {
        __extends(Home, _super);
        function Home(_app) {
            var _this = _super.call(this) || this;
            _this._app = _app;
            return _this;
        }
        Home.prototype.home = function () {
            this._app
                .route('/')
                .get(function (req, res, next) {
                res.render('index', { title: 'Hello Hugo', cr: __dirname });
            });
        };
        return Home;
    }(user_1.User));
    exports.Home = Home;
});
//# sourceMappingURL=home.js.map