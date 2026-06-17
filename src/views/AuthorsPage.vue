<template>
  <main class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
    <div class="flex flex-row items-center justify-between mb-12">
      <h2
        class="font-['DM_Sans',sans-serif] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
        AUTHORS
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AuthorCard v-for="author in authors" :key="author.id" :name="author.name" :job="author.job"
        :city="author.city" :image="author.image" />
    </div>
  </main>
</template>

<script setup>
import AuthorCard from '../components/AuthorCard.vue'

import imgAutor1 from './../assets/frontpage/authors/jack1.png'
import imgAutor2 from './../assets/frontpage/authors/bekah2.png'
import imgAutor3 from './../assets/frontpage/authors/olena3.png'
import imgAutor4 from './../assets/frontpage/authors/metin4.png'
import imgAutor5 from './../assets/frontpage/authors/jeffery5.png'
import imgAutor6 from './../assets/frontpage/authors/emiliano6.png'

const authors = [
  { id: 1, name: 'Jakob Grønberg', job: 'Artist', city: 'Berlin', image: imgAutor1 },
  { id: 2, name: 'Louise Jensen', job: 'Artist', city: 'Stockholm', image: imgAutor2 },
  { id: 3, name: 'Anne Henry', job: 'Photograph', city: 'New York', image: imgAutor3 },
  { id: 4, name: 'Anna Nielsen', job: 'Columnists', city: 'Copenhagen', image: imgAutor4 },
  { id: 5, name: 'Jane Cooper', job: 'Artist', city: 'Berlin', image: imgAutor5 },
  { id: 6, name: 'Cristofer Vaccaro', job: 'Artist', city: 'Lisbon', image: imgAutor6 }
]
</script>
