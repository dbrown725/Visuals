'use strict';

(function() {

  angular
    .module('Visuals')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.google', {
          url         : '/google/:type',
          templateUrl : 'app/views/google/google.view.html',
          controller  : 'Google',
          controllerAs: 'Google',
          title       : 'Google'
        });
    });

})();
