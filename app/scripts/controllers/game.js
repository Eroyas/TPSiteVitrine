'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('GameCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
