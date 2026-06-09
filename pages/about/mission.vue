<template>
  <main id="main-content">
    <PageHero gradient :title="$t('mission.hero.title')" :highlight="$t('mission.hero.highlight')" :subtitle="$t('mission.hero.subtitle')" />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div
          class="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100 mb-24 animate-on-scroll relative overflow-hidden group">
          <div
            class="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full -mr-40 -mt-40 group-hover:scale-125 transition-transform duration-1000"/>
          <div class="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full -ml-20 -mb-20"/>

          <div class="relative z-10 text-center max-w-[850px] mx-auto">
            <div
              class="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary text-sm font-black rounded-xl uppercase tracking-[0.2em] mb-10 italic">
              <span class="w-2 h-2 bg-secondary rounded-full animate-ping"/>
              {{ $t('mission.badge') }}
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-primary mb-10 italic leading-tight">{{ $t('mission.title') }}</h2>
            <div class="relative px-8 md:px-16">
              <i
                class="fas fa-quote-left absolute top-0 left-0 text-secondary/10 text-6xl md:text-8xl -translate-y-4"/>
              <p class="text-xl md:text-2xl text-slate-600 leading-relaxed italic font-medium">{{ $t('mission.quote') }}</p>
              <i
                class="fas fa-quote-right absolute bottom-0 right-0 text-secondary/10 text-6xl md:text-8xl translate-y-4"/>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard variant="mission" icon="fa-heart" :title="$t('mission.values.patriotism.title')" :description="$t('mission.values.patriotism.desc')" icon-bg="bg-red-50" icon-color="text-red-500" :hover-label="$t('mission.values.patriotism.hover')" />
          <FeatureCard variant="mission" icon="fa-lightbulb" :title="$t('mission.values.innovation.title')" :description="$t('mission.values.innovation.desc')" icon-bg="bg-amber-50" icon-color="text-amber-500" :hover-label="$t('mission.values.innovation.hover')" />
          <FeatureCard variant="mission" icon="fa-handshake" :title="$t('mission.values.cooperation.title')" :description="$t('mission.values.cooperation.desc')" icon-bg="bg-blue-50" icon-color="text-blue-500" :hover-label="$t('mission.values.cooperation.hover')" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => `${t('mission.hero.title')} ${t('mission.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('mission.hero.subtitle') },
    { property: 'og:title', content: computed(() => `${t('mission.hero.title')} ${t('mission.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('mission.hero.subtitle') },
    { name: 'twitter:title', content: computed(() => `${t('mission.hero.title')} ${t('mission.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('mission.hero.subtitle') },
  ],
})
</script>
