<template>
  <main>
    <PageHero title="Maktabimiz" highlight="tarixi" subtitle="Bizning 30 yillik muvaffaqiyat yo'limiz va yutuqlarimiz." />

    <section class="py-24 bg-background overflow-hidden">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div
          class="relative before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-slate-200 lg:before:block before:hidden">
          <div class="space-y-20 relative">
            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">1990</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">Tashkil topishi</h3>
                <p class="text-slate-500 leading-relaxed">Maktabimiz o'zining birinchi o'quvchilarini qabul
                  qildi. O'sha paytda atigi 10 ta sinf xonasi bor edi va ta'lim jarayoni yangi metodikalar
                  bilan boshlangan.</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all">
              </div>
              <div class="w-full lg:w-[45%]"></div>
            </div>

            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">2005</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">Yangi bino</h3>
                <p class="text-slate-500 leading-relaxed">Maktab uchun zamonaviy, 3 qavatli yangi o'quv
                  binosi foydalanishga topshirildi. Bu o'quvchilar sonining ortishiga va sharoitlar
                  yaxshilanishiga xizmat qildi.</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all">
              </div>
              <div class="w-full lg:w-[45%]"></div>
            </div>

            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">2015</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">Raqamli ta'lim</h3>
                <p class="text-slate-500 leading-relaxed">Barcha sinf xonalari interaktiv doskalar va
                  kompyuterlar bilan jihozlandi. Maktabimiz viloyatda birinchilardan bo'lib "Smart School"
                  tizimiga o'tdi.</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all">
              </div>
              <div class="w-full lg:w-[45%]"></div>
            </div>

            <div
              class="flex flex-col lg:flex-row items-center justify-between w-full lg:even:flex-row-reverse group">
              <div
                class="w-full lg:w-[45%] p-10 bg-white rounded-[3rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-all animate-on-scroll relative">
                <span
                  class="absolute -top-6 left-10 lg:group-even:left-auto lg:group-even:right-10 px-6 py-2 bg-secondary text-white font-black rounded-xl text-lg shadow-lg">2024</span>
                <h3 class="text-2xl font-bold text-primary mb-4 mt-4 italic">Bugungi kun</h3>
                <p class="text-slate-500 leading-relaxed">Hozirgi kunda maktabimizda 1200 dan ortiq o'quvchi
                  tahsil olmoqda. Bizning bitiruvchilar dunyoning nufuzli universitetlarida bilim
                  olmoqdalar.</p>
              </div>
              <div
                class="hidden lg:flex w-12 h-12 bg-white border-4 border-secondary rounded-full items-center justify-center z-10 shadow-lg group-hover:bg-secondary group-hover:scale-125 transition-all">
              </div>
              <div class="w-full lg:w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Maktab tarixi | 10-Maktab - Chirchiq ta\'lim maskani',
  meta: [
    { name: 'description', content: '10-maktab tarixi: 1990-yilda tashkil etilgan maktabimizning o\'tmishdan bugungacha bo\'lgan shonli yo\'li va muvaffaqiyatlari.' },
    { property: 'og:title', content: 'Maktab tarixi | 10-Maktab' },
    { property: 'og:description', content: '10-maktab tarixi: 1990-yilda tashkil etilgan.' },
    { name: 'twitter:title', content: 'Maktab tarixi | 10-Maktab' },
    { name: 'twitter:description', content: '10-maktab tarixi haqida.' },
  ],
})
</script>
