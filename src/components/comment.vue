<template>
  <div class="container">
    <form @submit.prevent="login">
       <div>
        <label for="comment">Comment</label>
        <textarea name="comment" v-model="comment" placeholder="comment" type="text"></textarea>
      </div>

      <input type="submit" value="comment">
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    id:"",
     comment:""
    };
  },
  mounted(){
      let lastname = sessionStorage.getItem("key");
      console.log(lastname)
      if(!lastname){
          this.$router.push('/login')
      }

    },
  created (){
        let d = this.$route.params.id;
        this.id= d;
  },
   methods: {
    async login() {
      const {id,  comment } = this;
      const res = await fetch(
        "http://localhost:4000/comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id,
            comment
          })
        }
      );
      const data = await res.json();

      //this.id="ndndm"
      if(data.data.length!=0){
         this.$router.push('/tickets')
      }
      console.log(data.data._id);
    }
  }
};
</script>

<style>
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