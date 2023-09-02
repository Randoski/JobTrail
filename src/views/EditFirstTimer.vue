<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">Edit First Timer</h3>

    <div class="mt-8">
      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            First Timer details
          </h2>

          <form @submit.prevent="update">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <!-- Name Input -->
              <div>
                <label class="text-gray-700">Name</label>
                <input
                  v-model="editedName"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                />
              </div>
              <!-- Phone Number Input -->
              <div>
                <label class="text-gray-700">Phone Number</label>
                <input
                  v-model="editedNumber"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                />
              </div>
              <!-- Address Input -->
              <div>
                <label class="text-gray-700">Address</label>
                <input
                  v-model="editedAddress"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                />
              </div>
              <!-- Date Input -->
              <div>
                <label class="text-gray-700">Date</label>
                <input
                  v-model="editedFirstDate"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="date"
                />
              </div>
              <!-- Category -->
              <div>
                <div class="text-gray-700 block">Category</div>
                <div class="mt-2 space-y-2">
                  <label
                    v-for="category in categories"
                    :key="category.id"
                    class="flex items-center"
                  >
                    <input
                      v-model="editedSelectedCheckboxes"
                      type="checkbox"
                      :value="category.name"
                      class="mr-2 text-indigo-600"
                    />
                    {{ category.name }}
                  </label>
                </div>
              </div>
              <!-- Zone Dropdown -->
              <div>
                <label class="text-gray-700">Zone</label>
                <select
                  v-model="editedZone"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                >
                  <option disabled value="">Select a zone</option>
                  <option v-for="zone in zones" :key="zone.id" :value="zone.name">
                    {{ zone.name }}
                  </option>
                </select>
              </div>
              <!-- Gender -->
              <div>
                <label class="text-gray-700">Gender</label>
                <select
                  v-model="editedGender"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                >
                  <option disabled value="">Gender</option>
                  <option v-for="gender in genders" :key="gender.id" :value="gender.name">
                    {{ gender.name }}
                  </option>
                </select>
              </div>
              <!-- Academic Level -->
              <div>
                <label class="text-gray-700">Academic Level</label>
                <select
                  v-model="editedAcademic"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                >
                  <option disabled value="">Academic Level</option>
                  <option
                    v-for="academic in academics"
                    :key="academic.id"
                    :value="academic.name"
                  >
                    {{ academic.name }}
                  </option>
                </select>
              </div>
              <!-- Age Group Dropdown -->
              <div>
                <label class="text-gray-700">Age group</label>
                <select
                  v-model="editedAge"
                  class="cursor-pointer w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                >
                  <option disabled value="">Age group</option>
                  <option v-for="age in ages" :key="age.id" :value="age.name">
                    {{ age.name }}
                  </option>
                </select>
              </div>
              <!-- Prayer request -->
              <div>
                <label class="text-gray-700">Prayer request</label>
                <textarea
                  v-model="editedPrayerRequest"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                ></textarea>
              </div>
              <!-- Positive comment -->
              <div>
                <label class="text-gray-700">Positive comment</label>
                <textarea
                  v-model="editedPositiveComment"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                ></textarea>
              </div>
              <!-- Negative comment -->
              <div>
                <label class="text-gray-700">Negative Comment</label>
                <textarea
                  v-model="editedNegativeComment"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                ></textarea>
              </div>
            </div>
            <!-- Save -->
            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
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
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../main";

export default {
  props: {
    id: String,
  },
  data() {
    return {
      member: {},
      categories: [
        { id: 1, name: "Free Skills" },
        { id: 2, name: "Sport Academy" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
      ],

      // Zone options
      zones: [
        { id: 1, name: "Adeniran Ogunsanya" },
        { id: 2, name: "Ago / Okota" },
        { id: 3, name: " Aguda / Coker" },
        { id: 4, name: "Akiwunmi / Cole" },
        { id: 5, name: "Costain" },
        { id: 6, name: "Igbaja / Shitta" },
        { id: 7, name: "Ijesha 1" },
        { id: 8, name: "Ijesha 2" },
        { id: 9, name: "Ikate" },
        { id: 10, name: "Iponri / Eric Moore" },
        { id: 11, name: "Lawanson" },
        { id: 12, name: "Mushin" },
        { id: 13, name: "Ojuelegba" },
        { id: 14, name: "Orile" },
        { id: 15, name: "Yaba 1 " },
        { id: 16, name: "Yaba 2 " },
        { id: 17, name: "Yaba 3 " },
        { id: 18, name: "YabaTech" },
        { id: 19, name: "Others" },
      ],

      // Gender
      genders: [
        { id: 1, name: "Male" },
        { id: 2, name: "Female" },
        { id: 3, name: "Not Specified" },
      ],

      // Academic level
      academics: [
        { id: 1, name: "Primary" },
        { id: 2, name: "SSCE" },
        { id: 3, name: "Graduate" },
        { id: 4, name: "Post Graduate" },
        { id: 5, name: "Null" },
      ],

      // Age Group
      ages: [
        { id: 1, name: "15 - 20" },
        { id: 2, name: "21 - 30" },
        { id: 3, name: "31 - 40" },
        { id: 4, name: "15 & above" },
        { id: 5, name: "Null" },
      ],
      editedName: "",
      editedNumber: "",
      editedAddress: "",
      editedFirstDate: "",
      editedSelectedCheckboxes: [],
      editedZone: "",
      editedGender: "",
      editedAcademic: "",
      editedAge: "",
      editedPrayerRequest: "",
      editedPositiveComment: "",
      editedNegativeComment: "",
    };
  },
  async created() {
    try {
      //   const docId = this.$route.params.id;
      const docRef = doc(db, "members", docId);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        this.member = docSnapshot.data();
        this.editedName = data.name;
        this.editedNumber = data.number;
        this.editedAddress = data.address;
        this.editedFirstDate = data.firstDate;
        this.editedSelectedCheckboxes = data.selectedCategories;
        this.editedZone = data.zone;
        this.editedGender = data.gender;
        this.editedAcademic = data.academic;
        this.editedAge = data.age;
        this.editedPrayerRequest = data.prayerRequest;
        this.editedPositiveComment = data.positiveComment;
        this.editedNegativeComment = data.negativeComment;
        // ... populate other edited properties
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
    }
  },

  methods: {
    async update() {
      try {
        const docId = this.$route.params.id;
        const docRef = doc(db, "members", docId);

        const updatedData = {
          name: this.editedName,
          number: this.editedNumber,
          address: this.editedAddress,
          firstDate: this.editedFirstDate,
          selectedCategories: this.editedSelectedCheckboxes,
          zone: this.editedZone,
          gender: this.editedGender,
          academic: this.editedAcademic,
          age: this.editedAge,
          prayerRequest: this.editedPrayerRequest,
          positiveComment: this.editedPositiveComment,
          negativeComment: this.editedNegativeComment,
        };

        await updateDoc(docRef, updatedData);
        console.log("Document updated successfully");

        this.$router.push("/first-timer"); // Replace with your actual route
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    const id = to.params.id; // Extract the id parameter from the route
    if (id) {
      // Fetch the member details using the id parameter
      const memberRef = doc(db, "members", id);
      getDoc(memberRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            next((vm) => {
              vm.member = docSnapshot.data();
            });
          } else {
            console.log("Member not found!");
            next(false); // Prevent entering the component
          }
        })
        .catch((error) => {
          console.error("Error fetching member: ", error);
          next(false); // Prevent entering the component
        });
    } else {
      next(false); // Prevent entering the component if id parameter is missing
    }
  },
};
</script>
