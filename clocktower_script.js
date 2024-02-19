document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('section article');

    articles.forEach(article => {
        article.addEventListener('click', (event) => {
            // Prevents the event from bubbling up to the section element.
            event.stopPropagation();

            // Targets the <p> element within the clicked article for toggling visibility.
            const content = article.querySelector('p');
            if (content) {
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            }
        });
    });
});