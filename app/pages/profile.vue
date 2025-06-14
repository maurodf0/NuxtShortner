<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else {
    navigateTo('/');
  }
};

</script>

<template>
  <div>
  <div class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Profile</h1>
    <p class="text-gray-400">This is your profile page.</p>
    <p class="text-gray-400">You can add more profile features here.</p>
  </div>
  <div class="container mt-10 ">
    <h2 class="text-2xl font-bold mb-4 ">User Information</h2>
    <p class="text-gray-400">Name: {{ user?.user_metadata.full_name || 'N/A' }}</p>
    <p class="text-gray-400">Email: {{ user?.email || 'N/A' }}</p>
  
    <button @click="signOut" class="btn btn-primary mt-4">Sign Out</button>
  </div>

</div>
</template>