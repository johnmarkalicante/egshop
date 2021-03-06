(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "rewire", "chai"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rewire = require("rewire");
    var chai = require("chai");
    var Const = rewire('../const');
    var args = rewire('../../services/argv');
    var expect = chai.expect;
    describe('Const Config', function () {
        before(function () {
            Const.__set__('process.env.port', '3000');
            Const.__set__('process.argv', ['--port=3001']);
            Const.__set__('process.env.ENCODEDHASH', '12345');
            Const.__set__('process.env.ALGORITHM', '12345');
        });
        it('should set default port 8082', function () {
            expect(Const.port).to.be.equal('8082');
        });
        it('should set port process.env.port for Const.port', function () {
            expect(process.env.port).to.be.equal('3000');
        });
        it('should set Const.port for --port process.argv', function () {
            expect(process.argv);
        });
        it('should set api version', function () {
            expect(Const.apiVersion).to.be.equal('/api/v1/');
        });
        it('should set default Const.sha256.secret', function () {
            expect(Const.sha256.secret).to.be.equal('6e259c44f97ff663ab5f4668a6134a2e63a71877956464c9c3820f17a0893c19');
        });
        it('should set process.env.ENCODEDHASH for Const.sha256.secret and Const.cipher.secret', function () {
            expect(process.env.ENCODEDHASH).to.be.equal('12345');
        });
        it('should set default for Const.cipher.algorithm', function () {
            expect(Const.cipher.algorithm).to.be.equal('aes-256-ctr');
        });
        it('should set process.env.ALGORITHM for Const.cipher.algorithm', function () {
            expect(process.env.ENCODEDHASH).to.be.equal('12345');
        });
    });
});
//# sourceMappingURL=const.spec.js.map