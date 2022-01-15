<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Stocks</h1>


      <div class="panel panel-default col-md-6" v-for="stock in availableStocks">
        <div class="panel-body">
          {{ stock.name }}: {{ stock.price}}
          <input type="number" v-model="stock.amountToChange">
          <button @click="buy(stock)">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import stocks from "../stocks";

export default {
  data() {
    return {

    }
  },

  computed: {
    availableStocks: function () {

      let availableStocks = stocks;

      availableStocks.forEach(function (stock) {
        stock.amountToChange = 0; // this still sets this property to the array we imported
      })
      return availableStocks;
    }
  },

  methods: {
    buy(stock) {
      const cost = stock.amountToChange * stock.price;
      this.$store.commit('reduceFunds', cost);
      this.$store.commit('changeStockQuantity', stock);
    }
  }
}
</script>
