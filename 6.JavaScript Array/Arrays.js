1.-- -- -- -
var friends = ["Charlie", "Liz", "David", "Mattias"];

2.-- -- -- -
var friends = ["Charlie", "Liz", "David", "Mattias"];
console.log(friends[0]);
friends[1] + "<3" + friends[2];

3.-- -- -- -
var friends = ["Charlie", "Liz", "David", "Mattias"];
//replace
friends[0] = "Chuck";
friends[1] = "Lizzie";

4.-- -- -- -
var friends = ["Charlie", "Liz", "David", "Mattias"];
//add another one
friends[4] = "Emilie";
friends.length

5.-- -- -- -
var colors = ["red", "blue", "orange", "yellow"];
//add another one in the end
//remove another one in the end
colors.push("green");
colors.pop();

6.-- -- -- -
var colors = ["red", "blue", "orange", "yellow"];
//add another one in the beggining
//remove another one in the beggining
colors.unshift("infrared");
colors.shift();

7.-- -- -- -
var colors = ["red", "blue", "orange", "yellow"];
colors.indexOf("yellow");

8.-- -- -- -
var fruits = ["banana", "apple", "grapefruit", "lemon", "peach"];
fruits.slice(0, 2);

9.-- -- -- -
var numbers = [1, 4, 7, 88, 6, 9];
console.log(numbers[numbers.length]);

10.-- -- -- -
var friendgroups = [
    ["Harry", "Ron", "Hermione"];
    ["Malfoy", "Crabbe", "Goyle"];
    ["Mooney", "Wormtail", "Prongs"];
];
console.log(friendgroups[2][0]);

11.-- -- -- -
var colors = ["red", "blue", "orange", "yellow"];
for (var i = 0; i < colors.length; i++) {
    console.log("*******");
    console.log("INSIDE THE FOREACH " + colors[i]);
    console.log("*******");
}

12.-- -- -- -
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var colors = ["red", "blue", "orange", "yellow"];

for (var i = 3; i <= numbers.length; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}