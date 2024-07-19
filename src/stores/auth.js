import { defineStore } from 'pinia';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import router from '../router'; // adjust the path as necessary

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        error: null,
    }),

    actions: {
        async login(email, password) {
            const auth = getAuth();
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                this.user = userCredential.user;
                this.error = null;
                router.push('/dashboard');
            } catch (error) {
                this.error = error.message;
            }
        },

        async logout() {
            const auth = getAuth();
            try {
                await signOut(auth);
                this.user = null;
                router.push('/login');
            } catch (error) {
                this.error = error.message;
            }
        },

        initializeAuth() {
            const auth = getAuth();
            auth.onAuthStateChanged((user) => {
                this.user = user;
            });
        },
    },
});
