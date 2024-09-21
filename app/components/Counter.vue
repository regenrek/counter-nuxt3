<template>
  <div class="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Counter</h2>
    <div class="text-6xl font-bold text-blue-500 mb-4">{{ count }}</div>
    <p class="text-gray-600">This counter updates every second.</p>
  </div>
</template>
  
  <script setup>
  const { count } = useCounter()
  </script>