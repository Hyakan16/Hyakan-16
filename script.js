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
