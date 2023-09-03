<template>
  <div>
    <!-- Heading and Add button -->
    <div class="flex flex-col md:flex-row md:justify-between">
      <h3 class="text-3xl font-medium text-gray-700 mb-4 md:mb-0 md:mr-4">Job Board</h3>

      <router-link
        to="/add-job"
        class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-pry rounded-md hover:bg-pry focus:outline-none focus:bg-pry"
      >
        Add Job
      </router-link>
    </div>
    <!-- Filter Section-->
    <div class="mt-8">
      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">All Stages</h2>

        <!-- Top Buttons -->
        <div class="flex flex-col mt-3 sm:flex-row">
          <div class="flex">
            <!-- Zone Filter -->
            <div class="relative">
              <select
                v-model="selectedZone"
                class="cursor-pointer block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-2 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="All">All Stages</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>

            <!-- Export -->
            <div class="relative">
              <div
                @click="exportCSV"
                class="cursor-pointer block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              >
                Export
              </div>
            </div>
          </div>

          <!-- Search -->
          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search for a Company"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <!-- Table -->
        <div class="mt-8" />

        <div class="flex flex-col mt-8">
          <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
            >
              <table class="min-w-full">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Company
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Role
                    </th>

                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Stage
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Salary
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <template v-if="newConverts.length > 0">
                    <tr v-for="newConvert in newConverts" :key="newConvert.id">
                      <!-- Name Data -->
                      <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div>
                          <div class="ml-3">
                            <div class="text-sm font-medium leading-5 text-gray-900">
                              <span>{{ newConvert.name }}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <!-- Number Data -->
                      <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="text-sm leading-5 text-gray-500">
                          <p>{{ newConvert.number }}</p>
                        </div>
                      </td>

                      <!-- Date Data -->
                      <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="text-sm leading-5 text-gray-500">
                          <p>{{ newConvert.thirdDate }}</p>
                        </div>
                      </td>

                      <!-- Zone data  -->
                      <td
                        class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                      >
                        <span>{{ newConvert.zone }}</span>
                      </td>

                      <td
                        class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                      >
                        <router-link> View </router-link>
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td
                        :colspan="zones.length + 2"
                        class="py-4 text-center text-gray-500"
                      >
                        No jobs
                        {{
                          selectedZone === "All"
                            ? "to display"
                            : "to display in your " + selectedZone + " category"
                        }}.
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
  </div>
</template>

<script>
import { onSnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../main";
export default {
  data() {
    return {
      // Array to hold member details from firestore
      newConverts: [],
      selectedZone: "All",
      zones: [
        "Adeniran Ogunsanya",
        "Ago / Okota",
        " Aguda / Coker",
        "Akiwunmi / Cole",
        "Costain",
        "Igbaja / Shitta",
        "Ijesha 1",
        "Ijesha 2",
        "Ikate",
        "Iponri / Eric Moore",
        "Lawanson",
        "Mushin",
        "Ojuelegba",
        "Orile",
        "Yaba 1 ",
        "Yaba 2 ",
        "Yaba 3 ",
        "YabaTech",
        "Others",
      ],
    };
  },

  // Display data from firestore
  mounted() {
    this.fetchMembers();
  },

  watch: {
    selectedZone(newZone) {
      this.fetchMembers(newZone);
    },
  },

  methods: {
    // Fetch first Timers
    async fetchMembers(zone = "All", dateFilter = "All") {
      try {
        const membersCollection = collection(db, "new-convert");
        let querySnapshot;

        if (zone === "All") {
          const q = query(membersCollection);
          querySnapshot = await getDocs(q);
        } else {
          const q = query(membersCollection, where("zone", "==", zone));
          querySnapshot = await getDocs(q);
        }

        this.newConverts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching members: ", error);
      }
    },

    // Export CSV
    exportCSV() {
      // Naming Download form
      const zoneName = this.selectedZone === "All" ? "All Zones" : this.selectedZone;
      const fileName = `${zoneName} new-converts.csv`;

      // Order of fields in CSV
      const columnOrder = ["name", "number", "address", "thirdDate", "zone"];

      // Mapping / renaming fields from Firestore to header name on CSV
      const fieldDisplayNames = {
        name: "Name",
        number: "Phone Number",
        address: "Address",
        thirdDate: "Date",
        zone: "Zone",
      };

      const csvContent =
        "data:text/csv;charset=utf-8," +
        columnOrder.map((column) => fieldDisplayNames[column]).join(",") +
        "\n" +
        this.newConverts
          .map((newConvert) => {
            return columnOrder.map((column) => newConvert[column]).join(",");
          })
          .join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", fileName);
      document.body.appendChild(link); // Required for Firefox
      link.click();
    },
  },
};
</script>
