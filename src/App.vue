<template>
<div id="content">
  <img alt="Vue logo" src="./assets/tastymeal.jpg" >
  
  <h1>MEAL-RECIPE</h1>
  <div class="search"><Search /></div>
  
 <router-link to="/">Home</router-link><br><br>
  <div class="nav">
     <router-view />
  </div>
    
  </div>   
</template>

<script>

import Search from '../src/components/Search.vue'


export default {
  name: 'App',
  components: {
     Search,
  } ,
   data(){
    return {
     b:100
    }
  },
  beforeCreate(){
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response)=>response.json())
        .then((data)=>this.$store.state.meal=data)

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
img{
  width: 430px;
  height: 200px;
}
h1{
  color: orange;
  text-align: center;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.nav{
  margin-left: auto;
   margin-right: auto;
}
.search{
  position: absolute;
  top: 10px;
        right: 15px;
}

</style>
