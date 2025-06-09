<script setup lang="ts">

const supabase = useSupabaseClient()

const email = ref<string>('');
const password = ref<string>('');
const error = ref<string | null>(null)

 const signIn = async () => {
  error.value = null;
  const { error:signInError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
    error.value = signInError?.message || 'An error occurred during sign in'
    console.error('Error signing in:', error.message)
  } else {
    // Redirect to dashboard or handle successful login
    navigateTo('/dashboard')
  }
}

const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/dashboard' 
    },
  })
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
     <form @submit.prevent="signIn">
      <div>
        <label  for="email" class="block mb-2 text-sm  font-medium text-gray-300">Email</label>
        <input v-model="email" type="email" id="email" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Enter your email">
      </div>
      <div>
        <label  for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
        <input v-model="password" type="password" id="password" class="input w-full border p-2 border-white/10 rounded mb-4" placeholder="Enter your Password">
      </div>
      <button type="submit" class="btn w-full py-3 rounded-full">Login</button>
      <p class="text-sm text-gray-400 mt-4">
        Don't have an account? 
        <NuxtLink to="/register" class="text-white hover:underline">Register</NuxtLink>
      </p>
     </form>
     <div v-if="error" class="text-red-500 mt-4">
       <strong>Error:</strong> 
       <!-- Display the error message --> 
      {{ error }}
     </div>

     </div>

     
    </div>

  </section>
</template>