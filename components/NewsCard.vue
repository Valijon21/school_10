<script setup lang="ts">
import type { NewsItem } from '~/composables/useData'

const props = defineProps<{
  item: NewsItem
  styles?: Record<string, { badgeBg: string; textColor: string }>
  variant?: 'index' | 'list'
}>()

const cs = computed(() => props.styles?.[props.item.category])
const textColor = computed(() => cs.value?.textColor || 'text-secondary')
</script>

<template>
  <article
    class="bg-white overflow-hidden border border-slate-50 animate-on-scroll" :class="variant === 'list' ? 'rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.05)] hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 group' : 'rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-3 transition-all duration-500 h-full flex flex-col'">
    <div class="relative overflow-hidden" :class="variant === 'list' ? 'h-72' : 'h-64 group/img'">
      <img
loading="lazy" :src="`/assets/images/${item.image}`" :alt="item.title"
        class="w-full h-full object-cover transition-transform duration-1000" :class="variant === 'list' ? 'group-hover:scale-110 duration-[2000ms]' : 'group-hover/img:scale-110'">
      <div
v-if="variant === 'list'"
        class="absolute top-8 left-8 p-1 bg-white/20 backdrop-blur-xl border border-white/30 rounded-[1.5rem] shadow-2xl">
        <div class="bg-white px-4 py-2 rounded-[1.2rem] text-primary text-[0.65rem] font-black uppercase tracking-widest">{{ item.date }}</div>
      </div>
      <CategoryBadge v-if="variant === 'list'" :category="item.category" :styles="styles" variant="glass" />
      <div v-else class="absolute top-6 left-6">
        <span :class="`${cs?.badgeBg || 'bg-secondary/90'} backdrop-blur-md text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl`">
          {{ item.category }}
        </span>
      </div>
    </div>
    <div class="p-10 flex flex-col flex-grow">
      <div v-if="variant !== 'list'" class="flex items-center gap-3 text-slate-400 text-[0.7rem] font-bold uppercase tracking-widest mb-6">
        <i :class="`far fa-calendar-alt ${textColor}`" aria-hidden="true"/>
        {{ item.date }}
      </div>
      <h3
        class="font-black text-primary mb-5 leading-tight hover:text-secondary transition-colors cursor-pointer italic" :class="variant === 'list' ? 'text-2xl group-hover:text-secondary mb-6' : 'text-xl'">
        {{ item.title }}
      </h3>
      <p class="text-slate-500 mb-8 text-sm leading-relaxed font-medium line-clamp-3">{{ item.content }}</p>
      <NuxtLink
:to="`/news/news-single/${item.id}`"
        class="inline-flex items-center justify-center gap-4 font-black transition-all group/btn" :class="variant === 'list' ? 'w-full py-5 px-8 bg-slate-50 text-primary rounded-2xl hover:bg-secondary hover:text-white' : 'mt-auto text-primary text-sm hover:text-secondary'">
        <span>{{ variant === 'list' ? $t('news.card.details') : $t('news.card.view') }}</span>
        <i aria-hidden="true" class="fas fa-arrow-right group-hover/btn:translate-x-2 transition-transform"/>
      </NuxtLink>
    </div>
  </article>
</template>
