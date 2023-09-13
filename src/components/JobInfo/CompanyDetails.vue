<template>
  <div>
    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Company Name -->
              <div>
                <label class="text-gray-700 text-sm" for="username">Company Name</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{ 'border-transparent': isReadOnly, 'pl-0': isReadOnly }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="companyName"
                />
              </div>

              <!-- Website -->
              <div>
                <label class="text-gray-700 text-sm" for="emailAddress">Website</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{ 'border-transparent': isReadOnly, 'pl-0': isReadOnly }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="website"
                />
              </div>

              <!-- Country -->
              <div>
                <label class="text-gray-700 text-sm" for="emailAddress">Country</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="country"
                />
              </div>

              <!-- State -->
              <div>
                <label class="text-gray-700 text-sm" for="emailAddress">State</label>
                <input
                  class="w-full mt-2 rounded-md border-gray-00 focus:border-pry"
                  :class="{ 'border-transparent': isReadOnly, 'pl-0': isReadOnly }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="state"
                />
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <!-- Edit Button -->
              <button
                class="px-4 py-2 mr-2 text-text bg-gray-400 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-400"
                @click.prevent="toggleEdit"
              >
                {{ isReadOnly ? "Edit" : "Cancel" }}
              </button>

              <!-- Update Button (only enabled when edit is clicked) -->
              <button
                class="px-4 py-2 text-gray-200 bg-pry rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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
      companyName: "Sample Company Name",
      website: "www.samplewebsite.com",
      country: "Sample Country",
      state: "Sample State",
    };
  },
  methods: {
    toggleEdit() {
      this.isReadOnly = !this.isReadOnly;
    },
  },
};
</script>
