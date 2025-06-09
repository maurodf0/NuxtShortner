<script setup lang="ts">

const user = useSupabaseUser();
const supabase = useSupabaseClient();
console.log('User:', user.value);


  const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}

</script>

<template>
  <div class="max-w-[1280px] border-b border-white/10 mx-auto p-4 flex justify-between items-center">
    <NuxtLink to="/"><h5 class="text-2xl font-bold">Nuxt Shortner</h5></NuxtLink>
    <nav>
      <ul class="flex space-x-4 items-center">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li v-if="user">
          <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        </li>
        <li v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        
        <div v-if="user" class="user-meta">
          <NuxtLink to="/profile"><img :src="user.user_metadata.avatar_url" alt="User Avatar" class="border-2 border-white/20 w-8 h-8 rounded-full"></NuxtLink>
        </div>
      </ul>
    </nav>
  </div>
</template>