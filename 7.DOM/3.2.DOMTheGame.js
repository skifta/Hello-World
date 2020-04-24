var P1button = document.querySelector("#P1");
var P2button = document.querySelector("#P2");
var Display = document.querySelector(".Display");
var Display2 = document.querySelector(".Display2");
var P1score = 0;
var P2score = 0;

P1button.addEventListener("click", function() {
    P1score++;
    Display.textContent = P1score;
});

P2button.addEventListener("click", function() {
    P2score++;
    Display2.textContent = P2score;
});