<template>
    <div class="container">

      <Menu></Menu>
<!--      <Home></Home>-->

      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>

    </div>


</template>

<script>

    import Menu from './components/Menu.vue';
    import Home from './components/Home.vue';

    export default {
      components: {
        Menu, Home
      },
    }
</script>

<style>

</style>
