
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const toggleMode = document.getElementById('toggle-mode');
    const links = navLinks.querySelectorAll('a');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('show');
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.classList.remove('show');
          menuToggle.classList.remove('open');
        }
      });
    });

    // Dark/light mode toggle
    let darkMode = true;
    toggleMode.addEventListener('click', () => {
      darkMode = !darkMode;
      document.body.style.background = darkMode ? "var(--dark-bg)" : "var(--light-bg)";
      document.body.style.color = darkMode ? "var(--dark-text)" : "var(--light-text)";
      document.documentElement.style.setProperty('--card-bg', darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)');
      toggleMode.textContent = darkMode ? "🌙" : "🌞";
    });

    // Back to top button
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
