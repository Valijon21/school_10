<script setup lang="ts">
defineProps<{
  name: string
  subject: string
  image: string
  experience?: string
  yearsRange?: string
  status?: string
  telegram?: string
  instagram?: string
  linkTo?: string
  variant: 'active' | 'former'
}>()
</script>

<template>
  <div
    class="group bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05)] border border-slate-50 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll">
    <div class="relative overflow-hidden h-96">
      <img
loading="lazy" :src="`/assets/images/${image}`" :alt="name"
        class="w-full h-full object-cover transition-all duration-1000" :class="variant === 'former' ? 'grayscale group-hover:grayscale-0' : 'group-hover:scale-110 duration-[2000ms]'">
      <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" :class="variant === 'active' ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-500' : 'opacity-60'"/>
      <div
v-if="variant === 'active'"
        class="absolute bottom-8 left-8 right-8 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
        <div class="flex justify-center gap-4">
          <a
v-if="telegram" :href="telegram"
            class="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white hover:bg-secondary transition-all">
            <i aria-hidden="true" class="fab fa-telegram-plane"/>
          </a>
          <a
v-if="instagram" :href="instagram"
            class="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white hover:bg-secondary transition-all">
            <i aria-hidden="true" class="fab fa-instagram"/>
          </a>
        </div>
      </div>
      <div v-else-if="status" class="absolute bottom-8 left-8 right-8">
        <span class="inline-block px-5 py-2 bg-secondary text-white text-[0.7rem] font-black uppercase tracking-widest rounded-full mb-4 shadow-xl">{{ status }}</span>
      </div>
    </div>
    <div class="p-10 text-center relative">
      <div
v-if="variant === 'former'"
        class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-secondary text-3xl border border-slate-50 group-hover:-translate-y-2 transition-all duration-500">
        <i aria-hidden="true" class="fas fa-award"/>
      </div>
      <p class="text-secondary font-black text-xs uppercase tracking-[0.2em] mb-3" :class="variant === 'former' ? 'mt-10' : ''">{{ subject }}</p>
      <h3 class="text-3xl font-black text-primary mb-4 italic group-hover:text-secondary transition-colors">{{ name }}</h3>
      <p v-if="yearsRange" class="flex items-center justify-center gap-3 text-slate-400 mb-8 font-medium">
        <i aria-hidden="true" class="far fa-calendar-alt text-secondary"/>
        <span>{{ yearsRange }}</span>
      </p>
      <p v-if="experience" class="text-slate-400 text-sm mb-10 flex items-center justify-center gap-3 font-medium">
        <i aria-hidden="true" class="fas fa-award text-accent"/> {{ experience }}
      </p>
      <div
v-if="variant === 'former'"
        class="h-1 w-16 bg-slate-100 mx-auto rounded-full group-hover:w-full group-hover:bg-secondary/20 transition-all duration-500"/>
      <NuxtLink
v-if="linkTo" :to="linkTo"
        class="inline-flex items-center justify-center gap-4 w-full py-5 px-8 bg-slate-50 text-primary font-black rounded-2xl hover:bg-secondary hover:text-white transition-all group/btn">
        <span>{{ $t('single.viewProfile') }}</span>
        <i aria-hidden="true" class="fas fa-arrow-right group-hover/btn:translate-x-2 transition-transform"/>
      </NuxtLink>
    </div>
  </div>
</template>
