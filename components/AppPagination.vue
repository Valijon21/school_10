<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  'page-change': [page: number]
}>()

function goTo(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return
  emit('page-change', page)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const visiblePages = computed(() => {
  const pages: number[] = []
  const start = Math.max(1, props.currentPage - 2)
  const end = Math.min(props.totalPages, props.currentPage + 2)
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})
</script>

<template>
  <div v-if="totalPages > 1" class="flex justify-center items-center gap-3 animate-on-scroll">
    <button
:disabled="currentPage === 1" class="w-12 h-12 flex items-center justify-center rounded-2xl font-black transition-all"
      :class="currentPage === 1 ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-white text-primary border border-slate-100 hover:bg-secondary hover:text-white hover:border-secondary shadow-sm'"
      @click="goTo(currentPage - 1)">
      <i aria-hidden="true" class="fas fa-chevron-left"/>
    </button>
    <template v-for="page in visiblePages" :key="page">
      <button
class="w-12 h-12 flex items-center justify-center rounded-2xl font-black transition-all"
        :class="page === currentPage ? 'bg-secondary text-white shadow-xl shadow-secondary/20 scale-110' : 'bg-white text-primary border border-slate-100 hover:border-secondary'"
        @click="goTo(page)">
        {{ page }}
      </button>
    </template>
    <button
:disabled="currentPage === totalPages" class="w-12 h-12 flex items-center justify-center rounded-2xl font-black transition-all"
      :class="currentPage === totalPages ? 'bg-slate-50 text-slate-300 cursor-not-allowed' : 'bg-white text-primary border border-slate-100 hover:bg-secondary hover:text-white hover:border-secondary shadow-sm'"
      @click="goTo(currentPage + 1)">
      <i aria-hidden="true" class="fas fa-chevron-right"/>
    </button>
  </div>
</template>
