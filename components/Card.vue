<template>
  <div class="card bg-white w-96 max-w-screen shadow-sm">
    <figure>
      <NuxtPicture preload :src="imgSrc" :alt="title"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title text-black">{{ title }}</h2>
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