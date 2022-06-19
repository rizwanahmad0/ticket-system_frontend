<template>
  <div class="container">
    <form @submit.prevent="login">
      
       <div>
        <label for="email">Email</label>
        <input name="email" v-model="email" placeholder="email" type="text">
      </div>
        <div>
        <label for="title">Title</label>
        <input name="title" v-model="title" placeholder="title" type="text">
      </div>
         <div>
        <label for="discription">Discription</label>
        <textarea name="discription" v-model="discription" placeholder="discription" type="text"></textarea>
      </div>
      <input type="submit" value="Open">
    </form>
   <p v-show="value">please note this ticket id for status: {{id}}</p>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      id:"",
      email:"",
      title: "",
      discription:"",
      value:false
    };
  },
  methods: {
    async login() {
      const {  email, title,discription } = this;
      const res = await fetch(
        "http://localhost:4000/ticket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            title,
            discription
          })
        }
      );
      const data = await res.json();
      //this.id="ndndm"
      if(data.data){
        this.value=true;
        this.id=data.data._id
      }
     this. id="",
     this. email="",
      this.title= "",
      this.discription="",
      console.log(data.data._id);
    }
  }
};
</script>
<style scoped>
textarea{
  height: 134px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

}


</style>