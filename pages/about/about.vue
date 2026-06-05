<template>
  <main>
    <section class="bg-primary pt-40 pb-24 text-white text-center relative overflow-hidden">
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50">
      </div>
      <div class="container mx-auto px-6 max-w-[900px] animate-on-scroll relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Maktabimiz Haqida <span
            class="text-secondary text-shadow-lg">Umumiy Ma'lumot</span></h1>
        <p class="text-lg md:text-xl opacity-80 leading-relaxed font-medium">Sifatli ta'lim va ma'naviy tarbiya
          maskani.</p>
      </div>
    </section>

    <section class="py-32 bg-white overflow-hidden">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div class="animate-on-scroll order-2 lg:order-1">
            <SectionHeading decorative badge="Bizning maqsad" title="Kelajak sari" highlight="birinchi qadam" />
            <div class="space-y-8 text-slate-500 leading-relaxed mb-12 text-xl font-medium">
              <p class="border-l-4 border-slate-100 pl-8">10-maktab 1990-yilda tashkil etilgan bo'lib,
                o'shandan beri minglab o'quvchilarga sifatli ta'lim berib kelmoqda. Bizning maktab
                o'zining yuqori natijalari va zamonaviy o'quv dasturlari bilan faxrlanadi.</p>
              <p class="border-l-4 border-slate-100 pl-8">Biz nafaqat bilim, balki o'quvchilarning
                iqtidorini shakllantirish, ularni vatanparvarlik ruhida tarbiyalashni asosiy maqsadimiz
                qilib belgilaganmiz.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <StatCard variant="about" icon="fa-calendar-check" number="30+ yillik" label="Akademik Tajriba" />
              <StatCard variant="about" icon="fa-user-graduate" number="1200+" label="Muvaffaqiyatli Bitiruvchilar" />
            </div>
          </div>
          <div class="relative group animate-on-scroll order-1 lg:order-2 overflow-hidden">
            <div
              class="absolute -inset-10 bg-secondary/5 rounded-full blur-[100px] group-hover:bg-secondary/10 transition-all duration-700">
            </div>
            <div
              class="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.15)] h-[300px] md:h-[450px] lg:h-[650px] border-[12px] border-white ring-1 ring-slate-100 transform rotate-1 group-hover:rotate-0 transition-all duration-700">
              <img loading="lazy" src="/assets/images/building.png" alt="Maktab binosi"
                class="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]">
              <div
                class="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60">
              </div>
            </div>
            <div
              class="absolute -bottom-10 left-0 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-bounce cursor-default">
              <div class="text-center">
                <div class="text-4xl font-black text-secondary mb-1 italic">TOP-10</div>
                <div class="text-[0.6rem] font-black text-slate-400 uppercase tracking-widest">
                  Eng yaxshi maktablar ro'yxatida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-slate-50 relative overflow-hidden">
      <div
        class="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent">
      </div>
      <div class="container mx-auto px-6 max-w-[1240px] relative z-10">
        <SectionHeading badge="Navigatsiya" title="Batafsil ma'lumotlar" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard variant="navigation" icon="fa-history" title="Maktab tarixi" description="O'tmishdan bugungacha bo'lgan shonli yo'limiz va muvaffaqiyatlarimiz haqida." link="/about/history" />
          <FeatureCard variant="navigation" icon="fa-bullseye" title="Missiya va qadriyatlar" description="Biz nimaga intilamiz, qanday tamoyillar asosida ishlaymiz va nimalarni qadrlaymiz." link="/about/mission" />
          <FeatureCard variant="navigation" icon="fa-users-cog" title="Rahbariyat" description="Maktabimizning boshqaruv jamoasi va ular bilan doimiy aloqa o'rnatish imkoniyatlari." link="/about/management" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Umumiy ma\'lumot | 10-Maktab - Chirchiqdagi ilg\'or maktab',
  meta: [
    { name: 'description', content: '10-maktab haqida umumiy ma\'lumot: 30 yillik tajriba, 1200+ bitiruvchi, zamonaviy ta\'lim. Maktabimizning tarixi, missiyasi va rahbariyati bilan tanishing.' },
    { property: 'og:title', content: 'Umumiy ma\'lumot | 10-Maktab' },
    { property: 'og:description', content: '10-maktab haqida umumiy ma\'lumot: 30 yillik tajriba, 1200+ bitiruvchi.' },
    { name: 'twitter:title', content: 'Umumiy ma\'lumot | 10-Maktab' },
    { name: 'twitter:description', content: '10-maktab haqida umumiy ma\'lumot.' },
  ],
})
</script>
