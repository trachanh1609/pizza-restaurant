<template>
  <form action="">
    <div class="card">
      <div class="card-header">
        <h3>Add new Pizza to menu</h3>
      </div>
      <div class="card-body">
        <div class="form-group row">
          <label for="" class="col-sm-3">Name</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="newPizza.name"/>
          </div>
        </div>

        <div class="form-group row">
          <label for="" class="col-sm-3">Description</label>
          <div class="col-sm-9">
            <textarea type="text" class="form-control" row="5" v-model="newPizza.description"></textarea>
          </div>
        </div>

        <p><strong>Option 1:</strong></p>
        <div class="form-group row">
          <label for="" class="col-sm-3">Size (")</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="newPizza.options[0].size"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3">Price</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="newPizza.options[0].price"></input>
          </div>
        </div>

        <p><strong>Option 2:</strong></p>
        <div class="form-group row">
          <label for="" class="col-sm-3">Size (")</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="newPizza.options[1].size"></input>
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-3">Price</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" v-model="newPizza.options[1].price"></input>
          </div>
        </div>

        <div class="form-group row">
          <button type="button" class="btn btn-success btn-block" @click="addMenuItem()">Add</button>
        </div>

      </div>
    </div>


  </form>
</template>

<script>

  import { dbMenuRef} from '../firebaseConfig'

  export default {
    data(){
      return {
        newPizza: {
          'name': 'Eg. Margherita',
          'description': 'Eg. A delicious tomato based pizza topped with mozzarella',
          'options': [{
            'size': 9,
            'price': 6.95
          }, {
            'size': 12,
            'price': 10.95
          }]
        }
      }
    },
    methods: {
      addMenuItem() {
        dbMenuRef.push(this.newPizza);
      }
    }
  }
</script>
