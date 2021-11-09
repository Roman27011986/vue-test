<template>
<div id='app'>
  <Container>
  <ApartmentFilterForm 
  class="form"
  @submit="logger"
  />
  </Container>
  <ApartmentsList :items="apartments">
  <template v-slot:apartment="{apartment}">
    <ApartmentsItem 
       :key="apartment.id"
       :descr="apartment.descr"
       :rating="apartment.rating"
       :imgSrc="apartment.imgUrl"
       :price="apartment.price"
       class="apartments-list__item"
      /> 
  </template>
  </ApartmentsList>
</div>
</template>

<script>
  import ApartmentsItem from './components/apartment/ApartmentsItem.vue'
  import ApartmentsList from './components/apartment/ApartmentsList.vue'
  import apartments from './components/apartment/apartmens'
  import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue'
  import Container from './components/shared/container.vue'
  
  export default {
    name:'App',
    components:{
      ApartmentsList,
      ApartmentsItem,
      ApartmentFilterForm,
      Container
    },
    data(){
      return{
        apartments,

      }
    },
    methods:{
      logger(v){
        console.log(v);
      }
    }
  }
</script>

<style lang="scss" scoped>
   #app {
     font-family: Rubik;
   }
   .form{
     display: flex;
 }
</style>
