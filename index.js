const number = +(prompt('Введіть ціле число:'));

if (isNaN(number) || number < 2){
    alert('Введіть ціле число більше за 1')
} else {
    let isPrime = true;
    for (let i=2; i < number; i++){
        if (number % i === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${number} є простим числом.`);
    } else {
        alert(`${number} не є простим числом.`);
    }
}