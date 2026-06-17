<template>
    <main class="w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <!-- ART & LIFE изображение -->
        <div class="mb-6 sm:mb-8 mt-[30px] sm:mt-[50px]">
            <img src="./../assets/frontpage/Art & Life.svg" alt="Art & Life"
                class="w-full max-w-[1520px] h-auto mx-auto">
        </div>

        <!-- Бегущая строка -->
        <div class="w-full overflow-hidden bg-black my-[30px] sm:my-[50px]">
            <div class="flex whitespace-nowrap animate-marquee">
                <span v-for="n in 4" :key="n"
                    class="text-white text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider m-[12px] sm:m-[20px]">
                    NEWS TICKER +++ Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
                </span>
            </div>
        </div>

        <!-- Заголовок + описание -->
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-12 lg:mb-16">
            <div class="lg:w-1/2">
                <h1
                    class="font-['DM_Sans',sans-serif] font-semibold text-[36px] sm:text-[56px] md:text-[80px] lg:text-[104px] leading-[110%] tracking-normal uppercase">
                    Don't close<br />your eyes
                </h1>
            </div>
            <div class="lg:w-1/2">
                <p class="font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] md:text-[18px] leading-[180%] tracking-normal mb-8"
                    :class="isDark ? 'text-gray-400' : 'text-gray-700'">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
                    felis bibendum ut. Porttitor leo a diam.
                </p>
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div class="flex flex-col">
                        <h3 class="font-['DM_Sans',sans-serif] font-semibold text-[12px] uppercase tracking-wider mb-1"
                            :class="isDark ? 'text-gray-500' : 'text-gray-400'">Text</h3>
                        <p class="font-['DM_Sans',sans-serif] font-medium text-[16px]"
                            :class="isDark ? 'text-gray-200' : 'text-gray-900'">Jakob Gronberg</p>
                    </div>
                    <div class="flex flex-col">
                        <h3 class="font-['DM_Sans',sans-serif] font-semibold text-[12px] uppercase tracking-wider mb-1"
                            :class="isDark ? 'text-gray-500' : 'text-gray-400'">Date</h3>
                        <p class="font-['DM_Sans',sans-serif] font-medium text-[16px]"
                            :class="isDark ? 'text-gray-200' : 'text-gray-900'">16. March 2022</p>
                    </div>
                    <div class="flex flex-col">
                        <h3 class="font-['DM_Sans',sans-serif] font-semibold text-[12px] uppercase tracking-wider mb-1"
                            :class="isDark ? 'text-gray-500' : 'text-gray-400'">Duration</h3>
                        <p class="font-['DM_Sans',sans-serif] font-medium text-[16px]"
                            :class="isDark ? 'text-gray-200' : 'text-gray-900'">1 Min</p>
                    </div>
                    <button
                        class="px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300"
                        :class="isDark ? 'border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white' : 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900'">
                        Label
                    </button>
                </div>
            </div>
        </div>

        <!-- Hero изображение -->
        <div class="-mx-4 sm:-mx-6 md:-mx-12 lg:-mx-16 mb-16 lg:mb-20">
            <img src="./../assets/frontpage/hero.png" alt="Hero image"
                class="w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[800px] object-cover">
        </div>

        <!-- Статьи + сайдбар -->
        <section class="w-full mx-auto px-0 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-16">
            <div class="flex flex-col lg:flex-row justify-center gap-8 lg:gap-[100px]">
                <div class="flex-1 max-w-[1055px] space-y-8 lg:space-y-12">
                    <ArticleCard v-for="article in articles" :key="article.id" :title="article.title"
                        :text="article.text" :author="article.author" :date="article.date" :readTime="article.readTime"
                        :image="article.image" />
                </div>

                <div class="w-full lg:w-[369px] flex-shrink-0 space-y-8 lg:space-y-12">
                    <!-- PRINTMAGAZINE -->
                    <div class="border p-6 sm:p-8 text-center"
                        :class="isDark ? 'border-gray-700' : 'border-gray-200'">
                        <h3 class="font-['DM_Sans',sans-serif] font-semibold text-[28px] sm:text-[32px] md:text-[40px] leading-[110%] tracking-tight">
                            PRINTMAGAZINE
                        </h3>
                        <p class="font-['DM_Sans',sans-serif] font-normal text-[18px] mt-2"
                            :class="isDark ? 'text-gray-400' : 'text-gray-600'">03/2022</p>
                    </div>

                    <!-- FYRRE MAGAZIN -->
                    <div class="border p-6 sm:p-8 text-center"
                        :class="isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'">
                        <img src="./../assets/frontpage/magazin.png" alt="FYRRE MAGAZIN"
                            class="w-full max-w-[369px] h-auto mx-auto">
                        <button class="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                            BUTTON
                        </button>
                    </div>

                    <!-- MOST POPULAR -->
                    <div class="border p-6 sm:p-8"
                        :class="isDark ? 'border-gray-700' : 'border-gray-200'">
                        <h3 class="font-['DM_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-[110%] tracking-tight mb-6">
                            MOST POPULAR
                        </h3>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <span class="font-['DM_Sans',sans-serif] font-bold text-[32px] leading-none"
                                    :class="isDark ? 'text-gray-600' : 'text-gray-300'">01</span>
                                <div>
                                    <h4 class="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[130%]">Street art festival</h4>
                                    <p class="font-['DM_Sans',sans-serif] font-normal text-[14px] mt-1"
                                        :class="isDark ? 'text-gray-400' : 'text-gray-500'">Text Cristofer Vaccaro</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <span class="font-['DM_Sans',sans-serif] font-bold text-[32px] leading-none"
                                    :class="isDark ? 'text-gray-600' : 'text-gray-300'">02</span>
                                <div>
                                    <h4 class="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[130%]">Hope dies last</h4>
                                    <p class="font-['DM_Sans',sans-serif] font-normal text-[14px] mt-1"
                                        :class="isDark ? 'text-gray-400' : 'text-gray-500'">Text Anne Henry</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <span class="font-['DM_Sans',sans-serif] font-bold text-[32px] leading-none"
                                    :class="isDark ? 'text-gray-600' : 'text-gray-300'">03</span>
                                <div>
                                    <h4 class="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[130%]">Artists who want to rise above</h4>
                                    <p class="font-['DM_Sans',sans-serif] font-normal text-[14px] mt-1"
                                        :class="isDark ? 'text-gray-400' : 'text-gray-500'">Text Anna Nielsen</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- NEWSLETTER -->
                    <div class="border p-6 sm:p-8 text-center bg-black text-white"
                        :class="isDark ? 'border-gray-700' : 'border-gray-200'">
                        <h3 class="font-['DM_Sans',sans-serif] font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-[110%] tracking-tight mb-2">
                            NEWSLETTER
                        </h3>
                        <p class="font-['DM_Sans',sans-serif] font-normal text-[16px] text-gray-400 mb-6">
                            Design News to your inbox
                        </p>
                        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input type="email" placeholder="Email"
                                class="flex-1 px-4 py-3 bg-white text-black rounded-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            <button class="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PODCAST -->
        <section class="w-full mx-auto px-0 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-16">
            <div class="flex flex-row items-center justify-between mb-8 lg:mb-12">
                <h2 class="font-['DM_Sans',sans-serif] font-bold text-[36px] sm:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
                    PODCAST
                </h2>
                <router-link to="/podcast"
                    class="font-['DM_Sans',sans-serif] font-medium text-[14px] sm:text-[16px] transition-colors flex items-center gap-2"
                    :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-black hover:text-amber-700'">
                    ALL EPISODES →
                </router-link>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-6 lg:gap-8">
                <div v-for="podcast in podcasts" :key="podcast.id"
                    class="w-full md:w-[calc(50%-12px)] lg:w-[507px] border p-6 sm:p-8 lg:p-12 flex flex-col group transition-shadow"
                    :class="isDark ? 'border-gray-700 hover:shadow-lg hover:shadow-black/30' : 'border-gray-200 hover:shadow-lg'">
                    <div class="w-full h-[180px] sm:h-[200px] lg:h-[240px] overflow-hidden rounded-xl mb-6">
                        <img :src="podcast.image" :alt="podcast.title"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3 class="font-['DM_Sans',sans-serif] font-semibold text-[20px] sm:text-[24px] lg:text-[28px] leading-[120%] tracking-tight mb-2 transition-colors flex-1"
                        :class="isDark ? 'group-hover:text-amber-500' : 'group-hover:text-amber-700'">
                        {{ podcast.title }}
                    </h3>
                    <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mt-auto"
                        :class="isDark ? 'text-gray-400' : 'text-gray-500'">
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px]">{{ podcast.date }}</span>
                        <span class="w-1 h-1 rounded-full" :class="isDark ? 'bg-gray-600' : 'bg-gray-300'"></span>
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[14px] sm:text-[16px]">{{ podcast.duration }}</span>
                    </div>
                    <button
                        class="w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors mt-4"
                        :class="isDark ? 'border-gray-600 hover:bg-white hover:text-black hover:border-white' : 'border-gray-300 hover:bg-black hover:text-white hover:border-black'">
                        ▶
                    </button>
                </div>
            </div>
        </section>

        <!-- AUTHORS -->
        <section class="w-full mx-auto px-0 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-16">
            <div class="flex flex-row items-center justify-between mb-8 lg:mb-12">
                <h2 class="font-['DM_Sans',sans-serif] font-bold text-[36px] sm:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
                    AUTHORS
                </h2>
                <router-link to="/authors"
                    class="font-['DM_Sans',sans-serif] font-medium text-[14px] sm:text-[16px] transition-colors flex items-center gap-2"
                    :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-black hover:text-amber-700'">
                    ALL AUTHORS →
                </router-link>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <AuthorCard v-for="author in authors" :key="author.id" :name="author.name" :job="author.job"
                    :city="author.city" :image="author.image" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { useTheme } from '../composables/useTheme.js'
