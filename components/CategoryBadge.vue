<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  category: string
  styles?: Record<string, { badgeBg: string; textColor: string }>
  variant?: 'on-image' | 'glass' | 'solid'
}>()

const label = computed(() => t('news.categories.' + props.category))
const cs = computed(() => props.styles?.[props.category])
const def = computed(() => ({
  badgeBg: cs.value?.badgeBg || 'bg-secondary/90',
  textColor: cs.value?.textColor || 'text-secondary',
}))
</script>

<template>
  <span v-if="variant === 'solid'" :class="`px-3 py-1 ${def.badgeBg} text-white rounded-full text-[0.6rem] font-black uppercase tracking-[0.2em] leading-none`">
    {{ label }}
  </span>
  <span
 v-else-if="variant === 'glass'"
    :class="`px-4 py-1.5 ${def.badgeBg} backdrop-blur-md text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl`">
    {{ label }}
  </span>
  <span v-else :class="`${def.badgeBg} text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase`">
    {{ label }}
  </span>
</template>
