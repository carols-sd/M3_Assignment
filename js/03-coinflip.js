
// The “Coin Flip” Game
// Usage: Use nested conditional statements

// In this part of the assignment you will explore what you’ve learned so far about variables,
// prompts, conditionals, operators, math, and more to create a “coin flip game”. 
// To complete the game follow the steps outlined below:
// Begin your application by creating a variable called coinFlip and set it equal to a 
// random number. You will have to use a Math method to get this number:
// let randomNum = Math.round(Math.random())
//
// Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
// Use a conditional to check the result of the coin flip. 
// If it’s less than a certain number, it will be heads.
// If it’s greater than a certain number, it will be tails.
// If the result is heads and the user selects heads, display the following message within an alert:
// The flip was heads and you chose heads...you win!
// If the result is heads and the user selects tails, display the following message within an alert:
// The flip was heads but you chose tails...you lose!
// If the result is tails and the user selects heads, display the following message within an alert:
// The flip was tails but you chose heads...you lose!
// If the result is tails and the user selects tails, display the following message within an alert:
// The flip was tails and you chose tails...you win!

let choice, flip, randomNum;
let strResponse = "Sorry, to play you need to enter heads or tails.";

// Prompt player to chose heads or tails
choice = prompt("Enter heads or tails: ");

// Play the game, if user didn't cancel
if (choice) { 
    choice = choice.toLowerCase();

    if (choice=="heads" || choice=="tails") {
    
        // Do coin flip to get heads (1) or tails (0)
        randomNum = Math.round(Math.random());
        randomNum ? flip = "heads" : flip = "tails";

        //console.log(choice, randomNum, flip);

        // Did the player win?
        if (choice==flip) {
            strResponse = "The flip was " + flip + " and you chose " + choice + "... you win!";
        }
        else {
            strResponse = "The flip was " + flip + " but you chose " + choice + "... you lose!";
        }
    }

    // Write results
    alert(strResponse);

}


