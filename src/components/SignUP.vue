<template>
  <div class="container">
    <p v-show="show">{{error}}</p>
    <form @submit.prevent="login">
      <div>
        <label for="username">Name</label>
        <input name="username" v-model="name" placeholder="name" type="text">
      </div>
       <div>
        <label for="email">Email</label>
        <input name="email" v-model="email" placeholder="email" type="text">
      </div>
      <div>
        <label for="password">Password</label>
        <input name="password" v-model="password" placeholder="password" type="password">
      </div>
      <input type="submit" value="Register">
    </form>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      email:"",
      password: "",
      error:"",
      show:false
    };
  },
  methods: {
    async login() {
      const { name, email, password } = this;
      const res = await fetch(
        "http://localhost:4000/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      );
    
      const data = await res.json();
        if(data.data.length!=0){
            this.$router.push('/login')
        }
        else{
          this.show=true;
          this.error="password should be min 8 char"
        }
      console.log(data);
    }
  }
};
</script>
<style scoped>


</style>