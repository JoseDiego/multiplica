'use strict';

describe('Controller: ModalCtrl', function() {
  // load the controller's module
  beforeEach(module('multiplicaApp.Modal'));

  var ModalCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ModalCtrl = $controller('ModalCtrl', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
