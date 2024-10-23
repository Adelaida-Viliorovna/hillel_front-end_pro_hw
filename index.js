const userYear = prompt("Введіть ваш рік народження:");
const currentYear = new Date().getFullYear();
let ageMessage = "";
if (userYear) {
    const age = currentYear - +userYear;
    ageMessage = `Ваш вік: ${age} років.`;
} else {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
    ageMessage = "---";
}

const userCity = prompt("В якому місті ви живете?");
let cityMessage = "";
if(userCity){
    switch(userCity.toLowerCase()) {
        case "київ":
            cityMessage = "Ти живеш у столиці України.";
            break;
        case "лондон":
            cityMessage = "Ти живеш у столиці Великої Британії.";
            break;
        case "вашингтон":
            cityMessage = "Ти живеш у столиці США.";
            break;
        default:
            cityMessage = `Ти живеш у місті ${userCity}.`;
    }
} else {
    cityMessage = "---";
    alert("Шкода, що Ви не захотіли ввести своє місто.");
}

const userSport = prompt("Ваш улюблений вид спорту?");
let sportMessage = "";
if (userSport) {
    switch (userSport.toLowerCase()) {
        case "футбол":
            sportMessage = `Ваш улюблений вид спорту: ${userSport}.\nКруто! Хочеш стати як Ліонель Мессі?`;
            break;
        case "баскетбол":
            sportMessage = `Ваш улюблений вид спорту: ${userSport}.\nКруто! Хочеш стати як Майкл Джордан?`;
            break;
        case "теніс":
            sportMessage = `Ваш улюблений вид спорту: ${userSport}.\nКруто! Хочеш стати як Роджер Федерер?`;
            break;
        default:
            sportMessage = `Ваш улюблений вид спорту: ${userSport}.`;
    }
} else {
    sportMessage = "---";
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
}

alert(`${ageMessage}\n${cityMessage}\n${sportMessage}`);