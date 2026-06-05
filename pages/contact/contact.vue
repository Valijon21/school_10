<script setup lang="ts">
const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const formStatus = ref<{ type: 'success' | 'error'; text: string } | null>(null)

async function handleSubmit() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  if (!form || !form.checkValidity()) return
  isSubmitting.value = true
  formStatus.value = null
  try {
    await fetch(form.action, { method: 'POST', body: new FormData(form) })
    formStatus.value = { type: 'success', text: 'Xabaringiz muvaffaqiyatli yuborildi!' }
    name.value = ''
    email.value = ''
    message.value = ''
  } catch {
    formStatus.value = { type: 'error', text: 'Xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.' }
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Kontakt | 10-Maktab - manzil, telefon va bog\'lanish',
  meta: [
    { name: 'description', content: '10-maktab bilan bog\'lanish: manzil, telefon raqam, elektron pochta va xarita. Fikr-mulohaza qoldirish uchun aloqa ma\'lumotlari.' },
  ],
})
</script>

<template>
  <main>
    <PageHero gradient title="Biz bilan" highlight="bog'laning" subtitle="Savollaringiz bo'lsa, xabar qoldiring yoki to'g'ridan-to'g'ri raqamlarimizga qo'ng'iroq qiling." />

    <section class="py-24 bg-background overflow-hidden relative">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.08)] border border-slate-50 animate-on-scroll">
            <h2 class="text-3xl font-black text-primary mb-12 italic">Xabar Yuborish</h2>
            <form id="contact-form" class="space-y-10 focus-group" action="/api/contact" method="POST" @submit.prevent="handleSubmit" novalidate>
              <FormInput label="To'liq ismingiz" icon="fa-user" placeholder="Ismingizni kiriting" v-model="name" />
              <FormInput label="Email manzilingiz" icon="fa-envelope" placeholder="example@mail.com" type="email" v-model="email" />
              <FormInput label="Xabar mazmuni" icon="fa-comment-dots" placeholder="Xabaringizni bu yerda yozing..." type="textarea" v-model="message" />
              <FormStatus :status="formStatus" />
              <button type="submit" :disabled="isSubmitting"
                class="group/btn w-full py-6 bg-secondary text-white font-black rounded-full hover:bg-blue-600 transition-all shadow-[0_15px_30px_-5px_rgba(59,130,246,0.3)] text-lg uppercase tracking-widest flex items-center justify-center gap-4 disabled:opacity-60">
                <span v-if="!isSubmitting">Xabarni yuborish</span>
                <span v-else><LoadingSpinner /></span>
                <i v-if="!isSubmitting" class="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
              </button>
            </form>
          </div>

          <div class="space-y-8 animate-on-scroll">
            <ContactBlock variant="card" icon="fa-map-marked-alt" title="Manzilimiz" :lines="['Toshkent viloyati, Chirchiq shahri, Amir Temur ko\'chasi, 10-uy']" linkText="Xaritadan ko'rish" />

            <ContactBlock variant="card" icon="fa-phone-volume" title="Aloqa" :lines="['+998 (71) 234-56-78', '+998 (90) 123-45-67']" iconBg="bg-green-50" iconColor="text-green-500" />

            <ContactBlock variant="card" icon="fa-at" title="Elektron Pochta" :lines="['info@10-maktab.uz', 'support@10-maktab.uz']" iconBg="bg-amber-50" iconColor="text-amber-500" />

            <div class="relative rounded-[3rem] overflow-hidden shadow-2xl h-72 group">
              <img loading="lazy" src="/assets/images/building.png" alt="Maktab Binosi" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]">
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div class="absolute bottom-8 left-8">
                <span class="px-4 py-2 bg-secondary text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full">Asosiy Bino</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
