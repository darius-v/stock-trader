<template>
    <div class="container">

      <Menu></Menu>
      <div class="panel panel-default">
        <div class="panel-body">
          <h1>Trade or View your Portfolio</h1>
          You may save and load your data <br>
          Click on 'End Day' to begin a new Day! <br><br>

          Your Funds: 10000
        </div>
      </div>

    </div>


</template>

<script>

    import Menu from './components/Menu.vue';

    export default {
      components: {
        Menu
      },
    }
</script>

<style>

</style>
