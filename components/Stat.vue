<template>
  <article class="stat">
    <div class="stat-figure" :class="color">
      <Icon :name="iconName" size="4em"/>
    </div>
    <div class="stat-title">
      {{ title }}
    </div>
    <div class="stat-value" :class="color">
      {{ stat }}
    </div>
    <div class="stat-desc">
      {{ desc }}
    </div>
  </article>
</template>

<script setup lang="ts">
  const props = defineProps(["iconName", "title", "stat", "desc", "color"])
</script>