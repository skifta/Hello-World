var P1button = document.querySelector("#P1");
var P2button = document.querySelector("#P2");
var resetbutton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var inp = document.querySelector(".inp");
var Display = document.querySelector(".Display");
var Display2 = document.querySelector(".Display2");
var P1score = 0;
var P2score = 0;
var gameOver = false;
var winningGame = 5;

P1button.addEventListener("click", function() {
    if (!gameOver) {
        P1score++;
        if (P1score == winningGame) {
            Display.classList.add("winner");
            gameOver = true;
        }
        Display.textContent = P1score;
    }
})

P2button.addEventListener("click", function() {
    if (!gameOver) {
        P2score++;
        if (P2score == winningGame) {
            Display2.classList.add("winner");
            gameOver = true;
        }
        Display2.textContent = P2score;
    }
});

resetbutton.addEventListener("click", function() {
    reset();
})

function reset() {
    P1score = 0;
    P2score = 0;
    Display.textContent = 0;
    Display2.textContent = 0;
    Display.classList.remove("winner");
    Display2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function() {
    inp.textContent = numInput.value;
    winningGame = numInput.value;
    reset();
})