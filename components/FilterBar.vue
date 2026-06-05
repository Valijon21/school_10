<script setup lang="ts">
defineProps<{
  filters: Array<{ key: string; label: string }>
  active: string
  pill?: boolean
}>()

const emit = defineEmits<{ update: [value: string] }>()
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-16 animate-on-scroll">
    <button v-for="f in filters" :key="f.key" @click="emit('update', f.key)"
      :class="[pill ? 'px-8 py-3 rounded-full' : 'px-6 py-3 rounded-xl', 'font-bold transition-all shadow-sm', active === f.key ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 'bg-white text-primary font-medium border border-slate-200 hover:border-secondary hover:text-secondary']">
      {{ f.label }}
    </button>
  </div>
</template>
