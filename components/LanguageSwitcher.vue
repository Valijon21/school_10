<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const open = ref(false)
const switcher = ref<HTMLElement | null>(null)

interface Locale { code: string; name: string; iso: string; file: string }
const current = computed(() => {
  const found = (locales.value as Locale[]).find(l => l.code === locale.value)
  return found ?? { code: locale.value, name: locale.value.toUpperCase(), iso: '', file: '' }
})

const flags: Record<string, string> = { uz: '🇺🇿', ru: '🇷🇺', en: '🇬🇧' }

const close = () => (open.value = false)
const pick = (code: string) => { setLocale(code as 'uz' | 'ru' | 'en'); close() }

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (switcher.value && !switcher.value.contains(e.target as Node)) close()
  })
})
</script>

<template>
  <div ref="switcher" class="lang-switcher">
    <button
      type="button"
      class="lang-trigger"
      :aria-expanded="open"
      :aria-label="current.code.toUpperCase()"
      @click="open = !open"
    >
      <span class="lang-flag">{{ flags[current.code] || '🌐' }}</span>
      <span class="lang-code">{{ current.code.toUpperCase() }}</span>
      <i class="fas fa-chevron-down lang-chevron" :class="{ 'is-open': open }" />
    </button>

    <transition name="lang-fade">
      <ul v-if="open" class="lang-menu" role="menu">
        <li
          v-for="l in (locales as unknown as Locale[])"
          :key="l.code"
          role="menuitem"
          :class="['lang-item', { 'is-active': l.code === locale }]"
          @click="pick(l.code)"
        >
          <span class="lang-flag">{{ flags[l.code] || '🌐' }}</span>
          <span class="lang-name">{{ l.name }}</span>
          <i v-if="l.code === locale" class="fas fa-check lang-check" />
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.lang-switcher { position: relative; }

.lang-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.75rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: 2px solid transparent;
  color: rgb(148 163 184);
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s ease;
  background: transparent;
}
.lang-trigger:hover {
  color: rgb(59 130 246);
  background: rgb(248 250 252);
}
:global(.dark) .lang-trigger:hover { background: rgb(30 41 59); }

.lang-flag { font-size: 1.05rem; line-height: 1; }
.lang-code { letter-spacing: 0.04em; }
.lang-chevron { font-size: 0.65rem; transition: transform 0.2s ease; }
.lang-chevron.is-open { transform: rotate(180deg); }

.lang-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 11rem;
  background: var(--glass-bg, #fff);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border, rgba(15, 23, 42, 0.08));
  border-radius: 0.85rem;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
  padding: 0.4rem;
  z-index: 3000;
  list-style: none;
  margin: 0;
}

.lang-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.75rem;
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: rgb(51 65 85);
  transition: all 0.15s ease;
}
.lang-item:hover { background: rgb(241 245 249); color: rgb(59 130 246); }
:global(.dark) .lang-item { color: rgb(226 232 240); }
:global(.dark) .lang-item:hover { background: rgb(30 41 59); }

.lang-item.is-active {
  background: rgba(59, 130, 246, 0.1);
  color: rgb(59 130 246);
  font-weight: 600;
}

.lang-name { flex: 1; }
.lang-check { font-size: 0.8rem; color: rgb(59 130 246); }

.lang-fade-enter-active, .lang-fade-leave-active { transition: all 0.18s ease; }
.lang-fade-enter-from, .lang-fade-leave-to { opacity: 0; transform: translateY(-6px); }

@media (max-width: 640px) {
  .lang-code { display: none; }
  .lang-trigger { padding: 0.5rem; }
}
</style>
