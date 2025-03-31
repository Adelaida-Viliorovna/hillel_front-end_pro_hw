// function askForNumber() { 
//     let number; 
//     let entered = false; 

//     for (let i = 0; i < 10; i++) { 
//         number = prompt("Введіть число більше 100:", ""); 

//         if (number === null || number === "") { 
//             alert("Ви натиснули 'Скасувати' або залишили поле порожнім."); 
//         } 
//         else if (isNaN(number)) { 
//             alert("Будь ласка, введіть число, а не текст."); 
//         } 
//         else if (+number > 100) { 
//             alert(`Останнє введене число більше 100: ${number}`); 
//             entered = true; 
//             return; 
//         } 
//         else { 
//             alert("Число менше або дорівнює 100. Спробуйте ще раз."); 
//         }
//     }

//     if (!entered) { 
//         alert("Число більше 100 так і не було введено після 10 спроб."); 
//     }
// }

// askForNumber();

function askForNumber() {
    let input; 

    for (let i = 0; i < 10; i++) {
        let userInput = prompt("Введіть число більше 100:");

        if (userInput === null || userInput === "") {
            alert("Введіть число більше 100. Спробуйте ще раз.");
            continue; 
        }

        if (!isNaN(+userInput)) {
            if (+userInput > 100) {
                input = userInput; 
                break; 
            } else {
                alert("Число має бути більше 100. Спробуйте ще раз.");
                input = userInput; 
            }
        } else {
            input = userInput; 
            break;
        }
    }

    alert(`Останнє введення користувача: ${input !== undefined ? input : 'не введено'}`);
}

askForNumber();

