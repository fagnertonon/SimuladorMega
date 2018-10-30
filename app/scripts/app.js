'use strict';

/**
 * @ngdoc overview
 * @name simuladorMegaApp
 * @description
 * # simuladorMegaApp
 *
 * Main module of the application.
 */
angular
  .module('simuladorMegaApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/concurso.html',
        controller: 'ConcursoCtrl as concursos'
      })
      .state('bilhetes', {
        url: '/bilhetes',
        templateUrl: 'views/bilhetes.html',
        controller: 'BilhetesCtrl as bilhetes'
      })
  }]);
