'use strict';

describe('Service: Driver', function() {
  // load the service's module
  beforeEach(module('multiplicaApp.Driver'));

  // instantiate service
  var Driver;
  beforeEach(inject(function(_Driver_) {
    Driver = _Driver_;
  }));

  it('should do something', function() {
    expect(!!Driver).toBe(true);
  });
});
