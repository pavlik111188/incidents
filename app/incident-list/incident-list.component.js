'use strict';

// Register `incidentList` component, along with its associated controller and template
angular.
module('incidentList').
component('incidentList', {
    templateUrl: 'incident-list/incident-list.template.html',
    controller: ['Incident',
        function IncidentListController(Incident) {
            this.incidents = Incident.query();
            this.orderProp = 'opened_at';
            console.log('test', this);
        }
    ]
});