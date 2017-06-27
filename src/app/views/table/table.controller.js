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

    vm.request = '';
    vm.url = '';
    vm.authKey = '';

    vm.submit = function() {
      var headers = {};
      if(vm.authKey) {
        var authorization = 'Basic ' + vm.authKey;
        headers = {'Authorization': authorization};
        $http.post(vm.url, vm.request, {headers: headers}).then(function (response) {
            console.log(response);
            vm.response = response.data;
        });
      } else {
        $http.post(vm.url, vm.request).
        then(function (response) {
            console.log(response);
            vm.response = response.data;
        });
      }
    };


    vm.handleDrillDownClick = function(object, column) {
      console.log('object', object);
      console.log('column', column);
      alert('From parent controller\n\nDrillDowned on: ' + column + '\n\nRequest object to send:\n' + JSON.stringify(object));
    };

    vm.handleDrillDownSortClick = function(newSortKey) {
      console.log('sortKey', newSortKey);
      drillDownRequest.studentIDFilter.sortFields = newSortKey;
      drillDown();
      //drillDownRequest2.studentIDFilter.sortFields = newSortKey;
      //drillDown2();
    };

    vm.handleDrillDown2SortClick = function(newSortKey) {
      console.log('sortKey', newSortKey);
      drillDownRequest.studentIDFilter.sortFields = newSortKey;
      drillDown();
      // drillDownRequest2.studentIDFilter.sortFields = newSortKey;
      // drillDown2();
      //console.log('column', column);
      //alert('From parent controller\n\nDrillDowned on: ' + column + '\n\nRequest object to send:\n' + JSON.stringify(object));
    };

    vm.retrieveData = function(transaction) {
      console.log('transaction', transaction);
      if(transaction === 'threeDeep') {
        threeDeep();
      } else if (transaction === 'twoDeep') {
        twoDeep();
      } else if (transaction === 'oneDeep') {
        oneDeep();
      } else if (transaction === 'drillDown') {
        drillDown();
        //drillDown2();
      }
    };

    //********* REPLACE START **************************************

    var drillDownRequest = {};

    function threeDeep() {
      alert('see Dave for threeDeep specific sample code/data');
    }

    function twoDeep() {
      alert('see Dave for twoDeep specific sample code/data');
    }

    function oneDeep() {
      alert('see Dave for oneDeep specific sample code/data');
    }

    function drillDown() {
      alert('see Dave for drillDown specific sample code/data');
    }


    //********* REPLACE END **************************************
  }

})();
