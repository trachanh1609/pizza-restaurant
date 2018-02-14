<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Pizza Type</th>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr v-for="option in item.options">
            <td><strong>{{ item.name }}</strong></td>
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td class="text-center"><button class="btn btn-sm btn-outline-success"
              type="button"
              @click="addToBasket(item, option)">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-sm-12 col-md-6">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td>
              <button class="btn btn-sm" type="button">-</button>
              <span>1-</span>
              <button class="btn btn-sm" type="button">+</button>
            </td>
            <td>Margherita</td>
            <td>9.43</td>
          </tr>
        </tbody>
      </table>
      <p>Order total: </p>
      <button class="btn btn-success btn-block">Place order</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        basket:[],
        getMenuItems: {
              1: {
                'name': 'Margherita',
                'description': 'A delicious tomato based pizza topped with mozzarella',
                'options': [{
                  'size': 9,
                  'price': 6.95
                }, {
                  'size': 12,
                  'price': 10.95
                }]
              },
              2: {
                'name': 'Pepperoni',
                'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                'options': [{
                  'size': 9,
                  'price': 7.95
                }, {
                  'size': 12,
                  'price': 12.95
                }]
              },
              3: {
                'name': 'Ham and Pineapple',
                'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                'options': [{
                  'size': 9,
                  'price': 7.95
                }, {
                  'size': 12,
                  'price': 12.95
                }]
              }
        }
      }
    },
    methods: {
      addToBasket(item, option){
        this.basket.push({
            name: item.name,
            price: option.price,
            size: option.size,
            quatity: 1
          })
      }
    }
  }
</script>

<style>

</style>
