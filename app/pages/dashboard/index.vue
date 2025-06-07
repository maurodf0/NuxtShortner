<script setup lang="ts">
</script>

<template>
<main>
  <section class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
  </section>
  <section class="container">
    <div class="card">
      <form class="flex items-center gap-5">
        <div class="w-5/12">
        <label for="url" class="block mb-2 text-sm font-medium text-gray-300">Enter URL to shorten</label>
        <input type="text" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Enter URL to shorten">
      </div>
      <div class="w-5/12">
        <label class="block mb-2 text-sm font-medium text-gray-300" for="shortKey" >Short Key</label>
        <input type="text" id="shortkey" class="input border p-2 rounded border-white/10 w-full mb-4" placeholder="Short Key">
      </div>
      <button class="w-2/12 mt-[10px] btn btn-primary">Shorten</button>
      </form>
    </div>
  </section>

  <section class="container">

  </section>
</main>
</template>