'use strict';

describe('Component: modal', function() {
  // load the component's module
  beforeEach(module('multiplicaApp.modal'));

  var modalComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    modalComponent = $componentController('modal', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
