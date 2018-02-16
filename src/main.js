import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
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

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
