<script setup lang="ts">
const id = useRoute().params.id
const supabase = useSupabaseClient();



//take data from Supa
const { data } = await useAsyncData('link', async () => {
  const { data, error } = await supabase
  .from('links')
  .select('*')
  .eq('key', id)
  .single()

  console.log(data)


  return data
})


//Redirect to long url
console.log()
useExternalRedirect(data.value.long_url)
</script>

<template>
  {{ id }} <br>\
  {{ data }}
</template>