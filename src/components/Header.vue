<template>
  <header class="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between"
    :class="isDark ? 'bg-[#0f0f0f] border-b border-gray-800' : 'bg-white border-b border-gray-100'">
    
    <!-- Левая часть: логотип -->
    <router-link to="/" class="flex-shrink-0">
      <img src="./../assets/logo.png" alt="FYRRE Magazine logo" class="w-[140px] sm:w-[180px] lg:w-[210px] h-auto border-0">
    </router-link>

    <!-- Десктопная навигация -->
    <nav class="hidden lg:flex items-center gap-8">
      <router-link to="/magazine"
        class="font-['DM_Sans',sans-serif] font-normal text-[20px] leading-[100%] transition-colors"
        :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
        Magazine
      </router-link>
      <router-link to="/authors"
        class="font-['DM_Sans',sans-serif] font-normal text-[20px] leading-[100%] transition-colors"
        :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
        Authors
      </router-link>
      <router-link to="/podcast"
        class="font-['DM_Sans',sans-serif] font-normal text-[20px] leading-[100%] transition-colors"
        :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
        Podcast
      </router-link>

      <!-- Разделитель -->
      <span class="text-gray-300 text-xl">—</span>

      <!-- Кнопка переключения темы -->
      <button @click="toggleTheme"
        class="p-2 rounded-full transition-colors"
        :class="isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'"
        :title="isDark ? 'Светлая тема' : 'Тёмная тема'">
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>

      <!-- Социальные иконки -->
      <div class="flex items-center gap-4 ml-2">
        <a href="https://instagram.com" target="_blank" class="hover:opacity-70 transition-opacity">
          <img src="./../assets/instagram.png" alt="Instagram" class="w-[18px] h-[18px]">
        </a>
        <a href="https://twitter.com" target="_blank" class="hover:opacity-70 transition-opacity">
          <img src="./../assets/twitter.png" alt="Twitter" class="w-[18px] h-[18px]">
        </a>
        <a href="https://youtube.com" target="_blank" class="hover:opacity-70 transition-opacity">
          <img src="./../assets/youtube.png" alt="YouTube" class="w-[18px] h-[18px]">
        </a>
        <a href="/rss" target="_blank" class="hover:opacity-70 transition-opacity">
          <img src="./../assets/rss.png" alt="RSS" class="w-[18px] h-[18px]">
        </a>
      </div>
    </nav>

    <!-- Мобильные кнопки (бургер + тема) -->
    <div class="flex items-center gap-3 lg:hidden">
      <!-- Кнопка темы -->
      <button @click="toggleTheme"
        class="p-2 rounded-full transition-colors"
        :class="isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'">
        <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>

      <!-- Бургер -->
      <button @click="menuOpen = !menuOpen"
        class="p-2 rounded-full transition-colors"
        :class="isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Мобильное меню -->
    <transition name="slide">
      <div v-if="menuOpen"
        class="fixed inset-0 top-[73px] z-50 lg:hidden"
        :class="isDark ? 'bg-[#0f0f0f]' : 'bg-white'">
        <nav class="flex flex-col items-center gap-6 pt-12 px-6">
          <router-link @click="menuOpen = false" to="/magazine"
            class="font-['DM_Sans',sans-serif] text-[24px] font-medium transition-colors"
            :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
            Magazine
          </router-link>
          <router-link @click="menuOpen = false" to="/authors"
            class="font-['DM_Sans',sans-serif] text-[24px] font-medium transition-colors"
            :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
            Authors
          </router-link>
          <router-link @click="menuOpen = false" to="/podcast"
            class="font-['DM_Sans',sans-serif] text-[24px] font-medium transition-colors"
            :class="isDark ? 'text-gray-300 hover:text-amber-500' : 'text-neutral-900 hover:text-amber-600'">
            Podcast
          </router-link>

          <!-- Социальные иконки в мобильном меню -->
          <div class="flex items-center gap-6 mt-8 pt-8"
            :class="isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'">
            <a href="https://instagram.com" target="_blank" class="hover:opacity-70 transition-opacity">
              <img src="./../assets/instagram.png" alt="Instagram" class="w-[22px] h-[22px]">
            </a>
            <a href="https://twitter.com" target="_blank" class="hover:opacity-70 transition-opacity">
              <img src="./../assets/twitter.png" alt="Twitter" class="w-[22px] h-[22px]">
            </a>
            <a href="https://youtube.com" target="_blank" class="hover:opacity-70 transition-opacity">
              <img src="./../assets/youtube.png" alt="YouTube" class="w-[22px] h-[22px]">
            </a>
            <a href="/rss" target="_blank" class="hover:opacity-70 transition-opacity">
              <img src="./../assets/rss.png" alt="RSS" class="w-[22px] h-[22px]">
            </a>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme.js'

const { isDark, toggleTheme } = useTheme()
const menuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
