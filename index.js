let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        // x: { //test
        //     x1: [{name: 'x11', salary: 100}, {name: 'x12', salary: 100}],
        //     x2: [{name: 'x21', salary: 100}]
        // },
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getTotalSalaries(department) {
    let total = 0;

    if (Array.isArray(department)) {
        for (let employee of department) {
            console.log(`Додаємо зарплату ${employee.salary} співробітника ${employee.name}`);
            total += employee.salary;
            console.log(`Поточна сума: ${total}`);
        }
    } else {
        for (let subDepartment in department) {
            console.log(`Переходимо в підрозділ: ${subDepartment}`);
            total += getTotalSalaries(department[subDepartment]);
            console.log(`Сума після підрозділу ${subDepartment}: ${total}`);
        }
    }

    return total;
}

let totalSalaries = getTotalSalaries(company);
console.log("Загальна сума зарплат:", totalSalaries);
