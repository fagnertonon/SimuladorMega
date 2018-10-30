'use strict',

  /**
   * @ngdoc function
   * @name simuladorMegaApp.controller:ConcursoCtrl
   * @description
   * # ConcursoCtrl
   * Controller of the simuladorMegaApp
   */
  angular.module('simuladorMegaApp')
    .controller('ConcursoCtrl', ['concursoFinder', function (concursos) {

      let vm = this;

      concursos.getConcursos().then(function (data) {
        vm.items = data;
      })

    }]);
