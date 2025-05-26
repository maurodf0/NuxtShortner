<script setup lang="ts">

  interface Links {
    name: string;
    href: string;
    id: number;
  }

  const links: Links[] = [
    { name: 'Home', href: '/', id: 1},
    { name: 'Login', href: '/login', id: 2},
    { name: 'Register', href: '/register', id: 3},
    { name: 'Dashboard', href: '/dashboard', id: 4},
  ];

</script>

<template>
  <div class="max-w-[1280px] mx-auto p-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold">Nuxt Shortner</h1>
    <nav>
      <ul class="flex space-x-4">
        <li v-for="link in links" :key="link.id">
          <NuxtLink :to="link.href" class="text-blue-500 hover:underline">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>