const SCROLL_OBSERVER_CONFIG = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const BACK_TO_TOP_THRESHOLD = 500;

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, SCROLL_OBSERVER_CONFIG);

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  initBackToTop();
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > BACK_TO_TOP_THRESHOLD);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

window.initAnimations = initAnimations;
