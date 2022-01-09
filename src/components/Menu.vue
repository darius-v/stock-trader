<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <router-link class="navbar-brand" to="/">Stock trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link
              to="/portfolio"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
          >
            <li
                :class="[isActive && 'active']"
            >
              <a :href="href" @click="navigate">Portfolio</a>
            </li>
          </router-link>

          <router-link
              to="/stocks"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
          >
            <li
                :class="[isActive && 'active']"
            >
              <a :href="href" @click="navigate">Stocks</a>
            </li>
          </router-link>

        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End day</a></li>
          <li class="dropdown" @click="toggle">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"

            >
              Save and load <span class="caret"></span>
            </a>
            <ul :class="['dropdown-menu', showDropdown]">
              <li><a href="#" @click="save">Save</a></li>
              <li><a href="#" @click="load">Load</a></li>
            </ul>
          </li>
          <li><a href="#">Funds {{ funds }}</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>

import SaveLoad from "./SaveLoad.vue";

export default {

  components: {SaveLoad},

  data() {
    return {
      showDropdown: ''
    }
  },
  computed: {
    funds() {
      return this.$store.getters.getFunds;
    }
  },
  methods: {
    toggle() {
      if (this.showDropdown === '') {
        this.showDropdown = 'show';
      } else {
        this.showDropdown = '';
      }
    },
    load() {
      this.$store.dispatch('load');
    },
    save() {
      this.$store.dispatch('save');
    }
  }
}
</script>
