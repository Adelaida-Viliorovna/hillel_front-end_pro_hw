const x = prompt('Введіть ціле число:');
let result = '';
if (!isNaN(x) && x !== null && x.trim() !== ''){
    for (let i = 1; i<=100; i++){
        if (i*i <= x){
            result += i + ' ';
        }
    }
    alert(result.trim());
} else {
    alert('Введіть коректне ціле число.');
}
