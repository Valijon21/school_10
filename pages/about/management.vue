<template>
  <main id="main-content">
    <PageHero gradient :title="$t('management.hero.title')" :highlight="$t('management.hero.highlight')" :subtitle="$t('management.hero.subtitle')" />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="mb-24 animate-on-scroll">
          <div
            class="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row items-center group">
            <div class="w-full md:w-2/5 h-[400px] md:h-[500px] bg-slate-200 relative overflow-hidden">
              <img
loading="lazy" src="/assets/images/director.svg" :alt="$t('management.director.badge')"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"/>
            </div>
            <div class="w-full md:w-3/5 p-10 md:p-16">
              <div
                class="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary text-sm font-black rounded-xl uppercase tracking-[0.2em] mb-8 italic">
                {{ $t('management.director.badge') }}
              </div>
              <h2 class="text-3xl md:text-4xl font-black text-primary mb-6 italic">{{ $t('management.director.name') }}</h2>
              <p class="text-slate-500 text-lg leading-relaxed mb-10">
                {{ $t('management.director.quote') }}
              </p>
              <ul class="space-y-4 mb-10">
                <li class="flex items-center gap-4 text-slate-600">
                  <div
                    class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <i aria-hidden="true" class="fas fa-clock"/>
                  </div>
                  <span>{{ $t('management.director.workTime') }}</span>
                </li>
                <li class="flex items-center gap-4 text-slate-600">
                  <div
                    class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <i aria-hidden="true" class="fas fa-phone-alt"/>
                  </div>
                  <span>{{ $t('management.director.phone') }}</span>
                </li>
              </ul>
              <div class="flex gap-4">
                <a
href="#"
                  class="px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all flex items-center gap-2">
                  <i aria-hidden="true" class="fas fa-envelope"/> {{ $t('management.director.sendMessage') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h3 class="text-3xl font-black text-primary italic mb-12 flex items-center gap-4">
            <span class="w-12 h-1 text-secondary bg-secondary rounded-full"/>
            {{ $t('management.deputies.title') }}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              class="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
              <div class="h-[300px] bg-slate-200 relative overflow-hidden">
                <img
loading="lazy" src="/assets/images/deputy1.svg" alt="Karimova Guli"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute top-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider italic">
                  {{ $t('management.deputies.edu.badge') }}
                </div>
              </div>
              <div class="p-8">
                <h4 class="text-xl font-black text-primary mb-2 italic">{{ $t('management.deputies.edu.name') }}</h4>
                <p class="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">{{ $t('management.deputies.edu.role') }}</p>
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <i aria-hidden="true" class="fas fa-phone-alt text-secondary"/>
                  <span>{{ $t('management.deputies.edu.phone') }}</span>
                </div>
                <div
                  class="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-secondary font-bold text-sm italic">{{ $t('management.deputies.readMore') }}</span>
                  <i aria-hidden="true" class="fas fa-arrow-right text-secondary animate-bounce-x"/>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
              <div class="h-[300px] bg-slate-200 relative overflow-hidden">
                <img
loading="lazy" src="/assets/images/deputy2.svg" alt="Sultonov Alisher"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute top-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider italic">
                  {{ $t('management.deputies.spiritual.badge') }}
                </div>
              </div>
              <div class="p-8">
                <h4 class="text-xl font-black text-primary mb-2 italic">{{ $t('management.deputies.spiritual.name') }}</h4>
                <p class="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">{{ $t('management.deputies.spiritual.role') }}</p>
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <i aria-hidden="true" class="fas fa-phone-alt text-secondary"/>
                  <span>{{ $t('management.deputies.spiritual.phone') }}</span>
                </div>
                <div
                  class="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-secondary font-bold text-sm italic">{{ $t('management.deputies.readMore') }}</span>
                  <i aria-hidden="true" class="fas fa-arrow-right text-secondary animate-bounce-x"/>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
              <div class="h-[300px] bg-slate-200 relative overflow-hidden">
                <img
loading="lazy" src="/assets/images/deputy3.svg" alt="Nazarov Bekzod"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute top-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider italic">
                  {{ $t('management.deputies.economic.badge') }}
                </div>
              </div>
              <div class="p-8">
                <h4 class="text-xl font-black text-primary mb-2 italic">{{ $t('management.deputies.economic.name') }}</h4>
                <p class="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">{{ $t('management.deputies.economic.role') }}</p>
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <i aria-hidden="true" class="fas fa-phone-alt text-secondary"/>
                  <span>{{ $t('management.deputies.economic.phone') }}</span>
                </div>
                <div
                  class="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-secondary font-bold text-sm italic">{{ $t('management.deputies.readMore') }}</span>
                  <i aria-hidden="true" class="fas fa-arrow-right text-secondary animate-bounce-x"/>
                </div>
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

useHead({
  title: computed(() => `${t('management.hero.title')} ${t('management.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('management.hero.subtitle') },
    { property: 'og:title', content: computed(() => `${t('management.hero.title')} ${t('management.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('management.hero.subtitle') },
    { name: 'twitter:title', content: computed(() => `${t('management.hero.title')} ${t('management.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('management.hero.subtitle') },
  ],
})
</script>
