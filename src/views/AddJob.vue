<template>
  <div class="mt-4">
    <h4 class="text-gray-600 font-bold">Job details</h4>

    <div class="mt-4">
      <div class="w-full max-w-sm overflow-hidden">
        <form>
          <!-- Company Name -->
          <div class="pt-6 pb-6 text-gray-700 border-b">
            <label class="text-xs">Company Name</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                class="w-full px-3 py-2 border-transparent rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
              />
            </div>
          </div>

          <!-- Role -->
          <div class="pb-6 text-gray-700 border-b">
            <label class="text-xs">Role</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                class="w-full px-3 py-2 border-transparent rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
              />
            </div>
          </div>

          <!-- Role -->
          <div class="pb-6 text-gray-700 border-b">
            <label class="text-xs">Level</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                class="w-full px-3 py-2 border-transparent rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
              />
            </div>
          </div>

          <!-- Category -->
          <div class="pb-6 text-gray-700 border-b">
            <label class="text-xs">Level</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                class="w-full px-3 py-2 border-transparent rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
              />
            </div>
          </div>

          <div class="flex items-center justify-between px-5 py-3">
            <button
              class="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Cancel
            </button>
            <button
              class="px-3 py-1 text-sm text-white bg-pry rounded-md hover:bg-pry focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
