<template>
  <main class="w-full mx-auto px-6 md:px-12 lg:px-16 py-16">
    <div class="flex flex-row items-center justify-between mb-12">
      <h2
        class="font-['DM_Sans',sans-serif] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[110%] tracking-tight">
        PODCAST
      </h2>
    </div>

    <div class="flex flex-row justify-center gap-8 flex-wrap">
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
  </main>
</template>

<script setup>
</script>
