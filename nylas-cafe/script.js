/* ============================================
   NYLA'S CAFE — Interactions & Animations
   ============================================ */

(function () {
  'use strict';

  // Loading screen
  const loader = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  if (loader && loaderBar) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 25 + 10;
      if (progress >= 100) progress = 100;
      loaderBar.style.width = progress + '%';
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add('loaded');
        }, 300);
      }
    }, 200);

    window.addEventListener('load', () => {
      progress = 100;
      loaderBar.style.width = '100%';
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('loaded');
      }, 400);
    });
  }

  // Nav scroll behavior
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav.classList.toggle('scrolled', scrollY > 50);
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile nav toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Menu tabs
  const tabs = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.id === 'panel-' + target) {
          p.classList.add('active');
        }
      });
    });
  });

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal, [data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active', 'revealed');
        }, i * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // Parallax-light effect on hero
  const hero = document.querySelector('.hero-content');
  if (hero && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        hero.style.transform = `translateY(${scrollY * 0.15}px)`;
        hero.style.opacity = 1 - (scrollY / (window.innerHeight * 0.9));
      }
    }, { passive: true });
  }

  // Stagger menu items on tab change
  const staggerMenuItems = () => {
    const activePanel = document.querySelector('.menu-panel.active');
    if (!activePanel) return;
    const items = activePanel.querySelectorAll('.menu-item');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(10px)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, i * 40);
    });
  };

  tabs.forEach(tab => tab.addEventListener('click', staggerMenuItems));

  // Run initial stagger
  staggerMenuItems();

  // Menu price reveal: click to toggle on mobile, hover handles desktop via CSS
  const isTouchDevice = () => window.matchMedia('(max-width: 480px)').matches || 'ontouchstart' in window;

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Only toggle on touch/mobile — desktop uses CSS hover
      if (!isTouchDevice()) return;
      // Don't interfere with links inside
      if (e.target.closest('a')) return;
      // Close other open items in the same panel
      const panel = item.closest('.menu-panel');
      if (panel) {
        panel.querySelectorAll('.menu-item.price-open').forEach(other => {
          if (other !== item) other.classList.remove('price-open');
        });
      }
      item.classList.toggle('price-open');
    });
  });

  // Lightbox gallery modal
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const galleryItems = document.querySelectorAll('.gallery-item');

  const galleryImages = [
    { src: 'assets/buffalo wings.jpg', alt: 'Buffalo Wings' },
    { src: 'assets/chicken ala king.jpg', alt: 'Chicken Ala King' },
    { src: 'assets/pancit.jpg', alt: 'Pancit' },
    { src: 'assets/strawberry frappe.jpg', alt: 'Strawberry Frappe' },
    { src: 'assets/beef kulma.jpg', alt: 'Beef Kulma' },
    { src: 'assets/counter top.jpg', alt: 'Counter Top' },
    { src: 'assets/image of interior 1.jpg', alt: 'Interior' },
    { src: 'assets/place empty.jpg', alt: 'Dining Area' },
    { src: 'assets/storefront.jpg', alt: 'Storefront' }
  ];

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item = galleryItems[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-overlay span');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-overlay span');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
  }

  galleryItems.forEach(function (item, i) {
    item.addEventListener('click', function () { openLightbox(i); });
  });

  // Lightbox controls (guard against missing elements)
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', function () { navigateLightbox(-1); });
  if (lightboxNext) lightboxNext.addEventListener('click', function () { navigateLightbox(1); });

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
})();
