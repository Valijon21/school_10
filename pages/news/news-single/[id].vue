<script setup lang="ts">
const { getNewsById, newsList } = useData()
const route = useRoute()
const router = useRouter()

const id = computed(() => parseInt(route.params.id as string))
const item = computed(() => getNewsById(id.value))

const sidebarNews = computed(() => {
  return newsList.filter(n => n.id !== id.value).slice(0, 3)
})

if (!item.value) {
  router.replace('/news/news')
}

useHead({
  title: computed(() => item.value ? `${item.value.title} | 10-Maktab` : 'Yangilik tafsiloti | 10-Maktab - batafsil ma\'lumot'),
  meta: computed(() => item.value ? [
    { name: 'description', content: `${item.value.title}. ${item.value.content.substring(0, 120)}` },
  ] : []),
})
</script>

<template>
  <main v-if="item">
    <section class="bg-primary pt-48 pb-32 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-60"></div>
      <div class="container mx-auto px-6 max-w-[1000px] animate-on-scroll relative z-10 text-center md:text-left">
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
          <span class="px-5 py-2 bg-secondary text-white text-[0.7rem] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-secondary/20">{{ item.category }}</span>
          <span class="text-slate-400 font-bold flex items-center gap-2">
            <i aria-hidden="true" class="far fa-calendar-alt text-secondary"></i> {{ item.date }}
          </span>
          <span class="text-slate-400 font-bold flex items-center gap-2">
            <i aria-hidden="true" class="far fa-clock text-secondary"></i> {{ item.readTime }}
          </span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black mb-0 leading-[1.1] italic">{{ item.title }}</h1>
      </div>
    </section>

    <section class="pb-32 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 -mt-16 relative z-20">
          <div class="lg:col-span-8 space-y-12">
            <div class="bg-white p-4 rounded-[3.5rem] shadow-2xl shadow-primary/5 animate-on-scroll">
              <img loading="lazy" :src="`/assets/images/${item.image}`" :alt="item.title"
                class="w-full h-auto rounded-[3rem] object-cover aspect-[16/9]">
            </div>

            <div class="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-xl shadow-primary/5 rich-text animate-on-scroll">
              <div v-html="item.fullContent"></div>

              <div class="mt-16 pt-10 border-t border-slate-100 flex flex-wrap items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                  <span class="text-xs font-black text-slate-400 uppercase tracking-widest">Ulaqing:</span>
                  <div class="flex gap-3">
                    <SocialButtons variant="share" :platforms="[{ icon: 'fab fa-telegram-plane', url: '#', label: 'Telegram' }, { icon: 'fab fa-facebook-f', url: '#', label: 'Facebook' }, { icon: 'fab fa-instagram', url: '#', label: 'Instagram' }]" />
                  </div>
                </div>
                <NuxtLink to="/news/news" class="flex items-center gap-3 text-secondary font-black uppercase tracking-widest text-xs hover:gap-5 transition-all">
                  <i aria-hidden="true" class="fas fa-arrow-left"></i> Orqaga qaytish
                </NuxtLink>
              </div>
            </div>
          </div>

          <aside class="lg:col-span-4 space-y-10 animate-on-scroll">
            <div class="bg-white p-10 rounded-[3rem] shadow-xl shadow-primary/5 border border-slate-50">
              <h3 class="text-xl font-black text-primary mb-10 underline decoration-secondary decoration-4 underline-offset-8">Boshqa Yangiliklar</h3>
              <div class="space-y-8">
                <NuxtLink v-for="n in sidebarNews" :key="n.id" :to="`/news/news-single/${n.id}`"
                  class="group flex gap-5 items-start">
                  <img loading="lazy" :src="`/assets/images/${n.image}`" :alt="n.title"
                    class="w-20 h-20 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500 shadow-lg flex-shrink-0">
                  <div>
                    <h4 class="font-bold text-primary text-sm leading-snug group-hover:text-secondary transition-colors line-clamp-2">{{ n.title }}</h4>
                    <span class="text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest mt-2 block">{{ n.date }}</span>
                  </div>
                </NuxtLink>
              </div>
              <NuxtLink to="/news/news"
                class="block w-full text-center py-5 mt-10 bg-slate-50 text-slate-400 font-black rounded-2xl hover:bg-secondary hover:text-white transition-all text-xs uppercase tracking-widest">Barchasini ko'rish</NuxtLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
