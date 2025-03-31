const tableDiv = document.getElementById('pifagor-table');
const table = document.createElement('table');

for (let i=1; i <= 10; i++) {
    const row = document.createElement('tr');
    for (let j=1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);

        cell.style.border = '1px solid black';
        cell.style.padding = '6px';
        cell.style.textAlign = 'center';

        if (i === 1 || j === 1) {
            cell.style.backgroundColor = 'yellow';
        } else if (i === j) {
            cell.style.backgroundColor = 'lightblue';
        }
    }
    
    table.appendChild(row);
    
}

tableDiv.appendChild(table);

table.style.borderCollapse = 'collapse';
table.style.border = '4px solid black';
table.style.margin = '10px';