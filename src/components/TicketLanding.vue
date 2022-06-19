<template>
  <div class="view-container">
    <div class="view" v-for="i in arr" :key="i">
         <h4>Ticket Id: {{i._id}}</h4>
        <h4>Title: {{i.title}}</h4>
         <h4>Discription: {{i.discription}}</h4>
        <h4>Status: {{i.status}}</h4>
         <h4>User Comment: {{i.comment}}</h4>
         <h4>Created at: {{i.createdAt}}</h4>
    </div>
     <button @click="closeTicket">Close Ticket</button>
      <button @click="add(id)">add comment</button>
  </div>
</template>

<script>
export default {
    name:"app",
    data(){
        return{
            arr:[],
            id:""
        }
    },
    created(){
      let d = this.$route.params.id;
      this.id=d;
     // console.log(data)
        this.login(d)
    },
    methods: {
    async login(d) {
      const res = await fetch(
        `http://localhost:4000/ticket/${d}`,
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
     async closeTicket() {
      //console.log(d)
        var { id } = this;
         //console.log(id,"jjjjjjjjjjjjjjjjjjjjjjjjjj")
       const res = await fetch(
        "http://localhost:4000/resolve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
           body: JSON.stringify({
            id
          })
        }
      );
      this.$router.push('/tickets')
      const data = await res.json();
     // console.log(data.data)
      this.arr=data.data;
    },
   add(id){
   // console.log(id,"...................")
        this.$router.push({name:'comment',
        params: { id }});
   }

    },
    
}
</script>


<style>
.view-container{
  padding: 20px;
  width: 600px;
  background-color:  #f2f2f2;
justify-content: center;
 margin-left:auto;
 margin-right:auto;

}
.view{
    margin: 10px;
    text-align:justify;
    
}
button{
  width: 100px;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}


</style>