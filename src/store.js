import { createStore } from 'vuex'; // Import createStore from 'vuex'

export default createStore({
  state: {
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
  },
  mutations: {
  
  },
  actions: {
   
  },
  getters: {
  },
});
