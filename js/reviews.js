document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');

    // Загрузка отзывов из LocalStorage
    loadReviews();

    // Обработка отправки формы
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение формы

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;
        const date = new Date().toLocaleDateString('ru-RU'); // дату в формате "ДД.ММ.ГГГГ"

        const newReview = {
            name: name,
            rating: rating,
            text: review,
            date: date
        };

        // Сохраним отзыв в LocalStorage
        saveReview(newReview);

        // Сброс формы
        form.reset();
    });
});

function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews(reviews);
}

function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    displayReviews(reviews);
}

function displayReviews(reviews) {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Очищаем предыдущий список отзывов
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');

        // Создаем ссылку на изображение звездочки
        const starImage = `<img src="../icons/star-fill.svg" alt="Звезда" class="star" style="width: 20px; height: 20px; margin-right: 5px;">`;

        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h5>${review.name}, ${review.date}</h5>
            <p class="review__icon">${starImage} ${review.rating}</p><br>
            <p>${review.text}</p>
        `;
        reviewsList.appendChild(reviewElement);
    });
}
