console.log("Print All Numbers Between -10 and 20");
for (i = -10; i <= 20; i++) {
    console.log(i);
}

console.log("Print All Even Numbers Between 10 and 40");
for (i = 10; i <= 40; i += 2) {
    console.log(i);
}

console.log("Print All Odd Numbers Between 300 and 333");
for (i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Print All Numbers Divisible by 5 and 3 Between 5 and 50");
for (i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}