1.-- -- -- -
function Skifta() {
    console.log("Skifter Komati");
}
Skifta()

2.-- -- -- -
function Skifta(name) {
    console.log("Hello there " + name + "!");
}
Skifta("Skifter");

3.-- -- -- -
function area(length, width) {
    console.log(length * width);
}
area(5, 2);

4.-- -- -- -
function greet(person1, person2, person3) {
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);
}
greet("Dritero", "Petrit", "Skifter");

5.-- -- -- -
function square(x) {
    console.log(x * x);
}
square(5)

6.-- -- -- -
function square(x) {
    return x * x;
}
square(4)
"4 squared is: " + square(4)

7.-- -- -- -
var result = square(104);
result

8.-- -- -- -
function test(x, y) {
    return y - x;
}
test(10, 40);

9.-- -- -- -
function test(x) {
    return x * 2;
    console.log(x);
    return x / 2;
}
test(40);