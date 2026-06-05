<script setup lang="ts">
const { newsList, categoryStyles } = useData()

useHead({
  title: 'Yangiliklar | 10-Maktab - so\'nggi e\'lon va xabarlar',
  meta: [
    { name: 'description', content: '10-maktab yangiliklari: tadbirlar, e\'lonlar, sport musobaqalari va maktab hayotidan eng so\'nggi lavhalar.' },
  ],
})
</script>

<template>
  <main>
    <PageHero gradient title="So'nggi" highlight="Yangiliklar" subtitle="Maktab hayotidagi eng muhim voqealar bilan tanishing." />

    <section class="py-24 bg-background min-h-screen">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          <NewsCard v-for="item in newsList" :key="item.id" :item="item" :styles="categoryStyles" variant="list" />
        </div>

        <div class="flex justify-center items-center gap-4 animate-on-scroll">
          <button class="w-14 h-14 flex items-center justify-center bg-slate-50 text-slate-300 rounded-2xl font-black cursor-not-allowed border border-slate-100">
            <i aria-hidden="true" class="fas fa-chevron-left"></i>
          </button>
          <button class="w-14 h-14 flex items-center justify-center bg-secondary text-white rounded-2xl font-black shadow-xl shadow-secondary/20 transform scale-110">1</button>
          <button class="w-14 h-14 flex items-center justify-center bg-white text-primary rounded-2xl font-black border border-slate-100 hover:border-secondary transition-all">2</button>
          <button class="w-14 h-14 flex items-center justify-center bg-white text-primary rounded-2xl font-black border border-slate-100 hover:border-secondary transition-all">3</button>
          <button class="w-14 h-14 flex items-center justify-center bg-white text-secondary rounded-2xl font-black border border-slate-100 hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm">
            <i aria-hidden="true" class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
