<template>
  <div>
    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Company Namr -->
              <div>
                <label class="text-gray-700" for="username">Company Name</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  type="text"
                />
              </div>

              <!-- Website -->
              <div>
                <label class="text-gray-700" for="emailAddress">Website</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  type="text"
                />
              </div>

              <!-- Country -->
              <div>
                <label class="text-gray-700" for="emailAddress">Country</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  type="text"
                />
              </div>

              <!-- State -->
              <div>
                <label class="text-gray-700" for="emailAddress">State</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  type="text"
                />
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
