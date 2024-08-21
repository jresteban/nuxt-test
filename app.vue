<template>

  <header class="p-4 bg-gray-800 text-white flex flex-row justify-between items-center">
    <h1 class="text-4xl">My App</h1>
    <nav>
      <NuxtLink to="/" class="mr-4">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
  </header>
  <main class="p-4">
    <NuxtPage />
  </main>
</template>
