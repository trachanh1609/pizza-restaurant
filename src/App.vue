<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">

      <!--
      <pp-admin/>
      <pp-home></pp-home>
      <pp-menu></pp-menu>
      -->
      <router-view></router-view>
      <global-component></global-component>
      <global-menu-component></global-menu-component>
    </div>
    <br>
    <div class="container">
      <div class="row">
          <div class="col-sm-12 col-md-4">
            <router-view name="history"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="contact"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="delivery"></router-view>
          </div>
      </div>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Home from './components/Home.vue'
// import Menu from './components/Menu.vue'
// import Admin from './components/Admin.vue'

import {dbMenuRef, dbOrdersRef} from './firebaseConfig'

export default {
  components: {
    ppHeader: Header,    // pp = PizzaPlanet, our components, not 3rd party components
    ppFooter: Footer,
    // ppHome: Home,
    // ppMenu: Menu,
    // ppAdmin: Admin
  },
  created() {
    this.$store.dispatch('setMenuRef', dbMenuRef);
    this.$store.dispatch('setOrdersRef', dbOrdersRef);
  }
}
</script>

<style>
</style>
