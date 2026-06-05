<template>
  <main>
    <section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 text-white overflow-hidden">
      <img src="/assets/images/building.png" alt="Maktab binosi" class="absolute inset-0 w-full h-full object-cover" fetchpriority="high">
      <div class="absolute inset-0 bg-slate-900/75 z-10"></div>
      <div class="container mx-auto px-6 relative z-20 max-w-[900px] text-center animate-on-scroll">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
          Kelajakni biz bilan <span class="text-secondary">birga quring</span>
        </h1>
        <p class="text-lg md:text-xl opacity-90 mb-12 max-w-[700px] mx-auto leading-relaxed">
          10-sonli umumta'lim maktabi - bu erda biz har bir o'quvchining individual qobiliyatlarini
          rivojlantiramiz va ularni muvaffaqiyatli kelajakka tayyorlaymiz.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink to="/about/about"
            class="px-10 py-4 bg-secondary text-white font-bold rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all">Batafsil
            ma'lumot</NuxtLink>
          <NuxtLink to="/admission/admission"
            class="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all">Hujjat
            topshirish</NuxtLink>
        </div>
      </div>
    </section>

    <section class="relative z-30 -mt-16">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon="fa-user-graduate" number="1,200+" label="O'quvchilar" />
          <StatCard icon="fa-chalkboard-teacher" number="85+" label="O'qituvchilar" />
          <StatCard icon="fa-award" number="150+" label="Yutuqlar" />
          <StatCard icon="fa-university" number="25+" label="Sinfxonalar" />
        </div>
      </div>
    </section>

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <SectionHeading badge="Yangiliklar" title="Maktab hayotidan" highlight="lavhalar" linkTo="/news/news" linkText="Barcha yangiliklar" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsCard v-for="item in topNews" :key="item.id" :item="item" :styles="categoryStyles" variant="index" />
        </div>
      </div>
    </section>

    <section class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="relative group animate-on-scroll overflow-hidden">
            <div class="absolute -inset-4 bg-secondary/10 rounded-[2rem] blur-2xl group-hover:bg-secondary/20 transition-all">
            </div>
            <div class="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img loading="lazy" src="/assets/images/classroom.png" alt="Maktab xayoti"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            </div>
            <div class="absolute -bottom-10 right-0 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary text-3xl">
                  <i aria-hidden="true" class="fas fa-certificate"></i>
                </div>
                <div>
                  <p class="text-primary font-bold text-xl">Top Reyting</p>
                  <p class="text-slate-500 text-sm">Viloyatda 1-o'rin</p>
                </div>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll">
            <SectionHeading badge="Biz haqimizda" title="Nima uchun aynan" highlight="bizning maktab?" class="mb-8" />
            <ul class="space-y-8">
              <FeatureCard icon="fa-laptop-code" title="Zamonaviy texnologiyalar" description="Har bir sinfxona interaktiv doskalar va yuqori tezlikdagi internet bilan ta'minlangan." iconBg="bg-secondary" />
              <FeatureCard icon="fa-users" title="Malakali ustozlar" description="Bizning o'qituvchilarimiz o'z fanining ustalari va doimiy mahorat oshiruvchi mutaxassislardir." iconBg="bg-accent" />
              <FeatureCard icon="fa-futbol" title="Sinfdan tashqari to'garaklar" description="Sport, san'at va IT yo'nalishlarida 20 dan ortiq bepul to'garaklar mavjud." iconBg="bg-primary" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { newsList, categoryStyles } = useData()
const topNews = computed(() => newsList.slice(0, 6))

useHead({
  title: '10-Maktab - 10-sonli Chirchiq umumta\'lim maktabi',
  meta: [
    { name: 'description', content: '10-sonli umumta\'lim maktabining rasmiy veb-sayti. Chirchiqdagi eng ilg\'or maktablardan biri haqida to\'liq ma\'lumot: yangiliklar, dars jadvali, qabul va boshqalar.' },
  ],
})
</script>
