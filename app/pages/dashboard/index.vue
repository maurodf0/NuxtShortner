<script setup lang="ts">

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
<main>
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
</template>