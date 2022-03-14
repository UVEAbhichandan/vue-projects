<template>
    <div class="searchview">
   <router-link to="/instructions"><Card :mealValue="$store.state.meal.meals" /></router-link>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
    export default {
        components:{
            Card
        }
    }
</script>

<style  scoped>
  .searchview{
      margin-left: auto; 
      margin-right: auto;
  }
</style>