document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for in-page links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navMenu = document.querySelector('.NavigationMenu');
  const menuToggle = document.querySelector('.MenuToggle');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }

      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Toggle mobile menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('active');
    });

    menuToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
      }
    });
  }

  // Reveal sections on scroll
  const animatedElements = document.querySelectorAll(
    '.HeroSection .fade-in-up, ' +
    '#AboutSection .fade-in-up, ' +
    '#ExperienceSection .fade-in-up, ' +
    '#SkillsSection .fade-in-up, ' +
    '#PortfolioSection .fade-in-up, ' +
    '#ContactSection .fade-in-up'
  );

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
