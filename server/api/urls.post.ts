// server/api/urls.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Example: Save to DB or do something with the input
  console.log('Received URL:', body)

  return { success: true }
})