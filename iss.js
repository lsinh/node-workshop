//loading request module
var request = require('request');

request ('http://api.open-notify.org/iss-now.json', function(error, response, body) {
    if (!error && response.statusCode === 200) {
       var theResult = JSON.parse(body); //parses the HTML body which will create object of the string
       var issPosition = theResult.iss_position;
       console.log(issPosition.latitude.toFixed(2) + ", " + issPosition.longitude.toFixed(2));
}}); 




