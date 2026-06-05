<script setup lang="ts">
defineProps<{
  icon: string
  title?: string
  lines: string[]
  variant?: 'card' | 'footer' | 'compact'
  iconBg?: string
  iconColor?: string
  linkText?: string
  linkHref?: string
}>()
</script>

<template>
  <div v-if="variant === 'card'"
    class="group flex gap-8 p-10 bg-white rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05)] border border-slate-50 hover:-translate-y-2 transition-all duration-500">
    <div :class="`w-20 h-20 ${iconBg || 'bg-secondary/5'} ${iconColor || 'text-secondary'} rounded-[1.5rem] flex items-center justify-center text-3xl flex-shrink-0 group-hover:bg-${(iconBg?.match(/bg-(\w+)/) || ['', 'secondary'])[1]} group-hover:text-white transition-all duration-500`"
      :style="iconBg?.includes('green') ? 'group-hover:bg-green-500' : iconBg?.includes('accent') ? 'group-hover:bg-[#f59e0b]' : iconBg?.includes('secondary') ? '' : ''">
      <i :class="['fas', icon]" aria-hidden="true"></i>
    </div>
    <div class="flex-grow">
      <h3 class="text-2xl font-black text-primary mb-4 italic">{{ title }}</h3>
      <div class="space-y-2">
        <p v-for="line in lines" :key="line" class="text-slate-600 font-black text-lg">{{ line }}</p>
      </div>
      <a v-if="linkText" :href="linkHref || '#'"
        class="inline-block mt-4 text-secondary font-black text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
        {{ linkText }} <i aria-hidden="true" class="fas fa-external-link-alt ml-2"></i>
      </a>
    </div>
  </div>

  <li v-else-if="variant === 'footer'" class="flex items-center justify-center md:justify-start gap-4 text-slate-400">
    <i :class="['fas', icon, 'text-secondary w-5']" aria-hidden="true"></i>
    <span>{{ lines[0] }}</span>
  </li>

  <div v-else-if="variant === 'compact'"
    class="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 group hover:shadow-md transition-all">
    <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center text-xl group-hover:bg-secondary group-hover:text-white transition-all">
      <i :class="['fas', icon]" aria-hidden="true"></i>
    </div>
    <div>
      <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">{{ title }}</p>
      <p class="text-primary font-bold">{{ lines[0] }}</p>
    </div>
  </div>
</template>
