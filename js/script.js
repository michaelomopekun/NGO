/* ============================================
   NExGen International - JavaScript
   Carousel, Form Validation, Mobile Menu
   ============================================ */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
      });
    });
  }

  // Carousel Functionality
  class Carousel {
    constructor(selector) {
      this.carousel = document.querySelector(selector);
      if (!this.carousel) return;

      this.slides = this.carousel.querySelectorAll('.carousel-slide');
      this.controls = this.carousel.querySelectorAll('.carousel-btn');
      this.prevBtn = this.carousel.querySelector('.carousel-nav.prev');
      this.nextBtn = this.carousel.querySelector('.carousel-nav.next');
      this.currentSlide = 0;
      this.autoPlayInterval = null;

      this.init();
    }

    init() {
      if (this.slides.length === 0) return;

      // Show first slide
      this.showSlide(0);

      // Event listeners for controls
      this.controls.forEach((btn, index) => {
        btn.addEventListener('click', () => this.goToSlide(index));
      });

      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
      }

      // Start autoplay
      this.startAutoPlay();

      // Pause on hover
      this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
      this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showSlide(n) {
      this.slides.forEach(slide => slide.classList.remove('active'));
      this.controls.forEach(btn => btn.classList.remove('active'));

      this.slides[n].classList.add('active');
      this.controls[n].classList.add('active');
      this.currentSlide = n;
    }

    goToSlide(n) {
      this.stopAutoPlay();
      this.showSlide(n);
      this.startAutoPlay();
    }

    nextSlide() {
      this.stopAutoPlay();
      const n = (this.currentSlide + 1) % this.slides.length;
      this.showSlide(n);
      this.startAutoPlay();
    }

    previousSlide() {
      this.stopAutoPlay();
      const n = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.showSlide(n);
      this.startAutoPlay();
    }

    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }

    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    }
  }

  // Initialize carousel
  new Carousel('.carousel');

  // Form Validation
  class FormValidator {
    constructor(formSelector) {
      this.form = document.querySelector(formSelector);
      if (!this.form) return;

      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
      e.preventDefault();
      let isValid = true;

      const fields = this.form.querySelectorAll('input[required], textarea[required]');

      fields.forEach(field => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      if (isValid) {
        this.submitForm();
      }
    }

    validateField(field) {
      const value = field.value.trim();
      const type = field.type;
      let isValid = true;

      // Check if empty
      if (!value) {
        this.showError(field, 'This field is required');
        return false;
      }

      // Email validation
      if (type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          this.showError(field, 'Please enter a valid email');
          isValid = false;
        } else {
          this.clearError(field);
        }
      }

      // Phone validation
      if (type === 'tel' || field.name === 'phone') {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value)) {
          this.showError(field, 'Please enter a valid phone number');
          isValid = false;
        } else {
          this.clearError(field);
        }
      }

      // Text validation
      if (type === 'text' && value.length < 2) {
        this.showError(field, 'Please enter at least 2 characters');
        isValid = false;
      } else if (isValid) {
        this.clearError(field);
      }

      return isValid;
    }

    showError(field, message) {
      field.classList.add('error');
      let errorElement = field.nextElementSibling;

      if (!errorElement || !errorElement.classList.contains('form-error')) {
        errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
      }

      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }

    clearError(field) {
      field.classList.remove('error');
      const errorElement = field.nextElementSibling;
      if (errorElement && errorElement.classList.contains('form-error')) {
        errorElement.style.display = 'none';
      }
    }

    submitForm() {
      alert('Form submitted successfully!');
      this.form.reset();
      // Here you could send data to a server
    }
  }

  // Initialize contact form
  new FormValidator('form');

  // Scroll Animations
  class ScrollAnimations {
    constructor() {
      this.observeElements();
    }

    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      // Observe all cards and sections
      document.querySelectorAll('.card, section > div').forEach(el => {
        observer.observe(el);
      });
    }
  }

  new ScrollAnimations();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active link detection
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
});
