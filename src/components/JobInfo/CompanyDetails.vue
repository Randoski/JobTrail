<template>
  <div>

    <div class="mt-4 border-t border-gray-100">
      <div class="divide-y divide-gray-100">

        <!-- Company Name-->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Company Name</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            NaHere Limited
          </p>
        </div>

        <!-- Job Role -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Role</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Backend Developer
          </p>
        </div>

        <!-- Stage -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Stage</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Applied
          </p>
        </div>

        <!-- Level -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Level</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Mid - Level
          </p>
        </div>

        <!-- Salary Expectation -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Salary expectation</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            $120,000
          </p>
        </div>

        <!-- Work Structure -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Work Structure</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            On-site
          </p>
        </div>

        <!-- Employment Type -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Employment Type</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Full-Time
          </p>
        </div>

        <!-- Country -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Country</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Nigeria
          </p>
        </div>

        <!-- State -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">State</p>
          <p class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            Lagos
          </p>
        </div>

        <!-- Website -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Website</p>
          <a href="https://nahere.com" target="_blank"
            class="mt-1 text-sm leading-6 text-pry hover:text-pryHover sm:col-span-2 sm:mt-0 flex items-center space-x-2">
            www.nahere.com
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="size-2.5 ml-1 mt-1">
                <path fill-rule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </a>

        </div>

        <!-- Contacts -->
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <p class="text-sm font-medium leading-6 text-gray-900">Contacts</p>
          <p class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">

            <!-- Contact List -->
          <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200 pl-5">

            <!-- Contact -->
            <li class="flex items-center justify-between py-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <div class="flex min-w-0 flex-1 gap-2 ">
                  <!-- Contact Name -->
                  <span class="truncate font-medium">Randy Monye</span>
                  <!-- Contact Role -->
                  <span class="flex-shrink-0 text-gray-400 truncate ml-1">Tech Lead</span>
                </div>
              </div>

              <!-- Contact Email -->
              <div class="ml-4 flex-shrink-0">
                <a href="mailto:monyerandy15@gmail.com" target="_blank"
                  class="font-medium text-pry hover:text-pryHover flex items-center space-x-2">monyerandy15@gmail.com
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="size-2.5 ml-1 mt-1">
                      <path fill-rule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                        clip-rule="evenodd" />
                    </svg>
                  </span></a>
              </div>
            </li>

            <!-- Contact -->
            <li class="flex items-center justify-between py-4 pr-5 text-sm leading-6">
              <div class="flex w-0 flex-1 items-center">
                <div class="flex min-w-0 flex-1 gap-2 ">
                  <!-- Contact Name -->
                  <span class="truncate font-medium">Randy Monye</span>
                  <!-- Contact Role -->
                  <span class="flex-shrink-0 text-gray-400 truncate ml-1">Tech Lead</span>
                </div>
              </div>

              <!-- Contact Email -->
              <div class="ml-4 flex-shrink-0">
                <a href="mailto:monyerandy15@gmail.com" target="_blank"
                  class="font-medium text-pry hover:text-pryHover flex items-center space-x-2">monyerandy15@gmail.com
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="size-2.5 ml-1 mt-1">
                      <path fill-rule="evenodd"
                        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                        clip-rule="evenodd" />
                    </svg>
                  </span></a>
              </div>
            </li>

       

          </ul>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>
