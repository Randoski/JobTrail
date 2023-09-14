<template>
  <div>
    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white">
          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Role-->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Role</label>
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

              <!-- Level -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Level</label>
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
                  <option v-for="level in levels" :key="level" :value="level">
                    {{ level }}
                  </option>
                </select>
              </div>

              <!-- Salary -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Salary</label>
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

              <!-- Work Structure -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Work Structure</label>
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
                  <option
                    v-for="workStructure in workStructures"
                    :key="workStructure"
                    :value="workStructure"
                  >
                    {{ workStructure }}
                  </option>
                </select>
              </div>

              <!-- Working Days -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">No. of Working Days</label>
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

              <!-- Relocation -->
              <div @click="activateForm">
                <label class="text-gray-700 text-sm font-bold">Relocation</label>
                <select
                  class="w-full mt-2 rounded-md border-gray-500 focus:border-pry"
                  :class="{
                    'border-transparent': isReadOnly,
                    'pl-0': isReadOnly,
                    'mt-0': isReadOnly,
                  }"
                  type="text"
                  :readonly="isReadOnly"
                  v-model="relocation"
                >
                  <option
                    v-for="relocation in relocations"
                    :key="relocation"
                    :value="relocation"
                  >
                    {{ relocation }}
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
      test: "Sample text",
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
      workStructures: ["Remote", "On-site", "Hybrid"],
      relocations: ["Yes", "No", "Uncertain"],
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
