'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:RoutingController
 * @description
 * # RoutingController
 * Define controller for routing
 */
angular.module('cvApp')
.controller('RoutingController', function($scope, $routeParams){
  $scope.version = $routeParams.version;
  
  if($routeParams.version === 'FR')
  {
    $scope.enseignements = $scope.enseignementsFR;
    $scope.publications = $scope.publicationsFR;
    $scope.aboutMe =  $scope.aboutMeFR;
    $scope.coordonnees =  $scope.coordonneesFR;
  }
  else  if($routeParams.version === 'EN')	  
  {
    $scope.enseignements = $scope.enseignementsEN;
    $scope.publications = $scope.publicationsEN;
    $scope.aboutMe =  $scope.aboutMeEN;
    $scope.coordonnees =  $scope.coordonneesEN;
  }
  
});
    
  

/**
 * @ngdoc function
 * @name cvApp.controller:LoadingJsonController
 * @description
 * # LoadingJsonController
 * Define controller for loading json files
 */
angular.module('cvApp')
.controller('LoadingJsonController', function($scope, jsonFactory) {
    jsonFactory.fetch('data/cv-fr.json').then(function(data) {
        $scope.enseignementsFR = data.enseignements;
        $scope.publicationsFR = data.publications;
        $scope.aboutMeFR = data.aboutMe;
        $scope.coordonneesFR = data.coordonnees;
    });
            
    jsonFactory.fetch('data/cv-en.json').then(function(data) {
        $scope.enseignementsEN = data.enseignements;
        $scope.publicationsEN = data.publications;
        $scope.aboutMeEN = data.aboutMe;
        $scope.coordonneesEN = data.coordonnees;
    });    
    
});