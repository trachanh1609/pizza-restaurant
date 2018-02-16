import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import Admin from './components/Admin.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'homeLink', component: Home},
  { path: '/menu', name: 'menuLink',component: Menu},
  { path: '/admin', name: 'adminLink',component: Admin},
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: 'contact', name: 'contactLink', component: Contact},
    { path: 'history', component: History},
    { path: 'delivery', component: Delivery},
  ]},
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes,  // short for routes: routes
  mode: 'history'
})

// Global Navigation Guards
router.beforeEach((to, from, next) => {
  // console.log(to);
  if(to.path==='/menu') {
    next();
  } else {
    next(false);
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
