import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import GigExplore from './views/GigExplore.vue'
import GigDetails from './views/GigDetails.vue'
import GigEdit from './views/GigEdit.vue'
import GigPayment from './views/GigPayment.vue'
import BecomeSeller from './views/BecomeSeller.vue'
import UserProfile from './views/UserProfile.vue'
import UserGigs from './cmps/UserGigs.vue'
import UserOrders from './cmps/UserOrders.vue'
import SellerOrders from './views/SellerOrders.vue/'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'GigExplore',
    component: GigExplore
  },
  {
    path: '/gig/:gigId',
    name: 'GigDetails',
    component: GigDetails
  },

  {
    path: '/payment/:gigId?',
    name: 'GigPayment',
    component: GigPayment
  },

  {
    path: '/seller',
    name: 'BecomeSeller',
    component: BecomeSeller,
  },
{

  path: '/seller/orders',
  name: 'SellerOrders',
  component: SellerOrders,
},

  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile,
    children: [
      {
        name: 'UserGigs',
        path: '',
        component: UserGigs,
      },
      {
        name: 'user-order',
        path: 'user-order',
        component: UserOrders,
      },
    ]
  },

  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  // {
  //   path: '/login',
  //   name: 'LoginSignup',
  //   component: LoginSignup
  // },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/gig/edit/:gigId?',
    name: 'edit',
    component: GigEdit
  },


]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

