var prompt = require('prompt');

var rightNumber = Math.floor(Math.random() * 4) + 1;
var turns = 4;

function guessItRight() {
  if (turns > 0) {                                  
    prompt.get(['userInput'], function (err, result)  {
            if (result.userInput == rightNumber){             //if we don't use a truthy operator, even returning the exact number will not yield a TRUE outcome
        console.log("You chose " + rightNumber + "." +"You win!");
        return;                   //to exit out of the function body when condition is met
    } 
            else if (result.userInput != rightNumber)   
            {
            console.log("try again!");
     }
     turns = turns - 1 ;
     guessItRight();
     
        });
    
  } else { console.log("You lose! The correct number was " + rightNumber);
}
}

guessItRight();




    
        
        
    