/**
 * Created by Pavel S on 22.05.17.
 */

const express = require('express');
const router = express.Router();
const request = require("request");
const forEach = require('async-foreach').forEach;
const options = { method: 'GET',
    headers:
        { 'postman-token': '53b1d2a2-a82c-a642-b005-297483701440',
            'cache-control': 'no-cache',
            authorization: 'Basic YWRtaW46Z1QyNyhtblMxb2lrZ2dXMV4zbHZiZEs=',
            'content-type': 'application/json;charset=UTF-8',
            'x-usertoken': 'efc6d3c1db011300a11373278c961937f750805175e58cae965dc7ecf22c0ed3e7773cc4',
            accept: 'application/json' },
    form:
        { data: '{\'short_description\':\'Unable to connect to office wifi\',\'assignment_group\':\'287ebd7da9fe198100f92cc8d1d2154e\',\'urgency\':\'2\',\'impact\':\'2\'}',
            user: '\'pavlo111188@gmail.com\':\'gT27(mnS1oikggW1^3lvbdK\'' } };

// test
router.get('/get-incidentList', function ( req, res) {
    var params = JSON.parse(req.query.params);
    var url = params.url;
    var limit = params.limit;
    options.url = url;
    options.qs = {sysparm_limit: limit};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var incidents = JSON.parse(response.body).result;
        var t = 1;
        forEach(incidents, function(item, index, arr) {
            var id = index;
            var coller_link = item.caller_id.link;
            options.url = coller_link;
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                incidents[id].caller = JSON.parse(response.body).result.name;
                if (t == incidents.length) {
                    res.send(incidents);
                }
                t++;
            });
        }, function (err) {

        });
        /*for (var i=0; i < incidents.length; i++) {
            var inc = {incidents: incidents, id: i};
            var coller_link = incidents[i].caller_id.link;
            console.log(incidents[i].caller_id.link);
            options.url = coller_link;
            figlet(inc, function (err, data) {
                request(options, function (error, response, body) {
                    if (error) throw new Error(error);
                    // incidents[i].caller = JSON.parse(response.body).result.name;
                    console.log(inc.id);
                    console.log('====================');
                });
            });
        }*/
    });
});
module.exports = router;
