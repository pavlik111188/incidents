'use strict';

describe('incidentDetail', function() {

    // Load the module that contains the `incidentDetail` component before each test
    beforeEach(module('incidentDetail'));

    // Test the controller
    describe('IncidentDetailController', function() {
        var $httpBackend, ctrl;
        var xyzIncidentData = {
            name: 'incident xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('json/incidents.json').respond(xyzIncidentData);

            $routeParams.incidentId = 'xyz';

            ctrl = $componentController('incidentDetail');
        }));

        it('should fetch the incident details', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.incident).toEqual({});

            $httpBackend.flush();
            expect(ctrl.incident).toEqual(xyzIncidentData);
        });

    });

});