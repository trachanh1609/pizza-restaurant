<template>
<div>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <pp-new-pizza></pp-new-pizza>
    </div>


    <div class="col-sm-12 col-md-6">
      <h3>Menu</h3>
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Remove from Menu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margherita</td>
            <td><button class="btn btn-sm btn-outline-danger">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h3>Current orders:</h3>
      <table class="table table-sm">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <div class="order-number">
            <strong><em>Order Number: 1</em></strong>
            <button class="btn btn-sm btn-outline-danger">x</button>
          </div>
          <tr>
            <td>Margherita</td>
            <td>9"</td>
            <td>1</td>
            <td>8.95</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import NewPizza from './NewPizza.vue'

export default {
  components: {
    ppNewPizza: NewPizza
  }
}
</script>
