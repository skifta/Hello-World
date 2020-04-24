console.log("Print All Numbers Between -10 and 20");
var count = -10;
while (count <= 20) {
    console.log(count);
    count++;
}
console.log("Print All Even Numbers Between 10 and 40");
var count = 10;
while (count <= 40) {
    console.log(count);
    count += 2;
}

console.log("Print All Odd Numbers Between 300 and 333");

var count = 300;
while (count <= 333) {
    if (count % 2 !== 0) {
        console.log(count);
    }
    count += 1;
}
console.log("Print All Numbers Divisible by 5 and 3 Between 5 and 50");

var count = 5;
while (count <= 50) {
    if (count % 5 == 0 && count % 3 == 0) {
        console.log(count);
    }
    count += 1;
}