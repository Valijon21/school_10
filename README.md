# 10-Maktab

> Chirchiq shahridagi 10-sonli umumta'lim maktabining rasmiy veb-sayti

**Tech stack:** Nuxt 4 · Vue 3 · Tailwind CSS · TypeScript · Vite 7

---

## Loyiha haqida

10-Maktab — zamonaviy veb texnologiyalar asosida qurilgan, maktabning rasmiy axborot portali. Sayt orqali o'quvchilar, ota-onalar va keng jamoatchilik maktab hayoti, yangiliklar, tadbirlar, o'qituvchilar va qabul jarayonlari haqida batafsil ma'lumot olishi mumkin.

**Asosiy imkoniyatlar:**

- 17+ statik va dinamik sahifa
- O'qituvchilar va yangiliklar ma'lumotlar bazasi (composable orqali)
- Dark mode (light/dark tema)
- Mobil uchun moslashuvchan dizayn
- Sayt bo'ylab qidiruv (Ctrl+K)
- Scroll animatsiyalar (IntersectionObserver)

---

## Ishga tushirish

```bash
# Bog'liqliklarni o'rnatish
npm install

# Development server (localhost:3000)
npm run dev

# Production build
npm run build

# Production buildni lokal ko'rish
npm run preview
```

---

## Loyiha tuzilishi

```
.
├── pages/               # Sahifalar (17+ sahifa)
│   ├── about/           # Maktab haqida
│   ├── teachers/        # O'qituvchilar
│   ├── news/            # Yangiliklar va tadbirlar
│   ├── academics/       # Dars jadvali
│   ├── admission/       # Qabul
│   ├── contact/         # Bog'lanish
│   ├── gallery/         # Galereya
│   └── [...slug].vue    # 404 xato sahifasi
├── components/          # Qayta ishlatiladigan Vue komponentlar
├── composables/         # Vue 3 composable funksiyalar
│   ├── useTheme.ts      # Dark/light mode
│   ├── useNavigation.ts # Navigatsiya va scroll effektlar
│   ├── useAnimations.ts # Scroll animatsiyalar
│   ├── useSearch.ts     # Sayt qidiruvi
│   └── useData.ts       # Ma'lumotlar (teachers, news)
├── layouts/             # Sahifa layouti (default.vue)
├── assets/              # CSS, rasmlar, shriftlar
│   ├── css/             # Tailwind + custom CSS
│   └── images/          # Rasm va ikonkalar
├── public/              # Statik fayllar
├── nuxt.config.ts       # Nuxt konfiguratsiyasi
└── package.json         # Bog'liqliklar va scriptlar
```

---

## Texnologiyalar

| Texnologiya | Versiya | Vazifasi |
|---|---|---|
| Nuxt | ^4.4.7 | Vue framework (SSR/SSG) |
| Vue | ^3.5.35 | Frontend framework |
| Vite | ^7.3.5 | Build tool / HMR |
| Tailwind CSS | ^3.4 | Utility-first CSS |
| TypeScript | — | Xavfsiz tiplash |
| Nitro | ^2.13.4 | Server engine |

---

## Sahifalar ro'yxati

| Route | Sahifa | Tavsif |
|---|---|---|
| `/` | Bosh sahifa | Maktab haqida qisqacha |
| `/about/about` | Umumiy ma'lumot | Maktab tarixi va buguni |
| `/about/history` | Maktab tarixi | To'liq tarixiy ma'lumot |
| `/about/mission` | Maqsadimiz | Maktabning vazifa va maqsadlari |
| `/about/management` | Rahbariyat | Direktor va direktor o'rinbosarlari |
| `/teachers/teachers` | O'qituvchilar | 18 nafar o'qituvchi profili |
| `/teachers/former-teachers` | Faxriy ustozlar | Nafaqadagi o'qituvchilar |
| `/teachers/teacher-single/:id` | O'qituvchi profili | Batafsil ma'lumot |
| `/academics/schedule` | Dars jadvali | Haftalik dars jadvali |
| `/news/news` | Yangiliklar | 24 ta yangilik va maqolalar |
| `/news/news-single/:id` | Yangilik batafsil | To'liq yangilik matni |
| `/news/events` | Tadbirlar | Maktab tadbirlari kalendari |
| `/admission/admission` | Qabul | Qabul shartlari va talablar |
| `/contact/contact` | Bog'lanish | Aloqa ma'lumotlari va forma |
| `/gallery/gallery` | Galereya | Maktab fotosuratlari |
| `/*` | 404 xato | Noto'g'ri sahifa |

---

## Mavjud ma'lumotlar

- **O'qituvchilar:** 18 nafar — ism, fan, tajriba, bio, ma'lumot, yutuqlar
- **Yangiliklar:** 24 ta — 5 kategoriyada (Tadbir, E'lon, Sport, Loyihalar)
- Barcha ma'lumotlar `composables/useData.ts` orqali boshqariladi

---

## Aloqa

- **Sayt:** [10-maktab.uz](https://10-maktab.uz)
- **Email:** info@10-maktab.uz
- **Telefon:** +998 (77) 342-33-21
- **Manzil:** Namangan viloyati, Pop tumani Sang shaharchasi

---

## Litsenziya

Barcha huquqlar himoyalangan. 10-sonli Chirchiq umumta'lim maktabi.
