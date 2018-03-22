'use strict';

describe('incidentList', function() {

    // Load the module that contains the `incidentList` component before each test
    beforeEach(module('incidentList'));

    // Test the controller
    describe('IncidentListController', function() {
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('json/incidents.json')
                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            ctrl = $componentController('incidentList');
        }));

        it('should create a `incident` property with 2 incidents fetched with `$http`', function() {
            jasmine.addCustomEqualityTester(angular.equals);

            expect(ctrl.incidents).toEqual([]);

            $httpBackend.flush();
            expect(ctrl.incidents).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });

        it('should set a default value for the `orderProp` property', function() {
            expect(ctrl.orderProp).toBe('Caller');
        });

    });

});