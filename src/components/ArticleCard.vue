<template>
  <article class="w-[1055px] h-[240px] border-b border-gray-200 pb-8 last:border-b-0">
    <div class="flex flex-row gap-12 h-full">
      <!-- Левая колонка: изображение -->
      <div class="w-[240px] h-[240px] flex-shrink-0">
        <div class="overflow-hidden rounded-xl bg-gray-100 w-full h-full">
          <img 
            :src="image" 
            :alt="title"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            @error="handleImageError"
          >
        </div>
      </div>

      <!-- Правая колонка: текст -->
      <div class="flex-1 flex flex-col justify-between py-1">
        <div>
          <h2 class="font-['DM_Sans',sans-serif] font-semibold text-[28px] md:text-[36px] lg:text-[44px] leading-[110%] tracking-tight mb-2">
            {{ title }}
          </h2>
          <p class="font-['DM_Sans',sans-serif] font-normal text-[16px] md:text-[18px] leading-[180%] text-gray-700 line-clamp-2">
            {{ text }}
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <div>
            <span class="font-semibold uppercase tracking-wider text-gray-400 text-xs">Text</span>
            <span class="ml-2 font-medium text-gray-900">{{ author }}</span>
          </div>
          <div>
            <span class="font-semibold uppercase tracking-wider text-gray-400 text-xs">Date</span>
            <span class="ml-2 font-medium text-gray-900">{{ date }}</span>
          </div>
          <div>
            <span class="font-semibold uppercase tracking-wider text-gray-400 text-xs">Read</span>
            <span class="ml-2 font-medium text-gray-900">{{ readTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true },
  image: { type: String, required: true }
})

const imageSrc = ref(props.image)

const handleImageError = () => {
  imageSrc.value = 'https://placehold.co/600x400/eeeeee/999999?text=No+Image'
}
</script>