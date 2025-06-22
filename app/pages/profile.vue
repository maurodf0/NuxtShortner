<script setup lang="ts">
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const image = ref<string>('');

definePageMeta({
  middleware: 'login'
});


const uploadAvatar = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];

  if (!file || !user.value) {
    console.log("No file selected or user not logged in");
    return;
  }

  const { error } = await supabase.storage
    .from('avatars')
    .upload(
      `avatar-${user.value.id}.png`,
      file,
      { cacheControl: '3600', upsert: true }
    );

  if (error) {
    console.error(error);
  } else {
    console.log("Upload successful");
  }
};

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
    <p class="text-gray-400">Avatar: <img :src="user?.user_metadata.avatar_url || 'https://avatars.dicebear.com/api/identicon/mauro.svg'" alt="Avatar" class="w-10 h-10 rounded-full" /></p>
   <form>
      <label for="avatar">Upload Avatar</label>
      <input class="btn text-center" type="file"  accept="image/*" @change="uploadAvatar" />
    </form>
    

  
    <button @click="signOut" class="btn btn-primary mt-4">Sign Out</button>
  </div>

</div>
</template>