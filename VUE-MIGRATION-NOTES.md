# Vue.js migratsiya tahlili

## Afzalliklari

| Nima | Tushuntirish |
|------|-------------|
| **Komponent tizimi** | `header`, `footer`, `teacher-card`, `news-card` — alohida `.vue` fayllar, props bilan boshqariladi |
| **Router** | 17 sahifa uchun `vue-router` — URL ga qarab komponent renderlanadi |
| **State (Pinia)** | Backenddan kelgan data (news, teachers) global store da, har safar fetch qilish shart emas |
| **Reactivity** | `v-for`, `v-if`, `:class` — DOM ni qo'lda yasash (`createElement`, `appendChild`) yo'qoladi |
| **API bilan ishlash** | `fetch` → Pinia action, loading/error state bir joyda |
| **Code splitting** | Har bir sahifa alohida chunk, faqat kerakli JS yuklanadi |
| **Developer UX** | `vite + vue` — HMR (hot reload), tez build, TypeScript support |
| **Maintainability** | 5 yildan keyin ham Vue kodini tushunish oson, placeholder sistemaga qaraganda |

## Kamchiliklari

| Nima | Tushuntirish |
|------|-------------|
| **SSR kerak** | Vue SPA da SEO uchun `Nuxt` yoki `vue-ssr` qilmasangiz, Google blank sahifa ko'radi |
| **O'rganish vaqti** | Sizga ham, keyingi dasturchiga ham Vue o'rganish kerak |
| **Bundle size** | Hozirgi HTML = 0 KB JS. Vue runtime ~30 KB + komponentlar |
| **Murakkablik** | Build pipeline o'zgaradi (Vite), deploy config o'zgaradi |
| **Hozirgi kod qayta ishlatilmaydi** | Barcha `.html` fayllarni `.vue` ga qayta yozish kerak (17 sahifa) |

## Eng muhimi

Vue SPA + backend API qilinsa, **Nuxt** bilan qilish kerak (SSR yoki SSG). Aks holda:
- SEO o'ladi
- Meta taglar (OG, JSON-LD) ishlamaydi
- `site.com/yangiliklar/1` URL lari ishlamaydi

**Xulosa:** Agar backend + dynamic data bo'lsa, Vue ga o'tish to'g'ri, lekin **Nuxt** bilan.
