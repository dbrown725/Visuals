'use strict';

/**
 * @ngdoc controller
 *
 * @name Table
 *
 * @description
 * Controller for Visuals
 */
(function () {

  angular
    .module('Visuals')
    .controller('Table', Table);

  function Table($scope, $http) {
    var vm = this;

    vm.foo = [];

    vm.response = {};

    vm.handleDrillDownClick = function(object, column) {
      console.log('object', object);
      console.log('column', column);
      alert('From parent controller\n\nDrillDowned on: ' + column + '\n\nRequest object to send:\n' + JSON.stringify(object));
    };

    vm.retrieveData = function(transaction) {
      console.log('transaction', transaction);
      if(transaction === 'threeDeep') {
        threeDeep();
      } else if (transaction === 'twoDeep') {
        twoDeep();
      } else if (transaction === 'oneDeep') {
        oneDeep();
      }
    };

    //********* REPLACE START **************************************
    function threeDeep() {
        alert('see Dave for threeDeep specific sample code/data');
    }

    function twoDeep() {
      alert('see Dave for twoDeep specific sample code/data');
    }

    function oneDeep() {
      alert('see Dave for oneDeep specific sample code/data');
    }
    //********* REPLACE END **************************************
  }

})();
