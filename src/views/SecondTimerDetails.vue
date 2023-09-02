<template>
  <div>
    <h2 class="text-xl font-semibold leading-tight text-gray-700">
      Second Timer Details
    </h2>

    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else class="mt-8">
      <div v-if="secondTimer" class="space-y-4">
        <p><strong>Name:</strong> {{ secondTimer.name }}</p>
        <p><strong>Phone Number:</strong> {{ secondTimer.number }}</p>
        <p><strong>Address:</strong> {{ secondTimer.address }}</p>
        <p><strong>Zone:</strong> {{ secondTimer.zone }}</p>
        <p><strong>Second Date:</strong> {{ secondTimer.secondDate }}</p>

        <div class="mt-4">
          <div class="flex py-4 space-x-4 overflow-x-auto">
            <!-- Edit and delete buttons -->
            <button
              class="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
            >
              Edit
            </button>
            <button
              class="px-6 py-3 mt-3 font-medium tracking-wide text-indigo-600 rounded-md hover:bg-gray-100 focus:outline-none"
              @click="open = true"
            >
              Delete
            </button>

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
                <div
                  class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
                >
                  <svg
                    class="text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    />
                  </svg>
                  <span class="text-sm">(Esc)</span>
                </div>

                <!-- Add margin if you want to see some of the overlay behind the modal -->
                <div class="px-6 py-4 text-left modal-content">
                  <!-- Title -->
                  <div class="flex items-center justify-between pb-3">
                    <p class="text-2xl font-bold">Delete Second Timer</p>
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
                  <p>Are you sure you want to perform this action?</p>

                  <!-- Footer -->
                  <div class="flex justify-end pt-2">
                    <button
                      class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
                      @click="open = false"
                    >
                      No, Close
                    </button>
                    <button
                      class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                      @click="deleteSecondTimer()"
                    >
                      Yes, Delete.
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <p>Second Timer not found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import { doc, deleteDoc, getDoc } from "firebase/firestore";

export default {
  props: {
    id: String,
  },
  data() {
    return {
      open: false,
      isLoading: true,
      secondTimer: null,
    };
  },
  created() {
    this.fetchSecondTimer();
  },
  methods: {
    async fetchSecondTimer() {
      try {
        const secondTimerRef = doc(db, "second-timer", this.id); // Adjust the collection name
        const docSnapshot = await getDoc(secondTimerRef);

        if (docSnapshot.exists()) {
          this.secondTimer = docSnapshot.data();
        } else {
          console.log("Second Timer not found!");
        }
      } catch (error) {
        console.error("Error fetching second timer: ", error);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteSecondTimer() {
      try {
        const secondTimerRef = doc(db, "second-timer", this.id);
        await deleteDoc(secondTimerRef);
        alert("Member deleted successfully!");
        this.$router.push("/second-timer");
      } catch (error) {
        console.error("Error deleting member: ", error);
      }
    },
  },
};
</script>
