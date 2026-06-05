const MAX_RESULTS = 8;
const FOCUS_DELAY = 200;

const ICON_MAP = {
  'pages/news': 'fa-newspaper',
  'pages/teachers': 'fa-chalkboard-user',
  'pages/academics': 'fa-calendar-alt',
  'pages/gallery': 'fa-images',
  'pages/about': 'fa-school',
  'pages/contact': 'fa-envelope',
  'pages/admission': 'fa-pen-to-square',
};
const DEFAULT_ICON = 'fa-file';

let searchIndex = [];
let modal, input, results, closeBtn, toggleBtn;
let searchDepth = 0;

function loadSearchIndex(callback) {
  if (searchIndex.length) { callback(); return; }
  const prefix = searchDepth ? '../'.repeat(searchDepth) : '';
  fetch(`${prefix}search-index.json`)
    .then(r => r.json())
    .then(data => { searchIndex = data; callback(); });
}

function openSearch() {
  modal.classList.add('open');
  input.value = '';
  results.textContent = '';
  document.body.style.overflow = 'hidden';
  setTimeout(() => input.focus(), FOCUS_DELAY);
}

function closeSearch() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function showEmptyResult() {
  const empty = document.createElement('div');
  empty.className = 'search-empty';
  const icon = document.createElement('i');
  icon.className = 'fas fa-search';
  const p = document.createElement('p');
  p.textContent = 'Hech narsa topilmadi';
  empty.appendChild(icon);
  empty.appendChild(p);
  results.appendChild(empty);
}

function renderEmpty() {
  results.textContent = '';
  showEmptyResult();
}

function getIconClass(url) {
  for (const prefix in ICON_MAP) {
    if (url.startsWith(prefix)) return ICON_MAP[prefix];
  }
  return DEFAULT_ICON;
}

function renderResults(matches) {
  const resultPrefix = searchDepth ? '../'.repeat(searchDepth) : '';
  results.textContent = '';

  matches.forEach(page => {
    const url = page.url === 'index.html' ? (resultPrefix || '.') : resultPrefix + page.url;
    const a = document.createElement('a');
    a.href = url;
    a.className = 'search-result-item';

    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    const icon = document.createElement('i');
    icon.className = `fas ${getIconClass(page.url)}`;
    iconDiv.appendChild(icon);

    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';
    const h4 = document.createElement('h4');
    h4.textContent = page.title;
    const p = document.createElement('p');
    p.textContent = page.path;
    infoDiv.appendChild(h4);
    infoDiv.appendChild(p);

    a.appendChild(iconDiv);
    a.appendChild(infoDiv);
    a.onclick = closeSearch;
    results.appendChild(a);
  });
}

function performSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q || !searchIndex.length) {
    results.textContent = '';
    if (q) renderEmpty();
    return;
  }

  const matches = searchIndex
    .filter(page => page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q))
    .slice(0, MAX_RESULTS);

  if (!matches.length) {
    renderEmpty();
    return;
  }

  renderResults(matches);
}

function initSearch() {
  modal = document.getElementById('search-modal');
  input = document.getElementById('search-input');
  results = document.getElementById('search-results');
  closeBtn = document.getElementById('search-close');
  toggleBtn = document.getElementById('search-toggle');

  if (!modal || !input || !results || !toggleBtn) return;

  searchDepth = Math.max(0, window.location.pathname.split('/').length - 2);

  toggleBtn.addEventListener('click', () => loadSearchIndex(openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeSearch();
  });

  input.addEventListener('input', () => performSearch(input.value));
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (modal.classList.contains('open')) closeSearch();
      else loadSearchIndex(openSearch);
    }
  });
}

window.initSearch = initSearch;
