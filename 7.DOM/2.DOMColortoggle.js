var button = document.querySelector("button");
var isSkifta = false;

button.addEventListener("click", function() {
    if (isSkifta) {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    }
    isSkifta = !isSkifta;
});