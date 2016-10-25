'use strict';

(function() {

  angular
    .module('Visuals')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.d3', {
          url         : '/d3/:type',
          templateUrl : 'app/views/d3/d3.view.html',
          controller  : 'D3',
          controllerAs: 'D3',
          title       : 'D3'
        });
    });

})();
