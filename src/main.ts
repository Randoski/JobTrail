import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const app = createApp(App);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8oY1pp_IGI9WBlTjGh0QDu9FMFTxSVNg",
  authDomain: "job-application-manager-79c2d.firebaseapp.com",
  databaseURL: "https://job-application-manager-79c2d-default-rtdb.firebaseio.com",
  projectId: "job-application-manager-79c2d",
  storageBucket: "job-application-manager-79c2d.appspot.com",
  messagingSenderId: "852335180708",
  appId: "1:852335180708:web:26f2e8eed74050aca51f31"

};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);
console.log(db);

// Provide the Firestore instance to the app
app.provide("firestore", db);

app.component('DefaultLayout', DashboardLayout);
app.component('EmptyLayout', EmptyLayout);

app.use(router);
app.mount('#app');

export { db };
