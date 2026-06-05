const THEMES = { DARK: 'dark', LIGHT: 'light' };

function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const stored = localStorage.getItem('theme') || THEMES.LIGHT;
  applyTheme(stored);
  updateIcon(stored);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    applyTheme(next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === THEMES.DARK);
  }

  function updateIcon(theme) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = theme === THEMES.DARK ? 'fas fa-sun' : 'fas fa-moon';
    }
  }
}

window.initTheme = initTheme;
