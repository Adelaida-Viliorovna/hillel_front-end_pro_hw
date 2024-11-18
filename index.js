const colorText = document.getElementById('color-text');
const colorButton = document.getElementById('color-btn');

colorButton.addEventListener('click', () => {
    colorText.classList.toggle('red');
});