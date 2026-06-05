<script setup lang="ts">
defineProps<{
  status: { type: 'success' | 'error'; text: string } | null
}>()
</script>

<template>
  <div v-if="status"
    :class="['p-6 rounded-2xl font-bold text-center text-sm', status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700']">
    {{ status.text }}
  </div>
</template>
