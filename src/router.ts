import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LandingPage from './views/LandingPage.vue'
import Dashboard from './views/Dashboard.vue'
import JobBoard from './views/JobBoard.vue'
import AddJob from './views/AddJob.vue'
import Job from './views/Job.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import ExploreJobs from './views/ExploreJobs.vue'
import Settings from './views/Settings.vue'



const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: { layout: 'empty' },
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },

  {
    path: '/job-board',
    name: 'JobBoard',
    component: JobBoard,
    meta: { requiresAuth: true },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },

  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp,
    meta: { layout: 'empty' },
  },

  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { layout: 'empty' },
  },


  {
    path: '/add-job',
    name: 'AddJob',
    component: AddJob,
    meta: { requiresAuth: true },
  },

  {
    path: '/job',
    name: 'Job',
    component: Job,
    // props: true,
    meta: { requiresAuth: true },
  },

  {
    path: '/explore-jobs',
    name: 'ExploreJobs',
    component: ExploreJobs,
    meta: { requiresAuth: true },

  },

  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true },

  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isPageWithEmptyLayout = to.meta.layout === 'empty';

  // Skip authentication check for pages with empty layout
  if (isPageWithEmptyLayout) {
    next();
    return;
  }

  const auth = getAuth();

  // Await the onAuthStateChanged promise to ensure the user state is correctly resolved
  await new Promise<void>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (requiresAuth && !user) {
        alert('You need to log in to access this page.');
        next({
          path: '/login',
          query: { redirect: to.fullPath }, // Store the intended destination
        });
      } else if (requiresAuth && user) {
        next();
      } else {
        next();
      }

      // Resolve the promise once the onAuthStateChanged callback is executed
      resolve();
    });
  });
});

export default router
