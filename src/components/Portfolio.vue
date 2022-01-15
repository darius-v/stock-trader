<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Portfolio</h1>
      <div class="panel panel-default col-md-6" v-for="stock in portfolioStocks">
        <div class="panel-body">

        <div class="panel panel-default">
          <div class="panel-heading">

            {{ stock.name }} Price: {{ stock.price}} Quantity: {{ stock.amount }}
          </div>
          <div class="panel-body">
            <input type="number" v-model="stock.amountToChange">
            <button @click="sell(stock)">Sell</button>
          </div>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {

  computed: {
    portfolioStocks: function () {

      let portfolioStocks = this.$store.getters.getStocks;

      portfolioStocks.forEach(function (stock) {
        stock.amountToChange = 0;
      })
      return portfolioStocks;
    }
  },
  methods: {
    sell(stock) {
      stock.amountToChange = - stock.amountToChange;
      const cost = stock.amountToChange * stock.price;
      this.$store.commit('reduceFunds', cost);
      this.$store.commit('changeStockQuantity', stock);
    }
  }
}
</script>
