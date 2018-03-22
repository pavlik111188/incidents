'use strict';

// Register `incidentDetail` component, along with its associated controller and template
angular.
module('incidentDetail').
component('incidentDetail', {
    templateUrl: 'incident-detail/incident-detail.template.html',
    controller: ['$routeParams', 'Incident',
        function IncidentDetailController($routeParams, Incident) {
            var self = this;
            self.incident = Incident.get({incidentId: $routeParams.incidentId}, function(incident) {
                self.setImage(incident.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});