var h1 = document.querySelector("h1");
var isSkifta = false;

setInterval(function() {
    if (isSkifta) {
        h1.style.color = "yellow";
        h1.style.textAlign = "center";
    } else {
        h1.style.color = "white";
    }
    isSkifta = !isSkifta;
}, 2000);