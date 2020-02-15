var age = prompt("How old are you?")
if (age < 18) {
    alert("You can not enter here, you are too young");
} else if (age > 18 && age < 21) {
    alert("You can enter but you can not drink alcool");
} else {
    alert("You are welcome and have a great time");
}