const x = prompt('enter a number');
let result = '';
for (let i = 1; i<=100; i++){
    if (i*i <= x){
        result += i + ' ';
    }
}
alert(result.trim());