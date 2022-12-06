<script setup>
import NavBar from './components/Navbar.vue'
import Intro from './pages/Intro.vue'
import AboutMe from './pages/AboutMe.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'
// import Experience from './pages/Experience.vue'
</script>

<template>
  <header>
    <div class="">
      <NavBar />
    </div>
  </header>

  <main>
    <Intro />
    <div class="bg-gradient-to-tl from-zinc-800 via-slate-800 to-gray-900">
      <AboutMe />
      <Projects />
      <Contact />
      <div class="flex justify-center py-10">
        <span class="max-w-xs text-xs text-sky-400">Designed & Built By Zulfikar Hidayatullah</span>
      </div>
    </div>
    <!-- <Experience /> -->
  </main>
</template>