<template>
  <div>
    <section class="bg-white">
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div class="md:order-2">

          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-text">Effortlessly Monitor Your Application
            Journey
          </h2>

          <p class="mb-6 font-light text-gray-500 md:text-lg">Track the status of your application from the
            pre-application stage all the way through until you secure the job.
          </p>

          <router-link to="/sign-up"
            class="inline-flex items-center text-white bg-pry hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-16">
            Get started
            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </router-link>

        </div>

        <img class="w-full md:order-1"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image">
      </div>
    </section>
  </div>
</template>
