import { ref, onMounted, onUnmounted } from 'vue'

export function useCounter() {
  const count = ref(0)
  const interval = ref(null)

  const increment = () => {
    count.value++
  }

  const fetchInitialCount = async () => {
    try {
      const response = await fetch('/api/getInitialCount')
      const data = await response.json()
      count.value = data.initialCount
    } catch (error) {
      console.error('Failed to fetch initial count:', error)
    }
  }

  onMounted(async () => {
    await fetchInitialCount()
    interval.value = setInterval(increment, 1000)
  })

  onUnmounted(() => {
    clearInterval(interval.value)
  })

  return {
    count
  }
}
