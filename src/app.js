const doc = {
    tbody: document.querySelector('#tbody')
};
const state = {
    host: 'http://localhost:8000/',
    employees: []
}

window.addEventListener('load', () => {
    init();
});

function init() {
    getEmployee();    
}

function getEmployee() {
    let endpoint = 'employees';
    let url = state.host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.employees = result;
        render();
    });
}

function render() {
    let row = '';
    state.employees.forEach(emp => {
        row += `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.city}</td>
                <td>${emp.salary}</td>
            </tr>
        `;
        console.log(emp.name)
    });
    doc.tbody.innerHTML = row;
}