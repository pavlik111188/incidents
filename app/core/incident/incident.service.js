'use strict';

angular.
module('core.incident').
factory('Incident', ['$resource',
    function($resource) {
        return $resource('json/:incidentId.json', {}, {
            query: {
                method: 'GET',
                params: {incidentId: 'incidents'},
                isArray: true
            }
        });
    }
]);