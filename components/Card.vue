<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <NuxtImg :src="imgSrc" :alt="title"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}</h2>
      <slot></slot>
      <!-- <div class="card-actions justify-end">
        <button class="btn btn-primary">button</button>
      </div> -->
    </div>
  </div> 
</template>

<script setup lang="ts">
  const props = defineProps(["imgSrc", "title"])
</script>