import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import {store} from './store/store.js'
import Accounting from 'accounting-js'

Vue.use(VueRouter);


const router = new VueRouter({
  routes,  // short for routes: routes
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// Global Navigation Guards
router.beforeEach((to, from, next) => {
  // console.log(to);
  if(to.path==='/menu') {
    alert('Go to menu ?');
    next();
  } else {
    next();
  }
})

Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

Vue.component('global-component', function(resolve, reject){
  setTimeout(function(){
    resolve({
      template: '<div>This is a global component</div>'
    })
  }, 2000)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
