<template>
  <ul class="list-disc pl-3">
    <li v-for="[name, url] of props.links">
      <a :href="url" :title="name" target="_blank" class="text-vue underline">{{ name }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
  const props = defineProps<{links: [string, string][]}>()
</script>