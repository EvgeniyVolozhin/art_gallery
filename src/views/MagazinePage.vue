<template>
  <main class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
    <div class="flex flex-row items-center justify-between mb-12">
      <h2
        class="font-['DM_Sans',sans-serif] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
        MAGAZINE
      </h2>
    </div>

    <div class="flex flex-col lg:flex-row justify-center gap-[100px]">
      <!-- Левая колонка: статьи -->
      <div class="flex-1 max-w-[1055px] space-y-12">
        <ArticleCard v-for="article in articles" :key="article.id" :title="article.title"
          :text="article.text" :author="article.author" :date="article.date" :readTime="article.readTime"
          :image="article.image" />
      </div>

      <!-- Правая колонка: журналы -->
      <div class="w-[369px] flex-shrink-0 space-y-12">
        <div class="border border-gray-200 p-8 text-center">
          <h3
            class="font-['DM_Sans',sans-serif] font-semibold text-[32px] md:text-[40px] leading-[110%] tracking-tight">
            PRINTMAGAZINE
          </h3>
          <p class="font-['DM_Sans',sans-serif] font-normal text-[18px] text-gray-600 mt-2">03/2022</p>
        </div>

        <div class="border border-gray-200 p-8 text-center bg-gray-50">
          <img src="./../assets/frontpage/magazin.png" alt="FYRRE MAGAZIN"
            class="w-[369px] h-[461.25px] object-cover mx-auto">
          <button
            class="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
            BUTTON
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ArticleCard from '../components/ArticleCard.vue'

import img1 from './../assets/frontpage/1.png'
import img2 from './../assets/frontpage/2.png'
import img3 from './../assets/frontpage/3.png'
import img4 from './../assets/frontpage/4.png'
import img5 from './../assets/frontpage/5.png'
import img6 from './../assets/frontpage/6.png'

const articles = [
  {
    id: 1,
    title: 'Hope dies last',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    readTime: '1 Min',
    image: img1
  },
  {
    id: 2,
    title: 'The best art museums',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Jakob Gronberg',
    date: '16. March 2022',
    readTime: '1 Min',
    image: img2
  },
  {
    id: 3,
    title: 'Street art festival',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Cristofer Vaccaro',
    date: '15. March 2022',
    readTime: '2 Min',
    image: img3
  },
  {
    id: 4,
    title: 'Artists who want to rise above',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Anna Nielsen',
    date: '14. March 2022',
    readTime: '3 Min',
    image: img4
  },
  {
    id: 5,
    title: 'Modern art revolution',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'Maria Santos',
    date: '13. March 2022',
    readTime: '4 Min',
    image: img5
  },
  {
    id: 6,
    title: 'The future of galleries',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.',
    author: 'David Chen',
    date: '12. March 2022',
    readTime: '5 Min',
    image: img6
  },
]
</script>
