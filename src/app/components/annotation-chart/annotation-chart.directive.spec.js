'use strict';

describe('directive:annotation-chart', function () {

  // load the directive's module and view
  beforeEach(angular.mock.module('Visuals'));
  beforeEach(angular.mock.module('templates'));

  var element, scope;

  // Initialize a mock scope
  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
  }));

  // compile the element to be tested
  it('should be a thing', inject(function ($compile) {
    element = angular.element('<annotation-chart></annotation-chart>');
    element = $compile(element)(scope);

    scope.$apply();
  }));
});
