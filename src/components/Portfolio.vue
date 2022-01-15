<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Portfolio</h1>
<!--      <div class="panel panel-default col-md-6" v-for="stock in portfolioStocks">-->
<!--        <div class="panel-body">-->
<!--          {{ stock.name }}: {{ stock.price}} {{ stock.amount }}-->
<!--          <input type="number" v-model="stock.amountToSell">-->
<!--          <button @click="sell(stock)">Sell</button>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import stocks from "../stocks";

export default {


  computed: {
    portfolioStocks: function () {

      let portfolioStocks = this.$store.getters.getStocks;

      portfolioStocks.forEach(function (stock) {
        stock.amountToSell = 0;
      })
      return portfolioStocks;
    }
  },
  methods: {
    sell(stock) {
      const cost = stock.amountToSell * stock.price;
      this.$store.commit('reduceFunds', -cost);
      this.$store.commit('addStockQuantity', stock);
    }
  }
}
</script>
