import Vuex from 'vuex'

import { userStore } from './user.store.js'

import { reviewStore } from './review.store.js'
import { gigStore } from './gig.store.js'
import { ordersStore } from './orders.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    reviewStore,
    gigStore,
    ordersStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
