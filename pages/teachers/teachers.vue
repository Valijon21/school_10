<script setup lang="ts">
const { t } = useI18n()
const { teachersList } = useData()

const searchQuery = ref('')
const activeFilter = ref('all')
const currentPage = ref(1)
const perPage = 6

const filteredTeachers = computed(() => {
  return teachersList.value.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const subjectSlug = t.subject.toLowerCase().replace(/ /g, '-').replace(/oʻ/g, "o'").replace(/gʻ/g, "g'").replace(/’/g, "'").replace(/'/g, "'")
    const matchesFilter = activeFilter.value === 'all' || subjectSlug === activeFilter.value
    return matchesSearch && matchesFilter
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredTeachers.value.length / perPage)))

const paginatedTeachers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredTeachers.value.slice(start, start + perPage)
})

const subjects = ['all', 'matematika', 'ona-tili', 'ingliz-tili', 'informatika', 'tarix']
const subjectLabels = computed(() => ({
  all: t('teachers.filters.all'),
  matematika: t('teachers.filters.matematika'),
  'ona-tili': t('teachers.filters.ona-tili'),
  'ingliz-tili': t('teachers.filters.ingliz-tili'),
  informatika: t('teachers.filters.informatika'),
  tarix: t('teachers.filters.tarix'),
}))

function setFilter(subject: string) {
  activeFilter.value = subject
  currentPage.value = 1
}

watch(searchQuery, () => { currentPage.value = 1 })

useHead({
  title: computed(() => `${t('teachers.hero.title')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('teachers.hero.subtitle') },
  ],
})
</script>

<template>
  <main id="main-content">
    <PageHero :title="$t('teachers.hero.title')" highlight="" :subtitle="$t('teachers.hero.subtitle')" />

    <section class="py-20 bg-background min-h-screen">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="flex flex-col gap-12 mb-16 animate-on-scroll">
          <div class="bg-white p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div class="relative w-full lg:w-[450px]">
              <i aria-hidden="true" class="fas fa-search absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"/>
              <input
v-model="searchQuery" type="text" :placeholder="$t('teachers.search.placeholder')"
                class="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-secondary focus:outline-none focus:bg-white transition-all font-medium">
            </div>
            <div class="flex flex-wrap justify-center gap-3 pb-2 lg:pb-0 w-full lg:w-auto">
              <button
v-for="s in subjects" :key="s" :class="['whitespace-nowrap px-6 py-3 rounded-xl font-bold transition-all shadow-sm', activeFilter === s ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200']"
                @click="setFilter(s)">
                {{ subjectLabels[s] }}
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <TeacherCard v-for="teacher in paginatedTeachers" :key="teacher.id" variant="active" :name="teacher.name" :subject="teacher.subject + ' ' + $t('teachers.subjectSuffix')" :image="teacher.image" :experience="teacher.experience" :telegram="teacher.telegram" :instagram="teacher.instagram" :link-to="'/teachers/teacher-single/' + teacher.id" />
        </div>

        <div class="mt-16">
          <AppPagination :current-page="currentPage" :total-pages="totalPages" @page-change="currentPage = $event" />
        </div>
      </div>
    </section>
  </main>
</template>
