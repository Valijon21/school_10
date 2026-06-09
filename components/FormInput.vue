<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
  icon: string
  type?: string
  modelValue: string
  rows?: number
}>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="space-y-4">
    <label class="block text-slate-400 text-[0.65rem] font-black uppercase tracking-[0.2em] ml-4">{{ label }}</label>
    <div class="relative group/input">
      <i :class="['fas', icon, 'absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-secondary transition-colors']" aria-hidden="true"/>
      <textarea
v-if="type === 'textarea'" :value="modelValue" :placeholder="placeholder"
        :rows="rows || 5" class="w-full pl-14 pr-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold placeholder:text-slate-300 resize-none"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"/>
      <input
v-else :type="type || 'text'" :value="modelValue" :placeholder="placeholder"
        class="w-full pl-14 pr-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:border-secondary focus:bg-white focus:outline-none transition-all font-semibold placeholder:text-slate-300"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
    </div>
  </div>
</template>
