<template>
<div id='app'>
  <ApartmentsList :items="apartments"/>
</div>
</template>

<script>
  import ApartmentsList from './components/apartment/ApartmentsList.vue'
  import apartments from './components/apartment/apartmens'
  export default {
    name:'App',
    components:{
      ApartmentsList
    },
    data(){
      return{
        apartments,
        // apartment:{
        //   id:'qkjmkvnowqeqwejqe123ijdij',
        //   title:'Prada',
        //   descr:'Devils qqqqqqqqqqqqqqqqqqqqqqqqq',
        //   price:20001,
        //   rating:3.5,
        //   location:{
        //     city:'Mariupol',
        //   },
        //   owner:{
        //     name:'Roman',
        //     phone:'097-052-11-80',
        //     email:'didorsn@gmail.com',
        //   },
        // }
      }
    }
  }
</script>

<style lang="scss" scoped>
   #app {
     font-family: Rubik;
   }
</style>
