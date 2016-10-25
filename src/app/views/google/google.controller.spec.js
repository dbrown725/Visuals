'use strict';

describe('Controller:GoogleCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Visuals'));
  beforeEach(angular.mock.module('templates'));

  var Google;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Google = $injector.get('$controller')('Google');
  }));

  it('condition of test', function () {

  });

});
