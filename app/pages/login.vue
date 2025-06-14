<script setup lang="ts">

const supabase = useSupabaseClient()

const email = ref<string>('');
const password = ref<string>('');

const login = ref<boolean>(true);
const message = ref<string | null>(null)

watch(login, () => {
  console.log('Login:', login.value)
})

 const signIn = async () => {

  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (error) {
  console.log(error);
  message.value = error?.message || 'An error occurred during sign in'
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

const signUp = async () => {
  message.value = null;
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) console.log(error)

  if (data) {
    message.value = 'Account created successfully! Please confirm your email to activate your account.'
  }

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
     <div v-if="login">

     <form @submit.prevent="signIn">
      <div>
        <label  for="email" class="block mb-2 text-sm  font- medium text-gray-300">Email</label>
        <input v-model="email" type="email" id="email" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Enter your email">
      </div>
      <div>
        <label  for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
        <input v-model="password" type="password" id="password" class="input w-full border p-2 border-white/10 rounded mb-4" placeholder="Enter your Password">
      </div>
      <button type="submit" class="btn w-full py-3 rounded-full">Login</button>
      <p class="text-sm text-gray-400 mt-4">
        Don't have an account? 
        <span @click="login = !login" class="text-center text-white hover:underline">Register</span>
      </p>
     </form>  

    </div>

    <div v-else>
      <form @submit.prevent="signUp">
      <div>
        <label for="email" class="block mb-2 text-sm  font- medium text-gray-300">Email</label>
        <input v-model="email" type="email" id="email" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Enter your email">
      </div>
      <div>
        <label  for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
        <input v-model="password" type="password" id="password" class="input w-full border p-2 border-white/10 rounded mb-4" placeholder="Enter your Password">
      </div>
      <button type="submit" class="btn w-full py-3 rounded-full">Register</button>
      <p class="text-sm text-gray-400 mt-4">
       Already have an account? 
        <span @click="login = !login" class="text-center text-white hover:underline">Login</span>
      </p>
     </form>  

      </div>

     <div v-if="message" class="text-red-500 mt-4">
       <strong>Error:</strong> 

      {{ message }}
     </div>

     <div v-if="message" class="mt-4">
       <strong>Info:</strong> 

      {{ message }}
     </div>

     </div>
     

     
    </div>

  </section>
</template>