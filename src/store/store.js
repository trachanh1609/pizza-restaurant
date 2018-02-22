import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import { firebaseMutations } from 'vuexfire'
import { firebaseAction } from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menuItems: [],
    orders: [],
    currentUser: null
  },
  getters: {
    getMenuItems: state => state.menuItems,
    numberOfOrders: state => state.orders.length,
    currentUser: state => state.currentUser
  },
  mutations: {
    addOrder: (state, orders) => state.orders.push(...orders),
    userStatus (state, user) {
      if(user) {
        state.currentUser = user
      } else {
        state.currentUser = null
      }
    },
    ...firebaseMutations
  },
  actions: {
    setMenuRef : firebaseAction(({ bindFirebaseRef }, { ref }) => {
      // bunding will automatically unbind any previously bound ref so you
      // don't need to unbind before binding over an existing bound key
      bindFirebaseRef('menuItems', ref)
      // it is possible to unbind a bound key at any time

    })
  }
  // actions: {
  //   // setUser({commit}, user) {
  //   //   commit('userStatus', user)
  //   // }
  //   // or parse the whole context, then you can access context.getters, context.state
  //   // setUser(context, user) {
  //   //   context.commit('userStatus', user)
  //   // }
  // }
})
