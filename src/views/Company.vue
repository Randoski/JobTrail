<template>
  <div>
    <!-- Page Heading -->
    <!-- Heading and Add button -->
    <div class="flex flex-col md:flex-row md:justify-between">
      <p class="text-3xl font-2 text-gray-700 mb-4 md:mb-0">Job Board</p>
    </div>

    <!-- Tabs with scrollbar -->
    <div class="flex mt-4 overflow-x-auto space-x-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'cursor-pointer px-4 py-2 rounded-lg whitespace-nowrap',
          activeTab === index
            ? 'bg-pry text-white border-b-4 border-pry'
            : 'bg-gray-200 text-gray-700 hover:border-gray-400',
        ]"
      >
        {{ tab.label }}
      </div>
    </div>

    <!-- Tab Content -->
    <div class="mt-6">
      <div v-if="activeTab === 0">
        <!-- Tab 1 Content -->
        <div v-for="item in tab1Data" :key="item.id" class="mb-4">
          <div
            class="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
          >
            <div>
              <h2 class="text-lg font-semibold text-gray-700">{{ item.name }}</h2>
              <p class="text-gray-500">{{ item.description }}</p>
            </div>
            <div>
              <button
                @click="editItem(item)"
                class="px-3 py-1 mr-2 text-gray-700 hover:text-pry focus:outline-none"
              >
                Edit
              </button>
              <button
                @click="deleteItem(item.id)"
                class="px-3 py-1 text-red-600 hover:text-red-800 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Repeat the above structure for other tabs -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { label: "Tab 1" },
        { label: "Tab 2" },
        { label: "Tab 3" },
        { label: "Tab 4" },
        { label: "Tab 5" },
        { label: "Tab 6" },
      ],
      tab1Data: [
        { id: 1, name: "Item 1", description: "Description for Item 1" },
        { id: 2, name: "Item 2", description: "Description for Item 2" },
        { id: 3, name: "Item 3", description: "Description for Item 3" },
      ],
      // Define data for other tabs similarly
    };
  },
  methods: {
    editItem(item) {
      // Implement edit functionality for the selected item
      // You can open a modal or update the item in place
    },
    deleteItem(itemId) {
      // Implement delete functionality for the selected item
      // You can confirm the deletion and then remove the item from the data
    },
  },
};
</script>

<style>
/* Add any additional styling as needed */
</style>
