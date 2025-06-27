<template>
  <section class="bg-linear-to-br from-teal-100 to-green-200">
    <div class="md:hero md:min-h-screen grid-bg">
      <div class="hero-content text-center bg-green-100 border border-solid border-slate-300 rounded-lg shadow-lg">
        <div class="py-6">
          <h1 class="text-4xl md:text-5xl font-bold text-shadow-sm">
            Need some <span class="text-vue">Vue?</span>
          </h1>
          <p class="py-6 text-3xl text-shadow-sm">
            I got you.
          </p>
          <div class="stats bg-white shadow-md border border-solid border-slate-300 max-md:stats-vertical">
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
    </div>
  </section>
</template>