function averageOfNumbers(arr) {
    let sum = 0; 
    let count = 0; 

    for (let i = 0; i < arr.length; i++) { 
        if (typeof arr[i] === 'number') { 
            sum += arr[i]; 
            count++; 
        }
    }
    return count === 0 ? 0 : sum / count; 
}

const mixedArray = [1, 'hello', true, 4, 6, '7', 'world', 10];
console.log(averageOfNumbers(mixedArray)); 
