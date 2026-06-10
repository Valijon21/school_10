<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'

const { t, locale } = useI18n()
const route = useRoute()
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: { lang: locale },
  titleTemplate: (title) => (title ? `${title} | 10-MAKTAB` : '10-MAKTAB'),
  meta: [
    { property: 'og:locale', content: i18nHead.value.htmlAttrs?.lang ?? 'uz_UZ' },
  ],
})

const localeMeta: Record<string, string> = { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' }
watch(locale, (v) => {
  useHead({
    htmlAttrs: { lang: v },
    meta: [{ property: 'og:locale', content: localeMeta[v] ?? 'uz_UZ' }],
  })
})

onMounted(() => {
  useTheme().init()
  useNavigation().init()
  useSearch().init()
  useAnimations().init()
})

watch(() => route.path, () => {
  nextTick(() => {
    useAnimations().init()
    useNavigation().updateActiveNav()
  })
})
</script>

<template>
  <div>
    <a href="#main-content" class="skip-link">{{ t('actions.skipToContent') }}</a>

    <header
id="main-header"
      class="fixed top-0 left-0 w-full z-[2000] transition-all duration-400 flex items-center bg-[var(--glass-bg)] backdrop-blur-[10px] border-b border-[var(--glass-border)]">
      <div class="container mx-auto px-6 flex items-center justify-between h-full max-w-[1240px]">
        <NuxtLink
to="/"
          class="flex items-center gap-1 text-[1.8rem] font-extrabold text-primary whitespace-nowrap lg:text-[1.8rem] md:text-[1.5rem] text-[1.3rem]">
          <span class="logo-text">10-</span><span class="text-secondary">MAKTAB</span>
        </NuxtLink>

        <nav class="hidden lg:flex items-center h-full" :aria-label="t('nav.about')">
          <ul class="flex items-center gap-8 h-full">
            <li class="h-full flex items-center relative group">
              <NuxtLink to="/" class="nav-link">{{ t('nav.home') }}</NuxtLink>
            </li>
            <li class="h-full flex items-center relative group dropdown">
              <a href="#" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                {{ t('nav.about') }} <i aria-hidden="true" class="fas fa-chevron-down text-[0.8rem]"/>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><NuxtLink to="/about/about" role="menuitem">{{ t('nav.aboutGeneral') }}</NuxtLink></li>
                <li><NuxtLink to="/about/history" role="menuitem">{{ t('nav.aboutHistory') }}</NuxtLink></li>
                <li><NuxtLink to="/about/mission" role="menuitem">{{ t('nav.aboutMission') }}</NuxtLink></li>
                <li><NuxtLink to="/about/management" role="menuitem">{{ t('nav.aboutManagement') }}</NuxtLink></li>
              </ul>
            </li>
            <li class="h-full flex items-center relative group dropdown">
              <a href="#" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                {{ t('nav.teachers') }} <i aria-hidden="true" class="fas fa-chevron-down text-[0.8rem]"/>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><NuxtLink to="/teachers/teachers" role="menuitem">{{ t('nav.allTeachers') }}</NuxtLink></li>
                <li><NuxtLink to="/teachers/former-teachers" role="menuitem">{{ t('nav.formerTeachers') }}</NuxtLink></li>
              </ul>
            </li>
            <li class="h-full flex items-center relative group">
              <NuxtLink to="/academics/schedule" class="nav-link">{{ t('nav.schedule') }}</NuxtLink>
            </li>
            <li class="h-full flex items-center relative group">
              <NuxtLink to="/news/news" class="nav-link">{{ t('nav.news') }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-2 md:gap-4">
          <button
id="search-toggle" :aria-label="t('actions.search')"
            class="p-2 w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-secondary hover:bg-slate-50 transition-all">
            <i aria-hidden="true" class="fas fa-search"/>
          </button>
          <button
id="theme-toggle" :aria-label="t('actions.toggleTheme')"
            class="p-2 w-10 h-10 flex items-center justify-center rounded-xl border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
            <i aria-hidden="true" class="fas fa-moon"/>
          </button>
          <LanguageSwitcher />
          <NuxtLink
to="/admission/admission"
            class="hidden md:inline-block px-6 md:px-8 py-3 bg-secondary text-white font-bold rounded-full shadow-[0_4px_14px_rgba(59,130,246,0.3)] hover:bg-blue-600 hover:-translate-y-1 transition-all text-sm md:text-base">
            {{ t('nav.admission') }}
          </NuxtLink>
          <button id="mobile-menu-toggle" class="lg:hidden flex flex-col justify-between w-8 h-[22px] z-[5000]" :aria-label="t('actions.mobileMenu')">
            <span class="w-full h-[3px] bg-primary rounded-full transition-all"/>
            <span class="w-full h-[3px] bg-primary rounded-full transition-all"/>
            <span class="w-full h-[3px] bg-primary rounded-full transition-all"/>
          </button>
        </div>
      </div>

    </header>

    <Teleport to="body">
      <div id="search-modal" class="search-modal" role="dialog" aria-modal="true" :aria-label="t('actions.search')">
        <button id="search-close" class="search-close" :aria-label="t('actions.close')"><i aria-hidden="true" class="fas fa-times"/></button>
        <div class="search-modal-inner">
          <div class="search-input-wrap">
            <i aria-hidden="true" class="fas fa-search"/>
            <input id="search-input" type="text" :placeholder="t('actions.searchPlaceholder')" autocomplete="off">
            <span class="text-xs text-slate-400 font-medium hidden md:inline">/</span>
          </div>
          <div id="search-results" class="search-results"/>
        </div>
      </div>
    </Teleport>

    <slot />

    <footer id="main-footer" class="bg-primary text-white py-16 md:py-24 mt-20 md:mt-32">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-16">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
            <NuxtLink to="/" class="flex items-center gap-1 text-[1.8rem] font-extrabold text-white mb-8">
              <span class="text-[1.8rem]">10-</span><span class="text-secondary">MAKTAB</span>
            </NuxtLink>
            <p class="text-slate-400 text-sm mb-8 leading-relaxed">{{ t('site.tagline') }}</p>
              <SocialButtons variant="footer" :platforms="[{ icon: 'fab fa-facebook-f', url: 'https://facebook.com/10maktab', label: 'Facebook' }, { icon: 'fab fa-instagram', url: 'https://instagram.com/10maktab', label: 'Instagram' }, { icon: 'fab fa-telegram-plane', url: 'https://t.me/onmaktab', label: 'Telegram' }]" />
          </div>
          <div>
            <h4 class="text-white font-bold text-lg mb-8">{{ t('footer.pages') }}</h4>
            <ul class="space-y-5">
              <li><NuxtLink to="/" class="footer-link">{{ t('nav.home') }}</NuxtLink></li>
              <li><NuxtLink to="/about/about" class="footer-link">{{ t('nav.about') }}</NuxtLink></li>
              <li><NuxtLink to="/teachers/teachers" class="footer-link">{{ t('nav.teachers') }}</NuxtLink></li>
              <li><NuxtLink to="/news/news" class="footer-link">{{ t('nav.news') }}</NuxtLink></li>
            </ul>
          </div>
          <div class="text-center md:text-left">
            <h4 class="text-white text-xl font-bold mb-8">{{ t('footer.academic') }}</h4>
            <ul class="space-y-4">
              <li><NuxtLink to="/academics/schedule" class="footer-link">{{ t('nav.schedule') }}</NuxtLink></li>
              <li><NuxtLink to="/news/news" class="footer-link">{{ t('nav.news') }}</NuxtLink></li>
              <li><NuxtLink to="/about/management" class="footer-link">{{ t('nav.aboutManagement') }}</NuxtLink></li>
              <li><NuxtLink to="/about/history" class="footer-link">{{ t('nav.aboutHistory') }}</NuxtLink></li>
            </ul>
          </div>
          <div class="text-center md:text-left">
            <h4 class="text-white text-xl font-bold mb-8">{{ t('footer.contact') }}</h4>
              <ul class="space-y-4">
                <ContactBlock variant="footer" icon="fa-map-marker-alt" :lines="[t('footer.address')]" />
                <ContactBlock variant="footer" icon="fa-phone-alt" :lines="['+998 (71) 234-56-78']" />
                <ContactBlock variant="footer" icon="fa-envelope" :lines="['info@10-maktab.uz']" />
              </ul>
          </div>
        </div>
        <div class="border-t border-white/5 pt-12 text-center text-slate-500 text-sm">
          <p>{{ t('footer.copyright') }}</p>
        </div>
      </div>
      <button id="back-to-top" class="back-to-top" :aria-label="t('actions.backToTop')">
        <i aria-hidden="true" class="fas fa-arrow-up"/>
      </button>
    </footer>
  </div>
</template>
