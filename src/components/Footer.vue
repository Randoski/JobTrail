<template>
  <div>
    <footer class="bg-pry mt-12">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <router-link to="/" class="flex items-center text-gray-50">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">TryJam</span>
            </router-link>
          </div>
        </div>


        <div class="sm:flex sm:items-center sm:justify-between mt-16">
          <span class="text-sm text-gray-50 sm:text-center">© 2024
            <router-link to="/" class="hover:underline">TryJam™</router-link>. All Rights Reserved.
          </span>

          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <!-- GitHub -->
            <a href="https://github.com/randoski" class="text-gray-50 hover:text-gray-300 ">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path fill-rule="evenodd" 
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>


            <!-- Twitter -->
            <a href="mailto:monyerandy@yahoo.com" class="text-gray-50 hover:text-gray-300 ms-5">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M22.5 3.5a.5.5 0 0 0-.5-.5h-19a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-17zM12 13.3L3.5 7h17L12 13.3zm0 1.4l-9-5.4v10.2l9-5.4zm-9-7.1L12 11.6l9-5.4H3z"
                  clip-rule="evenodd" />
              </svg>
              <span class="sr-only">Email</span>
            </a>

          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
