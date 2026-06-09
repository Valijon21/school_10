<script setup lang="ts">
const { t } = useI18n()
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
    formStatus.value = { type: 'success', text: t('contact.form.success') }
    name.value = ''
    email.value = ''
    message.value = ''
  } catch {
    formStatus.value = { type: 'error', text: t('contact.form.error') }
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: computed(() => `${t('contact.hero.title')} ${t('contact.hero.highlight')} | 10-MAKTAB`),
  meta: [
    { name: 'description', content: t('contact.hero.subtitle') },
    { property: 'og:title', content: computed(() => `${t('contact.hero.title')} ${t('contact.hero.highlight')} | 10-MAKTAB`) },
    { property: 'og:description', content: t('contact.hero.subtitle') },
    { name: 'twitter:title', content: computed(() => `${t('contact.hero.title')} ${t('contact.hero.highlight')} | 10-MAKTAB`) },
    { name: 'twitter:description', content: t('contact.hero.subtitle') },
  ],
})
</script>

<template>
  <main id="main-content">
    <PageHero gradient :title="$t('contact.hero.title')" :highlight="$t('contact.hero.highlight')" :subtitle="$t('contact.hero.subtitle')" />

    <section class="py-24 bg-background overflow-hidden relative">
      <div class="container mx-auto px-6 max-w-[1240px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.08)] border border-slate-50 animate-on-scroll">
            <h2 class="text-3xl font-black text-primary mb-12 italic">{{ $t('contact.form.title') }}</h2>
            <form id="contact-form" class="space-y-10 focus-group" action="/api/contact" method="POST" novalidate @submit.prevent="handleSubmit">
              <FormInput v-model="name" :label="$t('contact.form.name')" icon="fa-user" :placeholder="$t('contact.form.placeholder.name')" />
              <FormInput v-model="email" :label="$t('contact.form.email')" icon="fa-envelope" :placeholder="$t('contact.form.placeholder.email')" type="email" />
              <FormInput v-model="message" :label="$t('contact.form.message')" icon="fa-comment-dots" :placeholder="$t('contact.form.placeholder.message')" type="textarea" />
              <FormStatus :status="formStatus" />
              <button
type="submit" :disabled="isSubmitting"
                class="group/btn w-full py-6 bg-secondary text-white font-black rounded-full hover:bg-blue-600 transition-all shadow-[0_15px_30px_-5px_rgba(59,130,246,0.3)] text-lg uppercase tracking-widest flex items-center justify-center gap-4 disabled:opacity-60">
                <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
                <span v-else><LoadingSpinner /></span>
                <i v-if="!isSubmitting" class="fas fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
              </button>
            </form>
          </div>

          <div class="space-y-8 animate-on-scroll">
            <ContactBlock variant="card" icon="fa-map-marked-alt" :title="$t('contact.address.title')" :lines="[t('contact.address.line')]" :link-text="$t('contact.address.link')" />

            <ContactBlock variant="card" icon="fa-phone-volume" :title="$t('contact.phone.title')" :lines="['+998 (71) 234-56-78', '+998 (90) 123-45-67']" icon-bg="bg-green-50" icon-color="text-green-500" />

            <ContactBlock variant="card" icon="fa-at" :title="$t('contact.email.title')" :lines="['info@10-maktab.uz', 'support@10-maktab.uz']" icon-bg="bg-amber-50" icon-color="text-amber-500" />

            <div class="relative rounded-[3rem] overflow-hidden shadow-2xl h-72 group">
              <img loading="lazy" src="/assets/images/building.png" alt="Maktab Binosi" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]">
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"/>
              <div class="absolute bottom-8 left-8">
                <span class="px-4 py-2 bg-secondary text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full">{{ $t('contact.building') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
