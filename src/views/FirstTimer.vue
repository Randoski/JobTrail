<template>
  <div>
    <!-- Heading and Add button -->
    <div class="flex flex-col md:flex-row md:justify-between">
      <h3 class="text-3xl font-medium text-gray-700 mb-4 md:mb-0 md:mr-4">First Timer</h3>

      <router-link
        to="/add-first-timer"
        class="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
      >
        Add First Timer
      </router-link>
    </div>

    <!-- First Timers -->
    <div class="mt-8">
      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">All Dates</h2>

        <!-- Top Buttons -->
        <div class="flex flex-col mt-3 sm:flex-row">
          <div class="flex">
            <!-- Date Filter -->
            <div class="relative">
              <select
                v-model="selectedDateFilter"
                class="cursor-pointer block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-1 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="All">All Dates</option>
                <option v-for="date in dateFilters" :key="date" :value="date">
                  {{ date }}
                </option>
              </select>
            </div>

            <!-- Zone Filter -->
            <div class="relative">
              <select
                v-model="selectedZone"
                class="cursor-pointer block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-2 appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="All">All Zones</option>
                <option v-for="zone in zones" :key="zone" :value="zone">
                  {{ zone }}
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
              placeholder="Search"
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
                      Name
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Phone No.
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Gender
                    </th>
                    <th
                      class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                    >
                      Zone
                    </th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                  </tr>
                </thead>

                <tbody class="bg-white">
                  <template v-if="members.length > 0">
                    <tr v-for="member in members" :key="member.id">
                      <!-- Name Table Data -->
                      <td class="px-3 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div>
                          <div class="ml-3">
                            <div class="text-sm font-medium leading-5 text-gray-900">
                              <span>{{ member.name }}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <!-- Number Data -->
                      <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                        <div class="text-sm leading-5 text-gray-500">
                          <p>{{ member.number }}</p>
                        </div>
                      </td>

                      <!-- Gender Data -->
                      <td class="px-6 py-4 border-b whitespace-nowrap">
                        <span
                          class="inline-flex px-2 border-gray-500 text-gray-500 whitespace-nowra"
                          >{{ member.gender }}</span
                        >
                      </td>

                      <!-- Zone data  -->
                      <td
                        class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                      >
                        <span>{{ member.zone }}</span>
                      </td>

                      <td
                        class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                      >
                        <router-link
                          :to="{ name: 'FirstTimerDetails', params: { id: member.id } }"
                          class="cursor-pointer text-indigo-600 hover:text-indigo-900"
                        >
                          View
                        </router-link>
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <tr>
                      <td
                        :colspan="zones.length + 2"
                        class="py-4 text-center text-gray-500"
                      >
                        No data to display for
                        {{ selectedZone === "All" ? "any zone" : selectedZone }}.
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
      members: [],
      selectedZone: "All",
      selectedDateFilter: "All",

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
      dateFilters: [
        "Today",
        "Previous Service",
        "This Month",
        "Last Month",
        "This Year",
        "Last Year",
      ],
    };
  },

  // Display data from firestore
  mounted() {
    this.fetchMembers();
  },

  watch: {
    selectedZone(newZone) {
      this.fetchMembers(newZone, this.selectedDateFilter);
    },
    selectedDateFilter(newDateFilter) {
      this.fetchMembers(this.selectedZone, newDateFilter);
    },
  },

  methods: {
    // Fetch first Timers
    async fetchMembers(zone = "All", dateFilter = "All") {
      try {
        const membersCollection = collection(db, "members");
        let q = membersCollection; // Start with the basic collection reference

        if (zone !== "All") {
          q = query(q, where("zone", "==", zone)); // Add zone filter if applicable
        }

        const querySnapshot = await getDocs(q);

        this.members = querySnapshot.docs.map((doc) => ({
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
      const fileName = `${zoneName} first-timers.csv`;

      // Order of fields in CSV
      const columnOrder = [
        "name",
        "number",
        "address",
        "firstDate",
        "selectedCategories",
        "zone",
        "gender",
        "academic",
        "age",
        "prayerRequest",
        "positiveComment",
        "negativeComment",
      ];

      // Mapping / renaming fields from Firestore to header name on CSV
      const fieldDisplayNames = {
        name: "Name",
        number: "Phone Number",
        address: "Address",
        firstDate: "Date",
        selectedCategories: "Categories",
        zone: "Zone",
        gender: "Gender",
        academic: "Academic Level",
        age: "Age Range",
        prayerRequest: "Prayer Request",
        positiveComment: "Positive comment",
        negativeComment: "Negative comment",
      };

      const csvContent =
        "data:text/csv;charset=utf-8," +
        columnOrder.map((column) => fieldDisplayNames[column]).join(",") +
        "\n" +
        this.members
          .map((member) => {
            return columnOrder.map((column) => member[column]).join(",");
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
