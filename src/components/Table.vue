<template>
  <div>
    <h2 class="text-xl leading-tight mt-8 text-gray-700">Jobs Saved</h2>

    <!-- Filter -->
    <div class="flex flex-col mt-3 sm:flex-row">
      <div class="flex">
        <!-- Stages -->
        <div class="relative">
          <select
            v-model="stage"
            class="cursor-pointer block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="All">All stages</option>
            <!-- <option value="All">All stages ({{ stageLength.All }})</option> -->
            <option v-for="stage in stages" :key="stage" :value="stage">
              {{ stage }}
              <span> {{ stageLength[stage] }}</span>
            </option>
          </select>
        </div>

        <!-- Level -->
        <div class="relative">
          <select
            v-model="level"
            class="cursor-pointer block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="All">All Levels</option>
            <option v-for="level in levels" :key="level" :value="level">
              {{ level }}
            </option>
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
          class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 appearance-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
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
            <table v-else class="min-w-full">
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
                    Stage
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Level
                  </th>
                  <th class="px-6 py-3 bg-gray-100 border-b border-gray-200" />
                </tr>
              </thead>
              <!-- Display All jobs -->
              <tbody class="bg-white">
                <template v-if="jobs.length > 0">
                  <tr v-for="job in sortedJobs" :key="job.id">
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
                        class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full"
                        :class="[
                          getStage(job.stage).textColor,
                          getStage(job.stage).bgColor,
                        ]"
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
                      <router-link to="/job" class="text-pry hover:text-pry">
                        View
                      </router-link>
                    </td>
                  </tr>
                </template>

                <!-- Display if there is nothing to be displayed after filtering -->
                <template v-else>
                  <tr>
                    <td :colspan="5" class="py-4 text-center text-gray-500">
                      There is no job to display for this category.
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>

            <!-- Filtered Table -->

            <table v-else class="min-w-full">
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
                    Stage
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-100 border-b border-gray-200"
                  >
                    Level
                  </th>
                  <th class="px-6 py-3 bg-gray-100 border-b border-gray-200" />
                </tr>
              </thead>

              <tbody class="bg-white">
                <!-- Display if there are Items after filtering -->
                <template v-if="filteredJobs.length > 0">
                  <tr v-for="job in filteredJobs" :key="job.id">
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
                        class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full"
                        :class="[
                          getStage(job.stage).textColor,
                          getStage(job.stage).bgColor,
                        ]"
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
                      <router-link to="/job" class="text-pry hover:text-pry">
                        View
                      </router-link>
                    </td>
                  </tr>
                </template>

                <!-- Display if there is nothing to be displayed after filtering -->
                <template v-else>
                  <tr>
                    <td :colspan="5" class="py-4 text-center text-gray-500">
                      There is no job to display for this category.
                    </td>
                  </tr>
                </template>
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
      stage: "All",
      level: "All",
      stageLength: {
        All: 0,
      },
      jobs: [],
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
    };
  },
  methods: {
    // Display Jobs in table
    displayJobs() {
      const jobCollection = collection(db, "jobs");

      onSnapshot(jobCollection, (querySnapshot) => {
        const jobData = [];
        const stageLength = {
          All: 0, // Initialize the All stage count to 0
        };

        querySnapshot.forEach((doc) => {
          const job = {
            id: doc.id,
            ...doc.data(),
          };
          jobData.push(job);

          // Update the stage count
          if (stageLength[job.stage] === undefined) {
            stageLength[job.stage] = 1;
          } else {
            stageLength[job.stage]++;
          }
        });

        // Update the data properties
        this.jobs = jobData;
        this.stageLength = stageLength;
        this.loading = false;
      });
    },

    // Bg color and text color for stages
    getStage(stage) {
      let bgColorClass = "";
      let textColorClass = "";

      switch (stage) {
        case "Wishlist":
          bgColorClass = "bg-blue-100";
          textColorClass = "text-blue-800";
          break;
        case "Applied":
          bgColorClass = "bg-yellow-200";
          textColorClass = "text-yellow-800";
          break;
        case "Interview":
          bgColorClass = "bg-orange-200";
          textColorClass = "text-orange-800";
          break;
        case "Offer":
          bgColorClass = "bg-green-100";
          textColorClass = "text-green-800";
          break;
        case "Rejected":
          bgColorClass = "bg-red-100";
          textColorClass = "text-red-800";
          break;
        default:
          bgColorClass = "";
          textColorClass = "";
          break;
      }

      return {
        bgColor: bgColorClass,
        textColor: textColorClass,
      };
    },
  },
  computed: {
    // Filter jobs based on selected stage and level
    filteredJobs() {
      return this.jobs.filter((job) => {
        const stageMatch = this.stage === "All" || job.stage === this.stage;
        const levelMatch = this.level === "All" || job.level === this.level;
        return stageMatch && levelMatch;
      });
    },
    // Sorting Jobs to show them alphabetically based on company's name
    sortedJobs() {
      return this.jobs.slice().sort((a, b) => {
        const companyA = a.companyName.toLowerCase();
        const companyB = b.companyName.toLowerCase();

        if (companyA < companyB) {
          return -1;
        }
        if (companyA > companyB) {
          return 1;
        }
        return 0;
      });
    },
  },

  created() {
    this.displayJobs();
  },
};
</script>
