<template>
  <article class="stat">
    <div class="stat-figure" :class="color">
      <Icon :name="iconName" size="4em"/>
    </div>
    <div class="stat-title text-gray-500">
      {{ title }}
    </div>
    <div class="stat-value text-black" :class="color">
      {{ stat }}
    </div>
    <div class="stat-desc text-gray-500">
      {{ desc }}
    </div>
  </article>
</template>

<script setup lang="ts">
  const props = defineProps(["iconName", "title", "stat", "desc", "color"])
</script>