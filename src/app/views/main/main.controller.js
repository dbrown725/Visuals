'use strict';

/**
 * @ngdoc controller
 *
 * @name MainCtrl
 *
 * @description
 * Controller for Visuals
 */
(function() {

  angular
    .module('Visuals')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;

    vm.user = { username: 'USER'};
  }

})();
