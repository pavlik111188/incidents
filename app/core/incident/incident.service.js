'use strict';

//incidets.json
//http://localhost:3000/get-incidentList
angular.
module('core.incident').
factory('Incident', ['$resource',
    function($resource) {
        return $resource('http://localhost:3000/get-incidentList', {params: {url: 'https://dev15735.service-now.com/api/now/v1/table/incident', limit: 25}}, {
            query: {
                method: 'GET',
                isArray: true
            }
            /*getById: function (id) {
                var result = null;
                angular.forEach(mountains, function (m) {
                    if (m.id == id) result = m;
                });
                return result;
            },
            deleteById: function (id) {
                angular.forEach(mountains, function (m, i) {
                    if (id == m.id) {
                        mountains.splice(i, 1);
                    }
                });
            }*/
        });
    }
]);