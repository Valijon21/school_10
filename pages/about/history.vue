<template>
  <main id="main-content">
    <PageHero :title="$t('history.hero.title')" :highlight="$t('history.hero.highlight')" :subtitle="$t('history.hero.subtitle')" />

    <section class="py-24 bg-background overflow-hidden">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div
          class="relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-slate-200 lg:before:block before:hidden">
          <div class="space-y-20 relative">
            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">1990</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">{{ $t('history.timeline.1990.title') }}</h3>
                <p class="text-slate-500 leading-relaxed">{{ $t('history.timeline.1990.desc') }}</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all"/>
              <div class="w-full lg:w-[45%]"/>
            </div>

            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">2005</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">{{ $t('history.timeline.2005.title') }}</h3>
                <p class="text-slate-500 leading-relaxed">{{ $t('history.timeline.2005.desc') }}</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all"/>
              <div class="w-full lg:w-[45%]"/>
            </div>

            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">2015</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">{{ $t('history.timeline.2015.title') }}</h3>
                <p class="text-slate-500 leading-relaxed">{{ $t('history.timeline.2015.desc') }}</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all"/>
              <div class="w-full lg:w-[45%]"/>
            </div>

            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">2024</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">{{ $t('history.timeline.2024.title') }}</h3>
                <p class="text-slate-500 leading-relaxed">{{ $t('history.timeline.2024.desc') }}</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all"/>
              <div class="w-full lg:w-[45%]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => `${t('history.hero.title')} ${t('history.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('history.hero.subtitle') },
    { property: 'og:title', content: computed(() => `${t('history.hero.title')} ${t('history.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('history.hero.subtitle') },
    { name: 'twitter:title', content: computed(() => `${t('history.hero.title')} ${t('history.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('history.hero.subtitle') },
  ],
})
</script>
