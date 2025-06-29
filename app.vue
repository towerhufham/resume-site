<template>
  <div class="bg-linear-to-br from-green-300 to-teal-300">
    <!-- <NavBar/> -->
    <main class="grid-bg min-h-screen flex flex-col justify-center items-center gap-35 py-35">
      <ContentBubble>
        <h1 class="text-4xl md:text-5xl font-bold text-shadow-sm">
          Need some <span class="text-vue">Vue?</span>
        </h1>
        <p class="py-6 text-3xl text-shadow-sm">
          I got you.
        </p>
        <InnerBubble>
          <div class="stats text-center max-md:stats-vertical">
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
        </InnerBubble>
      </ContentBubble>
      <ContentBubble>
        <h2 class="font-bold text-5xl">
          Experience
        </h2>
        <div class="flex justify-center gap-6 py-6 max-md:flex-col">
          <Card title="Corning (2019-2020 Internship)" imgSrc="/img/corning-logo.jpg">
            <p>Lorem iupsum!!!!</p>
          </Card>
          <Card title="Nucamp (Instructor)" imgSrc="/img/nucamp-logo.jpg">
            <p>Lorem iupsum!!!!</p>
          </Card>
          <Card title="BlueTone Media (2022-2025)" imgSrc="/img/btm-logo.png">
            <p>Lorem iupsum!!!!</p>
          </Card>
        </div>
      </ContentBubble>
    </main>
  </div>
</template>