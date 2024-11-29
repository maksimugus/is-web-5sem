document.addEventListener("DOMContentLoaded", () => {
    const reviewsList = document.getElementById('reviewsList');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.createElement('div');
    errorMessage.id = 'errorMessage';
    reviewsList.appendChild(errorMessage);

    preloader.style.display = 'block';

    // случайное число постов от 1 до 10
    const getRandomPostId = () => Math.floor(Math.random() * 10) + 1;

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

    fetchComments()
        .then(data => {
            preloader.style.display = 'none';

            data.forEach(comment => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');

                const randomRating = Math.floor(Math.random() * 5) + 1;
                const starImage = `<img src="../icons/star-fill.svg" alt="Звезда" class="star" style="width: 20px; height: 20px; margin-right: 5px;">`;

                // случайная дата из последних 10 дней
                const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000).toLocaleDateString();

                reviewElement.innerHTML = `
                    <h5>${comment.name}, ${randomDate}, (${comment.email})</h5>
                    <p class="review__icon"> ${starImage} ${randomRating} </p>
                    <br>
                    <p>${comment.body}</p>
                `;

                reviewsList.appendChild(reviewElement);
            });
        })
        .catch(() => {
            preloader.style.display = 'none';
            errorMessage.innerHTML = '⚠️ Что-то пошло не так';
        });
});

