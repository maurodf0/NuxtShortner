<script setup lang="ts">
</script>

<template>
<main>
  <section class="container mt-4">
    <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
  </section>
  <section class="container">
    <LinkForm />
  </section>

  <section class="container">
    <div class="card flex justify-between items-center p-4 gap-4">
      <div class="link-info">
        <div class="text-xl font-bold text-amber-500">
          /Lmn14hs
        </div>
        <div class="text-sm text-white/50">
          https://nuxt-shortner.com/a-very-long-url-that-needs-to-be-shortened
        </div>
      </div>

      <button class="btn btn-primary w-10 h-10 grid place-content-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
          </svg>
        </button>

    </div>
  </section>
</main>
</template>