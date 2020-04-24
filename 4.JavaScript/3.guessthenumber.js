var number = 22;
var guess = prompt("Guess the number");
if (guess == 22) {
    alert("GREAT, YOU GUESSED THE NUMBER");
} else if (guess < 22) {
    alert("You are too low, guess again");
} else {
    alert("You are too high, guess again");
}