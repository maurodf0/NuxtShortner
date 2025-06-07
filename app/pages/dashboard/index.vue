<script setup lang="ts">

const links = [
  { shortKey: '/abcsa', longUrl: 'https://www.google.com', id: '1' },
  { shortKey: '/ciao', longUrl: 'https://www.google.com/a-very-long-url', id: '2' },
];

</script>

<template>
<main>
  <section class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
  </section>
  <section class="container mb-10">
    <LinkForm />
  </section>

  <section class="container">
    <LinkItem 
    class="mb-4"
      v-for="link in links" :key="link.id" 
    :link="link" />
  </section>
</main>
</template>