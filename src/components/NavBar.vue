<template>
  <div>
    <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-50 ">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <router-link
          to="/"
          class="text-pry self-center text-2xl font-bold whitespace-nowrap"
          >JobTrail</router-link
        >
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <router-link
            to="/sign-up"
            class="text-white bg-pry hover:bg-pryHover font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Get started
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
