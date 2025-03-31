let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getSalaries(x) {
    let salaries = [];

    if (Array.isArray(x)) {
        for (let y of x) {
            salaries.push(y.salary);
        }
    } else {
        for (let z in x) {
            salaries = salaries.concat(getSalaries(x[z]));
        }
    }
    return salaries;
}

console.log(getSalaries(company));
let sum = 0;
for (let i=0; i < getSalaries(company).length; i++){
    sum += getSalaries(company)[i];
    console.log(sum);
};
console.log('--------');
console.log(sum);
