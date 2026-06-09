<template>
  <main id="main-content">
    <section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 text-white overflow-hidden">
      <img src="/assets/images/building.png" :alt="$t('home.hero.alt')" class="absolute inset-0 w-full h-full object-cover" fetchpriority="high">
      <div class="absolute inset-0 bg-slate-900/75 z-10"/>
      <div class="container mx-auto px-6 relative z-20 max-w-[900px] text-center animate-on-scroll">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
          {{ $t('home.hero.title') }} <span class="text-secondary">{{ $t('home.hero.highlight') }}</span>
        </h1>
        <p class="text-lg md:text-xl opacity-90 mb-12 max-w-[700px] mx-auto leading-relaxed">
          {{ $t('home.hero.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink
to="/about/about"
            class="px-10 py-4 bg-secondary text-white font-bold rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all">{{ $t('home.hero.details') }}</NuxtLink>
          <NuxtLink
to="/admission/admission"
            class="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all">{{ $t('home.hero.apply') }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="relative z-30 -mt-16">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon="fa-user-graduate" number="1,200+" :label="$t('home.stats.students')" />
          <StatCard icon="fa-chalkboard-teacher" number="85+" :label="$t('home.stats.teachers')" />
          <StatCard icon="fa-award" number="150+" :label="$t('home.stats.achievements')" />
          <StatCard icon="fa-university" number="25+" :label="$t('home.stats.classrooms')" />
        </div>
      </div>
    </section>

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <SectionHeading :badge="$t('home.news.badge')" :title="$t('home.news.title')" :highlight="$t('home.news.highlight')" link-to="/news/news" :link-text="$t('home.news.viewAll')" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsCard v-for="item in topNews" :key="item.id" :item="item" :styles="categoryStyles" variant="index" />
        </div>
      </div>
    </section>

    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="relative group animate-on-scroll overflow-hidden">
            <div class="absolute -inset-4 bg-secondary/10 rounded-[2rem] blur-2xl group-hover:bg-secondary/20 transition-all"/>
            <div class="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
loading="lazy" src="/assets/images/classroom.png" alt="Maktab xayoti"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="absolute -bottom-10 right-0 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-3xl">
                  <i aria-hidden="true" class="fas fa-certificate"/>
                </div>
                <div>
                  <p class="text-primary font-bold text-xl">{{ $t('home.features.ratingTitle') }}</p>
                  <p class="text-slate-500 text-sm">{{ $t('home.features.ratingSubtitle') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll">
            <SectionHeading :badge="$t('home.features.badge')" :title="$t('home.features.title')" :highlight="$t('home.features.highlight')" class="mb-8" />
            <ul class="space-y-8">
              <FeatureCard icon="fa-laptop-code" :title="$t('home.features.tech.title')" :description="$t('home.features.tech.desc')" icon-bg="bg-secondary" />
              <FeatureCard icon="fa-users" :title="$t('home.features.teachers.title')" :description="$t('home.features.teachers.desc')" icon-bg="bg-accent" />
              <FeatureCard icon="fa-futbol" :title="$t('home.features.clubs.title')" :description="$t('home.features.clubs.desc')" icon-bg="bg-primary" />
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <SectionHeading
          :badge="$t('home.management.badge')"
          :title="$t('home.management.title')"
          :highlight="$t('home.management.highlight')"
          link-to="/about/management"
          :link-text="$t('home.management.linkText')"
        />

        <div class="mb-12 animate-on-scroll">
          <div class="management-director-card bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row items-stretch group hover:shadow-2xl transition-all duration-500">
            <div class="w-full md:w-[280px] flex-shrink-0 relative overflow-hidden bg-slate-100" style="min-height:260px">
              <img
                loading="lazy"
                src="/assets/images/director.svg"
                :alt="$t('home.management.directorLabel')"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent"/>
              <div class="absolute bottom-5 left-5">
                <span class="inline-block px-4 py-1.5 bg-secondary text-white text-xs font-black rounded-lg uppercase tracking-widest shadow-md">{{ $t('home.management.directorBadge') }}</span>
              </div>
            </div>
            <div class="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <p class="text-secondary text-xs font-black uppercase tracking-[0.2em] mb-3">{{ $t('home.management.directorLabel') }}</p>
              <h3 class="text-2xl md:text-3xl font-black text-primary mb-4 italic">{{ $t('home.management.directorName') }}</h3>
              <p class="text-slate-500 text-base leading-relaxed mb-8 max-w-[560px]">
                {{ $t('home.management.directorQuote') }}
              </p>
              <div class="flex flex-wrap gap-6 text-sm text-slate-500 mb-8">
                <span class="flex items-center gap-2">
                  <span class="w-8 h-8 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary"><i class="fas fa-clock text-xs"/></span>
                  {{ $t('home.management.workTime') }}
                </span>
                <span class="flex items-center gap-2">
                  <span class="w-8 h-8 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary"><i class="fas fa-phone-alt text-xs"/></span>
                  {{ $t('home.management.phone') }}
                </span>
              </div>
              <NuxtLink
                to="/about/management"
                class="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 self-start text-sm"
              >
                <i class="fas fa-user-tie"/> {{ $t('home.management.viewMore') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="deputy in deputies"
            :key="deputy.name"
            class="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 animate-on-scroll group"
          >
            <div class="h-[220px] relative overflow-hidden bg-slate-100">
              <img
                loading="lazy"
                :src="deputy.img"
                :alt="deputy.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"/>
              <div class="absolute top-4 right-4 px-3 py-1.5 bg-secondary/90 backdrop-blur-sm text-white text-[11px] font-black rounded-lg uppercase tracking-wider">
                {{ $t(deputy.badge) }}
              </div>
            </div>
            <div class="p-7">
              <h4 class="text-lg font-black text-primary mb-1 italic">{{ deputy.name }}</h4>
              <p class="text-slate-400 text-xs mb-5 uppercase tracking-widest font-bold leading-snug">{{ $t(deputy.role) }}</p>
              <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                <i class="fas fa-phone-alt text-secondary text-xs"/>
                <span>{{ deputy.phone }}</span>
              </div>
              <div class="pt-5 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NuxtLink to="/about/management" class="text-secondary font-bold text-sm italic hover:underline">{{ $t('home.management.readMore') }}</NuxtLink>
                <i class="fas fa-arrow-right text-secondary"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { newsList, categoryStyles } = useData()
const topNews = computed(() => newsList.value.slice(0, 6))

const deputies = [
  {
    name: "Karimova Guli Baxtiyorovna",
    role: "management.deputies.edu.role",
    badge: "management.deputies.edu.badge",
    phone: "+998 (90) 111-22-33",
    img: "/assets/images/deputy1.svg",
  },
  {
    name: "Sultonov Alisher Akmalovich",
    role: "management.deputies.spiritual.role",
    badge: "management.deputies.spiritual.badge",
    phone: "+998 (90) 444-55-66",
    img: "/assets/images/deputy2.svg",
  },
  {
    name: "Nazarov Bekzod Rustamovich",
    role: "management.deputies.economic.role",
    badge: "management.deputies.economic.badge",
    phone: "+998 (90) 777-88-99",
    img: "/assets/images/deputy3.svg",
  },
]

useHead({
  title: t('site.name') + ' - ' + t('about.hero.subtitle'),
  meta: [
    { name: 'description', content: t('home.hero.subtitle') },
    { property: 'og:title', content: t('site.name') + ' - ' + t('about.hero.subtitle') },
    { property: 'og:description', content: t('home.hero.subtitle') },
    { name: 'twitter:title', content: t('site.name') + ' - ' + t('about.hero.subtitle') },
    { name: 'twitter:description', content: t('home.hero.subtitle') },
  ],
})
</script>
