<template>
  <main>
    <PageHero gradient title="Missiya va" highlight="Qadriyatlar" subtitle="Bizning maqsadimiz va biz amal qiladigan tamoyillar." />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div
          class="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100 mb-24 animate-on-scroll relative overflow-hidden group">
          <div
            class="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full -mr-40 -mt-40 group-hover:scale-125 transition-transform duration-1000">
          </div>
          <div class="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full -ml-20 -mb-20"></div>

          <div class="relative z-10 text-center max-w-[850px] mx-auto">
            <div
              class="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary text-sm font-black rounded-xl uppercase tracking-[0.2em] mb-10 italic">
              <span class="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
              Bizning oliy maqsadimiz
            </div>
            <h2 class="text-4xl md:text-5xl font-black text-primary mb-10 italic leading-tight">Bizning
              Missiyamiz</h2>
            <div class="relative px-8 md:px-16">
              <i
                class="fas fa-quote-left absolute top-0 left-0 text-secondary/10 text-6xl md:text-8xl -translate-y-4"></i>
              <p class="text-xl md:text-2xl text-slate-600 leading-relaxed italic font-medium">"O'quvchilarga
                nafaqat bilim berish, balki ularni mustaqil fikrlaydigan, mas'uliyatli va zamonaviy dunyo
                talablariga javob bera oladigan shaxs sifatida kamol toptirish."</p>
              <i
                class="fas fa-quote-right absolute bottom-0 right-0 text-secondary/10 text-6xl md:text-8xl translate-y-4"></i>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard variant="mission" icon="fa-heart" title="Vatanparvarlik" description="O'z vatanini sevish va unga xizmat qilish hissini o'quvchilar qalbida uyg'otish." iconBg="bg-red-50" iconColor="text-red-500" hoverLabel="Asosiy tamoyil" />
          <FeatureCard variant="mission" icon="fa-lightbulb" title="Innovatsiya" description="Ta'lim jarayonida eng yangi texnologiyalardan va metodikalardan samarali foydalanish." iconBg="bg-amber-50" iconColor="text-amber-500" hoverLabel="Raqamli kelajak" />
          <FeatureCard variant="mission" icon="fa-handshake" title="Hamkorlik" description="O'qituvchi, o'quvchi va ota-onalar o'rtasida mustahkam ishonchli aloqani o'rnatish." iconBg="bg-blue-50" iconColor="text-blue-500" hoverLabel="Birlikda qudratmiz" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Missiya va qadriyatlar | 10-Maktab - sifatli ta\'lim',
  meta: [
    { name: 'description', content: '10-maktabning missiyasi, qadriyatlari va ta\'lim tamoyillari. Kelajak avlodni tarbiyalashdagi asosiy maqsad va yo\'nalishlarimiz.' },
    { property: 'og:title', content: 'Missiya va qadriyatlar | 10-Maktab' },
    { property: 'og:description', content: '10-maktabning missiyasi va qadriyatlari.' },
    { name: 'twitter:title', content: 'Missiya va qadriyatlar | 10-Maktab' },
    { name: 'twitter:description', content: '10-maktabning missiyasi va qadriyatlari.' },
  ],
})
</script>
