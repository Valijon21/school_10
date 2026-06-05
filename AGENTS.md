# 10-Maktab Project — Agent Memory

## Build
- `npm run dev` — Nuxt dev server (Vite HMR, port 3000)
- `npm run build` — Nuxt production build (`.output/`)
- `npm run preview` — Nuxt preview (`.output/server/index.mjs`)

## Nuxt Architecture
- **Framework**: Nuxt 4.4.7 + Vue 3.5.35 + Vite 7.3.5 + Nitro 2.13.4
- **CSS**: `@nuxtjs/tailwindcss` moduli, CSS fayllar: `main.css`, `base.css`, `layout.css`, `components.css`
- **Layouts**: `layouts/default.vue` (header, footer, search modal, navigation)
- **Pages**: `pages/` — 17+ Vue SFC fayllar
- **Composables**: `composables/` — Vue 3 composables

### Composables (hozingi)
- `composables/useTheme.ts` — dark/light mode, localStorage, icon toggle
- `composables/useNavigation.ts` — scroll effects, mobile menu, dropdowns, active nav
- `composables/useAnimations.ts` — IntersectionObserver scroll animations, back-to-top
- `composables/useSearch.ts` — search modal, search-index.json, Ctrl+K
- `composables/useData.ts` — `teachers` (18), `news` (24) data arrays + getter functions
  - Exports: `teachersList`, `newsList`, `categoryStyles`, `getTeacherById`, `getNewsById`

### Legacy JS (pasaytirildi)
- Eski `theme.js`, `navigation.js`, `animations.js`, `search.js`, `main.js` — **end yo'q** (composables bilan almashtirildi)
- `public/assets/js/data.js` — **end yuklanmaydi** (barcha data `useData` composable dan keladi)

## Pages (Nuxt .vue files)

| Route | File |
|-------|------|
| `/` | `pages/index.vue` |
| `/about/about` | `pages/about/about.vue` |
| `/about/history` | `pages/about/history.vue` |
| `/about/mission` | `pages/about/mission.vue` |
| `/about/management` | `pages/about/management.vue` |
| `/teachers/teachers` | `pages/teachers/teachers.vue` |
| `/teachers/former-teachers` | `pages/teachers/former-teachers.vue` |
| `/teachers/teacher-single/:id` | `pages/teachers/teacher-single/[id].vue` |
| `/academics/schedule` | `pages/academics/schedule.vue` |
| `/news/news` | `pages/news/news.vue` |
| `/news/news-single/:id` | `pages/news/news-single/[id].vue` |
| `/news/events` | `pages/news/events.vue` |
| `/admission/admission` | `pages/admission/admission.vue` |
| `/contact/contact` | `pages/contact/contact.vue` |
| `/gallery/gallery` | `pages/gallery/gallery.vue` |
| `/*` (catch-all 404) | `pages/[...slug].vue` |

## Colors
- Primary: `#0f172a`, Secondary: `#3b82f6`, Accent: `#f59e0b`, Background: `#f8fafc`
- Font: Outfit (Google Fonts via `nuxt.config.ts` head.link)

## Key Conventions
- Eski HTML manbalari `pages-html/` va `components-html/` da saqlanadi
- `{{HEAD}}`, `{{HEADER}}`, `{{FOOTER}}`, `{{SCRIPTS}}` -> layout + composables
- `{{TITLE}}`, `{{DESCRIPTION}}` -> `useHead({ title, meta: [...] })`
- `{{BREADCRUMBS}}` -> to'g'ridan-to'g'ri Vue template ichida
- `{{ROOT}}` -> absolute `/` paths
- `.html` links -> `<NuxtLink to="...">`
- `../../assets/images/` -> `/assets/images/`

## Remaining
- Teacher cards use `teacher.png` (need real photos)
