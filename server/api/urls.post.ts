import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = await serverSupabaseClient(event)

  const { url, shortKey } = body

  // Example: Save to DB or do something with the input
  console.log('Received URL:', url, 'Short Key:', shortKey)

  const { data, error } = await supabase
  .from('links')
  .insert({ long_url: url, key: shortKey }, { returning: 'representation' })

if (error) {
  return { status: 'error', message: error.message }
}

return {
  status: 'success',
  message: 'URL saved successfully',
  data: data?.[0] || null
}
})