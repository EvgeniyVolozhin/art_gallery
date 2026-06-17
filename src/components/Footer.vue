<template>
  <footer class="w-full bg-black text-white">
    <!-- NEWSLETTER секция -->
    <div class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16 border-b border-gray-800">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <!-- Левая часть: NEWSLETTER заголовок -->
        <div class="lg:w-1/2">
          <h2 class="font-['DM_Sans',sans-serif] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
            NEWSLETTER+++
          </h2>
        </div>

        <!-- Правая часть: форма подписки -->
        <div class="lg:w-1/2">
          <p class="font-['DM_Sans',sans-serif] font-medium text-[18px] md:text-[20px] text-gray-400 mb-4">
            DESIGN NEWS TO<br />YOUR INBOX
          </p>
          
          <div class="flex flex-col sm:flex-row gap-3 max-w-md">
            <input 
              type="email" 
              placeholder="Email" 
              class="flex-1 px-4 py-3 bg-white text-black rounded-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
            <button class="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Основной футер -->
    <div class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Колонка 1: Логотип -->
        <div class="col-span-2 md:col-span-1">
          <h3 class="font-['DM_Sans',sans-serif] font-bold text-[24px] md:text-[28px] tracking-tight">
            FYRRE<br />MAGAZINE
          </h3>
        </div>

        <!-- Колонка 2: Навигация -->
        <div>
          <h4 class="font-['DM_Sans',sans-serif] font-semibold text-[16px] text-gray-400 mb-4">Magazine</h4>
          <ul class="space-y-3">
            <li><a href="#" class="font-['DM_Sans',sans-serif] text-[16px] text-white hover:text-amber-700 transition-colors">Styleguide</a></li>
            <li><a href="#" class="font-['DM_Sans',sans-serif] text-[16px] text-white hover:text-amber-700 transition-colors">Design</a></li>
            <li><a href="#" class="font-['DM_Sans',sans-serif] text-[16px] text-white hover:text-amber-700 transition-colors">Licensing</a></li>
          </ul>
        </div>

        <!-- Колонка 3: Архитектура + Podcast -->
        <div>
          <h4 class="font-['DM_Sans',sans-serif] font-semibold text-[16px] text-gray-400 mb-4">Architecture</h4>
          <ul class="space-y-3">
            <li><a href="#" class="font-['DM_Sans',sans-serif] text-[16px] text-white hover:text-amber-700 transition-colors">Podcast</a></li>
            <li><a href="#" class="font-['DM_Sans',sans-serif] text-[16px] text-white hover:text-amber-700 transition-colors">Authors</a></li>
          </ul>
        </div>

        <!-- Колонка 4: Changelog -->
        <div>
          <h4 class="font-['DM_Sans',sans-serif] font-semibold text-[16px] text-gray-400 mb-4">Changelog</h4>
          <ul class="space-y-3">
            <li><a href="#" class="font-['DM_Sans',sans-serif] text-[16px] text-white hover:text-amber-700 transition-colors">Blog</a></li>
          </ul>
        </div>
      </div>

      <!-- Нижняя часть: копирайт -->
      <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="font-['DM_Sans',sans-serif] text-[14px] text-gray-500">
          Made by <a href="#" class="text-white hover:text-amber-700 transition-colors">Pawel Gola</a> — Powered by <a href="#" class="text-white hover:text-amber-700 transition-colors">Webflow</a>
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-gray-500 hover:text-white transition-colors">Instagram</a>
          <a href="#" class="text-gray-500 hover:text-white transition-colors">Twitter</a>
          <a href="#" class="text-gray-500 hover:text-white transition-colors">YouTube</a>
          <a href="#" class="text-gray-500 hover:text-white transition-colors">RSS</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Компонент готов к использованию
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>