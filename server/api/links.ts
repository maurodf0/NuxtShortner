import { serverSupabaseClient } from '#supabase/server'


export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)

  const { data, error } = await supabase
    .from('links')
    .select('*')

  if (error) {
    // Return an error response with 500 status
    event.res.statusCode = 500
    return {
      status: 'error',
      message: error.message
    }
  }

  return {
    status: 'success',
    data
  }
})
