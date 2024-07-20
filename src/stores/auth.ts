import { defineStore } from 'pinia';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import router from '../router'; // adjust the path as necessary

interface State {
    user: User | null;
    error: string | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        user: null,
        error: null,
    }),

    actions: {
        async login(email: string, password: string) {
            const auth = getAuth();
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                this.user = userCredential.user;
                this.error = null;
                router.push('/dashboard');
            } catch (error: any) {
                this.error = error.message;
            }
        },

        async logout() {
            const auth = getAuth();
            try {
                await signOut(auth);
                this.user = null;
                router.push('/login');
            } catch (error: any) {
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
