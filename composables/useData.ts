import { ref, shallowRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export interface Teacher {
  id: number
  name: string
  subject: string
  experience: string
  bio: string
  education: string
  achievements: string
  students: number
  email: string
  consultation: string
  image: string
  telegram: string
  instagram: string
}

export interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  image: string
  content: string
  fullContent: string
  readTime: string
}

import teachersUz from '../i18n/data/teachers/uz.json'
import teachersRu from '../i18n/data/teachers/ru.json'
import teachersEn from '../i18n/data/teachers/en.json'
import newsUz from '../i18n/data/news/uz.json'
import newsRu from '../i18n/data/news/ru.json'
import newsEn from '../i18n/data/news/en.json'

const TEACHERS_DATA: Record<string, Teacher[]> = {
  uz: teachersUz as Teacher[],
  ru: teachersRu as Teacher[],
  en: teachersEn as Teacher[],
}

const NEWS_DATA: Record<string, NewsItem[]> = {
  uz: newsUz as NewsItem[],
  ru: newsRu as NewsItem[],
  en: newsEn as NewsItem[],
}

const CATEGORY_STYLES: Record<string, { badgeBg: string; textColor: string }> = {
  'Tadbir': { badgeBg: 'bg-secondary/90', textColor: 'text-secondary' },
  'E\'lon': { badgeBg: 'bg-accent/90', textColor: 'text-accent' },
  'Sport': { badgeBg: 'bg-green-500/90', textColor: 'text-green-500' },
  'Loyihalar': { badgeBg: 'bg-primary/90', textColor: 'text-primary' },
}

export const useData = () => {
  const { locale } = useI18n()

  const teachersList = shallowRef(TEACHERS_DATA[locale.value] || TEACHERS_DATA.uz)
  const newsList = shallowRef(NEWS_DATA[locale.value] || NEWS_DATA.uz)
  const categoryStyles = ref(CATEGORY_STYLES)

  watch(locale, (newLocale) => {
    teachersList.value = TEACHERS_DATA[newLocale] || TEACHERS_DATA.uz
    newsList.value = NEWS_DATA[newLocale] || NEWS_DATA.uz
  })

  function getTeacherById(id: number) {
    const data = TEACHERS_DATA[locale.value] || TEACHERS_DATA.uz
    return data.find(t => t.id === id) || null
  }

  function getNewsById(id: number) {
    const data = NEWS_DATA[locale.value] || NEWS_DATA.uz
    return data.find(n => n.id === id) || null
  }

  return { teachersList, newsList, categoryStyles, getTeacherById, getNewsById }
}
