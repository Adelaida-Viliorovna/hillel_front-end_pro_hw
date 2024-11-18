const imageContainer = document.getElementById('image-container');
const randomButton = document.getElementById('random-btn');

const img = document.createElement('img');

randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    img.src = `./img/${randomIndex}.png`;
    img.alt = 'Random img';
    img.style.height = '400px';
})
imageContainer.appendChild(img);