<template>
  <div>
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">

        <!-- Get Access to Jobs -->
        <div class="bg-gray-50 rounded-lg p-8 md:p-12 mb-8">
          <h2 class="text-text text-3xl font-extrabold mb-2">
            Get Access to Jobs
          </h2>

          <p class="text-lg font-normal text-gray-500 mb-6">
            Get access to Jobs that matches your skill sets,talent, experience and other preferences.
          </p>

          <router-link to="sign-up"
            class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-pry hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            Register
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </router-link>
        </div>

        <div class="grid md:grid-cols-2 gap-8">

          <!-- Stay Ahead of Tasks -->
          <div class="bg-gray-50 rounded-lg p-8 md:p-12">

            <h2 class="text-text text-3xl font-extrabold mb-2">
              Stay Ahead of Tasks
            </h2>

            <p class="text-lg font-normal text-gray-500 mb-4">
              Keep track with the tasks assigned to you by potential
              Employers, ensuring you meet deadlines.
            </p>

            <router-link to="/sign-up"
              class="text-pry hover:text-blue-800 font-medium text-lg inline-flex items-center">Try it Out
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </router-link>
          </div>

          <!-- Interviews -->
          <div class="bg-gray-50 rounded-lg p-8 md:p-12">

            <h2 class="text-text text-3xl font-extrabold mb-2">
              Track Your interviews with ease
            </h2>

            <p class="text-lg font-normal text-gray-500 mb-4">
              Easily monitor upcoming interviews, follow-ups, and feedback, all in one convenient place.
            </p>

            <router-link to="sign-up"
              class="text-pry hover:text-blue-800 font-medium text-lg inline-flex items-center">Try it Out
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </router-link>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
