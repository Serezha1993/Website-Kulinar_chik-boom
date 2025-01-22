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




// document.addEventListener("DOMContentLoaded", function(){
//     const monthYear = document.getElementById("month-year");
//     const daysContainer = document.getElementById("days");
//     const prevButton = document.getElementById("prev");

//     const months = [
//         'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
//     ];

//     let currentDay = new Date();
//     let today = new Date;

//     function renderCalendar(date) {
//         const year = date.getFullYear();
//         const month = date.getMonth();
//         const firstDay = new Date(year, month, 1).getDay();
//         const lastDay = new Date(year, month + 1, 0).getDate();

//         monthYear.textContent = `${months[month]} ${year}`;

//         daysContainer.innerHTML = "";

//         const prevMonthLastDay = new Date(year, month, 0).getDate();
//         for(let i = firstDay; i > 0; i--) {
//             const dayDiv = document.createElement("div");
//             dayDiv.textContent = prevMonthLastDay - i + 1;
//             dayDiv.classList.add("fade");
//             daysContainer.appendChild(dayDiv);
//         }

//         for(let i = 1; i <= lastDay; i++) {
//             const dayDiv = document.createElement("div");
//             dayDiv.textContent = i;
//             if(i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
//                 dayDiv.classList.add("today");
//             }
//             daysContainer.appendChild(dayDiv);
//         }
//         const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
//         for(let i = 1; i <= nextMonthStartDay; i++) {
//             const dayDiv = document.createElement("div");
//             dayDiv.textContent = i;
//             dayDiv.classList.add("fade");
//             daysContainer.appendChild(dayDiv);

//         }
//     }
//      prevButton.addEventListener("click", function() {
//         currentDate.setMonth(currentDate.getMonth() - 1);
//         renderCalendar(currentDate);
//      })

//     renderCalendar(currentDay);
// });


document.addEventListener("DOMContentLoaded", function(){
    const monthYear = document.getElementById("month-year");
    const daysContainer = document.getElementById("days");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    let currentDay = new Date();
    let today = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${months[month]} ${year}`;

        daysContainer.innerHTML = "";

        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for(let i = firstDay; i > 0; i--) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = prevMonthLastDay - i + 1;
            dayDiv.classList.add("fade");
            daysContainer.appendChild(dayDiv);
        }

        for(let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;
            if(i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add("today");
            }
            daysContainer.appendChild(dayDiv);
        }

        const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
        for(let i = 1; i <= nextMonthStartDay; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;
            dayDiv.classList.add("fade");
            daysContainer.appendChild(dayDiv);
        }
    }

    prevButton.addEventListener("click", function() {
        currentDay.setMonth(currentDay.getMonth() - 1);
        renderCalendar(currentDay);
    });

    nextButton.addEventListener("click", function() {
        currentDay.setMonth(currentDay.getMonth() + 1); // Используем currentDay вместо currentDate
        renderCalendar(currentDay);
    });

    renderCalendar(currentDay);
});



