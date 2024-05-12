<template>
  <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
    <div class="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
      <div class="flex items-center justify-center">
        
        <router-link
          to="/"
          class="text-pry self-center text-xl font-bold whitespace-nowrap"
          >TryJam</router-link
        >
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-sm text-gray-700">Email</span>
          <input
            v-model="email"
            type="email"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-pry"
          />
        </label>

        <label class="block mt-3">
          <span class="text-sm text-gray-700">Password</span>
          <input
            v-model="password"
            type="password"
            class="block w-full mt-1 border-gray-200 rounded-md focus:border-pry"
          />
        </label>

        <div class="flex items-center justify-between mt-4">
          <router-link
            to="sign-up"
            class="mx-2 text-sm text-gray-600 hover:text-pry rounded-md focus:border-pry"
            >Don't Have an account</router-link
          >

          <router-link
            to="/forgot-password"
            class="block text-sm text-pry fontme hover:underline"
            >Forgot password?</router-link
          >
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="w-full px-4 py-2 text-sm text-center text-white bg-pry rounded-md focus:outline-none hover:bg-pry"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  
  methods: {
    login() {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;

          // alert("Logged in");
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
        });
    },
  },
};
</script>
