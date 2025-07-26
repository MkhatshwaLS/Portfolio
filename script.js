document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (document.querySelector('.navbar-menu').classList.contains('active')) {
                document.querySelector('.navbar-menu').classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.navbar-menu');
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Intersection Observer for section animations
    // Updated selectors to reflect changes in HTML structure and new elements
    const elementsToAnimate = document.querySelectorAll(
        '.hero-section .fade-in-up, ' +
        '#about .fade-in-up, ' +
        '#experience .fade-in-up, ' +
        '#skills .fade-in-up, ' +
        '#services .fade-in-up, ' +
        '#portfolio .fade-in-up, ' +
        '#contact .fade-in-up'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger animation when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in-up'); // Ensure the base class is present
        observer.observe(element);
    });
});