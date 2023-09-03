import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from './views/LandingPage.vue'
import Dashboard from './views/Dashboard.vue'
import JobBoard from './views/JobBoard.vue'
import AddJob from './views/AddJob.vue'
import NewConvert from './views/NewConvert.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import AddNewConvert from './views/AddNewConvert.vue'
import Profile from './views/Profile.vue'
import Forms  from './views/Forms.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    meta: { layout: 'empty' },
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
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },

  {
    path: '/job-board',
    name: 'JobBoard',
    component: JobBoard,
  },

  {
    path: '/add-job',
    name: 'AddJob',
    component: AddJob,
  },



  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
 
  
  {
    path: '/new-convert',
    name: 'NewConvert',
    component: NewConvert,
  },
  
  
  {
    path: '/add-new-convert',
    name: 'AddNewConvert',
    component: AddNewConvert,
  },

  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  }, 
  
 
   
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
