(function() {
  var LOG_KEY = 'maktab_log';
  var MAX_ENTRIES = 500;
  var sessionId = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  function pad(n) { return String(n).padStart(2, '0'); }

  function formatTS(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate())
      + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' + pad(d.getMilliseconds()) + 'Z';
  }

  function getLog() {
    try {
      return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
    } catch (e) { return []; }
  }

  function save(entry) {
    var log = getLog();
    log.unshift(entry);
    if (log.length > MAX_ENTRIES) log.length = MAX_ENTRIES;
    try { localStorage.setItem(LOG_KEY, JSON.stringify(log)); } catch (e) {}
  }

  function makeEntry(level, msg, extra) {
    return {
      ts: formatTS(new Date()),
      level: level,
      msg: msg,
      url: window.location.href,
      session: sessionId,
      ua: navigator.userAgent.slice(0, 120),
      stack: (extra && extra.stack) || '',
      data: extra || null
    };
  }

  function log(level, msg, extra) {
    var entry = makeEntry(level, msg, extra);
    save(entry);
    if (level === 'ERROR' || level === 'FATAL') {
      origError.call(console, '[' + level + '] ' + msg);
    }
    return entry;
  }

  // Capture global errors
  window.onerror = function(msg, source, line, col, err) {
    return log('ERROR', String(msg), {
      source: source,
      line: line,
      col: col,
      stack: err && err.stack ? err.stack : ''
    });
  };

  window.addEventListener('unhandledrejection', function(e) {
    var err = e.reason;
    log('FATAL', err && err.message ? err.message : String(err), {
      stack: err && err.stack ? err.stack : ''
    });
  });

  // Intercept console methods
  var origError = console.error;
  var origWarn = console.warn;

  console.error = function() {
    var msg = Array.prototype.map.call(arguments, String).join(' ');
    log('ERROR', msg);
    return origError.apply(console, arguments);
  };

  console.warn = function() {
    var msg = Array.prototype.map.call(arguments, String).join(' ');
    log('WARN', msg);
    return origWarn.apply(console, arguments);
  };

  // Public API
  window.__log = {
    info: function(msg) { log('INFO', msg); },
    warn: function(msg) { log('WARN', msg); },
    error: function(msg) { log('ERROR', msg); },
    fatal: function(msg) { log('FATAL', msg); },

    getAll: function() { return getLog(); },

    getByLevel: function(level) {
      return getLog().filter(function(e) { return e.level === level; });
    },

    getErrors: function() {
      return getLog().filter(function(e) { return e.level === 'ERROR' || e.level === 'FATAL'; });
    },

    clear: function() {
      try { localStorage.removeItem(LOG_KEY); } catch (e) {}
    },

    exportText: function() {
      var entries = getLog();
      var lines = [];
      lines.push('# 10-Maktab Error Log');
      lines.push('# Generated: ' + new Date().toISOString());
      lines.push('# Total entries: ' + entries.length);
      lines.push('');
      entries.forEach(function(e) {
        lines.push('[' + e.ts + '] [' + e.level + '] ' + e.msg);
        if (e.source) lines.push('  Source: ' + e.source + (e.line ? ':' + e.line : ''));
        if (e.url) lines.push('  URL: ' + e.url);
        if (e.stack) {
          e.stack.split('\n').forEach(function(s) { lines.push('  ' + s); });
        }
        lines.push('');
      });
      return lines.join('\n');
    },

    download: function() {
      var blob = new Blob([window.__log.exportText()], { type: 'text/plain' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'error-log-' + sessionId + '.log';
      a.click();
      URL.revokeObjectURL(a.href);
    },

    getSessionId: function() { return sessionId; },

    getStats: function() {
      var all = getLog();
      var stats = { total: all.length, ERROR: 0, WARN: 0, INFO: 0, FATAL: 0 };
      all.forEach(function(e) { if (stats[e.level] !== undefined) stats[e.level]++; });
      return stats;
    }
  };
})();
