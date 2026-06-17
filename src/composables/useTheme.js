import { ref, watch } from 'vue'

const isDark = ref(false)

// При инициализации проверяем localStorage
const stored = localStorage.getItem('theme')
if (stored === 'dark') {
  isDark.value = true
}


// Применяем тему к <html>
function applyTheme(dark) {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

applyTheme(isDark.value)

watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
  applyTheme(val)
})

export function useTheme() {
  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
