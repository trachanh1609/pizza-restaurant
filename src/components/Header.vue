<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="/" class="navbar-brand">PIZZA PLANET</a>
      <ul class="navbar-nav">
          <router-link tag="li" to="/"><a class="nav-link">Home</a></router-link>
          <router-link tag="li" to="/menu"><a class="nav-link">Menu</a></router-link>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    margin-bottom: 20px;
  }

</style>
