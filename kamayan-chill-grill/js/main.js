// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

// ===== HERO PARALLAX =====
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (heroBg) {
    heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.15}px)`;
  }
}, { passive: true });

// ===== GSAP ANIMATIONS =====
gsap.registerPlugin(ScrollTrigger);

// Fade-up on scroll
gsap.utils.toArray('.fade-up').forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      toggleActions: 'play none none none'
    }
  });
});

// Hero entrance
gsap.from('#heroContent > *', {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: 'power3.out',
  stagger: 0.15,
  delay: 0.2
});
