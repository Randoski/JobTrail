<template>
  <div class="pb-16 bg-white">
    <nav
      class="w-full px-4 py-8 flex justify-between items-center fixed z-10 font-pry md:px-12"
    >
      <!-- Logo -->
      <router-link to="/" class="font-bold text-pry">TryJam</router-link>

      <!-- Nav Links -->
      <div class="md:flex md:items-center md:gap-7 text-base font-medium leading-6">
        <router-link to="/login" class="rounded px-5 py-2 py-yyy text-white bg-pry w-full"
          >Login</router-link
        >
        <router-link to="/signup" class="hidden">Sign Up</router-link>
      </div>
    </nav>
  </div>
</template>
