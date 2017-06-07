(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../config/const", "chai", "sinon", "../../app.server", "./registration", "./user"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Const = require("../../config/const");
    var chai = require("chai");
    var sinon = require("sinon");
    var app_server_1 = require("../../app.server");
    var registration_1 = require("./registration");
    var user_1 = require("./user");
    var expect = chai.expect;
    describe('Registration Api', function () {
        var app = new app_server_1.Server().getExpressInstance();
        var registration = new registration_1.Registration(app);
        var request = require('supertest')(app);
        it('should extend User Class', function () {
            expect(registration instanceof user_1.User).to.be.true;
        });
        it('should call the saveOne Method once', function () {
            var spy = sinon.spy(registration, 'saveOne');
            registration.saveOne();
            expect(spy.calledOnce).to.be.true;
        });
        describe('POST ' + Const.apiVersion + 'user -- Request headers', function () {
            it('should return 401 and Authentication Fail when req.headers.authorization is unset', function (done) {
                request
                    .post(Const.apiVersion + 'user')
                    .unset('authorization', null)
                    .expect(201)
                    .end(function (error, response) {
                    var message = JSON.parse(response.error.text);
                    expect(message.status).to.be.equal(401);
                    expect(message.message).to.be.equal('Authentication Fail');
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=registration.spec.js.map