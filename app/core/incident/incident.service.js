'use strict';

angular.
module('core.incident').
factory('Incident', ['$resource',
    function($resource) {
        return $resource('http://localhost:3000/get-incidentList', {params: {url: 'https://dev15735.service-now.com/api/now/v1/table/incident', limit: 25}}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
]);