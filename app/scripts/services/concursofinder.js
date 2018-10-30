'use strict';

/**
 * @ngdoc service
 * @name simuladorMegaApp.concursoFinder
 * @description
 * # concursoFinder
 * Service in the simuladorMegaApp.
 */
angular.module('simuladorMegaApp')
  .service('concursoFinder', function () {
    this.getConcursos = function () {
      return $get('/concursos.json');
    }
  });
