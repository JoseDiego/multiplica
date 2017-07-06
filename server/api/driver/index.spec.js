'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var driverCtrlStub = {
  index: 'driverCtrl.index',
  show: 'driverCtrl.show',
  create: 'driverCtrl.create',
  upsert: 'driverCtrl.upsert',
  patch: 'driverCtrl.patch',
  destroy: 'driverCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var driverIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './driver.controller': driverCtrlStub
});

describe('Driver API Router:', function() {
  it('should return an express router instance', function() {
    driverIndex.should.equal(routerStub);
  });

  describe('GET /api/drivers', function() {
    it('should route to driver.controller.index', function() {
      routerStub.get
        .withArgs('/', 'driverCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/drivers/:id', function() {
    it('should route to driver.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'driverCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/drivers', function() {
    it('should route to driver.controller.create', function() {
      routerStub.post
        .withArgs('/', 'driverCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/drivers/:id', function() {
    it('should route to driver.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'driverCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/drivers/:id', function() {
    it('should route to driver.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'driverCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/drivers/:id', function() {
    it('should route to driver.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'driverCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
