<template>
  <section class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div>
        <h1 class="text-5xl font-bold">Need some <span class="text-vue">Vue?</span></h1>
        <p class="py-6 text-3xl">
          I got you.
        </p>
        <div class="stats shadow">
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
            title="Students Mentored" 
            stat="20" 
            desc="Average rating of 4.4/5"
            />
        </div>
      </div>
    </div>
  </section>
</template>