import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'


export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const user = await serverSupabaseUser(event)


  const { data, error } = await supabase
    .from('links')
    .select('*')
    .eq('user_id', user.identities[0].user_id)

  

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
