<template>
  <div class="hello">
   <router-link to="/instructions"><Card :mealValue="$store.state.meal.meals" /></router-link>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'HelloWorld',
  components:{
    Card
  }
 ,
 methods:{
   
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  margin-left: auto;
   margin-right: auto;
}
</style>
