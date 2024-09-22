export default defineEventHandler(async (event) => {
  // Simulate fetching initial countdown from a database
  const initialCountdown = Math.floor(Math.random() * 60) + 10 // Random number between 10 and 69
  return { initialCountdown }
})