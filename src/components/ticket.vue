<template>
<div class="card">
  <div class="card-container" v-for="(item,i) in arr" :key=i>
    <h4><b>Title</b></h4>
    <p>{{item.title}}</p>
     <h4>Status:</h4>
    <p>  {{item.status}}</p>
    <!-- <a href="http://google.com">view</a> -->
    <button @click="view(item._id)">view</button>
    </div>
</div>
</template>

<script>
export default {
    name:"app",

    data(){
        return{
            arr:[]
        }
    },
    mounted(){
      let lastname = sessionStorage.getItem("key");
      console.log(lastname)
      if(!lastname){
          this.$router.push('/login')
      }

    },
    created(){
        this.login();
    },
    methods: {
    async login() {
      const res = await fetch(
        "http://localhost:4000/ticket",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await res.json();
     // console.log(data.data)
      this.arr=data.data;
    },
    view(id){
        this.$router.push({name:'view-ticket',
        params: { id }});
      console.log(id)

    }
  }


}
</script>

<style>
.card {
  /* Add shadows to create the "card" effect */
  width: 100%;
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
}



/* Add some padding inside the card container */
.card-container {
  padding: 6px 16px;
  max-width: 420px;
  object-fit: contain;
  word-wrap: break-word;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
   cursor: pointer;
   min-width: 400px;
   margin: 9px;
}

/* On mouse-over, add a deeper shadow */
.card-container:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>