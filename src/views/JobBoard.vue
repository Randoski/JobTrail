<template>
  <div>
    <!-- Heading and Add button -->
    <div class="flex flex-col md:flex-row md:justify-between">
      <p class="text-3xl font-2 text-gray-700 mb-4 md:mb-0 md:mr-4">Job Board</p>

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
              <form @submit.prevent="submitData">
                <div class="py-4 text-gray-700">
                  <!-- Company Name -->

                  <label class="text-xs">Company Name</label>
                  <input
                    v-model="companyName"
                    type="text"
                    class="text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry"
                  />

                  <!-- Role -->
                  <label class="text-xs">Role</label>
                  <input
                    v-model="role"
                    type="text"
                    class="text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry"
                  />

                  <!-- Level-->
                  <label class="text-xs">Level</label>
                  <select
                    v-model="level"
                    class="cursor-pointer text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry"
                  >
                    <option value="" disabled>Select a level</option>
                    <option v-for="level in levels" :key="level" :value="level">
                      {{ level }}
                    </option>
                  </select>

                  <!-- Stage -->

                  <label class="text-xs">Stage</label>
                  <select
                    v-model="stage"
                    class="cursor-pointer text-sm w-full px-3 py-2 mt-2 mb-4 border-gray-400 rounded-md appearance-none focus:border-pry"
                  >
                    <option value="" disabled>Select a stage</option>
                    <option v-for="stage in stages" :key="stage" :value="stage">
                      {{ stage }}
                    </option>
                  </select>
                </div>

                <!-- Footer -->
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class="p-3 px-6 py-3 text-white bg-pry rounded focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
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
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../main";

export default {
  components: {
    Table,
  },
  // Data
  data() {
    return {
      open: ref(false),
      stages: ["Wishlist", "Applied", "Interview", "Offer", "Rejected"],
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
      companyName: "",
      role: "",
      level: "",
      stage: "",
    };
  },

  // Methods
  methods: {
    async submitData() {
      if (this.companyName && this.role && this.level && this.stage) {
        try {
          const formData = {
            companyName: this.companyName,
            role: this.role,
            level: this.level,
            stage: this.stage,
          };
          const docRef = await addDoc(collection(db, "jobs"), formData);
          alert(
            this.role + " at " + this.companyName + " has been added to your Job board"
          );
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      } else {
        alert("Please fill in all fields before submitting.");
      }
    },
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
