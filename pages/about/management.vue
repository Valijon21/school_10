<template>
  <main>
    <PageHero gradient title="Maktab" highlight="Rahbariyati" subtitle="Bizning tajribali va fidoyi rahbarlarimiz bilan tanishing." />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="mb-24 animate-on-scroll">
          <div
            class="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row items-center group">
            <div class="w-full md:w-2/5 h-[400px] md:h-[500px] bg-slate-200 relative overflow-hidden">
              <img loading="lazy" src="/assets/images/director.svg" alt="Maktab Direktori"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000">
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
            </div>
            <div class="w-full md:w-3/5 p-10 md:p-16">
              <div
                class="inline-flex items-center gap-2 px-6 py-2 bg-secondary/10 text-secondary text-sm font-black rounded-xl uppercase tracking-[0.2em] mb-8 italic">
                Maktab Direktori
              </div>
              <h2 class="text-3xl md:text-4xl font-black text-primary mb-6 italic">Eshmatov Toshmat G'ulomovich</h2>
              <p class="text-slate-500 text-lg leading-relaxed mb-10">
                "Ta'lim - bu hayotga tayyorgarlik emas, ta'limning o'zi hayotdir. Bizning maqsadimiz har bir
                o'quvchining ichki salohiyatini yuzaga chiqarish va ularga yorqin kelajak poydevorini
                qurishda ko'maklashishdir."
              </p>
              <ul class="space-y-4 mb-10">
                <li class="flex items-center gap-4 text-slate-600">
                  <div
                    class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <i aria-hidden="true" class="fas fa-clock"></i>
                  </div>
                  <span>Qabul vaqti: Dushanba - Juma, 09:00 - 17:00</span>
                </li>
                <li class="flex items-center gap-4 text-slate-600">
                  <div
                    class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-secondary shadow-sm">
                    <i aria-hidden="true" class="fas fa-phone-alt"></i>
                  </div>
                  <span>+998 (71) 123-45-67</span>
                </li>
              </ul>
              <div class="flex gap-4">
                <a href="#"
                  class="px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-light transition-all flex items-center gap-2">
                  <i aria-hidden="true" class="fas fa-envelope"></i> Xabar yuborish
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h3 class="text-3xl font-black text-primary italic mb-12 flex items-center gap-4">
            <span class="w-12 h-1 text-secondary bg-secondary rounded-full"></span>
            Direktor o'rinbosarlari
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              class="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
              <div class="h-[300px] bg-slate-200 relative overflow-hidden">
                <img loading="lazy" src="/assets/images/deputy1.svg" alt="Karimova Guli - O'quv ishlari bo'yicha direktor o'rinbosari"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute top-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider italic">
                  O'quv ishlari
                </div>
              </div>
              <div class="p-8">
                <h4 class="text-xl font-black text-primary mb-2 italic">Karimova Guli Baxtiyorovna</h4>
                <p class="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">O'quv ishlari
                  bo'yicha direktor o'rinbosari</p>
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <i aria-hidden="true" class="fas fa-phone-alt text-secondary"></i>
                  <span>+998 (90) 111-22-33</span>
                </div>
                <div
                  class="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-secondary font-bold text-sm italic">Batafsil</span>
                  <i aria-hidden="true" class="fas fa-arrow-right text-secondary animate-bounce-x"></i>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
              <div class="h-[300px] bg-slate-200 relative overflow-hidden">
                <img loading="lazy" src="/assets/images/deputy2.svg" alt="Sultonov Alisher - Ma'naviy-ma'rifiy ishlar bo'yicha o'rinbosar"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute top-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider italic">
                  Ma'naviy-ma'rifiy
                </div>
              </div>
              <div class="p-8">
                <h4 class="text-xl font-black text-primary mb-2 italic">Sultonov Alisher Akmalovich</h4>
                <p class="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">Ma'naviy-ma'rifiy
                  ishlar bo'yicha o'rinbosari</p>
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <i aria-hidden="true" class="fas fa-phone-alt text-secondary"></i>
                  <span>+998 (90) 444-55-66</span>
                </div>
                <div
                  class="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-secondary font-bold text-sm italic">Batafsil</span>
                  <i aria-hidden="true" class="fas fa-arrow-right text-secondary animate-bounce-x"></i>
                </div>
              </div>
            </div>

            <div
              class="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
              <div class="h-[300px] bg-slate-200 relative overflow-hidden">
                <img loading="lazy" src="/assets/images/deputy3.svg" alt="Nazarov Bekzod - Xo'jalik ishlari bo'yicha o'rinbosar"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div
                  class="absolute top-4 right-4 px-4 py-2 bg-secondary/90 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase tracking-wider italic">
                  Xo'jalik ishlari
                </div>
              </div>
              <div class="p-8">
                <h4 class="text-xl font-black text-primary mb-2 italic">Nazarov Bekzod Rustamovich</h4>
                <p class="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">Xo'jalik ishlari
                  bo'yicha o'rinbosar</p>
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-6">
                  <i aria-hidden="true" class="fas fa-phone-alt text-secondary"></i>
                  <span>+998 (90) 777-88-99</span>
                </div>
                <div
                  class="pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="text-secondary font-bold text-sm italic">Batafsil</span>
                  <i aria-hidden="true" class="fas fa-arrow-right text-secondary animate-bounce-x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Rahbariyat | 10-Maktab - direktor va o\'rinbosarlar',
  meta: [
    { name: 'description', content: '10-maktab rahbariyati: direktor va direktor o\'rinbosarlari haqida to\'liq ma\'lumot. Maktab boshqaruvi jamoasi bilan tanishing.' },
    { property: 'og:title', content: 'Rahbariyat | 10-Maktab' },
    { property: 'og:description', content: '10-maktab rahbariyati haqida.' },
    { name: 'twitter:title', content: 'Rahbariyat | 10-Maktab' },
    { name: 'twitter:description', content: '10-maktab rahbariyati haqida.' },
  ],
})
</script>
