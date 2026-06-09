<script setup lang="ts">
const { t } = useI18n()
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
    formStatus.value = { type: 'success', text: t('admission.form.success') }
    childName.value = ''
    childSurname.value = ''
    dob.value = ''
    targetClass.value = ''
    parentName.value = ''
    phone.value = ''
    parentEmail.value = ''
    address.value = ''
  } catch {
    formStatus.value = { type: 'error', text: t('admission.form.error') }
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: computed(() => `${t('admission.hero.title')} ${t('admission.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('admission.hero.subtitle') },
    { property: 'og:title', content: computed(() => `${t('admission.hero.title')} ${t('admission.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('admission.hero.subtitle') },
    { name: 'twitter:title', content: computed(() => `${t('admission.hero.title')} ${t('admission.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('admission.hero.subtitle') },
  ],
})
</script>

<template>
  <main id="main-content">
    <PageHero gradient :title="$t('admission.hero.title')" :highlight="$t('admission.hero.highlight')" :subtitle="$t('admission.hero.subtitle')" />

    <section class="py-24 bg-background">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div class="animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-black text-primary mb-10 italic flex items-center gap-4">
              <span class="w-12 h-1 bg-secondary rounded-full"/>
              {{ $t('admission.conditions.title') }}
            </h2>
            <ul class="space-y-6 mb-12">
              <li
v-for="(item, i) in [t('admission.conditions.1'), t('admission.conditions.2'), t('admission.conditions.3'), t('admission.conditions.4')]" :key="i"
                class="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
                <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all">
                  <i aria-hidden="true" class="fas fa-check"/>
                </div>
                <span class="text-lg text-slate-600 font-medium">{{ item }}</span>
              </li>
            </ul>

            <div class="bg-amber-50 rounded-[2.5rem] p-10 border border-amber-100 relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-4 text-amber-200/50 text-8xl -rotate-12 translate-x-4 -translate-y-4">
                <i aria-hidden="true" class="fas fa-info-circle"/>
              </div>
              <h4 class="text-xl font-bold text-amber-800 mb-4 flex items-center gap-3 relative z-10 italic">
                <i aria-hidden="true" class="fas fa-exclamation-triangle"/> {{ $t('admission.warning.title') }}
              </h4>
              <p class="text-amber-900/80 leading-relaxed relative z-10 text-lg">
                {{ $t('admission.warning.text') }}
              </p>
            </div>
          </div>

          <div class="animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-black text-primary mb-12 italic flex items-center gap-4">
              <span class="w-12 h-1 bg-secondary rounded-full"/>
              {{ $t('admission.steps.title') }}
            </h2>
            <div class="space-y-8 relative before:content-[''] before:absolute before:left-8 before:top-4 before:bottom-4 before:w-1 before:bg-slate-200 before:dashed">
              <div
v-for="(step, i) in [{num: 1, title: t('admission.steps.1.title'), desc: t('admission.steps.1.desc')}, {num: 2, title: t('admission.steps.2.title'), desc: t('admission.steps.2.desc')}, {num: 3, title: t('admission.steps.3.title'), desc: t('admission.steps.3.desc')}]" :key="i"
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
            <h2 class="text-3xl font-black text-primary mb-12 text-center italic">{{ $t('admission.form.title') }}</h2>
            <form id="admission-form" action="/api/admission" method="POST" novalidate class="space-y-8" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="child-name" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.childName') }}</label>
                  <input
id="child-name" v-model="childName" type="text" name="child_name" required :placeholder="$t('admission.form.placeholder.name')"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
                <div class="space-y-2">
                  <label for="child-surname" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.childSurname') }}</label>
                  <input
id="child-surname" v-model="childSurname" type="text" name="child_surname" required :placeholder="$t('admission.form.placeholder.surname')"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="dob" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.dob') }}</label>
                  <input
id="dob" v-model="dob" type="date" name="dob" required
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
                <div class="space-y-2">
                  <label for="target-class" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.class') }}</label>
                  <select
id="target-class" v-model="targetClass" name="class" required
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                    <option value="">{{ $t('admission.form.placeholder.select') }}</option>
                    <option v-for="g in 11" :key="g" :value="g">{{ g }}-sinf</option>
                  </select>
                </div>
              </div>
              <div class="space-y-2">
                <label for="parent-name" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.parentName') }}</label>
                <input
id="parent-name" v-model="parentName" type="text" name="parent_name" required :placeholder="$t('admission.form.placeholder.parentName')"
                  class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="phone" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.phone') }}</label>
                  <input
id="phone" v-model="phone" type="tel" name="phone" required :placeholder="$t('admission.form.placeholder.phone')"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
                <div class="space-y-2">
                  <label for="parent-email" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.email') }}</label>
                  <input
id="parent-email" v-model="parentEmail" type="email" name="email" :placeholder="$t('admission.form.placeholder.email')"
                    class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold">
                </div>
              </div>
              <div class="space-y-2">
                <label for="address" class="block text-slate-400 text-xs font-bold uppercase tracking-wider">{{ $t('admission.form.address') }}</label>
                <textarea
id="address" v-model="address" name="address" rows="2" required :placeholder="$t('admission.form.placeholder.address')"
                  class="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold resize-none"/>
              </div>
              <FormStatus :status="formStatus" />
              <button
type="submit" :disabled="isSubmitting"
                class="w-full py-5 bg-secondary text-white font-black rounded-full hover:bg-blue-600 transition-all shadow-lg text-lg flex items-center justify-center gap-4 disabled:opacity-60">
                <span v-if="!isSubmitting">{{ $t('admission.form.submit') }}</span>
                <span v-else><LoadingSpinner /></span>
                <i v-if="!isSubmitting" class="fas fa-paper-plane"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
