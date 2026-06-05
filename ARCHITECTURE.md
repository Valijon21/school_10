# 10-Maktab — To'liq Arxitektura Hujjati

## Mundarija

1. [Loyiha haqida](#1-loyiha-haqida)
2. [Fayl tuzilishi](#2-fayl-tuzilishi)
3. [Build tizimi](#3-build-tizimi)
4. [Komponent tizimi](#4-komponent-tizimi)
5. [Sahifa tizimi](#5-sahifa-tizimi)
6. [CSS arxitekturasi](#6-css-arxitekturasi)
7. [JavaScript arxitekturasi](#7-javascript-arxitekturasi)
8. [Data qatlami](#8-data-qatlami)
9. [SEO tizimi](#9-seo-tizimi)
10. [Asset boshqaruvi](#10-asset-boshqaruvi)
11. [PWA](#11-pwa)
12. [Bug tracking](#12-bug-tracking)
13. [Error handling](#13-error-handling)
14. [Accessibility](#14-accessibility)
15. [Dizayn tizimi](#15-dizayn-tizimi)
16. [Barcha CSS klasslari ro'yxati](#16-barcha-css-klasslari-ro'yxati)
17. [Barcha JavaScript funksiyalari ro'yxati](#17-barcha-javascript-funksiyalari-ro'yxati)
18. [Ishlab chiqishda tuzatilgan xatolar](#18-ishlab-chiqishda-tuzatilgan-xatolar)

---

## 1. Loyiha haqida

10-Maktab — Toshkent viloyati, Chirchiq shahridagi 10-sonli umumta'lim maktabining rasmiy veb-sayti.

| Aspekt | Qiymat |
|---|---|
| **Domain** | https://10-maktab.uz |
| **Status** | Production-ready |
| **Platforma** | Statik HTML |
| **CSS Framework** | Tailwind CSS v3.4+ (CLI build, CDN emas) |
| **JS** | Vanilla JavaScript (ES5/ES6, module emas) |
| **Build** | Custom Node.js script (`build.js`) |
| **Server** | Static file serving (`npx serve dist`) |
| **Font** | Outfit (Google Fonts) |
| **Ikonkalar** | Font Awesome 6 (CDN, deferred) |

### Texnologik stack detallari

| Texnologiya | Versiya | Konfiguratsiya |
|---|---|---|
| Node.js | ≥14 (build uchun) | `build.js` |
| npm | ≥6 | `package.json` |
| Tailwind CSS | ^3.4.0 | JIT mode, `tailwind.config.js` orqali |
| Font Awesome 6 | 6.0.0 | CDN, `rel="preload" as="style"` + noscript fallback |
| Google Fonts (Outfit) | — | wght@400;500;600;700;800 |
| Schema.org JSON-LD | — | WebSite + School + BreadcrumbList |
| Open Graph | — | `og:title`, `og:description`, `og:image`, `og:url`, `og:locale` |
| Twitter Cards | — | `summary_large_image` |
| RSS 2.0 | — | Avtomatik generatsiya |
| Service Worker | — | Cache-first strategiya |
| W3C HTML5 | — | Valid semantic markup |

---

## 2. Fayl tuzilishi

```
10-maktab/
│
├── index.html                          # Bosh sahifa ({{ROOT}} = '' bo'ladi)
├── package.json                        # npm skriptlari va dependency
├── build.js                            # Asosiy build skripti (367 lines)
├── tailwind.config.js                  # Tailwind konfiguratsiyasi
├── AGENTS.md                           # AI agent uchun kontekst
├── README.md                           # Loyiha README
├── ARCHITECTURE.md                     # Ushbu hujjat
│
├── sitemap.xml                         # 16 URL, priority bilan
├── robots.txt                          # Allow: /, Sitemap link
├── manifest.json                       # PWA manifest
├── sw.js                               # Service Worker (cache-first)
├── bugs.json                           # 15 bug tracking (hammasi fixed)
├── build.log                           # Build sessiyalari logi (avtomatik)
│
├── components/                         # ## 4-komponent-tizimi
│   ├── head.html                       #   <head> — meta, OG, JSON-LD, font, favicon (73 lines)
│   ├── header.html                     #   Navigatsiya, mobil menu, qidiruv, tema (74 lines)
│   ├── footer.html                     #   Footer — linklar, kontakt, back-to-top (58 lines)
│   ├── scripts.html                    #   JS scriptlar + Service Worker (15 lines)
│   └── breadcrumbs.html               #   Yo'l ko'rsatkich + BreadcrumbList schema (4 lines)
│
├── pages/                              # ## 5-sahifa-tizimi
│   ├── 404.html                        #   Custom xato sahifasi
│   ├── logs/
│   │   └── logs.html                   #   Xatolik loglari interfeysi
│   │
│   ├── about/                          #   "Maktab haqida" bo'limi
│   │   ├── about.html                  #     Umumiy ma'lumot (144 lines)
│   │   ├── history.html                #     Maktab tarixi (94 lines)
│   │   ├── mission.html                #     Missiya va qadriyatlar (112 lines)
│   │   └── management.html             #     Rahbariyat (161 lines)
│   │
│   ├── teachers/                       #   "O'qituvchilar" bo'limi
│   │   ├── teachers.html               #     Barcha o'qituvchilar (201 lines)
│   │   ├── former-teachers.html        #     Faxriy ustozlar (592 lines)
│   │   └── teacher-single.html         #     O'qituvchi profili (dynamic)
│   │
│   ├── academics/
│   │   └── schedule.html               #   Dars jadvali
│   │
│   ├── news/                           #   "Yangiliklar" bo'limi
│   │   ├── news.html                   #     Yangiliklar ro'yxati
│   │   ├── news-single.html            #     Yangilik batafsil (dynamic, ?id=)
│   │   └── events.html                 #     Tadbirlar
│   │
│   ├── admission/
│   │   └── admission.html              #   Qabul sahifasi
│   │
│   ├── contact/
│   │   └── contact.html                #   Bog'lanish sahifasi (181 lines)
│   │
│   └── gallery/
│       └── gallery.html                #   Galereya
│
├── assets/
│   ├── css/                            # ## 6-css-arxitekturasi
│   │   ├── main.css                    #   Tailwind direktivalari (3 lines)
│   │   ├── base.css                    #   CSS o'zgaruvchilar, reset, tipografiya (55 lines)
│   │   ├── layout.css                  #   Header, footer, nav, dropdown, mobile menu (190 lines)
│   │   └── components.css              #   Skip-link, animatsiyalar, badge, lightbox, search (349 lines)
│   │
│   ├── js/                             # ## 7-javascript-arxitekturasi
│   │   ├── data.js                     #   Statik ma'lumotlar (518 lines)
│   │   ├── main.js                     #   DOMContentLoaded orchestrator (20 lines)
│   │   ├── theme.js                    #   Dark/light tema (32 lines)
│   │   ├── navigation.js               #   Header scroll, mobil menu, dropdown (93 lines)
│   │   ├── animations.js               #   IntersectionObserver + back-to-top (31 lines)
│   │   ├── search.js                   #   Sayt qidiruv (151 lines)
│   │   ├── render.js                   #   Virtual DOM helper (20 lines)
│   │   ├── logger.js                   #   Debug log (12 lines)
│   │   └── error-logger.js             #   Xatolik monitoringi (139 lines)
│   │
│   └── images/                         # ## 10-asset-boshqaruvi
│       ├── favicon.svg                 #   SVG favicon
│       ├── building.png                #   Maktab binosi surati
│       ├── classroom.png              #   Sinfxona surati
│       ├── students.png               #   O'quvchilar surati
│       ├── hero.png                    #   Hero section surati
│       ├── teacher.png                 #   O'qituvchi placeholder rasmi
│       ├── director.svg                #   Direktor SVG placeholder
│       ├── deputy1.svg                 #   O'rinbosar 1 SVG placeholder
│       ├── deputy2.svg                 #   O'rinbosar 2 SVG placeholder
│       ├── deputy3.svg                 #   O'rinbosar 3 SVG placeholder
│       └── library.svg                 #   Kutubxona SVG placeholder
│
├── dist/                               # Build natijasi (avtomatik generatsiya)
│   ├── index.html
│   ├── pages/**/*.html
│   ├── assets/css/main.css             # Minified Tailwind
│   ├── assets/images/*
│   ├── assets/js/*
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── manifest.json
│   ├── sw.js
│   ├── rss.xml                         # Avtomatik generatsiya
│   ├── search-index.json               # Avtomatik generatsiya
│   ├── bugs.json
│   ├── build.log
│   └── error.log
│
└── scripts/
    └── generate-error-log.js           # Error.log generatori
```

---

## 3. Build tizimi

### 3.1. `package.json` skriptlari

```json
{
  "name": "10-maktab",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "node build.js --watch",
    "build": "node build.js",
    "serve": "npx serve dist"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

| Skript | Maqsad |
|---|---|
| `npm run build` | Bir martalik build — `node build.js` |
| `npm run dev` | Build + watch mode — fayl o'zgarishlarini kuzatadi |
| `npm run serve` | `dist/` papkasini `localhost:3000` da serve qiladi |

### 3.2. Build jarayoni (`build.js`)

Build 7 bosqichdan iborat:

#### 3.2.1. Tozalash (Clean)
- `dist/` papkasi butunlay o'chiriladi: `fs.rmSync(DIST, { recursive: true })`
- Yangi `buildLog = []` massivi yaratiladi

#### 3.2.2. Root sahifani build qilish
- `index.html` ni o'qiydi
- `buildPage(path.join(ROOT, 'index.html'), 'index.html')` chaqiriladi

#### 3.2.3. `pages/` ichidagi barcha HTML fayllarni build qilish
- `scanPages` rekursiv funksiyasi `pages/` papkasini to'liq skanerlaydi
- Har bir `.html` fayl uchun `buildPage()` chaqiriladi
- Build paytida `relativePath` ikkinchi argument hisoblanadi (masalan `pages/about/about.html`)

#### 3.2.4. Har bir sahifada `buildPage()` funksiyasi bajaradigan ishlar

1. **Metadata ekstraksiyasi** — Regex orqali `<!-- {{TITLE:...}} -->` va `<!-- {{DESCRIPTION:...}} -->` kommentlari topiladi
2. **Metadata o'chirilishi** — Topilgan kommentlar matndan o'chiriladi
3. **`{{ROOT}}` hisoblanishi** — Sahifa chuqurligiga qarab `../` prefiksi hisoblanadi
   - `index.html` (depth=0) → `''`
   - `pages/about/about.html` (depth=2) → `'../../'`
4. **Search index qo'shilishi** — `pageIndex[]` ga `{title, description, url, path}` qo'shiladi
5. **Canonical URL** — `https://10-maktab.uz/` asosida quriladi (index → bare domain)
6. **Skip-link** — `<main>` tegi `<main id="main-content">` ga almashtiriladi
7. **Breadcrumbs** — `buildBreadcrumbs()` chaqiriladi:
   - Segmentlar bo'linadi, har biri `labels` map'dan o'qiladi
   - HTML navigatsiya va BreadcrumbList JSON-LD generatsiya qilinadi
   - `{{BREADCRUMBS}}` placeholder komponent bilan almashtiriladi
8. **Placeholder almashtirish** (ketma-ket):
   - `{{HEAD}}` → `head.html` komponent (TITLE, DESCRIPTION, CANONICAL_URL bilan)
   - `{{HEADER}}` → `header.html` komponent
   - `{{FOOTER}}` → `footer.html` komponent
   - `{{SCRIPTS}}` → `scripts.html` komponent
   - `{{ROOT}}` → hisoblangan `../` prefiksi
9. **Output faylga yozish** — `dist/relativePath`

#### 3.2.5. Assetlarni build qilish (`buildAssets()`)

1. **Rasm va fontlarni ko'chirish**: `assets/images/` → `dist/assets/images/`, `assets/fonts/` → `dist/assets/fonts/`
2. **Tailwind CSS build**:
   - 4 CSS fayl birlashtiriladi: `main.css` + `base.css` + `layout.css` + `components.css`
   - Vaqtinchalik `_tailwind-input.css` fayliga yoziladi
   - `npx tailwindcss -i _tailwind-input.css -o dist/assets/css/main.css --minify` bajariladi
   - Vaqtinchalik fayl o'chiriladi
   - Xato bo'lsa, CSS fayl asl holicha ko'chiriladi
3. **JS fayllarni ko'chirish**: `assets/js/` → `dist/assets/js/`
4. **RSS feed generatsiya**: `generateRss()` — `data.js` dan news ma'lumotlarini o'qib, `rss.xml` yaratadi
5. **Root fayllarni ko'chirish**: `sitemap.xml`, `robots.txt`, `manifest.json`, `sw.js`

#### 3.2.6. Search index yozish

- `search-index.json` — 17 sahifaning `{title, description, url, path}` massivi
- `path` maydoni breadcrumb-style: `about › history`

#### 3.2.7. Yakuniy bosqichlar

1. `bugs.json` ko'chiriladi
2. `build.log` yoziladi va ko'chiriladi
3. `generate-error-log.js` bajariladi (agar mavjud bo'lsa), `error.log` generatsiya qilinadi
4. Watch mode (agar `--watch` flan berilgan bo'lsa):
   - `components/`, `pages/`, `assets/css/`, `assets/js/` papkalari kuzatiladi
   - O'zgarish bo'lganda 300ms debounce bilan rebuild ishga tushadi

### 3.3. Breadcrumbs hisoblash logikasi

`buildBreadcrumbs(relativePath)` funksiyasi:

```
Kirish: "pages/about/history.html"
Chiqish:
  HTML: <a href="../../">Bosh sahifa</a> / <span>Maktab haqida</span> / <span>Maktab tarixi</span>
  JSON-LD: BreadcrumbList schema with 3 items
```

**Labels map** (barcha segmentlar):

| Segment | Label |
|---|---|
| `index` | Bosh sahifa |
| `about` | Maktab haqida |
| `history` | Maktab tarixi |
| `mission` | Maqsadimiz |
| `management` | Rahbariyat |
| `teachers` | O'qituvchilar |
| `former-teachers` | Faxriy ustozlar |
| `teacher-single` | O'qituvchi profili |
| `academics` | O'quv bo'limi |
| `schedule` | Dars jadvali |
| `news` | Yangiliklar |
| `news-single` | Yangilik |
| `events` | Tadbirlar |
| `admission` | Qabul |
| `contact` | Bog'lanish |
| `gallery` | Galereya |

---

## 4. Komponent tizimi

### 4.1. `head.html` (73 lines)

**Placeholderlar**: `{{TITLE}}`, `{{DESCRIPTION}}`, `{{CANONICAL_URL}}`

**Qamrab oladi**:
- `<!DOCTYPE html>` va `<html lang="uz">` — HTML5 standard
- `<head>` ichida:
  - `meta charset="UTF-8"` — kodlash
  - `meta name="viewport"` — responsive
  - `title` — dinamik TITLE
  - `meta name="description"` — dinamik DESCRIPTION
  - **Open Graph** (6 meta):
    - `og:type="website"`
    - `og:title`
    - `og:description`
    - `og:url` — canonical
    - `og:image` — `https://10-maktab.uz/assets/images/building.png` (1200x630)
    - `og:locale="uz_UZ"`
  - **Twitter Cards** (3 meta): `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
  - **Linklar**:
    - `favicon.svg` — SVG favicon
    - `canonical` — SEO uchun
    - `manifest.json` — PWA
    - `rss.xml` — Yangiliklar feed
  - `meta name="theme-color"` — `#0f172a` (primary)
  - `main.css` — Tailwind built CSS
  - **Font Awesome 6** (deferred load):
    - `rel="preload" as="style"` → asenkron yuklanadi
    - `<noscript>` fallback
  - **Google Fonts (Outfit)**:
    - `preconnect` Google Fonts serverlariga
    - Font URL: `Outfit:wght@400;500;600;700;800`
  - **JSON-LD Schema** (2 blok):
    - `WebSite` — `SearchAction` bilan (Google site search)
    - `School` — manzil, telefon, email, ijtimoiy tarmoqlar
  - `<body>` ochilishi: `class="bg-background font-outfit"`
  - **Skip-link**: `<a href="#main-content" class="skip-link">Asosiy kontentga o'tish</a>`

### 4.2. `header.html` (74 lines)

**Placeholderlar**: `{{ROOT}}`

**Tuzilishi**:
- `<header id="main-header">` — fixed, z-index 2000, glassmorphism
  - **Logo**: `10-MAKTAB` — responsiv font size (1.3rem→1.5rem→1.8rem)
  - **Desktop navigatsiya** (`<nav class="hidden lg:flex">`):
    - Bosh sahifa (`{{ROOT}}`)
    - Maktab haqida (dropdown) → about, history, mission, management
    - O'qituvchilar (dropdown) → teachers, former-teachers
    - Dars jadvali
    - Yangiliklar
  - **O'ng tomondagi tugmalar**:
    - `#search-toggle` — qidiruv tugmasi (aria-label="Qidiruv")
    - `#theme-toggle` — tema almashtirish (aria-label="Tema almashtirish")
    - `Qabul 2026` — CTA tugma (`hidden md:inline-block`)
    - `#mobile-menu-toggle` — 3 chiziqli burger menu (`lg:hidden`)
  - **Search modal** (`#search-modal`):
    - Yopish tugmasi (`#search-close`)
    - Input (`#search-input`) + natijalar (`#search-results`)
    - `Ctrl+K` shortcut
  - **Dropdown mexanizmi**: CSS hover + JS click fallback

### 4.3. `footer.html` (58 lines)

**Placeholderlar**: `{{ROOT}}`

**Grid: 4 column (1→2→4 responsive)**:
1. **Logo** + description + **social icons** (Facebook, Instagram, Telegram)
2. **Sahifalar** — Bosh sahifa, Maktab haqida, O'qituvchilar, Yangiliklar
3. **O'quv bo'limi** — Dars jadvali, Tadbirlar, Rahbariyat, Maktab tarixi
4. **Bog'lanish** — manzil (`Toshkent viloyati, Chirchiq shahri`), telefon (`+998 (71) 234-56-78`), email (`info@10-maktab.uz`)
- **Copyright**: `© 2026 10-sonli umumta'lim maktabi. Barcha huquqlar himoyalangan.`
- **Back-to-top**: `#back-to-top` tugmasi (fixed bottom-right)

### 4.4. `scripts.html` (15 lines)

**Placeholderlar**: `{{ROOT}}`

**Scriptlar (hammasi `defer`)**:
1. `error-logger.js` — xatolik tutib olish
2. `data.js` — statik ma'lumotlar
3. `logger.js` — debug utiliti
4. `theme.js` — dark/light tema
5. `navigation.js` — navigatsiya logikasi
6. `animations.js` — scroll animatsiyalar
7. `search.js` — sayt qidiruvi
8. `main.js` — orchestrator

**Service Worker**: `navigator.serviceWorker.register('{{ROOT}}sw.js')`

**Yopilishi**: `</body></html>`

### 4.5. `breadcrumbs.html` (4 lines)

**Placeholderlar**: `{{BREADCRUMB_ITEMS}}`, `{{BREADCRUMB_SCHEMA}}`

```html
<nav class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-8" aria-label="Breadcrumb">
    {{BREADCRUMB_ITEMS}}
</nav>
<script type="application/ld+json" id="breadcrumb-schema">{{BREADCRUMB_SCHEMA}}</script>
```

---

## 5. Sahifa tizimi

### 5.1. Umumiy sahifa shabloni

Har bir sahifa quyidagi placeholderlarni o'z ichiga oladi:

```
<!-- {{TITLE:Sahifa sarlavhasi}} -->
<!-- {{DESCRIPTION:Sahifa tavsifi}} -->
{{HEAD}}
{{HEADER}}
<main>
    {{BREADCRUMBS}}
    <!-- Sahifaga xos content -->
</main>
{{FOOTER}}
{{SCRIPTS}}
```

### 5.2. Metadata (barcha 17 sahifa)

| # | Fayl | TITLE | DESCRIPTION |
|---|---|---|---|
| 1 | `index.html` | 10-Maktab - 10-sonli Chirchiq umumta'lim maktabi | 10-sonli umumta'lim maktabining rasmiy veb-sayti. Chirchiqdagi eng ilg'or maktablardan biri haqida to'liq ma'lumot: yangiliklar, dars jadvali, qabul va boshqalar. |
| 2 | `about.html` | Umumiy ma'lumot | 10-Maktab - Chirchiqdagi ilg'or maktab | 10-maktab haqida umumiy ma'lumot: 30 yillik tajriba, 1200+ bitiruvchi, zamonaviy ta'lim. |
| 3 | `history.html` | Maktab tarixi | 10-Maktab - Chirchiq ta'lim maskani | 10-maktab tarixi: 1990-yilda tashkil etilgan maktabimizning o'tmishdan bugungacha bo'lgan shonli yo'li. |
| 4 | `mission.html` | Missiya va qadriyatlar | 10-Maktab - sifatli ta'lim | 10-maktabning missiyasi, qadriyatlari va ta'lim tamoyillari. |
| 5 | `management.html` | Rahbariyat | 10-Maktab - direktor va o'rinbosarlar | 10-maktab rahbariyati: direktor va direktor o'rinbosarlari haqida to'liq ma'lumot. |
| 6 | `teachers.html` | O'qituvchilar | 10-Maktab - malakali pedagogik jamoa | 10-maktabning tajribali va malakali o'qituvchilari. Matematika, fizika, kimyo fanlari. |
| 7 | `former-teachers.html` | Faxriy ustozlar | 10-Maktab - sobiq o'qituvchilar | 10-maktabda faoliyat yuritgan sobiq o'qituvchilar haqida ma'lumot. |
| 8 | `teacher-single.html` | O'qituvchi profili | 10-Maktab | O'qituvchi haqida batafsil ma'lumot. |
| 9 | `schedule.html` | Dars jadvali | 10-Maktab - akademik taqvim | 10-maktabning to'liq dars jadvali va qo'ng'iroq vaqtlari. |
| 10 | `news.html` | Yangiliklar | 10-Maktab - so'nggi e'lon va xabarlar | 10-maktab yangiliklari: tadbirlar, e'lonlar, sport musobaqalari va maktab hayotidan eng so'nggi lavhalar. |
| 11 | `news-single.html` | Yangilik | 10-Maktab | Yangilikning to'liq matni. |
| 12 | `events.html` | Tadbirlar | 10-Maktab - maktab tadbirlari | 10-maktab tadbirlari: bayramlar, tanlovlar va boshqa muhim voqealar. |
| 13 | `admission.html` | Qabul | 10-Maktab - 2026-2027 o'quv yili | 10-maktabga hujjat topshirish tartibi, talab qilinadigan hujjatlar va qabul komissiyasi ma'lumotlari. |
| 14 | `contact.html` | Kontakt | 10-Maktab - manzil, telefon va bog'lanish | 10-maktab bilan bog'lanish: manzil, telefon raqam, elektron pochta va xarita. |
| 15 | `gallery.html` | Galereya | 10-Maktab - foto va video lavhalar | 10-maktab hayotidan eng yorqin fotolavhalar va videoroliklar. |
| 16 | `404.html` | 404 - Sahifa topilmadi | 10-Maktab | Kechirasiz, qidirgan sahifangiz topilmadi. |
| 17 | `logs.html` | Loglar | 10-Maktab | Tashxis loglari interfeysi. |

### 5.3. Sahifa tuzilishi detallari

#### 5.3.1. `index.html` — Bosh sahifa
- **Hero**: Full-screen, `building.png` fon, `fetchpriority="high"`, gradient overlay, CTA tugmalar
- **Statistik kartalar**: 4 ta (1200+ o'quvchilar, 85+ o'qituvchilar, 150+ yutuqlar, 25+ sinfxonalar)
- **Yangiliklar grid**: 3 ta skeleton loading → JS dynamic render (news data)
- **"Nega aynan biz?"** section: 3 xususiyat (texnologiyalar, malakali ustozlar, to'garaklar)
- **Inline script**: `window.news` dan 6 ta yangilikni render qiladi, kategoriya bo'yicha stil (Tadbir→blue, E'lon→amber, Sport→green, Loyihalar→dark)

#### 5.3.2. `about/about.html`
- Hero + breadcrumbs
- 2-column grid: matn (30+ yillik tajriba, 1200+ bitiruvchi) + rasm (`building.png`)
- 3 ta navigatsiya kartasi: Tarix, Missiya, Rahbariyat

#### 5.3.3. `about/history.html`
- Timeline: 4 ta muhim sana (1990, 2005, 2015, 2024)
- Har bir voqea: yil belgisi, sarlavha, tavsif

#### 5.3.4. `about/mission.html`
- Katta mission card (quote bilan)
- 3 ta qadriyat kartasi: Vatanparvarlik, Innovatsiya, Hamkorlik

#### 5.3.5. `about/management.html`
- Director: `director.svg` + to'liq ma'lumot + kontakt
- 3 ta o'rinbosar (grid): `deputy1-3.svg` + lavozim + telefon

#### 5.3.6. `teachers/teachers.html`
- Qidiruv input + subject filter tugmalar (Barchasi, Matematika, Ona tili, Ingliz tili, Informatika, Tarix)
- 3-column grid: 18 o'qituvchi card
- JS: filter + search dynamic, skeleton loading

#### 5.3.7. `teachers/former-teachers.html`
- 10 ta faxriy o'qituvchi card (grid)
- Har biri: rasm (`teacher.png`, grayscale), fan, ism, yillar, bio

#### 5.3.8. `teachers/teacher-single.html`
- Dynamic: `?id=` parametr orqali o'qituvchi ma'lumoti yuklanadi
- Profile layout: rasm, ism, fan, tajriba, bio, education, achievements, statistika

#### 5.3.9. `academics/schedule.html`
- Dars jadvali jadvali (kunlar/fanlar)
- Qo'ng'iroq vaqtlari
- Scroll hint (xl:gacha ko'rinadi)

#### 5.3.10. `news/news.html`
- 3-column grid: 24 ta yangilik
- Kategoriya filter
- JS dynamic render

#### 5.3.11. `news/news-single.html`
- Dynamic: `?id=` parametr orqali yangilik yuklanadi
- Rasm, sarlavha, kategoriya, sana, fullContent (HTML rich text)

#### 5.3.12. `news/events.html`
- Tadbirlar: calendar-style ro'yxat

#### 5.3.13. `admission/admission.html`
- Qabul shartlari, talab qilinadigan hujjatlar
- Qabul komissiyasi ma'lumoti

#### 5.3.14. `contact/contact.html`
- Kontakt info (manzil, telefon, email, ish vaqti)
- Kontakt forma

#### 5.3.15. `gallery/gallery.html`
- Rasm galereyasi grid
- Lightbox funksiyasi

#### 5.3.16. `404.html`
- Custom 404 sahifasi
- Bosh sahifaga qaytish linki

#### 5.3.17. `logs/logs.html`
- `window.__log` API orqali xatolik loglarini ko'rsatish
- Filter by level, download, clear

---

## 6. CSS arxitekturasi

### 6.1. `main.css` (3 lines)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Faqat Tailwind direktivalari. Boshqa stil yo'q.

### 6.2. `base.css` (55 lines)

**CSS o'zgaruvchilar (light theme — default)**:
```css
--primary: #0f172a;
--primary-light: #1e293b;
--secondary: #3b82f6;
--secondary-hover: #2563eb;
--accent: #f59e0b;
--background: #f8fafc;
--surface: #ffffff;
--text-main: #0f172a;
--text-muted: #64748b;
--white: #ffffff;
--header-h: 85px;
--header-h-scrolled: 70px;
--header-h-mobile: 70px;
--container-width: 1240px;
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-border: rgba(255, 255, 255, 0.3);
--glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--gradient-overlay: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75));
```

**Dark theme override `[data-theme="dark"]`**:
```css
--primary: #f8fafc;
--primary-light: #e2e8f0;
--background: #0f172a;
--surface: #1e293b;
--text-main: #f8fafc;
--text-muted: #94a3b8;
--glass-bg: rgba(30, 41, 59, 0.7);
--glass-border: rgba(255, 255, 255, 0.1);
```

**Global reset**:
- `html { scroll-behavior: smooth; }` — silliq scroll
- `prefers-reduced-motion` — motionni o'chiradi
- `*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }`
- `body` — Outfit font, CSS o'zgaruvchilar, `padding-top: var(--header-h);`
- `a` — inherits color, transition
- `ul` — list-style: none
- `img` — max-width: 100%, object-fit: cover

### 6.3. `layout.css` (190 lines)

**Nav-link** (`a.nav-link`):
- Position relative, `::after` pseudo-element ( 3px bottom border, secondary rang, `hover:width:100%` animatsiya)

**Dropdown menu** (`.dropdown-menu`):
- Display: none → hover/focus-within → flex
- Absolute positioning, top:100%, z-index:2500
- Border-top: 3px secondary (indicator)
- Shadow: 0 20px 40px rgba(0,0,0,0.15)
- A element → padding 0.8rem 1.8rem, hover (secondary bg)
- `.active` class → left border 3px secondary

**Header** (`#main-header`):
- Fixed, top:0, width:100%, height: var(--header-h)
- z-index: 2000
- Glassmorphism: `background: var(--glass-bg)`, `backdrop-filter: blur(10px)`
- `.scrolled` → height: var(--header-h-scrolled), bg: var(--surface), shadow

**Footer** (`#main-footer`):
- Background: var(--primary), color: white
- `.footer-link` → hover: secondary rang, padding-left: 8px animation
- `.social-link` → 44x44, 12px border-radius, hover: translateY(-5px)

**Mobile menu** (`#mobile-menu-overlay`):
- Fixed, inset:0, z-index:4000
- Dark background (rgba(15,23,42,0.95)), backdrop-filter
- Transition opacity, `.open` class bilan toggle
- A elementlar → 1.5rem font, white color

**Responsive** (`max-width: 1023px`):
- body padding-top: var(--header-h-mobile)
- header height: var(--header-h-mobile)
- Header CTA hidden
- Page-header: padding 140px 0 80px

### 6.4. `components.css` (349 lines)

**.skip-link** (accessibility):
- Absolute position, `top: -1000px` → default hidden
- `:focus` → top:0 (visible on tab)

**.animate-on-scroll**:
- `opacity: 0; transform: translateY(30px);` → initial hidden
- `.fade-in` → `opacity: 1; transform: translateY(0);`
- `will-change: transform, opacity;`

**.badge**:
- `rgba(59, 130, 246, 0.1)` background, secondary text
- 50px border-radius, 0.85rem font

**.page-header**:
- Gradient overlay + linear-gradient
- `padding: 180px 0 120px`
- `font-size: clamp(2.5rem, 5vw, 4rem)` — responsiv heading

**.glass**:
- Glassmorphism utility: bg + backdrop-filter + border + shadow

**.skeleton** (loading):
- Gradient animation (90deg, 200% bg-size)
- `skeleton-pulse` keyframes (1.5s infinite)
- Dark mode alternative colors

**.lightbox**:
- Fixed, inset:0, z-index:5000
- `.open` → opacity:1, pointer-events:all
- Image: `transform: scale(0.9) → 1` (spring animation)
- `.lightbox-close`: rotate(90deg) on hover

**Search modal** (`#search-modal`):
- Fixed, inset:0, z-index:6000
- Blurred backdrop, padding-top:15vh
- `.search-modal-inner`: `transform: translateY(-20px) scale(0.97) → translateY(0) scale(1)`
- `.search-input-wrap`: flex, border-bottom
- `.search-results`: max-height:60vh, overflow-y:auto
- `.search-result-item`: flex, 40px icon, hover bg
- `.search-close`: Floating close button

**.back-to-top**:
- Fixed bottom-right, 48x48
- `opacity:0 → 1`, `transform: translateY(20px) → 0`
- Box shadow: `0 8px 24px rgba(59, 130, 246, 0.3)`

---

## 7. JavaScript arxitekturasi

### 7.1. `data.js` (518 lines)

**`const teachers`** — massiv, 18 ta o'qituvchi:

Har bir ob'ekt:
```js
{
  id: 0,                    // number, unique
  name: 'Asilbek Karimov',   // string
  subject: 'Matematika',     // string
  experience: '12 yillik professional tajriba', // string
  bio: '...',                // string (paragraph)
  education: '...',          // string
  achievements: '...',       // string
  students: 500,            // number
  email: 'a.karimov@10-maktab.uz',  // string
  consultation: 'Seshanba, 14:00 - 16:00', // string
  image: 'teacher.png',     // string (filename)
  telegram: '#',            // string (URL or #)
  instagram: '#'            // string (URL or #)
}
```

**Fanlar bo'yicha taqsimot**:
- Matematika: 3 (Asilbek, Sardor, Sanjar)
- Ingliz tili: 2 (Malika, Nigora)
- Ona tili: 2 (Gulzoda, Laylo)
- Informatika: 2 (Jasur, Sherzod)
- Tarix: 2 (Nodira, Akmal)
- Fizika: 1 (Botir)
- Biologiya: 2 (Durdona, Ziyoda)
- Kimyo: 1 (Rustam)
- Geografiya: 1 (Aziza)
- Adabiyot: 1 (Olimjon)
- Jismoniy tarbiya: 1 (Farhod)

**`const news`** — massiv, 24 ta yangilik:

Har bir ob'ekt:
```js
{
  id: 0,                    // number, unique
  title: 'Navro\'z bayrami tantanalari', // string
  category: 'Tadbir',       // string: Tadbir | E'lon | Sport | Loyihalar
  date: '25 Mart, 2024',    // string
  image: 'building.png',    // string (filename)
  content: '...',           // string (short content, ~100-200 chars)
  fullContent: '<p>...</p>', // string (HTML rich text for detail page)
  readTime: '3 daqiqa o\'qiladi' // string
}
```

**Kategoriyalar bo'yicha taqsimot**:
- Tadbir: 7 ta
- E'lon: 6 ta
- Sport: 4 ta
- Loyihalar: 5 ta

**Eksport**: `window.teachers = teachers; window.news = news;`

### 7.2. `main.js` (20 lines)

**DOMContentLoaded** — barcha modullarni ishga tushirish:
1. `initTheme()` — tema (agar mavjud bo'lsa)
2. `initNavigation()` — navigatsiya
3. `updateActiveNav()` — active link
4. `initSearch()` — qidiruv
5. `requestIdleCallback()` yoki `setTimeout()` → `initAnimations()`

**window.load** — performance metric: `performance.getEntriesByType('navigation')[0].loadEventEnd`

### 7.3. `theme.js` (32 lines)

**Konstantalar**: `THEMES = { DARK: 'dark', LIGHT: 'light' }`

**`initTheme()`** funksiyasi:
1. `#theme-toggle` tugmasini topadi
2. `localStorage.getItem('theme')` — saqlangan temani oladi (default: light)
3. `applyTheme(theme)`:
   - `document.documentElement.setAttribute('data-theme', theme)`
   - `document.documentElement.classList.toggle('dark', ...)`
4. `updateIcon(theme)`:
   - Dark → `fa-sun`, Light → `fa-moon`
5. Tugma click → toggle + localStorage

**Eksport**: `window.initTheme = initTheme`

### 7.4. `navigation.js` (93 lines)

**Konstanta**: `SCROLL_THRESHOLD = 50`

**`updateActiveNav()`**:
1. `window.location.pathname` dan oxirgi segmentni oladi
2. `.nav-link` va `.dropdown-menu a` elementlarini solishtiradi
3. Topilgan active link → `.active` class
4. Dropdown ichidagi active link → parent dropdown-toggle ga ham active

**`initDropdowns()`**:
1. `.dropdown-toggle` elementlariga click handler
2. `e.preventDefault()` — link bosilganda scroll bo'lmasligi
3. `aria-expanded` attributini toggle

**`initNavigation()`**:
1. Scroll event — `requestAnimationFrame` optimizatsiyasi bilan:
   - `window.scrollY > 50` → `#main-header.scrolled` class
2. Mobile menu:
   - `#mobile-menu-toggle` tugmasini topadi
   - `#mobile-menu-overlay` yaratadi (agar mavjud bo'lmasa)
   - Desktop navni clone qiladi, dropdown-menu classlarni olib tashlaydi
   - Toggle click → overlay `.open` class + body scroll lock
   - Overlay link click → menyuni yopadi

**Eksport**: `window.initNavigation`, `window.updateActiveNav`

### 7.5. `animations.js` (31 lines)

**Konstantalar**:
- `SCROLL_OBSERVER_CONFIG = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }`
- `BACK_TO_TOP_THRESHOLD = 500`

**`initAnimations()`**:
1. `IntersectionObserver` yaratadi:
   - `.animate-on-scroll` elementlar kuzatiladi
   - Ko'ringanda `.fade-in` class qo'shiladi
   - Keyin `unobserve()` — bir marta ishlaydi
2. `initBackToTop()`:
   - `#back-to-top` tugmasi
   - Scroll event: `window.scrollY > 500` → `.visible` class
   - Click → `window.scrollTo({ top: 0, behavior: 'smooth' })`

**Eksport**: `window.initAnimations`

### 7.6. `search.js` (151 lines)

**Module-level o'zgaruvchilar**: `searchIndex = []`, `modal`, `input`, `results`, `closeBtn`, `toggleBtn`, `searchDepth = 0`

**Konstantalar**: `MAX_RESULTS = 8`, `FOCUS_DELAY = 200`

**`loadSearchIndex(callback)`**:
- `search-index.json` ni fetch qiladi (depth-dependent path)
- `searchIndex` massiviga saqlaydi
- Callback chaqiradi

**`initSearch()`**:
1. DOM elementlarni topadi: `#search-modal`, `#search-input`, `#search-results`, `#search-close`, `#search-toggle`
2. Null guard — agar element topilmasa, early return
3. `searchDepth = Math.max(0, window.location.pathname.split('/').length - 2)` — nested path ga mos
4. Toggle click → `loadSearchIndex(openSearch)`
5. Close button → `closeSearch()`
6. Modal backdrop click → close
7. Input `input` event → `performSearch(value)`
8. Ctrl+K / Cmd+K — open/close toggle

**`openSearch()`**:
- `.open` class qo'shadi
- Input tozalaydi, focus beradi
- `body.style.overflow = 'hidden'`

**`closeSearch()`**:
- `.open` class olib tashlaydi
- `body.style.overflow = ''`

**`performSearch(query)`**:
1. Query ni lowercase qiladi, trim qiladi
2. `searchIndex` ni filter qiladi (title yoki description da qidirish)
3. Max 8 ta natija
4. `renderResults(matches)` → search-result-item elementlar
5. Hech narsa topilmasa → `renderEmpty()` → "Hech narsa topilmadi"

**Prefix mapping**: `pages/news→fa-newspaper`, `pages/teachers→fa-chalkboard-user`, etc.

**Eksport**: `window.initSearch`

### 7.7. `render.js` (20 lines)

**`h(tag, attrs, children)`** — mini virtual DOM helper:
- `document.createElement(tag)`
- Attrs mapping: `className`, `textContent`, `htmlContent`, `onclick` → maxsus ishlov
- Qolgan attrs → `setAttribute`
- Children: string → `textContent`, array → `appendChild`, element → `appendChild`

**Eksport**: `window.h` (hech qanday — faqat inline scriptlar uchun)

### 7.8. `logger.js` (12 lines)

**Konstanta**: `DEBUG = false`

**Funksiyalar**:
- `log(...args)` — faqat DEBUG=true da console.log
- `error(...args)` — doim console.error

**Eksport**: `window.log`, `window.error`

### 7.9. `error-logger.js` (139 lines)

**IIFE** — o'z-o'zidan chaqiriladigan funksiya:

**Konstantalar**: `LOG_KEY = 'maktab_log'`, `MAX_ENTRIES = 500`

**Internal funksiyalar**:
- `pad(n)` — 2 xonali padding
- `formatTS(d)` — ISO timestamp
- `getLog()` — localStorage dan massivni o'qish
- `save(entry)` — massiv boshiga qo'shish, 500 ta limit
- `makeEntry(level, msg, extra)` → `{ts, level, msg, url, session, ua, stack, data}`

**Global error capture**:
- `window.onerror` — global xatoliklarni tutadi
- `window.addEventListener('unhandledrejection')` — Promise xatoliklari
- `console.error` override — har bir error ni log'ga qo'shadi
- `console.warn` override — har bir warning ni log'ga qo'shadi

**Public API** (`window.__log`):
| Method | Description |
|---|---|
| `info(msg)` | INFO level log |
| `warn(msg)` | WARN level log |
| `error(msg)` | ERROR level log |
| `fatal(msg)` | FATAL level log |
| `getAll()` | Barcha log entries |
| `getByLevel(level)` | Filtrlangan entries |
| `getErrors()` | ERROR + FATAL entries |
| `clear()` | localStorage tozalash |
| `exportText()` | Text formatda export |
| `download()` | .log fayl sifatida yuklab olish |
| `getSessionId()` | Sessiya ID |
| `getStats()` | `{total, ERROR, WARN, INFO, FATAL}` |

---

## 8. Data qatlami

### 8.1. Ma'lumotlar oqimi

```
data.js (window.teachers, window.news)
  → Sahifalar inline script orqali o'qiy oladi
  → teacher-single.html: window.teachers.find(t => t.id == id)
  → news-single.html: window.news.find(n => n.id == id)
  → index.html: window.news.slice(0, 6) 
  → news.html: window.news (barchasi)
  → events.html: window.news.filter(n => n.category === "Tadbir")
  → teachers.html: window.teachers (barchasi)
  → RSS feed (build.js da): eval() orqali news massivi
```

### 8.2. `search-index.json` formati

```json
[
  {
    "title": "Bosh sahifa",
    "description": "10-sonli umumta'lim maktabining rasmiy veb-sayti...",
    "url": "index.html",
    "path": ""
  },
  {
    "title": "Umumiy ma'lumot",
    "description": "10-maktab haqida umumiy ma'lumot...",
    "url": "pages/about/about.html",
    "path": "about"
  }
]
```

---

## 9. SEO tizimi

### 9.1. Sitemap (`sitemap.xml`)
- 16 URL, hammasi `https://10-maktab.uz/` ostida
- Priority: 1.0 (home) — 0.1 (404)
- Valid XML format

### 9.2. Robots (`robots.txt`)
- `Allow: /`
- `Sitemap: https://10-maktab.uz/sitemap.xml`

### 9.3. Open Graph
- Har bir sahifada `og:title`, `og:description`, `og:url`, `og:image`
- Image: `https://10-maktab.uz/assets/images/building.png` (1200x630)
- `og:locale: uz_UZ`

### 9.4. Twitter Cards
- `summary_large_image` — katta preview

### 9.5. JSON-LD Schema

**WebSite** (barcha sahifalarda):
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "10-Maktab",
  "url": "https://10-maktab.uz",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://10-maktab.uz/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**School** (barcha sahifalarda):
```json
{
  "@context": "https://schema.org",
  "@type": "School",
  "name": "10-sonli umumta'lim maktabi",
  "url": "https://10-maktab.uz",
  "logo": "https://10-maktab.uz/assets/images/favicon.svg",
  "description": "...",
  "address": { "@type": "PostalAddress", "addressLocality": "Chirchiq", ... },
  "telephone": "+998712345678",
  "email": "info@10-maktab.uz",
  "sameAs": ["facebook", "instagram", "telegram"]
}
```

**BreadcrumbList** (har bir sahifada dinamik):
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Bosh sahifa", "item": "https://10-maktab.uz/" },
    { "@type": "ListItem", "position": 2, "name": "Maktab haqida" },
    { "@type": "ListItem", "position": 3, "name": "Maktab tarixi" }
  ]
}
```

### 9.6. RSS Feed (`rss.xml`)
- `build.js` dagi `generateRss()` tomonidan generatsiya qilinadi
- `data.js` dan `news` massivi olinadi
- Eng so'nggi 20 ta yangilik included
- `pubDate` — UTC format
- Atom self link bilan

### 9.7. Canonical URL
- Har bir sahifada `<link rel="canonical">`
- `index.html` → https://10-maktab.uz (without /index.html)
- Boshqalar → https://10-maktab.uz/pages/.../...

---

## 10. Asset boshqaruvi

### 10.1. Rasmlar

| Fayl | Type | Hajm | Holat |
|---|---|---|---|
| `building.png` | PNG | Real | Maktab binosi |
| `classroom.png` | PNG | Real | Sinfxona fotosurati |
| `students.png` | PNG | Real | O'quvchilar fotosurati |
| `hero.png` | PNG | Real | Hero section |
| `teacher.png` | PNG | Placeholder | O'qituvchi rasmi |
| `favicon.svg` | SVG | Vector | Favicon |
| `director.svg` | SVG | Placeholder | Direktor rasmi |
| `deputy1.svg` | SVG | Placeholder | O'rinbosar 1 |
| `deputy2.svg` | SVG | Placeholder | O'rinbosar 2 |
| `deputy3.svg` | SVG | Placeholder | O'rinbosar 3 |
| `library.svg` | SVG | Placeholder | Kutubxona rasmi |

### 10.2. SVG favicon
- `favicon.svg` — vector favicon
- `manifest.json` da `"purpose": "any maskable"`

---

## 11. PWA

### 11.1. `manifest.json`

```json
{
  "name": "10-sonli umumta'lim maktabi",
  "short_name": "10-Maktab",
  "description": "10-sonli umumta'lim maktabi - Kelajakni biz bilan birga quring",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f8fafc",
  "theme_color": "#0f172a",
  "icons": [{ "src": "/assets/images/favicon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any maskable" }]
}
```

### 11.2. `sw.js` (Service Worker)

**Cache name**: `'10-maktab-v1'`

**Pre-cached URLs** (install event):
```js
const URLS = [
  '/', '/index.html',
  '/assets/css/main.css',
  '/assets/js/main.js', '/assets/js/data.js',
  '/assets/js/theme.js', '/assets/js/navigation.js',
  '/assets/js/animations.js', '/assets/js/logger.js'
];
```

**Fetch strategiya**: `Cache-first with network update`
1. `caches.match(request)` — cached response ni qaytaradi
2. `fetch(request)` — tarmoqdan yangi versiyani oladi
3. Yangi response cache ga qo'shiladi
4. `stale-while-revalidate` pattern

**Activate**: Eski cachelarni o'chiradi

---

## 12. Bug tracking

`bugs.json` da 15 ta bug qayd etilgan, hammasi `fixed` statusda:

| ID | Title | Severity | Fayl |
|---|---|---|---|
| BUG-001 | Undefined variable 'color' in index.html | Critical | `index.html:162` |
| BUG-002 | search.js 'depth' variable out of scope | High | `assets/js/search.js` |
| BUG-003 | ES modules blocked on file:// protocol | Critical | `components/scripts.html` |
| BUG-004 | search.js missing null guard for toggleBtn | Medium | `assets/js/search.js:12` |
| BUG-005 | search.js no null guard for closeBtn | Medium | `assets/js/search.js:22` |
| BUG-006 | teacher-single.html missing element guards | Medium | `pages/teachers/teacher-single.html` |
| BUG-007 | news-single.html missing element guards | Medium | `pages/news/news-single.html` |
| BUG-008 | CSS 992px vs Tailwind lg: 1024px (31px dead zone) | Medium | `assets/css/layout.css:183` |
| BUG-009 | scrolled: Tailwind variant not registered | Low | `components/header.html:2` |
| BUG-010 | CTA button hidden on tablet (768-1023px) | Low | `components/header.html:53` |
| BUG-011 | Index page badge -right-10 horizontal overflow | Medium | `index.html:87` |
| BUG-012 | About page badge -left-10 + text-nowrap overflow | Medium | `pages/about/about.html:75-78` |
| BUG-013 | About page image rotate-2 + h-[650px] overflow | Medium | `pages/about/about.html:67` |
| BUG-014 | Teachers filter overflow-x-auto with flex-wrap | Low | `pages/teachers/teachers.html:26` |
| BUG-015 | Schedule swipe hint breakpoint mismatch | Low | `pages/academics/schedule.html:95` |

---

## 13. Error handling

### 13.1. Build-time error handling

**Tailwind build fallback**:
- Agar `npx tailwindcss` muvaffaqiyatsiz bo'lsa, `main.css` asl holicha `dist/assets/css/` ga ko'chiriladi
- Xato loglanadi

**RSS generation**:
- Try/catch bilan o'ralgan
- Xato bo'lsa, faqat loglanadi, build davom etadi

**error.log generation**:
- `scripts/generate-error-log.js` mavjudligi tekshiriladi
- Mavjud bo'lmasa, WARN loglanadi, build davom etadi

### 13.2. Runtime error handling

**Error-logger.js**:
- `window.onerror` — barcha unhandled xatoliklarni tutadi
- `unhandledrejection` — Promise xatoliklari
- `console.error/warn` override — har bir xatoni logga qo'shadi
- localStorage da 500 tagacha log entry saqlanadi

**Null guards**:
- `search.js` da `if (!modal || !input || !results || !toggleBtn) return`
- `teacher-single.html` da har bir `getElementById` uchun null check
- `news-single.html` da try/catch + null check
- `main.js` da `if (window.initTheme) window.initTheme()`
- `theme.js` da `if (!btn) return`
- `animations.js` da `if (!btn) return`
- `navigation.js` da `if (!overlay && toggle)` guard

---

## 14. Accessibility

### 14.1. Skip-link
- `<a href="#main-content" class="skip-link">Asosiy kontentga o'tish</a>`
- `head.html` da body ochilgandan so'ng darhol
- CSS: `position: absolute; top: -1000px` → `:focus` → `top: 0`
- Barcha `<main>` teglari avtomatik `id="main-content"` oladi (build.js)

### 14.2. ARIA attributlari
- `aria-label` — nav, search toggle, theme toggle, mobile menu, modal, breadcrumb
- `aria-expanded` — dropdown toggle
- `aria-haspopup="true"` — dropdown
- `role="menu"`, `role="menuitem"` — dropdown items
- `role="dialog"`, `aria-modal="true"` — search modal

### 14.3. Keyboard
- Search: Ctrl+K / Cmd+K
- Search: Escape to close
- Dropdown: click toggle

### 14.4. prefers-reduced-motion
- CSS: `html { scroll-behavior: smooth; }` → disabled
- `.animate-on-scroll` → `opacity: 1; transform: none`
- `*, *::before, *::after` → `animation-duration: 0.01ms !important`

### 14.5. Semantic HTML
- `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`
- `<h1>` → `<h4>` hierarchy
- `<ul>` / `<li>` for lists
- `loading="lazy"` on images
- `fetchpriority="high"` on hero image

---

## 15. Dizayn tizimi

### 15.1. Ranglar

| Token | Light | Dark | Qo'llanish |
|---|---|---|---|
| `--primary` | `#0f172a` | `#f8fafc` | Asosiy matn, header bg |
| `--primary-light` | `#1e293b` | `#e2e8f0` | Yengil primary |
| `--secondary` | `#3b82f6` | `#3b82f6` | Aksent, linklar, CTA |
| `--secondary-hover` | `#2563eb` | `#2563eb` | Hover holati |
| `--accent` | `#f59e0b` | `#f59e0b` | Qo'shimcha aksent |
| `--background` | `#f8fafc` | `#0f172a` | Sahifa foni |
| `--surface` | `#ffffff` | `#1e293b` | Kartalar foni |
| `--text-main` | `#0f172a` | `#f8fafc` | Asosiy matn |
| `--text-muted` | `#64748b` | `#94a3b8` | Yordamchi matn |

### 15.2. Tipografiya

- **Font**: `Outfit` (Google Fonts)
- **Weight**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Body**: 1rem (16px), line-height 1.6
- **Headings**: `font-extrabold` (800), responsive sizing
- **Caps**: `uppercase tracking-widest` (keng oraliqli kapital)

### 15.3. Border-radius patternlari

| Qiymat | Qo'llanish |
|---|---|
| `rounded-full` | Badge, tugmalar |
| `rounded-2xl` (16px) | Input, ikonka container |
| `rounded-2xl` / `rounded-[2rem]` (32px) | Kartalar |
| `rounded-[2.5rem]` (40px) | Katta kartalar |
| `rounded-[3rem]` (48px) | Eng katta kartalar |
| `rounded-[4rem]` (64px) | Maxsus kartalar |

### 15.4. Shadow patternlari

| Class | Qo'llanish |
|---|---|
| `shadow-sm` | Kichik elementlar |
| `shadow-lg` | Oddiy kartalar |
| `shadow-xl` | Murakkab kartalar |
| `shadow-2xl` | Hover holat |
| `shadow-[0_20px_50px_-15px_rgba(...)]` | Custom card shadow |

### 15.5. Spacing

| Container | Qiymat |
|---|---|
| Max container | 1240px |
| Content max | 900px |
| Padding X | 1.5rem (px-6) |
| Section padding | 6rem / 8rem (py-24 / py-32) |
| Section padding mobile | 4.5rem |

### 15.6. Gradientlar

- Hero overlay: `linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75))`
- Page header: `linear-gradient(135deg, var(--primary) 0%, #1e3a5f 100%)`
- Radial: `radial-gradient(circle_at_center, from-secondary/20 via-transparent to-transparent)`

---

## 16. Barcha CSS klasslari ro'yxati

### Tailwind utility klasslari (eng ko'p ishlatiladigan)
- **Container**: `container`, `mx-auto`, `max-w-[1240px]`, `max-w-[900px]`, `max-w-[640px]`
- **Grid**: `grid`, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `gap-4`, `gap-8`, `gap-10`, `gap-12`, `gap-16`, `gap-20`, `gap-24`
- **Flex**: `flex`, `flex-row`, `flex-col`, `items-center`, `items-start`, `items-end`, `justify-center`, `justify-between`, `flex-wrap`, `flex-shrink-0`
- **Responsive**: `sm:*`, `md:*`, `lg:*`, `xl:*`
- **Spacing**: `p-*`, `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `m-*`, `mx-*`, `my-*`, `space-y-*`, `space-x-*`, `gap-*`
- **Typography**: `text-*`, `font-*`, `tracking-*`, `leading-*`, `opacity-*`
- **Color**: `text-*`, `bg-*`, `border-*`, `from-*`, `via-*`, `to-*`
- **Position**: `relative`, `absolute`, `fixed`, `sticky`, `inset-0`, `top-*`, `left-*`, `right-*`, `bottom-*`, `z-*`
- **Size**: `w-*`, `h-*`, `min-h-*`, `max-w-*`, `aspect-*`
- **Effects**: `shadow-*`, `backdrop-blur-*`, `blur-*`, `opacity-*`, `grayscale`
- **Transitions**: `transition-all`, `transition-transform`, `transition-colors`, `transition-opacity`, `duration-*`, `delay-*`
- **Transform**: `hover:scale-*`, `hover:-translate-y-*`, `group-hover:*`, `rotate-*`
- **Display**: `hidden`, `block`, `flex`, `inline-block`, `inline-flex`

### Custom CSS klasslari

```
.skip-link            → Accessibility skip navigation
.animate-on-scroll    → Scroll animatsiya base
.fade-in              → Animatsiya trigger
.badge                → Kategoriya badge
.page-header          → Sahifa header section
.glass                → Glassmorphism utility
.skeleton             → Loading skeleton
.lightbox             → Rasm lightbox
.lightbox.open        → Lightbox ochiq
.lightbox-close       → Lightbox yopish
.lightbox-caption     → Lightbox caption

.nav-link             → Navigatsiya linki
.nav-link::after      → Hover indicator
.nav-link.active      → Active link
.dropdown-menu        → Dropdown menyu
.dropdown-toggle      → Dropdown trigger
.dropdown-toggle.active → Active dropdown

.search-modal         → Qidiruv modal
.search-modal.open    → Modal ochiq
.search-modal-inner   → Modal content
.search-input-wrap    → Input wrapper
.search-results       → Natijalar
.search-result-item   → Har bir natija
.search-empty         → Hech narsa topilmadi
.search-close         → Yopish tugmasi

.back-to-top          → Tepaga chiqish
.back-to-top.visible  → Ko'rinadigan

#main-header          → Header
#main-header.scrolled → Scroll holati
#main-footer          → Footer
.footer-link          → Footer linki
.social-link          → Ijtimoiy tarmoq linki

#mobile-menu-overlay  → Mobil menu
#mobile-menu-overlay.open → Mobil menu ochiq

.filter-btn           → Filter tugmasi
.filter-btn.active    → Active filter

.teacher-card         → O'qituvchi kartasi
.skeleton             → Yuklanish animatsiyasi

.social-icon          → Footer social ikonka
```

---

## 17. Barcha JavaScript funksiyalari ro'yxati

### `data.js`
- Hech qanday funksiya yo'q (faqat global o'zgaruvchilar)

### `main.js`
- `document.addEventListener('DOMContentLoaded', ...)` — init barcha modullar
- `window.addEventListener('load', ...)` — performance metric

### `theme.js`
- `initTheme()` — temani ishga tushirish
- `applyTheme(theme)` — HTML attribut + class
- `updateIcon(theme)` — ikonka almashtirish

### `navigation.js`
- `updateActiveNav()` — active link belgilash
- `initDropdowns()` — dropdown click handler
- `initNavigation()` — header scroll + mobil menu

### `animations.js`
- `initAnimations()` — IntersectionObserver + back-to-top
- `initBackToTop()` — back-to-top tugmasi

### `search.js`
- `loadSearchIndex(callback)` — search-index.json fetch
- `initSearch()` — qidiruv tizimini ishga tushirish
- `openSearch()` — modal ochish
- `closeSearch()` — modal yopish
- `performSearch(query)` — qidirish
- `renderResults(matches)` — natijalarni ko'rsatish
- `renderEmpty()` — "hech narsa topilmadi"
- `getIconClass(url)` — ikonka prefix mapping
- `showEmptyResult()` — empty state

### `render.js`
- `h(tag, attrs, children)` — virtual DOM helper

### `logger.js`
- `log(...args)` — debug log
- `error(...args)` — error log

### `error-logger.js`
- `pad(n)` — padding
- `formatTS(d)` — timestamp formatting
- `getLog()` — localStorage dan o'qish
- `save(entry)` — localStorage ga yozish
- `makeEntry(level, msg, extra)` — entry yaratish
- `log(level, msg, extra)` — log qo'shish
- `window.__log.info/warn/error/fatal/getAll/getByLevel/getErrors/clear/exportText/download/getSessionId/getStats`

### Sahifalardagi inline funksiyalar
- `index.html`: news dynamic render (anonymous, DOMContentLoaded)
- `teachers.html`: `renderTeachers()`, `filterTeachers()` (anonymous, DOMContentLoaded)
- `teacher-single.html`: teacher profile render (anonymous)
- `news-single.html`: news detail render (anonymous)
- `gallery.html`: lightbox toggle (anonymous)

---

## 18. Ishlab chiqishda tuzatilgan xatolar

### BUG-001: `index.html` undefined 'color' variable
- **Holat**: Yangiliklar section inline script da `color` o'zgaruvchisi `style.bg` o'rniga ishlatilgan
- **Natija**: ReferenceError, dynamic render buzilgan
- **Fix**: `color` → `style.bg`

### BUG-002: `search.js` 'depth' variable scope muammosi
- **Holat**: `var depth` `initSearch()` ichida e'lon qilingan, `performSearch()` da ishlatilgan
- **Natija**: undefined reference runtime error
- **Fix**: `searchDepth` modul-level ga ko'chirilgan

### BUG-003: ES modules file:// protocol da bloklangan
- **Holat**: Barcha scriptlar `type="module"` bilan ishlatilgan
- **Natija**: Browser CORS tufayli file:// da module scriptlarni bloklaydi
- **Fix**: Barcha scriptlar `type="module"` → `<script defer>`, import/export → window globals

### BUG-004: search.js null guard missing for toggleBtn
- **Holat**: `initSearch()` `modal/input/results` ni tekshirgan, `toggleBtn` ni tekshirmagan
- **Natija**: Missing element → addEventListener crash
- **Fix**: `!toggleBtn` guard qo'shilgan

### BUG-005: search.js no null guard for closeBtn
- **Holat**: `closeBtn.addEventListener` null check siz
- **Natija**: Missing element → crash
- **Fix**: `if (closeBtn)` guard

### BUG-006: teacher-single.html element guards
- **Holat**: `getElementById` null tekshiruvi siz
- **Natija**: TypeError cascade
- **Fix**: Har bir element uchun null check

### BUG-007: news-single.html element guards
- **Holat**: Xuddi shu muammo
- **Fix**: Null checks + try/catch

### BUG-008: CSS breakpoint gap (992px vs 1024px)
- **Holat**: CSS `max-width: 992px` ishlatilgan, Tailwind `lg: 1024px`
- **Natija**: 993-1023px da responsive buzilgan
- **Fix**: `992px` → `1023px`

### BUG-009: Tailwind 'scrolled:' variant registered emas
- **Holat**: Header da `scrolled:h-[70px]` etc ishlatilgan
- **Natija**: JIT ignore qiladi, dead code
- **Fix**: Tailwind klasslari olib tashlangan (CSS `#main-header.scrolled` handles)

### BUG-010: CTA button tabletda yashirin
- **Holat**: `hidden lg:inline-block` → 768-1023px da CTA yo'q
- **Fix**: `hidden md:inline-block`

### BUG-011: Index page badge horizontal overflow
- **Holat**: `-right-10` → 2.5rem tashqariga chiqib ketadi
- **Fix**: `-right-10` → `right-0`, `overflow-hidden` parent

### BUG-012: About page badge overflow
- **Holat**: `-left-10` + `text-nowrap` → kichik ekranda chetga chiqib ketadi
- **Fix**: `-left-10` → `left-0`, `text-nowrap` removed

### BUG-013: About page image overflow
- **Holat**: `h-[650px]` + `rotate-2` → mobile da to'liq chiqib ketadi
- **Fix**: Responsive height `h-[300px] md:h-[450px] lg:h-[650px]`, `rotate-2` → `rotate-1`

### BUG-014: Teachers filter redundant overflow
- **Holat**: `overflow-x-auto` + `flex-wrap` → keraksiz
- **Fix**: `overflow-x-auto` removed

### BUG-015: Schedule swipe hint mismatch
- **Holat**: Swipe hint `lg:hidden` (1024px) da yashirin, lekin table 1000px da scroll kerak
- **Natija**: 1000-1023px da hint ko'rinmaydi, scroll kerak
- **Fix**: `lg:hidden` → `xl:hidden`
