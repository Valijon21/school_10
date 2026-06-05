<script setup lang="ts">
defineProps<{
  icon: string
  number: string
  label: string
  variant?: 'index' | 'about'
}>()
</script>

<template>
  <div
    class="group" :class="variant === 'about' ? 'p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500' : 'bg-white p-10 rounded-3xl text-center shadow-xl border border-slate-100 hover:-translate-y-2 hover:border-secondary transition-all animate-on-scroll'">
    <div v-if="variant === 'about'"
      class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-secondary text-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
      <i :class="['fas', icon]" aria-hidden="true"></i>
    </div>
    <i v-else :class="['fas', icon, 'text-5xl text-secondary mb-6 group-hover:scale-110 transition-transform']" aria-hidden="true"></i>
    <p class="text-4xl font-extrabold text-primary mb-2" :class="variant === 'about' ? 'italic font-black' : ''">{{ number }}</p>
    <p class="text-slate-500 font-semibold uppercase tracking-wider text-sm" :class="variant === 'about' ? 'text-slate-400 font-black text-xs tracking-[0.2em]' : ''">{{ label }}</p>
  </div>
</template>
