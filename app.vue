<template>
  <div class="bg-linear-to-br from-green-300 to-teal-300">
    <NavBar/>
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
        <h2 class="font-bold text-5xl text-shadow-sm">
          Professional Experience
        </h2>
        <div class="flex justify-center gap-6 py-6 max-md:flex-col">
          <Card title="Corning (2019-2020 Internship)" imgSrc="/img/corning-logo.jpg">
            <p>Lorem iupsum!!!!</p>
          </Card>
          <Card title="Nucamp (Instructor)" imgSrc="/img/nucamp-logo.jpg">
            <p>Lorem iupsum!!!!</p>
          </Card>
          <Card title="BlueTone Media (2022-2025)" imgSrc="/img/btm-logo.png">
            <p>
              Worked with team members & clients to bring local businesses' visions to life. I contributed to over a hundred websites, many that fellow North & South Carolinians may recognize:
            </p>
            <LinkList :links="[
              ['Home Telecom', 'https://www.homesc.com/'],
              ['Truvista Fiber', 'https://www.truvista.net/'],
              ['Focus Broadband', 'https://www.focusbroadband.com/'],
              ['Port City Java', 'https://www.portcityjava.com/'],
              ['Odyssey Mechanical', 'https://odysseymechanical.com/'],
              ['Local Catch', 'https://www.localcatch.app/'],
              ['ProTag', 'https://www.protag.com/'],
              ['Bald Head Island Association', 'https://www.baldheadassociation.com/']
            ]">
            </LinkList>
          </Card>
        </div>
      </ContentBubble>
      <ContentBubble>
        <h2 class="font-bold text-5xl text-shadow-sm">
          Active Projects
        </h2>
        <div class="flex justify-center gap-6 py-6 max-md:flex-col">
          <Card title="Roseburg" imgSrc="https://placehold.co/459x250">
            <p>A Nuxt/TypeScript game inspired by the board games of Uwe Rosenberg. Uses Pinia for state management, and TypeScript to manage game logic.</p>
            <div class="flex gap-2">
              <a href="https://roseburg.app/" target="_blank">
                <button class="btn bg-vue text-white">Play Online</button>
              </a>
              <a href="https://github.com/towerhufham/roseberg" target="_blank">
                <button class="btn bg-vue text-white">View on Github</button>
              </a>
            </div>
          </Card>
          <Card title="Bunny Engine (WIP)" imgSrc="https://placehold.co/459x250">
            <p>An experimental Content Management System (CMS) based on data-driven programming principals that allows for arbitrary chains of querying, logic, and non-destructive transformation to be done directly through URL manipulation. </p>
            <div class="flex gap-2">
              <a href="https://roseburg.app/" target="_blank">
                <button class="btn bg-vue text-white">Try for Free</button>
              </a>
              <a href="https://github.com/towerhufham/roseberg" target="_blank">
                <button class="btn bg-vue text-white">View on Github</button>
              </a>
            </div>
          </Card>
        </div>
      </ContentBubble>
      <ContentBubble>
        <h2 class="font-bold text-5xl text-shadow-sm">
          Education
        </h2>
        <div class="flex justify-center gap-6 py-6 max-md:flex-col">
          <Card title="UNCW (Class of 2020)" imgSrc="https://placehold.co/459x250">
            <p>
              Graduated Cum Laude with a bachelor's in Computer Science and a focus in Digital Arts
            </p>
          </Card>
          <Card title="Vue Certification" imgSrc="https://placehold.co/459x250">
            <p>
              Achieved a mid-level certificate for competency with the Vue library and ecosystem
            </p>
            <a href="https://certificates.dev/.netlify/images?url=https:%2F%2Fapi.certificates.dev%2Fcertificates%2Fthumbnail%2F9f32411a-9615-4183-8bb4-154fec395049.jpg" target="_blank">
              <button class="btn bg-vue text-white">View Certificate</button>
            </a>
          </Card>
        </div>
      </ContentBubble>
    </main>
  </div>
</template>