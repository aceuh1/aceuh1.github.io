

document.addEventListener('DOMContentLoaded', function () {


const themeToggleButton = document.getElementById('theme-toggle');

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

themeToggleButton.addEventListener('click', toggleTheme);

});
