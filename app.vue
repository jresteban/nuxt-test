<script setup lang="ts">
import SwitchMode from './components/switchMode.vue';
</script>

<template>
  <div class="h-screen">
  <header class="p-4 bg-gray-800 text-white flex flex-row justify-between items-center gap-4">
    <h1 class="text-4xl flex-1">My App</h1>
    <nav class="flex gap-4">
      <NuxtLink to="/" class="mr-4">Home</NuxtLink>
      <NuxtLink to="/linkShortener">Link Shortener</NuxtLink>
      <NuxtLink to="/drawer">Drawer</NuxtLink>
    </nav>
    <ClientOnly>
      <SwitchMode />

    </ClientOnly>
  </header>
  <main class="p-4 h-full">
    <NuxtPage />
  </main>
  </div>
</template>
