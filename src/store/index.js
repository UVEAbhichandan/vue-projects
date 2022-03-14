import { createStore } from 'vuex'

export default createStore({
 
  state: {
    meal:[],
    searchedMeal:'',
  

  },
  mutations: {

    search(state,mealValue){
    state.meal=mealValue
    state.searchedMeal=''
   },
   

  },
  actions: {

    search(){
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.searchedMeal}`)
       .then(response=>response.json())
       .then(data=>
        {
         console.log(data)
        this.commit('search',data)
        })
    },
    
   
     
  },
  getters:{
     
  },
  modules: {
          
  }
})
// INFORMATION REGARDING VUE STORE ANS ITS STRUCTURE
// vuex makes parent-child and child-parent data exchange simple .
 // [state] is were are data is stored
  // [mutation] is where we declare methods and can change the state from here 
  //but no async(api) code allowed. we call commit mutations
  //[actions] is also method where it can't change data in state
  // but can acess it and can have async code(mutation can also be called from here to change data in state)
  // we call dispatch actions.
  // [getter] can be used to get data from state which can be taken directly from state also.
  //It can be used to transform or filter data in state and make that available to other components
  // [modules] it breakes a store into modules 
  // which can have its own state mutations....... available to components
  // don't use commit on inline elements but use dispatch