document.addEventListener('DOMContentLoaded', () => {
    // Menü animasyonları
    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transition = 'color 0.3s ease';
            link.style.color = '#c0c0c0';
        });
        link.addEventListener('mouseout', () => {
            link.style.transition = 'color 0.3s ease';
            link.style.color = '#fff';
        });
    });

    // Sayfa açılış animasyonu
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
            heroSection.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 100); // Delay to ensure styles apply after initial setting
    }

    // Bölüm animasyonları
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Sayfanın başına kaydırma
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100); // Sayfa yüklendikten sonra 100ms bekleyin
});
