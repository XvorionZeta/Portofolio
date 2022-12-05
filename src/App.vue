<script setup>
import NavBar from './components/Navbar.vue'
import Intro from './pages/Intro.vue'
import AboutMe from './pages/AboutMe.vue'
</script>

<template>
  <header>
    <div class="">
      <NavBar />
    </div>
  </header>

  <main>
    <Intro />
    <AboutMe />
  </main>
</template>