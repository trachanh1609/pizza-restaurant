<template>
  <header class="row">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a href="/" class="navbar-brand">PIZZA PLANET</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link">Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/menu"><a class="nav-link">Menu</a></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  header {
    margin-bottom: 20px;
  }

</style>
