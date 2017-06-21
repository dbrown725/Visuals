'use strict';

describe('Controller:TableCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Visuals'));
  beforeEach(angular.mock.module('templates'));

  var Table;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Table = $injector.get('$controller')('Table');
  }));

  it('condition of test', function () {

  });

});
