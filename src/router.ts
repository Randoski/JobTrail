import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import FirstTimer from './views/FirstTimer.vue'
import SecondTimer from './views/SecondTimer.vue'
import NewConvert from './views/NewConvert.vue'
import Login from './views/Login.vue'
import AddFirstTimer from './views/AddFirstTimer.vue'
import AddSecondTimer from './views/AddSecondTimer.vue'
import AddNewConvert from './views/AddNewConvert.vue'
import NewConvertDetails from './views/NewConvertDetails.vue'
import FirstTimerDetails from './views/FirstTimerDetails.vue'
import SecondTimerDetails from './views/SecondTimerDetails.vue'
import EditFirstTimer from './views/EditFirstTimer.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/first-timer',
    name: 'FirstTimer',
    component: FirstTimer,
  },
  {
    path: '/second-timer',
    name: 'SecondTimer',
    component: SecondTimer,
  },
  {
    path: '/new-convert',
    name: 'NewConvert',
    component: NewConvert,
  },
  {
    path: '/add-first-timer',
    name: 'AddFirstTimer',
    component: AddFirstTimer,
  },
  {
    path: '/add-second-timer',
    name: 'AddSecondTimer',
    component: AddSecondTimer,
  },
  {
    path: '/add-new-convert',
    name: 'AddNewConvert',
    component: AddNewConvert,
  },
  {
    path: "/new-convert-details/:id",
    name: "NewConvertDetails",
    component: NewConvertDetails,
    props: true,
  }, 
  {
    path: "/first-timer-details/:id",
    name: "FirstTimerDetails",
    component: FirstTimerDetails,
    props: true,
  }, 
  {
    path: "/second-timer-details/:id",
    name: "SecondTimerDetails",
    component: SecondTimerDetails,
    props: true,
  }, 
  {
    path: '/edit-first-timer/:id',
    name: 'EditFirstTimer',
    component: EditFirstTimer,
    props: true
  },
   
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
