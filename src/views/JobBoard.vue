<template>
  <div>
    <!-- Heading and Add button -->
    <div class="flex flex-col md:flex-row md:justify-between">
      <h3 class="text-3xl font-medium text-gray-700 mb-4 md:mb-0 md:mr-4">New Convert</h3>

      <button
        @click="open = true"
        class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-pry rounded-md hover:bg-pry marker:focus:outline-none focus:bg-pry"
      >
        Add job
      </button>
    </div>

    <!-- Modal -->
    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="open = false"
      />

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div class="px-6 py-6 text-left modal-content">
          <!-- Add Job -->
          <div class="flex items-center justify-between pb-3">
            <h3 class="font-bold">Add Job</h3>

            <div class="z-50 cursor-pointer modal-close" @click="open = false">
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!-- Body -->
          <div>
            <div class="w-full max-w-sm overflow-hidden">
              <!-- Form -->
              <form>
                <div class="py-4 text-gray-700">
                  <!-- Company Name -->

                  <label class="text-xs">Name</label>
                  <input
                    type="text"
                    class="text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  />

                  <!-- Role -->
                  <label class="text-xs">Role</label>
                  <input
                    type="text"
                    class="text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  />

                  <!-- Role -->
                  <label class="text-xs">Level</label>
                  <select
                    name="org-level"
                    class="text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  >
                    <option v-for="level in levels" :key="level.name" :value="level.name">
                      {{ level }}
                    </option>
                  </select>

                  <!-- Stage -->
                  <label class="text-xs">Stage</label>
                  <select
                    name="org-level"
                    class="text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry focus:ring focus:ring-opacity-40 focus:ring-pry"
                  >
                    <option v-for="stage in stages" :key="stage.name" :value="stage.name">
                      {{ stage }}
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </div>

          <!-- Footer -->
          <div class="flex justify-end">
            <!-- <button
              class="px-6 py-3 mr-2 text-pry bg-transparent rounded-lg hover:bg-gray-100 hover:text-pry focus:outline-none"
              @click="open = false"
            >
              Continue
            </button> -->
            <button
              class="p-3 px-6 py-3 text-white bg-pry rounded focus:outline-none"
              @click="open = false"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Table -->
    <Table />
  </div>
</template>

<script>
import { ref } from "vue";
import Table from "../components/Table.vue";

export default {
  components: {
    Table,
  },
  data() {
    return {
      open: ref(false),
      levels: [
        "Intern",
        "Junior / Entry Level",
        "Mid-Level",
        "Senior-level",
        "Managerial / Supervisory",
        "Director",
        "Executive",
        "C-Suite",
        "Board of Directors",
      ],
      stages: ["Wishlist", "Applied", "Interview", "Offer", "Rejected"],
    };
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
