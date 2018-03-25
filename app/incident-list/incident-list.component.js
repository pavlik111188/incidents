'use strict';
var app = angular.module('incidentList', []);

app.filter('getState', function () {
    return function (item) {
        var result;
        switch (item) {
            case "7":
                result = 'In Progress';
                break;
            case "3":
                result = 'On Hold';
                break;
            case "2":
                result = 'New';
                break;
            default:
                result = 'New';
                break;
        }
        return result;
    };
});
// Register `incidentList` component, along with its associated controller and template
app.
component('incidentList', {
    templateUrl: 'incident-list/incident-list.template.html',
    controller: ['$scope', '$modal', '$log', 'Incident',
        function IncidentListController($scope, $modal, $log, Incident) {
            var totalCount = 0;
            var inProgress = 0;
            var onHold = 0;
            var newState = 0;
            var data;
            var ctx = document.getElementById("doughnut").getContext('2d');
            Incident.query().$promise.then(function (incidentsRes) {
                for (var i=0; i<incidentsRes.length; i++) {

                    switch (incidentsRes[i].state) {
                        case "7":
                            inProgress ++;
                            break;
                        case "3":
                            onHold ++;
                            break;
                        case "2":
                            newState ++;
                            break;
                        default:
                            console.log('def');
                            break;
                    }
                }
                return inProgress;
            }).then(function (inProgress) {
                data = [inProgress, onHold, newState];
                totalCount = inProgress + onHold + newState;
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ["New", "In Progress", "On Hold"],
                        datasets: [{
                            label: '# of Votes',
                            data: data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: totalCount + ' in total',
                            position: 'top'
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                // This more specific font property overrides the global property
                                fontColor: 'black'
                            }
                        },
                        scales: {
                            yAxes: [
                                {
                                    id: 'y-axis-1',
                                    type: 'doughnut',
                                    display: true,
                                    position: 'left'
                                }
                            ]
                        }
                    }
                })
            });
            this.stateStatus = function (data) {
                return 'text';
            };
            this.incidents = Incident.query();
            this.orderProp = 'opened_at';
            this.labelsL = ["January", "February", "March", "April", "May", "June", "July"];
            this.seriesL = ['Series A'];
            this.dataL = [65, 59, 80, 81, 56, 55, 40];
            this.datasetOverrideL = [{ yAxisID: 'y' }];
            this.optionsL = {
                scales: {
                    yAxes: [
                        {
                            id: 'y',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        }
                    ]
                }
            };

            //new
        }
    ]
});