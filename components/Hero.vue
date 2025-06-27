<template>
  <section class="md:hero bg-base-200 md:min-h-screen" id="hero">
    <div class="hero-content text-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold">Need some <span class="text-vue">Vue?</span></h1>
        <p class="py-6 text-3xl">
          I got you.
        </p>
        <div class="stats bg-white shadow-lg border border-solid border-slate-300 max-md:stats-vertical">
          <Stat 
            iconName="flowbite:vue-solid" 
            color="text-vue" 
            title="Years of Vue Experience" 
            stat="4" 
            desc="Mentored by coworkers on live projects"
            />
          <Stat 
            iconName="akar-icons:typescript-fill" 
            color="text-ts" 
            title="Years of TS Experience" 
            stat="3" 
            desc="Union types are my favorite"
            />
          <Stat 
            iconName="ph:student-fill" 
            color="text-black" 
            title="Coding Instructor Reviews" 
            stat="4.86/5" 
            desc="Averaged across 68 students"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #hero {
    background-size: 40px 40px;
    background-image:
      linear-gradient(to right, rgb(216, 216, 216) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(216, 216, 216) 1px, transparent 1px);
  }
</style>