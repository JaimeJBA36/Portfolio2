const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.getElementById('card');
const box = document.querySelector('.box');

let lastX = 0;
let lastY = 0;
let yesBtnSize = 18; // Tamaño inicial del botón "Sí"

noBtn.addEventListener('mouseover', () => {
    const boxRect = box.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const minX = 0;
    const minY = 0;
    const maxX = boxRect.width - btnRect.width - 10;
    const maxY = boxRect.height - btnRect.height - 10;

    let randomX, randomY;

    do {
        randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
        randomY = Math.floor(Math.random() * (maxY - minY)) + minY;
    } while (Math.abs(randomX - lastX) < 50 || Math.abs(randomY - lastY) < 50); 

    lastX = randomX;
    lastY = randomY;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Cuando logres hacer clic en "No", el botón "Sí" se agranda
noBtn.addEventListener('click', () => {
    yesBtnSize += 10; // Aumenta el tamaño progresivamente
    yesBtn.style.fontSize = `${yesBtnSize}px`;
    yesBtn.style.padding = `${yesBtnSize / 2}px ${yesBtnSize}px`;
});

yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'none';
    card.style.display = 'block';
});
