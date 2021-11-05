<template>
<div id='app'>
  <ApartmentItem
    :descr="apartment.descr"
    :price="apartment.price"
    :rating="apartment.rating"
    imgSrc="https://pix10.agoda.net/hotelImages/118/118497/118497_14042416290019189727.jpg?s=1024x768"
  />
</div>
</template>

<script>
  import ApartmentItem from './components/apartment/ApartmentsItem.vue'
  export default {
    name:'App',
    components:{
      ApartmentItem
    },
    data(){
      return{
        apartment:{
          id:'qkjmkvnowqeqwejqe123ijdij',
          title:'Prada',
          descr:'Devils qqqqqqqqqqqqqqqqqqqqqqqqq',
          price:20001,
          rating:3.5,
          location:{
            city:'Mariupol',
          },
          owner:{
            name:'Roman',
            phone:'097-052-11-80',
            email:'didorsn@gmail.com',
          },
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
   #app {
     font-family: Rubik;
   }
</style>
