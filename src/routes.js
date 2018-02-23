import Home from './components/Home.vue'
// import Menu from './components/Menu.vue'
const Menu = () => import('./components/Menu.vue')

// import About from './components/About.vue'
const About = () => import( /*webpackChunkName: "footer-group" */ './components/About.vue')

import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
// import Admin from './components/Admin.vue'
const Admin = () => import( /*webpackChunkName: "footer-group" */ './components/Admin.vue')

export const routes = [
  { path: '/',
    name: 'homeLink',
    components: {
        default: Home,
        'history' : History,
        'contact' : Contact,
        'delivery': Delivery
    }
  },
  { path: '/menu', name: 'menuLink',component: Menu},
  { path: '/admin', name: 'adminLink',component: Admin},
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: 'contact', name: 'contactLink', component: Contact},
    { path: 'history', component: History},
    { path: 'delivery', component: Delivery},
  ]},
  { path: '*', redirect: '/'}
]
