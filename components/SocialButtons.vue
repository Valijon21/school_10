<script setup lang="ts">
defineProps<{
  platforms: Array<{ icon: string; url: string; label: string }>
  variant?: 'footer' | 'overlay' | 'sidebar' | 'share'
}>()
</script>

<template>
  <div class="flex gap-3" :class="variant === 'footer' ? 'gap-5' : variant === 'sidebar' ? 'justify-center gap-5 pt-4' : ''">
    <template v-for="p in platforms" :key="p.label">
      <a v-if="variant === 'overlay'" :href="p.url"
        class="w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl flex items-center justify-center text-white hover:bg-secondary transition-all">
        <i :class="p.icon" aria-hidden="true"></i>
      </a>
      <a v-else-if="variant === 'share'" :href="p.url"
        class="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-xl text-primary hover:bg-secondary hover:text-white transition-all">
        <i :class="p.icon" aria-hidden="true"></i>
      </a>
      <a v-else-if="variant === 'sidebar'" :href="p.url"
        class="w-12 h-12 bg-white flex items-center justify-center rounded-2xl border border-slate-200 text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary hover:-translate-y-1 transition-all">
        <i :class="p.icon" aria-hidden="true"></i>
      </a>
      <a v-else :href="p.url" :aria-label="p.label" class="social-icon" target="_blank" rel="noopener">
        <i :class="p.icon" aria-hidden="true"></i>
      </a>
    </template>
  </div>
</template>
