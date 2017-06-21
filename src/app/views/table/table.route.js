'use strict';

(function() {

  angular
    .module('Visuals')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.table', {
          url         : '/table',
          templateUrl : 'app/views/table/table.view.html',
          controller  : 'Table',
          controllerAs: 'Table',
          title       : 'Table'
        });
    });

})();
