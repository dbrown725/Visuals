'use strict';

/**
 * @ngdoc controller
 *
 * @name D3
 *
 * @description
 * Controller for Visuals
 */
(function () {

  angular
    .module('Visuals')
    .controller('D3', D3);

  function D3($scope, $stateParams) {
    var vm = this;
    vm.type = $stateParams.type;
  }

})();
