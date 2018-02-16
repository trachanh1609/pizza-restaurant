<template>
<div class="container">
  <h2>About Us</h2>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a href="/" class="navbar-brand">PIZZA PLANET</a>
    <ul class="navbar-nav">
        <router-link tag="li" to="/about/history"><a class="nav-link">History</a></router-link>
        <router-link tag="li" to="/about/contact"><a class="nav-link">Contact</a></router-link>
        <router-link tag="li" to="/about/delivery"><a class="nav-link">Delivery</a></router-link>
    </ul>
  </nav>
  <router-view></router-view>
</div>
</template>
