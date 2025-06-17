<script setup lang="ts">


definePageMeta({
  middleware: 'login'
});

const user = useSupabaseUser();
const response = ref<string | null>('');

const urls = ref<{
  shortKey: string;
  longUrl: string;
  id: string;
}[]>([]);

onMounted(async () => {
  await getLinks();
});

const addLink = async (form: Object) => {
  const newUrl = {
    longUrl: form.long_url,
    shortKey: form.key,
    id: Date.now().toString()
  }

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
    urls.value = res.data;
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