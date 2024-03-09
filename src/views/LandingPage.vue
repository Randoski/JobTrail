<template>
  <div>
    <NavBar />
    <Hero />
    <Hero3 />
    <Hero4 />
    <Hero2 />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Hero from "../components/Hero.vue";
import Hero2 from "../components/Hero2.vue";
import Hero3 from "../components/Hero3.vue";
import Hero4 from "../components/Hero4.vue";
import Footer from "../components/Footer.vue";
export default { components: { NavBar, Hero, Hero2, Hero3, Hero4, Footer} };
</script>
