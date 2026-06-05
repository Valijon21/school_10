<template>
  <main>
    <PageHero gradient title="Maktabimiz" highlight="Faxriylari" subtitle="Ko'p yillar davomida maktabimiz rivojiga ulkan hissa qo'shgan ustozlar." />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <TeacherCard v-for="t in paginatedTeachers" :key="t.name" variant="former" :name="t.name" :subject="t.subject" :image="'teacher.png'" :status="t.status" :yearsRange="t.years" />
        </div>

        <div class="mt-16">
          <AppPagination :current-page="currentPage" :total-pages="totalPages" @page-change="currentPage = $event" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const formerTeachers = [
  { name: 'Mahmuda Ayupova', subject: 'Fizika fani', status: 'Nafaqada', years: '1995 - 2020 yillar' },
  { name: 'Ikromjon Yusupov', subject: 'Biologiya fani', status: 'Nafaqada', years: '2000 - 2022 yillar' },
  { name: "Zulayho G'anieva", subject: 'Kimyo fani', status: 'Nafaqada', years: '1990 - 2018 yillar' },
  { name: 'Baxtiyor Salimov', subject: 'Tarix fani', status: 'Nafaqada', years: '1985 - 2015 yillar' },
  { name: 'Omina Karimova', subject: 'Geografiya fani', status: 'Nafaqada', years: '1998 - 2023 yillar' },
  { name: 'Rustam Sobirov', subject: 'Jismoniy tarbiya', status: 'Nafaqada', years: '1992 - 2017 yillar' },
  { name: 'Zulfiya Orifova', subject: 'Matematika fani', status: 'Faxriy', years: '1980 - 2012 yillar' },
  { name: 'Abduhafiz Karimov', subject: "Ona tili fani", status: 'Faxriy', years: '1988 - 2019 yillar' },
  { name: 'Malika Shokirova', subject: 'Ingliz tili', status: 'Faxriy', years: '1992 - 2021 yillar' },
  { name: 'Sardor Bekov', subject: 'Informatika', status: 'Faxriy', years: '2005 - 2024 yillar' },
  { name: 'Nigora Aliyeva', subject: 'Rus tili fani', status: 'Faxriy', years: '1990 - 2020 yillar' },
  { name: "Farhod Jo'rayev", subject: 'Mehnat fani', status: 'Faxriy', years: '1985 - 2015 yillar' },
  { name: 'Gulnora Karimova', subject: 'Adabiyot fani', years: '1995 - 2022 yillar' },
  { name: 'Shavkat Ergashev', subject: 'Matematika', years: '2000 - 2024 yillar' },
  { name: "Dildora To'rayeva", subject: "Boshlang'ich", years: '1998 - 2023 yillar' },
  { name: 'Akmal Sayidov', subject: 'Kimyo fani', years: '1992 - 2018 yillar' },
  { name: 'Nigora Salomova', subject: 'Ingliz tili', years: '2005 - 2024 yillar' },
  { name: 'Sherzod Olimov', subject: 'Musiqa fani', years: '1990 - 2020 yillar' },
]

const currentPage = ref(1)
const perPage = 6
const totalPages = computed(() => Math.max(1, Math.ceil(formerTeachers.length / perPage)))
const paginatedTeachers = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return formerTeachers.slice(start, start + perPage)
})

useHead({
  title: 'Faxriy ustozlar | 10-Maktab - sobiq o\'qituvchilar',
  meta: [
    { name: 'description', content: '10-maktabda faoliyat yuritgan sobiq o\'qituvchilar haqida ma\'lumot. Maktab tarixida iz qoldirgan ustozlarimizni eslaymiz.' },
  ],
})
</script>
