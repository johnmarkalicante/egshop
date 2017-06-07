(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../config/modules"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modules_1 = require("../../config/modules");
    var _modules = modules_1.Modules.get();
    module.exports = function (req, res, next) {
        var query = _modules.url.parse(req.url, true).query;
        req.params = Object.assign({}, req.params, req.body, query);
        next();
    };
});
//# sourceMappingURL=params.js.map