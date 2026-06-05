<script setup lang="ts">
const activeFilter = ref('all')
const lightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')
const lightboxCaption = ref('')

const filters = ['all', 'binolar', 'talim', 'tadbirlar', 'ustozlar', 'sport']
const filterLabels: Record<string, string> = { all: 'Barchasi', binolar: 'Binolar', talim: "Ta'lim", tadbirlar: 'Tadbirlar', ustozlar: 'Ustozlar', sport: 'Sport' }

const galleryItems = [
  { src: '/assets/images/building.png', alt: 'Maktab binosi', cat: 'binolar', label: 'Binolar', title: 'Asosiy bino ko\'rinishi' },
  { src: '/assets/images/classroom.png', alt: 'Sinf xonasi', cat: 'talim', label: "Ta'lim", title: 'Informatika xonasi' },
  { src: '/assets/images/students.png', alt: "O'quvchilar", cat: 'tadbirlar', label: 'Tadbirlar', title: "Bayram tadbiridan lavha" },
  { src: '/assets/images/teacher.png', alt: 'Ustozlar', cat: 'ustozlar', label: 'Ustozlar', title: 'Pedagogik kengash' },
  { src: '/assets/images/classroom.png', alt: 'Laboratoriya', cat: 'talim', label: "Ta'lim", title: 'Kimyo laboratoriyasi' },
  { src: '/assets/images/building.png', alt: 'Sport maydoni', cat: 'sport', label: 'Sport', title: 'Sport maydoni ko\'rinishi' },
  { src: '/assets/images/students.png', alt: "O'quvchilar tadbirda", cat: 'tadbirlar', label: 'Tadbirlar', title: "Mustaqillik bayrami" },
  { src: '/assets/images/teacher.png', alt: 'Ustozlar kengashi', cat: 'ustozlar', label: 'Ustozlar', title: "O'qituvchilar kuni" },
  { src: '/assets/images/classroom.png', alt: 'Fizika xonasi', cat: 'talim', label: "Ta'lim", title: 'Fizika laboratoriyasi' },
]

function filteredItems() {
  if (activeFilter.value === 'all') return galleryItems
  return galleryItems.filter(item => item.cat === activeFilter.value)
}

function openLightbox(item: typeof galleryItems[number]) {
  lightboxSrc.value = item.src
  lightboxAlt.value = item.alt
  lightboxCaption.value = item.title
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function onOverlayClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('lightbox')) closeLightbox()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

useHead({
  title: 'Galereya | 10-Maktab - maktab hayotidan lavhalar',
  meta: [
    { name: 'description', content: '10-maktab fotogalereyasi. Maktab binosi, tadbirlar, dars jarayonlari va o\'quvchilar hayotidan rang-barang suratlar.' },
  ],
})
</script>

<template>
  <main>
    <PageHero gradient title="Foto va Video" highlight="Galereya" subtitle="Maktabimiz hayotidan eng yorqin va unutilmas lahzalar to'plami." />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <FilterBar :filters="filters.map(f => ({ key: f, label: filterLabels[f] }))" :active="activeFilter" pill @update="activeFilter = $event" />

        <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-on-scroll" id="gallery-grid">
          <div v-for="(item, i) in filteredItems()" :key="i" @click="openLightbox(item)"
            class="relative group overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <img loading="lazy" :src="item.src" :alt="item.alt" class="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
              <div class="translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                <span class="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">{{ item.label }}</span>
                <h4 class="text-white text-xl font-black italic">{{ item.title }}</h4>
              </div>
            </div>
            <div class="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              <i aria-hidden="true" class="fas fa-expand"></i>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center gap-4 mt-20 animate-on-scroll">
          <button class="w-14 h-14 rounded-2xl bg-secondary text-white font-black shadow-lg shadow-secondary/20 flex items-center justify-center">1</button>
          <button class="w-14 h-14 rounded-2xl bg-white text-primary font-bold border border-slate-200 hover:border-secondary hover:text-secondary transition-all flex items-center justify-center">2</button>
          <button class="w-14 h-14 rounded-2xl bg-white text-primary font-bold border border-slate-200 hover:border-secondary hover:text-secondary transition-all flex items-center justify-center text-xl">
            <i aria-hidden="true" class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  </main>

  <Teleport to="body">
    <div v-if="lightboxOpen" class="lightbox open" @click="onOverlayClick" role="dialog" aria-modal="true" aria-label="Rasm ko'rinishi">
      <button class="lightbox-close" aria-label="Yopish" @click="closeLightbox"><i aria-hidden="true" class="fas fa-times"></i></button>
      <img :src="lightboxSrc" :alt="lightboxAlt">
      <div class="lightbox-caption">{{ lightboxCaption }}</div>
    </div>
  </Teleport>
</template>
