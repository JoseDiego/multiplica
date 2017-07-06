'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDriver;

describe('Driver API:', function() {
  describe('GET /api/drivers', function() {
    var drivers;

    beforeEach(function(done) {
      request(app)
        .get('/api/drivers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          drivers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      drivers.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/drivers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/drivers')
        .send({
          names: 'Prueba',
          email: 'prueba@mail.com',
          phone: '938283942',
          department: 'sample',
          province: 'sample',
          district: 'sample',
          urlImageVehicle: 'http://res.cloudinary.com/dmthisot9/image/upload/sample.jpg'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDriver = res.body;
          done();
        });
    });

    it('should respond with the newly created driver', function() {
      newDriver.names.should.equal('Prueba');
      newDriver.email.should.equal('prueba@mail.com');
      newDriver.phone.should.equal('938283942');
      newDriver.department.should.equal('sample');
      newDriver.province.should.equal('sample');
      newDriver.district.should.equal('sample');
      newDriver.urlImageVehicle.should.equal('http://res.cloudinary.com/dmthisot9/image/upload/sample.jpg');
    });
  });

  describe('GET /api/drivers/:id', function() {
    var driver;

    beforeEach(function(done) {
      request(app)
        .get(`/api/drivers/${newDriver._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          driver = res.body;
          done();
        });
    });

    afterEach(function() {
      driver = {};
    });

    it('should respond with the requested driver', function() {
      driver.names.should.equal('Prueba');
      driver.email.should.equal('prueba@mail.com');
      driver.phone.should.equal('938283942');
      driver.department.should.equal('sample');
      driver.province.should.equal('sample');
      driver.district.should.equal('sample');
      driver.urlImageVehicle.should.equal('http://res.cloudinary.com/dmthisot9/image/upload/sample.jpg');
    });
  });

  describe('PUT /api/drivers/:id', function() {
    var updatedDriver;

    beforeEach(function(done) {
      request(app)
        .put(`/api/drivers/${newDriver._id}`)
        .send({
          names: 'Updated Driver'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDriver = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDriver = {};
    });

    it('should respond with the updated driver', function() {
      updatedDriver.names.should.equal('Updated Driver');
    });

    it('should respond with the updated driver on a subsequent GET', function(done) {
      request(app)
        .get(`/api/drivers/${newDriver._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let driver = res.body;

          driver.names.should.equal('Updated Driver');

          done();
        });
    });
  });

  describe('PATCH /api/drivers/:id', function() {
    var patchedDriver;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/drivers/${newDriver._id}`)
        .send([
          { op: 'replace', path: '/names', value: 'Patched Driver' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDriver = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDriver = {};
    });

    it('should respond with the patched driver', function() {
      patchedDriver.names.should.equal('Patched Driver');
    });
  });

  describe('DELETE /api/drivers/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/drivers/${newDriver._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when driver does not exist', function(done) {
      request(app)
        .delete(`/api/drivers/${newDriver._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
