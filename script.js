// Text Animation - For name only
function animateName() {
    const nameElement = document.querySelector('.highlight');
    if (!nameElement) return;

    const originalText = nameElement.textContent;
    nameElement.innerHTML = originalText.split('')
        .map((char, i) => `<span class="letter" style="animation-delay: ${i * 0.05}s">${char}</span>`)
        .join('');
}

// Initialize animations and observers
function init() {
    // Name animation
    animateName();

    // Section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, footer').forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Start when ready
document.addEventListener('DOMContentLoaded', init);