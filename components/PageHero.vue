<script setup lang="ts">
defineProps<{
  title: string
  highlight: string
  subtitle: string
  gradient?: boolean
}>()
</script>

<template>
  <section class="bg-primary pt-40 pb-24 text-white text-center" :class="gradient ? 'relative overflow-hidden' : ''">
    <div v-if="gradient"
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent opacity-50">
    </div>
    <div class="container mx-auto px-6 max-w-[900px] animate-on-scroll" :class="gradient ? 'relative z-10' : ''">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6">{{ title }} <span class="text-secondary">{{ highlight }}</span></h1>
      <p class="text-lg md:text-xl opacity-80 leading-relaxed">{{ subtitle }}</p>
    </div>
  </section>
</template>
