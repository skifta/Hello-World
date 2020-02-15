var Number = 22;
var guess = prompt("Guess the number");
if (guess == Number) {
    alert("GREAT, YOU MADE IT");
} else if (guess > Number) {
    alert("YOU ARE TOO HIGH, GUESS AGAIN");
} else {
    alert("YOU ARE TOO LOW, GUESS AGAIN");
}