import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown() {
  const countdown = ref(0)
  const interval = ref<NodeJS.Timeout | null>(null)

  const decrement = () => {
    if (countdown.value > 0) {
      countdown.value--
    } else {
      clearInterval(interval.value!)
    }
  }

  const fetchInitialCountdown = async () => {
    try {
      const response = await fetch('/api/getInitialCountdown')
      const data = await response.json()
      countdown.value = data.initialCountdown
    } catch (error) {
      console.error('Failed to fetch initial countdown:', error)
    }
  }

  onMounted(async () => {
    await fetchInitialCountdown()
    interval.value = setInterval(decrement, 1000)
  })

  onUnmounted(() => {
    if (interval.value) clearInterval(interval.value)
  })

  return {
    countdown
  }
}