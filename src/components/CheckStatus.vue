<template>
  <div class="container">
    <form @submit.prevent="login">
       <div>
        <label for="ticket-id">Ticket Id</label>
        <input name="id" v-model="id" placeholder="id" type="text">
      </div>

      <input type="submit" value="Check Status">
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
     id:""
    };
  },
 
  methods: {
    async login() {
        const {id} =this;
      this.$router.push({name:'view-ticket',
        params: { id }});
    }
  }
};
</script>

<style>

</style>