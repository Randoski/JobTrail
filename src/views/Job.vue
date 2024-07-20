<template>
  <div>
    <!-- Page Heading -->
    <div class="flex flex-col md:flex-row md:justify-between">
      <h3 class="text-xl font-medium text-gray-700 mb-4 md:mb-0 md:mr-4">NaHere Limited</h3>
    </div>

    <!-- Tabs with scrollbar -->
    <div class="flex mt-4 overflow-x-auto hide-scrollbar overflow-y-scroll space-x-4">
      <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="[
        'cursor-pointer pr-4 py-2 rounded-lg whitespace-nowrap font-medium ',
        activeTab === index ? 'text-pry' : 'text-gray-500 hover:text-pry ',
      ]">
        {{ tab.label }}
      </div>
    </div>


    <!-- Tab Content -->
    <div class="mt-6 hide-scrollbar overflow-y-scroll">
      <!--Company Details -->
      <div v-if="activeTab === 0">
        <CompanyDetails />
      </div>

      <!--Company Details -->
      <div v-if="activeTab === 1">
        <Notes />
      </div>

      <!-- Tasks -->
      <div v-if="activeTab === 2">
        <Tasks />
      </div>

      <!--Notes-->
      <div v-if="activeTab === 3">
        <Interview />

      </div>

      <!--Reviews-->
      <div v-if="activeTab === 4">
        <Review />
      </div>
    </div>
  </div>
</template>

<script>
import CompanyDetails from "../components/JobInfo/CompanyDetails.vue";
import Interview from "../components/JobInfo/Interview.vue";
import Tasks from "../components/JobInfo/Tasks.vue";
import Notes from "../components/JobInfo/Notes.vue";
import Review from "../components/JobInfo/Review.vue";

export default {
  components: { CompanyDetails, Interview, Tasks, Notes, Review },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: "Company Details" },
        { label: "Notes" },
        { label: "Interview" },
        { label: "Tasks" },
        { label: "Review" },
      ],
      tab1Data: [
        { id: 1, name: "Item 1", description: "Description for Item 1" },
        { id: 2, name: "Item 2", description: "Description for Item 2" },
        { id: 3, name: "Item 3", description: "Description for Item 3" },
      ],
    };
  },
  methods: {
    update() { },
  },
};
</script>
