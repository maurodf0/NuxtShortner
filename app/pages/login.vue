<script setup>

const supabase = useSupabaseClient()

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: '/dashboard',
    },
  })
  if (error) console.log(error)
}

const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.log(error)
}
</script>

<template>
  <section class="h-screen grid place-content-center">
    <div class="container"> 

     <div class="card">
      <button @click="signInWithOAuth" class="btn py-5 w-full rounded-full"> 
        Continue with Github
      </button>


     <hr class="border-white/15 my-6">
     <form>
      <div>
        <label for="email" class="block mb-2 text-sm  font-medium text-gray-300">Email</label>
        <input type="email" id="email" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Enter your email">
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
        <input type="password" id="password" class="input w-full border p-2 border-white/10 rounded mb-4" placeholder="Enter your Password">
      </div>
      <button type="submit" class="btn w-full py-3 rounded-full">Login</button>
      <p class="text-sm text-gray-400 mt-4">
        Don't have an account? 
        <NuxtLink to="/register" class="text-white hover:underline">Register</NuxtLink>
      </p>
     </form>

     </div>

     
    </div>

  </section>
</template>