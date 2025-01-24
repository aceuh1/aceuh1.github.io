document.addEventListener('DOMContentLoaded', function () {
  
  // Theme toggle functionality
  const themeToggleButton = document.getElementById('theme-toggle');

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  themeToggleButton.addEventListener('click', toggleTheme);

  // Article switch functionality
  let currentArticleIndex = 0;  // Start with the first article
  const articles = document.querySelectorAll('.article');

  function showArticle(index) {
    // Hide all articles
    articles.forEach(article => article.style.display = 'none');
    
    // Show the selected article
    articles[index].style.display = 'block';
  }

  // Initially show the first article
  showArticle(currentArticleIndex);

  // Button to move to the next article
  const nextArticleButton = document.getElementById('nextArticleButton');
  nextArticleButton.addEventListener('click', () => {
    currentArticleIndex = (currentArticleIndex + 1) % articles.length;
    showArticle(currentArticleIndex);
  });

  // Button to move to the previous article
  
});
