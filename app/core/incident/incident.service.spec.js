'use strict';

describe('Incident', function() {
    var $httpBackend;
    var Incident;
    var incidentsData = [
        {name: 'Incident X'},
        {name: 'Incident Y'},
        {name: 'Incident Z'}
    ];

    // Add a custom equality tester before each test
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `incident` service before each test
    beforeEach(module('core.incident'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _incident_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('json/incidents.json').respond(incidentsData);

        Incident = _incident_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the incidents data from `/json/incidents.json`', function() {
        var incidents = Incident.query();

        expect(incidents).toEqual([]);

        $httpBackend.flush();
        expect(incidents).toEqual(incidentsData);
    });

});