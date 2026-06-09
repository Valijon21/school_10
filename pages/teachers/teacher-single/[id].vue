<script setup lang="ts">
const { t } = useI18n()
const { getTeacherById } = useData()
const route = useRoute()
const router = useRouter()

const id = computed(() => parseInt(route.params.id as string) || 0)
const teacher = computed(() => getTeacherById(id.value))

if (!teacher.value) {
  router.replace('/teachers/teachers')
}

useHead({
  title: computed(() => teacher.value ? `${teacher.value.name} | 10-MAKTAB` : `${t('single.hero.title')} ${t('single.hero.highlight')} | 10-MAKTAB`),
  meta: computed(() => teacher.value ? [
    { name: 'description', content: `${teacher.value.name} - ${teacher.value.subject} ${t('teachers.subjectSuffix')}. ${teacher.value.experience}.` },
    { property: 'og:title', content: `${teacher.value.name} | 10-MAKTAB` },
    { property: 'og:description', content: `${teacher.value.name} - ${teacher.value.subject} ${t('teachers.subjectSuffix')}. ${teacher.value.experience}.` },
    { name: 'twitter:title', content: `${teacher.value.name} | 10-MAKTAB` },
    { name: 'twitter:description', content: `${teacher.value.name} - ${teacher.value.subject} ${t('teachers.subjectSuffix')}. ${teacher.value.experience}.` },
  ] : []),
})
</script>

<template>
  <main v-if="teacher" id="main-content">
    <PageHero gradient :title="$t('single.hero.title')" :highlight="$t('single.hero.highlight')" :subtitle="$t('single.hero.subtitle')" />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-50 animate-on-scroll">
          <div class="grid grid-cols-1 lg:grid-cols-12">
            <div class="lg:col-span-4 bg-slate-50 p-12 border-r border-slate-100 flex flex-col items-center">
              <div class="relative w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl mb-10 border-8 border-white group">
                <img
loading="lazy" :src="`/assets/images/${teacher.image}`" :alt="teacher.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-all duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-all"/>
              </div>

              <div class="w-full space-y-6">
                <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 group hover:shadow-md transition-all">
                  <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all">
                    <i aria-hidden="true" class="fas fa-envelope"/>
                  </div>
                  <div>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">{{ $t('single.email') }}</p>
                    <p class="text-primary font-bold">{{ teacher.email }}</p>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 group hover:shadow-md transition-all">
                  <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all">
                    <i aria-hidden="true" class="fas fa-clock"/>
                  </div>
                  <div>
                    <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">{{ $t('single.consultation') }}</p>
                    <p class="text-primary font-bold">{{ teacher.consultation }}</p>
                  </div>
                </div>

                <SocialButtons variant="sidebar" :platforms="[{ icon: 'fab fa-telegram-plane', url: teacher.telegram, label: 'Telegram' }, { icon: 'fab fa-instagram', url: teacher.instagram, label: 'Instagram' }]" />
              </div>
            </div>

            <div class="lg:col-span-8 p-12 lg:p-20">
              <div class="mb-12">
                <span class="inline-block px-5 py-2 bg-secondary text-white text-sm font-black rounded-full mb-6 shadow-lg shadow-secondary/20 uppercase tracking-widest">{{ teacher.subject }} {{ $t('teachers.subjectSuffix') }}</span>
                <h2 class="text-4xl lg:text-5xl font-black text-primary mb-8 italic">{{ teacher.name }}</h2>
                <p class="text-lg text-slate-500 leading-relaxed max-w-[700px]">{{ teacher.bio }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="group">
                  <h4 class="text-primary font-black text-xl mb-6 flex items-center gap-3 italic">
                    <span class="w-8 h-1 bg-secondary rounded-full"/> {{ $t('single.specialty') }}
                  </h4>
                  <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                    <p class="text-slate-600 font-medium leading-relaxed">{{ teacher.education }}</p>
                  </div>
                </div>

                <div class="group">
                  <h4 class="text-primary font-black text-xl mb-6 flex items-center gap-3 italic">
                    <span class="w-8 h-1 bg-secondary rounded-full"/> {{ $t('single.achievements') }}
                  </h4>
                  <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                    <p class="text-slate-600 font-medium leading-relaxed">{{ teacher.achievements }}</p>
                  </div>
                </div>
              </div>

              <div class="mt-16 pt-16 border-t border-slate-100 flex flex-wrap items-center gap-10">
                <div class="flex items-center gap-4">
                  <div class="text-4xl font-black text-secondary italic">{{ teacher.experience }}</div>
                  <div class="text-slate-400 font-bold text-sm uppercase leading-tight">{{ $t('single.experience') }}</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="text-4xl font-black text-secondary italic">{{ teacher.students }}+</div>
                  <div class="text-slate-400 font-bold text-sm uppercase leading-tight">{{ $t('single.students') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
