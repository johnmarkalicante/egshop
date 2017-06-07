import * as Const from '../../config/const';
import * as chai from 'chai';
import * as express from 'express';
import * as sinon from 'sinon';
import * as supertest from 'supertest';
import {
  Server
} from '../../app.server';
import {
  Registration
} from './registration';
import {
  User
} from './user';
let expect = chai.expect;

describe('Registration Api', function() {
  let app           = new Server().getExpressInstance();
  let registration  = new Registration(app);
  let request       = require('supertest')(app);

  it('should extend User Class', function() {
    expect(registration instanceof User).to.be.true;
  });

  it('should call the saveOne Method once', function() {
    let spy = sinon.spy(registration, 'saveOne');

    registration.saveOne();
    expect(spy.calledOnce).to.be.true
  });

  describe('POST ' + Const.apiVersion + 'user -- Request headers', function() {
    it('should return 401 and Authentication Fail when req.headers.authorization is unset', function(done) {
      request
      .post(Const.apiVersion + 'user')
      .unset('authorization', null)
      .expect(201)
      .end((error, response) => {
        let message = JSON.parse(response.error.text);

        expect(message.status).to.be.equal(401);
        expect(message.message).to.be.equal('Authentication Fail')
        done();
      });
    });
  });
});