import ArticleCard from '../components/ArticleCard.vue';
import AuthorCard from '../components/AuthorCard.vue'

import img1 from './../assets/frontpage/1.png'
import img2 from './../assets/frontpage/2.png'
import img3 from './../assets/frontpage/3.png'
import img4 from './../assets/frontpage/4.png'
import img5 from './../assets/frontpage/5.png'
import img6 from './../assets/frontpage/6.png'

import imgAutor1 from './../assets/frontpage/authors/jack1.png'
import imgAutor2 from './../assets/frontpage/authors/bekah2.png'
import imgAutor3 from './../assets/frontpage/authors/olena3.png'
import imgAutor4 from './../assets/frontpage/authors/metin4.png'
import imgAutor5 from './../assets/frontpage/authors/jeffery5.png'
import imgAutor6 from './../assets/frontpage/authors/emiliano6.png'

import podcastCover from './../assets/frontpage/podcast/cover.png'
import podcastPexels from './../assets/frontpage/podcast/pexels.png'
import podcastUnsplash from './../assets/frontpage/podcast/unsplash.png'

const { isDark } = useTheme()

const podcasts = [
  { id: 1, title: "The Problem of today's cultural development", date: 'Date 16.06.2022', duration: 'Duration 1h 20 Min', image: podcastCover },
  { id: 2, title: 'The hidden messages of Jack Nielson', date: 'Date 16.06.2022', duration: 'Duration 60 Min', image: podcastPexels },
  { id: 3, title: 'Behind the scenes of the street art culture', date: 'Date 16.06.2022', duration: 'Duration 45 Min', image: podcastUnsplash }
]

