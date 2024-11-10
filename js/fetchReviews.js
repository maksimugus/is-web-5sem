document.addEventListener("DOMContentLoaded", () => {
    const reviewsList = document.getElementById('reviewsList');
    const preloader = document.getElementById('preloader'); // Элемент для прелоадера
    const errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage';
    reviewsList.appendChild(errorMessage);

    preloader.style.display = 'block';

    // для получения случайного `postId`
    const getRandomPostId = () => Math.floor(Math.random() * 10) + 1; // посты от 1 до 10

    const fetchComments = async () => {
        const comments = [];

        while (comments.length < 100) {
            const postId = getRandomPostId();
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                if (!response.ok) {
                    throw new Error('Сеть не доступна');
                }
                const data = await response.json();

                comments.push(...data);
            } catch (error) {
                console.error(error.message);
            }
        }

        return comments.slice(0, 100);
    };

    // Запрос комментариев
    fetchComments()
        .then(data => {
            // скрыть прелоадер
            preloader.style.display = 'none';

            // Рендеринг данных
            data.forEach(comment => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');

                // случайное значение рейтинга от 1 до 5
                const randomRating = Math.floor(Math.random() * 5) + 1;
                const starImage = `<img src="../icons/star-fill.svg" alt="Звезда" class="star" style="width: 20px; height: 20px; margin-right: 5px;">`;

                // генерируем случайную дату
                const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000).toLocaleDateString();

                reviewElement.innerHTML = `
                    <h5>${comment.name}, ${randomDate}, (${comment.email})</h5>
                    <p class="review__icon"> ${starImage} ${randomRating} </p><br>
                 
                    <p>${comment.body}</p>
                `;

                reviewsList.appendChild(reviewElement);
            });
        })
        .catch(() => {
            // скрыть прелоадер, отображение ошибки
            preloader.style.display = 'none';
            errorMessage.innerHTML = '⚠️ Что-то пошло не так';
        });
});

