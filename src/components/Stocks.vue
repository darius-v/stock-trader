<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Stocks</h1>


        <div class="panel panel-default col-md-6" v-for="stock in availableStocks">
          <div class="panel-body">
            {{ stock.name }}: {{ stock.price}}
            <input type="number" v-model="stock.name">
            <button @click="buy(stock.name)">Buy</button>
          </div>
        </div>

<!--      <div class="col col-md-6">test</div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      availableStocks: [
        {name: 'Apple', price: 10000 },
        {name: 'BMW', price: 10000 },
        {name: 'FB', price: 300 },
        {name: 'O', price: 60 }
      ]
    }
  },

  methods: {
    buy(name) {
      // todo get amount of stock - - maybe somehow pass as paremeter to buy funciton- but how?
      let amount = this.name;
      console.log(amount);
    }
  }
}
</script>
