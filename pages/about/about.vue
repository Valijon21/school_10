<template>
  <main id="main-content">
    <section class="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50"/>
      <div class="container mx-auto px-6 max-w-[900px] animate-on-scroll relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">{{ $t('about.hero.title') }} <span
            class="text-secondary text-shadow-lg">{{ $t('about.hero.highlight') }}</span></h1>
        <p class="text-lg md:text-xl opacity-80 leading-relaxed font-medium">{{ $t('about.hero.subtitle') }}</p>
      </div>
    </section>

    <section class="py-32 bg-white overflow-hidden">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div class="animate-on-scroll order-2 lg:order-1">
            <SectionHeading decorative :badge="$t('about.badge')" :title="$t('about.title')" :highlight="$t('about.highlight')" />
            <div class="space-y-8 text-slate-500 leading-relaxed mb-12 text-xl font-medium">
              <p class="border-l-4 border-slate-100 pl-8">{{ $t('about.p1') }}</p>
              <p class="border-l-4 border-slate-100 pl-8">{{ $t('about.p2') }}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <StatCard variant="about" icon="fa-calendar-check" :number="$t('about.stats.experience')" :label="$t('about.stats.experienceLabel')" />
              <StatCard variant="about" icon="fa-user-graduate" :number="$t('about.stats.graduates')" :label="$t('about.stats.graduatesLabel')" />
            </div>
          </div>
          <div class="relative group animate-on-scroll order-1 lg:order-2 overflow-hidden">
            <div
              class="absolute -inset-10 bg-secondary/5 rounded-full blur-[100px] group-hover:bg-secondary/10 transition-all duration-700"/>
            <div
              class="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] h-[300px] md:h-[450px] lg:h-[650px] border-[12px] border-white ring-1 ring-slate-100 transform rotate-1 group-hover:rotate-0 transition-all duration-700">
              <img
loading="lazy" src="/assets/images/building.png" alt="Maktab binosi"
                class="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]">
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60"/>
            </div>
            <div
              class="absolute -bottom-10 left-0 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-bounce cursor-default">
              <div class="text-center">
                <div class="text-4xl font-black text-secondary mb-1 italic">TOP-10</div>
                <div class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest">
                  {{ $t('about.ranking.label') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-slate-50 relative overflow-hidden">
      <div
        class="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent"/>
      <div class="container mx-auto px-6 max-w-[1240px] relative z-10">
        <SectionHeading :badge="$t('about.nav.badge')" :title="$t('about.nav.title')" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard variant="navigation" icon="fa-history" :title="$t('about.nav.historyTitle')" :description="$t('about.nav.historyDesc')" link="/about/history" />
          <FeatureCard variant="navigation" icon="fa-bullseye" :title="$t('about.nav.missionTitle')" :description="$t('about.nav.missionDesc')" link="/about/mission" />
          <FeatureCard variant="navigation" icon="fa-users-cog" :title="$t('about.nav.managementTitle')" :description="$t('about.nav.managementDesc')" link="/about/management" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: computed(() => `${t('about.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('about.p1') },
    { property: 'og:title', content: computed(() => `${t('about.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('about.p1') },
    { name: 'twitter:title', content: computed(() => `${t('about.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('about.p1') },
  ],
})
</script>
