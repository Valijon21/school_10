const SCROLL_THRESHOLD = 50;

function updateActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/index';
  const cleanPath = path.replace(/\.html$/, '');
  const lastSegment = cleanPath.split('/').pop() || 'index';

  document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const cleanHref = href.replace(/\.html$/, '').split('/').pop();
    if (cleanHref === lastSegment) {
      link.classList.add('active');
    }
  });

  document.querySelectorAll('.dropdown-menu a.active').forEach(link => {
    const dd = link.closest('.dropdown');
    if (dd) {
      const toggle = dd.querySelector('.dropdown-toggle');
      if (toggle) toggle.classList.add('active');
    }
  });
}

function initDropdowns() {
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      if (menu && menu.classList.contains('dropdown-menu')) {
        const isVisible = menu.style.display === 'flex';
        menu.style.display = isVisible ? '' : 'flex';
        toggle.setAttribute('aria-expanded', !isVisible);
      }
    });
  });
}

function initNavigation() {
  const header = document.getElementById('main-header');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (header) {
          header.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  const toggle = document.getElementById('mobile-menu-toggle');
  let overlay = document.getElementById('mobile-menu-overlay');

  if (!overlay && toggle) {
    overlay = document.createElement('div');
    overlay.id = 'mobile-menu-overlay';

    const nav = document.querySelector('header nav');
    const clone = nav ? nav.cloneNode(true) : document.createElement('div');
    clone.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('dropdown-menu'));
    overlay.appendChild(clone);
    document.body.appendChild(overlay);
  }

  if (toggle && overlay) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = overlay.classList.contains('open');
      overlay.classList.toggle('open');
      toggle.classList.toggle('active');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  initDropdowns();
}

window.initNavigation = initNavigation;
window.updateActiveNav = updateActiveNav;
