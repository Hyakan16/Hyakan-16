
        // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('nav').classList.remove('active');
                }
            });
        });
        
        // Add animation to hero section on load
        window.addEventListener('load', function() {
            const hero = document.querySelector('.hero');
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        });
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


        
