<script setup lang="ts">

definePageMeta({
  middleware: 'login'
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const response = ref<string | null>('');

const urls = ref<{
  shortKey: string;
  longUrl: string;
  id: string;
}[]>([]);

onMounted(async () => {
  await getLinks();
});

const addLink = async (url: string) => {
  console.log('Adding link:', url)

  const newUrl = {
    longUrl: url,
    shortKey: '/' + Math.random().toString(36).substring(2, 8),
    id: Date.now().toString()

  }
  urls.value.push(newUrl);

  const res = await $fetch('/api/urls', {
  method: 'POST',
  body: newUrl
})

 console.log(res)

  if (res.error) {
    console.error('Error adding link:', res.error)
  } else {
    response.value = res.message;
  };

};

const getLinks = async () => {
  const res = await $fetch('/api/links');
  if (res.error) {
    console.error('Error getting links:', res.error);
  } else {
    urls.value = res;
    console.log(urls.value);
  };
};

</script>

<template>
<main v-if="user">
  <section class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
  </section>
  <section class="container mb-10">
    <LinkForm @SubmitForm="addLink" />
    {{ response }}
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