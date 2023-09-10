<template>
  <div>
    <NavBar />
    <Hero />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import NavBar from "../components/NavBar.vue";
export default { components: { Hero, NavBar } };
</script>
