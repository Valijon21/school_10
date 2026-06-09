<template>
  <main id="main-content">
    <section class="min-h-screen flex items-center justify-center bg-background">
      <div class="container mx-auto px-6 text-center animate-on-scroll">
        <div class="text-[12rem] md:text-[16rem] font-black text-primary/5 leading-none select-none">404</div>
        <div class="relative -mt-20 md:-mt-32">
          <div
            class="w-32 h-32 md:w-44 md:h-44 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-10">
            <i aria-hidden="true" class="fas fa-search text-secondary text-5xl md:text-6xl"/>
          </div>
          <h1 class="text-4xl md:text-5xl font-black text-primary mb-6">{{ $t('notFound.title') }}</h1>
          <p class="text-lg text-slate-500 max-w-[500px] mx-auto mb-12 leading-relaxed">
            {{ $t('notFound.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <NuxtLink
to="/"
              class="px-10 py-4 bg-secondary text-white font-bold rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all">
              {{ $t('notFound.home') }}
            </NuxtLink>
            <NuxtLink
to="/contact/contact"
              class="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
              {{ $t('notFound.contact') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => `${t('notFound.title')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('notFound.description') },
    { property: 'og:title', content: computed(() => `${t('notFound.title')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('notFound.description') },
    { name: 'twitter:title', content: computed(() => `${t('notFound.title')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('notFound.description') },
    { name: 'robots', content: 'noindex' },
  ],
})
</script>
