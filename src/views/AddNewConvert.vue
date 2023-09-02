<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">Add New Convert</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            New Convert details
          </h2>

          <form @submit.prevent="save">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Name Input -->
              <div>
                <label class="text-gray-700">Name</label>
                <input
                  v-model="name"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                />
              </div>

              <!-- Phone Number Input -->
              <div>
                <label class="text-gray-700">Phone Number</label>
                <input
                  v-model="number"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                />
              </div>

              <!-- Address Input -->
              <div>
                <label class="text-gray-700">Address</label>
                <input
                  v-model="address"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                />
              </div>

              <!-- Zone Dropdown -->
              <div>
                <label class="text-gray-700">Zone</label>
                <select
                  v-model="zone"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                >
                  <option disabled value="">Select a zone</option>
                  <option v-for="zone in zones" :key="zone.id" :value="zone.name">
                    {{ zone.name }}
                  </option>
                </select>
              </div>

              <!-- Date Field -->
              <div>
                <label class="text-gray-700">Date</label>
                <input
                  v-model="thirdDate"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="date"
                />
              </div>
            </div>

            <!-- Save -->
            <div class="flex justify-end mt-4">
              <button
                :class="{
                  'bg-gray-800': !loading,
                  'bg-gray-700': loading,
                }"
                class="flex items-center px-4 py-2 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 relative"
                :disabled="saving"
              >
                <span v-if="loading"> Saving... </span>
                <span v-else> Save </span>
              </button>
              <!-- <button class="ml-3 px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                Save & Close
              </button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main";

export default {
  data() {
    return {
      loading: false,
      // Zone options
      zones: [
        { id: 1, name: "Adeniran Ogunsanya" },
        { id: 2, name: "Ago / Okota" },
        { id: 3, name: " Aguda / Coker" },
        { id: 4, name: "Akiwunmi / Cole" },
        { id: 5, name: "Costain" },
        { id: 6, name: "Igbaja / Shitta" },
        { id: 7, name: "Ijesha 1" },
        { id: 8, name: "Ijesha 2" },
        { id: 9, name: "Ikate" },
        { id: 10, name: "Iponri / Eric Moore" },
        { id: 11, name: "Lawanson" },
        { id: 12, name: "Mushin" },
        { id: 13, name: "Ojuelegba" },
        { id: 14, name: "Orile" },
        { id: 15, name: "Yaba 1 " },
        { id: 16, name: "Yaba 2 " },
        { id: 17, name: "Yaba 3 " },
        { id: 18, name: "YabaTech" },
        { id: 19, name: "Others" },
      ],

      name: "",
      number: "",
      zone: "",
      address: "",
      thirdDate: "",
      submitted: false,
    };
  },
  methods: {
    // Save
    async save() {
      if (this.submitted) {
        return;
      }

      try {
        this.submitted = true;
        this.loading = true;
        const formData = {
          name: this.name,
          number: this.number,
          address: this.address,
          zone: this.zone,
          thirdDate: this.thirdDate,
        };

        // Add the formData to the Firestore collection
        const docRef = await addDoc(collection(db, "new-convert"), formData);
        console.log("Document written with ID: ", docRef.id);
        alert("New convert added successfully");

        // Clear the form fields
        this.name = "";
        this.number = "";
        this.address = "";
        this.zone = "";
        this.thirdDate = "";
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        this.submitted = false;
        this.loading = false; // Enable the button after submission process is complete
      }
    },
  },
};
</script>
