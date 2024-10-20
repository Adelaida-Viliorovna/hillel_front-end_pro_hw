const number = prompt("Enter a five-digit number:");
const message1 = `Your number: ${number}`;

if (number.length === 5 && !isNaN(number)) {
    const number2 = number.split('').join(' ');
    alert(number2);
} else {
    alert("Entered is not a number or not a five-digit number!");
}