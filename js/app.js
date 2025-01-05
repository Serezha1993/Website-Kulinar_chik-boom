document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("check");
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});


// Селекторы слайдов
const slides = document.querySelectorAll('.slider-item');
let currentIndex = 0;

// Функция смены слайда
function changeSlide() {
    // Убираем класс active с текущего слайда
    slides[currentIndex].classList.remove('active');

    // Переходим к следующему слайду (циклически)
    currentIndex = (currentIndex + 1) % slides.length;

    // Добавляем класс active следующему слайду
    slides[currentIndex].classList.add('active');
}

// Запускаем смену слайдов каждые 5 секунд
setInterval(changeSlide, 5000);











// Выбор слайдера и добавление кнопок управления
const productRows = document.querySelectorAll('.product-row');

productRows.forEach((row) => {
    // Создание кнопок управления
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');

    prevButton.innerText = '←';
    nextButton.innerText = '→';

    prevButton.className = 'slider-control prev';
    nextButton.className = 'slider-control next';

    row.parentElement.insertBefore(prevButton, row);
    row.parentElement.appendChild(nextButton);

    // Добавление событий для прокрутки
    prevButton.addEventListener('click', () => {
        row.scrollBy({
            left: -row.clientWidth,
            behavior: 'smooth',
        });
    });

    nextButton.addEventListener('click', () => {
        row.scrollBy({
            left: row.clientWidth,
            behavior: 'smooth',
        });
    });
});






