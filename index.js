const num = prompt("Введіть тризначне число");
if (num.length === 3 && !isNaN(num)) {
    const num1 = num[0];
    const num2 = num[1];
    const num3 = num[2];

    if (num1 === num2 && num2 === num3) {
        alert("Всі числа однакові!");
    } else {
        if (num1 === num2 || num2 === num3 || num1 === num3) {
            alert("Є дві однакові цифри!");
        } else {
            alert("Всі цифри різні!");
        }
    }

} else {
    alert("Введено не число або не тризначне число!");
}