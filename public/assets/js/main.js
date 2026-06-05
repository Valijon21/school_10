const LOG_PREFIX = '[10-Maktab]';

document.addEventListener('DOMContentLoaded', () => {
  if (window.initTheme) window.initTheme();
  if (window.initNavigation) window.initNavigation();
  if (window.updateActiveNav) window.updateActiveNav();
  if (window.initSearch) window.initSearch();
  if (window.requestIdleCallback) {
    requestIdleCallback(() => { if (window.initAnimations) window.initAnimations(); }, { timeout: 2000 });
  } else {
    setTimeout(() => { if (window.initAnimations) window.initAnimations(); }, 100);
  }
});

window.addEventListener('load', () => {
  const perf = performance.getEntriesByType('navigation')[0];
  if (perf) {
    window.log(`${LOG_PREFIX} Page loaded: ${perf.loadEventEnd}ms`);
  }
});
