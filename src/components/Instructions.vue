<template>
    <div v-for="instruction in $store.state.meal.meals" :key="instruction.strId">
        <img :src="instruction.strMealThumb" alt="NOT LOADED">
   <h1> Instruction to make {{instruction.strMeal}}</h1>
     <p>{{instruction.strInstructions}}</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
h1{
     text-transform: capitalize;
}
p{
    color: white;
    margin-left: 50px;
    margin-right: 50px;
   
}
</style>