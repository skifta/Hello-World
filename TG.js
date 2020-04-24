var P1button = document.querySelector("#P1");
var P2button = document.querySelector("#P2");
var Display = document.querySelector(".Display");
var Display2 = document.querySelector(".Display2");
var resetbutton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p span");
P1score = 0;
P2score = 0;
gameover = false;
winninggame = 5;

P1button.addEventListener("click", function() {
    if (!gameover) {
        P1score++;
        if (winninggame == P1score) {
            Display.classList.add("winner");
            gameover = true;
        }
    }
    Display.textContent = P1score;
});

P2button.addEventListener("click", function() {
    if (!gameover) {
        P2score++;
        if (winninggame == P2score) {
            Display2.classList.add("winner");
            gameover = true;
        }
    }
    Display2.textContent = P2score;
});

resetbutton.addEventListener("click", function() {
    reset()
})

function reset() {
    P1score = 0;
    P2score = 0;
    Display.textContent = 0;
    Display2.textContent = 0;
    Display.classList.remove("winner");
    Display2.classList.remove("winner");
    gameover = false;
}

numInput.addEventListener("change", function() {
    p.textContent = numInput.value;
    winninggame = numInput.value;
    reset();
})