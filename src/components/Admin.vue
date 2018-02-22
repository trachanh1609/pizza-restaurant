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
        <tbody v-for="item in getMenuItems" :key="item['.key']">
          <tr>
            <td>{{ item.name }}</td>
            <td><button class="btn btn-sm btn-outline-danger">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <h3>Current orders : {{numberOfOrders}}</h3>
      <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
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
            <strong><em>Order Number: {{index +1 }}</em></strong>
            <button class="btn btn-sm btn-outline-danger">x</button>
          </div>
          <tr v-for="orderItems in orders['.value']">
            <td>{{orderItems.name}}</td>
            <td>{{orderItems.size}}"</td>
            <td>{{orderItems.quantity}}</td>
            <td>{{orderItems.price}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <hr>
  <div class="row">
    <div class="col-sm-12 col-lg-6">
      <pp-login/>
    </div>
  </div>
</div>
</template>

<script>
import NewPizza from './NewPizza.vue'
import Login from './Login.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    ppNewPizza: NewPizza,
    ppLogin: Login
  },
  data() {
    return {
      name: 'Admin'
    }
  },
  computed: {
    // getMenuItems() {
    //   return this.$store.state.menuItems ;
    // },
    // numberOfOrders() {
    //   return this.$store.getters.numberOfOrders
    // }
    ...mapGetters ([
      'numberOfOrders',
      'getMenuItems',
      'getOrders'
    ])
  },
  beforeRouteEnter: (to, from, next) => {

    next( vm => {
      alert('Hi ' + vm.name);
    })
  }
}
</script>
