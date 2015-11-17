var prompt = require('prompt');

prompt.get(['location'], function (err, result) {
    var userInput = result.location;
    console.log('  location: ' + userInput);
});

 