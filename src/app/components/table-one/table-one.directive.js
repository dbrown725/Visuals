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

    var controller = ['$scope', '$element', '$attrs', '$http', function ($scope, $element, $attrs, $http) {
      $scope.$watch('responsedata', function(newValue, oldValue) {
        if(Object.keys(newValue).length) {
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

      $scope.response = {};
      $scope.rows = [];
      $scope.currentSortColumn = '';
      $scope.sortAscending = true;

      $scope.sortColumn = function(columnNumber) {
        console.log('columnNumber', columnNumber);
        if(columnNumber === $scope.currentSortColumn) {
          $scope.sortAscending = !$scope.sortAscending;
        } else {
          $scope.currentSortColumn = columnNumber;
          $scope.sortAscending = true;
        }
        function compare(a,b) {
          var val1 = a['column' + columnNumber].value;
          var val2 = b['column' + columnNumber].value;
          if(a['column' + columnNumber].number) {
            //console.log('is number');
            val1 = Number(a['column' + columnNumber].value);
            val2 = Number(b['column' + columnNumber].value);
          }
          //console.log('val1: ', val1);
          //console.log('val1: ', val2);
          if($scope.sortAscending) {
            console.log('ascending');
            if (val1 < val2) {
              return -1;
            }
            if (val1 > val2) {
              return 1;
            }
            return 0;
          } else {
            console.log('descending');
            if (val1 < val2) {
              return 1;
            }
            if (val1 > val2) {
              return -1;
            }
            return 0;
          }
        }

        if($scope.rows && !$scope.rows[0].groupingRow) {
          console.log('$scope.response.rows', $scope.response.rows);
          $scope.response.rows.sort(compare);
          setTableBody($scope.response, false);
        } else {
          // var hasValue = false;
          // for (var i = 0; i < $scope.response.rows.length; i++) {
          //   if($scope.response.rows) {
          //     hasValue = true;
          //     break;
          //   }
          // }
          // console.log('hasValue', hasValue);
          // if(hasValue) {
          //   $scope.response.rows.sort(compare);
          // } else {
          //   for (var j = 0; j < $scope.response.rows.length; j++) {
          //     //console.log('subRows', $scope.response.rows[i])
          //     $scope.response.rows[j].rows.sort(compare);
          //   }
          // }
          for (var j = 0; j < $scope.response.rows.length; j++) {
            //console.log('subRows', $scope.response.rows[i])
            $scope.response.rows[j].rows.sort(compare);
          }

          setTableBody($scope.response, false);
        }
      };

      function clearTable() {
          $scope.columnOneName = 'Header One';
          $scope.columnOneShow = false;
          $scope.columnOneSortable = false;
          $scope.columnTwoName = 'Header Two';
          $scope.columnTwoShow = false;
          $scope.columnTwoSortable = false;
          $scope.columnThreeName = 'Header Three';
          $scope.columnThreeShow = false;
          $scope.columnThreeSortable = false;
          $scope.columnFourName = 'Header Four';
          $scope.columnFourShow = false;
          $scope.columnFourSortable = false;
          $scope.columnFiveName = 'Header Five';
          $scope.columnFiveShow = false;
          $scope.columnFiveSortable = false;
          $scope.columnSixName = 'Header Six';
          $scope.columnSixShow = false;
          $scope.columnSixSortable = false;
          $scope.columnSevenName = 'Header Seven';
          $scope.columnSevenShow = false;
          $scope.columnSevenSortable = false;
          $scope.columnEightName = 'Header Eight';
          $scope.columnEightShow = false;
          $scope.columnEightSortable = false;
          $scope.columnNineName = 'Header Nine';
          $scope.columnNineShow = false;
          $scope.columnNineSortable = false;
      }

      function setTableHeaders() {
        if($scope.response.columnHeaders.header1) {
          $scope.columnOneName = $scope.response.columnHeaders.header1.value;
          $scope.columnOneShow = true;
          $scope.columnOneSortable = $scope.response.columnHeaders.header1.clickable;
        }
        if($scope.response.columnHeaders.header2) {
          $scope.columnTwoName = $scope.response.columnHeaders.header2.value;
          $scope.columnTwoShow = true;
          $scope.columnTwoSortable = $scope.response.columnHeaders.header2.clickable;
        }
        if($scope.response.columnHeaders.header3) {
          $scope.columnThreeName = $scope.response.columnHeaders.header3.value;
          $scope.columnThreeShow = true;
          $scope.columnThreeSortable = $scope.response.columnHeaders.header3.clickable;
        }
        if($scope.response.columnHeaders.header4) {
          $scope.columnFourName = $scope.response.columnHeaders.header4.value;
          $scope.columnFourShow = true;
          $scope.columnFourSortable = $scope.response.columnHeaders.header4.clickable;
        }
        if($scope.response.columnHeaders.header5) {
          $scope.columnFiveName = $scope.response.columnHeaders.header5.value;
          $scope.columnFiveShow = true;
          $scope.columnFiveSortable = $scope.response.columnHeaders.header5.clickable;
        }
        if($scope.response.columnHeaders.header6) {
          $scope.columnSixName = $scope.response.columnHeaders.header6.value;
          $scope.columnSixShow = true;
          $scope.columnSixSortable = $scope.response.columnHeaders.header6.clickable;
        }
        if($scope.response.columnHeaders.header7) {
          $scope.columnSevenName = $scope.response.columnHeaders.header7.value;
          $scope.columnSevenShow = true;
          $scope.columnSevenSortable = $scope.response.columnHeaders.header7.clickable;
        }
        if($scope.response.columnHeaders.header8) {
          $scope.columnEightName = $scope.response.columnHeaders.header8.value;
          $scope.columnEightShow = true;
          $scope.columnEightSortable = $scope.response.columnHeaders.header8.clickable;
        }
        if($scope.response.columnHeaders.header9) {
          $scope.columnNineName = $scope.response.columnHeaders.header9.value;
          $scope.columnNineShow = true;
          $scope.columnNineSortable = $scope.response.columnHeaders.header9.clickable;
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
                console.log('has second grouping');
                for (var k = 0; k < data.rows[i].rows[j].rows.length; k++) {
                  console.log('data.rows[i].rows[j].rows', data.rows[i].rows[j].rows);
                  $scope.rows.push(data.rows[i].rows[j].rows[k]);
                }
              }
            }
          }
        }
      }

      $scope.rowItemClicked = function(row, column) {

        if(row.groupingRow) {
          console.log('Is a grouping row item');
          for (var i = 0; i < row.rows.length; i++) {
            console.log('row.rows[i]', row.rows[i]);
            row.rows[i].show = !row.rows[i].show;
            if(row.rows[i].groupingRow) {
              for (var j = 0; j < row.rows[i].rows.length; j++) {
                row.rows[i].rows[j].show = false;
              }
            }
          }
        } else {
          console.log('Is not a grouping row item');
          console.log('column', column);
          console.log('row.originalResult', row.originalResult);
          //$scope.mycallback(row.originalResult, column);
          $scope.mycallback({obj:row.originalResult,column:column});
        }
      };

  }];


    return {
        restrict: 'E',
        templateUrl: 'app/components/table-one/table-one.directive.html',
        scope: {
          responsedata: '=',
          mycallback: '&'
        },
        controller: controller,
        link: link
    };

    function link() {
    }
  }

})();
