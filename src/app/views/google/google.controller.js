'use strict';

/**
 * @ngdoc controller
 *
 * @name Google
 *
 * @description
 * Controller for Visuals
 */
(function () {

  angular
    .module('Visuals')
    .controller('Google', Google);

  function Google($scope, $stateParams) {
    var vm = this;
    vm.type = $stateParams.type;
  }

})();
