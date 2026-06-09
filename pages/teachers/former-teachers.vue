<template>
  <main id="main-content">
    <PageHero gradient :title="$t('former.hero.title')" :highlight="$t('former.hero.highlight')" :subtitle="$t('former.hero.subtitle')" />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <TeacherCard v-for="teacher in paginatedTeachers" :key="teacher.name" variant="former" :name="teacher.name" :subject="teacher.subject" :image="'teacher.png'" :status="teacher.status" :years-range="teacher.years" />
        </div>

        <div class="mt-16">
          <AppPagination :current-page="currentPage" :total-pages="totalPages" @page-change="currentPage = $event" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

const formerTeachers = computed(() => {
  const sl = (key: string) => {
    const labels: Record<string, string> = {
      'Fizika': t('schedule.subjects.Fizika'),
      'Biologiya': t('schedule.subjects.Biologiya'),
      'Kimyo': t('schedule.subjects.Kimyo'),
      'Tarix': t('schedule.subjects.Tarix'),
      'Geografiya': t('schedule.subjects.Geografiya'),
      'Sport': t('schedule.subjects.Sport'),
      'Matematika': t('schedule.subjects.Matematika'),
      'Ona tili': t('schedule.subjects["Ona tili"]'),
      'Ingliz tili': t('schedule.subjects["Ingliz tili"]'),
      'Informatika': t('schedule.subjects.Informatika'),
      'Rus tili': t('schedule.subjects["Rus tili"]'),
      'Adabiyot': t('schedule.subjects.Adabiyot'),
      'Musiqa': t('schedule.subjects.Musiqa'),
    }
    return labels[key] || key
  }
  return [
    { name: 'Mahmuda Ayupova', subject: sl('Fizika'), status: t('former.status.retired'), years: `1995 - 2020 ${t('former.years')}` },
    { name: 'Ikromjon Yusupov', subject: sl('Biologiya'), status: t('former.status.retired'), years: `2000 - 2022 ${t('former.years')}` },
    { name: "Zulayho G'anieva", subject: sl('Kimyo'), status: t('former.status.retired'), years: `1990 - 2018 ${t('former.years')}` },
    { name: 'Baxtiyor Salimov', subject: sl('Tarix'), status: t('former.status.retired'), years: `1985 - 2015 ${t('former.years')}` },
    { name: 'Omina Karimova', subject: sl('Geografiya'), status: t('former.status.retired'), years: `1998 - 2023 ${t('former.years')}` },
    { name: 'Rustam Sobirov', subject: sl('Sport'), status: t('former.status.retired'), years: `1992 - 2017 ${t('former.years')}` },
    { name: 'Zulfiya Orifova', subject: sl('Matematika'), status: t('former.status.honored'), years: `1980 - 2012 ${t('former.years')}` },
    { name: 'Abduhafiz Karimov', subject: sl('Ona tili'), status: t('former.status.honored'), years: `1988 - 2019 ${t('former.years')}` },
    { name: 'Malika Shokirova', subject: sl('Ingliz tili'), status: t('former.status.honored'), years: `1992 - 2021 ${t('former.years')}` },
    { name: 'Sardor Bekov', subject: sl('Informatika'), status: t('former.status.honored'), years: `2005 - 2024 ${t('former.years')}` },
    { name: 'Nigora Aliyeva', subject: sl('Rus tili'), status: t('former.status.honored'), years: `1990 - 2020 ${t('former.years')}` },
    { name: "Farhod Jo'rayev", subject: 'Mehnat', status: t('former.status.honored'), years: `1985 - 2015 ${t('former.years')}` },
    { name: 'Gulnora Karimova', subject: sl('Adabiyot'), years: `1995 - 2022 ${t('former.years')}` },
    { name: 'Shavkat Ergashev', subject: sl('Matematika'), years: `2000 - 2024 ${t('former.years')}` },
    { name: "Dildora To'rayeva", subject: sl('Ona tili'), years: `1998 - 2023 ${t('former.years')}` },
    { name: 'Akmal Sayidov', subject: sl('Kimyo'), years: `1992 - 2018 ${t('former.years')}` },
    { name: 'Nigora Salomova', subject: sl('Ingliz tili'), years: `2005 - 2024 ${t('former.years')}` },
    { name: 'Sherzod Olimov', subject: sl('Musiqa'), years: `1990 - 2020 ${t('former.years')}` },
  ]
})

const currentPage = ref(1)
const perPage = 6
const totalPages = computed(() => Math.max(1, Math.ceil(formerTeachers.value.length / perPage)))
const paginatedTeachers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return formerTeachers.value.slice(start, start + perPage)
})

useHead({
  title: computed(() => `${t('former.hero.title')} ${t('former.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('former.hero.subtitle') },
  ],
})
</script>
