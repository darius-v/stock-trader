

<script>
// todo maybe this is not needed? on menu click will call store probably
export default {
  data() {
    return {
      // funds: this.$store.getters.getFunds
    }
  },
  methods: {
    save() {
      let data = {
        funds: this.store.getFunds
      }
      // this.$http.post('localhost:8000/save-state', data);
    }
  }

}
</script>
