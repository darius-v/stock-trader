<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <h1>Trade or View your Portfolio</h1>
      You may save and load your data <br>
      Click on 'End Day' to begin a new Day! <br><br>

      Your Funds: {{ funds }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      funds: this.$store.getters.getFunds // todo should this not update automatically on setting new value in store?
    }
  }
}
</script>
