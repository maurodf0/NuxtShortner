export default defineEventHandler(async (event) => {
  return [{
    id: 1,
    shortKey: 'NSL2',
    longUrl: 'https://nuxtshortener.vercel.app'
  }, {
    id: 2,
    shortKey: '/2',
    longUrl: 'https://nuxtshortener.vercel.app'
  }]
})