const DEBUG = false;

function log(...args) {
  if (DEBUG) console.log('[10-Maktab]', ...args);
}

function error(...args) {
  console.error('[10-Maktab]', ...args);
}

window.log = log;
window.error = error;
