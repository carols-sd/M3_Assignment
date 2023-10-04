
// Larger or Smaller?
// Usage: Use simple conditional statements
//
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.

let int1 = parseInt(prompt("Please enter an integer:"));
let int2 = parseInt(prompt("Please enter a second integer:"));

if (!isNaN(int1) && !isNaN(int2)) {  // checking to make sure there are two integers
    
    document.write("The largest integer is: ")
    if (int1 >= int2) {
        document.write(int1);
    }
    else {
        document.write(int2);
    }
}


