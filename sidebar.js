document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.icono');
    const sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active'); // Cambiar 'sidebar' por 'active'
    });
});
  