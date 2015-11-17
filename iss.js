//Code needed for program to run
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
}



//loading request modules
var request = require('request');
var prompt = require('prompt');



//asking user for location
console.log("Enter Your Location");

prompt.start();

prompt.get(['location'], function(err, result) {
            var userLocation = result.location;

            request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userLocation, function(error, response, body) {
                        if (!error && response.statusCode === 200) {
                            var userLatLng = JSON.parse(body);
                            var userLat = userLatLng.results[0].geometry.location.lat;
                            var userLng = userLatLng.results[0].geometry.location.lng;


                            request('http://api.open-notify.org/iss-now.json', function(error, response, body) {
                                        if (!error && response.statusCode === 200) {
                                            var issLatLng = JSON.parse(body);
                                            var issLat = issLatLng.iss_position.latitude;
                                            var issLng = issLatLng.iss_position.longitude;
                                        


                                            var R = 6371000; // metres
                                            var φ1 = userLat.toRadians();
                                            var φ2 = issLat.toRadians();
                                            var Δφ = (issLat - userLat).toRadians();
                                            var Δλ = (issLng - userLng).toRadians();

                                            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                                                Math.cos(φ1) * Math.cos(φ2) *
                                                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                                            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                                            var d = R * c;


                                            console.log("the distance between you and the ISS is " + d);
                                       }); 
                                
                            });
                            });
