<template>
    <div class="card" v-for="meal in mealValue" :key="meal">
       <div class="card-body">
       <div class="card-text">
        <img :src="meal.strMealThumb" alt="Not loaded"><br>
           MealId: {{meal.idMeal}} <br>
        Meal Name :{{meal.strMeal}}<br>
       Meal Category: {{meal.strCategory}} <br>
        Meal Making Video :<a :href="meal.strYoutube">{{meal.strMeal}} LINK</a> <br>
       <sub> *click on the recipe to see instructions to make recipe</sub>
       </div>
  </div>
    </div>
</template>

<script>
    export default {
      props:['mealValue'],
      }
</script>

<style scoped>
.card{
  background-color:yellow;
  width: 500px;
  text-align: center;
  margin-bottom: 30px;
  
}
.card img{
  height: 190px;
  width: 220px;
}
.card-text{
  text-decoration: none;
}
</style>