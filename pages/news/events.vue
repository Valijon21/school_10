<script setup lang="ts">
const activeEventFilter = ref('all')

const eventCategories = ['all', 'bayram', 'sport', 'madaniy', 'ilmiy']
const eventLabels: Record<string, string> = { all: 'Barchasi', bayram: 'Bayram', sport: 'Sport', madaniy: 'Madaniy', ilmiy: 'Ilmiy' }

const events = [
  { category: 'bayram', badge: 'Bayram', badgeBg: 'bg-secondary/90', image: '/assets/images/building.png', title: "Navro'z bayrami tantanalari", date: '25 Mart', desc: '"Xush kelding, Navro\'z!" deb nomlangan katta tadbirda o\'quvchilar milliy qo\'shiq va raqslar ijro etdilar.', time: '10:00', location: 'Maktab hovlisi', textColor: 'text-secondary' },
  { category: 'sport', badge: 'Sport', badgeBg: 'bg-green-500/90', image: '/assets/images/classroom.png', title: 'Futbol musobaqasi', date: '10 Mart', desc: 'Sinf jamoalari o\'rtasida maktab birinchiligi yakunlandi. G\'oliblar esdalik sovg\'alari bilan taqdirlandi.', time: '14:00', location: 'Sport maydoni', textColor: 'text-green-500' },
  { category: 'madaniy', badge: 'Madaniy', badgeBg: 'bg-accent/90', image: '/assets/images/students.png', title: 'Ona tili bayrami', date: '5 Mart', desc: '"Til - millat boyligi" mavzusida o\'tkazilgan ijodiy kechada o\'quvchilar she\'r va bayonlar aytdilar.', time: '15:00', location: 'Majlislar zali', textColor: 'text-accent' },
  { category: 'ilmiy', badge: 'Ilmiy', badgeBg: 'bg-cyan-500/90', image: '/assets/images/building.png', title: 'Ochiq darslar haftaligi', date: '1 Mart', desc: 'Tajribali o\'qituvchilar tomonidan mahorat darslari o\'tkazildi. Barcha fanlardan ochiq darslar tashkil etildi.', time: '09:00', location: 'Sinflar', textColor: 'text-cyan-500' },
  { category: 'madaniy', badge: 'Madaniy', badgeBg: 'bg-accent/90', image: '/assets/images/students.png', title: 'Kitobxonlik kuni', date: '20 Fevral', desc: 'Kitob mutolaa qilish va adabiyotga qiziqishni oshirish maqsadida "Eng faol kitobxon" tanlovi o\'tkazildi.', time: '11:00', location: 'Kutubxona', textColor: 'text-accent' },
  { category: 'sport', badge: 'Sport', badgeBg: 'bg-green-500/90', image: '/assets/images/classroom.png', title: 'Stol tennisi turniri', date: '15 Fevral', desc: 'Maktab o\'quvchilari o\'rtasida stol tennisi bo\'yicha ochiq turnir o\'tkazildi. Qizg\'in bellashuvlar kuzatildi.', time: '13:00', location: 'Sport zali', textColor: 'text-green-500' },
]

useHead({
  title: 'Tadbirlar | 10-Maktab - kelgusi va o\'tgan tadbirlar',
  meta: [
    { name: 'description', content: '10-maktab tadbirlari: bayram tantanalari, sport musobaqalari, ochiq darslar va boshqa maktab tadbirlari haqida ma\'lumot.' },
  ],
})
</script>

<template>
  <main>
    <PageHero gradient title="Maktab" highlight="Tadbirlari" subtitle="Maktabimizda o'tkazilgan eng qiziqarli tadbirlar bilan tanishing." />

    <section class="py-24 bg-background min-h-screen">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <FilterBar :filters="eventCategories.map(c => ({ key: c, label: eventLabels[c] }))" :active="activeEventFilter" @update="activeEventFilter = $event" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <article v-for="card in events" :key="card.title"
            v-show="activeEventFilter === 'all' || card.category === activeEventFilter"
            class="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-50 hover:-translate-y-3 transition-all duration-500 animate-on-scroll group">
            <div class="relative h-56 overflow-hidden">
              <img loading="lazy" :src="card.image" :alt="card.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
              <div :class="`absolute top-4 left-4 ${card.badgeBg} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase`">{{ card.badge }}</div>
              <div class="absolute top-4 right-4 bg-white/90 text-primary px-4 py-1.5 rounded-full text-xs font-bold">{{ card.date }}</div>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-black text-primary mb-4">{{ card.title }}</h3>
              <p class="text-slate-500 mb-6 leading-relaxed">{{ card.desc }}</p>
              <div class="flex items-center gap-4 text-sm" :class="card.textColor">
                <span><i aria-hidden="true" class="far fa-clock mr-2"></i>{{ card.time }}</span>
                <span><i aria-hidden="true" class="fas fa-map-marker-alt mr-2"></i>{{ card.location }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
