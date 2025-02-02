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








// card pagination start
const productsContainer = document.querySelector(".products");
const paginationContainer = document.querySelector(".pagination");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageInfo = document.getElementById("page-info");



let products = [];
let currentPage = 1;
const itemsPerPage = 4;

// Загрузка данных из JSON
fetch("products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        renderProducts();
    });

function renderProducts() {
    productsContainer.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleProducts = products.slice(start, end);

    console.log(visibleProducts);

    visibleProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="img/products/${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span><strong>${product.price} ₽</strong></span>
            <button class="buy-btn">Купить</button>
        `;
        productsContainer.appendChild(productElement);
    });
    
    pageInfo.textContent = `Страница ${currentPage} из ${Math.ceil(products.length / itemsPerPage)}`;
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(products.length / itemsPerPage);
}

prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts();
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
        currentPage++;
        renderProducts();
    }
});

















// let products = [...productsContainer.children]; // Сохраняем карточки в массив
// let currentPage = 1; // Текущая страница
// const visibleCount = 4; // Количество видимых карточек
// const totalPages = Math.ceil(products.length / visibleCount); // Всего страниц

// function updateVisibleCards(animated = true) {
//   if (animated) {
//     productsContainer.style.transition = "opacity 0.4s ease, transform 0.4s ease";
//     productsContainer.style.opacity = "0";
//     productsContainer.style.transform = "translateX(-20px)";

//     setTimeout(() => {
//       applyCardVisibility();
//       setTimeout(() => {
//         productsContainer.style.opacity = "1";
//         productsContainer.style.transform = "translateX(0)";
//       }, 50);
//     }, 400);
//   } else {
//     applyCardVisibility();
//   }

//   updatePaginationButtons();
// }

// function applyCardVisibility() {
//   products.forEach((product, index) => {
//     const start = (currentPage - 1) * visibleCount;
//     const end = currentPage * visibleCount;
//     product.style.display = index >= start && index < end ? "block" : "none";
//   });
// }

// // Создание кнопок пагинации
// function createPaginationButtons() {
//   paginationContainer.innerHTML = ""; // Очищаем контейнер

//   for (let i = 1; i <= totalPages; i++) {
//     const button = document.createElement("button");
//     button.textContent = i;
//     button.classList.add("page-btn");
//     if (i === currentPage) {
//       button.classList.add("active");
//     }
//     button.addEventListener("click", () => {
//       currentPage = i;
//       updateVisibleCards();
//     });
//     paginationContainer.appendChild(button);
//   }
// }

// // Обновление кнопок пагинации
// function updatePaginationButtons() {
//   document.querySelectorAll(".page-btn").forEach((button, index) => {
//     if (index + 1 === currentPage) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
// }

// // Обработчики кнопок "Prev" и "Next"
// prevButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     updateVisibleCards();
//   }
// });

// nextButton.addEventListener("click", () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     updateVisibleCards();
//   }
// });

// // Инициализация
// createPaginationButtons();
// updateVisibleCards(false);




// card pagination end








// Calendar Start
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

function generateCalendar(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  calendar.innerHTML = "";
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    calendar.appendChild(emptyDiv);
  }

  for (let date = 1; date <= lastDate; date++) {
    const day = document.createElement("div");
    day.textContent = date;
    day.classList.add("day");

    if (
      year === currentDate.getFullYear() &&
      month === currentDate.getMonth() &&
      date === currentDate.getDate()
    ) {
      day.classList.add("active");
    }

    day.addEventListener("click", () => {
      document.querySelectorAll(".day").forEach((d) =>
        d.classList.remove("active")
      );
      day.classList.add("active");
    });

    calendar.appendChild(day);
  }

  monthYear.textContent = new Date(year, month).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

generateCalendar(currentDate.getMonth(), currentDate.getFullYear());

document.getElementById("submit").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const cakeType = document.getElementById("cakeType").value;
  const weight = document.getElementById("weight").value;
  const time = document.getElementById("time").value;
  const selectedDay = document.querySelector(".day.active")?.textContent;

  if (!name || !cakeType || !weight || !time || !selectedDay) {
    alert("Please fill out all fields and select a date.");
    return;
  }

  const orderDetails = `Name: ${name}\nCake Type: ${cakeType}\nWeight: ${weight}kg\nTime: ${time}\nDate: ${selectedDay}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  alert("Order Submitted:\n" + orderDetails);

  // Telegram API integration (replace TOKEN and CHAT_ID)
  const telegramToken = "<TOKEN>";
  const chatId = "<CHAT_ID>";
  const message = encodeURIComponent(orderDetails);

  fetch(
    `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${message}`
  )
    .then((response) => {
      if (response.ok) {
        alert("Order sent successfully!");
      } else {
        alert("Failed to send order. Please try again later.");
      }
    })
    .catch(() => {
      alert("Failed to send order. Please check your internet connection.");
    });
});
// Calendar end