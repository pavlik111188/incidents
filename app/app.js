'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'core',
    'incidentDetail',
    'incidentList'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/incidents', {
        template: '<incident-list></incident-list>'
    }).
    when('/incidents/:incidentId', {
        template: '<incident-detail></incident-detail>'
    }).
    otherwise('/incidents');
}]);
