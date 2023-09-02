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
    apiKey: 'AIzaSyACd-Z6wGB7Z5qth0wd80FyMKMpwNvN5gQ',
    authDomain: 'dominioncity-mvp.firebaseapp.com',
    projectId: 'dominioncity-mvp',
    storageBucket: 'dominioncity-mvp.appspot.com',
    messagingSenderId: '294584207986',
    appId: '1:294584207986:web:b921f066c86ab8cd8590eb',
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



