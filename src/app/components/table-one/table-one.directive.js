'use strict';

/**
 * @ngdoc directive
 *
 * @name tableOne
 *
 * @description
 * directive for Visuals
 */
(function () {

  angular
    .module('Visuals')
    .directive('tableOne', tableOne);

  function tableOne() {

    var controller = ['$scope', function ($scope) {
      $scope.$watch('responsedata', function(newValue, oldValue) {
        if(Object.keys(newValue).length) {
            console.log('in $scope.$watch');
            clearTable();
            $scope.response = newValue;
            setTableHeaders();
            setTableBody(newValue, true);
        }
      });

      function init() {
          //$scope.items = angular.copy($scope.datasource);
      }

      init();

      //raw back-end response, used for sorting
      $scope.response = {};

      //formatted actual rows that get displayed
      $scope.rows = [];

      //sort variables
      $scope.currentSortColumn = '';
      $scope.sortAscending = true;

      $scope.sortColumn = function(columnNumber, sortAscKey, sortDescKey) {


        console.log('sortAscKey', sortAscKey);
        console.log('sortDescKey', sortDescKey);
        if(columnNumber === $scope.currentSortColumn) {
          $scope.sortAscending = !$scope.sortAscending;
        } else {
          $scope.currentSortColumn = columnNumber;
          $scope.sortAscending = true;
        }
        // if keys exist then is drillDown and sorts are done
        // on the backend by the SQL
        if(sortAscKey && sortDescKey) {
          if($scope.sortAscending) {
            $scope.drilldownsort({sortKey:sortAscKey});
          } else {
            $scope.drilldownsort({sortKey:sortDescKey});
          }
        } else {
          function determineSortLevel() {
            for (var k = 0; k < $scope.response.rows.length; k++) {
              if($scope.response.rows[k][columnNumber].value) {
                return 'level1';
              }
            }
            for (var m = 0; m < $scope.response.rows.length; m++) {
              for (var n = 0; n < $scope.response.rows[m].rows.length; n++) {
                if($scope.response.rows[m].rows[n][columnNumber].value) {
                  return 'level2';
                }
              }
              return 'level3';
            }
          }

          var sortLevel = determineSortLevel();
          function compare(a,b) {
            var val1 = a[columnNumber].value;
            var val2 = b[columnNumber].value;
            if(a[columnNumber].number) {
              val1 = Number(a[columnNumber].value);
              val2 = Number(b[columnNumber].value);
            }
            if($scope.sortAscending) {
              if (val1 < val2) {
                return -1;
              }
              if (val1 > val2) {
                return 1;
              }
              return 0;
            } else {
              if (val1 < val2) {
                return 1;
              }
              if (val1 > val2) {
                return -1;
              }
              return 0;
            }
          }

          if(sortLevel === 'level1') {
            $scope.response.rows.sort(compare);
          } else if(sortLevel === 'level2') {
            for (var j = 0; j < $scope.response.rows.length; j++) {
              $scope.response.rows[j].rows.sort(compare);
            }
          } else if(sortLevel === 'level3') {
            for (var m = 0; m < $scope.response.rows.length; m++) {
              for (var n = 0; n < $scope.response.rows[m].rows.length; n++) {
                $scope.response.rows[m].rows[n].rows.sort(compare);
              }
            }
          }
          setTableBody($scope.response, false);
        }
      };

      function clearTable() {
          $scope.columnOneName = 'Header One';
          $scope.columnOneShow = false;
          $scope.columnOneSortable = false;
          $scope.columnOneSortAsc = '';
          $scope.columnOneSortDesc = '';
          $scope.columnTwoName = 'Header Two';
          $scope.columnTwoShow = false;
          $scope.columnTwoSortable = false;
          $scope.columnTwoSortAsc = '';
          $scope.columnTwoSortDesc = '';
          $scope.columnThreeName = 'Header Three';
          $scope.columnThreeShow = false;
          $scope.columnThreeSortable = false;
          $scope.columnThreeSortAsc = '';
          $scope.columnThreeSortDesc = '';
          $scope.columnFourName = 'Header Four';
          $scope.columnFourShow = false;
          $scope.columnFourSortable = false;
          $scope.columnFourSortAsc = '';
          $scope.columnFourSortDesc = '';
          $scope.columnFiveName = 'Header Five';
          $scope.columnFiveShow = false;
          $scope.columnFiveSortable = false;
          $scope.columnFiveSortAsc = '';
          $scope.columnFiveSortDesc = '';
          $scope.columnSixName = 'Header Six';
          $scope.columnSixShow = false;
          $scope.columnSixSortable = false;
          $scope.columnSixSortAsc = '';
          $scope.columnSixSortDesc = '';
          $scope.columnSevenName = 'Header Seven';
          $scope.columnSevenShow = false;
          $scope.columnSevenSortable = false;
          $scope.columnSevenSortAsc = '';
          $scope.columnSevenSortDesc = '';
          $scope.columnEightName = 'Header Eight';
          $scope.columnEightShow = false;
          $scope.columnEightSortable = false;
          $scope.columnEightSortAsc = '';
          $scope.columnEightSortDesc = '';
          $scope.columnNineName = 'Header Nine';
          $scope.columnNineShow = false;
          $scope.columnNineSortable = false;
          $scope.columnNineSortAsc = '';
          $scope.columnNineSortDesc = '';
          $scope.columnTenName = 'Header Ten';
          $scope.columnTenShow = false;
          $scope.columnTenSortable = false;
          $scope.columnTenSortAsc = '';
          $scope.columnTenSortDesc = '';
          $scope.columnElevenName = 'Header Eleven';
          $scope.columnElevenShow = false;
          $scope.columnElevenSortable = false;
          $scope.columnElevenSortAsc = '';
          $scope.columnElevenSortDesc = '';
          $scope.columnTwelveName = 'Header Twelve';
          $scope.columnTwelveShow = false;
          $scope.columnTwelveSortable = false;
          $scope.columnTwelveSortAsc = '';
          $scope.columnTwelveSortDesc = '';
      }

      function setTableHeaders() {
        if($scope.response.columnHeaders.header1) {
          $scope.columnOneName = $scope.response.columnHeaders.header1.value;
          $scope.columnOneShow = true;
          $scope.columnOneSortable = $scope.response.columnHeaders.header1.clickable;
          $scope.columnOneSortAsc = $scope.response.columnHeaders.header1.sortAsc;
          $scope.columnOneSortDesc = $scope.response.columnHeaders.header1.sortDesc;
        }
        if($scope.response.columnHeaders.header2) {
          $scope.columnTwoName = $scope.response.columnHeaders.header2.value;
          $scope.columnTwoShow = true;
          $scope.columnTwoSortable = $scope.response.columnHeaders.header2.clickable;
          $scope.columnTwoSortAsc = $scope.response.columnHeaders.header2.sortAsc;
          $scope.columnTwoSortDesc = $scope.response.columnHeaders.header2.sortDesc;
        }
        if($scope.response.columnHeaders.header3) {
          $scope.columnThreeName = $scope.response.columnHeaders.header3.value;
          $scope.columnThreeShow = true;
          $scope.columnThreeSortable = $scope.response.columnHeaders.header3.clickable;
          $scope.columnThreeSortAsc = $scope.response.columnHeaders.header3.sortAsc;
          $scope.columnThreeSortDesc = $scope.response.columnHeaders.header3.sortDesc;
        }
        if($scope.response.columnHeaders.header4) {
          $scope.columnFourName = $scope.response.columnHeaders.header4.value;
          $scope.columnFourShow = true;
          $scope.columnFourSortable = $scope.response.columnHeaders.header4.clickable;
          $scope.columnFourSortAsc = $scope.response.columnHeaders.header4.sortAsc;
          $scope.columnFourSortDesc = $scope.response.columnHeaders.header4.sortDesc;
        }
        if($scope.response.columnHeaders.header5) {
          $scope.columnFiveName = $scope.response.columnHeaders.header5.value;
          $scope.columnFiveShow = true;
          $scope.columnFiveSortable = $scope.response.columnHeaders.header5.clickable;
          $scope.columnFiveSortAsc = $scope.response.columnHeaders.header5.sortAsc;
          $scope.columnFiveSortDesc = $scope.response.columnHeaders.header5.sortDesc;
        }
        if($scope.response.columnHeaders.header6) {
          $scope.columnSixName = $scope.response.columnHeaders.header6.value;
          $scope.columnSixShow = true;
          $scope.columnSixSortable = $scope.response.columnHeaders.header6.clickable;
          $scope.columnSixSortAsc = $scope.response.columnHeaders.header6.sortAsc;
          $scope.columnSixSortDesc = $scope.response.columnHeaders.header6.sortDesc;
        }
        if($scope.response.columnHeaders.header7) {
          $scope.columnSevenName = $scope.response.columnHeaders.header7.value;
          $scope.columnSevenShow = true;
          $scope.columnSevenSortable = $scope.response.columnHeaders.header7.clickable;
          $scope.columnSevenSortAsc = $scope.response.columnHeaders.header7.sortAsc;
          $scope.columnSevenSortDesc = $scope.response.columnHeaders.header7.sortDesc;
        }
        if($scope.response.columnHeaders.header8) {
          $scope.columnEightName = $scope.response.columnHeaders.header8.value;
          $scope.columnEightShow = true;
          $scope.columnEightSortable = $scope.response.columnHeaders.header8.clickable;
          $scope.columnEightSortAsc = $scope.response.columnHeaders.header8.sortAsc;
          $scope.columnEightSortDesc = $scope.response.columnHeaders.header8.sortDesc;
        }
        if($scope.response.columnHeaders.header9) {
          $scope.columnNineName = $scope.response.columnHeaders.header9.value;
          $scope.columnNineShow = true;
          $scope.columnNineSortable = $scope.response.columnHeaders.header9.clickable;
          $scope.columnNineSortAsc = $scope.response.columnHeaders.header9.sortAsc;
          $scope.columnNineSortDesc = $scope.response.columnHeaders.header9.sortDesc;
        }
        if($scope.response.columnHeaders.header10) {
          $scope.columnTenName = $scope.response.columnHeaders.header10.value;
          $scope.columnTenShow = true;
          $scope.columnTenSortable = $scope.response.columnHeaders.header10.clickable;
          $scope.columnTenSortAsc = $scope.response.columnHeaders.header10.sortAsc;
          $scope.columnTenSortDesc = $scope.response.columnHeaders.header10.sortDesc;
        }
        if($scope.response.columnHeaders.header11) {
          $scope.columnElevenName = $scope.response.columnHeaders.header11.value;
          $scope.columnElevenShow = true;
          $scope.columnElevenSortable = $scope.response.columnHeaders.header11.clickable;
          $scope.columnElevenSortAsc = $scope.response.columnHeaders.header11.sortAsc;
          $scope.columnElevenSortDesc = $scope.response.columnHeaders.header11.sortDesc;
        }
        if($scope.response.columnHeaders.header12) {
          $scope.columnTwelveName = $scope.response.columnHeaders.header12.value;
          $scope.columnTwelveShow = true;
          $scope.columnTwelveSortable = $scope.response.columnHeaders.header12.clickable;
          $scope.columnTwelveSortAsc = $scope.response.columnHeaders.header12.sortAsc;
          $scope.columnTwelveSortDesc = $scope.response.columnHeaders.header12.sortDesc;
        }
      }

      function setTableBody(data, initial) {
        $scope.rows = [];
        for (var i = 0; i < data.rows.length; i++) {
          if(initial) {
            data.rows[i].show = true;
          }
          $scope.rows.push(data.rows[i]);
          if(data.rows[i].groupingRow) {
            for (var j = 0; j < data.rows[i].rows.length; j++) {
              if(initial) {
                data.rows[i].rows[j].show = false;
              }
              $scope.rows.push(data.rows[i].rows[j]);
              if(data.rows[i].rows[j].groupingRow) {
                for (var k = 0; k < data.rows[i].rows[j].rows.length; k++) {
                  $scope.rows.push(data.rows[i].rows[j].rows[k]);
                }
              }
            }
          }
        }
      }

      $scope.rowItemClicked = function(row, column) {

        if(row.groupingRow) {
          for (var i = 0; i < row.rows.length; i++) {
            row.rows[i].show = !row.rows[i].show;
            if(row.rows[i].groupingRow) {
              for (var j = 0; j < row.rows[i].rows.length; j++) {
                row.rows[i].rows[j].show = false;
              }
            }
          }
        } else {
          $scope.mycallback({obj:row.originalResult,column:column});
        }
      };

  }];


    return {
        restrict: 'E',
        templateUrl: 'app/components/table-one/table-one.directive.html',
        scope: {
          responsedata: '=',
          mycallback: '&',
          drilldownsort: '&'
        },
        controller: controller,
        link: link
    };

    function link() {
    }
  }

})();
