const form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    clearErrors();

    const formData = new FormData(form);
    const val = Object.fromEntries(formData);
    
    let isValid = true;

    // if (!val.username.trim()) {
    //     showError('username', 'Name is required');
    //     isValid = false;
    // }

    if (val.message.trim().length < 5) {
        showError('message', 'Message must be at least 5 characters long');
        isValid = false;
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(val.phone)) {
        showError('phone', 'Phone number must start with +380 and contain 9 digits after it');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val.email)) {
        showError('email', 'Invalid email format');
        isValid = false;
    }

    if (isValid) {
        console.log('Введені дані:');
        console.log(val);
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = 'red';
    error.style.fontSize = '12px';
    error.style.marginTop = '5px';
    error.style.marginLeft = '5px';
    field.insertAdjacentElement('afterend', error);
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());
}
