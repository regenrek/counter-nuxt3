export default defineEventHandler(async (event) => {
    // Simulate fetching initial count from a database
    const initialCount = Math.floor(Math.random() * 100)
    return { initialCount }
  })