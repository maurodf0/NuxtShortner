import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const supabase = await serverSupabaseClient(event)

  const { longUrl, shortKey } = body

  // Ottieni l'utente autenticato
  const { data: userData, error: userError } = await supabase.auth.getUser()

  if (userError || !userData?.user) {
    return { status: 'error', message: 'Authentication required' }
  }

  const { data, error } = await supabase
    .from('links')
    .insert({
      long_url: longUrl,
      key: shortKey,
      total_clicks: 0,
    }, { returning: 'representation' })
    .single()

  if (error) {
    return { status: 'error', message: error.message }
  }

  return {
    status: 'success',
    message: 'URL saved successfully',
    data
  }
})