<script setup lang="ts">
const { t } = useI18n()
const selectedClass = ref('5a')

const scheduleData: Record<string, Array<{ time: string; mon: string; tue: string; wed: string; thu: string; fri: string; sat: string }>> = {
  "5a": [
    { time: "08:30", mon: "Matematika", tue: "Ona tili", wed: "Ingliz tili", thu: "Tarix", fri: "Informatika", sat: "Adabiyot" },
    { time: "09:25", mon: "Ona tili", tue: "Matematika", wed: "Tarbiya", thu: "Ingliz tili", fri: "Matematika", sat: "Sport" },
    { time: "10:20", mon: "Adabiyot", tue: "Tarbiya", wed: "Matematika", thu: "Musiqa", fri: "Ingliz tili", sat: "Tasviriy san'at" },
    { time: "11:25", mon: "Sport", tue: "Ingliz tili", wed: "Ona tili", thu: "Matematika", fri: "Texnologiya", sat: "Ona tili" },
    { time: "12:20", mon: "Rus tili", tue: "Biologiya", wed: "Informatika", thu: "Geografiya", fri: "Sport", sat: "Sinf soati" }
  ],
  "5b": [
    { time: "08:30", mon: "Ona tili", tue: "Matematika", wed: "Tarix", thu: "Ingliz tili", fri: "Adabiyot", sat: "Informatika" },
    { time: "09:25", mon: "Matematika", tue: "Adabiyot", wed: "Ingliz tili", thu: "Tarbiya", fri: "Sport", sat: "Matematika" },
    { time: "10:20", mon: "Ingliz tili", tue: "Informatika", wed: "Matematika", thu: "Tasviriy san'at", fri: "Ona tili", sat: "Tarbiya" },
    { time: "11:25", mon: "Tarix", tue: "Sport", wed: "Texnologiya", thu: "Ona tili", fri: "Matematika", sat: "Musiqa" },
    { time: "12:20", mon: "Biologiya", tue: "Rus tili", wed: "Sport", thu: "Geografiya", fri: "Sinf soati", sat: "Informatika" }
  ],
  "6a": [
    { time: "08:30", mon: "Tarix", tue: "Ingliz tili", wed: "Matematika", thu: "Biologiya", fri: "Ona tili", sat: "Sport" },
    { time: "09:25", mon: "Matematika", tue: "Ona tili", wed: "Adabiyot", thu: "Geografiya", fri: "Ingliz tili", sat: "Tarix" },
    { time: "10:20", mon: "Informatika", tue: "Matematika", wed: "Tasviriy san'at", thu: "Ingliz tili", fri: "Tarbiya", sat: "Biologiya" },
    { time: "11:25", mon: "Adabiyot", tue: "Texnologiya", wed: "Sport", thu: "Matematika", fri: "Musiqa", sat: "Ona tili" },
    { time: "12:20", mon: "Botanika", tue: "Rus tili", wed: "Sinf soati", thu: "Tarbiya", fri: "Informatika", sat: "Sport" }
  ],
  "6b": [
    { time: "08:30", mon: "Matematika", tue: "Tarix", wed: "Ona tili", thu: "Ingliz tili", fri: "Sport", sat: "Adabiyot" },
    { time: "09:25", mon: "Ingliz tili", tue: "Matematika", wed: "Biologiya", thu: "Ona tili", fri: "Tarix", sat: "Informatika" },
    { time: "10:20", mon: "Ona tili", tue: "Adabiyot", wed: "Matematika", thu: "Tarbiya", fri: "Geografiya", sat: "Rus tili" },
    { time: "11:25", mon: "Biologiya", tue: "Sport", wed: "Informatika", thu: "Texnologiya", fri: "Adabiyot", sat: "Matematika" },
    { time: "12:20", mon: "Tarbiya", tue: "Musiqa", wed: "Sinf soati", thu: "Tasviriy san'at", fri: "Sport", sat: "Ona tili" }
  ],
  "7a": [
    { time: "08:30", mon: "Algebra", tue: "Fizika", wed: "Ona tili", thu: "Kimyo", fri: "Ingliz tili", sat: "Tarix" },
    { time: "09:25", mon: "Geometriya", tue: "Adabiyot", wed: "Algebra", thu: "Biologiya", fri: "Tarix", sat: "Sport" },
    { time: "10:20", mon: "Fizika", tue: "Ingliz tili", wed: "Kimyo", thu: "Informatika", fri: "Ona tili", sat: "Geografiya" },
    { time: "11:25", mon: "Ingliz tili", tue: "Algebra", wed: "Sport", thu: "Rus tili", fri: "Adabiyot", sat: "Fizika" },
    { time: "12:20", mon: "Tarix", tue: "Huquq", wed: "Sinf soati", thu: "Tarbiya", fri: "Sport", sat: "Musiqa" }
  ],
  "7b": [
    { time: "08:30", mon: "Fizika", tue: "Algebra", wed: "Kimyo", thu: "Ona tili", fri: "Tarix", sat: "Ingliz tili" },
    { time: "09:25", mon: "Algebra", tue: "Ingliz tili", wed: "Fizika", thu: "Adabiyot", fri: "Sport", sat: "Geometriya" },
    { time: "10:20", mon: "Kimyo", tue: "Geografiya", wed: "Ona tili", thu: "Algebra", fri: "Informatika", sat: "Tarix" },
    { time: "11:25", mon: "Adabiyot", tue: "Fizika", wed: "Tarix", thu: "Ingliz tili", fri: "Algebra", sat: "Rus tili" },
    { time: "12:20", mon: "Sport", tue: "Tarbiya", wed: "Sinf soati", thu: "Huquq", fri: "Biologiya", sat: "Sport" }
  ],
  "8a": [
    { time: "08:30", mon: "Kimyo", tue: "Fizika", wed: "Algebra", thu: "Ingliz tili", fri: "Tarix", sat: "Biologiya" },
    { time: "09:25", mon: "Fizika", tue: "Algebra", wed: "Kimyo", thu: "Ona tili", fri: "Sport", sat: "Geometriya" },
    { time: "10:20", mon: "Algebra", tue: "Informatika", wed: "Fizika", thu: "Adabiyot", fri: "Huquq", sat: "Rus tili" },
    { time: "11:25", mon: "Ona tili", tue: "Ingliz tili", wed: "Sport", thu: "Geografiya", fri: "Tarix", sat: "Algebra" },
    { time: "12:20", mon: "Tadbirkorlik", tue: "Adabiyot", wed: "Sinf soati", thu: "Tarbiya", fri: "Informatika", sat: "Sport" }
  ],
  "8b": [
    { time: "08:30", mon: "Algebra", tue: "Kimyo", wed: "Fizika", thu: "Tarix", fri: "Ingliz tili", sat: "Ona tili" },
    { time: "09:25", mon: "Ingliz tili", tue: "Fizika", wed: "Ona tili", thu: "Algebra", fri: "Biologiya", sat: "Sport" },
    { time: "10:20", mon: "Fizika", tue: "Algebra", wed: "Adabiyot", thu: "Kimyo", fri: "Geografiya", sat: "Informatika" },
    { time: "11:25", mon: "Tarix", tue: "Sport", wed: "Algebra", thu: "Informatika", fri: "Rus tili", sat: "Fizika" },
    { time: "12:20", mon: "Adabiyot", tue: "Huquq", wed: "Sinf soati", thu: "Tadbirkorlik", fri: "Tarbiya", sat: "Ona tili" }
  ],
  "9a": [
    { time: "08:30", mon: "Algebra", tue: "Kimyo", wed: "Fizika", thu: "Ingliz tili", fri: "Biologiya", sat: "Tarix" },
    { time: "09:25", mon: "Fizika", tue: "Algebra", wed: "Kimyo", thu: "Ona tili", fri: "Sport", sat: "Geometriya" },
    { time: "10:20", mon: "Geometriya", tue: "Informatika", wed: "Tarix", thu: "Adabiyot", fri: "Ingliz tili", sat: "Ona tili" },
    { time: "11:25", mon: "Adabiyot", tue: "Sport", wed: "Algebra", thu: "Geografiya", fri: "Rus tili", sat: "Fizika" },
    { time: "12:20", mon: "Huquq", tue: "Iqtisodiyot", wed: "Sinf soati", thu: "Tarbiya", fri: "Informatika", sat: "Tarix" }
  ],
  "9b": [
    { time: "08:30", mon: "Fizika", tue: "Kimyo", wed: "Biologiya", thu: "Matematika", fri: "Tarix", sat: "Ingliz tili" },
    { time: "09:25", mon: "Geometriya", tue: "Adabiyot", wed: "Ona tili", thu: "Fizika", fri: "Sport", sat: "Rus tili" },
    { time: "10:20", mon: "Ingliz tili", tue: "Tarix", wed: "Matematika", thu: "Kimyo", fri: "Ona tili", sat: "Geometriya" },
    { time: "11:25", mon: "Adabiyot", tue: "Informatika", wed: "Rus tili", thu: "Sport", fri: "Biologiya", sat: "Fizika" },
    { time: "12:20", mon: "Huquq", tue: "Iqtisodiyot", wed: "Tarbiya", thu: "Geografiya", fri: "Ona tili", sat: "Sinf soati" }
  ],
  "10a": [
    { time: "08:30", mon: "Algebra", tue: "Adabiyot", wed: "Fizika", thu: "Ingliz tili", fri: "Kimyo", sat: "Tarix" },
    { time: "09:25", mon: "Fizika", tue: "Algebra", wed: "Ona tili", thu: "Fizika", fri: "Sport", sat: "Informatika" },
    { time: "10:20", mon: "Kimyo", tue: "Ona tili", wed: "Algebra", thu: "Tarix", fri: "Biologiya", sat: "Geometriya" },
    { time: "11:25", mon: "Ona tili", tue: "Sport", wed: "Adabiyot", thu: "Astronomiya", fri: "Ingliz tili", sat: "Huquq" },
    { time: "12:20", mon: "Iqtisodiyot", tue: "Informatika", wed: "Sinf soati", thu: "Tarbiya", fri: "Rus tili", sat: "Fizika" }
  ],
  "10b": [
    { time: "08:30", mon: "Adabiyot", tue: "Algebra", wed: "Ingliz tili", thu: "Fizika", fri: "Tarix", sat: "Kimyo" },
    { time: "09:25", mon: "Algebra", tue: "Ona tili", wed: "Kimyo", thu: "Algebra", fri: "Sport", sat: "Biologiya" },
    { time: "10:20", mon: "Fizika", tue: "Tarix", wed: "Adabiyot", thu: "Informatika", fri: "Ona tili", sat: "Algebra" },
    { time: "11:25", mon: "Sport", tue: "Kimyo", wed: "Ona tili", thu: "Ingliz tili", fri: "Huquq", sat: "Astronomiya" },
    { time: "12:20", mon: "Informatika", tue: "Iqtisodiyot", wed: "Sinf soati", thu: "Tarbiya", fri: "Fizika", sat: "Rus tili" }
  ],
  "11a": [
    { time: "08:30", mon: "Matematika", tue: "Ingliz tili", wed: "Fizika", thu: "Ona tili", fri: "Adabiyot", sat: "Tarix" },
    { time: "09:25", mon: "Fizika", tue: "Matematika", wed: "Kimyo", thu: "Tarix", fri: "Sport", sat: "Informatika" },
    { time: "10:20", mon: "Kimyo", tue: "Ona tili", wed: "Algebra", thu: "Geografiya", fri: "Huquq", sat: "Ingliz tili" },
    { time: "11:25", mon: "Rus tili", tue: "Astronomiya", wed: "Sport", thu: "Informatika", fri: "Matematika", sat: "Iqtisodiyot" },
    { time: "12:20", mon: "Biologiya", tue: "Adabiyot", wed: "Sinf soati", thu: "Tarbiya", fri: "Fizika", sat: "Huquq" }
  ],
  "11b": [
    { time: "08:30", mon: "Ingliz tili", tue: "Matematika", wed: "Ona tili", thu: "Fizika", fri: "Adabiyot", sat: "Kimyo" },
    { time: "09:25", mon: "Matematika", tue: "Fizika", wed: "Tarix", thu: "Informatika", fri: "Sport", sat: "Rus tili" },
    { time: "10:20", mon: "Fizika", tue: "Kimyo", wed: "Adabiyot", thu: "Algebra", fri: "Ingliz tili", sat: "Matematika" },
    { time: "11:25", mon: "Sport", tue: "Informatika", wed: "Algebra", thu: "Huquq", fri: "Astronomiya", sat: "Biologiya" },
    { time: "12:20", mon: "Iqtisodiyot", tue: "Ona tili", wed: "Sinf soati", thu: "Tarbiya", fri: "Tarix", sat: "Fizika" }
  ]
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const
const dayLabels = computed(() => ({
  mon: t('schedule.days.mon'),
  tue: t('schedule.days.tue'),
  wed: t('schedule.days.wed'),
  thu: t('schedule.days.thu'),
  fri: t('schedule.days.fri'),
  sat: t('schedule.days.sat'),
}))

const currentSchedule = computed(() => scheduleData[selectedClass.value] || [])

const classes = ['5a', '5b', '6a', '6b', '7a', '7b', '8a', '8b', '9a', '9b', '10a', '10b', '11a', '11b']

function subjectLabel(key: string): string {
  const labels: Record<string, string> = {
    'Matematika': t('schedule.subjects.Matematika'),
    'Ona tili': t('schedule.subjects["Ona tili"]'),
    'Ingliz tili': t('schedule.subjects["Ingliz tili"]'),
    'Tarix': t('schedule.subjects.Tarix'),
    'Informatika': t('schedule.subjects.Informatika'),
    'Adabiyot': t('schedule.subjects.Adabiyot'),
    'Tarbiya': t('schedule.subjects.Tarbiya'),
    'Sport': t('schedule.subjects.Sport'),
    'Texnologiya': t('schedule.subjects.Texnologiya'),
    'Musiqa': t('schedule.subjects.Musiqa'),
    'Rus tili': t('schedule.subjects["Rus tili"]'),
    'Biologiya': t('schedule.subjects.Biologiya'),
    'Geografiya': t('schedule.subjects.Geografiya'),
    'Sinf soati': t('schedule.subjects["Sinf soati"]'),
    "Tasviriy san'at": t('schedule.subjects["Tasviriy san\'at"]'),
    'Botanika': t('schedule.subjects.Botanika'),
    'Fizika': t('schedule.subjects.Fizika'),
    'Algebra': t('schedule.subjects.Algebra'),
    'Geometriya': t('schedule.subjects.Geometriya'),
    'Kimyo': t('schedule.subjects.Kimyo'),
    'Huquq': t('schedule.subjects.Huquq'),
    'Iqtisodiyot': t('schedule.subjects.Iqtisodiyot'),
    'Tadbirkorlik': t('schedule.subjects.Tadbirkorlik'),
    'Astronomiya': t('schedule.subjects.Astronomiya'),
  }
  return labels[key] || key
}

useHead({
  title: computed(() => `${t('schedule.hero.title')} ${t('schedule.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('schedule.hero.subtitle') },
    { property: 'og:title', content: computed(() => `${t('schedule.hero.title')} ${t('schedule.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('schedule.hero.subtitle') },
    { name: 'twitter:title', content: computed(() => `${t('schedule.hero.title')} ${t('schedule.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('schedule.hero.subtitle') },
  ],
})
</script>

<template>
  <main id="main-content">
    <PageHero gradient :title="$t('schedule.hero.title')" :highlight="$t('schedule.hero.highlight')" :subtitle="$t('schedule.hero.subtitle')" />

    <section class="py-24 bg-background min-h-screen">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50 animate-on-scroll">
          <div class="flex flex-col sm:flex-row items-center gap-8 w-full md:w-auto">
            <label for="class-select" class="font-black text-primary italic uppercase tracking-widest text-sm">{{ $t('schedule.selectLabel') }}</label>
            <div class="relative w-full sm:w-80 group">
              <select
id="class-select" v-model="selectedClass"
                class="appearance-none w-full bg-slate-50 border-2 border-slate-100 py-4 px-8 rounded-2xl font-black text-primary focus:border-secondary focus:bg-white focus:shadow-xl focus:outline-none transition-all cursor-pointer">
                <option v-for="c in classes" :key="c" :value="c">{{ c.toUpperCase().charAt(0) + '-' + c.charAt(1).toUpperCase() }} {{ $t('schedule.selectLabel').replace(':', '') }}</option>
              </select>
              <i aria-hidden="true" class="fas fa-search absolute right-8 top-1/2 -translate-y-1/2 text-secondary pointer-events-none group-hover:scale-110 transition-all"/>
            </div>
          </div>
          <div class="flex gap-4 w-full md:w-auto">
            <button
class="flex-1 md:flex-none flex items-center justify-center gap-4 px-10 py-4 bg-secondary text-white font-black rounded-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-xl shadow-secondary/20"
              @click="window.print()">
              <i aria-hidden="true" class="fas fa-print"/> <span>{{ $t('schedule.print') }}</span>
            </button>
            <button class="flex items-center justify-center w-14 h-14 bg-white border-2 border-slate-100 text-slate-400 rounded-2xl hover:text-secondary hover:border-secondary transition-all">
              <i aria-hidden="true" class="fas fa-download"/>
            </button>
          </div>
        </div>

        <div class="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden animate-on-scroll relative group">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr class="bg-slate-50 border-b-2 border-slate-100">
                  <th class="py-6 px-8 text-xs font-black text-secondary tracking-[0.3em] uppercase italic w-[150px] text-center">{{ $t('schedule.time') }}</th>
                  <th v-for="d in days" :key="d" class="py-6 px-6 font-black text-primary uppercase tracking-widest text-sm italic text-center">{{ dayLabels[d] }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-50">
                <tr v-for="(row, index) in currentSchedule" :key="index" class="hover:bg-blue-50/30 transition-colors group/row">
                  <td class="py-6 px-8 text-center">
                    <span class="inline-block font-black text-secondary bg-blue-50 px-4 py-2 rounded-xl text-sm italic border border-blue-100/50 group-hover/row:bg-secondary group-hover/row:text-white transition-all duration-300">{{ row.time }}</span>
                  </td>
                  <td v-for="d in days" :key="d" class="p-4">
                    <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300 group">
                      <span class="block font-bold text-primary text-[0.9rem] mb-1 group-hover:text-secondary transition-colors italic leading-tight">{{ subjectLabel(row[d]) }}</span>
                      <div class="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span class="w-1.5 h-1.5 bg-secondary rounded-full"/>
                        <span class="text-[0.65rem] text-slate-500 font-bold uppercase tracking-wider">{{ $t('schedule.tooltip') }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="xl:hidden p-4 bg-slate-50 text-center flex items-center justify-center gap-2 text-slate-400 text-xs font-bold animate-pulse border-t border-slate-100">
            <i aria-hidden="true" class="fas fa-arrows-alt-h text-secondary"/> {{ $t('schedule.scrollHint') }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
