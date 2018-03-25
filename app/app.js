'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'core',
    'ui.bootstrap',
    'chart.js',
    'smart-table',
    'incidentDetail',
    'incidentList'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/incidents', {
        template: '<incident-list></incident-list>'
    }).
    when('/incident/:incidentId', {
        template: '<incident-detail></incident-detail>'
    }).
    otherwise('/incidents');
}]);
