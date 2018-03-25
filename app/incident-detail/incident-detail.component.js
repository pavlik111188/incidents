'use strict';

// Register `incidentDetail` component, along with its associated controller and template
angular.
module('incidentDetail').
component('incidentDetail', {
    templateUrl: 'incident-detail/incident-detail.template.html',
    controller: ['$routeParams', 'Incident',
        function IncidentDetailController($routeParams, Incident) {
        console.log($routeParams.incidentId);

        }
    ]
});