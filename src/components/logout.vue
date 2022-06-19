<template>
  <h1>js</h1>
</template>

<script>
export default {
    name:"app",
    data(){

    },
    mounted(){
      let lastname = sessionStorage.getItem("key");
      console.log(lastname)
      
         sessionStorage.removeItem("key");
         this.$router.push('/login')

      
    }
}
</script>

<style>

</style>