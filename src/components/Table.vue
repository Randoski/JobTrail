<template>
  <div>
    <h2 class="text-xl leading-tight mt-8 text-gray-700">All Stages</h2>

    <!-- Filter -->
    <div class="flex flex-col mt-3 sm:flex-row">
      <div class="flex">
        <div class="relative">
          <select
            class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>

        <div class="relative">
          <select
            class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <!-- Search Input -->
      <div class="relative block mt-2 sm:mt-0">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
            <path
              d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
            />
          </svg>
        </span>

        <input
          placeholder="Search"
          class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="flex flex-col mt-6">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <div v-if="loading">Loading...</div>
            <table v-else class="min - w - full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Company
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Role
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Status
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Salary
                  </th>
                  <th class="px-6 py-3 bg-gray-100 border-b border-gray-200" />
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="job in jobs" :key="job.id">
                  <td class="py-4 border-b border-gray-200 whitespace-nowrap">
                    <!-- Company Name -->
                    <div class="ml-4">
                      <div class="ml-2 text-sm font-medium leading-5 text-gray-900">
                        {{ job.companyName }}
                      </div>
                    </div>
                  </td>

                  <!-- Role  -->
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <div class="text-sm leading-5 text-gray-900">
                      {{ job.role }}
                    </div>
                  </td>

                  <!-- Stage -->
                  <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >
                      {{ job.stage }}
                    </span>
                  </td>

                  <!-- Salary -->
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ job.level }}
                  </td>

                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
                    <a href="#" class="text-pry hover:text-pry">View</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../main";

export default {
  data() {
    return {
      loading: true,
      jobs: [],
    };
  },

  methods: {
    displayJobs() {
      const jobCollection = collection(db, "jobs");

      onSnapshot(jobCollection, (querySnapshot) => {
        const jobData = [];
        querySnapshot.forEach((doc) => {
          jobData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        this.jobs = jobData;
        this.loading = false;
      });
    },
  },

  created() {
    this.displayJobs(); // Call the method to load jobs when the component is created
  },
};
</script>
