<template>
  <section class="flex flex-col p-8 items-center h-full gap-4">
    <div class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
      Link Shortener </div>
    <div class="text-xl">Put a valid URL and click "shorten" button. The shortened URL will then be displayed.</div>
    <div class="flex flex-row items-center gap-2">
      <UInput v-model="url" placeholder="URL" variant="outline" color="white" class="w-96 p-8" />
      <UButton @click="shorten">Shorten</UButton>
    </div>
    <article>
      <div class="text-xl">Shortened URL:</div>
      <div class="text-2xl font-bold">{{ shortedLink }}</div>
    </article>

  </section>
</template>
<script setup lang="ts">

interface LinkShortenerResponse {
  link: string
}

const runtimeConfig = useRuntimeConfig()

const url = ref<string>('')
const shortedLink = ref<string | undefined>('')

const shorten = async () => {
  console.log('Shortening URL:', url.value)
  try {
    const { link } = await $fetch<LinkShortenerResponse>('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      body: { long_url: url.value },
      headers: {
        'Authorization': `Bearer ${runtimeConfig.public.bitlyToken}`,
        'Content-Type': 'application/json'
      }
    })
    shortedLink.value = link
  } catch (error) {
    console.error('Error shortening URL:', error.data.description)
    throw new Error(error.data.description)
  }
}

</script>