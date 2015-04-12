'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get("data/data.json") .success(function(data) {
      $scope.data = data;
    });

    $(".competence").hide();

    $(".navbar, .navbar-header, .btn-navbar").click(function() {
      $('.competence').fadeOut();
    })

    $("#CompeSpecialiseesClic").click(function() {
      $('.competence').hide();
      $('#CompeSpecialisees').fadeIn();
    })

    $("#CompeAssocieesClic").click(function() {
      $('.competence').hide();
      $('#CompeAssociees').fadeIn();
    })

    $("#RealisationClic").click(function() {
      $('.competence').hide();
      $('#Realisation').fadeIn();
    })

    $scope.submit = function(contactform) {

      // Simulation de l'envoi

      $('#formulaire').hide();
      var element = jQuery('<button type="button" class="btn btn-lg btn-primary btn-block" disabled="disabled">' + "Votre message vient d\'être envoyé !" + '</button>');
      $(element).fadeIn().appendTo('#formOk');
    }

  });
