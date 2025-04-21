document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        this.setAttribute('aria-expanded', mainNav.classList.contains('active'));
    });
    
    // Tutup menu saat klik overlay
    overlay.addEventListener('click', function() {
        mainNav.classList.remove('active');
        this.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
    
    // Tutup menu saat klik link (opsional)
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Animasi hamburger icon (opsional)
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('is-active');
    });
});
