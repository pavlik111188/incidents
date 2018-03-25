'use strict';

//incidets.json
//http://localhost:4200/get-incidentList
angular.
module('core.incident').
factory('Incident', ['$resource',
    function($resource) {
        return $resource('incidets.json', {params: {url: 'https://dev15735.service-now.com/api/now/v1/table/incident', limit: 25}}, {
            query: {
                method: 'GET',
                cancellable: true,
                isArray: true
            }
        });
    }
]);