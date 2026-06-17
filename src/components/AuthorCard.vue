<template>
  <div class="border border-gray-200 p-8 hover:shadow-lg transition-shadow group">
    <!-- Аватар -->
    <div class="flex justify-center mb-4">
      <img 
        :src="image" 
        :alt="name"
        class="w-[150px] h-[150px] rounded-full object-cover opacity-100"
        @error="handleImageError"
      >
    </div>
    
    <h3 class="font-['DM_Sans',sans-serif] font-semibold text-[24px] md:text-[28px] leading-[120%] tracking-tight group-hover:text-amber-700 transition-colors text-center">
      {{ name }}
    </h3>
    
    <div class="mt-4 space-y-2 text-center">
      <p class="font-['DM_Sans',sans-serif] font-normal text-[16px] text-gray-600">
        <span class="font-semibold text-gray-900">Job</span> {{ job }}
      </p>
      <p class="font-['DM_Sans',sans-serif] font-normal text-[16px] text-gray-600">
        <span class="font-semibold text-gray-900">City</span> {{ city }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  job: { type: String, required: true },
  city: { type: String, required: true },
  image: { type: String, required: true }
})

const imageSrc = ref(props.image)

const handleImageError = () => {
  imageSrc.value = 'https://placehold.co/150x150/eeeeee/999999?text=No+Image'
}
</script>