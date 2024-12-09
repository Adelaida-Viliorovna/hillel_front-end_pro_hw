// -------- Lesson 15 -----------

const userTable = document.querySelector('#user-table tbody');
const userForm = document.getElementById('user-form');
const errorName = document.getElementById('error-name');
const errorPhone = document.getElementById('error-phone');
const viewBlock = document.getElementById('view-block');
const addUserBtn = document.getElementById('add-user-btn');

let users = localStorage.getItem('users') 
    ? JSON.parse(localStorage.getItem('users')) 
    : [];
let editingUserId = null;

const renderUsers = () => {
    userTable.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.age}</td>
            <td>
                <button onclick="viewUser(${user.id})">View</button>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="removeUser(${user.id})">Delete</button>
            </td>
        `;
        userTable.appendChild(row);
    });
};

const validatePhone = (phone) => {
    const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phone);
};

const toggleForm = () => {
    userForm.style.display = userForm.style.display === 'none' ? 'flex' : 'none';
};

const toggleViewBlock = () => {
    viewBlock.style.display = viewBlock.style.display === 'none' ? 'block' : 'none';
};

userForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(userForm);
    const { name, phone, age } = Object.fromEntries(formData);

    let isValid = true;

    if (!name.trim()) {
        errorName.textContent = 'Name is required';
        isValid = false;
    } else {
        errorName.textContent = '';
    }

    if (!validatePhone(phone.trim())) {
        errorPhone.textContent = 'Invalid phone format. Use +380XXXXXXXXX';
        isValid = false;
    } else {
        errorPhone.textContent = '';
    }

    if (isValid) {
        if (editingUserId !== null) {
            const userIndex = users.findIndex(user => user.id === editingUserId);
            users[userIndex] = { id: editingUserId, name, phone, age };
            editingUserId = null;
        } else {
            const newUser = {
                id: Date.now(),
                name,
                phone,
                age
            };
            users.push(newUser);
        }

        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
        userForm.reset();
        toggleForm();
    }
});

const viewUser = (id) => {
    const user = users.find(user => user.id === id);
    viewBlock.textContent = JSON.stringify(user, null, 2);
    toggleViewBlock();
};

const editUser = (id) => {
    const user = users.find(user => user.id === id);
    const { name, phone, age } = user;

    userForm.name.value = name;
    userForm.phone.value = phone;
    userForm.age.value = age;

    editingUserId = id;
    toggleForm();
};

const removeUser = (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
        users = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
    }
};

addUserBtn.addEventListener('click', toggleForm);

renderUsers();

