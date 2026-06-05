<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <span><i aria-hidden="true" class="fas fa-spinner fa-spin mr-2"></i> {{ text || 'Yuborilmoqda...' }}</span>
</template>
