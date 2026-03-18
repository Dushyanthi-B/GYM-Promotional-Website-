// Modern Fitness Gym Website JavaScript
// Features: Dark/Light mode, search/filter, form validation + EmailJS, smooth scroll, AOS

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Enhanced Dark/Light mode toggle with persistence

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  const darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    const icon = darkToggle.querySelector('i');

    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
      document.body.classList.add('light-mode');
      icon.classList.replace('fa-moon', 'fa-sun');
    }

    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      icon.classList.toggle('fa-sun', isLight);
      icon.classList.toggle('fa-moon', !isLight);
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // Trainers/Services search filter
  const searchInput = document.getElementById('trainersSearch');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const cards = document.querySelectorAll('.trainers .card, .services .card');
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
      });
    });
  }

  // Contact Form handling with validation and EmailJS
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !message) {
        alert('Please fill all fields.');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return;
      }
      
      // EmailJS - Replace with your keys
emailjs.init('i1Mei_LyLClsI3Yj0');
      
emailjs.send('service_f146wjm', 'template_8dg6k7d', {
        from_name: name,
        from_email: email,
        message: message
      }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(() => successMsg.style.display = 'none', 5000);
      }, function(error) {
        console.log('FAILED...', error);
        alert('Submission failed. Please try again.');
      });
    });
  }
});

// EmailJS CDN will be in HTML

