<script setup lang="ts">
const childName = ref('')
const childSurname = ref('')
const dob = ref('')
const targetClass = ref('')
const parentName = ref('')
const phone = ref('')
const parentEmail = ref('')
const address = ref('')
const isSubmitting = ref(false)
const formStatus = ref<{ type: 'success' | 'error'; text: string } | null>(null)

async function handleSubmit() {
  const form = document.getElementById('admission-form') as HTMLFormElement | null
  if (!form || !form.checkValidity()) return
  isSubmitting.value = true
  formStatus.value = null
  try {
    await fetch(form.action, { method: 'POST', body: new FormData(form) })
    formStatus.value = { type: 'success', text: 'Arizangiz muvaffaqiyatli qabul qilindi! Tez orada siz bilan bog\'lanamiz.' }
    childName.value = ''
    childSurname.value = ''
    dob.value = ''
    targetClass.value = ''
    parentName.value = ''
    phone.value = ''
    parentEmail.value = ''
    address.value = ''
  } catch {
    formStatus.value = { type: 'error', text: 'Xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.' }
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Qabul 2026 | 10-Maktab - yangi o\'quv yili hujjatlari',
  meta: [
    { name: 'description', content: '10-maktabga qabul 2026: hujjat topshirish tartibi, talab qilinadigan hujjatlar ro\'yxati va qabul komissiyasi bilan bog\'lanish.' },
  ],
})
</script>

<template>
  <main>
    <PageHero gradient title="1-sinfga qabul -" highlight="2026/2027" subtitle="Farzandingiz kelajagi uchun eng to'g'ri va zamonaviy ta'lim maskanini tanlang." />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div class="animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-black text-primary mb-10 italic flex items-center gap-4">
              <span class="w-12 h-1 bg-secondary rounded-full"></span>
              Qabul shartlari
            </h2>
            <ul class="space-y-6 mb-12">
              <li v-for="(item, i) in ['Bolaning yoshi kamida 7 yosh bo\'lishi lozim.', 'To\'liq tibbiy ko\'rikdan o\'tgan bo\'lishi shart.', 'Tug\'ilganlik haqida guvohnoma (asli va nusxasi).', 'Ota-onaning doimiy yashash joyi haqida ma\'lumot.']" :key="i"
                class="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all">
                  <i aria-hidden="true" class="fas fa-check"></i>
                </div>
                <span class="text-lg text-slate-600 font-medium">{{ item }}</span>
              </li>
            </ul>

            <div class="bg-amber-50 rounded-[2.5rem] p-10 border border-amber-100 relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-4 text-amber-200/50 text-8xl -rotate-12 translate-x-4 -translate-y-4">
                <i aria-hidden="true" class="fas fa-info-circle"></i>
              </div>
              <h4 class="text-xl font-bold text-amber-800 mb-4 flex items-center gap-3 relative z-10 italic">
                <i aria-hidden="true" class="fas fa-exclamation-triangle"></i> Muhim eslatma
              </h4>
              <p class="text-amber-900/80 leading-relaxed relative z-10 text-lg">
                Barcha hujjatlar faqatgina <a href="https://my.maktab.uz" target="_blank" class="text-secondary font-black underline decoration-2 underline-offset-4 hover:text-blue-500">my.maktab.uz</a> yagona portali orqali iyul oyidan boshlab elektron shaklda qabul qilinadi.
              </p>
            </div>
          </div>

          <div class="animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-black text-primary mb-12 italic flex items-center gap-4">
              <span class="w-12 h-1 bg-secondary rounded-full"></span>
              Qabul bosqichlari
            </h2>
            <div class="space-y-8 relative before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-4 before:w-1 before:bg-slate-200 before:dashed">
              <div v-for="(step, i) in [{num: 1, title: 'Online ro\'yxatdan o\'tish', desc: 'Portal orqali shaxsiy ma\'lumotlarni kiritish va ariza qoldirish.'}, {num: 2, title: 'Maktabdagi suhbat', desc: 'Psixolog va pedagoglar bilan qisqa tanishuv suhbati.'}, {num: 3, title: 'Tasdiqlash va qabul', desc: 'Hujjatlar to\'liq bo\'lsa, SMS xabar orqali tasdiqlash yuboriladi.'}]" :key="i"
                class="relative pl-24 group">
                <div class="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-secondary rounded-2xl flex items-center justify-center text-2xl font-black text-secondary z-10 group-hover:bg-secondary group-hover:text-white transition-all shadow-lg">
                  {{ step.num }}
                </div>
                <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-50 group-hover:shadow-xl group-hover:-translate-y-1 transition-all">
                  <h4 class="text-xl font-black text-primary mb-3 italic">{{ step.title }}</h4>
                  <p class="text-slate-500 leading-relaxed">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-24 animate-on-scroll">
          <div class="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.08)] border border-slate-50 max-w-[800px] mx-auto">
            <h2 class="text-3xl font-black text-primary mb-12 text-center italic">Ariza topshirish</h2>
            <form id="admission-form" action="/api/admission" method="POST" @submit.prevent="handleSubmit" novalidate class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="child-name" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Farzandingiz ismi</label>
                  <input type="text" id="child-name" name="child_name" v-model="childName" required placeholder="Ism"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
                <div class="space-y-2">
                  <label for="child-surname" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Farzandingiz familiyasi</label>
                  <input type="text" id="child-surname" name="child_surname" v-model="childSurname" required placeholder="Familiya"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="dob" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Tug'ilgan sanasi</label>
                  <input type="date" id="dob" name="dob" v-model="dob" required
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
                <div class="space-y-2">
                  <label for="target-class" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Qaysi sinfga</label>
                  <select id="target-class" name="class" v-model="targetClass" required
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                    <option value="">Tanlang...</option>
                    <option value="1">1-sinf</option>
                    <option value="2">2-sinf</option>
                    <option value="3">3-sinf</option>
                    <option value="4">4-sinf</option>
                    <option value="5">5-sinf</option>
                    <option value="6">6-sinf</option>
                    <option value="7">7-sinf</option>
                    <option value="8">8-sinf</option>
                    <option value="9">9-sinf</option>
                    <option value="10">10-sinf</option>
                    <option value="11">11-sinf</option>
                  </select>
                </div>
              </div>
              <div class="space-y-2">
                <label for="parent-name" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Ota-onaning F.I.O</label>
                <input type="text" id="parent-name" name="parent_name" v-model="parentName" required placeholder="To'liq ismingiz"
                  class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="phone" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Telefon raqam</label>
                  <input type="tel" id="phone" name="phone" v-model="phone" required placeholder="+998 XX XXX-XX-XX"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
                <div class="space-y-2">
                  <label for="parent-email" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Email (ixtiyoriy)</label>
                  <input type="email" id="parent-email" name="email" v-model="parentEmail" placeholder="example@mail.com"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
              </div>
              <div class="space-y-2">
                <label for="address" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">Yashash manzili</label>
                <textarea id="address" name="address" v-model="address" rows="2" required placeholder="To'liq manzil"
                  class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold resize-none"></textarea>
              </div>
              <FormStatus :status="formStatus" />
              <button type="submit" :disabled="isSubmitting"
                class="w-full py-5 bg-secondary text-white font-black rounded-full hover:bg-blue-600 transition-all shadow-lg text-lg flex items-center justify-center gap-4 disabled:opacity-60">
                <span v-if="!isSubmitting">Arizani yuborish</span>
                <span v-else><LoadingSpinner /></span>
                <i v-if="!isSubmitting" class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
