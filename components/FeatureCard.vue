<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  variant?: 'horizontal' | 'navigation' | 'mission'
  iconBg?: string
  iconColor?: string
  link?: string
  hoverLabel?: string
}>()
</script>

<template>
  <NuxtLink
v-if="variant === 'navigation'" :to="link || '#'"
    class="group bg-white p-12 rounded-[3.5rem] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05)] border border-slate-50 hover:-translate-y-5 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 animate-on-scroll text-center flex flex-col items-center">
    <div
      class="w-24 h-24 bg-secondary/5 text-secondary rounded-[2rem] flex items-center justify-center text-4xl mb-10 group-hover:bg-secondary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
      <i :class="['fas', icon]" aria-hidden="true"/>
    </div>
    <h3 class="text-2xl font-black text-primary mb-6 italic">{{ title }}</h3>
    <p class="text-slate-500 font-medium leading-relaxed mb-8">{{ description }}</p>
    <span class="inline-flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
      Batafsil <i aria-hidden="true" class="fas fa-arrow-right"/>
    </span>
  </NuxtLink>

  <div
v-else-if="variant === 'mission'"
    class="bg-white p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 animate-on-scroll group">
    <div
      :class="`w-20 h-20 ${iconBg || 'bg-red-50'} ${iconColor || 'text-red-500'} rounded-[2rem] flex items-center justify-center text-4xl mb-10 group-hover:bg-${iconBg?.replace(/[0-9]/g, '') || 'red-500'} group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-sm`">
      <i :class="['fas', icon]" aria-hidden="true"/>
    </div>
    <h3 class="text-2xl font-black text-primary mb-6 italic group-hover:text-secondary transition-colors">{{ title }}</h3>
    <p class="text-slate-500 text-lg leading-relaxed">{{ description }}</p>
    <div v-if="hoverLabel" class="mt-8 pt-8 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
      <span class="text-secondary font-bold text-sm tracking-widest uppercase italic">{{ hoverLabel }}</span>
    </div>
  </div>

  <li v-else class="flex gap-6">
    <div :class="`flex-shrink-0 w-14 h-14 ${iconBg || 'bg-secondary'} text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg`">
      <i :class="['fas', icon]" aria-hidden="true"/>
    </div>
    <div>
      <h4 class="text-xl font-bold text-primary mb-2">{{ title }}</h4>
      <p class="text-slate-500 leading-relaxed">{{ description }}</p>
    </div>
  </li>
</template>
