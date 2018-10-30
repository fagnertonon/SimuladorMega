'use strict';

/**
 * @ngdoc service
 * @name simuladorMegaApp.simulador
 * @description
 * # simulador
 * Service in the simuladorMegaApp.
 */
angular.module('simuladorMegaApp')
  .service('simulador', function () {

    this.GerarSorteio = function (min, max, qtd) {
      // let
    }
  });


function gerarNumerosSorteio(min, max, qtd) {

  let numeros = [qtd];

  for (let i = 0; i < numeros.length; i++) {
    let numero = Math.random() * (max - min) + min;

    if (!numeros.indexOf(numero)) {
      numeros.push(numero);
    }
  }

  return numeros;
}