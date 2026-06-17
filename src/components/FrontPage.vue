<template>
    <main class="w-full mx-auto px-6 md:px-12 lg:px-16">
        <!-- ART & LIFE изображение (верхний подзаголовок) -->
        <div class="mb-8 mt-[50px]">
            <img src="./../assets/frontpage/Art & Life.svg" alt="Art & Life"
                class="w-full max-w-[1520px] h-auto mx-auto">
        </div>
        <div class="w-full overflow-hidden bg-black my-[50px]">
            <div class="flex whitespace-nowrap animate-marquee">
                <!-- Повторяем контент несколько раз для бесконечного эффекта -->
                <span v-for="n in 4" :key="n"
                    class="text-white text-sm md:text-base font-medium uppercase tracking-wider m-[20px]">
                    NEWS TICKER +++ Lorem ipsum dolor sit amet, consectetur adipiscing elit +++
                </span>
            </div>
        </div>
        <!-- Основной контент: заголовок + текст + метаданные -->
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
            <!-- Левая колонка: заголовок -->
            <div class="lg:w-1/2">
                <h1
                    class="font-['DM_Sans',sans-serif] font-semibold text-[56px] md:text-[80px] lg:text-[104px] leading-[110%] tracking-normal uppercase">
                    Don’t close<br />your eyes
                </h1>
            </div>

            <!-- Правая колонка: описание + мета -->
            <div class="lg:w-1/2">
                <!-- Текст описания -->
                <p
                    class="font-['DM_Sans',sans-serif] font-normal text-[16px] md:text-[18px] leading-[180%] tracking-normal text-gray-700 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu dui vivamus arcu
                    felis bibendum ut. Porttitor leo a diam.
                </p>

                <!-- Метаданные и Label -->
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <!-- Text -->
                    <div class="flex flex-col">
                        <h3
                            class="font-['DM_Sans',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-gray-400 mb-1">
                            Text</h3>
                        <p class="font-['DM_Sans',sans-serif] font-medium text-[16px] text-gray-900">Jakob Gronberg</p>
                    </div>

                    <!-- Date -->
                    <div class="flex flex-col">
                        <h3
                            class="font-['DM_Sans',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-gray-400 mb-1">
                            Date</h3>
                        <p class="font-['DM_Sans',sans-serif] font-medium text-[16px] text-gray-900">16. March 2022</p>
                    </div>

                    <!-- Duration -->
                    <div class="flex flex-col">
                        <h3
                            class="font-['DM_Sans',sans-serif] font-semibold text-[12px] uppercase tracking-wider text-gray-400 mb-1">
                            Duration</h3>
                        <p class="font-['DM_Sans',sans-serif] font-medium text-[16px] text-gray-900">1 Min</p>
                    </div>

                    <!-- Label button -->
                    <button
                        class="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300">
                        Label
                    </button>
                </div>
            </div>
        </div>

        <!-- Hero изображение -->
        <div class="-mx-6 md:-mx-12 lg:-mx-16 mb-20">
            <img src="./../assets/frontpage/hero.png" alt="Hero image"
                class="w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover">
        </div>

        <section class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
            <div class="flex flex-col lg:flex-row justify-center gap-[100px]">
                <!-- Левая колонка: статьи -->
                <div class="flex-1 max-w-[1055px] space-y-12">
                    <ArticleCard v-for="article in articles" :key="article.id" :title="article.title"
                        :text="article.text" :author="article.author" :date="article.date" :readTime="article.readTime"
                        :image="article.image" />
                </div>

                <!-- Правая колонка: журналы (фиксированная ширина 369px) -->
                <div class="w-[369px] flex-shrink-0 space-y-12">
                    <!-- PRINTMAGAZINE -->
                    <div class="border border-gray-200 p-8 text-center">
                        <h3
                            class="font-['DM_Sans',sans-serif] font-semibold text-[32px] md:text-[40px] leading-[110%] tracking-tight">
                            PRINTMAGAZINE
                        </h3>
                        <p class="font-['DM_Sans',sans-serif] font-normal text-[18px] text-gray-600 mt-2">03/2022</p>
                    </div>

                    <!-- FYRRE MAGAZIN -->
                    <div class="border border-gray-200 p-8 text-center bg-gray-50">
                        <img src="./../assets/frontpage/magazin.png" alt="FYRRE MAGAZIN"
                            class="w-[369px] h-[461.25px] object-cover mx-auto">
                        <button
                            class="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                            BUTTON
                        </button>
                    </div>

                    <!-- MOST POPULAR -->
                    <div class="border border-gray-200 p-8">
                        <h3
                            class="font-['DM_Sans',sans-serif] font-bold text-[24px] md:text-[28px] leading-[110%] tracking-tight mb-6">
                            MOST POPULAR
                        </h3>

                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <span
                                    class="font-['DM_Sans',sans-serif] font-bold text-[32px] text-gray-300 leading-none">01</span>
                                <div>
                                    <h4 class="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[130%]">
                                        Street art festival</h4>
                                    <p class="font-['DM_Sans',sans-serif] font-normal text-[14px] text-gray-500 mt-1">
                                        Text Cristofer Vaccaro</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <span
                                    class="font-['DM_Sans',sans-serif] font-bold text-[32px] text-gray-300 leading-none">02</span>
                                <div>
                                    <h4 class="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[130%]">Hope
                                        dies last</h4>
                                    <p class="font-['DM_Sans',sans-serif] font-normal text-[14px] text-gray-500 mt-1">
                                        Text Anne Henry</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <span
                                    class="font-['DM_Sans',sans-serif] font-bold text-[32px] text-gray-300 leading-none">03</span>
                                <div>
                                    <h4 class="font-['DM_Sans',sans-serif] font-medium text-[16px] leading-[130%]">
                                        Artists who want to rise above</h4>
                                    <p class="font-['DM_Sans',sans-serif] font-normal text-[14px] text-gray-500 mt-1">
                                        Text Anna Nielsen</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- NEWSLETTER -->
                    <div class="border border-gray-200 p-8 text-center bg-black text-white">
                        <h3
                            class="font-['DM_Sans',sans-serif] font-bold text-[24px] md:text-[28px] leading-[110%] tracking-tight mb-2">
                            NEWSLETTER
                        </h3>
                        <p class="font-['DM_Sans',sans-serif] font-normal text-[16px] text-gray-400 mb-6">
                            Design News to your inbox
                        </p>

                        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input type="email" placeholder="Email"
                                class="flex-1 px-4 py-3 bg-white text-black rounded-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
                            <button
                                class="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
                                SIGN UP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
            <!-- Заголовок -->
            <div class="flex flex-row items-center justify-between mb-12">
                <h2
                    class="font-['DM_Sans',sans-serif] font-bold text-[105px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
                    PODCAST
                </h2>
                <a href="#"
                    class="font-['DM_Sans',sans-serif] font-medium text-[16px] text-black hover:text-amber-700 transition-colors flex items-center gap-2">
                    ALL EPISODES →
                </a>
            </div>

            <!-- Список подкастов: 3 карточки в ряд -->
            <div class="flex flex-row justify-center gap-8">
                <!-- Подкаст 1 -->
                <div
                    class="w-[507px] h-[681px] border border-gray-200 p-12 flex flex-col group hover:shadow-lg transition-shadow">
                    <div class="w-full h-[240px] overflow-hidden rounded-xl mb-6">
                        <img src="./../assets/frontpage/podcast/cover.png" alt="cover"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3
                        class="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] leading-[120%] tracking-tight mb-2 group-hover:text-amber-700 transition-colors flex-1">
                        The Problem of today’s cultural development
                    </h3>
                    <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-auto">
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[16px]">Date 16.06.2022</span>
                        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[16px]">Duration 1h 20 Min</span>
                    </div>
                    <button
                        class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors mt-4">
                        ▶
                    </button>
                </div>

                <!-- Подкаст 2 -->
                <div
                    class="w-[507px] h-[681px] border border-gray-200 p-12 flex flex-col group hover:shadow-lg transition-shadow">
                    <div class="w-full h-[240px] overflow-hidden rounded-xl mb-6">
                        <img src="./../assets/frontpage/podcast/pexels.png" alt="cover"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3
                        class="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] leading-[120%] tracking-tight mb-2 group-hover:text-amber-700 transition-colors flex-1">
                        The hidden messages of Jack Nielson
                    </h3>
                    <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-auto">
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[16px]">Date 16.06.2022</span>
                        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[16px]">Duration 60 Min</span>
                    </div>
                    <button
                        class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors mt-4">
                        ▶
                    </button>
                </div>

                <!-- Подкаст 3 -->
                <div
                    class="w-[507px] h-[681px] border border-gray-200 p-12 flex flex-col group hover:shadow-lg transition-shadow">
                    <div class="w-full h-[240px] overflow-hidden rounded-xl mb-6">
                        <img src="./../assets/frontpage/podcast/unsplash.png" alt="cover"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <h3
                        class="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] leading-[120%] tracking-tight mb-2 group-hover:text-amber-700 transition-colors flex-1">
                        Behind the scenes of the street art culture
                    </h3>
                    <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-auto">
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[16px]">Date 16.06.2022</span>
                        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span class="font-['DM_Sans',sans-serif] font-normal text-[16px]">Duration 45 Min</span>
                    </div>
                    <button
                        class="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors mt-4">
                        ▶
                    </button>
                </div>
            </div>
        </section>

        <section class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
            <div class="flex flex-row items-center justify-between mb-12">
                <h2
                    class="font-['DM_Sans',sans-serif] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
                    AUTHORS
                </h2>
                <a href="#"
                    class="font-['DM_Sans',sans-serif] font-medium text-[16px] text-black hover:text-amber-700 transition-colors flex items-center gap-2">
                    ALL AUTHORS →
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AuthorCard v-for="author in authors" :key="author.id" :name="author.name" :job="author.job"
                    :city="author.city" :image="author.image" />
            </div>
        </section>


    </main>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
import AuthorCard from './AuthorCard.vue'

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



const authors = [
  { id: 1, name: 'Jakob Grønberg', job: 'Artist', city: 'Berlin', image: imgAutor1 },
  { id: 2, name: 'Louise Jensen', job: 'Artist', city: 'Stockholm', image: imgAutor2 },
  { id: 3, name: 'Anne Henry', job: 'Photograph', city: 'New York', image: imgAutor3 },
  { id: 4, name: 'Anna Nielsen', job: 'Columnists', city: 'Copenhagen', image: imgAutor4 },
  { id: 5, name: 'Jane Cooper', job: 'Artist', city: 'Berlin', image: imgAutor5 },
  { id: 6, name: 'Cristofer Vaccaro', job: 'Artist', city: 'Lisbon', image: imgAutor6 }
]

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

<style scoped>
/* Анимация бегущей строки */
@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.animate-marquee {
    animation: marquee 25s linear infinite;
    width: fit-content;
}

.animate-marquee:hover {
    animation-play-state: paused;
}
</style>