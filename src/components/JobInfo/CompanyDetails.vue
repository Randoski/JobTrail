<template>
  <div>
    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Company Name -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Company Name</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="companyName"
                />
              </div>

              <!-- Category -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Stage</label>
                <select
                  class="w-full mt-2 rounded-md border-gray-500 focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="stage"
                >
                  <option v-for="stage in stages" :key="stage" :value="stage">
                    {{ stage }}
                  </option>
                </select>
              </div>

              <!-- Website -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Website</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="website"
                />
              </div>

              <!-- Country -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Country</label>
                <input
                  class="w-full mt-2 rounded-md focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="country"
                />
              </div>

              <!-- State -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">State</label>
                <input
                  class="w-full mt-2 rounded-md border-gray-00 focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="state"
                />
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
      companyName: "Sample Company Name",
      website: "www.samplewebsite.com",
      country: "Sample Country",
      state: "Sample State",
      stages: ["Wishlist", "Applied", "Interview", "Offer", "Rejected"],
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
