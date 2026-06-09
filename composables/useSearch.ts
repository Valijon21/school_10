interface SearchPage {
  url: string
  title: string
  description: string
  path: string
}

const MAX_RESULTS = 8
const FOCUS_DELAY = 200

const ICON_MAP: Record<string, string> = {
  'news': 'fa-newspaper',
  'teachers': 'fa-chalkboard-user',
  'schedule': 'fa-calendar-alt',
  'gallery': 'fa-images',
  'about': 'fa-school',
  'contact': 'fa-envelope',
  'admission': 'fa-pen-to-square',
}
const DEFAULT_ICON = 'fa-file'

function getIconClass(url: string): string {
  for (const key in ICON_MAP) {
    if (url.includes(key)) return ICON_MAP[key]
  }
  return DEFAULT_ICON
}

export const useSearch = () => {
  const { t } = useI18n()
  let searchIndex: SearchPage[] = []
  let modal: HTMLElement | null = null
  let input: HTMLInputElement | null = null
  let results: HTMLElement | null = null
  let closeBtn: HTMLElement | null = null
  let toggleBtn: HTMLElement | null = null

  function loadSearchIndex(callback: () => void) {
    if (searchIndex.length) { callback(); return }
    fetch('/search-index.json')
      .then(r => r.json())
      .then((data: SearchPage[]) => { searchIndex = data; callback() })
      .catch(e => console.error('Search index fetch failed:', e))
  }

  function openSearch() {
    if (!modal || !input || !results) return
    modal.classList.add('open')
    input.value = ''
    results.textContent = ''
    document.body.style.overflow = 'hidden'
    setTimeout(() => input!.focus(), FOCUS_DELAY)
  }

  function closeSearch() {
    if (!modal) return
    modal.classList.remove('open')
    document.body.style.overflow = ''
  }

  function renderEmpty() {
    if (!results) return
    results.textContent = ''
    const empty = document.createElement('div')
    empty.className = 'search-empty'
    const icon = document.createElement('i')
    icon.className = 'fas fa-search'
    const p = document.createElement('p')
    p.textContent = t('common.noResults')
    empty.appendChild(icon)
    empty.appendChild(p)
    results.appendChild(empty)
  }

  function renderMatches(matches: SearchPage[]) {
    if (!results) return
    results.textContent = ''

    matches.forEach(page => {
      const url = page.url === 'index' || page.url === 'index.html' ? '/' : '/' + page.url.replace(/\.html$/, '')
      const a = document.createElement('a')
      a.href = url
      a.className = 'search-result-item'

      const iconDiv = document.createElement('div')
      iconDiv.className = 'icon'
      const icon = document.createElement('i')
      icon.className = `fas ${getIconClass(page.url)}`
      iconDiv.appendChild(icon)

      const infoDiv = document.createElement('div')
      infoDiv.className = 'info'
      const h4 = document.createElement('h4')
      h4.textContent = page.title
      const p = document.createElement('p')
      p.textContent = page.path
      infoDiv.appendChild(h4)
      infoDiv.appendChild(p)

      a.appendChild(iconDiv)
      a.appendChild(infoDiv)
      a.onclick = closeSearch
      results!.appendChild(a)
    })
  }

  function performSearch(query: string) {
    const q = query.toLowerCase().trim()
    if (!q || !searchIndex.length) {
      if (results) results.textContent = ''
      if (q) renderEmpty()
      return
    }

    const matches = searchIndex
      .filter(page => page.title.toLowerCase().includes(q) || page.description.toLowerCase().includes(q))
      .slice(0, MAX_RESULTS)

    if (!matches.length) {
      renderEmpty()
      return
    }

    renderMatches(matches)
  }

  function init() {
    modal = document.getElementById('search-modal')
    input = document.getElementById('search-input') as HTMLInputElement | null
    results = document.getElementById('search-results')
    closeBtn = document.getElementById('search-close')
    toggleBtn = document.getElementById('search-toggle')

    if (!modal || !input || !results || !toggleBtn) return

    toggleBtn.addEventListener('click', () => loadSearchIndex(openSearch))
    if (closeBtn) closeBtn.addEventListener('click', closeSearch)
    modal.addEventListener('click', e => {
      if (e.target === modal) closeSearch()
    })

    input.addEventListener('input', () => performSearch(input!.value))
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSearch()
    })

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        if (modal!.classList.contains('open')) closeSearch()
        else loadSearchIndex(openSearch)
      }
    })
  }

  return { init }
}
