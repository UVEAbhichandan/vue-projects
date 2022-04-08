<template>
    <div>  
        <form @submit.prevent="$store.dispatch('search')">
         <img src="../assets/chef.jpg" alt="Not Loaded" id="chef">
       <input type="text " v-model="$store.state.searchedMeal"> &nbsp;
       <router-link to="/searchview"> <button  
       class="btn btn-primary" @click="$store.dispatch('search')">
       search
       </button>
       </router-link> &nbsp;
      
       </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
button{
    height: 35px;
}
#chef{
    
        height: 80px;
        width: 80px;
        margin-left: 0px;
} 
</style>