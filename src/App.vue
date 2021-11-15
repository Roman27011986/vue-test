<template>
<div id='app'>
  <Container>
  <ApartmentFilterForm 
      class="form"
      @submit="filter"
  />
  </Container>
  <ApartmentsList :items="filteredApartments">
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
  import CustomInput from './components/shared/CustomInput.vue'
  
  export default {
    name:'App',
    components:{
      ApartmentsList,
      ApartmentsItem,
      ApartmentFilterForm,
      Container,
      CustomInput
    },
    data() {
      return { 
        apartments,
        filters:{
          city:'',
          price:0
        }
      }
    },
    computed:{
      filteredApartments(){
        // const reqObject = JSON.parse(JSON.stringify(this.apartments));
        return this.filterByCityName(this.filterByPrice(this.apartments))
      }
    },

    methods:{
      filter({city,price}){
        if (price || city) {
          this.filters.city = city
          this.filters.price = price
        }
      },

      filterByCityName(apartments){
        if (!this.filters.city) return apartments
        
        return apartments.filter(apartment=>{
          return apartment.location.city === this.filters.city
        })
      },

      filterByPrice(apartments){
        if (!this.filters.price) return apartments

        return apartments.filter(apartment=>{
          return apartment.price >= this.filters.price
        })
      },

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
