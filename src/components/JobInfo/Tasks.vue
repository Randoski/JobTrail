<template>
  <div>
    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Task Name -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Task Name</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="test"
                />
              </div>

              <!-- Due Date -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Due Date</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="date"
                  :readonly="isReadOnly"
                  v-model="test"
                />
              </div>

              <!-- Time -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Time</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="time"
                  :readonly="isReadOnly"
                  v-model="test"
                />
              </div>

              <!-- Status -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Status</label>
                <select
                  class="w-full mt-2 rounded-md border-gray-500 focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="status"
                >
                  <option v-for="status in statuses" :key="status" :value="status">
                    {{ status }}
                  </option>
                </select>
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <!-- Edit Button -->
              <button
                class="px-4 py-2 mr-2 text-text bg-gray-200 rounded-md hover:bg-gray-100 focus:outline-none"
                @click.prevent="toggleEdit"
              >
                {{ isReadOnly ? "Edit" : "Cancel" }}
              </button>

              <!-- Update Button -->
              <button
                class="px-4 py-2 text-gray-200 bg-pry rounded-md focus:outline-none"
                :disabled="isReadOnly"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadOnly: true,
      test: "Sample",
      statuses: ["Pending", "Completed"],
    };
  },
  methods: {
    toggleEdit() {
      this.isReadOnly = !this.isReadOnly;
    },
    activateForm() {
      this.isReadOnly = false;
    },
  },
};
</script>
