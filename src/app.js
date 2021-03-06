'use strict';

/**
 * @module Visuals
 *
 * @description
 * Main module of the application.
 */
angular
  .module('Visuals', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.when('', '/'); // redirect to root if the state is ''

    $urlRouterProvider.otherwise('/'); // redirect to root if state is not found
  });
