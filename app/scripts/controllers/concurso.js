'use strict',

  /**
   * @ngdoc function
   * @name simuladorMegaApp.controller:ConcursoCtrl
   * @description
   * # ConcursoCtrl
   * Controller of the simuladorMegaApp
   */
  angular.module('simuladorMegaApp')
    .controller('ConcursoCtrl', ['concursofinder', function (concursos) {

      this.items = '';
      
      concursos.getConcursos().then(function (data) {
        this.items = data;
      })

    }]);


      // this.items =[
      //   {
      //     Id: 1,
      //     Data: '20/10/2018',
      //     Numeros: [1, 2, 3, 4, 5, 6],
      //     GanhadorSena: 'eu',
      //     GanhadorQuina: 'você',
      //     GanhadorQuadra: 'ele',

      //     ValorSena: 1000,
      //     ValorQuina: 100,
      //     ValorQuadra: 10,
      //   },
      //   {
      //     Id: 2,
      //     Data: '21/10/2018',
      //     Numeros: [1, 2, 3, 4, 5, 6,],
      //     GanhadorSena: 'eu',
      //     GanhadorQuina: 'você',
      //     GanhadorQuadra: 'ele',

      //     ValorSena: 1000,
      //     ValorQuina: 100,
      //     ValorQuadra: 10,
      //   },
      //   {
      //     Id: 3,
      //     Data: '22/10/2018',
      //     Numeros: [1, 2, 3, 4, 5, 6,],
      //     GanhadorSena: 'eu',
      //     GanhadorQuina: 'você',
      //     GanhadorQuadra: 'ele',

      //     ValorSena: 1000,
      //     ValorQuina: 100,
      //     ValorQuadra: 10,
      //   }
      // ]
