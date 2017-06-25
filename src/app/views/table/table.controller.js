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

    var drillDownRequest = {
      requestType: 'STUDENT_DISTINCT_STUDENT_COUNT',
      studentDemoFilter: {
        enrlmntDateFrom: 1325394000000,
        enrlmntDateTo: 1491105600000,
        wthdrwlDateFrom: null,
        wthdrwlDateTo: null,
        eligExpDateFrom: null,
        eligExpDateTo: null,
        boolOpenEnrlmnt: false,
        rptGrping: 'State',
        selectedStates: '5,10',
        selectedEnrlTypes: null,
        selectedCourseTypes: '1,2,3,4,5,6,7,8,9',
        selectedAssessmentTypes: '1,2,3,4,5,6,7,8',
        asmntAdminDateFrom: null,
        asmntAdminDateTo: null,
        beginAcademicYear: 0,
        endAcademicYear: 0,
        periodType: 'No Period',
        categoryType: 'Category 1',
        countType: null,
        requestType: null
      },
      studentIDFilter: {
        stateKey: '3',
        districtId: null,
        category: 'No Data Submitted',
        category2: 'No Data Submitted',
        beginRow: 1,
        endRow: 20,
        sortFields: 'MSIX_ID_ASC'
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

    function drillDown() {
      alert('see Dave for drillDown specific sample code/data');
    }


    //********* REPLACE END **************************************
  }

})();
