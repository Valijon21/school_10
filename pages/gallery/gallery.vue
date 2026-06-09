<script setup lang="ts">
const { t } = useI18n()
const activeFilter = ref('all')
const lightboxOpen = ref(false)
const lightboxSrc = ref('')
const lightboxAlt = ref('')
const lightboxCaption = ref('')

const filters = ['all', 'binolar', 'talim', 'tadbirlar', 'ustozlar', 'sport']
const filterLabels: Record<string, string> = {
  all: t('gallery.filters.all'),
  binolar: t('gallery.filters.binolar'),
  talim: t('gallery.filters.talim'),
  tadbirlar: t('gallery.filters.tadbirlar'),
  ustozlar: t('gallery.filters.ustozlar'),
  sport: t('gallery.filters.sport'),
}

const galleryItems = [
  { src: '/assets/images/building.png', alt: 'Maktab binosi', cat: 'binolar', label: t('gallery.filters.binolar'), title: t('gallery.filters.binolar') },
  { src: '/assets/images/classroom.png', alt: 'Sinf xonasi', cat: 'talim', label: t('gallery.filters.talim'), title: t('gallery.filters.talim') },
  { src: '/assets/images/students.png', alt: "O'quvchilar", cat: 'tadbirlar', label: t('gallery.filters.tadbirlar'), title: t('gallery.filters.tadbirlar') },
  { src: '/assets/images/teacher.png', alt: 'Ustozlar', cat: 'ustozlar', label: t('gallery.filters.ustozlar'), title: t('gallery.filters.ustozlar') },
  { src: '/assets/images/classroom.png', alt: 'Laboratoriya', cat: 'talim', label: t('gallery.filters.talim'), title: t('gallery.filters.talim') },
  { src: '/assets/images/building.png', alt: 'Sport maydoni', cat: 'sport', label: t('gallery.filters.sport'), title: t('gallery.filters.sport') },
  { src: '/assets/images/students.png', alt: "O'quvchilar tadbirda", cat: 'tadbirlar', label: t('gallery.filters.tadbirlar'), title: t('gallery.filters.tadbirlar') },
  { src: '/assets/images/teacher.png', alt: 'Ustozlar kengashi', cat: 'ustozlar', label: t('gallery.filters.ustozlar'), title: t('gallery.filters.ustozlar') },
  { src: '/assets/images/classroom.png', alt: 'Fizika xonasi', cat: 'talim', label: t('gallery.filters.talim'), title: t('gallery.filters.talim') },
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
  title: computed(() => `${t('gallery.hero.title')} ${t('gallery.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('gallery.hero.subtitle') },
  ],
})
</script>

<template>
  <main id="main-content">
    <PageHero gradient :title="$t('gallery.hero.title')" :highlight="$t('gallery.hero.highlight')" :subtitle="$t('gallery.hero.subtitle')" />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <FilterBar :filters="filters.map(f => ({ key: f, label: filterLabels[f] }))" :active="activeFilter" pill @update="activeFilter = $event" />

        <div id="gallery-grid" class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-on-scroll">
          <div
v-for="(item, i) in filteredItems()" :key="i" class="relative group overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            @click="openLightbox(item)">
            <img loading="lazy" :src="item.src" :alt="item.alt" class="w-full h-auto object-cover group-hover:scale-110 transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
              <div class="translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                <span class="text-secondary font-bold text-sm uppercase tracking-widest mb-2 block">{{ item.label }}</span>
                <h4 class="text-white text-xl font-black italic">{{ item.title }}</h4>
              </div>
            </div>
            <div class="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              <i aria-hidden="true" class="fas fa-expand"/>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center gap-4 mt-20 animate-on-scroll">
          <button class="w-14 h-14 rounded-2xl bg-secondary text-white font-black shadow-lg shadow-secondary/20 flex items-center justify-center">1</button>
          <button class="w-14 h-14 rounded-2xl bg-white text-primary font-bold border border-slate-200 hover:border-secondary hover:text-secondary transition-all flex items-center justify-center">2</button>
          <button class="w-14 h-14 rounded-2xl bg-white text-primary font-bold border border-slate-200 hover:border-secondary hover:text-secondary transition-all flex items-center justify-center text-xl">
            <i aria-hidden="true" class="fas fa-chevron-right"/>
          </button>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox open" role="dialog" aria-modal="true" :aria-label="$t('gallery.lightbox.ariaLabel')" @click="onOverlayClick">
        <button class="lightbox-close" :aria-label="$t('gallery.lightbox.close')" @click="closeLightbox"><i aria-hidden="true" class="fas fa-times"/></button>
        <img :src="lightboxSrc" :alt="lightboxAlt">
        <div class="lightbox-caption">{{ lightboxCaption }}</div>
      </div>
    </Teleport>
  </main>
</template>
