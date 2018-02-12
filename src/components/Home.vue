<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcome to Pizza Restaurant</h1>
        <h2>Feeling hungry ?</h2>
        <button class="btn btn-success">Let's order !</button>
      </div>
    </div>
  </div>
</template>
<style>
  #home {
    background: url('../../src/assets/pizza.jpg');
    height: 800px;
    padding-top: 150px; 
  }
  .background {
    padding: 20px 0;
    background: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
  }

  .background h1, h2{
    margin: 6%;
  }
</style>
