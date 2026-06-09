<script setup lang="ts">
defineProps<{
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  linkTo?: string
  linkText?: string
  decorative?: boolean
}>()
</script>

<template>
  <div class="animate-on-scroll" :class="decorative ? '' : 'text-center mb-24'">
    <div v-if="decorative" class="flex items-center gap-4 mb-8">
      <span class="w-12 h-1 bg-secondary rounded-full"/>
      <span v-if="badge" class="text-secondary font-black uppercase tracking-[0.3em] text-sm">{{ badge }}</span>
    </div>
    <div v-else-if="badge" class="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
      <div class="text-center md:text-left">
        <span class="badge">{{ badge }}</span>
        <h2 class="text-4xl font-extrabold text-primary">
          {{ title }}<span v-if="highlight" class="text-secondary"> {{ highlight }}</span>
        </h2>
      </div>
      <NuxtLink
v-if="linkTo" :to="linkTo"
        class="group flex items-center gap-3 font-bold text-secondary text-lg hover:text-blue-700 transition-all">
        {{ linkText }} <i aria-hidden="true" class="fas fa-arrow-right group-hover:translate-x-2 transition-transform"/>
      </NuxtLink>
    </div>
    <div v-else>
      <span v-if="badge" class="badge">{{ badge }}</span>
      <h2 class="text-4xl md:text-5xl font-black text-primary italic">
        {{ title }}<span v-if="highlight" class="text-secondary"> {{ highlight }}</span>
      </h2>
      <p v-if="subtitle" class="text-slate-500 mt-6 max-w-[700px] mx-auto">{{ subtitle }}</p>
    </div>
  </div>
</template>
