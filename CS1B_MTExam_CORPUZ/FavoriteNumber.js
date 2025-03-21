//CORPUZ CHARLES ADRIAN G.
//BSCS 1B - MTE-4

// Declare a variable for the favorite number  
let favoriteNumber = 7; // You can change this to any number  

// Start guessing  
let guess = prompt("Guess my favorite number:");  

// Loop until the guess is correct  
while (guess != favoriteNumber) {  
    if (guess < favoriteNumber) {  
        console.log("Too low! Try again.");  
    } else {  
        console.log("Too high! Try again.");  
    }  
    guess = prompt("Guess my favorite number:");  
}  

// When the guess is correct  
console.log("Correct! Great job!");  