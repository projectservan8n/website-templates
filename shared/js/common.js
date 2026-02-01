/**
 * Zamboanga Website Templates - Common JavaScript
 * ================================================
 * Shared functionality across all templates
 * Vanilla JS only - no frameworks required
 */

(function() {
  'use strict';

  // ===== Configuration =====
  const CONFIG = {
    scrollOffset: 80,
    backToTopThreshold: 400,
    lazyLoadThreshold: '100px',
    animationThreshold: 0.15
  };

  // ===== DOM Ready =====
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initBackToTop();
    initLazyLoading();
    initScrollAnimations();
    initFormValidation();
    initWhatsAppButton();
  });

  // ===== Mobile Menu Toggle =====
  function initMobileMenu() {
    const menuBtn = document.querySelector('[data-menu-toggle]');
    const closeBtn = document.querySelector('[data-menu-close]');
    const menu = document.querySelector('[data-mobile-menu]');
    const overlay = document.querySelector('[data-menu-overlay]');
    const menuLinks = document.querySelectorAll('[data-mobile-menu] a');

    if (!menuBtn || !menu) return;

    function openMenu() {
      menu.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      menuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      menu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
      menuBtn.setAttribute('aria-expanded', 'false');
    }

    menuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const isOpen = menu.classList.contains('active');
      isOpen ? closeMenu() : openMenu();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Close on menu link click
    menuLinks.forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ===== Smooth Scroll for Anchor Links =====
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, null, href);
      });
    });
  }

  // ===== Back to Top Button =====
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    function toggleVisibility() {
      if (window.pageYOffset > CONFIG.backToTopThreshold) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }

    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Initial check
    toggleVisibility();
  }

  // ===== Lazy Loading Images =====
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    if (!lazyImages.length) return;

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;

            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }

            img.addEventListener('load', function() {
              img.classList.add('loaded');
            });

            imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: CONFIG.lazyLoadThreshold
      });

      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    } else {
      // Fallback for older browsers
      lazyImages.forEach(function(img) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
      });
    }
  }

  // ===== Scroll Animations =====
  function initScrollAnimations() {
    // Legacy data-animate support
    const legacyAnimatedElements = document.querySelectorAll('[data-animate]');
    if (legacyAnimatedElements.length) {
      initLegacyScrollAnimations(legacyAnimatedElements);
    }

    // New cinematic scroll animations with data-scroll
    const scrollElements = document.querySelectorAll('[data-scroll]');
    if (scrollElements.length) {
      initCinematicScrollAnimations(scrollElements);
    }
  }

  // Legacy animation support (one-way, doesn't reverse)
  function initLegacyScrollAnimations(animatedElements) {
    if ('IntersectionObserver' in window) {
      const animationObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animation = el.dataset.animate || 'fade-in-up';
            const delay = el.dataset.delay || 0;

            setTimeout(function() {
              el.classList.add('animate-' + animation);
              el.style.opacity = '1';
            }, parseInt(delay));

            animationObserver.unobserve(el);
          }
        });
      }, {
        threshold: CONFIG.animationThreshold
      });

      animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        animationObserver.observe(el);
      });
    } else {
      // Fallback - just show elements
      animatedElements.forEach(function(el) {
        el.style.opacity = '1';
      });
    }
  }

  // ===== Cinematic Scroll Animations (Bidirectional) =====
  function initCinematicScrollAnimations(scrollElements) {
    if (!('IntersectionObserver' in window)) {
      // Fallback - just show elements
      scrollElements.forEach(function(el) {
        el.classList.add('is-visible');
      });
      return;
    }

    // Create observer that tracks both entering and leaving viewport
    var scrollObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var el = entry.target;
        var delay = parseInt(el.dataset.scrollDelay) || 0;

        if (entry.isIntersecting) {
          // Element is entering viewport - animate in
          if (delay > 0) {
            setTimeout(function() {
              el.classList.add('is-visible');
            }, delay);
          } else {
            el.classList.add('is-visible');
          }
        } else {
          // Element is leaving viewport - animate out (reverse)
          // Only reverse if element was previously visible and has scrolled out
          if (el.classList.contains('is-visible')) {
            el.classList.remove('is-visible');
          }
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '-50px 0px -50px 0px'
    });

    // Observe all scroll-animated elements
    scrollElements.forEach(function(el) {
      scrollObserver.observe(el);
    });

    // Handle staggered children
    var staggerContainers = document.querySelectorAll('[data-scroll-stagger]');
    staggerContainers.forEach(function(container) {
      var children = container.children;
      var staggerType = container.dataset.scrollStagger || 'default';
      var baseDelay = staggerType === 'fast' ? 50 : 100;

      Array.prototype.forEach.call(children, function(child, index) {
        if (!child.hasAttribute('data-scroll')) {
          // If child doesn't have data-scroll, inherit from container or use fade-up
          child.setAttribute('data-scroll', container.dataset.scrollStaggerType || 'fade-up');
        }
        // Set stagger delay
        child.style.transitionDelay = (index * baseDelay) + 'ms';
        scrollObserver.observe(child);
      });
    });
  }

  // ===== Form Validation =====
  function initFormValidation() {
    const forms = document.querySelectorAll('[data-validate]');

    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        // Clear previous errors
        form.querySelectorAll('.error-message').forEach(function(msg) {
          msg.remove();
        });
        form.querySelectorAll('.input-error').forEach(function(input) {
          input.classList.remove('input-error');
        });

        requiredFields.forEach(function(field) {
          if (!validateField(field)) {
            isValid = false;
          }
        });

        if (!isValid) {
          e.preventDefault();
          // Focus first error field
          const firstError = form.querySelector('.input-error');
          if (firstError) firstError.focus();
        }
      });

      // Real-time validation on blur
      form.querySelectorAll('input, textarea, select').forEach(function(field) {
        field.addEventListener('blur', function() {
          validateField(this);
        });

        // Clear error on input
        field.addEventListener('input', function() {
          this.classList.remove('input-error');
          const errorMsg = this.parentNode.querySelector('.error-message');
          if (errorMsg) errorMsg.remove();
        });
      });
    });
  }

  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const name = field.name || field.id || 'Field';
    let isValid = true;
    let errorMessage = '';

    // Required check
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required';
    }
    // Email validation
    else if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }
    // Phone validation (Philippine format)
    else if (type === 'tel' && value) {
      const phoneRegex = /^(\+63|0)?[0-9]{10,11}$/;
      const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }
    // Min length
    else if (field.hasAttribute('minlength') && value) {
      const minLength = parseInt(field.getAttribute('minlength'));
      if (value.length < minLength) {
        isValid = false;
        errorMessage = `Minimum ${minLength} characters required`;
      }
    }

    if (!isValid) {
      field.classList.add('input-error');
      const errorEl = document.createElement('span');
      errorEl.className = 'error-message text-red-500 text-sm mt-1 block';
      errorEl.textContent = errorMessage;
      field.parentNode.appendChild(errorEl);
    }

    return isValid;
  }

  // ===== WhatsApp Button Handler =====
  function initWhatsAppButton() {
    const whatsappLinks = document.querySelectorAll('[data-whatsapp]');

    whatsappLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const phone = this.dataset.whatsapp;
        const message = this.dataset.message || 'Hi! I found you on your website. I\'d like to inquire about your services.';

        if (phone) {
          e.preventDefault();
          const encodedMessage = encodeURIComponent(message);
          const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
          const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }
      });
    });
  }

  // ===== Utility Functions =====

  // Debounce function
  window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = function() {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Throttle function
  window.throttle = function(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(function() {
          inThrottle = false;
        }, limit);
      }
    };
  };

  // Format Philippine peso
  window.formatPeso = function(amount) {
    return '₱' + parseFloat(amount).toLocaleString('en-PH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  };

  // Format phone number
  window.formatPhone = function(phone) {
    const clean = phone.replace(/\D/g, '');
    if (clean.length === 11 && clean.startsWith('0')) {
      return clean.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
    }
    return phone;
  };

})();
