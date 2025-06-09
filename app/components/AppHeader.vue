<script setup lang="ts">

const user = useSupabaseUser();
console.log('User:', user.value);


  interface Links {
    name: string;
    href: string;
    id: number;
  }

  const links: Links[] = [
    { name: 'Home', href: '/', id: 1},
    { name: 'Login', href: '/login', id: 2},
    { name: 'Dashboard', href: '/dashboard', id: 4},
  ];

</script>

<template>
  <div class="max-w-[1280px] border-b mx-auto p-4 flex justify-between items-center">
    <NuxtLink to="/"><h5 class="text-2xl font-bold">Nuxt Shortner</h5></NuxtLink>
    <nav>
      <ul class="flex space-x-4 items-center">
        <li v-for="link in links" :key="link.id">
          <NuxtLink :to="link.href" class="hover:underline"> 
            {{ link.name }}
          </NuxtLink>
        </li>
        <NuxtLink to="/register" class="btn">Register</NuxtLink>
      </ul>
    </nav>
  </div>
</template>