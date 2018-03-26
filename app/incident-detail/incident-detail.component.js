'use strict';

// Register `incidentDetail` component, along with its associated controller and template
angular.
module('incidentDetail').
component('incidentDetail', {
    templateUrl: 'incident-detail/incident-detail.template.html',
    controller: ['$scope', '$routeParams', '$location', 'Incident',
        function IncidentDetailController($scope, $routeParams, $location, Incident) {
        this.incindents = Incident.query();
            var self = this;

            self.setIncident = function setImage(inc) {
                self.incident = inc;
            };
            this.incindents.$promise.then(function (incidentsRes) {
                for (var i=0; i<incidentsRes.length; i++) {
                    if ($routeParams.incidentId === incidentsRes[i].number) {
                        self.setIncident(incidentsRes[i]);
                    }
                }
            });
        }
    ]
});