<template>
  <div class="container">
    <p>{{error}}</p>
    <form @submit.prevent="login">
       <div>
        <label for="email">Email</label>
        <input name="email" v-model="email" placeholder="email" type="text">
      </div>
      <div>
        <label for="password">Password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <input type="submit" value="login">
    </form>
       <router-link to="/signup">sign up</router-link> 
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      email:"",
      password: "",
      error:""
    };
  },
  methods: {
    async login() {
      const { email, password } = this;
      const res = await fetch(
        "http://localhost:4000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );
      const data = await res.json();
     // console.log(data.data.length)
      if(data.data.length!=0){
       // console.log("jsahjashbsnasmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
       sessionStorage.setItem("key", data.data[0].email);
          this.$router.push('/tickets');
      }
      else{
       this.error = 'invalid user name or password';
      }
      console.log(data);
    }
  }
};
</script>

<style>

</style>