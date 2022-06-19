<template>
  <div class="home">
    <HelloWorld msg="Welcome to ticketing system"/>
     <router-link to="/login">login</router-link> 
     <br>
     <br>
      <router-link to="/open-ticket">open ticket</router-link> 
       <br>
     <br>
       <router-link to="/status">check status</router-link> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
