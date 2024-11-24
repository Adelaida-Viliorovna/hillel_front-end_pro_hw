const form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  const val = Object.fromEntries(formData);
  
  console.log('Введені дані:');
  console.log(val);
  
});