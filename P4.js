console.log("PANB -10 to 20")
var count = -10;
while (count < 20) {
    console.log(count);
    count++;
}
console.log("PAENB 10 to 40")
var count = 10;
while (count < 41) {
    console.log(count);
    count += 2;
}
console.log("PAONB 300 to 333")
var count = 300;
while (count < 333) {
    if (count % 2 !== 0) {
        console.log(count);
    }
    count += 1;
}
console.log("PAONB 300 to 333")
var count = 5;
while (count < 50) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
    count += 1;
}