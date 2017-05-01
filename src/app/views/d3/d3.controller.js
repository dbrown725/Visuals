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

  function D3($scope, $stateParams, $http, $timeout) {
    var vm = this;
    vm.type = $stateParams.type;
    vm.downloadLink = '';
    vm.downloadPDF = function() {
      var e1 = angular.element(document.querySelectorAll('svg'));
      var configPost = {
                headers : {
                    'Content-Type': 'application/xml'
                }
            };

      $http.post('http://localhost:8080/pdf-generator/pdf/', e1[0].outerHTML, configPost).then(function(response) {
        vm.downloadLink = response.data.pdf;
        $timeout(clickHiddenElement, 500);
      }, function errorCallback(response) {
        console.log('POST error response', response);
      });
    };
  }

  function clickHiddenElement() {
    var elem = document.getElementById('hiddenLink');
    elem.click();
  }

})();
