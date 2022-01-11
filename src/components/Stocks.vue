<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Stocks</h1>


        <div class="panel panel-default col-md-6" v-for="stock in availableStocks">
          <div class="panel-body">
            {{ stock.name }}: {{ stock.price}}
            <input type="number" v-model="stock.amountToBuy">
            <button @click="buy(stock)">Buy</button>
          </div>
        </div>

<!--      <div class="col col-md-6">test</div>-->
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
        stock.amountToBuy = 0;
      })
      return availableStocks;
    }
  },

  methods: {
    buy(stock) {
      const cost = stock.amountToBuy * stock.price;
      this.$store.commit('reduceFunds', cost);
    }
  }
}
</script>
