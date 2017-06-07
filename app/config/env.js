(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CONFIG = { 'ENCODEDHASH': '6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19' };
});
//# sourceMappingURL=env.js.map