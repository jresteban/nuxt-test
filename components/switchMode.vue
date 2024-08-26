<template>
  <UToggle v-model="isDarkMode" on-icon="i-heroicons-moon-16-solid" off-icon="i-heroicons-sun-16-solid" />
</template>
<script setup lang="ts">
const colorMode = useColorMode()

const isDarkMode = computed({
  get: () => colorMode.value === 'dark',
  set: (value: boolean) => {
    colorMode.preference = value ? 'dark' : 'light'
  }
})
</script>