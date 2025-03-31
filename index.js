const str = prompt("Введіть рядок:", "hello world");
const charsToRemove = prompt("Введіть символи для видалення (через кому):", "l,d").split(',');

function removeChars(str = "hello world", charsToRemove = ['l', 'd']) {
    // let result = str;
    // for (let char of charsToRemove) {
    //     result = result.split(char).join('');
    // }
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < charsToRemove.length; j++) {
            if (str[i] === charsToRemove[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result += str[i];
        }
    }
    alert(`Задана строка: ${str}\nСимволи для видалення: ${charsToRemove}\nРезультат: ${result}`);
}

removeChars(str, charsToRemove);
