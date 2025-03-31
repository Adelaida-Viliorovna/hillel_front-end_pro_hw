function removeElement(array, item) {
    const newArray = []; 

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray[newArray.length] = array[i]; 
        }
    }
    return newArray; 
}

const array = [1, 2, 3, 4, 5, 4, 6, 7];
const result = removeElement(array, 4);
console.log(result); // [1, 2, 3, 5, 6, 7]