const authors = [
  { id: 1, name: 'Jakob Grønberg', job: 'Artist', city: 'Berlin', image: imgAutor1 },
  { id: 2, name: 'Louise Jensen', job: 'Artist', city: 'Stockholm', image: imgAutor2 },
  { id: 3, name: 'Anne Henry', job: 'Photograph', city: 'New York', image: imgAutor3 },
  { id: 4, name: 'Anna Nielsen', job: 'Columnists', city: 'Copenhagen', image: imgAutor4 },
  { id: 5, name: 'Jane Cooper', job: 'Artist', city: 'Berlin', image: imgAutor5 },
  { id: 6, name: 'Cristofer Vaccaro', job: 'Artist', city: 'Lisbon', image: imgAutor6 }
]

const articles = [
  { id: 1, title: 'Hope dies last', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.', author: 'Jakob Gronberg', date: '16. March 2022', readTime: '1 Min', image: img1 },
  { id: 2, title: 'The best art museums', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.', author: 'Jakob Gronberg', date: '16. March 2022', readTime: '1 Min', image: img2 },
  { id: 3, title: 'Street art festival', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.', author: 'Cristofer Vaccaro', date: '15. March 2022', readTime: '2 Min', image: img3 },
  { id: 4, title: 'Artists who want to rise above', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.', author: 'Anna Nielsen', date: '14. March 2022', readTime: '3 Min', image: img4 },
  { id: 5, title: 'Modern art revolution', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.', author: 'Maria Santos', date: '13. March 2022', readTime: '4 Min', image: img5 },
  { id: 6, title: 'The future of galleries', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu dui ut sem. Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.', author: 'David Chen', date: '12. March 2022', readTime: '5 Min', image: img6 },
]
</script>

<style scoped>
@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.animate-marquee {
    animation: marquee 25s linear infinite;
    width: fit-content;
}
.animate-marquee:hover {
    animation-play-state: paused;
}
</style>
