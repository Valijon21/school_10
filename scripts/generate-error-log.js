/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const buildLogPath = path.join(ROOT, 'build.log');
const bugsJsonPath = path.join(ROOT, 'bugs.json');
const errorsLogPath = path.join(ROOT, 'error.log');

function read(file) {
  try { return fs.readFileSync(file, 'utf-8'); } catch (e) { return null; }
}

function pad(n) { return n < 10 ? '0' + n : '' + n; }
function ts() {
  var d = new Date();
  return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate())
    + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + 'Z';
}

// Parse build.log for errors and warnings
function parseBuildLog(content) {
  if (!content) return { errors: [], warnings: [], infos: [] };
  var lines = content.split('\n');
  var errors = [], warnings = [], infos = [];
  lines.forEach(function(line) {
    if (!line || line.startsWith('#')) return;
    if (line.includes('[ERROR]')) errors.push(line);
    else if (line.includes('[WARN]')) warnings.push(line);
    else if (line.includes('[INFO]') || line.includes('[OK]')) infos.push(line);
  });
  return { errors: errors, warnings: warnings, infos: infos };
}

// Parse bugs.json
function parseBugs(content) {
  if (!content) return { open: [], fixed: [], total: 0 };
  try {
    var data = JSON.parse(content);
    var open = data.bugs.filter(function(b) { return b.status === 'open'; });
    var fixed = data.bugs.filter(function(b) { return b.status === 'fixed'; });
    return { open: open, fixed: fixed, total: data.bugs.length };
  } catch (e) {
    return { open: [], fixed: [], total: 0, parseError: e.message };
  }
}

// Check for common issues in source files
function scanSourceIssues() {
  var issues = [];
  var patterns = [
    { pattern: /console\.log\(/, severity: 'LINT', msg: 'console.log() left in production code' },
    { pattern: new RegExp('debugger;'), severity: 'LINT', msg: 'debugger statement found' },
    { pattern: /TODO/i, severity: 'LINT', msg: 'Unresolved ' + 'TODO' },
    { pattern: /FIXME/i, severity: 'WARN', msg: 'Unresolved ' + 'FIXME' },
    { pattern: /\.innerHTML\s*=/, severity: 'WARN', msg: 'innerHTML assignment (XSS risk)' },
  ];

  function scanDir(dir, rel) {
    if (!fs.existsSync(dir)) return;
    var entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch(e) { return; }
    entries.forEach(function(entry) {
      var full = path.join(dir, entry.name);
      var r = path.join(rel, entry.name);
      if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== '.git' && entry.name !== 'scripts' && entry.name !== '.output') {
        scanDir(full, r);
      } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js')) {
        var content = read(full);
        if (!content) return;
        patterns.forEach(function(p) {
          var m = content.match(p.pattern);
          if (m) {
            issues.push({
              severity: p.severity,
              file: r,
              msg: p.msg + (p.pattern.source !== m.input ? ' (line: ' + (content.slice(0, m.index).split('\n').length) + ')' : '')
            });
          }
        });
      }
    });
  }

  scanDir(path.join(ROOT, 'assets'), 'assets');
  scanDir(path.join(ROOT, 'pages'), 'pages');
  scanDir(path.join(ROOT, 'components'), 'components');
  scanDir(ROOT, '.');

  return issues;
}

// Generate error.log
function generate() {
  var buildContent = read(buildLogPath);
  var bugsContent = read(bugsJsonPath);
  var buildData = parseBuildLog(buildContent);
  var bugsData = parseBugs(bugsContent);
  var sourceIssues = scanSourceIssues();

  var lines = [];
  var hr = '='.repeat(72);

  // Header
  lines.push('# 10-Maktab Error Log');
  lines.push('# Generated: ' + ts());
  lines.push('# Source: build.log + bugs.json + source scan');
  lines.push(hr);
  lines.push('');

  // Summary
  lines.push('## Summary');
  lines.push('');
  lines.push('  Build errors:   ' + buildData.errors.length);
  lines.push('  Build warnings: ' + buildData.warnings.length);
  lines.push('  Open bugs:      ' + bugsData.open.length);
  lines.push('  Fixed bugs:     ' + bugsData.fixed.length);
  lines.push('  Source issues:  ' + sourceIssues.length);
  lines.push('');
  lines.push(hr);
  lines.push('');

  // Build errors
  if (buildData.errors.length > 0) {
    lines.push('## Build Errors');
    lines.push('');
    buildData.errors.forEach(function(e) {
      lines.push('  ' + e.trim());
    });
    lines.push('');
  }

  // Build warnings
  if (buildData.warnings.length > 0) {
    lines.push('## Build Warnings');
    lines.push('');
    buildData.warnings.forEach(function(e) {
      lines.push('  ' + e.trim());
    });
    lines.push('');
  }

  // Open bugs
  if (bugsData.open.length > 0) {
    lines.push('## Open Bugs');
    lines.push('');
    bugsData.open.forEach(function(b) {
      lines.push('  [' + b.severity.toUpperCase() + '] ' + b.id + ': ' + b.title);
      lines.push('    File: ' + b.file);
      lines.push('    Found: ' + b.found_at);
      lines.push('');
    });
  }

  // Source lint issues
  if (sourceIssues.length > 0) {
    lines.push('## Source Lint Issues');
    lines.push('');
    sourceIssues.forEach(function(issue) {
      lines.push('  [' + issue.severity + '] ' + issue.file + ': ' + issue.msg);
    });
    lines.push('');

    // Fix suggestions
    var uniqFiles = {};
    sourceIssues.forEach(function(i) { uniqFiles[i.file] = true; });
    lines.push('  Affected files: ' + Object.keys(uniqFiles).length);
    lines.push('');
  }

  // Known error patterns (documented previous bugs)
  lines.push('## Known Error Patterns (from bugs.json)');
  lines.push('');
  if (bugsData.fixed.length > 0) {
    lines.push('  Previously fixed errors (should not reoccur):');
    bugsData.fixed.forEach(function(b) {
      lines.push('    [' + b.id + '] ' + b.title);
      lines.push('      Fix: ' + b.fix);
    });
  } else {
    lines.push('  No previously fixed bugs documented.');
  }
  lines.push('');

  // Footer
  lines.push(hr);
  lines.push('# End of Error Log');

  var content = lines.join('\n') + '\n';
  fs.writeFileSync(errorsLogPath, content, 'utf-8');
  process.stdout.write('  \u2713 error.log (' + (buildData.errors.length + buildData.warnings.length + sourceIssues.length) + ' issues)\n');
}

generate();
