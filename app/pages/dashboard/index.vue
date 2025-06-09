<script setup lang="ts">

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const urls = ref<{
  shortKey: string;
  longUrl: string;
  id: string;
}[]>([]);



const addLink = (url: string) => {
  console.log('Adding link:', url)
  urls.value.push({
    shortKey: '/' + Math.random().toString(36).substring(2, 8),
    longUrl: url,
    id: Date.now().toString()
  });

};

</script>

<template>
<main v-if="user">
  <section class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
  </section>
  <section class="container mb-10">
    <LinkForm @SubmitForm="addLink" />
  </section>

  <section v-if="urls.length > 0" class="container">
    <LinkItem 
    class="mb-4"
      v-for="url in urls" :key="url.id" 
    :link="url" />
  </section>
</main>

<main v-else>
  <section class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
  </section>
  <section class="container mb-10">
    <p>You need to be <NuxtLink class="text-underline" to="/login">logged in</NuxtLink> to access this page.</p>
  </section>
</main>
</template>

<style scoped>
main a {
  text-decoration: underline;
}
</style>