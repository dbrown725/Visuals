'use strict';

describe('Controller:D3Ctrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Visuals'));
  beforeEach(angular.mock.module('templates'));

  var D3;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    D3 = $injector.get('$controller')('D3');
  }));

  it('condition of test', function () {

  });

});
