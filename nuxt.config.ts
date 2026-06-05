export default defineNuxtConfig({
  compatibilityDate: '2026-06-04',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      htmlAttrs: {
        lang: 'uz',
      },
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'uz_UZ' },
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
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: '10-sonli umumta\'lim maktabi',
            url: 'https://10-maktab.uz',
            logo: 'https://10-maktab.uz/assets/images/favicon.svg',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Chirchiq',
              addressRegion: 'Toshkent viloyati',
              addressCountry: 'UZ',
            },
            telephone: '+998 (71) 234-56-78',
            email: 'info@10-maktab.uz',
          }),
        },
      ],
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/base.css', '~/assets/css/layout.css', '~/assets/css/components.css'],
  modules: ['@nuxtjs/tailwindcss'],
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
