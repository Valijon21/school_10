export default defineNuxtConfig({
  compatibilityDate: '2026-06-04',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: '10-MAKTAB' },
        { property: 'og:image', content: 'https://10-maktab.uz/assets/images/building.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://10-maktab.uz/assets/images/building.png' },
        { name: 'theme-color', content: '#0f172a' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/images/favicon.svg' },
        { rel: 'manifest', href: '/manifest.json' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
      ],
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/base.css', '~/assets/css/layout.css', '~/assets/css/components.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/eslint'],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'uz',
    locales: [
      { code: 'uz', name: 'O\'zbek',   file: 'uz.json', iso: 'uz-UZ' },
      { code: 'ru', name: 'Русский',   file: 'ru.json', iso: 'ru-RU' },
      { code: 'en', name: 'English',   file: 'en.json', iso: 'en-US' },
    ],
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
    bundle: {
      optimizeTranslationDirective: true,
    },
  },
  routeRules: {
    '/**': {
      headers: {
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'",
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: { DEFAULT: '#0f172a', light: '#1e293b' },
            secondary: { DEFAULT: '#3b82f6', hover: '#2563eb' },
            accent: '#f59e0b',
            background: '#f8fafc',
            surface: '#ffffff',
          },
          fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
          },
          maxWidth: {
            container: '1240px',
          },
        },
      },
    },
  },
  components: true,
})