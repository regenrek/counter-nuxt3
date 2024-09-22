<template>
  <div class="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Countdown</h2>
    <div class="text-6xl font-bold text-red-500 mb-4">{{ countdown }}</div>
    <p class="text-gray-600">This countdown updates every second.</p>
  </div>
</template>

<script setup lang="ts">
const { countdown } = useCountdown()
</script>